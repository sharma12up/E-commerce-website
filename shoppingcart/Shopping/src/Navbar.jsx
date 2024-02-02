import React,{useContext, useState} from 'react'
import { SearchContext } from './Global'

const Navbar = () => {
  let [input,SetInput]=useState("")
  let {q}=useContext(SearchContext);
  let{Query,setQuery}= q; 

  let handleClick=()=>{
    SetInput("")
    setQuery(input)
  }
  return (
    <div>
     <div className="navbar  bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-white">Shoppers</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input onChange={(e)=>SetInput(e.target.value)} value={input}  type="text"  placeholder="Search" className="input input-bordered w-24 md:w-auto " style={{color:"black"}}/>
    </div>
    <button onClick={handleClick} className="btn btn-primary">Search</button>
    <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
    </div>
  </div>
</div>

  
  )
}

export default Navbar