import React from 'react'
import NavigationForm from './Navigation/navigationForm'
import '../Jumbo/header.css'

const Header = () =>{

        return (
            <div className="jumbo">
                <NavigationForm />           
                <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch3-new_mkqxdb" className="image"/></div>
            </div>
        )
    
}

export default Header
