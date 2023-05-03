import React, { useEffect, useState } from "react";
import { SearchSharp } from "@mui/icons-material";

import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

import Skillpopupcopy from "./Skillpopupcopy";

import "./Invoice.css";

export default function Users() {
  const [toggler] = useState(1);

  const [page1, setPage1] = useState(1);

  const [setSelectedCategory1, setSetSelectedCategory1] = useState("");

  const [allusers1, setAllusers1] = useState([]);
  const width = 800;
  const [recall1, setRecall1] = useState(false);
  const [selecteddelete1, setSelecteddelete1] = useState([]);
  const [sort, setSort] = useState("created_at");
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/invoice/forAdminInvoices?pageSize=20&pageNumber=${page1}&search=${setSelectedCategory1}&${sort}=true`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setAllusers1(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  }, [page1, setSelectedCategory1, recall1, sort]);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: width > 700 ? "4vw" : "10vw",
          marginBottom: "1vw",
        }}
        className="searchboxcontainer"
      >
        <div
          style={{
            height: width > 700 ? "3vw" : "9vw",
            paddingRight: "0.3vw",
            marginTop: "0vw",
          }}
          className="serachjobbox"
        >
          <span>
            <SearchSharp style={{ fontSize: width > 700 ? "1.7vw" : "4vw" }} />
          </span>
          <input
            type="text"
            placeholder={"search Buyer Name"}
            value={setSelectedCategory1}
            onChange={(e) => {
              setSetSelectedCategory1(e.target.value);
            }}
          />
        </div>
      </div>

      {toggler === 1 && (
        <div className="ScrollTable">
          <div
            style={{
              margin: "0vw 1vw",
              padding: "0vw 1vw",
              width: width > 700 ? "80vw" : "192vw",
            }}
            className="navoftableblogs"
          >
            <div style={{ width: width > 700 ? "12vw" : "30vw" }}>
              Invoice No
            </div>
            <div style={{ width: width > 700 ? "16vw" : "50vw" }}>
              Buyer Name
              <span
                onClick={() => {
                  setSort("buyerName");
                }}
              >
                {sort === "buyerName" ? (
                  <UnfoldLessIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                    }}
                  />
                )}
              </span>{" "}
            </div>
            <div style={{ width: width > 700 ? "11vw" : "30vw" }}>
              Total Amount
              <span
                onClick={() => {
                  setSort("totalValue");
                }}
              >
                {sort === "totalValue" ? (
                  <UnfoldLessIcon
                    style={{
                      width: width > 700 ? "2vw" : "5",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                    }}
                  />
                )}
              </span>
            </div>
            <div style={{ width: width > 700 ? "9vw" : "20vw" }}>Tax </div>
            <div style={{ width: width > 700 ? "16vw" : "40vw" }}>
              Total Invoice Amount
              <span
                onClick={() => {
                  setSort("grandTotal");
                }}
              >
                {sort === "grandTotal" ? (
                  <UnfoldLessIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                    }}
                  />
                )}{" "}
              </span>{" "}
            </div>

            <div style={{ width: width > 700 ? "11vw" : "30vw" }}>
              Created on{" "}
              <span
                onClick={() => {
                  setSort("created_at");
                }}
              >
                {sort === "created_at" ? (
                  <UnfoldLessIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon
                    style={{
                      width: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                    }}
                  />
                )}
              </span>
            </div>

            <div style={{ width: width > 700 ? "8vw" : "15vw" }}> </div>
          </div>
          {allusers1?.length > 0 &&
            allusers1?.map((data, index) => {
              return (
                <Skillpopupcopy
                  width={900}
                  data={data}
                  index={index}
                  page={page1}
                  setSelecteddelete={setSelecteddelete1}
                  selecteddelete={selecteddelete1}
                  setRecall={setRecall1}
                  recall={recall1}
                />
              );
            })}

          <div
            style={{ width: width > 700 ? "25vw" : "90vw" }}
            className="paginationbox"
          >
            <div
              onClick={() => {
                if (page1 > 1) {
                  setPage1(page1 - 1);
                }
              }}
            >
              <ArrowBackIosIcon
                style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                onClick={() => {
                  if (page1 - 1 > 0) {
                    setPage1(page1 - 1);
                  }
                }}
              />
            </div>

            <div
              hidden={page1 - 4 > 0 ? false : true}
              onClick={() => setPage1(page1 - 4)}
            >
              {page1 - 4}
            </div>
            <div
              hidden={page1 - 3 > 0 ? false : true}
              onClick={() => setPage1(page1 - 3)}
            >
              {page1 - 3}
            </div>
            <div
              hidden={page1 - 2 > 0 ? false : true}
              onClick={() => setPage1(page1 - 2)}
            >
              {page1 - 2}
            </div>
            <div
              hidden={page1 - 1 > 0 ? false : true}
              onClick={() => setPage1(page1 - 1)}
            >
              {page1 - 1}
            </div>
            <div style={{ color: "#2A6599" }}>{page1}</div>
            <div onClick={() => setPage1(page1 + 1)}>{page1 + 1}</div>
            <div onClick={() => setPage1(page1 + 2)}>{page1 + 2}</div>
            <div onClick={() => setPage1(page1 + 3)}>{page1 + 3}</div>

            <div onClick={() => setPage1(page1 + 1)}>
              <ArrowForwardIosIcon
                style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                onClick={() => {
                    setPage1(page1 + 1);
                  }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
