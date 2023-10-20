import React, { useState } from 'react'
import logo from "../../Assets/logo.png"
import cartIcon from "../../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
    const [manu,setManu] = useState("")

    return (
        <div className='navbar'>
            <div><img src={logo} alt="" /></div>
            <div>
                <Link onClick={()=>setManu("shop")} to="/">Shop</Link>
                <Link onClick={()=>setManu("man")} to="/man">Man</Link>
                <Link onClick={()=>setManu("woman")} to="/woman">Woman</Link>
                <Link onClick={()=>setManu("kids")} to="/kids">Kids</Link>
            </div>
            <div className='login'>
                <button>Login</button>
                <button><img src={cartIcon} alt="" /><span>0</span></button>
            </div>
        </div>
    )
}
