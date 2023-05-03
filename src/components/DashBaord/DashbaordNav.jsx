import React, { useState } from "react";
import "./DashBoard.css";
import "./Homebanner.css";
import { Dropdown } from "react-bootstrap";
import img from "../../assets/Logo/only sign svg.svg";
import img4 from "../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";

import { useDispatch } from "react-redux";
import LogoutIcon from "../../assets/icons/log-out.svg";
import { userActions } from "../../store/userSlice";

export default function DashbaordNav({ user }) {
  const dispatch = useDispatch();

  function logoutUser() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    dispatch(userActions.removeUser());
  }
  return (
    <div className="pnav-container">
      <div className="navlofogo">
        <img src={img} style={{height:"3.5vw"}} alt="" />
      </div>
      <div className="pnav-container2">
        <div className="profileDropdown">
          <Dropdown className="d-flex justify-content-center mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              <div
                style={{ margin: "0 1vw", width: "fit-content" }}
                className="settinsiconpnav pnavusername"
              >
                <div
                  style={{
                    overflow: "hidden",
                    display: "flex",
                    width: "fit-content",
                    marginRight: "1vw",
                  }}
                  className="pnav-name"
                >
                  {user?.name}
                </div>
                <div className="pnavuserimage">
                  <img src={user?.media ? user?.media : img4} alt="" />
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-2 px-3">
              {/* <div className="py-1 px-1 d-flex align-items-center">
                <Link to={`/profile`}>
                  <img src={UserIcon} className="mx-1" alt="user" />{" "}
                  <span className="profileDropdownMenu mx-2">Profile </span>
                </Link>
              </div>
              <div className="py-2 px-1 d-flex align-items-center">
                <Link to="/dashbaord/setting">
                  <img src={SettingsIcon} className="mx-1" alt="settings" />{" "}
                  <span className="profileDropdownMenu mx-2">Settings </span>
                </Link>
              </div> */}
              <div
                className="py-2 px-1 d-flex align-items-center cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => logoutUser()}
              >
                <img
                  src={LogoutIcon}
                  className="mx-1"
                  alt="logout"
                  style={{ cursor: "pointer" }}
                />{" "}
                <span
                  className="profileDropdownMenu mx-2"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </span>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
