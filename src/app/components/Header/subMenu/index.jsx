import React from 'react';
import '../menu.css'
const SubMenu = ({ items }) => {
  return (
    <ul className="dropdown">
      {items.map(subItem => (
        <li key={subItem.label}><a href="#">{subItem.label}</a></li>
      ))}
    </ul>
  );
};


export default SubMenu;
