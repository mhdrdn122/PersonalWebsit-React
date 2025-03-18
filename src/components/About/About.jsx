import React from 'react'
import './About.css'

export default function About() {
  console.log("test")
  return (
    <footer id='about' className='d-flex items-center justify-content-between'>
      <ul className='d-flex'>
            <li><a href='#about'>about</a></li>
            <li><a href='#main'>projects</a></li>

      </ul>
      <div className='footer-info'>
      © 2023 spencer sharp. all rights reserved
      </div>
    </footer>
  )
}
