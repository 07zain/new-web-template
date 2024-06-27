'use client'
import React, { useState } from 'react';
import SubMenu from '../subMenu'
import '../menu.css'

const MenuItem = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleHover = () => {
    setShowSubMenu(true);
  };

  const handleLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <li className={item.hasSubs ? "hassubs" : ""} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <a href="#">{item.label}</a>
      {item.hasSubs && showSubMenu && <SubMenu items={item.subItems} />}
    </li>
  );
};
export default MenuItem;
