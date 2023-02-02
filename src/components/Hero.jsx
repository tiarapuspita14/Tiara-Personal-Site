import React, {useEffect} from 'react'
import "../styles/hero.css"
import AOS from 'aos';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='home' className='container'>
      <div className='hero' >
        <div className="teks">
          <span>Hi, My name is</span><br/>
          <div className="big" >
            <span>Tiara Puspita.</span><br/>
            <span>I build and design things for the web.</span>
          </div>
          <div className="intro" >
            <span>I am an informatics student focusing on building and designing digital products and establishing an excellent user-centered
              digital experience. Currently, along with the team, I'm focused on building our semi-organizational project called <a href='#'>GVISIONS</a>. </span><br/>
          </div>
        </div>
          <div className='button'>
            <a href="#footer">Let's Talk</a>
          </div>
      </div>
    </div>
  )
}

export default Hero