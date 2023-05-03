import React from "react";

export default function WebsiteCart({
  width,
  websitedata,
  arrayofProducts,
  setArrayofProducts,
}) {
  return (
    <div
      style={{ marginLeft: "1vw", width: "80vw" }}
      className="websiteoffercontainer"
    >
      <div style={{ color: "#0052cc" }} className="offerheading">
        Order Summary
      </div>

      <div className="flexofoffers">
        {arrayofProducts?.length > 0 &&
          arrayofProducts?.map((data, index) => {
            return (
              <div
                style={{ width: "25vw", marginRight: "1vw" }}
                className="cartwebsite"
              >
                <div>
                  <img
                    style={{
                      cursor: "pointer",
                    }}
                    src={data?.web_id?.product_id?.files[0]?.file}
                    alt=""
                  />
                  <div className="cartquantity">
                    <div>-</div>
                    <div>{data?.quantity}</div>
                    <div>+</div>
                  </div>
                </div>
                <div
                  style={{ overflowY: "scroll", height: "13vw", width: "100%" }}
                >
                  {" "}
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    className="namemenuweb"
                  >
                    {data?.web_id?.product_id?.productName?.slice(0, 23)}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      margin: "0.4vw 0vw",
                      marginBottom: "0vw",
                      paddingBottom: "0vw",
                    }}
                    className="pricemenuweb"
                  >
                    <span>
                      Rs.
                      {parseFloat(data?.totalPrice).toFixed(2)}
                    </span>
                  </div>
                  <div
                    style={{ color: data?.web_id?.quantity > 0 ? "" : "red" }}
                    className="stockmenuweb"
                  >
                    Total GST ({data?.web_id?.product_id?.gstRate}%) - Rs{" "}
                    {parseFloat(data?.calculatedGstPrice).toFixed(2)}{" "}
                  </div>
                  <div style={{ marginTop: "0.5vw" }} className="">
                    {data?.web_id?.product_id?.addOn?.map((data1) => {
                      return (
                        <div style={{ margin: "0vw" }} className="addonbox">
                          <div
                            style={{ alignItems: "center" }}
                            className="addondata"
                          >
                            <div
                              style={{ width: "10%", fontSize: "0.8vw" }}
                              className=""
                            >
                              <input
                                style={{ margin: "0.2vw 0vw", height: "1vw" }}
                                type="checkbox"
                                name=""
                                id=""
                                checked={
                                  arrayofProducts[index]?.addOn?.findIndex(
                                    (x) => x._id === data1?._id
                                  ) > -1
                                }
                              />
                            </div>

                            <div
                              style={{
                                width: "70%",
                                fontSize: "0.8vw",
                                margin: "0.2vw",
                              }}
                              className="addonname"
                            >
                              {data1.name}
                            </div>
                            <div
                              style={{
                                width: "20%",
                                fontSize: "0.8vw",
                                margin: "0.2vw",
                              }}
                              className="addonname"
                            >
                              Rs {data1.amount}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
