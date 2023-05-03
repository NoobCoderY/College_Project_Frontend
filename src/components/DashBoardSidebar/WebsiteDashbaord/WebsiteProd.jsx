import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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

export default function WebsiteProd({ width, websitedata, setwebsitedata }) {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [proddata, setproddata] = useState();

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

  return (
    <div className="websiteoffercontainerx">
      <div style={{ color: websitedata?.themeColor }} className="offerheading">
        {websitedata?.menuHeadlines}
      </div>
      <div className="flexofoffers">
        {websitedata?.webId?.length > 0 &&
          websitedata?.webId?.map((data) => {
            return (
              <div className="Menuwebsite">
                <div>
                  <img
                    style={{
                      filter: data?.web_id?.quantity < 1 && "grayscale(1)",
                      cursor: "pointer",
                    }}
                    src={data?.web_id?.product_id?.files[0]?.file}
                    alt=""
                    onClick={() => {
                      handleOpen1();
                      setproddata(data?.web_id);
                    }}
                  />
                  <div
                    onClick={() => {
                      handleOpen1();
                      setproddata(data?.web_id);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                    className="namemenuweb"
                  >
                    {data?.web_id?.product_id?.productName?.slice(0, 18)}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ color: data?.web_id?.quantity > 0 ? "" : "red" }}
                      className="stockmenuweb"
                    >
                      {data?.web_id?.quantity > 0
                        ? data?.web_id?.quantity + " Items Left"
                        : "Out of Stock"}{" "}
                    </div>
                    <div
                      style={{
                        color: "#0052cc",
                        display: "flex",
                        alignItems: "center",

                        fontSize: "0.8vw",
                      }}
                    >
                      {data?.web_id?.product_id?.rating?.$numberDecimal
                        ? data?.web_id?.product_id?.rating?.$numberDecimal?.slice(
                            0,
                            1
                          )
                        : 0}
                      <StarIcon
                        style={{ width: "0.8vw", margin: "0vw", height: "1vw" }}
                      />{" "}
                      (
                      {data?.web_id?.product_id?.completedOrder
                        ? data?.web_id?.product_id?.completedOrder
                        : 0}
                      )
                    </div>
                  </div>
                  <div className="pricemenuweb">
                    <span>Rs. {data?.web_id?.product_id?.costPrice}</span>{" "}
                    {data?.web_id?.product_id?.sellingPrice && (
                      <del
                        style={{
                          display: "flex",
                          fontSize: "0.75vw",
                          margin: "0 0.5vw",
                        }}
                      >
                        ( Rs {data?.web_id?.product_id?.sellingPrice})
                      </del>
                    )}
                    {data?.web_id?.product_id?.sellingPrice &&
                      parseFloat(
                        ((data?.web_id?.product_id?.sellingPrice -
                          data?.web_id?.product_id?.costPrice) *
                          100) /
                          data?.web_id?.product_id?.sellingPrice
                      ).toFixed(0) + "% off"}
                  </div>
                </div>
              </div>
            );
          })}

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
                        proddata?.product_id?.files?.length < 4
                          ? (4 - proddata?.product_id?.files?.length) * 4 + "vw"
                          : "1vw",
                    }}
                    className="preview-thumbnail nav nav-tabs"
                  >
                    {proddata?.product_id?.files.length && (
                      <Slider {...settings}>
                        {proddata?.product_id?.files.map((img, index) => (
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
                            src: proddata?.product_id?.files[displayImage]
                              ?.file,
                            sizes: "(max-width: 1200px) 30vw, 360px",
                          },
                          largeImage: {
                            src: proddata?.product_id?.files[displayImage]
                              ?.file,
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginLeft: "0vw" }} className="tagblue">
                    {proddata?.product_id?.category?.category}
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
                  {proddata?.product_id?.productName}
                </div>
                <div className="headingofproduct">Description :</div>
                <div className="descriptionofproduct">
                  {proddata?.product_id?.description}
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
                        Rs {proddata?.product_id?.costPrice}
                      </span>{" "}
                      {proddata?.product_id?.sellingPrice && (
                        <del> Rs {proddata?.product_id?.sellingPrice}</del>
                      )}
                      {proddata?.product_id?.sellingPrice && (
                        <span style={{ color: "#0052cc", margin: "0 1vw" }}>
                          {" "}
                          {parseFloat(
                            ((proddata?.product_id?.sellingPrice -
                              proddata?.product_id?.costPrice) *
                              100) /
                              proddata?.product_id?.sellingPrice
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
                    {proddata?.product_id?.rating?.$numberDecimal
                      ? proddata?.product_id?.rating?.$numberDecimal?.slice(
                          0,
                          1
                        )
                      : 0}
                    <StarIcon style={{ width: "1.2vw", margin: "0vw" }} /> (
                    {proddata?.product_id?.completedOrder
                      ? proddata?.product_id?.completedOrder
                      : 0}
                    )
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="headingofproduct">Stock : </div>{" "}
                  <div
                    style={{
                      color: proddata?.quantity > 0 ? "" : "red",
                      fontSize: "1.1vw",
                      margin: "0 1vw",
                    }}
                    className="stockmenuweb"
                  >
                    {" " + proddata?.quantity > 0
                      ? " " + proddata?.quantity + " Items Left"
                      : "Out of Stock"}{" "}
                  </div>
                </div>

                {proddata?.product_id?.addOn?.length > 0 && (
                  <div className="headingofproduct">Add On :</div>
                )}

                {proddata?.product_id?.addOn?.map((data) => {
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
                    __html: proddata?.product_id?.longDescription,
                  }}
                ></div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
