import React, { useCallback, useEffect, Suspense } from 'react';
import Box from '../components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LandScene from '../utils/LandScene';

export default function Page404() {
    return (
        <div>
            <h1 className="page-header">404 error page</h1>
            <LandScene>
                
            </LandScene>
        </div>
    )
}