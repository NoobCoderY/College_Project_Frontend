import "./App.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute2 from "./ProtectedRoute2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashbaord from "./pages/Dashbaord/Dashbaord";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { userActions } from "./store/userSlice";

import Addblog2 from "./components/DashBoardSidebar/AddBlog copy/Addblog2";

import Directbuy from "./components/DashBoardSidebar/BuyingList/Directbuy";
import Directbuy2 from "./components/DashBoardSidebar/BuyingList2/Directbuy2";

function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const { loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(
        userActions.setUser({
          user: { ...user },
        })
      );
    }
  }, [loggedInStatus]);

  const [width, setWidth] = useState(window.innerWidth);

  //FUNCTIONS
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                auth={
                  JSON.parse(localStorage.getItem("user"))?.name ? true : false
                }
              >
                <LayoutsWithNavbar />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/dashbaord"
            element={
              <ProtectedRoute2
                auth={
                  JSON.parse(localStorage.getItem("user"))?.name ? true : false
                }
              >
                <Dashbaord />
              </ProtectedRoute2>
            }
          >
           

            <Route path="/dashbaord/add" element={<Addblog2 />} />

          

            <Route
              path="/dashbaord/bins"
              element={<Directbuy width={width} />}
            />

            <Route
              path="/dashbaord/allbins"
              element={<Directbuy2 width={width} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
