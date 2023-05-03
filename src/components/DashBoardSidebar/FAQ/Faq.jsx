import React, { useEffect, useState } from "react";

import { SearchSharp } from "@mui/icons-material";
import API_HOST from "../../../env";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ContactBox from "./ContactBox";
export default function Faq() {
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [allusers, setAllusers] = useState();
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [recall, setRecall] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/faq/viewFAQ?search=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
      )
      .then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  }, [page, setSelectedCategory, recall]);
  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{ alignItems: "center", justifyContent: "flex-start" }}
        className="searchboxcontainer"
      >
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            placeholder="Search FAQ Question"
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ScrollTable">
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return (
              <ContactBox data={data} setRecall={setRecall} recall={recall} />
            );
          })}
      </div>

      {totalpages !== 1 ? (
        <div style={{ width: "25vw" }} className="paginationbox">
          <div>
            <ArrowBackIosIcon style={{ fontSize: "1.5vw" }}   onClick={() => {
                  if (page - 1 > 0) {
                    setPage(page - 1);
                  }
                }}/>
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
          <div
            hidden={page + 1 > totalpages ? true : false}
            onClick={() => setPage(page + 1)}
          >
            {page + 1}
          </div>

          <div>
            <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }}   onClick={() => {
                    setPage(page + 1);
                  }} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
