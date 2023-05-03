import React, { useEffect } from "react";
import "./Dashboard.css";
import DashbaordNav from "../../components/DashBaord/DashbaordNav";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import BrowseWorkSiadebar from "../../components/DashBaord/BrowseWorkSiadebar";

export default function Dashbaord() {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const { user } = useSelector((state) => state.user);
  return (
    <div style={{ height: "100vh" }}>
      <DashbaordNav user={user} />
      <div>
        <div style={{ display: "flex",   height: "calc(100vh - 4vw)", }} className>
          <BrowseWorkSiadebar />
          <div
             className="heightofbox"
            style={{
              background: "#FBFBFB",
              width: "84vw",
              height: "calc(100vh - 4vw)",
              overflow: 'hidden',
              overflowX: "hidden",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
