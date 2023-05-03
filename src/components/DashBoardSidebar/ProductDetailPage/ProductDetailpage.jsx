import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import API_HOST from "../../../env";
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

export default function ProductDetailpage({ width }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productpagedata, setproductpagedata] = useState();

  useEffect(() => {
    axios
      .get(`${API_HOST}/userProducts/particualrId?productId=${id}`)
      .then((res) => {
        setproductpagedata(res?.data?.success?.data);
      });
  }, [id]);

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
    <div
      style={{
        height: width > 700 ? "calc(100vh - 4vw )" : "calc(100vh - 14vw )",
        background: "white",
      }}
      className="ScrollTable"
    >
     
      <div
        style={{
          width: "100%",
          background: "white",
          padding: width > 700 ? "1vw 1vw" : "2vw",
          paddingBottom: "0vw",
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
      </div>

      <div
        style={{
          width: "100%",
          background: "white",
          display: "flex",
          padding: width > 700 ? "1vw 1vw" : "2vw",
          paddingTop: "0vw",
        }}
      >
        <div className="product-wrapper">
          <div className="productpage">
            <ul
              style={{
                marginTop:
                  productpagedata?.files?.length < 4
                    ? ((4 - productpagedata?.files?.length) * 4) + "vw"
                    : "1vw", 
              }}
              className="preview-thumbnail nav nav-tabs"
            >
              {productpagedata?.files.length && (
                <Slider {...settings}>
                  {productpagedata?.files.map((img, index) => (
                    <li
                      key={index}
                      className={displayImage === index ? "imageActive" : ""}
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
                      src: productpagedata?.files[displayImage]?.file,
                      sizes: "(max-width: 1200px) 30vw, 360px",
                    },
                    largeImage: {
                      src: productpagedata?.files[displayImage]?.file,
                      width: 1400,
                      height: 1500,
                    },
                    shouldUsePositiveSpaceLens: true,
                    lensStyle: {
                      background: "hsla(0, 0%, 100%, .3)",
                      border: "1px solid #ccc",
                    },
                    enlargedImageContainerDimensions: {
                      width: "120%",
                      height: "100%",
                    },
                    enlargedImageContainerStyle: {
                      marginTop: "-1vw",
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
            height: width > 700 ? "calc(100vh - 4vw )" : "calc(100vh - 14vw )",
            background: "white",
          }}
          className="product-wrapper1"
        >
          <div>
            <div style={{ marginLeft: "0vw" }} className="tagblue">
              {productpagedata?.category?.category}
            </div>
          </div>
          <div className="Nameofproduct">{productpagedata?.productName}</div>
          <div className="headingofproduct">Description :</div>
          <div className="descriptionofproduct">
            {productpagedata?.description}
          </div>
          <div style={{ display: "flex", alignItems: "center"  ,justifyContent:"space-between"}}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="headingofproduct">Price :</div>
                  <div
                    style={{ margin: "0 0.5vw" }}
                    className="descriptionofproduct"
                  >
                    <span style={{ fontSize: "1.3vw", color: "#0052cc" }}>
                      Rs {productpagedata?.costPrice}
                    </span>{" "}
                   { productpagedata?.sellingPrice  &&(<del> Rs {productpagedata?.sellingPrice}</del>)}
                   {productpagedata?.sellingPrice && <span style={{ color: "#0052cc", margin: "0 1vw" }}>
                      {" "}
                      {parseFloat(
                        ((productpagedata?.sellingPrice -
                          productpagedata?.costPrice) *
                          100) /
                          productpagedata?.sellingPrice
                      ).toFixed(2)}
                      % off{" "}
                    </span>}
                  </div>
                </div>

                <div
                  style={{
                    color: "#0052cc",
                    display: "flex",
                    alignItems: "center",
                    marginRight:"2vw"
                  }}
                >
                  {productpagedata?.rating?.$numberDecimal
                    ? productpagedata?.rating?.$numberDecimal?.slice(0, 1)
                    : 0}
                  <StarIcon style={{ width: "1.2vw", margin: "0vw" }} /> (
                  {productpagedata?.completedOrder
                    ? productpagedata?.completedOrder
                    : 0}
                  )
                </div>
              </div>
        
          {productpagedata?.addOn?.length > 0 && (
            <div className="headingofproduct">Add On :</div>
          )}

          {productpagedata?.addOn?.map((data) => {
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
              __html: productpagedata?.longDescription,
            }}
          ></div>
        </div>
      </div>
   
    </div>
  );
}
