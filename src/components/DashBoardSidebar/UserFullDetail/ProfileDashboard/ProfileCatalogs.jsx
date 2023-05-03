import React, { useEffect, useState } from "react";
import "./profile.css";



import axios from "axios";
import API_HOST from "../../../../env";
import ProfileCatelogdetails from "../../Catalogue/ProfileCatelogDetails";

export default function ProfileCatalogs({ width, user }) {
  const [allCatalogs, setAllCatalogs] = useState([]);
  const [totalcount, setTotalcount] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/websites/userWebsitesViaAdmin?pageSize=3&pageNumber=${page}&userName=${user?.userName}`
        )
        .then((res) => {
          setAllCatalogs([...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 2 ? true : false);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/websites/userWebsitesViaAdmin?pageSize=3&pageNumber=${page}&userName=${user?.userName}`
        )
        .then((res) => {
          setAllCatalogs([...allCatalogs, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 2 ? true : false);
        });
    }
  }, [page]);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Catalogue</div>
      </div>

      <div style={{ margin: width>700?"0.25vw":"1.5vw" }} className="pcatalofboxes">
        {allCatalogs?.length > 0 &&
          allCatalogs?.map((catalogue, index) => {
            return (
              <ProfileCatelogdetails
                width={width}
                key={index}
                catalogue={catalogue}
                setAllCatalogs={setAllCatalogs}
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
