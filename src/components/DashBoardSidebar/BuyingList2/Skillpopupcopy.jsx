
import axios from "axios";
import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import API_HOST from "../../../env";
import { useNavigate } from "react-router";

export default function Skillpopupcopy({ width, data, setRecall, recall }) {
  const navigate = useNavigate();
  const ref = React.createRef();
  const handledelet = () => {
    axios.delete(`${API_HOST}/admin/deleteBin/${data?._id}`).then(() => {
      setRecall(!recall);
    });
  };
  return (
    <div ref={ref}>
      <div
        style={{
          alignItems: "center",
          margin: "1vw 0vw",
          padding: width > 700 ? "0.5vw  1vw" : "2vw",
          color: "black",
          width: width > 700 ? "80vw" : "192vw",
          cursor: "pointer",
          justifyContent: "space-between",
        }}
      
        className="navoftableblogsdata"
      >
        <div style={{ width: width > 700 ? "17vw" : "30vw" }}>{data?._id}</div>
        <div style={{ width: width > 700 ? "16vw" : "30vw" }}>
          {data?.assinged_driver?.user?.name}
        </div>
        <div style={{ width: width > 700 ? "30vw" : "50vw" }}>
          {data?.address?.slice(0, 40)}
        </div>
        <div style={{ width: width > 700 ? "7vw" : "30vw" }}> {data?.pin}</div>

        <div
          style={{
            width: width > 700 ? "17vw" : "12vw",
            display: "flex",
            justifyContent: "space-around",
            color: data?.status === "Order placed" ? "green" : "red",
            fontSize: "0.85vw",
          }}
        >
          {data?.binStatus}
        </div>
        <div
          onClick={() => {
            handledelet();
          }}
          style={{ width: width > 700 ? "5vw" : "30vw" }}
        >
          <DeleteOutlineIcon stye={{ width: "2vw" }} />
        </div>
      </div>
    </div>
  );
}
