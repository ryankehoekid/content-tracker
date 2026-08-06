// The seeing-stone, real 3D. A glass sphere raytraced in a fragment shader:
// volumetric fire (fbm noise marched through the sphere's interior), limb
// darkening, fresnel rim, off-center specular window, and a red seat of
// light beneath. Pointer moves the view slightly; agitation stirs the storm.
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { REDUCED_MOTION } from "../core/config.js";

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uAgitation;
uniform vec2 uTilt;

// hash + 3D value noise + fbm
float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec3(1.7);
    a *= 0.5;
  }
  return v;
}

void main() {
  // screen-space ray toward a unit sphere at origin
  vec2 p = vUv * 2.0 - 1.0;
  float storm = 1.0 + uAgitation * 1.8;
  float t = uTime * 0.14 * storm;

  float r2 = dot(p, p);
  vec3 col = vec3(0.0);
  float alpha = 0.0;

  // seat glow + aura outside the sphere
  float d = sqrt(r2);
  if (d > 0.86) {
    float aura = smoothstep(1.34, 0.86, d) * (0.05 + uAgitation * 0.05);
    float seat = smoothstep(1.5, 0.9, length(vec2(p.x, (p.y + 1.06) * 2.6))) * 0.24;
    col += vec3(0.88, 0.08, 0.08) * (aura + seat);
    alpha = max(aura + seat, 0.0) * 2.2;
  }

  if (r2 < 0.86 * 0.86) {
    float R = 0.86;
    float z = sqrt(R * R - r2);
    vec3 N = normalize(vec3(p, z));
    vec3 V = vec3(0.0, 0.0, 1.0);

    // slight parallax from the pointer
    vec3 off = vec3(uTilt * 0.3, 0.0);

    // march the fire through the glass interior
    vec3 ro = vec3(p, z);
    vec3 rd = vec3(0.0, 0.0, -1.0);
    float fire = 0.0;
    float hot = 0.0;
    for (int i = 0; i < 14; i++) {
      float fi = float(i) / 14.0;
      vec3 sp = ro + rd * (z * 2.0 * fi);
      // swirl: rotate sample space around y over depth and time
      float an = t * 0.7 + sp.y * 1.2;
      float cs = cos(an), sn = sin(an);
      vec3 q = vec3(cs * sp.x - sn * sp.z, sp.y + t * 0.12, sn * sp.x + cs * sp.z);
      float n = fbm(q * 2.6 + off + vec3(0.0, -t * 0.5, 0.0));
      // density concentrates toward the core
      float core = 1.0 - length(sp) / R;
      float dens = smoothstep(0.42, 0.95, n) * core * core;
      fire += dens * 0.16;
      hot += smoothstep(0.62, 0.98, n) * core * core * core * 0.22;
    }
    fire *= 0.75 + uAgitation * 0.7;
    hot *= 0.75 + uAgitation * 0.9;
    // flicker under high agitation
    if (uAgitation > 0.7) {
      float fl = 0.9 + 0.1 * sin(uTime * 21.0) * sin(uTime * 13.7);
      fire *= fl; hot *= fl;
    }

    // fire palette: deep red > signal red > ember > near white
    vec3 fireCol = vec3(0.45, 0.02, 0.02) * fire
      + vec3(0.88, 0.08, 0.08) * fire * fire * 1.6
      + vec3(1.0, 0.42, 0.25) * hot
      + vec3(1.0, 0.9, 0.82) * hot * hot * 0.9;

    // glass body: near-black base
    vec3 body = vec3(0.012, 0.008, 0.009);

    // limb darkening: interior fades toward the silhouette edge
    float limb = smoothstep(0.30, 0.98, d / R);
    fireCol *= 1.0 - limb * 0.9;

    // fresnel rim
    float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    vec3 rim = vec3(0.9, 0.12, 0.08) * fres * (0.35 + uAgitation * 0.25);
    // cold rim on the upper left
    float cold = fres * max(dot(normalize(N.xy), normalize(vec2(-0.7, 0.75))), 0.0);
    rim += vec3(0.9, 0.88, 0.85) * cold * 0.18;

    // specular window, upper left
    vec3 L = normalize(vec3(-0.55, 0.62, 0.62));
    float spec = pow(max(dot(reflect(-L, N), V), 0.0), 60.0);
    float glaze = pow(max(dot(reflect(-L, N), V), 0.0), 8.0);
    vec3 specCol = vec3(1.0, 0.98, 0.95) * spec * 0.9 + vec3(1.0, 0.97, 0.93) * glaze * 0.08;

    col = body + fireCol + rim + specCol;
    alpha = 1.0;
  }

  // soft edge antialias on the silhouette
  float edge = smoothstep(0.875, 0.855, d);
  if (d <= 0.9 && d > 0.855) {
    alpha = max(alpha * edge, alpha * 0.0);
  }

  gl_FragColor = vec4(col, alpha);
}
`;

export default function PalantirOrb({ agitation = 0.3 }) {
  const mountRef = useRef(null);
  const uniformsRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      return; // no WebGL: the CSS glow behind still reads as a stone
    }
    const size = () => Math.min(mount.clientWidth || 340, 480);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(size(), size());
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTime: { value: Math.random() * 40 },
      uAgitation: { value: agitation },
      uTilt: { value: new THREE.Vector2(0, 0) },
    };
    uniformsRef.current = uniforms;
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms, transparent: true,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(quad);

    const tiltTarget = new THREE.Vector2(0, 0);
    const onPointer = (e) => {
      const rect = mount.getBoundingClientRect();
      tiltTarget.set(
        ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        ((e.clientY - rect.top) / rect.height - 0.5) * -2
      );
    };
    const onLeave = () => tiltTarget.set(0, 0);
    window.addEventListener("pointermove", onPointer, { passive: true });
    mount.addEventListener("pointerleave", onLeave);

    let raf = null;
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      uniforms.uTime.value += dt;
      uniforms.uTilt.value.lerp(tiltTarget, 0.04);
      renderer.render(scene, camera);
    };
    if (REDUCED_MOTION) {
      frame(performance.now());
    } else {
      const loop = (now) => { frame(now); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    }
    const onResize = () => { renderer.setSize(size(), size()); };
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      mount.removeEventListener("pointerleave", onLeave);
      mount.removeChild(renderer.domElement);
      quad.geometry.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  // agitation changes without tearing down the GL context
  useEffect(() => {
    if (uniformsRef.current) uniformsRef.current.uAgitation.value = agitation;
  }, [agitation]);

  return <div ref={mountRef} className="orb-gl" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />;
}
