import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import JobbiddinglisatPopup from "./JobbiddinglisatPopup";
export default function BiddingPropasalList({
  listOfBider,
  Jobdetils,
  setpoststatus,
  poststatus,
}) {
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState(1);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="navoftableblogs">
        <div style={{ width: "15vw" }}>Name</div>
        <div style={{ width: "20vw" }}>Job Details</div>
        <div style={{ width: "12vw" }}>Date</div>
        <div style={{ width: "10vw" }}>Bid value</div>
        <div style={{ width: "15vw" }}>Status</div>
        <div style={{ width: "7vw" }}></div>
      </div>

      {listOfBider?.length > 0 &&
        listOfBider?.map((data, index) => {
          return (
            <JobbiddinglisatPopup
              data={data}
              Jobdetils={Jobdetils}
              setpoststatus={setpoststatus}
            />
          );
        })}

      {totalpages !== 1 ? (
        <div style={{ width: "25vw" }} className="paginationbox">
          <div>
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
          <div
            hidden={page + 1 > totalpages ? true : false}
            onClick={() => setPage(page + 1)}
          >
            {page + 1}
          </div>

          <div>
            <ArrowForwardIosIcon
              style={{ fontSize: "1.5vw" }}
              onClick={() => {
                setPage(page + 1);
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
