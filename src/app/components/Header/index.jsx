import React from "react";
import './menu.css'
const Header = () => {
 <div>
 <div className="main">
             <ul className="mainnav">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li className="hassubs"><a href="#">Services</a>
                     <ul className="dropdown">
                         <li className="subs"><a href="#">Web Development</a></li>
                         <li className="subs"><a href="#">Mobile Apps</a></li>
                         <li className="subs hassubs"><a href="#">Designing</a>
                             <ul className="dropdown">
                                 <li className="subs"><a href="#">Web Design</a></li>
                                 <li className="subs"><a href="#">Graphic Design</a></li>
                                 <li className="subs"><a href="#">Logo Design</a></li>
                             </ul>
                         </li>
                     </ul>
                 </li>
                 <li><a href="#">Gallery</a></li>
                 <li className="hassubs"><a href="#">Contact</a>
                     <ul className="dropdown">
                         <li className="subs"><a href="#">Email</a></li>
                         <li className="subs hassubs"><a href="#">Address</a>
                             <ul className="dropdown">
                                 <li className="subs"><a href="#">Head Office</a></li>
                                 <li className="subs"><a href="#">Registered Office</a></li>
                                 <li className="subs"><a href="#">Locate us</a></li>
                             </ul>
                         </li>
                         <li className="subs"><a href="#">Phone</a></li>
                     </ul>
                 </li>
             </ul>
             <br style="clear: both;"/>
         </div></div>
};

export default Header;
