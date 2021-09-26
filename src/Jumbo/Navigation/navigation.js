import React from 'react'
import './navigation.css'

const Navigation = () =>{
    return (
        <div className="navigation">
            <div><img  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="swiggy"/></div>
            <div>
               <button className="login">Login</button>
               <button className="signup">Sign up</button>
            </div>
        </div>
    )
}

export default Navigation
