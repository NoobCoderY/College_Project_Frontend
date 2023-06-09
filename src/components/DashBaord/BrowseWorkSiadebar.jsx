import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import img from "../../assets/walletimage/Activity.svg";
import img1 from "../../assets/Dashboard/Iconly-Light-outline-Bookmark.svg";



import img89 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Profile.svg";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function BrowseWorkSiadebar() {
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover" : undefined;

  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "simple-popover" : undefined;

  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };
  const open5 = Boolean(anchorEl5);
  const id5 = open5 ? "simple-popover" : undefined;

  const [anchorEl6, setAnchorEl6] = React.useState(null);
  const handleClick6 = (event) => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClose6 = () => {
    setAnchorEl6(null);
  };
  const open6 = Boolean(anchorEl6);
  const id6 = open6 ? "simple-popover" : undefined;

  const [anchorElx, setAnchorElx] = React.useState(null);

  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };

  const handleClosex = () => {
    setAnchorElx(null);
  };

  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;
  const navigate = useNavigate();

  const location = useLocation();

  const [colorsidebar, setColorsidebar] = useState(1);

  useEffect(() => {
    if (location.pathname === "/dashbaord/add") {
      setColorsidebar(1);
    }
    if (location.pathname === "/dashbaord/bins") {
      setColorsidebar(2);
    }

    if (location.pathname === "/dashbaord/allbins") {
      setColorsidebar(3);
    }


  }, [location]);

  return (
    <div style={{ position: "sticky" }} className="sidebardashbord-container">
      <Link to="/dashbaord/add">
        <div
          onClick={() => navigate("/dashbaord/add")}
          className={
            colorsidebar === 1 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img89} alt="" />
          Add Bin
        </div>
      </Link>

      <Link to="/dashbaord/bins">
        <div
          className={
            colorsidebar === 2 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img1} alt="" />
          List of Bin
        </div>
      </Link>
      <Link to="/dashbaord/allbins">
        <div
          className={
            colorsidebar === 3 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img1} alt="" />
          List of All Bin
        </div>
      </Link>
    </div>
  );
}
