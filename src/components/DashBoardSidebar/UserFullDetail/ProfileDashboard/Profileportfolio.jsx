import React, { useEffect, useState } from "react";
import "./profile.css";

import ProfilePortfoliodetails from "./Profilepopup/ProfilePortfoliodetails";

import axios from "axios";
import API_HOST from "../../../../env";


export default function Profileportfolio({ width,user }) {
  const [allprotfolio, setAllprotfoilio] = useState([]);

  const [totalcount, setTotalcount] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=2&pageNumber=${page}&userId=${user?.userId}&projectTitle=`
        )
        .then((res) => {
          setAllprotfoilio([...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 1 ? true : false);
        });
    }
  }, [user]);
  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=2&pageNumber=${page}&userId=${user?.userId}&projectTitle=`
        )
        .then((res) => {
          setAllprotfoilio([...allprotfolio, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 1 ? true : false);
        });
    }
  }, [page]);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Portfolio</div>
        <div className="profiledetailnavmanu"></div>
      </div>

      <div className="pcatalofboxes">
        {allprotfolio.length > 0 &&
          allprotfolio?.map((portfolio, index) => {
            return (
              <ProfilePortfoliodetails
                portfolio={portfolio}
                width={width}
                key={index}
                setAllprotfoilio={setAllprotfoilio}
              />
            );
          })}
      </div>
      {totalcount && (
        <div onClick={() => setPage(page + 1)} className="ViewMorebutton">
          View More
        </div>
      )}
    </div>
  );
}
