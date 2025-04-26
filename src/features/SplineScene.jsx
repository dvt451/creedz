import React from 'react'
import useScreenSize from '../shared/hooks/useScreenSize'
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
   const isMobile = useScreenSize(767.98);
  return (
   isMobile ? (
      <Spline scene="https://prod.spline.design/BkevOD8xS0-ueq-f/scene.splinecode" />
    ) : (
      <Spline scene="https://prod.spline.design/7y4WihuHOycttXWj/scene.splinecode" />
    )
  )
}