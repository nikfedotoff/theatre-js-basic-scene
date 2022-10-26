import React, { Suspense, useRef, useState, useEffect } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SheetProvider, editable as e } from '@theatre/r3f'
import Office from './models/Office'
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
import { getProject } from '@theatre/core'
import demoProjectState from './jsons/scene6.json'
import { Fragment } from 'react'

const demoSheet = getProject('Office2', { state: demoProjectState }).sheet(
    'Office2'
)

if (import.meta.env.DEV) {
    // studio.initialize()
    // studio.extend(extension)
}

function App() {
    const play = () => {
        demoSheet.sequence
            .play({ iterationCount: 1 })
            .then(() => console.log('done'))
    }

    return (
        <Fragment>
            <button className="btn" onClick={play}>
                НАЧАТЬ
            </button>
            <Canvas camera={{ position: [-50, -12, 3], zoom: 1 }}>
                <SheetProvider sheet={demoSheet}>
                    {/* <OrbitControls /> */}
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
        </Fragment>
    )
}

export default App
