import React from 'react'
import IMG1 from '../../assets/landingpage.png'
import './projects.css'
import IMG2 from '../../assets/home.png'
import IMG3 from '../../assets/best-java-projects-for-engineering-students.webp'

const Projects = () => {
  return (
    <section id='projects'>
      
      <h2>My projects</h2>

      <div className='container project__container'>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>CampusWorks</h3>
          <p> A platform for IUT students to connect and get job and internship opputinities</p>
          <br></br>
          <p>Technologies used: React, Node.js, Express.js, MongoDB</p>
          <br></br>
          <div className='project__item-cta'>
          <a href='https://github.com/mamunur03/CampusWorks' className='btn' target='_blank'>Github</a>
        </div>
        </article>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>EcoConnect</h3>
          <p> A Sustainable Living Social Network for Eco-Conscious People and Communities</p>
          <br></br>
          <p>Technologies used: React, Node.js, Express.js, MongoDB</p>
          <br></br>
          <div className='project__item-cta'>
          <a href='https://github.com/mamunur03/EcoConnect' className='btn' target='_blank'>Github</a>
        </div>
        </article>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Racing in IUT</h3>
          <p> An academic project where several design patterns are implemented</p>
          <br></br>
          <p>Technologies used: Java</p>
          <br></br>
          <div className='project__item-cta'>
          <a href='https://github.com/mamunur03/Design-Pattern-Project/tree/main/project' className='btn' target='_blank'>Github</a>
        </div>
        </article>
      </div>

      </section>
  )
}

export default Projects