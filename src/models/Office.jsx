/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Neo_minigan (https://sketchfab.com/neominigan)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cs-office-with-real-light-7321fe525c854b87944c78af5f009128
title: Cs_office with real light
*/
import { editable as e } from '@theatre/r3f'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/office/scene.gltf')
  return (
    <e.group theatreKey="Map" {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.glass_Glass_Clear_0.geometry} material={materials.Glass_Clear} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part1_part1_0.geometry} material={materials.part1} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part2_part2_0.geometry} material={materials.part2} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part3_part3_0.geometry} material={materials.part3} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part4_part4_0.geometry} material={materials.part4} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part5_part5_0.geometry} material={materials.part5} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part6_part6_0.geometry} material={materials.part6} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part7_part7_0.geometry} material={materials.part7} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part8_part8_0.geometry} material={materials.part8} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part9_part9_0.geometry} material={materials.part9} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part10_part10_0.geometry} material={materials.part10} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part11_part11_0.geometry} material={materials.part11} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part12_part12_0.geometry} material={materials.part12} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part13_part13_0.geometry} material={materials.part13} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.part14_part14_0.geometry} material={materials.part14} />
          </group>
        </group>
      </group>
    </e.group>
  )
}

useGLTF.preload('/office/scene.gltf')
