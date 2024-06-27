import React from 'react'

const Squareanimation = (iconClass, title, description ) => {
  return (
    <div>
      <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0.3s">
            <div className="service-item-three text-center mt-30">
                <div className="icon">
                    <i className={iconClass}></i>
                </div>
                <h5 className="title"><a>{title}</a></h5>
                <p>{description}</p>
                <span className="animate animate6"></span>
                <span className="animate animateMob animate4"></span>
            </div>
        </div> 
    </div>
  )
}

export default Squareanimation
