import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import img from "../../assets/walletimage/Activity.svg";
import img1 from "../../assets/Dashboard/Iconly-Light-outline-Bookmark.svg";

import img2 from "../../assets/Dashboard/Iconly-Light-outline-Chart.svg";
import img3 from "../../assets/Dashboard/Iconly-Light-outline-Buy.svg";

import img4 from "../../assets/Dashboard/Iconly-Light-outline-Document.svg";
import img5 from "../../assets/Dashboard/Iconly-Light-outline-Paper Plus.svg";

import img6 from "../../assets/Dashboard/Iconly-Light-outline-Work.svg";

import img7 from "../../assets/Dashboard/Iconly-Light-outline-Paper.svg";
import img8 from "../../assets/Dashboard/Iconly-Light-outline-Setting.svg";
import img12 from "../../assets/walletimage/Iconly-Light-Location.svg";
import img17 from "../../assets/walletimage/Group 12656.svg";
import img89 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Profile.svg";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import img23 from "../../assets/Jobs/Iconly-Light-Paper Upload.svg";
import img18 from "../../assets/walletimage/Iconly-Light-outline-Ticket.svg";
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
    if (location.pathname === "/dashbaord") {
      setColorsidebar(1);
    }
    if (location.pathname === "/dashbaord/users") {
      setColorsidebar(2);
    }

    if (location.pathname === "/dashbaord/Buying-List") {
      setColorsidebar(3);
    }

    if (location.pathname === "/dashbaord/products") {
      setColorsidebar(4);
    }

    if (location.pathname === "/dashbaord/blogs") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/invoice") {
      setColorsidebar(6);
    }
    if (location.pathname === "/dashbaord/addblog") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/addblog2") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/bookcatalogue") {
      setColorsidebar(7);
    }
    if (location.pathname === "/dashbaord/proposals") {
      setColorsidebar(8);
    }
    if (location.pathname === "/dashbaord/category") {
      setColorsidebar(9);
    }
    if (location.pathname === "/dashbaord/catalogue") {
      setColorsidebar(10);
    }

    if (location.pathname === "/dashbaord/faq") {
      setColorsidebar(11);
    }
    if (location.pathname === "/dashbaord/addfaq") {
      setColorsidebar(11);
    }

    if (location.pathname === "/dashbaord/addstory") {
      setColorsidebar(12);
    }
    if (location.pathname === "/dashbaord/story") {
      setColorsidebar(12);
    }

    if (location.pathname === "/dashbaord/contactUs") {
      setColorsidebar(13);
    }
    if (location.pathname === "/dashbaord/cms") {
      setColorsidebar(14);
    }
  }, [location]);

  return (
    <div style={{ position: "sticky" }} className="sidebardashbord-container">
      <Link to="/dashbaord">
        <div
          className={
            colorsidebar === 1 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img style={{ width: "1.8vw" }} src={img} alt="" />
          Dashboard
        </div>
      </Link>

      <div
        onClick={() => navigate("/dashbaord/users")}
        className={
          colorsidebar === 2 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img89} alt="" />
        Users
      </div>

      <Link to="/dashbaord/Buying-List">
        <div
          className={
            colorsidebar === 3 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img1} alt="" />
          Orders / Buying List
        </div>
      </Link>
      <Link to="/dashbaord/proposals">
        <div
          className={
            colorsidebar === 8 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img1} alt="" />
          Proposals
        </div>
      </Link>
      <Link to="/dashbaord/bookcatalogue">
        <div
          className={
            colorsidebar === 7 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img3} alt="" />
          Direct Buy
        </div>
      </Link>
      <Link to="/dashbaord/products">
        <div
          className={
            colorsidebar === 4 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img4} alt="" />
          Products
        </div>
      </Link>
      <Link to="/dashbaord/catalogue">
        <div
          className={
            colorsidebar === 10 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img5} alt="" />
          Websites
        </div>
      </Link>

      <Link to="/dashbaord/invoice">
        <div
          className={
            colorsidebar === 6 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img6} alt="" />
          Invoice{" "}
        </div>
      </Link>

      <div
        onClick={handleClick4}
        className={
          colorsidebar === 5 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img7} alt="" />
        Blogs
      </div>

      <div
        onClick={handleClickx}
        className={
          colorsidebar === 9 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img17} alt="" />
        Category
      </div>
      <div
        onClick={handleClick6}
        className={
          colorsidebar === 11 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img2} alt="" />
        FAQ
      </div>
      <div
        onClick={handleClick5}
        className={
          colorsidebar === 12 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img2} alt="" />
        Story
      </div>

      <Link to="/dashbaord/contactUs">
        <div
          className={
            colorsidebar === 13 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img12} alt="" />
          Contact Us
        </div>
      </Link>

      <Popover
        id={idx}
        open={openx}
        anchorEl={anchorElx}
        onClose={handleClosex}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addcategory");
            handleClosex();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Category
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/category");
            handleClosex();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          List of Category
        </Typography>
      </Popover>

      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addJob");
            handleClose2();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Work
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/jobs");
            handleClose2();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Work
        </Typography>
      </Popover>

      <Popover
        id={id4}
        open={open4}
        anchorEl={anchorEl4}
        onClose={handleClose4}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addblog");
            handleClose4();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Blog (By Author)
        </Typography>
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addblog2");
            handleClose4();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Blog (By Team)
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/blogs");
            handleClose4();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Blogs
        </Typography>
      </Popover>

      <Popover
        id={id5}
        open={open5}
        anchorEl={anchorEl5}
        onClose={handleClose5}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addstory");
            handleClose5();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Story
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/story");
            handleClose5();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Story
        </Typography>
      </Popover>
      <Popover
        id={id6}
        open={open6}
        anchorEl={anchorEl6}
        onClose={handleClose6}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addfaq");
            handleClose6();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add FAQ
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/faq");
            handleClose6();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of FAQ
        </Typography>
      </Popover>

      <Link to="/dashbaord/cms">
        <div
          className={
            colorsidebar === 14 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img8} alt="" />
          CMS
        </div>
      </Link>
    </div>
  );
}
