import React from "react";
import "../css/bottombar.css";
import demo from "../Assets/demo.jpg";
import friendCircle from "../Assets/friendCircle.png";
import network from "../Assets/network.png";
import { useEffect, useState } from "react";

function BottomBar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="bottombar-outer-container">
          <div className="bottombar-main-profile">
            <img src={friendCircle} alt="" />
          </div>
          <div className="bottombar-main-profile">
            <img
              style={{ borderRadius: "100%", objectFit: "cover" }}
              src={demo}
              alt=""
            />
          </div>
          <div className="bottombar-main-profile">
            <img src={network} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
