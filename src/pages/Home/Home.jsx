import React from 'react'
import { HeaderHome,AboutSection, MenuSection,ImageGallery } from '../../components'

function Home() {
  return (
    <div className='home-page'>
      <HeaderHome/>

      <AboutSection/>

      <MenuSection/>

      <ImageGallery/>
    </div>
  )
}

export default Home