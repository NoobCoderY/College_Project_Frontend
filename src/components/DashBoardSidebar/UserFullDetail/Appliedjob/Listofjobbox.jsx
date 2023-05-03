import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router";

export default function Listofjobbox({ data, data1, width }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          display: "block",
          width: width > 700 ? "" : "90vw",
          marginLeft: width > 700 ? "0.5vw" : "2vw",
          marginRight:"0.8vw"
        }}
        className="activejobpostbox"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5vw",
          }}
        >
          <div style={{ marginLeft: "0vw" }} className="tagblue">
            {data1?.category[0]?.category}
          </div>
          <div
            hidden
            style={{
              marginLeft: "1vw",
              fontSize: width > 700 ? "0.8vw" : "2.3vw",
            }}
          >
            <span>
              <FiberManualRecordIcon
                style={{
                  fontSize: width > 700 ? "1.5vw" : "4vw",
                  color: data1?.assignedJob
                    ? "greenyellow"
                    : data1?.purposal_id[0]?.jobPostId?.jobDoerId
                    ? "red"
                    : "yellow",
                }}
              />
            </span>
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          {data?.title?.length > 30
            ? data?.title?.slice(0, 32) + ".."
            : data?.title}{" "}
        </div>
        <div
          style={{ lineHeight: "1.2vw !important", color: "#0052cc" }}
          className="activejobpistbudgetbox"
        >
          <div>
            Bidding <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#000000",
              }}
            >
              Rs. {data1?.budget}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Location <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#000000",
              }}
            >
              {data?.remote
                ? "remote"
                : data?.location?.length > 20
                ? data?.location?.slice(0, 18) + ".."
                : data?.location}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Expired on <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#000000",
              }}
            >
              {data?.dueDate && (
                <span>
                  {new Date(data?.dueDate).getDate()}/
                  {new Date(data?.dueDate).getMonth() + 1}/
                  {new Date(data?.dueDate).getFullYear()}
                </span>
              )}
            </span>
          </div>
        </div>
        <div
          style={{ height: width > 700 ? "6.5vw" : "16vw", margin: "0vw" }}
          className="descriptionactibeobbox"
        >
          <div
            style={{
              height: width > 700 ? "6vw" : "15.5vw",
              color: "black",
              fontWeight: "400",
              fontSize: width > 700 ? "0.9vw" : "2.5vw",
            }}
          >
            {  data?.description?.slice(0, 250)}
          </div>
        </div>

        <hr />
        <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
          <div>
            Status -
            <span
              style={{
                color:
                  data1?.status === "Completed"
                    ? "green"
                    : data1?.status === "Accepted"
                    ? "#0052cc"
                    : "red",
              }}
            >
              {data1?.status ? data1?.status : "pending"}
            </span>
          </div>

          <div
            onClick={() => {
              navigate(
                `/dashbaord/applieddetail/${
                  data1?.bidderId ? data1?.bidderId : 2
                }`
              );
            }}
            style={{ color: "#000000", cursor: "pointer" }}
          >
            {" "}
            See More
          </div>
        </div>
      </div>
    </div>
  );
}
