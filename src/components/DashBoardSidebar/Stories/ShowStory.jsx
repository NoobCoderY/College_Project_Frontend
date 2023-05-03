import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../../../assets/Success stories/_Page Header.svg";
import API_HOST from "../../../env";
import "./Stories.css";
import { useNavigate, useParams } from "react-router";

export default function Stories( ) {
  const { id } = useParams();
  const [fatch, setfatch] = useState();

  const [stories, setStories] = useState();

  useEffect(() => {
    axios.get(`${API_HOST}/stories/viaId?storyId=${id}`).then((res) => {
      setStories(res?.data?.success?.data);
    });
  }, [fatch]);
  

 const  width=900;

  return (
    <div>
    <div
      style={{
        height: width > 700 ? "calc( 100vh - 4vw)" : "calc( 100vh - 14vw)",
        margin: "0vw",
        padding: "0vw",
        overflow: "hidden",
      }}
      className="BrowseWorkMain-cntainer"
    >
      <div className="storiesnavbar">
        <div className="storyheading">{stories?.heading}</div>
      </div>
      <div className="">
        <div className="storycontent">
          <div className="storycontentdsta ">
            <div
              className="storycontentdataedtiror"
              dangerouslySetInnerHTML={{ __html: stories?.content }}
            ></div>
          </div>
          <div className="storyimage">
            <img src={stories?.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}
