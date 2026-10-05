import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <header>
         <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="product">product</Link></li>
        <li><Link to="signup"> SignUP</Link></li>
       </ul>
      </header>
    <Outlet></Outlet>

    
    </div>
  )
}

export default Nav