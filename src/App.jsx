import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Product from './Product'
import User from './User'
import SignUP from './SignUP'
import { Toaster } from 'react-hot-toast'
let myrouter=createBrowserRouter([{
  path:"",
  element:<Nav></Nav>,
  children:[
    {
      index:true,
      element:<Home></Home>
    },
    {
      path:"product",
      element:<Product></Product>
    },
    {
      path:"user",
      element:<User></User>
    },
    {
      path:"signup",
      element:<SignUP></SignUP>
    }
  ]
}])

const App = () => {
  return (
    <div>
    <Toaster position='top-right'></Toaster>
    <RouterProvider router={myrouter}></RouterProvider>
    </div>
  )
}

export default App