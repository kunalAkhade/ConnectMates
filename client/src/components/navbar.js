import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";
import Open from "../Assets/open.png";
import close from "../Assets/close.png";
import menu from "../Assets/menu.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ viewportWidth }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const url = useLocation();

  const [open2, setClose2] = useState(
    url.pathname === "/sidebar" ? true : false
  );
  console.log(url.pathname, open2);
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  const [open, setClose] = useState(true);
  function isSidebar() {
    if (open === true) {
      document.querySelector(".sidebar-main").style.width = "0";
      setClose((prev) => !prev);
    } else {
      document.querySelector(".sidebar-main").style.width = "100px";
      setClose((prev) => !prev);
    }
  }

  return (
    <>
      <div className="navbar-outer-container">
        <div onClick={isSidebar}>
          {viewportWidth > 700 && isAuthenticated ? (
            <>
              {open ? (
                <img
                  className="openCloseButton"
                  width={30}
                  height={30}
                  src={close}
                  alt=""
                />
              ) : (
                <img width={30} height={30} src={close} alt="" />
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="navbar-inner-container">
          <div className="navbar-section-first">
            <div onClick={() => handleClick("")}>ConnectMates</div>
            {/* <input
              className="navbar-search"
              type="text"
              placeholder="Search..."
            ></input> */}
          </div>

          <div className="navbar-section-second">
            {viewportWidth > 700 ? (
              <>
                <div
                  onClick={() => {
                    handleClick("");
                    setClose2(false);
                  }}
                >
                  <b>Home</b>
                </div>
                <div
                  onClick={() => {
                    handleClick("profile");
                    setClose2(false);
                  }}
                >
                  <b>Profile</b>
                </div>
                <div
                  onClick={() => {
                    handleClick("findFriends");
                    setClose2(false);
                  }}
                >
                  <b>Find Friends</b>
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  if (open2) {
                    window.history.back();
                    setClose2(false);
                  } else {
                    handleClick("sidebar");
                    setClose2(true);
                  }
                }}
              >
                <img width={20} height={20} src={menu} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-line" />
    </>
  );
}
