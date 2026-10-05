import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const SignUP = () => {

let [state,setstate] = useState(
  { name:"",
    email:""
})
function handleChange(e){
  let{name,value}=e.target
  setstate({...state,[name]:value})
  console.log(state);
  
}
async function handleSubmit(e){
  e.preventDefault()
  let isError=false
 
  for(let key in state){
        if(!state[key]){
          toast.error(`${key} is required`)
        isError=true
        }
       
      }

      if(!isError){
      let myres=  await axios.post("https://6a671da5189fe5869eb6ff31.mockapi.io/allusers",state)
      if(myres.status==201){
        toast.success("data created sucessfully")
        setstate({name:"",email:""})
      }
      }

  
  
}



  return (
    <div className='mainsignup'>
    <div className='signup'>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='enter your name'  name="name" onChange={handleChange} value={state.value}/><br /><br />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='enter your email' name='email' onChange={handleChange} value={state.value}/><br /><br />
        <button>Signup</button>
      </form>
    </div>
    </div>
  )
}

export default SignUP