import React from "react";

import "./TabItem.scss"
const TabItem = ({ title, handleClick, id, isActive }) => {
 
  return (
    <li className={"tabs-list__item" + (isActive ?" tabs-list__item--active":"")} id={id} onClick={handleClick}>
      <p className="tabs-list__text">{title}</p>
    </li>
  );
};
export default TabItem;
