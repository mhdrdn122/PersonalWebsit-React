import React from 'react'
import './Card.css'
import { motion ,AnimatePresence } from 'framer-motion'
import {FaLink , FaGithub } from 'react-icons/fa'
 
export default function Card({img, title,disc ,demo, code}) {
  return (
    <AnimatePresence>
        <motion.div
        layout
        initial={{transform : "scale(0)"}}
        animate={{transform : "scale(1)"}}
        transition={{damping:8,type:"spring" ,stiffness:50}} 
 
      className='card'>
          <img src={img} alt='imgProject'/>
          <div className='card-body'>
              <h3> {title}</h3>
              <p>{disc} </p>
              <div className='icons-card d-flex justify-content-between items-center'>
                      <span><a target='_blank' href={demo}><FaLink size={20}/></a></span>
                      <span><a target='_blank' href={code}><FaGithub size={20} /></a></span>   
              </div>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}
