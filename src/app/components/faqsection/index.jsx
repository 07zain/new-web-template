'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { PiMagicWandLight } from "react-icons/pi";
import './faq.css';

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      <section className="faq-section section-gap bg-cover" style={{backgroundImage: "url(../../assets/faq-bg.jpg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title with-right-border mb-50">
                <span className="title-tag white" style={{fontWeight:"700",color:"#0c59db",textShadow:"1px 1px #24ace1 "}}>FAQ</span>
                <h2 className="title myTitle white " style={{fontWeight:"700",color:"#0c59db",textShadow:"1px 1px #24ace1 "}}>Get Every answer from here.</h2>
                <span className="animate animate2"></span>
                <span className="animate animateMob animate1"></span>
              </div>

              <div className="accordion-four" id="accordionExample">
                {faqData.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="card-header" id={`heading${index}`}>
                      <button
                        className={`collapsed ${activeAccordion === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeAccordion === index ? 'true' : 'false'}
                        aria-controls={`collapse${index}`}
                      > <a><i class="fal fa-magic" aria-hidden="true"><PiMagicWandLight  /> </i>
                        {item.question}
                        </a>
                        {activeAccordion === index ? <FaMinus color="#555" /> : <FaPlus color="#555" />}
                      </button>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`collapse ${activeAccordion === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-parent="#accordionExample"
                     
                    >
                      <div className="card-body" >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    question: "What kind of IT services do you provide?",
    answer: "We provide a range of IT services, including network design and implementation, cloud computing, cybersecurity, data backup and recovery, software development, and technical support."
  },
  {
    question: "How long will it take to complete my project?",
    answer: "The duration of each project depends on factors like complexity, scope, and requirements. After initial discussions with our team, we can estimate the timeframe that a specific project would take. We schedule and manage our projects to prioritize quality and efficiency in completing them as soon as possible."
  },
  {
    question: "What is your pricing model, and how much does it cost?",
    answer: "Our pricing models vary based on the nature of the project. After discussing project specifications and technical requirements with our team, we provide you with a proposal outlining project costs and payment options. We pride ourselves on being transparent and keeping our clients informed about all aspects of the pricing process."
  },
  {
    question: "Can you work with our existing systems and infrastructure?",
    answer: "Absolutely! We have experienced developers and designers who are well versed in collaborating with existing systems, applications, software, and infrastructure. Our team ensures seamless integration of our solutions into your current architecture to leverage your investment fully."
  },
  {
    question: "What if I want to make changes to the project during development?",
    answer: "Change requests are common, and we understand they could happen even after substantial discussions due to unforeseen circumstances. Throughout the project lifecycle, we follow agile methodologies and procedures to ensure that modifications can be smoothly incorporated into the development process. Our team will communicate with you as soon as possible about any delay in timelines or additional costs associated with those changes."
  }
];

export default Faq;
