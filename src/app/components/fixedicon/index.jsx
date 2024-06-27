import React from 'react'
import './fixedicon.css'
const FixedIcon = () => {
  return (
    <div>
        <ul className="fixed-icons fixed-social-icons ">
        <li>
          <a href="tel:9113491857">
            <img src="../assets/phone1.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=9113491857">
            <img src="../assets/whatsapp.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/orlanktechnology/?igshid=MzRlODBiNWFlZA%3D%3D">
            <img src="../assets/instagram.svg" alt="" />
          </a>
        </li>
        <li>
          <a href=".html">
            <img src="../assets/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="mailto:info@orlank.com">
            <img src="../assets/gmail.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FixedIcon;
