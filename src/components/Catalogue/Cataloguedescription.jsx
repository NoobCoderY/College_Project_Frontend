import React from "react";
import "./catalogue.css";

import { Catalogueservicedesc } from "./Catalogueservicedesc";
export default function Cataloguedescription({ data }) {
  return (
    <div className="cgdesccontainer">
    <div className="dectitleclfb"  style={{ marginBottom: "1vw" }}>Skill Set</div>
    <div
      style={{
        fontSize: "1vw",
        fontWeight: "500",
        margin: "0.51vw 0vw",
        display: "flex",
        flexWrap: "wrap",
      }}
      className="dectitleclfb"
    >
      {/* UX Wireframing , User Flow , Product Research, UI Design with Prototype */}
      {data?.skill0 ? (
        <div className="pskillbox" >
          {data?.skill0}
        </div>
      ) : (
        ""
      )}
      {data?.skill1 ? (
        <div className="pskillbox" >
          {data?.skill1}
        </div>
      ) : (
        ""
      )}
      {data?.skill2 ? (
        <div className="pskillbox" >
          {data?.skill2}
        </div>
      ) : (
        ""
      )}
      {data?.skill3 ? (
        <div className="pskillbox" >
          {data?.skill3}
        </div>
      ) : (
        ""
      )}
      {data?.skill4 ? (
        <div className="pskillbox" >
          {data?.skill4}
        </div>
      ) : (
        ""
      )}
      {data?.skill5 ? (
        <div className="pskillbox" >
          {data?.skill5}
        </div>
      ) : (
        ""
      )}
      {data?.skill6 ? (
        <div className="pskillbox" >
          {data?.skill6}
        </div>
      ) : (
        ""
      )}
      {data?.skill7 ? (
        <div className="pskillbox" >
          {data?.skill7}
        </div>
      ) : (
        ""
      )}
      {data?.skill8 ? (
        <div className="pskillbox" >
          {data?.skill8}
        </div>
      ) : (
        ""
      )}
      {data?.skill9 ? (
        <div className="pskillbox" >
          {data?.skill9}
        </div>
      ) : (
        ""
      )}
      {data?.skill10 ? (
        <div className="pskillbox" >
          {data?.skill10}
        </div>
      ) : (
        ""
      )}
    </div>

    <div  style={{ marginTop: "1vw", marginBottom: "1vw" }} className="dectitleclfb">Description</div>
    <div style={{ width: "99%" }} className="descriptiondata">
      {data?.description}
    </div>

    <div
      style={{ marginTop: "1vw", marginBottom: "1vw" }}
      className="dectitleclfb"
    >
      Our Services
    </div>
    <div style={{ marginBottom: "3vw" }} className="catlogbigincludebox">
      <div className="catlogwhatincludedbox">
        <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnobox">Service Name</div>
          <div className="catlogwhatincludedboxvaluesnobox">Price</div>
          <div className="catlogwhatincludedboxvaluesnobox">
            Delivery Time
          </div>
          <div
            style={{ width: "50vw" }}
            className="catlogwhatincludedboxvaluesnobox"
          >
            What Include
          </div>
        </div>
      </div>
      <Catalogueservicedesc data={data} />
    </div>
  </div>
);
}
