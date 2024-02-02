import React,{useState,useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { SearchContext } from './Global';

const Cardpage = () => {
  let[obj,setObj]=useState({});
  let {o}=useContext(SearchContext)
   let {ogdata}=o;
    let {cardID}=useParams();
    useEffect(()=>{
      let targetObj = ogdata.filter((obj)=>{
          return obj.id == cardID;
      })
      setObj(targetObj[0]);
      console.log(targetObj[0])
    },[])
  return (
      <div className='text-3xl h-screen w-full flex justify-center items-center'>
    <div className="card card-side w-3/4 h-3/4 bg-base-100 shadow-xl">
      <figure className='w-2/5'><img className='h-full w-full' src={ obj.image} alt="Card" /></figure>
      <div className="card-body w-1/4 px-7 py-12 overflow-auto">
        <h2 className="card-title text-black text-6xl">{obj.title}</h2>
        <p className='text-black text-3xl mt-7'>{obj.description}</p>
      </div>
      </div>
      </div>
  )
}

export default Cardpage