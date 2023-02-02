import React, { useEffect } from 'react'
import "../styles/about.css"
import profile from "../assets/profile.jpeg"
import AOS from 'aos';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='about' className='container'>
      <div className="about" >
        <div className="header">
          <span>About Me</span>
          <hr/>
        </div>
        <div className="content" data-aos="fade-down" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">
          <div className="desc">
            <p className='satu'>
              Hello! My name is Tiara Puspita and I am currently a third-year 
              Informatics Student in Gunadarma University. 
              I have a huge interest in developing and designing a user-centered digital products especially that live on the internet
              . Furthermore, I have started establishing a strong fundamental data science knowledge and skills using Python and related libraries. 
            </p>
            <p className='dua'>
              Besides doing my campus activites, I've had the oppourtunity of working as a course assistant
              at Lembaga Pengembangan Komputerisasi Universitas Gunadarma. Moreover, I also work on a project
              called <a href="#">GVISIONS</a> with a small team whose members have the same interests in social media and 
              web technology.
            </p>
          </div>
          <div className="img">
            <img src={profile} alt="" />
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
