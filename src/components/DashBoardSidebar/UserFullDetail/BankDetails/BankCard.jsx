import React from "react";
import img51 from "../../../../assets/Web 1280 – 14/Group 10219.svg";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
export default function BankCard({ data,primaryAccount }) {
  return (
    <div style={{ height: "35vw" }} className="bankcardContainer">
      <div style={{ marginBottom: "1vw" }} className="titleboxflexofbank">
        <div>
          <span>
            <img
              src={img51}
              style={{
                width: "1.1vw",
                objectFit: "contain",
                margin: "0 1vw",
                filter: data?.accountId===primaryAccount?.accountId?.accountId ? "" : "grayscale(1)",
              }}
              alt=""
            />
          </span>
          {data?.accountId===primaryAccount?.accountId?.accountId ? "Primary Account" : "Secondry Account"}
        </div>
      </div>

      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">Bank Name</div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.bankName}
        </div>
      </div>

      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">Account Number</div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.accountNumber.toString()}
          
        </div>
      </div>
      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">IFSC code - </div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.ifscCode}
        </div>
      </div>
      <div style={{marginTop:"1vw",width:"100%",height:"20vw"}} className="boxofimageorpdf">
        <div style={{  width:"100%",height:"16vw" }} className="imageshowboxofpdf">
          <img style={{ width:"100%",height:"16vw" }} src={data?.files[0]?.file} alt="" />
        </div>
        <div className="imageshowboxofpdfname">
          <div>
            <PictureAsPdfIcon style={{ color: "red", fontSize: "1.7vw" }} />
          </div>
          <div className="nameifimagedocuments">
            {data?.files[0]?.file?.split("%24")[1]?.slice(0, 17)}
          </div>
          <div className="inputfilesshowncatboxsingleimg">
            <a href={`${data?.files[0]?.file}`} download>
              {" "}
              <CloudDownloadOutlinedIcon
                style={{ fontSize: "1.5vw", margin: "0 1vw" }}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
