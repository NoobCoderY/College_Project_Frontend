import React, { useState } from "react";
import { useNavigate } from "react-router";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import { makeStyles } from "@material-ui/core";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
function SamplePrevArrow(props) {
  return (
    <div
      style={{
        width: "3vw",
        height: "3vw",

        borderRadius: "50%",
        background: "#FFF",
        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.2)",
        margin: "1vw",
      }}
      className="d-flex justify-content-center align-items-center"
      onClick={props.onClick}
    >
      <ArrowUpwardIcon alt="prev" />
    </div>
  );
}

function SampleNextArrow(props) {
  return (
    <div
      style={{
        width: "3vw",
        height: "3vw",
        borderRadius: "50%",
        background: "#FFF",
        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.2)",
        margin: "1vw",
      }}
      className="d-flex justify-content-center align-items-center"
      onClick={props.onClick}
    >
      <ArrowDownwardIcon alt="next" />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",

    color: "#263238",
    border: "yellow !important",
  },
}));

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "0.51vw",
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
  p: "1vw",
};

export default function ProfileCatelogdetails({ width, data }) {
  const navigate = useNavigate();

  let settings = {
    infinite: false,
    speed: 250,
    arrows: true,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 2,
    vertical: true,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const [displayImage, setDisplayImage] = useState(0);
  const sliderClick = (value) => {
    setDisplayImage(value);
  };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const myStr = data?.website_id[0]?.websiteName;
  const contentNameRoute = myStr
    .replaceAll(" ", "-")
    .replaceAll("/", "_")
    .replaceAll("?", "_");
  return (
    <div
      style={{
        width: "18vw",
        height: "26.4vw",
        marginTop: "1vw",
        marginBottom: "1vw",
        marginLeft: "1vw",
        marginRight: "1vw",
      }}
      className="Menuwebsite"
    >
      <div>
        <img
          style={{
            width: "16vw",
            height: "16vw",
            filter: data?.web_id?.quantity < 1 && "grayscale(1)",
            cursor: "pointer",
          }}
          src={data?.product_id[0]?.files[0]?.file}
          alt=""
          onClick={() => {
            handleOpen1();
          }}
        />
        <div
          onClick={() => {
            handleOpen1();
          }}
          style={{
            cursor: "pointer",
          }}
          className="namemenuweb"
        >
          {data?.product_id[0]?.productName?.length > 23
            ? data?.product_id[0]?.productName?.slice(0, 21) + ".."
            : data?.product_id[0]?.productName?.slice(0, 23)}
        </div>
        <div
          style={{ color: data?.quantity > 0 ? "" : "red" }}
          className="stockmenuweb"
        >
          {data?.quantity > 0 ? data?.quantity + " Items Left" : "Out of Stock"}{" "}
        </div>
        <div
          style={{ paddingBottom: "0.2vw", height: "2vw", fontSize: "1.1vw" }}
          className="pricemenuweb"
        >
          <span>Rs. {data?.product_id[0]?.costPrice}</span>{" "}
          {data?.product_id[0]?.sellingPrice && (
            <del
              style={{
                display: "flex",
                fontSize: "0.75vw",
                height: "0.8vw",
                margin: "0 0.5vw",
              }}
            >
              ( Rs {data?.product_id[0]?.sellingPrice})
            </del>
          )}
          {data?.product_id[0]?.sellingPrice && (
            <span style={{ color: "#0052cc" }}>
              {parseFloat(
                ((data?.product_id[0]?.sellingPrice -
                  data?.product_id[0]?.costPrice) *
                  100) /
                  data?.product_id[0]?.sellingPrice
              ).toFixed(0)}
              % off{" "}
            </span>
          )}
        </div>

        <div
          style={{
            height: "1.5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "0.2vw",
          }}
          className="pricemenuweb"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <span>
              <img
                style={{ width: "1.4vw", margin: "0vw", marginRight: "0.2vw" }}
                src={data?.website_id[0]?.websiteLogo}
                alt=""
              />
            </span>{" "}
            {data?.website_id[0]?.websiteName?.slice(0, 18)}
          </div>{" "}
          <div
            style={{ color: "#0052cc", display: "flex", alignItems: "center" }}
          >
            {data?.product_id[0]?.rating?.$numberDecimal
              ? data?.product_id[0]?.rating?.$numberDecimal?.slice(0, 1)
              : 0}
            <StarIcon style={{ width: "1.2vw", margin: "0vw" }} /> (
            {data?.product_id[0]?.completedOrder
              ? data?.product_id[0]?.completedOrder
              : 0}
            )
          </div>
        </div>

        <div
          onClick={() =>
            data?.website_id[0]?.websiteName
              ? navigate(
                  `/dashbaord/my-website/${contentNameRoute}/${data?.website_id[0]?.websiteId}`
                )
              : navigate(
                  `/dashbaord/my-website/-/${data?.website_id[0]?.websiteId}`
                )
          }
          className="Visitwebsitebutton"
        >
          Visit Website
        </div>
      </div>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style2 : style1}>
          <div
            style={{
              width: "100%",
              background: "white",
              display: "flex",
              padding: width > 700 ? "1vw 1vw" : "2vw",
              paddingTop: "0vw",
              height: "85vh",
              overflowY: "scroll",
            }}
          >
            <div className="product-wrapper">
              <div className="productpage">
                <ul
                  style={{
                    marginTop:
                      data?.product_id[0]?.files?.length < 4
                        ? (4 - data?.product_id[0]?.files?.length) * 4 + "vw"
                        : "1vw",
                  }}
                  className="preview-thumbnail nav nav-tabs"
                >
                  {data?.product_id[0]?.files.length && (
                    <Slider {...settings}>
                      {data?.product_id[0]?.files.map((img, index) => (
                        <li
                          key={index}
                          className={
                            displayImage === index ? "imageActive" : ""
                          }
                        >
                          <span
                            data-target={`#pic-${index}`}
                            data-toggle="tab"
                            onMouseOver={() => sliderClick(index)}
                          >
                            <img
                              src={img?.file}
                              style={{ width: "100%" }}
                              alt="iiiii"
                            />
                          </span>
                        </li>
                      ))}
                    </Slider>
                  )}
                </ul>

                <div className="productImg">
                  <div style={{ width: "100%", height: "100%" }}>
                    <ReactImageMagnify
                      style={{ width: "100%", height: "100%" }}
                      imageClassName="smallImage"
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          // width: 400,
                          // height: 400,
                          src: data?.product_id[0]?.files[displayImage]?.file,
                          sizes: "(max-width: 1200px) 30vw, 360px",
                        },
                        largeImage: {
                          src: data?.product_id[0]?.files[displayImage]?.file,
                          width: 1400,
                          height: 1500,
                        },
                        shouldUsePositiveSpaceLens: true,
                        lensStyle: {
                          background: "hsla(0, 0%, 100%, .3)",
                          border: "1px solid #ccc",
                        },
                        enlargedImageContainerDimensions: {
                          width: "110%",
                          height: "90%",
                        },
                        enlargedImageContainerStyle: {
                          marginTop: "5vw",
                          zIndex: 10,
                          background: "#fff",
                        },
                        enlargedImageStyle: {
                          objectFit: "contain",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "fit-content",
                background: "white",
              }}
              className="product-wrapper1 "
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginLeft: "0vw" }} className="tagblue">
                  {data?.category[0]?.category}
                </div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose1}
                      style={{
                        fontSize: width > 700 ? "1.5vw" : "4vw",
                        cursor: "pointer",
                        position: "relative",
                        left: "4vw",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="Nameofproduct">
                {data?.product_id[0]?.productName}
              </div>
              <div className="headingofproduct">Description :</div>
              <div className="descriptionofproduct">
                {data?.product_id[0]?.description}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="headingofproduct">Price :</div>
                  <div
                    style={{ margin: "0 0.5vw" }}
                    className="descriptionofproduct"
                  >
                    <span style={{ fontSize: "1.3vw", color: "#0052cc" }}>
                      Rs {data?.product_id[0]?.costPrice}
                    </span>{" "}
                    {data?.product_id[0]?.sellingPrice && (
                      <del> Rs {data?.product_id[0]?.sellingPrice}</del>
                    )}
                    {data?.product_id[0]?.sellingPrice && (
                      <span style={{ color: "#0052cc", margin: "0 1vw" }}>
                        {" "}
                        {parseFloat(
                          ((data?.product_id[0]?.sellingPrice -
                            data?.product_id[0]?.costPrice) *
                            100) /
                            data?.product_id[0]?.sellingPrice
                        ).toFixed(2)}
                        % off{" "}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    color: "#0052cc",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "2vw",
                  }}
                >
                  {data?.product_id[0]?.rating?.$numberDecimal
                    ? data?.product_id[0]?.rating?.$numberDecimal?.slice(0, 1)
                    : 0}
                  <StarIcon style={{ width: "1.2vw", margin: "0vw" }} /> (
                  {data?.product_id[0]?.completedOrder
                    ? data?.product_id[0]?.completedOrder
                    : 0}
                  )
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="headingofproduct">Stock : </div>{" "}
                  <div
                    style={{
                      color: data?.quantity > 0 ? "" : "red",
                      fontSize: "1.1vw",
                      margin: "0 1vw",
                    }}
                    className="stockmenuweb"
                  >
                    {" " + data?.quantity > 0
                      ? " " + data?.quantity + " Items Left"
                      : "Out of Stock"}{" "}
                  </div>
                </div>
                <div style={{ width: "16vw" }}>
                  <div
                    style={{ width: "13vw" }}
                    onClick={() =>
                      data?.website_id[0]?.websiteName
                        ? navigate(
                            `/dashbaord/my-website/${contentNameRoute}/${data?.website_id[0]?.websiteId}`
                          )
                        : navigate(
                            `/dashbaord/my-website/-/${data?.website_id[0]?.websiteId}`
                          )
                    }
                    className="Visitwebsitebutton"
                  >
                    Visit Website
                  </div>
                </div>
              </div>

              {data?.product_id[0]?.addOn?.length > 0 && (
                <div className="headingofproduct">Add On :</div>
              )}

              {data?.product_id[0]?.addOn?.map((data) => {
                return (
                  <div className="addonbox">
                    <div className="addondata">
                      <div className="addonimg">
                        <img src={data.image} alt="" />
                      </div>
                      <div style={{ width: "70%" }} className="addonname">
                        {data.name}
                      </div>
                      <div style={{ width: "20%" }} className="addonname">
                        Rs {data.amount}
                      </div>
                    </div>
                    <div className="addondesc">{data?.description}</div>
                  </div>
                );
              })}
              <div className="headingofproduct">Details :</div>
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: data?.product_id[0]?.longDescription,
                }}
              ></div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
