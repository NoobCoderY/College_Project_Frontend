import axios from "axios";
import React, { useEffect, useState } from "react";

import API_HOST from "../../../../env";



export default function Companydetails({ userName }) {
  const [Create, setCreate] = useState(false);
  const [showadd, setShowadd] = useState(false);
  const [showedit, setShowedit] = useState(false);

  const [companydetail, setCompanydetail] = useState();
   const width=900;
  useEffect(() => {
    axios
      .get(`${API_HOST}/companyDetails/adminView?userName=${userName}`, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        setCompanydetail(res?.data?.success?.data);
        if (res?.data?.success?.data) {
          setCreate(true);
        }
      });
  }, []);

  return (
    <div>
      {!showadd && !showedit && (
        <>
          <div
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              width: "96%",
              cursor: "auto",
            }}
            className="profileworkhistruytoggleervalue"
          >
            <div>Company Details</div>
           
          </div>

          <div
            style={{
              width: width > 700 ? "80.5vw" : "90vw",
              margin: width > 700 ? "1vw 1vw" : "2vw",
              height: "fit-content",
            }}
            className="bankcardContainer"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: width<700 &&"wrap"
              }}
            >
              <div
                style={{ justifyContent: "flex-start", width: "58vw" }}
                className="flexofbankdetails"
              >
                {companydetail?.logo && (
                  <div
                    style={{ fontWeight: "400", width: "9vw" }}
                    className="titleboxflexofbank"
                  >
                    <img
                      style={{
                        width: "8vw",
                        height: "8vw",
                        objectFit: "contain",
                      }}
                      src={companydetail?.logo}
                      alt=""
                    />
                  </div>
                )}
                <div style={{ width: "fit-content" }}>
                  <div
                    style={{ fontWeight: "500", fontSize: width>700 ? "1.6vw" :"3.5vw"}}
                    className="titleboxflexofbank"
                  >
                    {companydetail?.companyName}
                  </div>
                  <div
                    style={{ fontWeight: "400" }}
                    className="titleboxflexofbank"
                  >
                    {companydetail?.companyTitle}
                  </div>
                </div>
              </div>
              <div style={{ width: width>700 ?"20": "90vw" }}>
                <div
                  style={{ fontWeight: "400", display: "block" }}
                  className="titleboxflexofbank"
                >
                  <b>Mobile: </b> {companydetail?.mobile}
                </div>
                <div
                  style={{ fontWeight: "400", display: "block" }}
                  className="titleboxflexofbank"
                >
                  <b>Email: </b> {companydetail?.emailId}
                </div>
                <div
                  style={{ fontWeight: "400", display: "block" }}
                  className="titleboxflexofbank"
                >
                  <b>GSTIN: </b>
                  {companydetail?.gstNo}
                </div>
                <div
                  style={{ fontWeight: "400", display: "block" }}
                  className="titleboxflexofbank"
                >
                  <b>Address: </b> {companydetail?.adress}
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">State</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.state}
                </div>
              </div>
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Pincode</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.pinCode}
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Invoice Serial Name </div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.invoicePrefix}
                </div>
              </div>
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Invoicing Year </div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                 {companydetail?.invoiceTimePeriod}
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Invoice Start No</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.invoiceSeries}
                </div>
              </div>
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Invoice Genrate no</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                {companydetail?.nextInvoice}
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Bank Name</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.bankName}
                </div>
              </div>
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Account Holder Name</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                {companydetail?.accountHolderName}
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Invoice Account No</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.accNo}
                </div>
              </div>
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">IFSC Code</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                {companydetail?.ifscCode}
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Branch</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.branch}
                </div>
              </div>
            
            </div>
           
            <div style={{ width: "100%" }} className="flexofbankdetails">
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Company QR</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.qr && (
                    <img
                      src={companydetail?.qr}
                      style={{ width: "9vw", objectFit: "contain" }}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div style={{ width: "50%" }} className="flexofbankdetails">
                <div className="titleboxflexofbank">Signature / Stamp</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="titleboxflexofbank"
                >
                  {companydetail?.signAndStamp && (
                    <img
                      src={companydetail?.signAndStamp}
                      style={{ width: "9vw", objectFit: "contain" }}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
     
    </div>
  );
}
