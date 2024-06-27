import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import './ServiceCard.css';

const ServiceCard = ({ title, link }) => {
  return (
    <div className="service-item-five mt-10">
      <a href={link} className="service-link">
        {title}
        <HiArrowLongRight />
      </a>
    </div>
  );
}

export default ServiceCard;
