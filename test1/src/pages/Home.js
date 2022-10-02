import React from 'react'
import HomepageScene from '../utils/HomeScene'
import InfoPage from '../components/InfoPage'

import loading from '../scss/components/threeLoading.module.scss'

export default function Home() {
  return (
    <>
      <HomepageScene className="canvas-openbrush" />
      <div className={loading.container}></div>
      <InfoPage />
    </>
  )
}
