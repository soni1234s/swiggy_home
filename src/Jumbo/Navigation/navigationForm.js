import React from 'react'
import Navigation from './navigation'
import Form from './Form/form'
import "./navigationForm.css"

const NavigationForm = () =>{
  
        return (
            <div>
                <Navigation />
                <div className="header">
                  
                  <div className="adv">
                    <h1>Unexpected Guests?</h1>
                    <p>Order Food from favourite restaurents near you. </p>
                  </div>
                   
                  <Form />

                  <div className="adv">
                    <p>POPULAR CITIES IN INDIA</p>
                    <p style={{fontWeight: 300}}>Ahmedabad Banglore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</p>
                  </div>

                </div>
            </div>
        )

}

export default NavigationForm
