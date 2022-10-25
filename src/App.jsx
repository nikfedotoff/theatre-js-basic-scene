import React, { Suspense, useRef, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Office from './models/Office'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

studio.initialize()
studio.extend(extension)

function App() {
    return (
        <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
            <OrbitControls />
            <color attach="background" args={['lightblue']} />
            <hemisphereLight intensity={0.35} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.3}
                penumbra={1}
                intensity={2}
                castShadow
            />
            <Suspense fallback={null}>
                <Office />
            </Suspense>
        </Canvas>
    )
}

export default App
