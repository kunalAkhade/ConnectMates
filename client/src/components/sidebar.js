import React from "react";
import "../css/sidebar.css";
import demo from "../Assets/demo.jpg";
import friendCircle from "../Assets/friendCircle.png";
import network from "../Assets/network.png";
import logOut from "../Assets/log-out.png";

function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar-main-profile">
        <img src={demo} alt="" />
      </div>
      <div className="sidebar-main-profile">
        <img src={friendCircle} alt="" />
      </div>
      <div className="sidebar-main-profile">
        <img src={network} alt="" />
      </div>
      <div
        onClick={(e) => {
          document.querySelector(".sidebar-main").style.width = "0px";
        }}
        className="sidebar-main-profile"
      >
        <img src={logOut} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
