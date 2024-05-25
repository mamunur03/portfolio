import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/mamunur-rahman-23673a2ba/"><AiFillLinkedin/></a>
        <a href="https://github.com/mamunur03" ><AiFillGithub/></a>
        <a href="https://www.instagram.com/mamunur_003/" ><AiFillInstagram/></a>
        
    </div>
  )
}

export default HeaderSocials