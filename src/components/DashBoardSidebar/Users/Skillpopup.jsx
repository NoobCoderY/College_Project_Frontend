import React, { useEffect, useState } from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img1 from "../../../assets/images.png";
import { useNavigate } from "react-router";
import axios from "axios";
import API_HOST from "../../../env";

export default function Skillpopup({ data, index, page }) {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  useEffect(() => {
    setVerify(data?.verifiedByAdmin);
  }, [data]);

  const verifyuser = () => {
    axios
      .post(
        `${API_HOST}/users/editUser`,
        {
          verifiedByAdmin: true,
          userId: data?.userId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setVerify(true);
      });
  };
  const [verify1, setVerify1] = useState(false);
  const [verify2, setVerify2] = useState(false);

  useEffect(() => {
    setVerify1(data?.certifiedByAdmin);
  }, [data]);

  useEffect(() => {
    setVerify2(data?.eliteUser);
  }, [data]);

  const verifyuser1 = () => {
    axios
      .post(
        `${API_HOST}/users/editUser`,
        {
          certifiedByAdmin: true,
          userId: data?.userId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setVerify1(true);
      });
  };
  const verifyuser2 = () => {
    axios
      .post(
        `${API_HOST}/users/editUser`,
        {
          eliteUser: true,
          userId: data?.userId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setVerify2(true);
      });
  };

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
        }}
        className="navoftableblogsdata navofusertavle"
      >
        <div
          onClick={() => {
            navigate(`/dashbaord/${data?.userName}/My Profile`);
          }}
          style={{ width: "4vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>
        <div style={{ width: "6vw" }}>
          <img
            onClick={() => {
              navigate(`/dashbaord/${data?.userName}/My Profile`);
            }}
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.media ? img : data?.media}
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/${data?.userName}/My Profile`);
          }}
          style={{ width: "17vw", cursor: "pointer" }}
        >
          {data?.fullName}{" "}
          <span style={{ color: "red" }}>
            {data?.suspend && (
              <img src={img1} style={{ width: "1vw" }} alt="" srcset="" />
            )}
          </span>
        </div>

        <div style={{ width: "18vw", fontWeight: "400" }}>{data?.emailId}</div>
        <div style={{ width: "14vw", fontWeight: "400" }}>
          {!verify1 ? (
            <button
              onClick={() => verifyuser1()}
              style={{
                fontSize: "1vw",
                height: "2vw",
                border: "1px solid gray",
                background: "none",
                borderRadius: "3px",
              }}
            >
              click to Certify
            </button>
          ) : (
            <div
              style={{
                fontSize: "0.9vw",
                color: "#168B12",
              }}
            >
              Certify by SMS
            </div>
          )}
        </div>

        <div style={{ width: "11.5vw" }}>
          {!verify ? (
            <button
              onClick={() => verifyuser()}
              style={{
                fontSize: "1vw",
                height: "2vw",
                border: "1px solid gray",
                background: "none",
                borderRadius: "3px",
              }}
            >
              click to verify
            </button>
          ) : (
            <div
              style={{
                fontSize: "0.9vw",
                color: "#168B12",
              }}
            >
              verify by SMS
            </div>
          )}
        </div>
        <div style={{ width: "11vw" }}>
          {!verify2 ? (
            <button
              onClick={() => verifyuser2()}
              style={{
                fontSize: "0.95vw",
                height: "2vw",
                border: "1px solid gray",
                background: "none",
                borderRadius: "3px",
              }}
            >
              Virtual Assistant
            </button>
          ) : (
            <div
              style={{
                fontSize: "0.9vw",
                color: "#168B12",
              }}
            >
              Virtual Assistant
            </div>
          )}
        </div>
        <div style={{ width: "9vw" }}>
          {/* {data?.userCreateTime?.slice(0, 10)} */}
          {new Date(data?.userCreateTime).getDate()}/
          {new Date(data?.userCreateTime).getMonth() + 1}/
          {new Date(data?.userCreateTime).getFullYear()}
        </div>
      </div>
    </div>
  );
}
