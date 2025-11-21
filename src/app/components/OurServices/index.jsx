import React from 'react';
import ServiceCard from '../ourservicecard';
import { Row,Col } from 'react-bootstrap';
import './ourservice.css'
const Ourservices = () => {
  return (
    <div className="pageSec">
      <section className="service-section section-gap soft-blue-bg" style={{paddingBottom:"80px"}}>
        <div className="container">
          <div className="row">
            <div className="col md-6">
              <div className="section-title">
                <h2 className="title" style={{color: "#002249",
  fontSize: "40px",
   paddingTop: "55px",
    fontWeight: "bolder"}}>Our Services</h2>
              </div>
            </div>
          </div>

          <div className="row ">
            <Col md={4}>
              <ServiceCard title="Web Development" link="../services/webdevelopment" />
              </Col>
              <Col md={4}>
              <ServiceCard title="App Development" link="../services/appdevelopment" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Software Development" link="../services/softwaredevlopment" />
              </Col>
              </div>
              <Row>  <Col md={4}>
              <ServiceCard title="Game Development" link="../services/gamedevlopment" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Graphic Designing" link="../services/graphicdesigning" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Digital Marketing" link="../services/digitalmarketing" />
              </Col></Row>
              <Row>  <Col md={4}>
              <ServiceCard title="Blockchain Development" link="../services/blockchaindevelopment" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Cloud Computing" link="../services/cloudcomputing" />
              </Col>
              <Col md={4}>
              <ServiceCard title="IOT & Robotics" link="../services/iot&robotics" />
              </Col></Row>
              <div className="row ">
            <Col md={4}>
              <ServiceCard title="E-Commerce Development" link="../services/ecommerce" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Robotic Automation" link="../services/roboticautomation" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Cyber Security" link="../services/cybersecurity" />
              </Col>
              </div>
              <Row>  <Col md={4}>
              <ServiceCard title="Token Development" link="../services/tokendevelopment" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Bulk SMS Services" link="../services/bulksms" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Mobile Apps Development" link="../services/mobileappdevelopment" />
              </Col></Row>
              <Row>  <Col md={4}>
              <ServiceCard title="ERP Software" link="../services/erpsoftware" />
              </Col>
              <Col md={4}>
              <ServiceCard title="Support & Maintenance" link="./services/support&maintenance" />
              </Col>
              <Col md={4}>
              <ServiceCard title="AI Development" link="./services/aidevelopmet" />
              </Col></Row>
              
             
           
          
          </div>
     
      </section>
    </div>
  );
}

export default Ourservices;
