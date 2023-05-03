import React, { useEffect, useState } from "react";
import TextEditor from "./Texteditor";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";

import axios from "axios";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import API_HOST from "../../../env";


const currencies = [
  {
    value: "Popular",
  },

  {
    value: "None",
  },
];

export default function Skillpopupcopy({
  data,
  index,
  page,
  selecteddelete,
  setSelecteddelete,
  setRecall,
  recall,
}) {
  const navigate = useNavigate();

  const [currency, setCurrency] = React.useState(
    data?.popularCategory ? "Popular" : "None"
  );


  const [checkonex, setCheckonex] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [desc, setDesc] = useState("");
  

  useEffect(() => {
    setCheckonex(false);
    setCategoryName(data?.category);
    setCurrency(data?.popularCategory ? "Popular" : "None");
    setDesc(data?.description ? data?.description : " ");
  }, [data]);

 

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleUpdateblog = (data1) => {
    if (data1 === "Popular") {
      axios.post(`${API_HOST}/theCategory/editCategory`, {
        categoryId: data?.categoryId,
        popularCategory: true,
      });
    }

    if (data1 === "None") {
      axios.post(`${API_HOST}/theCategory/editCategory`, {
        categoryId: data?.categoryId,
        popularCategory: false,
      });
    }
  };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "3vw" }}>
          <div
            className="checkbox"
            onClick={() => {
              setCheckonex(!checkonex);
              console.log(selecteddelete);
              if (selecteddelete?.indexOf(data?.categoryId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.categoryId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.categoryId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.categoryId]);
              }
            }}
          >
            {checkonex ? (
              <DoneIcon
                style={{
                  fontSize: "0.81vw",
                  color: "blueviolet",
                  fontWeight: "600",
                }}
              />
            ) : (
              ""
            )}{" "}
          </div>
        </div>
        <div style={{ width: "6vw", cursor: "pointer" }}>
          #{(page - 1) * 20 + (index + 1)}
        </div>
        <div
          style={{
            width: "20vw",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.category}
          <img
            onClick={() => navigate(`/dashbaord/editcategory/${data?.categoryId}`)}
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>
        <div style={{ width: "9vw" }}>{data?.jobsCount}</div>
        <div style={{ width: "13vw" }}>{data?.cataloguesCount}</div>
        <div
          style={{
            width: "18vw",
            display: "flex",
            alignItems: "center",
            paddingRight: "3vw",
          }}
        >
          <div style={{ marginBottom: "0.5vw" }} className="inputtypeformfield">
            <TextField
              id="standard-select-currency"
              select
              style={{
                width: "100%",
                textAlign: "left",
                borderBottom: "0.11px solid white",
                color: "black !important",
              }}
              value={currency}
              onChange={handleChange}
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem
                  hidden={option.value === "Select Category" ? true : false}
                  key={option.value}
                  value={option.value}
                  onClick={() => handleUpdateblog(option.value)}
                >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div style={{ width: "7vw", display: "flex", alignItems: "center" }}>
          {/* {data?.created_at?.slice(0, 10)} */}
          {new Date(data?.created_at).getDate()}/
          {new Date(data?.created_at).getMonth() + 1}/
          {new Date(data?.created_at).getFullYear()}
        </div>
      </div>
   </div>
  );
}
