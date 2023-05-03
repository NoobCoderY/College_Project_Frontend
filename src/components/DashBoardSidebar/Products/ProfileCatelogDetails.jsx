import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import imgxx from "../../../assets/Success stories Definition/checkmark (1).svg";
import edit_logo from "../../../assets/My profile – 28/edit_logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import API_HOST from "../../../env";
import img46 from "../../../assets/My profile – 28/Landing page – 19.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "1vw",
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

export default function ProfileCatelogdetails({
  width,
  catalogue,
  setRecall,
  recall,
  websites,
}) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleltecatalogue = () => {
    axios
      .post(
        `${API_HOST}/userProducts/removeProduct`,
        {
          productId: catalogue?.productId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setRecall(!recall);
        handleClose();
      });
  };

  const myStr = catalogue?.productName;
  const contentNameRoute = myStr
    .replaceAll(" ", "-")
    .replaceAll("/", "_")
    .replaceAll("?", "_");

  return (
    <div>
      <div
        style={{ margin: width > 700 ? "1.5vw 0.5vw" : "2.5vw" }}
        className="pcatelogbox"
      >
        <div
          style={{
            background: `url('${
              catalogue?.files[0]?.file ? catalogue?.files[0]?.file : img46
            }') center center / contain no-repeat`,
          }}
          className="pcatelogimg"
        >
          <div className="pcatelogimg2">
            <div className="porfolioprofilemenu">
              <RemoveRedEyeIcon
                onClick={() =>
                  navigate(
                    `/dashbaord/product/${contentNameRoute}/${catalogue?.productId}`
                  )
                }
                style={{
                  margin: "0 0.2vw",
                  width: width > 700 ? "3vw " : "9vw",
                  height: width > 700 ? "3vw " : "9vw",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor: "white",
                  padding: "3px",
                }}
              />
            </div>

            <div onClick={handleOpen} className="porfolioprofilemenu">
              <DeleteOutlineOutlinedIcon
                style={{
                  width: width > 700 ? "3vw " : "9vw",
                  height: width > 700 ? "3vw " : "9vw",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor: "white",
                  padding: "3px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "4.2vw",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              margin: "0.5vw",

              width: "fit-content",
            }}
            className="pcatelogperson"
          >
            <div
              style={{ width: "fit-content" }}
              className="pcatelogpersonname"
            >
              <div className="pcatelogpersonname1">
                <span
                  style={{
                    display: "flex",
                    marginTop: "0.1vw",
              
                  }}
                >
                  {catalogue?.productName?.slice(0, 20)}
                </span>

                <div
                  style={{
                    fontSize: width > 700 ? "0.85vw" : "2.5vw",
                    display: "flex",
                    marginTop: "0.1vw",
                  }}
                >
                  {catalogue?.userId?.verifiedByAdmin === true && (
                    <img
                      style={{
                        width: width > 700 ? "1.1vw" : "3.1vw",
                        marginRight: "0.3vw",
                      }}
                      src={imgxx}
                      alt=""
                    />
                  )}
                  {catalogue?.userId?.fullName}
                  {catalogue?.userId?.certifiedByAdmin === true && (
                    <span style={{ display: "flex" }}>
                      (
                      <WorkspacePremiumIcon
                        style={{
                          width: width > 700 ? "1.1vw" : "3.1vw",
                          height: width > 700 ? "1.1vw" : "3.1vw",
                          margin: "0vw",
                          color: "#0052cc",
                        }}
                        alt=""
                      />
                      )
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "fit-content" }}>
            <div
              style={{
                margin: width > 700 ? "0.4vw 0.5vw" : "1vw 2vw",
                marginLeft: "0vw",
                maxWidth: width > 700 ? "12vw" : "30vw",
                marginBottom: "0.2vw",
                width: "fit-content",
                padding: width > 700 ? "0.3vw 0.6vw" : "1vw 1.5vw",
              }}
              className="tagblue"
            >
              {catalogue?.category?.category}
            </div>
            <div>
              <div
                style={{
                  fontSize: width > 700 ? "0.85vw" : "2.5vw",
                  display: "flex",
                  justifyItems: "right",
                  float: "right",
                  marginRight: "0.5vw",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    fontWeight: "500",
                    textAlign: "right",
                  }}
                >
                  <StarIcon
                    style={{
                      width: width > 700 ? "1.1vw" : "3.1vw",
                      height: width > 700 ? "1.1vw" : "3.1vw",
                      color: "#0052cc",
                    }}
                    alt=""
                  />
                  {catalogue?.rating?.$numberDecimal?.slice(0, 1)} ({" "}
                  {catalogue?.completedOrder} )
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            color: "black",
            margin: "0 0.5vw",
            height: width > 700 ? "5.5vw" : "12vw",
            lineHeight: "1.35vw",
            width: "90%",
            fontSize: "1.05vw",
            overflow: "hidden",
          }}
          className="pcatelog-title"
        >
          {catalogue?.description?.slice(0, 170)}
        </div>
        <hr style={{ padding: "0vw", margin: "0.3vw" }} />
        <div style={{ margin: "0.51vw 0.2vw" }} className="pcatelogdate">
          <div>
            <span>
              Price{" "}
              <span
                className="tagblue"
                style={{
                  margin: "0.0vw 0.2vw",

                  width: "fit-content",
                  padding: "0.2vw 0.6vw",
                  color: "white",
                }}
              >
                Rs. {catalogue?.costPrice ? catalogue?.costPrice : "---"}
              </span>{" "}
            </span>
          </div>

          <div
            onClick={() => {
              navigate(
                `/dashbaord/product/${contentNameRoute}/${catalogue?.productId}`
              );
            }}
          >
            <span>
              {" "}
              <span
                className="tagblue"
                style={{
                  margin: "0.0vw 0.2vw",

                  width: "fit-content",
                  padding: "0.2vw 0.6vw",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                View Product
              </span>{" "}
            </span>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle"> Delete Product</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#000000" }} />
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "2.7vw",
              fontWeight: "300",
            }}
            className="profiledetailstitle"
          >
            The action will delete this Product From all of your Products.
          </div>
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "2.7vw",
              fontWeight: "400",
              marginBottom: "5vw",
            }}
            className="profiledetailstitle"
          >
            Are you sure you want to delete this Product?
          </div>
          <hr style={{ color: "#000000" }} />
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClose}
            >
              Cancel
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
              onClick={deleltecatalogue}
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
