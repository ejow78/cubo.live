'use client';

import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, RoundedBox, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Cubo Metálico (El que tenías)
function MetallicCube() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.1} smoothness={4}>
            <meshStandardMaterial
                color="#2563eb"
                roughness={0.2}
                metalness={0.7}
                envMapIntensity={1}
            />
        </RoundedBox>
    );
}


export default function Scene() {
    // Escena principal con el Cubo Metálico
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[-10, 10, -5]} intensity={2} color="#3b82f6" />
            <spotLight position={[0, 10, 0]} intensity={1} penumbra={1} />

            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={1}
            >
                <Suspense fallback={null}>
                    {/* Actualmente mostrando Cristal */}
                    <MetallicCube />
                </Suspense>
            </Float>

            <Environment preset="city" />
        </>
    );
}
