import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row footer-widgets">
                    {/* About Widget */}
                    <div className="col-lg-4 col-md-6 col-md-7">
                        <div className="widget about-widget">
                            <div className="logo">
                                <img src="/asset/img/logo.png" alt="" />
                            </div>
                            <p>Orlank Technology is one of the leading technology company in India that offers top-notch IT solutions at cost-effective price range. We always keep client’s satisfaction at our almost priority.</p>
                            {/* Social Icons */}
                            <ul className="fixed-icons social-iconss footSocial">
                                <li><a href="tel:9113491857"><img src="/asset/img/social/phone1.png" alt="" /></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=9113491857"><img src="/asset/img/social/whatsapp.svg" alt="" /></a></li>
                                <li><a href="https://www.instagram.com/orlanktechnology/?igshid=MzRlODBiNWFlZA%3D%3D"><img src="/asset/img/social/instagram.svg" alt="" /></a></li>
                                <li><a href="#"><img src="/asset/img/social/facebook.svg" alt="" /></a></li>
                                <li><a href="mailto:info@orlank.com"><img src="/asset/img/social/gmail.svg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Navigation Widget */}
                    <div className="col-lg-3 col-md-6 offset-xl-1">
                        <div className="widget nav-widget">
                            <h4 className="widget-title">Links</h4>
                            <div className="footer-list">
                                <ul>
                                    <li><a href="index-2.html"><i className="fal fa-angle-right"></i> Home</a></li>
                                    <li><a href="about.html"><i className="fal fa-angle-right"></i> About</a></li>
                                    <li><a href="contact.html"><i className="fal fa-angle-right"></i> Contact</a></li>
                                    <li><a href="blog.html"><i className="fal fa-angle-right"></i> Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Contact Widget */}
                    <div className="col-lg-4 col-md-6 col-md-6">
                        <div className="widget contact-widget">
                            <h4 className="widget-title">Contact Details</h4>
                            <ul>
                                <li><a href="tel:+91 91134 91857 white"><span>Phone:</span> +91 91134 91857</a></li>
                                <li><a href="mailto:info@orlank.com"><span>Email:</span> info@orlank.com</a></li>
                                <li><span>Branche:</span> Patna, Noida, Delhi, Mumbai, Hyderabad</li>
                            </ul>
                            <p className="moreThanFiveYears">For more than 5 years, IT Service has been a reliable partner in the field of all sectors.</p>
                            <a href="about.html"><i className="fal fa-angle-right"></i> Discover More</a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-copyright">
                    <p>Powered By@ <a href="index.html">Orlank Technology Pvt Ltd.</a> - 2023</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
