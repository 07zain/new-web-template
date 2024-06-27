import React from "react";
import Packagemessage from "../../components/packagemessage";
import PackageCard from "../../components/packagescard";
import Packageservice from "../../components/packageservice";
import { Col, Row } from "react-bootstrap";
import Newsletter from "../../components/newsletter";
import Faq from "../../components/faqsection";
const Localseo = () => {
  return (
    <div className="container">
      <div className="section-gap packages">
        <Packagemessage />

        <div className="section-title text-center mb-30 ">
          <h2 className="title">Local SEO Packages In India</h2>
        </div>
        <Row>
          {" "}
          <Col md={4}>
            <PackageCard />
          </Col>
          <Col md={4}>
            <PackageCard />
          </Col>
          <Col md={4}>
            <PackageCard />
          </Col>
        </Row>
        <Packageservice />

        <Newsletter />
      </div>
      <Faq/>
      
    </div>
  );
};

export default Localseo;
