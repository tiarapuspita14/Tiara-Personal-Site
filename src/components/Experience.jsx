import React, { useState, useEffect } from 'react'
import '../styles/experience.css'
import image from "../assets/skill.png";
import AOS from 'aos';


const Experience = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }

  const work = [
    {
      company : "LepKom Gunadarma",
      position : "Course Assistant",
      year_in : "Oct 2022",
      year_out : "Present",
      description : [  
                      "Assess practitioners activity report", 
                      "Assist course tutor and supervisor in running courses which is related to the subjects (Beginner DBMS and Fundamental Web Programming).", 
                      "Accustomed to using various software such as Sqldeveloper, MSSQL, Vscode, HTML, CSS, Golang, etc."
                    ]
    }
  ]

  const edu = [
    {
      Institution : "Gunadarma University",
      year_in : "2020",
      year_out : "Present",
      major : "Informatics"
    }
  ]

  return (
    <div id='experience' className='container'>
      <div className="experience">
        <div className="header">
          <hr/>
          <span>Experiences</span>
        </div>
        <div className="contain">
        <div className="img" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="top-bottom">
          <img src={image} alt="" />
        </div>

          <div className="desc" data-aos="fade-down" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">
           <div className="navex">
            <a onClick={() => toggleTab(1)} className={toggleState === 1 ? "active-nav" : "" }>Work</a>
            <a onClick={() => toggleTab(2)} className={toggleState === 2 ? "active-nav" : ""}>Certification</a>
           </div>

           <div className="content flipped">
            {/* satu */}
               <div className={toggleState === 1 ? "isi active-content" : "isi"}>
            {work.map((item, index) => (
               <div className='work' key={index}>
                 <div className="head">
                   <div className='title'><span>{item.position}</span> <span>@ {item.company}</span></div>
                   <div className='tahun'><span>{item.year_in}</span><span>-</span><span>{item.year_out}</span></div>
                 </div>
                 <div className="body">
                   <ul>
                    {item.description.map((i,indes)=>(
                      <li>
                        {i}
                      </li>
                    ))}
                   </ul>
                 </div>
               </div>
            ))}
            </div>

              {/* tiga */}
              <div className={toggleState === 2 ? "isi active-content" : "isi"}>
                <div className='Sertif'>
                  <div className="head">
                    <div className='title'><span>Sertifikat</span> <span></span></div>
                    <div className='tahun'><span>2020</span><span>-</span><span>2020</span></div>
                  </div>
                  <div className="body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde illum voluptate aliquid? Consequatur, 
                      nam! Sequi itaque modi libero a aspernatur vel autem doloribus! Architecto a iusto aut dolore!
                      
                    </p>
                  </div>
                </div>
              </div>
            
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience