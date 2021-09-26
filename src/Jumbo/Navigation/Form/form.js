import React from 'react'
import './form.css'

const Form = () => {
    return (
        <div>
         
         <form>
           <input type="text" placeholder="Enter Your Delivery Location" className="search"/>
           <button type="submit" className="FFbtn">FIND FOOD</button> 
         </form>  

        </div>
    )
}

export default Form
