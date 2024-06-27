import React from 'react';
import './typeofservice.css';

const Typeofservice = ({ title, iconSrc, description }) => {
  return (
    <div className="service-items pt-0 ourFeatures overflow section-gap myServices ">
    <div className="section-title mb-md-gap-30 wow fadeInLeft" data-wow-delay="0.3s">
        {/* <!-- <span className="title-tag">We build presence of this world </span> */}
       
    </div>

    <div className="row ">
        <div className=" wow fadeInLeft " data-wow-delay="0.3s">
           
            <div className="service-item-three text-center mt-30 ">
                <div className="icon">
                      <img src={iconSrc}/>
                    </div>
                    <h5 className="title"><a>{title}</a></h5>
                    <p>{description}</p>
                    {/* <!-- <a className="service-link"><img src="./asset/img/favicon.ico" alt=""></a> */}
                
                    <span className="animate animate6 "></span>
                    <span className="animate animateMob animate4  "></span>
                </div>
            </div>
           
           
        </div>
        </div>
  
  );
}

export default Typeofservice;
