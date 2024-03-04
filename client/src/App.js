import { Profiler } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notfound from "./pages/Notfound";
import FindFriends from "./pages/FindFriends";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import BottomBar from "./components/bottombar";
import { useEffect, useState } from "react";
import Sidebar2 from "./components/sidebar2";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
      {
        <div className="main">
          {viewportWidth > 700 ? <Sidebar /> : <></>}
          <Router>
            <Navbar />
            <Routes>
              {/* Define routes and their corresponding components */}
              <Route
                exact
                path="/"
                element={<Home viewportWidth={viewportWidth} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/findFriends" element={<FindFriends />} />
              <Route path="/sidebar" element={<Sidebar2 />} />
              {/* A catch-all route for 404 Not Found */}
              <Route element={<Notfound />} />
            </Routes>
            {viewportWidth < 700 ? <BottomBar /> : <></>}
          </Router>
        </div>
      }
    </>
  );
}

export default App;
