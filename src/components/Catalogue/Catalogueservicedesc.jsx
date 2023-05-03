import React from "react";

export const Catalogueservicedesc = ({ data }) => {
  return (
    <>
      {data?.serviceName1 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName1}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice1}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays1}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
              {data?.whatInclude1}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName2 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName2}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice2}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays2}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
              {data?.whatInclude2}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName3 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName3}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice3}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays3}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
              {data?.whatInclude3}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName4 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName4}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice4}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays4}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
              {data?.whatInclude4}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName5 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName5}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice5}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays5}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
              {data?.whatInclude5}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
