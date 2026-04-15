'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function createArc(lat1: number, lng1: number, lat2: number, lng2: number, radius: number, segments = 64) {
  const toVec = (lat: number, lng: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  const start = toVec(lat1, lng1);
  const end = toVec(lat2, lng2);
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.3);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return curve.getPoints(segments);
}

function latLngToVec(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const LOCATIONS = [
  { name: 'United States', lat: 37.7749, lng: -122.4194 },
  { name: 'Canada', lat: 43.6532, lng: -79.3832 },
  { name: 'India', lat: 19.076, lng: 72.8777 },
  { name: 'Australia', lat: -33.8688, lng: 151.2093 },
];

const ARCS = [
  [0, 1], [0, 2], [0, 3], [1, 2], [2, 3],
];

function GlobeSphere() {
  const globeRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const R = 2;

  const dots = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 2000;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      pts.push(new THREE.Vector3(
        R * Math.sin(phi) * Math.cos(theta),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.sin(theta)
      ));
    }
    return pts;
  }, []);

  const dotPositions = useMemo(() => {
    const arr = new Float32Array(dots.length * 3);
    dots.forEach((d, i) => { arr[i * 3] = d.x; arr[i * 3 + 1] = d.y; arr[i * 3 + 2] = d.z; });
    return arr;
  }, [dots]);

  const markers = useMemo(() => LOCATIONS.map((l) => latLngToVec(l.lat, l.lng, R)), []);

  const arcLines = useMemo(() =>
    ARCS.map(([a, b]) => {
      const pts = createArc(LOCATIONS[a].lat, LOCATIONS[a].lng, LOCATIONS[b].lat, LOCATIONS[b].lng, R);
      return new THREE.BufferGeometry().setFromPoints(pts);
    }),
  []);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  const wireColor = dark ? '#333' : '#ddd';
  const dotColor = dark ? '#555' : '#bbb';
  const markerColor = '#2997FF';
  const arcColor = dark ? '#2997FF' : '#2997FF';

  return (
    <group ref={globeRef}>
      
      <mesh>
        <sphereGeometry args={[R, 36, 36]} />
        <meshBasicMaterial color={wireColor} wireframe transparent opacity={dark ? 0.15 : 0.3} />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={dots.length} array={dotPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.012} color={dotColor} transparent opacity={dark ? 0.5 : 0.4} sizeAttenuation />
      </points>

      {markers.map((pos, i) => (
        <mesh key={LOCATIONS[i].name} position={pos}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={markerColor} />
        </mesh>
      ))}

      {markers.map((pos, i) => (
        <mesh key={`ring-${i}`} position={pos} rotation={[Math.atan2(pos.y, Math.sqrt(pos.x * pos.x + pos.z * pos.z)), Math.atan2(-pos.x, -pos.z), 0]}>
          <ringGeometry args={[0.06, 0.09, 32]} />
          <meshBasicMaterial color={markerColor} transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {arcLines.map((geo, i) => (
        <lineSegments key={i} geometry={geo}>
          <lineBasicMaterial color={arcColor} transparent opacity={dark ? 0.35 : 0.25} />
        </lineSegments>
      ))}
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current.y * 1.5 + 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function Globe() {
  return (
    <div className="w-full h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <CameraRig />
        <GlobeSphere />
      </Canvas>
    </div>
  );
}
