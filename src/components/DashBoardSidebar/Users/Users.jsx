import React, { useEffect, useState } from "react";
import "./appliedjob.css";
import { SearchSharp } from "@mui/icons-material";
import "./skill.css";
import "./blog.css";

import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Skillpopup from "./Skillpopup";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

export default function Users() {
  const [page, setPage] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [allusers, setAllusers] = useState([]);

  const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewUser?search=${setSelectedCategory}&pageNumber=${page}&pageSize=20&${sort}=true`
      )
      .then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  }, [page, setSelectedCategory, sort]);

  const [linkusers, setLinkusers] = useState();

  useEffect(() => {
    axios.get(`${API_HOST}/users/exportUser`).then((res) => {
      setLinkusers(res?.data?.success?.data?.Location);
    });
  }, []);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{ alignItems: "center", justifyContent: "space-between" }}
        className="searchboxcontainer"
      >
        <div
          style={{ left: "0vw", width: "34vw", marginLeft: "0%" }}
          className="serachjobbox"
        >
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            placeholder="search Users"
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
        </div>

        <a href={linkusers} download style={{ color: "white" }}>
          {" "}
          <div
            style={{
              width: "9vw",
              height: "3.5vw",
              padding: "0.51vw",
              fontSize: "1vw",
              background: "#0052cc",
              color: "white",
              fontWeight: "500",
              borderRadius: "0.3vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginRight: "2vw",
            }}
          >
            {" "}
            <span style={{ color: "white" }}> Export</span>
          </div>{" "}
        </a>
      </div>

      <div className="ScrollTable">
        <div
          style={{
            margin: "0vw 1vw",
            padding: "0vw 1vw",
            marginTop: "1vw",
          }}
          className="navoftableblogs"
        >
          <div style={{ width: "4vw" }}>Id</div>
          <div style={{ width: "6vw" }}> </div>
          <div style={{ width: "16.5vw" }}>
            Name{" "}
            <span
              onClick={() => {
                setSort("");
              }}
            >
              {sort === "" ? (
                <UnfoldLessIcon
                  style={{
                    width: "2vw",
                    cursor: "pointer",
                    color: "#0052CC",
                  }}
                />
              ) : (
                <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
              )}
            </span>{" "}
          </div>
          <div style={{ width: "18vw" }}>
            Email{" "}
            <span
              onClick={() => {
                setSort("emailId");
              }}
            >
              {sort === "emailId" ? (
                <UnfoldLessIcon
                  style={{
                    width: "2vw",
                    cursor: "pointer",
                    color: "#0052CC",
                  }}
                />
              ) : (
                <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
              )}
            </span>{" "}
          </div>
          <div style={{ width: "14vw" }}>Certify</div>
          <div style={{ width: "11vw" }}>Verify</div>
          <div style={{ width: "11vw" }}>Virtual Assistant</div>

          <div style={{ width: "10vw" }}>
            Joined on{" "}
            <span
              onClick={() => {
                setSort("created_at");
              }}
            >
              {sort === "created_at" ? (
                <UnfoldLessIcon
                  style={{
                    width: "2vw",
                    cursor: "pointer",
                    color: "#0052CC",
                  }}
                />
              ) : (
                <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
              )}
            </span>{" "}
          </div>
        </div>
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return <Skillpopup data={data} index={index} page={page} />;
          })}

        <div style={{ width: "25vw" }} className="paginationbox">
          <div
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            <ArrowBackIosIcon
              style={{ fontSize: "1.5vw" }}
              onClick={() => {
                if (page - 1 > 0) {
                  setPage(page - 1);
                }
              }}
            />
          </div>

          <div
            hidden={page - 4 > 0 ? false : true}
            onClick={() => setPage(page - 4)}
          >
            {page - 4}
          </div>
          <div
            hidden={page - 3 > 0 ? false : true}
            onClick={() => setPage(page - 3)}
          >
            {page - 3}
          </div>
          <div
            hidden={page - 2 > 0 ? false : true}
            onClick={() => setPage(page - 2)}
          >
            {page - 2}
          </div>
          <div
            hidden={page - 1 > 0 ? false : true}
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </div>
          <div style={{ color: "#2A6599" }}>{page}</div>
          <div onClick={() => setPage(page + 1)}>{page + 1}</div>
          <div onClick={() => setPage(page + 2)}>{page + 2}</div>
          <div onClick={() => setPage(page + 3)}>{page + 3}</div>

          <div onClick={() => setPage(page + 1)}>
            <ArrowForwardIosIcon
              style={{ fontSize: "1.5vw" }}
              onClick={() => {
                setPage(page + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
