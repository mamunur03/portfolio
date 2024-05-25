import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_2nlwtwj', 'template_8d33fyr', form.current, '7cMhS28_XesNoxkMS')

  e.target.reset()
};


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
            <h5>mamunur@iut-dhaka.edu</h5>
            <a href='mailto:mamunur@iut-dhaka.edu'>Send an email</a>
          </article>
          <article className='contact__option'>
            <RiFacebookFill className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Mamunur Rahman</h5>
            <a href='https://www.facebook.com/profile.php?id=100005168415028' target='__blank'>Go to Facebook</a>
            
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+8801830638230</h5>
            <a href='https://wa.me/01830638230' target='__blank'>Send a message</a>
            
          </article>
        </div>

        {/*END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='from_email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button> 
        </form>

      </div>
      </section>
  )
}

export default Contact