import react from "react";
import "../css/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../app/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const submit = (e) => {
    if (username && password) {
      localStorage.setItem("token", "token-demo");
      dispatch(loginSuccess({ user: username, token: "token-demo" }));
      navigate("/");
    } else {
      if (!username) {
        document.querySelector("#username").style.border = "2px solid red";
      }
      if (!password) {
        document.querySelector("#password").style.border = "2px solid red";
      }
    }
  };

  const change = (e) => {
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
          Login Here... {user}
        </div>
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
        <button onClick={submit}>Login</button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontSize: "15px",
          }}
        >
          <Link to="/sign">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
