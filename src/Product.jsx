import axios from 'axios'
import React from 'react'
import { useQuery } from '@tanstack/react-query'


const Product = () => {
async function abc(){
  let myres= await axios.get("https://api.escuelajs.co/api/v1/products")
  return myres.data
}


let {data,isLoading,isError}=useQuery({
  queryKey:["product"],
  queryFn:abc
})
console.log(data);

/* for loading purpose*/
if(isLoading){
  return <div className='mainloading'>
    <div className='loading'>

    </div>
  </div>
}
if(isError){
  return<h1>.....try again later</h1>
}
  return (
    <div className='mainproduct'>
      { data && data.map((e,i)=>{
        return <div key={e.id} className='product' style={{animationDelay:`${i*0.1}s`}}>
          <h1>{e.title}</h1>
          <img src={e.images} alt="" />
        </div>
      })}
    </div>
  )
}

export default Product