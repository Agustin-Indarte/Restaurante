import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import AboutSection from '../../components/AboutSection/AboutSection'

function Home() {
  return (
    <div className='home-page'>
      <HeaderHome/>

      <AboutSection/>
    </div>
  )
}

export default Home