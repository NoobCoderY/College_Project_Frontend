import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRatings from "react-star-ratings";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import API_HOST from "../../../env";
import axios from "axios";
import img4 from "../../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import imageCompression from "browser-image-compression";
import { useNavigate, useParams } from "react-router";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img111111 from "../../../assets/unnamed.png";
import WebsiteCart from "./WebsiteCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const styl3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
  padding: "1vw",
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "hidden",
  padding: 1,
};
export default function DirectbuyDetails({ jobdetail, width }) {
  const [arrayoffiles, setArrayoffiles] = useState([]);

  const [down2, setDown2] = useState(false);
  const [down3, setDown3] = useState(false);
  const [down4, setDown4] = useState(false);

  const [data1, setdata1] = useState();
  const { id } = useParams();
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_HOST}/carts/byId?cartId=${id}`).then((res) => {
      setdata1(res?.data?.success?.data[0]);
    });
  }, [id]);

  const [imagesave, setImagesave] = useState();

  const [desc, setDesc] = useState("");
  const [descerr, setDescerr] = useState("");

  const [starBuyer, setStarBuyer] = useState(0);
  const [review, setReview] = useState("");

  const [setratingerror, setSetratingerror] = useState("");

  const handleAddIssue = () => {
    axios
      .post(
        `${API_HOST}/carts/cancelOrder`,
        {
          cartId: id,

          reason: desc,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        handleClose();
        setDesc("");
        setdata1(res?.data?.success?.data);
      });
  };

  async function handleImageUpload(event) {
    const imageFile = event.target.files[0];
    console.log(imageFile?.type?.includes("image"));

    if (imageFile?.type?.includes("image")) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log(
          "compressedFile instanceof Blob",
          compressedFile instanceof Blob
        ); // true
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        ); // smaller than maxSizeMB

        //   await uploadToServer(compressedFile); // write your own logic
        await setArrayoffiles([
          ...arrayoffiles,
          new File([compressedFile], `${compressedFile?.name}`),
        ]);
      } catch (error) {
        console.log(error);
      }
    } else {
      if (imageFile.size < 1024 * 1024) {
        setArrayoffiles([...arrayoffiles, imageFile]);
      }
    }
  }

  const [ratingproducts, setRatingproducts] = useState([]);

  useEffect(() => {
    const array = [];

    if (data1?.rating > 0) {
      data1?.ratingForProducts?.map((item) => {
        array?.push({
          product: item?.product_id,
          rating: item?.rating,
        });
      });
      setRatingproducts(array);
    } else {
      data1?.product?.map((item) => {
        array?.push({
          product: item?.web_id?.product_id,
          rating: 0,
        });
      });
      setRatingproducts(array);
    }
  }, [data1]);

  return (
    <div
      style={{
        height: width > 700 ? "calc(100vh - 4vw )" : "calc(100vh - 14vw )",
      }}
      className="ScrollTable"
    >
      <div
        style={{
          width: "100%",
          background: "white",
          padding: width > 700 ? "1vw 1vw" : "2vw",
          margin: "1vw 0vw",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            zIndex: "100",
            padding: "0.5vw 0.7vw",
            backgroundColor: "white",
            color: "#000",
            fontSize: "1.2vw",
            borderRadius: "0.3vw",
            border: "1px solid #d7d7d7",
            marginBottom: width > 700 ? "1vw" : "3vw",
            marginTop: "0vw",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosNewIcon />
        </button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="tagblue">
              {data1?.website_id?.category?.category}
            </div>
          </div>
          {
            <div style={{ display: "flex" }}>
              <div
                style={{
                  margin: "0",
                  height: width > 700 ? "2.4vw" : "8vw",
                  background: "#E4E4E4",
                  fontSize: "400",
                  marginRight: width > 700 ? "1vw" : "3vw",
                }}
                className="digitalwallate"
                onClick={handleOpen}
              >
                <span
                  style={{
                    padding: "0.6vw 0.5vw",
                    fontSize: "400",
                    background: "none",
                  }}
                >
                  {data1?.cancelOrder ? data1?.cancelBy : "Cancel Order"}
                </span>
              </div>
            </div>
          }
        </div>{" "}
        <div
          style={{
            fontWeight: "600",
            fontSize: width > 700 ? "1.3vw" : "3.5vw",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1vw",
            marginLeft: "1vw",
            color: "black",
            justifyContent: "space-between",
          }}
        >
          <div>{data1?.website_id?.websiteName}</div>

          <div>
            <div>
              Status :{" "}
              <span style={{ color: "green", marginRight: "1vw" }}>
                {data1?.status}
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
          <Box sx={width > 700 ? style1 : style2}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Cancel Order</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose}
                    style={{
                      fontSize: width > 700 ? "1.5vw" : "4vw",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#000000" }} />

            <div style={{ marginLeft: "1vw" }} className="jobpodtedfieldtitile">
              Cancellation Reason
            </div>
            <div style={{ marginLeft: "1vw" }} className="jobpostfieldinputbox">
              <textarea
                style={{ paddingTop: "0.5vw" }}
                type="text"
                name="desc"
                value={
                  data1?.cancelOrder || data1?.deliverd ? data1?.reason : desc
                }
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <p
              style={{
                color: "red",
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                marginLeft: "1vw",
              }}
            >
              {descerr}
            </p>

            {!data1?.cancelOrder && !data1?.deliverd && data1?.orderPlaced && (
              <div
                style={{ marginTop: "0.31vw" }}
                className="handlemoreaboutskill"
              >
                <div
                  style={{ cursor: "pointer", width: "10vw" }}
                  className="handlecirclieaboutsave"
                  onClick={handleAddIssue}
                >
                  Cancel Now
                </div>
              </div>
            )}
          </Box>
        </Modal>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <LocationOnOutlinedIcon
              style={{
                fontSize: width > 700 ? "1.5vw" : "4.5vw",
                fontWeight: "400",
                margin: "0.5vw 1vw",
              }}
            />
          </span>
          <span
            style={{
              fontSize: width > 700 ? "1.1vw" : "3vw",
              fontWeight: "500",
            }}
          >
            {data1?.website_id?.remote
              ? "Remote"
              : data1?.website_id?.companyAddress}
          </span>
        </div>
        <WebsiteCart
          width={width}
          websitedata={data1?.website_id}
          arrayofProducts={data1?.product}
        />
        <div
          style={{
            padding: "1vw",
            boxShadow:
              "-7px -7px 15px #e9e9e9, 10px 10px 20px rgba(124, 124, 124, 0.4)",
            borderRadius: "1vw",
            marginLeft: "1vw",
            width: "80vw",
          }}
          className="websiteoffercontainer "
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="orderdtailsinfoaddress">
              <div
                style={{ fontSize: "1.2vw", width: "50%", margin: "0.3vw" }}
                className="offerheading"
              >
                <label htmlFor="jj">
                  <div>Fullname</div>
                  <input
                    value={data1?.fullName}
                    id="jj"
                    className="websiteaddresdetailinput"
                    style={{ fontSize: "1.05vw", width: "22vw" }}
                  ></input>
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{ fontSize: "1.2vw", width: "50%", margin: "0.3vw" }}
                  className="offerheading"
                >
                  <label htmlFor="pp">
                    <div>Mobile </div>
                    <input
                      value={data1?.mobile}
                      id="pp"
                      className="websiteaddresdetailinput"
                      style={{ fontSize: "1.05vw", width: "22vw" }}
                    ></input>
                  </label>
                </div>

                <div
                  style={{ fontSize: "1.2vw", width: "50%", margin: "0.3vw" }}
                  className="offerheading"
                >
                  <label htmlFor="tt">
                    <div>Email Id </div>
                    <input
                      className="websiteaddresdetailinput"
                      id="tt"
                      value={data1?.emailId}
                      style={{ fontSize: "1.05vw", width: "28vw" }}
                    ></input>
                  </label>
                </div>
              </div>

              <div
                style={{ fontSize: "1.2vw", margin: "0.3vw" }}
                className="offerheading"
              >
                <label htmlFor="kk">
                  <div style={{ width: "100%" }}>Delivery Address </div>
                  <textarea
                    id="kk"
                    className="websiteaddresdetailinput"
                    value={data1?.address}
                    rows={2}
                    style={{ width: "50vw" }}
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="orderdtailsinfopayment">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ fontSize: "1.2vw", margin: "0.3vw" }}
                  className="offerheading"
                >
                  Total Taxable Price :
                </div>
                <div style={{ fontSize: "1.1vw" }}>
                  {" "}
                  Rs {parseFloat(data1?.totalPriceValue).toFixed(2)}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ fontSize: "1.2vw", margin: "0.3vw" }}
                  className="offerheading"
                >
                  Total Tax ( GST ) :
                </div>
                <div style={{ fontSize: "1.1vw" }}>
                  {" "}
                  Rs {parseFloat(data1?.totalGstValue).toFixed(2)}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ fontSize: "1.2vw", margin: "0.3vw" }}
                  className="offerheading"
                >
                  {data1?.website_id?.chargeName}{" "}
                  {data1?.website_id?.chargeName && ":"}
                </div>
                <div style={{ fontSize: "1.1vw" }}>
                  {" "}
                  {data1?.website_id?.amount !== "0"
                    ? "Rs" + parseFloat(data1?.website_id?.amount).toFixed(2)
                    : ""}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ fontSize: "1.2vw", margin: "0.3vw" }}
                  className="offerheading"
                >
                  Grand Total :
                </div>
                <div style={{ fontSize: "1.1vw" }}>
                  {" "}
                  Rs {parseFloat(data1?.finalAmount).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: down2
              ? `${
                  parseInt(
                    (data1?.files?.length + (width > 700 ? 3 : 1)) /
                      (width > 700 ? 4 : 2)
                  ) *
                    (width > 700 ? 13.5 : 35) +
                  (width > 700 ? 5 : 8)
                }vw`
              : "",
          }}
          className="boxofextension"
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDown2(!down2);
            }}
            className="flexofboxextentionnav"
          >
            <div style={{ color: down2 ? "#0052CC" : "", marginLeft: "0.5vw" }}>
              {data1?.files?.length > 0
                ? "view Documents"
                : "This order Does not have  any Documents  !"}
            </div>
            <div>
              {!down2 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          <div hidden={!down2}>
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data1?.files?.map((data) => {
                return (
                  <div
                    style={{ marginRight: "1vw" }}
                    className="boxofimageorpdf"
                  >
                    <div
                      onClick={() => {
                        if (
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "jpeg" ||
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "png" ||
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "svg" ||
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "jpg"
                        ) {
                          handleOpenx();
                          setImagesave(data?.file);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "jpeg" ||
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "png" ||
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "svg" ||
                          data?.file?.split(".")[
                            data?.file?.split(".")?.length - 1
                          ] === "jpg"
                            ? data?.file
                            : img111111
                        }
                        alt=""
                      />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{
                            color: "red",
                            fontSize: width > 700 ? "1.7vw" : "4vw",
                          }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data?.file?.split("%24")[1]?.slice(0, 17)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data?.file}`} download>
                          {" "}
                          <CloudDownloadOutlinedIcon
                            style={{
                              fontSize: width > 700 ? "1.5vw" : "4vw",
                              margin: "0 1vw",
                            }}
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Modal
            open={openx}
            onClose={handleClosex}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : styl3}>
              {imagesave && (
                <div className="imgbocofcerti">
                  <img src={imagesave} alt="" />
                </div>
              )}
            </Box>
          </Modal>
        </div>
        <div
          style={{
            height: down3 ? `${width > 700 ? 43 : 210}vw` : "",
          }}
          className="boxofextension"
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDown3(!down3);
            }}
            className="flexofboxextentionnav"
          >
            <div style={{ color: down3 ? "#0052CC" : "", marginLeft: "0.5vw" }}>
              Order
            </div>
            <div>
              {!down3 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          <div hidden={!down3}>
            <div
              style={{ margin: "1vw", flexWrap: "wrap", marginTop: "0vw" }}
              className="activejobpistbudgetbox"
            >
              <div className="boxblackbackg">
                Buyer ID <br />
                <div>
                  <span>
                    {data1?.user_id?.userId ? data1?.user_id?.userId : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Buyer Name <br />
                <div>
                  <span
                    onClick={() => {
                      navigate(
                        `/dashbaord/${data1?.user_id?.userName}/My Profile`
                      );
                    }}
                  >
                    <img
                      style={{
                        width: width > 700 ? "1.5vw" : "4vw",
                        margin: "0 0.1vw",
                        borderRadius: "50%",
                      }}
                      src={data1?.user_id?.media || img4}
                      alt=""
                    />{" "}
                    {data1?.user_id?.fullName ? data1?.user_id?.fullName : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Buyer Email <br />
                <div>
                  <span>
                    {data1?.user_id?.emailId ? data1?.user_id?.emailId : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Buyer Contact No <br />
                <div>
                  <span>
                    {data1?.user_id?.contactNo
                      ? data1?.user_id?.contactNo
                      : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Order Placed Date <br />
                <div>
                  {data1?.orderedDate && (
                    <span>
                      {new Date(data1?.orderedDate).getHours()}:
                      {new Date(data1?.orderedDate).getMinutes()}
                      {" , "}
                      {new Date(data1?.orderedDate).getDate()}/
                      {new Date(data1?.orderedDate).getMonth() + 1}/
                      {new Date(data1?.orderedDate).getFullYear()}
                    </span>
                  )}
                </div>
              </div>
              <div className="boxblackbackg">
                Order Amount <br />
                <div>
                  <span>Rs {parseFloat(data1?.finalAmount).toFixed(2)}</span>
                </div>
              </div>
              <div className="boxblackbackg">
                Order Cancel Date <br />
                <div>
                  {data1?.cancelDate && (
                    <span>
                      {new Date(data1?.cancelDate).getHours()}:
                      {new Date(data1?.cancelDate).getMinutes()}
                      {" , "}
                      {new Date(data1?.cancelDate).getDate()}/
                      {new Date(data1?.cancelDate).getMonth() + 1}/
                      {new Date(data1?.cancelDate).getFullYear()}
                    </span>
                  )}
                </div>
              </div>

              <div className="boxblackbackg">
                Seller Id <br />
                <div>
                  <span>
                    {data1?.website_id?.userId?.userId
                      ? data1?.website_id?.userId?.userId
                      : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Seller Name <br />
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(
                        `/dashbaord/${data1?.website_id?.userId?.userName}/My Profile`
                      );
                    }}
                  >
                    <img
                      style={{
                        width: width > 700 ? "1.5vw" : "4vw",
                        margin: "0 0.1vw",
                        borderRadius: "50%",
                      }}
                      src={data1?.website_id?.userId?.media || img4}
                      alt=""
                    />{" "}
                    {data1?.website_id?.userId?.fullName
                      ? data1?.website_id?.userId?.fullName
                      : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Seller Email <br />
                <div>
                  <span>
                    {data1?.website_id?.userId?.emailId
                      ? data1?.website_id?.userId?.emailId
                      : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Seller Contact No <br />
                <div>
                  <span>
                    {data1?.website_id?.userId?.contactNo
                      ? data1?.website_id?.userId?.contactNo
                      : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Order Ending Date <br />
                <div>
                  {data1?.deliverdDate && (
                    <span>
                      {new Date(data1?.deliverdDate).getHours()}:
                      {new Date(data1?.deliverdDate).getMinutes()}
                      {" , "}
                      {new Date(data1?.deliverdDate).getDate()}/
                      {new Date(data1?.deliverdDate).getMonth() + 1}/
                      {new Date(data1?.deliverdDate).getFullYear()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {!data1?.cancelOrder && data1?.orderPlaced && (
          <div
            style={{
              height: down4
                ? `${
                    parseInt(
                      (ratingproducts.length + (width > 700 ? 3 : 1)) /
                        (width > 700 ? 4 : 2)
                    ) *
                      (width > 700 ? 20.5 : 35) +
                    (data1?.rating
                      ? data1?.docs?.length
                      : arrayoffiles.length) *
                      (width > 700 ? 2.5 : 6) +
                    (width > 700 ? (!data1?.rating ? 61 : 36) : 158)
                  }vw`
                : "",
            }}
            className="boxofextension"
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDown4(!down4);
              }}
              className="flexofboxextentionnav"
            >
              <div>Order Completion</div>
              <div>
                {!down4 ? (
                  <KeyboardArrowDownIcon
                    style={{
                      fontSize: width > 700 ? "2vw" : "5vw",
                      margin: "1vw",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    style={{
                      fontSize: width > 700 ? "2vw" : "5vw",
                      margin: "1vw",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            </div>

            <div hidden={!down4}>
              <div
                style={{
                  marginLeft: "1vw",
                  marginTop: "0vw",
                  marginBottom: "1.5vw",
                }}
                className="flexofdtaes"
              >
                <div className="datesofcontact">Rating For Products</div>
              </div>
              <div style={{ marginLeft: "1vw" }} className="flexofoffers">
                {ratingproducts?.length > 0 &&
                  ratingproducts?.map((data, index) => {
                    return (
                      <div style={{ height: "18.5vw" }} className="Menuwebsite">
                        <div>
                          <img
                            style={{
                              cursor: "pointer",
                            }}
                            src={data?.product?.files[0]?.file}
                            alt=""
                          />
                          <div
                            style={{
                              cursor: "pointer",
                            }}
                            className="namemenuweb"
                          >
                            {data?.product?.productName?.slice(0, 18)}
                          </div>

                          <div
                            style={{
                              marginBottom: "0vw",
                              paddingBottom: "0.3vw",
                            }}
                            className="pricemenuweb"
                          >
                            <span>Rs. {data?.product?.costPrice}</span>{" "}
                            {data?.product?.sellingPrice && (
                              <del
                                style={{
                                  display: "flex",
                                  fontSize: "0.8vw",
                                  margin: "0 0.5vw",
                                }}
                              >
                                ( Rs {data?.product?.sellingPrice})
                              </del>
                            )}
                            {data?.product?.sellingPrice &&
                              parseFloat(
                                ((data?.product?.sellingPrice -
                                  data?.product?.costPrice) *
                                  100) /
                                  data?.product?.sellingPrice
                              ).toFixed(0) + " % off"}
                          </div>
                        </div>
                        <span
                          style={{
                            width: "10vw",
                            position: "relative",
                            bottom: "0.5vw",
                            left: "1vw",
                          }}
                        >
                          <StarRatings
                            rating={data?.rating}
                            starRatedColor="#0052CC"
                            starDimension={width > 700 ? "1.6vw" : "4vw"}
                            starSpacing={width > 700 ? "0.4vw" : "1vw"}
                            numberOfStars={5}
                            name="rating"
                            changeRating={(e) => {
                              setRatingproducts([
                                ...ratingproducts?.slice(0, index),
                                { product: data?.product, rating: e },
                                ...ratingproducts?.slice(
                                  index + 1,
                                  ratingproducts?.length
                                ),
                              ]);
                            }}
                          />
                        </span>
                      </div>
                    );
                  })}
              </div>
              <hr style={{ width: "96%", marginLeft: "0vw" }} />
              <div
                style={{
                  marginLeft: "1vw",
                  marginTop: "0vw",
                  marginBottom: "1vw",
                }}
                className="flexofdtaes"
              >
                <div className="datesofcontact">
                  Review And Rating For Website/Catalogue
                </div>
              </div>
              <div className="chatcontaract">
                <div
                  style={{
                    width: width > 700 ? "80vw" : "100%",
                    padding: "0vw",
                    height: "fit-content",
                  }}
                  className="chatboxescontact"
                >
                  <div
                    style={{ marginLeft: "1vw", marginTop: "0vw" }}
                    className="flexofdtaes"
                  >
                    <div className="datesofcontact">Ratings</div>
                  </div>
                  <div className="workhistryboxdate">
                    <span
                      style={{
                        width: "10vw",
                        position: "relative",

                        left: "1vw",
                      }}
                    >
                      <StarRatings
                        rating={data1?.rating ? data1?.rating : starBuyer}
                        starRatedColor="#0052CC"
                        starDimension={width > 700 ? "1.6vw" : "4vw"}
                        starSpacing={width > 700 ? "0.3vw" : "1vw"}
                        numberOfStars={5}
                        name="rating"
                        changeRating={(e) => {
                          if (!data1?.rating) {
                            setStarBuyer(e);
                            setSetratingerror("");
                          }
                        }}
                      />
                    </span>
                  </div>
                  {setratingerror && (
                    <div
                      style={{
                        color: "red",
                        fontSize: width > 700 ? "1vw" : "3vw",
                        margin: "1vw",
                      }}
                    >
                      {setratingerror}
                    </div>
                  )}
                  <div
                    style={{
                      left: "0vw",
                      width: "96%",
                      margin: "1vw",
                      display: "block",
                    }}
                    className="loginfield"
                  >
                    <div
                      style={{ marginBottom: "0.0vw" }}
                      className="jobpodtedfieldtitile"
                    >
                      Review
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="reviewbox"
                        rows="10"
                        style={{ fontSize: "1vw" }}
                        value={data1?.review ? data1?.review : review}
                        onChange={(e) => {
                          if (!data1?.review) {
                            setReview(e.target.value);
                          }
                        }}
                      ></textarea>
                    </div>
                  </div>
                  {data1?.docs?.length > 0 &&
                    data1?.docs?.map((dataqq) => {
                      return (
                        <div
                          style={{
                            width: "fit-content",
                            marginTop: "0vw",
                            marginBottom: "1vw",
                          }}
                          className="inputfilesshowncatboxsingle"
                        >
                          <div className="inputfilesshowncatboxsingleimg">
                            <img src={img1} alt="" />
                          </div>
                          <div className="fileselctednamecate">
                            {dataqq?.docx?.split("%24")[1]?.slice(0, 22)}
                          </div>
                          <div className="inputfilesshowncatboxsingleimg">
                            <a href={`${dataqq?.docx}`} download>
                              {" "}
                              <CloudDownloadOutlinedIcon
                                style={{
                                  fontSize: width > 700 ? "1.5vw" : "4vw",
                                  margin: "0 1vw",
                                }}
                              />{" "}
                            </a>
                          </div>
                        </div>
                      );
                    })}{" "}
                  {!data1?.rating && (
                    <div>
                      <div
                        style={{ marginLeft: "1.5vw", marginTop: "1vw" }}
                        className="jobpodtedfieldtitile"
                      >
                        Image/Documents{" "}
                      </div>
                      <div
                        style={{
                          background: "white",
                          padding: "0.51vw",
                          marginTop: "0vw",
                          paddingRight: "3vw",
                          marginLeft: "1.52vw",
                        }}
                      >
                        <div className="inputfilebox">
                          <div>
                            <label htmlFor="inputctaelogfile">
                              <div className="inputicon">
                                <img src={img} alt="" />
                              </div>
                              <div className="inputcateaddformfile">
                                Drag and Drop ,Browse to upload
                              </div>
                              <input
                                type="file"
                                id="inputctaelogfile"
                                onChange={(e) => {
                                  handleImageUpload(e);
                                }}
                                hidden
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          fontSize: width > 700 ? "0.8vw" : "2.5vw",
                          paddingRight: "4.5vw",
                          textAlign: "right",
                        }}
                      >
                        Please upload file having extensions .jpeg/ .jpg/ .png
                        only.
                        <br />
                        Image should be less then 512 kb.
                      </div>
                      <div
                        style={{ marginTop: "0.4vw" }}
                        className={
                          arrayoffiles?.length > 0
                            ? "inputfilesshowncatebox"
                            : ""
                        }
                      >
                        {arrayoffiles?.length > 0 &&
                          arrayoffiles?.map((file, index) => {
                            return (
                              <div className="inputfilesshowncatboxsingle">
                                <div className="inputfilesshowncatboxsingleimg">
                                  <img src={img1} alt="" />
                                </div>
                                <div className="fileselctednamecate">
                                  {file?.name}
                                </div>
                                <div className="inputfilesshowncatboxsingleimg">
                                  <img
                                    style={{
                                      width: width > 700 ? "1.5vw" : "4vw",
                                      marginLeft: "1vw",
                                      cursor: "pointer",
                                    }}
                                    src={img21}
                                    alt=""
                                    onClick={() => {
                                      setArrayoffiles([
                                        ...arrayoffiles.slice(0, index),
                                        ...arrayoffiles.slice(
                                          index + 1,
                                          arrayoffiles.length
                                        ),
                                      ]);
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
