import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {
 let [state,setstate]  = useState(null)
    useEffect(()=>{
    async function abc(){
        let myres=  await axios.get("https://6a671da5189fe5869eb6ff31.mockapi.io/allusers")
        console.log(myres.data);
        setstate(myres.data)
    }
    abc()
    },[])
  return (
    <div>
        { state && state.map((e,i)=>{
            return <div key={e.id}>
                <h1>{e.name}</h1>
                <img src={e.avatar} alt="" />
                <button onDoubleClick={ async ()=>{
                let myres=    axios.delete(`https://6a671da5189fe5869eb6ff31.mockapi.io/allusers/${e.id}`)
                console.log(myres);
                let updatstate=state.filter((x)=>{
                    if(x.id!=e.id){
                        return x
                    }
                })
                setstate([...updatstate])
                
                }}>Delete</button>
            </div>
        })}
    </div>
  )
}

export default User