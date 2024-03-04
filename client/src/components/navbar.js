import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";
import Open from "../Assets/open.png";
import close from "../Assets/close.png";
import menu from "../Assets/menu.png";

export default function Navbar() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [go, setgo] = useState(true);

  useEffect(() => {
    // Update viewport width when the window is resized
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const handleClick = (page) => {
    console.log(go, "kunal");
    navigate(`/${page}`);
  };

  const handleClickAlt = (page) => {
    if (go === true) {
      navigate(`/${page}`);
    } else {
      navigate("/");
    }
    setgo((prev) => !prev);
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
          {viewportWidth > 700 ? (
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
                <img width={20} height={20} src={Open} alt="" />
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
                <div onClick={() => handleClick("")}>
                  <b>Home</b>
                </div>
                <div onClick={() => handleClick("profile")}>
                  <b>Profile</b>
                </div>
                <div onClick={() => handleClick("findFriends")}>
                  <b>Find Friends</b>
                </div>
              </>
            ) : (
              <div onClick={() => handleClickAlt("sidebar")}>
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
