import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sign() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const submit = (e) => {
    if (email && name && username && password) {
    } else {
      if (!email) {
        document.querySelector("#email").style.border = "2px solid red";
      }
      if (!name) {
        document.querySelector("#name").style.border = "2px solid red";
      }
      if (!username) {
        document.querySelector("#username").style.border = "2px solid red";
      }
      if (!password) {
        document.querySelector("#password").style.border = "2px solid red";
      }
    }
  };

  const change = (e) => {
    console.log(e.target.name);
    if (e.target.name === "email") {
      if (email) {
        document.querySelector("#email").style.border = "2px solid black";
      } else {
        document.querySelector("#email").style.border = "2px solid red";
      }
    }
    if (e.target.name === "name") {
      if (name) {
        document.querySelector("#name").style.border = "2px solid black";
      } else {
        document.querySelector("#name").style.border = "2px solid red";
      }
    }
    if (e.target.name === "username") {
      if (username) {
        document.querySelector("#username").style.border = "2px solid black";
      } else {
        document.querySelector("#username").style.border = "2px solid red";
      }
    }
    if (e.target.name === "password") {
      if (password) {
        document.querySelector("#password").style.border = "2px solid black";
      } else {
        document.querySelector("#password").style.border = "2px solid red";
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "center",
            fontSize: "20px",
          }}
        >
          Sign In...
        </div>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email"
          onBlur={change}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          onBlur={change}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          name="username"
          id="username"
          type="text"
          onBlur={change}
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          name="password"
          id="password"
          type="Password"
          onBlur={change}
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={submit}>Sign in</button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontSize: "15px",
          }}
        >
          Already Signed in? <Link to="/">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
