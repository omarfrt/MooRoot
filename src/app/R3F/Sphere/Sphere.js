
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import React, { Suspense } from 'react'
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from "three-custom-shader-material";
import vertexShader from '../wobblly_sphere/vertex.glsl'
import fragmentShader from '../wobblly_sphere/fragment.glsl'
import { useRef } from "react";
const debugObject = {}
debugObject.colorA = '#0000ff'
debugObject.colorB = '#ff0000'
const uniforms = {
  uTime: { value: 0 },
  uPositionFrequency: { value: 0.5 },
  uTimeFrequency: { value: 0.4 },
  uStrength: { value: 0.3 },
  uWrapPositionFrequency: { value: 0.38 },
  uWrapTimeFrequency: { value: 0.12 },
  uWrapStrength: { value: 1.7 },
  uColorA: { value: new THREE.Color('#0000ff') },
  uColorB: { value: new THREE.Color('#ff0000') },
}
// const sphereMaterial = new CustomShaderMaterial({
//   //cms
//   baseMaterial: THREE.MeshPhysicalMaterial,
//   vertexShader: ``,
//   fragmentShader: ``,
//   uniforms: uniforms,
//   // MeshPhysicalMaterial 
//   metalness: 0,
//   roughness: 0.5,
//   color: '#ffffff',
//   transmission: 0,
//   ior: 1.5,
//   thickness: 1.5,
//   transparent: true,
//   wireframe: false
// })
  
  let geometry = new THREE.IcosahedronGeometry(2.5, 50)
  geometry = mergeVertices(geometry)
  geometry.computeTangents()



  export default function Sphere() {
    const meshRef = useRef();
    const materialRef = useRef();
  
    useFrame((state) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
      }
    })
  
    return (
      <Suspense fallback={null}>
        <directionalLight position={[1, 1, 0]} intensity={4.5} />
        <ambientLight intensity={1} />
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2.5, 50]} />
          <CustomShaderMaterial
            ref={materialRef}
            baseMaterial={THREE.MeshPhysicalMaterial}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
            metalness={0}
            roughness={0.5}
            color={'#ffffff'}
            transmission={0}
            ior={1.5}
            thickness={1.5}
            transparent={true}
            wireframe={false}
          />
        </mesh>
      </Suspense>
    );
  }