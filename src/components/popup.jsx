import React, { children, useState, useEffect } from 'react'
import '../styles/popup.css'
import { Icon } from '@iconify/react';
import AOS from 'aos';


const popup = (props) => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-box" data-aos="zoom-in" data-aos-delay="100">
            <a className='cancel' onClick={() => props.setTrigger(false)}><Icon icon="iconoir:cancel" /></a>
            {props.children}
        </div>

    </div>
  ) : ""
}

export default popup