'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const VERTEX = `
  uniform float uTime;
  varying float vHeight;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float w1 = sin(pos.x * 0.6 + uTime * 0.5) * 0.55;
    float w2 = sin(pos.z * 0.45 + uTime * 0.35) * 0.4;
    float w3 = sin((pos.x + pos.z) * 0.22 + uTime * 0.7) * 0.3;
    float w4 = cos(pos.x * 0.9 - uTime * 0.25) * sin(pos.z * 0.6 + uTime * 0.45) * 0.25;
    float w5 = sin(pos.x * 1.3 + pos.z * 0.4 + uTime * 0.9) * 0.15;

    pos.y += w1 + w2 + w3 + w4 + w5;
    vHeight = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT = `
  varying float vHeight;
  varying vec2 vUv;

  void main() {
    float h = smoothstep(-1.0, 1.8, vHeight);

    vec3 purple = vec3(0.29, 0.0, 0.88); 
    vec3 blue   = vec3(0.0, 0.27, 1.0);  
    vec3 cyan   = vec3(0.0, 0.9, 1.0);   

    float px = vUv.x * 1.2 + h * 0.25;

    vec3 color;
    if (px < 0.5) {
      color = mix(purple, blue, px / 0.5);
    } else {
      color = mix(blue, cyan, (px - 0.5) / 0.5);
    }

    color += vec3(0.08, 0.1, 0.15) * h;

    float edgeX = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x);
    float edgeY = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    float fade = edgeX * edgeY;

    float alpha = fade * (0.45 + h * 0.4);

    gl_FragColor = vec4(color, alpha);
  }
`;

function GradientWave() {
  const ref = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI * 0.42, 0, 0]} position={[0, -0.6, 0]}>
      <planeGeometry args={[28, 28, 280, 280]} />
      <shaderMaterial
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.15;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current.y + 2.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function PresenceWave() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 2.5, 5.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <CameraRig />
        <GradientWave />
      </Canvas>
    </div>
  );
}
