import { Profiler } from "react";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notfound from "./pages/Notfound";
import FindFriends from "./pages/FindFriends";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BottomBar from "./components/bottombar";
import { useEffect, useState } from "react";
import Sidebar2 from "./components/sidebar2";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "./app/features/auth/authSlice";

function App() {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  console.log(token, isAuthenticated);

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
  return (
    <>
      <div className="main">
        {/* {viewportWidth > 700 && isAuthenticated ? <Sidebar /> : <></>} */}
        <Router>
          <Navbar viewportWidth={viewportWidth} />
          {viewportWidth > 700 && isAuthenticated ? <Sidebar /> : <></>}
          <Routes>
            {isAuthenticated === false ? (
              <>
                <Route exact path="/*" element={<Login />}></Route>
                <Route exact path="/sign" element={<Sign />}></Route>
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/"
                  element={<Home viewportWidth={viewportWidth} />}
                />
                <Route
                  path="/profile"
                  element={<Profile viewportWidth={viewportWidth} />}
                />
                <Route path="/findFriends" element={<FindFriends />} />
                <Route path="/sidebar" element={<Sidebar2 />} />

                <Route path="/*" element={<Notfound />} />
              </>
            )}
          </Routes>
          {viewportWidth < 700 && isAuthenticated ? <BottomBar /> : <></>}
        </Router>
      </div>
    </>
  );
}

export default App;
