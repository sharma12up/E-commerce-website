import React,{useState,useEffect,useContext} from 'react'
import Shopcart from './Shopcart';
import { SearchContext } from './Global';
import { Link } from 'react-router-dom';
const Home = () => {
  
    let {q} = useContext(SearchContext);
    let {o}=useContext(SearchContext);
    let {ogdata,setOgdata}=o;
    
   let {Query}=q;
   let [shopdata,setshopdata]=useState([]);
   console.log(ogdata);
   let [displaydata,setdisplaydata]=useState([])
    useEffect(()=>{
       let filterarray=shopdata.filter((obj=>{
          return obj.title.toLowerCase().includes(Query.toLowerCase())
       }))
       setdisplaydata(filterarray);
    },[Query])

    
    let getdata=()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
  
         setshopdata(json);
         setdisplaydata(json);
         setOgdata(json);
        console.log(displaydata)
         console.log(shopdata)
        })
    }
     useEffect(()=>{
      getdata();
    },[])
   
  return (
    <div>
      <div className="flex flex-wrap gap-5 pt-6 border-double ">
        {
           displaydata.map((detailobj)=>{
             return<Link key={detailobj.id} to={"cards/"+detailobj.id}> <Shopcart  obj={detailobj}></Shopcart></Link>
           })
        }
        </div>
    </div>
  )
}

export default Home