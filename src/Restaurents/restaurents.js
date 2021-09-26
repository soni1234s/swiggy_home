import React from 'react'
import './restaurents.css'

const Restaurents = () =>{
    return (
        <div className="restaurent">
            <div className="firstdiv">
               
               <div className="content">
                    <h1>Restaurants in your pocket</h1>
                    <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
               </div>

               <div className="playApple">
                   <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
                   <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
               </div>

            </div>
            <div className="mobiles">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>
            </div>
        </div>
    )
}

export default Restaurents
