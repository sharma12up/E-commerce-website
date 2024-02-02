import React,{useState,createContext} from 'react'

export const SearchContext=createContext();

const Global = ({children}) => {
    let [Query,setQuery]=useState("");
    let [ogdata,setOgdata]=useState([]);
  return (
    <div>
     <SearchContext.Provider value={{q:{Query,setQuery},o:{ogdata,setOgdata}}}>{children}</SearchContext.Provider>
    </div>
  )
}

export default Global