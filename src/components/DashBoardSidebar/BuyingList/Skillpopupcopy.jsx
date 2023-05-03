import React from "react";

import { useNavigate } from "react-router";

export default function Skillpopupcopy({ width, data }) {
  const navigate = useNavigate();
  const ref = React.createRef();

  return (
    <div ref={ref}>
      <div
        style={{
          alignItems: "center",
          margin: "1vw 0vw",
          padding: width > 700 ? "0.5vw  1vw" : "2vw",
          color: "black",
          width: width <= 700 && "192vw",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/dashbaord/direct-buy-details/${data?.cartId}`);
        }}
        className="navoftableblogsdata"
      >
        <div style={{ width: width > 700 ? "14.4vw" : "30vw" }}>
          <span>
            <img
              style={{ width: "1.4vw", margin: "0vw", marginRight: "0.2vw" }}
              src={data?.website_id[0]?.websiteLogo}
              alt=""
            />
          </span>{" "}
          {data?.website_id[0]?.websiteName}
        </div>
        <div style={{ width: width > 700 ? "10.4vw" : "50vw" }}>
          {data?.fullName}
        </div>
        <div style={{ width: width > 700 ? "9vw" : "30vw" }}>
          {" "}
          {data?.mobile}
        </div>
        <div style={{ width: width > 700 ? "16.7vw" : "30vw" }}>
          {" "}
          {data?.emailId}
        </div>

        <div style={{ width: width > 700 ? "13.3vw" : "40vw" }}>
          {" "}
          Rs.{parseFloat(data?.finalAmount).toFixed(2)}
        </div>
        <div style={{ width: width > 700 ? "7.5vw" : "30vw" }}>
          {/* {data?.created_at?.slice(0, 10)} */}
          {new Date(data?.created_at).getDate()}/
          {new Date(data?.created_at).getMonth() + 1}/
          {new Date(data?.created_at).getFullYear()}
        </div>
        <div
          style={{
            width: width > 700 ? "8vw" : "12vw",
            display: "flex",
            justifyContent: "space-around",
            color: data?.status === "Order placed" ? "green" : "red",
            fontSize: "0.85vw",
          }}
        >
          {data?.status}
        </div>
      </div>
    </div>
  );
}
