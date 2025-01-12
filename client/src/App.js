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
import { loginFailure, loginStart, loginSuccess } from "./app/features/auth/authSlice";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  //const { isAuthenticated, token } = useSelector((state) => state.auth);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  //console.log(token, isAuthenticated);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
  

      const fetch = async ()=>{
        try{
        if(localStorage.getItem("token")){
          dispatch(loginStart());
          const response = await axios.get("http://localhost:8080/api/v1/users/getAuthenticatedUser",{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          if(response?.ok){
            console.log("****"+response.data)
            dispatch(loginSuccess({user:response?.data.id, token:localStorage.getItem("token")}))
          }else{
            console.log("caughted")
            dispatch(loginFailure("Login authentication failed"))
          }
        }
        }catch(e){
          console.log("caught"+e)
          dispatch(loginFailure("Login authentication failed"))
        }
        
      }
     
    fetch();

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
          {viewportWidth > 700 ? <Sidebar /> : <></>}
          <Routes>
                
                <Route exact path="/sign" element={<Sign />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route
                  exact
                  path="/"
                  element={
                  <ProtectedRoute>                
                    <Home viewportWidth={viewportWidth} />
                  </ProtectedRoute>  
                }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile viewportWidth={viewportWidth} />
                    </ProtectedRoute>
                }
                />
                <Route path="/findFriends" element={
                  <ProtectedRoute >
                  <FindFriends />
                  </ProtectedRoute>} />
                <Route path="/sidebar" element={
                  <ProtectedRoute>
                  <Sidebar2 />
                  </ProtectedRoute>} />

                <Route path="/*" element={<Notfound />} />
          </Routes>
          {viewportWidth < 700 ? <BottomBar /> : <></>}
        </Router>
      </div>
    </>
  );
}

export default App;
