import React from "react";
import Image from "next/image";
import FixedIcon from "../fixedicon";
import { Row, Col } from "react-bootstrap";
import './service.css'
const AboutSection = ({ title, title2, description, imageSrc }) => {
  
  return (
    <>
    <FixedIcon/>
    <section className="about-section section-gap about-with-shape ">
        <div className="container">
            <div className="about-text-block">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title mb-md-gap-30 wow fadeInLeft" data-wow-delay="0.3s">
                            {/* <!-- <span className="title-tag">We build presence of this world </span> --> */}
                            <h2 className="title myTitle">{title} <br/>{title2}</h2>.

                            <p>{description}</p>
                    
                        <span className="animate animate4 "></span>
                        <span className="animate animateMob animate2 "></span>
                        </div>
                    </div>

                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <Image src={imageSrc} alt="" className="serviceImg" width={500} height={500}/>
                    </div>
                 
                </div>
            </div>

        </div>
        <div className="about-shape-1">
            <img src="../../assets/about-shape-01.png" alt="shape"/>
        </div>
        <div className="about-shape-2">
            <img src="../../assets/about-shape-02.png" alt="shape"/>
        </div>
    </section>
    </>
  );
};

export default AboutSection;
