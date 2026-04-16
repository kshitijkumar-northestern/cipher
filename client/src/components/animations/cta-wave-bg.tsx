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

    float w1 = sin(pos.x * 0.8 + uTime * 0.7) * 0.6;
    float w2 = sin(pos.z * 0.6 + uTime * 0.5) * 0.45;
    float w3 = sin((pos.x + pos.z) * 0.3 + uTime * 1.0) * 0.35;
    float w4 = cos(pos.x * 1.1 - uTime * 0.4) * sin(pos.z * 0.8 + uTime * 0.6) * 0.3;
    float w5 = sin(pos.x * 1.5 + pos.z * 0.5 + uTime * 1.2) * 0.2;

    pos.y += w1 + w2 + w3 + w4 + w5;
    vHeight = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT = `
  uniform float uTime;
  varying float vHeight;
  varying vec2 vUv;

  void main() {
    float h = smoothstep(-1.2, 2.0, vHeight);

    vec3 white     = vec3(1.0, 1.0, 1.0);
    vec3 darkBlue  = vec3(0.0, 0.1, 0.4);  
    vec3 blue      = vec3(0.0, 0.27, 1.0); 
    vec3 midCyan   = vec3(0.0, 0.5, 0.9); 
    vec3 cyan      = vec3(0.0, 0.7, 0.9);  
    vec3 lightCyan = vec3(0.0, 0.8, 1.0);  

    float px = vUv.x * 1.3 + h * 0.3;

    vec3 color;
    
    if (px < 0.10) {
      color = mix(darkBlue, blue, px / 0.10); 
    } else if (px < 0.15) {
      color = mix(blue, white, (px - 0.10) / 0.05); 
    } else if (px < 0.20) {
      color = mix(white, blue, (px - 0.15) / 0.05); 
    } else if (px < 0.55) {
      color = blue; 
    } else if (px < 0.80) {
      color = mix(blue, midCyan, (px - 0.55) / 0.25); 
    } else if (px < 0.93) {
      color = mix(midCyan, cyan, (px - 0.80) / 0.13); 
    } else {
      color = mix(cyan, lightCyan, (px - 0.93) / 0.07); 
    }

    float shine = smoothstep(0.0, 1.5, vHeight);
    color += vec3(0.4, 0.9, 1.0) * shine * 0.5;

    float glint = pow(max(0.0, sin(vUv.x * 10.0 - uTime * 1.5 + vHeight * 2.0)), 10.0);
    color += vec3(1.0, 1.0, 1.0) * glint * 0.5;

    float alpha = 0.85 + h * 0.15;

    gl_FragColor = vec4(color, alpha);
  }
`;

function Wave() {
  const ref = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI * 0.45, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[32, 32, 300, 300]} />
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

function Cam() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current.y + 1.8 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function CTAWaveBg() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 1.8, 3.5], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <Cam />
        <Wave />
      </Canvas>
    </div>
  );
}
