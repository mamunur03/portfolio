import { useEffect, useState } from 'react';
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/56852678_1098009283714675_5286532948084916224_n.jpg'
import HeaderSocials from './HeaderSocials'


  

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Engineer", "Undergraduate, IUT" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting, loopNum, delta, toRotate])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    setDelta(150-Math.random()*100);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(1000);
      
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <header> 
      <div className="container header_container">
        <h5>
          Hello I'm
        </h5>
        <h1>Mamunur Rahman</h1>
        {text===""? <h5 className='text-invisible'>what</h5>:<h5 className='text-light'>{text}</h5>}
      <CTA/>
      <HeaderSocials/>

      <div className="me">
      <img className='pfp' src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
       </header>
  )
}

export default Header