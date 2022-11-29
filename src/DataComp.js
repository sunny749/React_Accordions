import React,{useState} from 'react'
import './App.css'
import { FiChevronsDown,FiChevronsUp} from "react-icons/fi";
export default function DataComp({title,body}) {
  const [show,setShow]=useState(false)
  return (
    <div className={show?'data-container-standout':'data-container'}onClick={()=>setShow(!show)} onMouseLeave={()=>setShow(false)} onMouseEnter={()=>setShow(true)}>
      <div className='data-title'>
        <h5 className='text-capitalize'>{title}</h5>
        <p>{show?<FiChevronsUp/>:<FiChevronsDown />}</p>
      </div>
        {show&&<p>{body}</p>}
    </div>
  )
}
