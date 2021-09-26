import React from 'react'
import Card from '../card'
import './cards.css'
import '../../Jumbo/header.css'

const Cards = () =>{
    return (
         <div className="all">
            <Card src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" title="No Minimum Order" desc="Order in for yourself or for the group, with no restrictions on order value"/>
            <Card src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" title="Live Order Tracking" desc="Know where your order is at all times, from the restaurant to your doorstep" />
            <Card src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" title="Lightning-Fast Delivery" desc="Experience Swiggy's superfast delivery for food delivered fresh & on time" />
        </div>
    )
}

export default Cards
