import React, { useEffect, useState, useRef } from 'react'
import '../styles/footer.css'
import { Icon } from '@iconify/react';
import AOS from 'aos';
import Popup from "../components/popup";
import emailjs from '@emailjs/browser';


const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('umxnythwwfczyjix', 'template_zviqgfo', form.current, 'Vsvb3Ugvh5NWk1n45')
    alert('Message has already sent!')
  
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='container footer' id='footer'>
      <div className="header"> <span>Let's Connect!</span></div>
      <div className="body">
        <div className="teks" data-aos="zoom-in-up">
          <span>I am open and actively looking for any new insights, experiences and opportunities. 
            My contacts are always available whether you have things to discuss with or say hello. 
            Sincerely, reach me on Gmail or my other social media. </span>
        </div>
        <div className='button'>
          <a onClick={()=> setButtonPopup(true)}>Send Me Hello</a>
        </div>
      </div>
        <div className="socials">
          <a href="https://www.instagram.com/tiarapus_/"><Icon icon="ri:instagram-fill" /></a>
          <a href="https://www.linkedin.com/in/tiarapuspita-/"><Icon icon="mdi:linkedin" /></a>
          <a href="https://github.com/tiarapuspita14"><Icon icon="mdi:github" /></a>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="all">
          <div className="form-head">
            <span>Say Me Hello!</span>
          </div>
          <form ref={form} onSubmit={sendEmail} className='form'>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="text" name='email' placeholder='Your email' required/>
            <textarea rows="4" cols="50" name='content' placeholder='Write me something...' required></textarea>
            <input type='submit' className='submit' value="Send Message" />
          </form>
        </div>
      </Popup>
    </div>
  )
}

export default Footer