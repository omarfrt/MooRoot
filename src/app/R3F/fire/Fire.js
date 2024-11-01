import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber'
import vertexShader from '../fire/vertex.glsl'
import fragmentShader from "../fire/fragment.glsl"


export default function App() {
  return (
    <Canvas >
      <Suspense fallback={null}>
        <Fire scale={1} />
      </Suspense>
      <OrbitControls />
    </Canvas> 
  )
}

class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '10', OCTIVES: '3' },
      uniforms: {
        fireTex: { type: 't', value: null },
        color: { type: 'c', value: null },
        time: { type: 'f', value: 0.0 },
        seed: { type: 'f', value: 0.0 },
        invModelMatrix: { type: 'm4', value: null },
        scale: { type: 'v3', value: null },
        noiseScale: { type: 'v4', value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { type: 'f', value: 2.5 },
        lacunarity: { type: 'f', value: 3.0 },
        gain: { type: 'f', value: 0.6 }
      },
      vertexShader:vertexShader,
      fragmentShader: fragmentShader
    })
  }
}

extend({ FireMaterial })

function Fire({ color, ...props }) {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, '/fire.png')
  useFrame((state) => {
    const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value
    ref.current.updateMatrixWorld()
    invModelMatrix.copy(ref.current.matrixWorld).invert()
    ref.current.material.uniforms.time.value = state.clock.elapsedTime
    ref.current.material.uniforms.invModelMatrix.value = invModelMatrix
    ref.current.material.uniforms.scale.value = ref.current.scale
  })
  useLayoutEffect(() => {
    texture.magFilter = texture.minFilter = THREE.LinearFilter
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
    ref.current.material.uniforms.fireTex.value = texture
    ref.current.material.uniforms.color.value = color || new THREE.Color(0xeeeeee)
    ref.current.material.uniforms.invModelMatrix.value = new THREE.Matrix4()
    ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1)
    ref.current.material.uniforms.seed.value = Math.random() * 19.19
  }, [])
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <fireMaterial transparent depthWrite={false} depthTest={false} />
    </mesh>
  )
}
