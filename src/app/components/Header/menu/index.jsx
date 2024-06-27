import React from 'react';
import MenuItem from '../MenuItem';
import '../menu.css'
const Menu = ({ items }) => {
  return (
    <div className="">
      <ul className="">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default Menu
