import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar2() {
  const navigate = useNavigate();
  const handleClick = (name) => {
    if (name === "") {
      navigate("/");
    } else {
      navigate("/" + name);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "80px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "40px",
            width: "80vw",
            borderBottom: "0.1px solid gray",
            margin: "20px",
            textAlign: "center",
          }}
          onClick={() => handleClick("")}
        >
          <b>Home</b>
        </div>
        <div
          style={{
            height: "40px",
            width: "80vw",
            borderBottom: "0.1px solid gray",
            margin: "20px",
            textAlign: "center",
          }}
          onClick={() => handleClick("profile")}
        >
          <b>Profile</b>
        </div>
        <div
          style={{
            height: "40px",
            width: "80vw",
            borderBottom: "0.1px solid gray",
            margin: "20px",
            textAlign: "center",
          }}
          onClick={() => handleClick("findFriends")}
        >
          <b>Find Friends</b>
        </div>
      </div>
    </>
  );
}
