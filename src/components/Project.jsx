import React from 'react'
import '../styles/project.css'


const Project = () => {
  return (
    <div className='container' id='project'>
      <div className="project">
        <div className="header">
          <span>Projects</span>
          <hr/>
        </div>
        <div className="content" data-aos="fade-down" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">
          <div className="head-content">
            This is something I've built
          </div>
          <div className="body">
           <div className="card">
              <a href="https://www.canva.com/design/DAFK9HXxZRI/sP71lmw8YZgPQ03n2pD7ag/view?utm_content=DAFK9HXxZRI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <img src="" alt="" />
              </a>
           </div>
           
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project