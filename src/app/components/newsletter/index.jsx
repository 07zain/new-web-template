import React from 'react'
import './newsletter.css'
import { FaPhone } from 'react-icons/fa';
const Newsletter = () => {
  return (
    <div>
       <div className="bannNoBox ">
            <div className="dflex">
                <h5 className="">
                    <i className="fa fa-phone">  <FaPhone /></i>
                    Unlocking your Business Potential through ORLANK Technology.
                </h5>
                <h1 className="num"><a href="tel:123"> +91 91134 91857</a></h1>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
