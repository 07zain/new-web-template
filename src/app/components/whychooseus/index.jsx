import React from "react";
import "./whychooseus.css";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const Chooseus = () => {
  return (
    <div>
      <section class="why-choose-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title white-color mb-30 text-center">
                <span class="title-tag">why choose us</span>
                <h2 class="title myTitle">
                  We Are Very Different Form Others IT Solutions
                </h2>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div
              class="col-lg-4 col-md-6 col-sm-9 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div class="single-choose text-center mt-30">
                <div class="icon-box">
                  <span class="rotate-dot"></span>
                  <i class="fal fa-laptop-code">
                    <FaLaptopCode />
                  </i>
                </div>
                <h4 class="title">Automated System For Clients</h4>
                <p>
                  Our automated system streamlines processes, improves
                  efficiency, and enhances customer experience for our clients.{" "}
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="single-choose text-center mt-30">
                <div class="icon-box">
                  <span class="rotate-dot"></span>
                  <i class="fal fa-server">
                    <FaServer />
                  </i>
                </div>
                <h4 class="title">Beneficial Strategies</h4>
                <p>
                  Our beneficial strategies include data-driven insights, agile
                  methodologies, and collaborative partnerships to deliver
                  innovative solutions and achieve long-term success for our
                  clients.{" "}
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-9 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div class="single-choose text-center mt-30">
                <div class="icon-box">
                  <span class="rotate-dot"></span>
                  <i class="fal fa-tools">
                    <FaTools />
                  </i>
                </div>
                <h4 class="title">Premium Support</h4>
                <p>
                  Our company provides premium technical support with 24/7
                  assistance and personalized solutions for all your technology
                  needs.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="choose-dot">
          <img src="assets/choose-dot.png" alt="" />
        </div>
        <div class="choose-shape">
          <img src="assets/choose-shape.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Chooseus;
