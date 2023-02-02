import React, { useEffect, useState } from 'react'
import "../styles/navbar.css"
import { Icon } from '@iconify/react';
import AOS from 'aos';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Navbar, Container, Nav } from "react-bootstrap";

const Nav = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    const navbar = [
        {
            nama : "Home",
            link : "#home",
            duration : "1000"
        },
        {
            nama : "About",
            link : "#about",
            duration : "1200"
        },
        {
            nama : "Experience",
            link : "#experience",
            duration : "1400"
        },
        {
            nama : "Project",
            link : "#project",
            duration : "1600"
        },
        {
            nama : "Contact",
            link : "#footer",
            duration : "1800"
        }
        
        
    ]
    const [isExpanded, setExpanded] = useState(false)
    const [isClicked, setClicked] = useState(false)


  return (
      <div className='navigation' >  
            <ul className='kiri'>
                <li className='logo'>
                    <a href="" data-aos="fade-up"
                        data-aos-duration="300">Tiara Puspita</a>
                </li>
                <li className='toggle'>
                    <i onClick={() => setExpanded(!isExpanded)}><Icon icon="fluent:navigation-16-filled" /></i>
                </li>
            </ul>
            <ul className={isExpanded ? "kanan active" : "kanan"}>
                {
                    navbar.map((item,index) => (
                        <li className={isClicked ? 'hide' : ' ' } key={index} ><a data-aos="fade-up"
                        data-aos-duration={item.duration} href={item.link}  onClick={()=> setExpanded(false)}>{item.nama}</a></li>
                    ))
                }
            </ul>
        </div>
    // <div>
    //  <Navbar bg="light" variant="light">
    //       <Container>
    //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //         <Nav className="me-auto">
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#features">Features</Nav.Link>
    //           <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         </Nav>
    //       </Container>
    //     </Navbar>
    // </div>
    )
}

export default Nav