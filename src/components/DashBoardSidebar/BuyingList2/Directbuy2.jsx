import React, { useEffect, useState } from "react";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useSelector } from "react-redux";

import Skillpopupcopy from "./Skillpopupcopy";

export default function Directbuy({ width }) {
  const { user } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [allusers, setAllusers] = useState([]);

  const [recall, setRecall] = useState(false);

  const [sort, setSort] = useState("created_at");

  useEffect(() => {
    if (user?.name) {
      axios
        .post(
          `${API_HOST}/admin/getAllBinsAdmin?
          `,
          { address: "" },
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          setAllusers(res.data?.bins);
        });
    }
  }, [page, setSelectedCategory, recall, user]);
  return (
    <div style={{ paddingTop: "1vw" }} className="BrowseWorkMain-cntainer">
      <div
        style={{
          overflowX: "scroll",
          width: "92vw",
          height: "calc(100vh - 4vw)",
        }}
        className="ScrollTable"
      >
        <div
          style={{
            margin: "0vw 0vw",
            padding: "0vw 1vw",
            width: width > 700 ? "80vw" : "192vw",
            marginTop: width > 700 && "0.61vw",
            justifyContent:"space-between"
          }}
          className="navoftableblogs"
        >
          <div style={{ width: width > 700 ? "18vw" : "30vw" }}>Bin_id</div>
          <div style={{ width: width > 700 ? "15vw" : "30vw" }}>Driver</div>
          <div style={{ width: width > 700 ? "30vw" : "50vw" }}>
            location
            <span
              onClick={() => {
                setSort("buyerName");
              }}
            ></span>{" "}
          </div>
          <div style={{ width: width > 700 ? "15vw" : "50vw" }}>
            pincode
            <span
              onClick={() => {
                setSort("buyerName");
              }}
            ></span>{" "}
          </div>
          <div style={{ width: width > 700 ? "10.5vw" : "50vw" }}>
            status
            <span
              onClick={() => {
                setSort("buyerName");
              }}
            ></span>{" "}
          </div>
          <div style={{ width: width > 700 ? "5vw" : "30vw" }}>
          
       </div>
        </div>
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return (
              <Skillpopupcopy
                width={width}
                data={data}
                index={index}
                page={page}
                setRecall={setRecall}
                recall={recall}
              />
            );
          })}

        
      </div>
    </div>
  );
}
