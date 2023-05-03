import React, { useEffect, useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import New_quickest_releaser from "../../../../assets/Badges/badge crown 2 (1).svg";
import New_quickest_assigner from "../../../../assets/Badges/Badge _ 2.2.png";
import New_quickest_performer from "../../../../assets/Badges/Badge _ 1.2.png";
import axios from "axios";
import API_HOST from "../../../../env";

import New_beginner from "../../../../assets/Badges/beginner.png";
import New_intermediate from "../../../../assets/Badges/intermediate.png";
import New_master from "../../../../assets/Badges/master.png";
import New_Pro from "../../../../assets/Badges/Pro.png";

export default function ProfileBadges({ width, user }) {
  const [totalbuy, settotalbuy] = useState("");

  const [totalsell, setTotalsell] = useState("");

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/usertotalDetails/viewDetailedModel?userName=${user?.userName}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          settotalbuy(res?.data?.success?.data[0]?.totalBuying);
          setTotalsell(res?.data?.success?.data[0]?.totalOrders);
        })
        .catch((err) => {});
    }
  }, [user]);

  return (
    <div className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 1vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Badges</div>
      </div>

      <div className="pbadegesbox">
        {/* Work Post Badges */}
        {totalbuy === "" || totalbuy === null || totalbuy === 0 ? (
          <Tooltip title="Buy first product to get the badge">
            <div className="psbadege">
              <div>
                <img
                  src={New_beginner}
                  alt=""
                  style={{ filter: "grayscale(1)" }}
                />
              </div>

              <div style={{ fontWeight: "500" }}>Buying</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalbuy >= 1 && totalbuy <= 4 ? (
          <Tooltip title="Buy first product to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_beginner} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Buying</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalbuy >= 5 && totalbuy <= 9 ? (
          <Tooltip title="Buy first product to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_intermediate} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Buying</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalbuy >= 10 && totalbuy <= 24 ? (
          <Tooltip title="Buy first product to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_Pro} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Buying</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalbuy >= 25 ? (
          <Tooltip title="Buy first product to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_master} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Buying</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {/* Work Bidder Badges */}
        {totalsell === "" || totalsell === null || totalsell === 0 ? (
          <Tooltip title="Sell first product  to get the badge">
            <div className="psbadege">
              <div>
                <img
                  src={New_beginner}
                  alt=""
                  style={{ filter: "grayscale(1)" }}
                />
              </div>

              <div style={{ fontWeight: "500" }}>Selling</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalsell >= 1 && totalsell <= 4 ? (
          <Tooltip title="Sell first product  to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_beginner} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Selling</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalsell >= 5 && totalsell <= 9 ? (
          <Tooltip title="Sell first product  to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_intermediate} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Selling</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalsell >= 10 && totalsell <= 24 ? (
          <Tooltip title="Sell first product  to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_Pro} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Selling</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {totalsell >= 25 ? (
          <Tooltip title="Sell first product  to get the badge">
            <div className="psbadege">
              <div>
                <img src={New_master} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Selling</div>
            </div>
          </Tooltip>
        ) : (
          ""
        )}
        {/* Skillset Level Badges */}
        <Tooltip title="when you verified by SMS , you will get this badge">
          <div className="psbadege">
            <img
              src={New_quickest_assigner}
              alt=""
              style={{ filter: user?.verifiedByAdmin ? "" : "grayscale(1)" }}
            />

            <div style={{ fontWeight: "500" }}>Verified User</div>
          </div>
        </Tooltip>
        <Tooltip title="when you certified by SMS , you will get this badge">
          <div className="psbadege">
            <div>
              <img
                src={New_quickest_performer}
                alt=""
                style={{ filter: user?.certifiedByAdmin ? "" : "grayscale(1)" }}
              />
            </div>

            <div style={{ fontWeight: "500" }}>Certified User</div>
          </div>
        </Tooltip>
        {/* Quickest Payout Releaser */}
        <Tooltip title="I'm a virtual assistant ready to help. Ask me anything!">
          <div className="psbadege">
            <div>
              <img
                src={New_quickest_releaser}
                alt=""
                style={{ filter: user?.eliteUser ? "" : "grayscale(1)" }}
              />
            </div>

            <div style={{ fontWeight: "500" }}>Virtual Assistant</div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
