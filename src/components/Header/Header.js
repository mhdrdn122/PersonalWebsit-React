import React, { useState ,useEffect } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { HiSun } from "react-icons/hi";




import './Header.css'
export default function Header() {
  const [showMod , satShowMod] = useState(false);
  const [them , setThem] = useState(localStorage.getItem("them") ?? "dark");
  const [modeThem , setModeThem] = useState(localStorage.getItem("modeThem") ?? true);



  useEffect(() => {
    if(them ==="light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  } , [them])

  const modeThemFun = (them , modeThem )  =>{
    localStorage.setItem("them",them)
    localStorage.setItem("modeThem",modeThem)

      setThem(them) 
     setModeThem(modeThem)
  }
  return (
    <header className='d-flex items-center justify-content-between'>
      <div className='div' />
      <button className='btn-toggle' onClick={()=> { satShowMod(true)}}><BiMenu size={18}/></button>
      <nav>
          <ul>
            <li><a href='#about'>about</a></li>
            <li><a href='#main'>projects</a></li>
            <li><a href='#contact'>contact</a></li>

          </ul>
      </nav>
      {
        showMod ? (<div className='fixed'>
         <ul className=''>
            <li><button className='btn-close'   onClick={()=> { satShowMod(false)}}><IoCloseSharp size={20} /></button></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#projects'>projects</a></li>
            <li><a href='#contact'>contact</a></li>

          </ul>
      </div>):null
      }
      
      <button className='btn-mode' onClick={() => {them ==="dark" ? modeThemFun("light",false) :modeThemFun("dark",true)}} >
         {
          modeThem ? <BsMoonStars className='mode-icon'  size={18} /> : <HiSun className='mode-icon'  size={18} />
         }
         </button>
    </header>
  )
}
