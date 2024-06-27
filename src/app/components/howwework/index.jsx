import React from 'react';
import './howwework.css'
const HowWeWork = () => {
    return (
        <div className="pageSec">
       
        <section className="section-gap whyChooseUs container">
            <div className="service-items pt-0 ourFeatures overflow section-gap myServices hoWEWork row ">
                

                <div className="row dgrid_4 ">
                <div className="section-title mb-md-gap-30 wow fadeInLeft" data-wow-delay="0.3s">
                    {/* <!-- <span className="title-tag">We build presence of this world </span> --> */}
                    <h2 className="title myTitle mt-10">How We Work</h2>
                </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft " data-wow-delay="0.3s">
                    {/* <!-- Static Website Design --> */}
                        <div className="hoWEWorkCard text-center mt-30 ">
                            <div className="icon">
                            <img src='./assets/1.png'/>
                            </div>
                            <h5 className="title"><a>PLANNING</a></h5>
                        
                            <span className="animate animate6 "></span>
                            <span className="animate animateMob animate4  "></span></div>
                        </div>
                    {/* <!-- DESIGN--> */}
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp " data-wow-delay="0.4s">
                            <div className="hoWEWorkCard text-center mt-30">
                                <div className="icon">
                                    <img src='./assets/1.png'/>
                                </div>
                                <h5 className="title"><a>DESIGN</a></h5>  
                            </div>
                        </div>
                   
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp " data-wow-delay="0.5s">
                            <div className="hoWEWorkCard text-center mt-30">
                                <div className="icon">
                                   
                                <img src='./assets/1.png'/>
                                </div>
                                
                                <h5 className="title"><a>DEVELOPMENT</a></h5>
                            
                                <span className="animate animateMob animate4"></span>
                            </div>
                            
                        </div>
                  
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInRight " data-wow-delay="0.6s">
                            <div className="hoWEWorkCard text-center mt-30">
                                <div className="icon">
                                <img src='./assets/1.png'/>
                                </div>
                                <h5 className="title"><a>Deliver</a></h5>
                                <span className="animate animate6 "></span>
                                <span className="animate animateMob animate4 "></span></div>
                            </div>
                
                </div>
                </div>
                </section>
                </div>
                     
        
       
    );
};



export default HowWeWork;
