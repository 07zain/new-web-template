import React from 'react';
import Image from 'next/image';
import './contactus.css'
import { Col, Row } from 'react-bootstrap';
import {FaPencilAlt, FaUser, FaEnvelopeOpen, FaPhone, FaEdit } from 'react-icons/fa';
const ContactUs = () => {
  return (
    <section className="conatct-section section-gap">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="section-title white-color text-center mb-60">
                    <span className="title-tag">contact us</span>
                    <h2 className="title">Join Us To Get Free Consultations</h2>
                </div>
            </div>
        </div>
        <div className="contact-form-area wow fadeInUp" data-wow-delay="0.3s">
            <div className="row">
                <div className="col-lg-5">
                    <div className="contact-thumb mb-md-gap-50">
                        <img src="../../assets/contact-man.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="contact-form">
                    <form action="#">
                  <h3 className="form-title">Feel free to get in touch with us, Say Hello......</h3>
                  <Row style={{paddingTop:"25px"}}>
                    <Col md={6}>
                      <div className="input-group mt-30">
                        <input type="text" placeholder="Full Name Here"/>
                        <span className="icon"> <FaUser /> </span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-group mt-30">
                        <input type="email" placeholder="Email Here"/>
                        <span className="icon"><FaEnvelopeOpen /></span>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{paddingTop:"25px"}}>
                    <Col md={6}>
                      <div className="input-group mt-30">
                        <input type="text" placeholder="Phone No"/>
                        <span className="icon"><FaPhone /></span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-group mt-30">
                        <select name="services" id="services">
                          <option value="">Select a service</option>
                          <option value="Web-Development">Web Development</option>
                          <option value="App-Development">App Development</option>
                          <option value="Software-Development">Software Development</option>
                          <option value="Game-Development">Game Development</option>
                          <option value="graphic-design">Graphic design</option>
                          <option value="digital-marketing">Digital marketing</option>
                          <option value="Blockchain-Development">Blockchain Development</option>
                          <option value="Cloud-Computing">Cloud Computing</option>
                          <option value="IoT-Robotics">IOT & Robotics</option>                
                        </select>
                        <span className="icon"><FaEdit /></span>
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <Col md={12}>
                      <div className="input-group textarea-group mt-30" >
                        <textarea placeholder="Requirement"></textarea>
                        <span className="icon"><FaPencilAlt /></span>
                      </div>
                    </Col>
                  </Row>
                  <div className="col-12">
                    <div className="input-group textarea-group mt-30">
                      <button className="main-btn small-size rounded-btn icon-right" >Send Message <i className="fal fa-long-arrow-right btn_fa"></i></button>
                    </div>
                  </div>
                </form>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    <div className="conatct-one-bg" style={{backgroundImage: "url(../../assets/contact-man.jpg)"}}></div>
   </section>
  );
};

export default ContactUs;
