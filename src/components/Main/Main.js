import React, { useState } from 'react'
import './Main.css'
import Card from '../Card/Card'
import { data , categoryBtn } from '../../data.js'

export default function Main() {
  
  const [projects , setProjects] = useState(data)
  const [active , setActive] = useState("all")

  const filterProjects = (cat) =>{
   if(cat==="all"){
    setProjects(data)
   }else{
    const arr = data.filter(pro => {
      return pro.category === cat
    })
    setProjects(arr)
   }
  }
  return (
    <main id='main' className='d-flex'>
      <div className='left-section'>
          {
            categoryBtn.map((btn,index) => {
              return <button key={index} onClick={()=>{setActive(btn); filterProjects(btn)}} className={ active ===btn ? "active":null}>{btn}</button> 
            })
          }
      </div>
      <div className='right-section'>
        {
          projects.map(i => {
            return(<Card key={i.id}
            img={i.img}
            title={i.title}
            disc={i.disc}
            demo={i.demo}
            code = {i.code}
            />)
          })
          
        }

      </div>
    </main>
  )
}
