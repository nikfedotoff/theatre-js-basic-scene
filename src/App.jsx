import React, { Suspense, useState } from 'react'
import './App.css'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { CameraShake, Sky } from '@react-three/drei'
import { SheetProvider, editable as e } from '@theatre/r3f'
import Office from './models/Office'
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
import { getProject } from '@theatre/core'
import demoProjectState from './jsons/underground.json'
import { Fragment } from 'react'
import { PerspectiveCamera } from './components/PerspectiveCamera'
import HomePage from './components/HomePage'
import { useEffect } from 'react'

const project = getProject('Office2', { state: demoProjectState })
const demoSheet = project.sheet('Office2')

if (import.meta.env.DEV) {
    // studio.initialize()
    // studio.extend(extension)
}

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        project.ready.then(() =>
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        )
    }, [])

    const play = () => {
        demoSheet.sequence
            .play({ iterationCount: 1 })
            .then(() => console.log('done'))
    }

    return (
        <Fragment>
            <HomePage play={play} loading={loading} />
            <Canvas camera={{ position: [0, 7, 3], zoom: 1 }}>
                <SheetProvider sheet={demoSheet}>
                    <PerspectiveCamera
                        makeDefault
                        position={[8, -10, -4]}
                        onUpdate={(e) => console.log(e)}
                    />
                    {/* <OrbitControls /> */}
                    {/* <color attach="background" args={['lightblue']} /> */}
                    <hemisphereLight intensity={1} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.3}
                        penumbra={1}
                        intensity={2}
                        castShadow
                    />
                    <Suspense fallback={null}>
                        <Office />
                        <CameraShake
                            maxYaw={0.01}
                            maxPitch={0.01}
                            maxRoll={0.01}
                            yawFrequency={0.5}
                            pitchFrequency={0.5}
                            rollFrequency={0.4}
                        />
                        {/* <Cloud /> */}
                        <Sky sunPosition={[-20, -20, 0]} distance={100} />
                        {/* <Sparkles color={"red"} size={30} /> */}
                        {/* <Stars fade={true} count={50000} saturation={5000} /> */}
                    </Suspense>
                </SheetProvider>
            </Canvas>
        </Fragment>
    )
}

// function Rig() {
//     const camera = useThree((state) => state.camera)
//     return useFrame((state) => {
//         camera.position.z = Math.sin(state.clock.elapsedTime) * 20
//     })
// }

export default App
