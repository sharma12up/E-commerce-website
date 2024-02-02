import React from 'react'

const Shopcart = ({obj}) => {
  return (
    <div>
       <div className="card card-compact w-96 h-5/6 bg-base-100 mx-3 my-3  shadow-xl min-h-24 overflow-auto transition duration-500 cursor-pointer hover:scale-110 ">
  <figure><img src={obj.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{obj.title}</h2>
    <p>{obj.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-primary">{obj.price}</button>
    </div>
  </div>
</div>
        
    </div>
  )
}

export default Shopcart