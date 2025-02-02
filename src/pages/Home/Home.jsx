import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import AboutSection from '../../components/AboutSection/AboutSection'
import { MenuSection } from '../../components'

function Home() {
  return (
    <div className='home-page'>
      <HeaderHome/>

      <AboutSection/>

      <MenuSection/>
    </div>
  )
}

export default Home