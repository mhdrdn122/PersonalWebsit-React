'use client'
import React from 'react'
import './Contact.css'
import Lottie from "lottie-react";
import lottie_done from '../../assest/animation/Animation - done.json'
import lottie_email from '../../assest/animation/Animation - email.json'

import {MdOutlineMailOutline} from 'react-icons/md'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
export default function Contact() {

  const [email,  setEmail] = useState() 
  const [mas,  setMas] = useState() 
  const [state, handleSubmit] = useForm("maygklzj");

  

  return (
    <section id='contact' className='contact'>
      <div className='contact-title'>
          <h2 className='d-flex  items-center'><MdOutlineMailOutline className='icon-contact'/>contact us</h2>
          <p>contact us for more information and get notified when i publish something new</p>
      </div>
      <div className='contact-body d-flex justify-content-between items-center'>
          <form onSubmit={handleSubmit}>
            <input value={email} type='email' name='email' placeholder='enter your email plase'/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>

            <textarea value={mas} placeholder='message' name='message'/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button type="submit" onClick={() =>{setEmail('');setMas('')}} disabled={state.submitting} >{state.submitting ? "submiting...": "sand"}</button>
            {state.succeeded ? (<h2 className='lottie-successfully'> <Lottie loop="false" style={{width:"40px" , display:"inline-block"}} animationData={lottie_done} /> Thank you, the message has been sent successfully</h2>):null}
          </form>
          <div className='animation-contact'>
          <Lottie className='ani-email'  animationData={lottie_email} /> 
          </div>
      </div>
    </section>
  )
}
