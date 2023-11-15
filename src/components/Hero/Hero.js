import React from 'react'
import './Hero.css'
import {MdVerified}  from 'react-icons/md'
import {FaTelegramPlane ,FaGithub , FaFacebookSquare}  from 'react-icons/fa'
import Lottie from "lottie-react";
import { motion } from 'framer-motion'
import developer from '../../assest/animation/Animation - developer.json'
import { avatar } from '../../data';
export default function Hero() {
  return (
    <section className='hero d-flex justify-content-between items-center '>
      <div className='Content-Hero'>
        <div className='avatar d-flex'>
          <motion.img 
          initial={{transform : "scale(0)"}}
          animate={{transform : "scale(1)"}}
          transition={{damping:5,duration:2,type:"spring" ,stiffness:100}} src={avatar}/>
          <span className='verified-icon'><MdVerified className="ver" size={20}/></span>
        </div>
        <motion.p 
        initial={{opacity: 0}} 
        animate={{opacity : 1}} 
        transition={{duration: 2}} className='hero-title'>Computer engineer and front end developer </motion.p>
          
        <p className='hero-disc'>
        I am Muhammed Ramadan, a computer engineer at the University of Damascus, and I work as a front-end developer. I can develop the idea of your website using the following programming technologies [ html, css, javaScript, Bootstrap, jquery, React js, Next js, Redux/Redux Toolkit, and other various technologies ]
        I have problem-solving skills, communication skills, working with a team, and programming skills in other languages
        I am pleased to deal with you .
        </p>

        <div className='hero-icons'>
        <span><a href='https://www.facebook.com/mhdrdn122'><FaFacebookSquare size={20}/></a></span>
        <span><a href='https://github.com/mhdrdn122'><FaGithub size={20}/></a></span>
        <span><a href='https://t.me/muhammed_ramadan'><FaTelegramPlane size={20}/></a></span>
        </div>
      
      </div>
      <div className='animation'>
        <Lottie className='ani-dev'  animationData={developer} /> 
      </div>
    

    </section>
  )
}
