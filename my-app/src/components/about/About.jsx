import React from 'react'
import './about.css'
import ME from '../../assets/298340125_2059584887557105_7563693841509592238_n.jpg'
import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> - SOFTWARE ENGINEERING INTERN, Intelligent Machines Limited (2024) </small>
            <br></br>
            <small> - Private Tutor for IGCSE Alevel Candidates</small>
            
          </article>
          <article className='about__card'>
          <TbBooks className='about__icon'/>
            <h5>Education</h5>
              <small> - Undergraduate ,Islamic University of Technology(IUT) </small>
              <br></br>
              <small> - Maple Leaf International School</small>
            
          </article>
            
          
        </div>
      <p>
      Hello, I am an emerging Software Engineer from Islamic University of Technology. My main motto is to make a contribution and give my best wherever i go. As a beginner developer, I rely heavily on my soft skills to get tasks done and currently, I am learning to code in Python, JavaScript, and Java. I am also learning to use React, Node.js, and Express.js to build web applications. I am a quick learner and I am always eager to learn new things.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's chat!</a>

      </div>
      
    </div>
   </section>
  )
}

export default About