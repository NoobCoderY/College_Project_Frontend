import { SearchOffOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./catalogue.css";
import img3 from "../../assets/Web 1280 – 2/studio-republic-fotKKqWNMQ4-unsplash.png";
import StarRatings from "react-star-ratings";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Catelogfaqquestion from "./Catelogfaqquestion";
export default function CatalogueFaqreview({ data, width }) {
  const [ratingStar1x, setRatingStar1x] = useState(0);
  const [ratingStar2x, setRatingStar2x] = useState(0);
  const [ratingStar3x, setRatingStar3x] = useState(0);
  const [ratingStar4x, setRatingStar4x] = useState(0);
  const [ratingStar5x, setRatingStar5x] = useState(0);
  const [totalStarRatingx, setTotalStarRatingx] = useState(0);

  let ratingStar1 = 0;
  let ratingStar2 = 0;
  let ratingStar3 = 0;
  let ratingStar4 = 0;
  let ratingStar5 = 0;
  let totalStarRating = 0;

  const handleStarOne = () => {
    data?.catalogueBuyer?.map((item, index) => {
      if (item?.buyer_id?.rating === 1) {
        setRatingStar1x(++ratingStar1);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 2) {
        setRatingStar2x(++ratingStar2);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 3) {
        setRatingStar3x(++ratingStar3);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 4) {
        setRatingStar4x(++ratingStar4);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 5) {
        setRatingStar5x(++ratingStar5);
        setTotalStarRatingx(++totalStarRating);
      }
    });
  };

  const totalStarRatingCview =
    ratingStar1x * 1 +
    ratingStar2x * 2 +
    ratingStar3x * 3 +
    ratingStar4x * 4 +
    (ratingStar5x * 5) / totalStarRatingx;

  useEffect(() => {
    handleStarOne();
  }, [data]);
  return (
    <>
      <div style={{ margin: "auto" }} className="cafaqcontainer">
        <div className="catefaqhead">FAQS</div>
        <div className="catefaqheadname">Frequently asked questions</div>
        <div className="catefaqheadhaveq">
          Have questioners? we're here to help
        </div>
        <div hidden className="catesearchboxfaq">
          <span>
            <SearchOffOutlined
              style={{ margin: "0vw 0.81vw", fontSize: "1.7vw" }}
            />
          </span>
          <input type="text" />
        </div>
        <Catelogfaqquestion data={data} width={width} />
      </div>
      <div className="careviewratingcontainer">
        <div
          style={{ marginTop: "4vw", textAlign: "center" }}
          className="dectitleclfb"
        >
          Ratings
        </div>
        <div style={{ margin: "2vw auto" }} className="catelogratingbox">
          <div style={{ width: width > 700 ? "10vw" : "30vw" }}>
            <div className="catelogratingboxratingvalue">
              {totalStarRatingCview ? totalStarRatingCview : 0}
            </div>
            <div>
              <span
                style={{
                  width: width > 700 ? "10vw" : "30vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
              >
                <StarRatings
                  rating={totalStarRatingCview ? totalStarRatingCview : 0}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
            <div className="catelogoverallrating">Overall Ratings</div>
          </div>
          {/*============= All Rating Stars is Hidden below ======*/}
          <div
            hidden
            style={{ width: "10vw", lineHeight: "2vw", marginLeft: "4vw" }}
          >
            <div>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={5}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
            <div>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4}
                  starRatedColor="#0052CC"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
            <div>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={3}
                  starRatedColor="#0052CC"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
            <div>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={2}
                  starRatedColor="#0052CC"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
            <div>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={1}
                  starRatedColor="#0052CC"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
          </div>
          <div
            style={{
              width: width > 700 ? "27vw" : "40vw",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                margin: "1vw auto",
                height: width > 700 ? "1.2vw" : "4vw",
                paddingTop: "0.3vw",
              }}
            >
              <LinearProgress
                sx={{ height: "8px" }}
                variant="determinate"
                value={
                  (ratingStar5x / totalStarRatingx
                    ? ratingStar5x / totalStarRatingx
                    : 0) * 100
                }
              />
            </Box>
            <Box
              sx={{
                width: "90%",
                margin: "1vw auto",
                height: width > 700 ? "1.2vw" : "4vw",
                paddingTop: "0.3vw",
              }}
            >
              <LinearProgress
                sx={{ height: "8px" }}
                variant="determinate"
                value={
                  (ratingStar4x / totalStarRatingx
                    ? ratingStar4x / totalStarRatingx
                    : 0) * 100
                }
              />
            </Box>
            <Box
              sx={{
                width: "90%",
                margin: "1vw auto",
                height: width > 700 ? "1.2vw" : "4vw",
                paddingTop: "0.3vw",
              }}
            >
              <LinearProgress
                sx={{ height: "8px" }}
                variant="determinate"
                value={
                  (ratingStar3x / totalStarRatingx
                    ? ratingStar3x / totalStarRatingx
                    : 0) * 100
                }
              />
            </Box>
            <Box
              sx={{
                width: "90%",
                margin: "1vw auto",
                height: width > 700 ? "1.2vw" : "4vw",
                paddingTop: "0.3vw",
              }}
            >
              <LinearProgress
                sx={{ height: "8px" }}
                variant="determinate"
                value={
                  (ratingStar2x / totalStarRatingx
                    ? ratingStar2x / totalStarRatingx
                    : 0) * 100
                }
              />
            </Box>
            <Box
              sx={{
                width: "90%",
                margin: "1vw auto",
                height: width > 700 ? "1.2vw" : "3.3vw",
                paddingTop: "0.3vw",
              }}
            >
              <LinearProgress
                sx={{ height: "8px" }}
                variant="determinate"
                value={
                  (ratingStar1x / totalStarRatingx
                    ? ratingStar1x / totalStarRatingx
                    : 0) * 100
                }
              />
            </Box>
          </div>
          <div
            style={{ width: width > 700 ? "4vw" : "9vw", textAlign: "right" }}
          >
            <div className="percentshiwnratingcatalogue">
              {(ratingStar5x / totalStarRatingx
                ? ratingStar5x / totalStarRatingx
                : 0) * 100}{" "}
              %
            </div>
            <div className="percentshiwnratingcatalogue">
              {(ratingStar4x / totalStarRatingx
                ? ratingStar4x / totalStarRatingx
                : 0) * 100}{" "}
              %
            </div>
            <div className="percentshiwnratingcatalogue">
              {(ratingStar3x / totalStarRatingx
                ? ratingStar3x / totalStarRatingx
                : 0) * 100}{" "}
              %
            </div>
            <div className="percentshiwnratingcatalogue">
              {(ratingStar2x / totalStarRatingx
                ? ratingStar2x / totalStarRatingx
                : 0) * 100}{" "}
              %
            </div>
            <div className="percentshiwnratingcatalogue">
              {(ratingStar1x / totalStarRatingx
                ? ratingStar1x / totalStarRatingx
                : 0) * 100}{" "}
              %
            </div>
          </div>
          <div
            style={{ width: width > 700 ? "4vw" : "9vw", textAlign: "right" }}
          >
            <div className="percentshiwnratingcatalogue">
              <span className="m-1" style={{ color: "#0052CC" }}>
                5
              </span>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={1}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={1}
                  name="rating"
                />
              </span>
            </div>
            <div className="percentshiwnratingcatalogue">
              <span className="m-1" style={{ color: "#0052CC" }}>
                4
              </span>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={1}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={1}
                  name="rating"
                />
              </span>
            </div>
            <div className="percentshiwnratingcatalogue">
              <span className="m-1" style={{ color: "#0052CC" }}>
                3
              </span>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={1}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={1}
                  name="rating"
                />
              </span>
            </div>
            <div className="percentshiwnratingcatalogue">
              <span className="m-1" style={{ color: "#0052CC" }}>
                2
              </span>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={1}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={1}
                  name="rating"
                />
              </span>
            </div>
            <div className="percentshiwnratingcatalogue">
              <span className="m-1" style={{ color: "#0052CC" }}>
                1
              </span>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={1}
                  starRatedColor="#0052CC"
                  starDimension={width > 700 ? "1.2vw" : "3vw"}
                  starSpacing={width > 700 ? "0.15vw" : "0,6vw"}
                  numberOfStars={1}
                  name="rating"
                />
              </span>
            </div>
          </div>
          {/* <div style={{ width: "18vw", textAlign: "center" }}>
            <div className="ratingcatelogbreakdown">Rating breakdown</div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#0052CC"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#0052CC"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#0052CC"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#0052CC"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
          </div> */}
        </div>
        <div className="dectitleclfb">Reviews</div>
        {data?.catalogueBuyer.map((item) => {
          return (
            <div>
              {item?.buyer_id?.rating && (
                <div className="catalogreviewvaluedatabox">
                  <div className="catalogreviewvaluedatalogo">
                    <img src={img3} alt="" />
                  </div>
                  <div style={{ width: "100%" }}>
                    <div className="workhistryboxtitle">
                      {item?.buyer_id?.name}
                    </div>
                    <div className="workhistryboxdate">
                      {" "}
                      <span
                        style={{
                          width: "10vw",
                          position: "relative",
                          bottom: "0.2vw",
                        }}
                      >
                        <StarRatings
                          rating={
                            item?.buyer_id?.rating ? item?.buyer_id?.rating : 0
                          }
                          starRatedColor="#0052CC"
                          starDimension="1.2vw  "
                          starSpacing="0.15vw"
                          numberOfStars={5}
                          name="rating"
                        />
                      </span>{" "}
                      {item?.buyer_id?.updated_at.slice(0, 10)}
                      {/* {item?.buyer_id?.startDate.slice(0,10)} - {item?.buyer_id?.endDate.slice(0,10)} */}
                    </div>
                    <div className="workhistryboxdata">
                      {item?.buyer_id?.review}
                    </div>
                    <hr style={{ color: "#00000090", height: "0.1vw" }} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
