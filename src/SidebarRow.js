import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${Selected && "Selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h1 className="sidebarRow__title">{title}</h1>
    </div>
  );
}

export default SidebarRow;
