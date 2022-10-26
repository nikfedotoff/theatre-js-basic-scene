import React, { Suspense, useRef, useState, useEffect } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SheetProvider, editable as e } from '@theatre/r3f'
import Office from './models/Office'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject } from '@theatre/core'
import demoProjectState from './jsons/scene3.json'

const demoSheet = getProject('Office2', { state: demoProjectState }).sheet(
    'Office2'
)

if (import.meta.env.DEV) {
    // studio.initialize()
    // studio.extend(extension)
}

function App() {
    useEffect(() => {
        demoSheet.sequence.play()
    })

    if (demoSheet.isReady) {
        demoSheet.sequence.play()
    }

    return (
        <Canvas camera={{ position: [-50, -12, 3], zoom: 1 }}>
            <SheetProvider sheet={demoSheet}>
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
            </SheetProvider>
        </Canvas>
    )
}

export default App
