import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import img from "../../../assets/Logo/tools 44 shorten.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import img3 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Document.svg";
import img4 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Delete.svg";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Modal from "@mui/material/Modal";

import axios from "axios";
import API_HOST from "../../../env";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "#00000060",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
  padding: 0,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};

const style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style2 = {
  position: "absolute",
  maxHieght: "90vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 2,
    padding: 1,
  },
  section1: {
    width: "33%",
    margin: 1,
    padding: 1,
  },
  section11: {
    width: "50%",
    margin: 1,
    padding: 1,
  },
  section15: {
    width: "50%",
    margin: 1,
    padding: 1,
    marginTop: "8vw",
  },
  section15x: {
    width: "50%",
    margin: 1,
    padding: 1,
    marginTop: "12vw",
    marginLeft: "23vw",
  },
  section44: {
    width: "50%",

    marginTop: "10vw",
    marginLeft: "8vw",
  },
  viewer: {
    width: "70vw", //the pdf viewer will take up all of the width and height
    height: "90vh",
  },
  image: {
    width: "10vw",
    height: "10vw",
    objectFit: "contain",
  },
  imagex: {
    width: "20vw",
    objectFit: "contain",
    maxHeight: "14vw",
  },
  taxinvoice: {
    textAlign: "center",
    fontSize: "15px",
    marginTop: "10px",
  },
  taxinvoice1: {
    fontSize: "15px",
    marginTop: "10px",
  },
  taxinvoice16: {
    fontSize: "12px",
    marginTop: "5px",
  },
  taxinvoice17: {
    fontSize: "12px",
    marginTop: "5px",
    marginLeft: "5vw",
  },
  flexboxcompanydetail: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 10px",
    justifyContent: "space-between",
  },
  flexboxcompanydetails: {
    display: "flex",
    flexDirection: "row",
    padding: "3px 10px",
    justifyContent: "space-between",
  },
  flexboxcompanydetailsx: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 10px",
    justifyContent: "space-between",
  },
  flexboxcompanydetails1: {
    display: "flex",

    padding: "2px 10px",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexboxcompanydetails2: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
    border: "2px solid black",
    borderRight: "none",
  },

  flexboxcompanydetails3: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
    border: "2px solid black",
    borderRight: "none",
    borderTop: "0px solid black",
  },
  companyname: {
    width: "70vw",
    fontSize: "25px",
    fontWeight: "600",
  },
  companytitle: {
    width: "70vw",
    fontSize: "15px",
    marginTop: "6px",
  },
  companytitle1: {
    width: "70vw",
    fontSize: "11px",
    margin: 1,
    marginLeft: "10px",
  },
  companyaddress: {
    width: "70vw",
    fontSize: "10px",
    marginTop: "3px",
  },
  details: {
    fontSize: "10px",
    marginTop: "3px",
  },
  detailx: {
    fontSize: "10px",
    padding: "3px",
    fontWeight: "bold",
  },
  detailxx: {
    fontSize: "12px",

    fontWeight: "bold",
  },
  details1: {
    width: "17%",

    borderRight: "2px solid black",
  },
  details5: {
    width: "5%",

    borderRight: "2px solid black",
  },
  details35: {
    width: "33%",

    borderRight: "2px solid black",
  },
  table: {
    margin: "10px",
  },
});

Font.register({
  family: "Roboto",
  fonts: [
    { src: "<path-to-normal-font-variant>" },
    { src: "<path-to-italic-font-variant>", fontStyle: "italic" },
    { src: "<path-to-italic-font-variant>", fontWeight: "600" },
  ],
});
var a = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
var b = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function inWords(num) {
  if ((num = num.toString()).length > 9) return "overflow";
  let n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        "only "
      : "";
  return str;
}

const MyDoc = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.taxinvoice}>Tax Invoice</Text>
      </View>
      <View style={styles.flexboxcompanydetails}>
        {data?.logo && <Image style={styles.image} src={data?.logo} alt="" />}
        <View style={styles.section}>
          <Text style={styles.companyname}>{data?.companyName} </Text>
          <Text style={styles.companytitle}>{data?.companyTitle}</Text>
        </View>

        {data?.qr && <Image style={styles.image} src={data?.qr} alt="" />}
      </View>
      <View style={styles.flexboxcompanydetails}>
        <View style={styles.section1}>
          <Text style={styles.detailxx}>Invoice No: {data?.invoiceNo}</Text>
        </View>
        <View style={styles.section1}>
          <Text style={styles.detailxx}>Invoice date : {data?.date}</Text>
        </View>
        <View style={styles.section1}>
          <Text style={styles.detailxx}>P.O NO: {data?.PONO}</Text>
        </View>
      </View>

      <View style={styles.flexboxcompanydetails}>
        <View style={styles.section1}>
          <Text style={styles.taxinvoice1}>Company Details</Text>
          <Text style={styles.details}>Mobile: {data?.mobile}</Text>
          <Text style={styles.details}>Email: {data?.emailId}</Text>
          <Text style={styles.details}>Address: {data?.adress}</Text>
          <Text style={styles.details}>State: {data?.state}</Text>
          <Text style={styles.details}>Pincode: {data?.pinCode}</Text>
          <Text style={styles.details}>GST No: {data?.gstNo}</Text>
        </View>
        <View style={styles.section1}>
          <Text style={styles.taxinvoice1}>Buyer Details</Text>
          <Text style={styles.details}>Name: {data?.buyerName}</Text>
          <Text style={styles.details}>Mobile: {data?.buyerMobile}</Text>
          <Text style={styles.details}>Email: {data?.buyerEmailId}</Text>
          <Text style={styles.details}>Address: {data?.buyerAddress}</Text>
          <Text style={styles.details}>State: {data?.buyerState}</Text>
          <Text style={styles.details}>Pincode: {data?.buyerPinCode}</Text>
          <Text style={styles.details}>GST No: {data?.buyerGSTNo}</Text>
        </View>
        <View style={styles.section1}>
          {" "}
          <Text style={styles.taxinvoice1}>Consigner Details</Text>
          <Text style={styles.details}>Name: {data?.consignerName}</Text>
          <Text style={styles.details}>Mobile: {data?.consignerMobile}</Text>
          <Text style={styles.details}>Email: {data?.consignerEmailId}</Text>
          <Text style={styles.details}>Address: {data?.consignerAddress}</Text>
          <Text style={styles.details}>State: {data?.consignerState}</Text>
          <Text style={styles.details}>Pincode: {data?.consignerPinCode}</Text>
          <Text style={styles.details}>GST No: {data?.consignerGSTNo}</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.flexboxcompanydetails2}>
          <View style={styles.details5}>
            <Text style={styles.detailx}>SrNo </Text>
          </View>
          <View style={styles.details35}>
            <Text style={styles.detailx}>Product description</Text>
          </View>
          <View style={styles.details1}>
            {" "}
            <Text style={styles.detailx}>HSN Code</Text>
          </View>
          <View style={styles.details1}>
            {" "}
            <Text style={styles.detailx}>Rate (Rs) </Text>
          </View>
          <View style={styles.details1}>
            {" "}
            <Text style={styles.detailx}>QTY/Unit</Text>
          </View>
          <View style={styles.details1}>
            {" "}
            <Text style={styles.detailx}>Total Price (Rs)</Text>
          </View>
        </View>
        {data?.items?.map((data, index) => {
          return (
            <View style={styles.flexboxcompanydetails3}>
              <View style={styles.details5}>
                <Text style={styles.detailx}>{index + 1}</Text>
              </View>
              <View style={styles.details35}>
                <Text style={styles.detailx}>{data?.productName}</Text>
              </View>
              <View style={styles.details1}>
                {" "}
                <Text style={styles.detailx}>{data?.hsnCode}</Text>
              </View>
              <View style={styles.details1}>
                {" "}
                <Text style={styles.detailx}>{data?.rate}</Text>
              </View>
              <View style={styles.details1}>
                {" "}
                <Text style={styles.detailx}>{data?.qty}</Text>
              </View>
              <View style={styles.details1}>
                {" "}
                <Text style={styles.detailx}>
                  {parseFloat(data?.value).toFixed(2)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.flexboxcompanydetails}>
        <View style={styles.section11}>
          <Text style={styles.taxinvoice16}>
            Total Invoice Value in Words (Rs)
          </Text>
          <Text style={styles.details}>
            {inWords(parseInt(data?.grandTotal)).toUpperCase()}
          </Text>
        </View>
        <View style={styles.section1}>
          <View style={styles.flexboxcompanydetail}>
            <View>
              {" "}
              <Text style={styles.detailx}>Total Taxable Value :</Text>
            </View>
            <View>
              {" "}
              <Text style={styles.detailx}>
                {" "}
                Rs {parseFloat(data?.totalValue).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.flexboxcompanydetail}>
            <View>
              {" "}
              <Text style={styles.detailx}>
                <Text style={styles.details}>
                  CGST{" "}
                  {data?.state === data?.buyerState &&
                    `(${
                      data?.state === data?.buyerState && data?.cgst + "%"
                    })`}{" "}
                  :
                </Text>
              </Text>
            </View>
            <View>
              {" "}
              <Text style={styles.detailx}>
                {data?.state === data?.buyerState
                  ? "Rs " +
                    parseFloat((data?.totalValue * data?.cgst) / 100).toFixed(2)
                  : "-"}
              </Text>
            </View>
          </View>

          <View style={styles.flexboxcompanydetail}>
            <View>
              {" "}
              <Text style={styles.detailx}>
                <Text style={styles.details}>
                  SGST{" "}
                  {data?.state === data?.buyerState &&
                    `(${data?.state === data?.buyerState && data?.cgst + "%"})`}
                  :
                </Text>
              </Text>
            </View>
            <View>
              {" "}
              <Text style={styles.detailx}>
                {data?.state === data?.buyerState
                  ? "Rs " +
                    parseFloat((data?.totalValue * data?.cgst) / 100).toFixed(2)
                  : "-"}
              </Text>
            </View>
          </View>

          <View style={styles.flexboxcompanydetail}>
            <View>
              {" "}
              <Text style={styles.detailx}>
                <Text style={styles.details}>
                  IGST{" "}
                  {data?.state !== data?.buyerState &&
                    `(${
                      data?.state !== data?.buyerState && data?.igst + "%"
                    })`}{" "}
                  :
                </Text>
              </Text>
            </View>
            <View>
              {" "}
              <Text style={styles.detailx}>
                {data?.state !== data?.buyerState
                  ? "Rs " +
                    parseFloat((data?.totalValue * data?.igst) / 100).toFixed(2)
                  : "-"}
              </Text>
            </View>
          </View>

          <View style={styles.flexboxcompanydetail}>
            <View>
              {" "}
              <Text style={styles.detailx}>Total Invoice Value :</Text>
            </View>
            <View>
              {" "}
              <Text style={styles.detailx}>
                {" "}
                Rs {parseFloat(data?.grandTotal).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.flexboxcompanydetails}>
        <View style={styles.section1}>
          {" "}
          <Text style={styles.taxinvoice1}>Transport Details</Text>
          <Text style={styles.details}>
            Mode of Transport: {data?.modeOfTransport}
          </Text>
          <Text style={styles.details}>Vehical No: {data?.vehicalNo}</Text>
          <Text style={styles.details}>G.R NO: {data?.GRNO}</Text>
          <Text style={styles.details}>E-way Bill No: {data?.eWAyBillNo}</Text>
          <Text style={styles.details}>E-way Date: {data?.eWayDate}</Text>
        </View>
        <View style={styles.section1}>
          {" "}
          <Text style={styles.taxinvoice1}>Bank Details</Text>
          <Text style={styles.details}>Bank Name: {data?.bankName}</Text>
          <Text style={styles.details}>
            Account Holder Name: {data?.accountHolderName}
          </Text>
          <Text style={styles.details}>Account No: {data?.accNo}</Text>
          <Text style={styles.details}>Ifsc: {data?.ifscCode}</Text>
          <Text style={styles.details}>Branch: {data?.branch}</Text>
          <Text style={styles.details}>Payment Link: {data?.paymentLink}</Text>
          <Text style={styles.details}>Payment Qr :</Text>
          <View style={styles.section}>
            <View style={styles.section}>
              {data?.payment && (
                <Image style={styles.image} src={data?.payment} alt="" />
              )}
            </View>
          </View>
        </View>
        <View style={styles.section1}>
          {" "}
          <Text style={styles.taxinvoice1}>Signature and Stamp</Text>
          <View style={styles.section}>
            {" "}
            <View style={styles.section}>
              <View style={styles.section}>
                {data?.signAndStamp && (
                  <Image
                    style={styles.imagex}
                    src={data?.signAndStamp}
                    alt=""
                  />
                )}{" "}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.flexboxcompanydetails}>
        <View style={styles.section15}>
          <View style={styles.section}>
            <Text style={styles.companytitle1}>
              ** Goods once sold will not be taken back **
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.companytitle1}>
              ** Any dispute will be subject Juridication **{" "}
            </Text>
          </View>
        </View>
        <View style={styles.section15x}>
          <View style={styles.section44}>
            {<Image style={styles.imagex} src={img} alt="" />}
          </View>

          <Text style={styles.taxinvoice17}>Invoice created on SMS.com</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function Skillpopupcopy({ width, data, setRecall, recall }) {
  const navigate = useNavigate();
  const ref = React.createRef();
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handledelete = () => {
    axios
      .post(
        `${API_HOST}/invoice/removeInvoice`,
        { invoiceId: data?.invoiceId },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then(() => {
        handleClosex3();
        setRecall(!recall);
      });
  };

  const handleClosex = () => setOpenx(false);

  const [openx3, setOpenx3] = React.useState(false);
  const handleOpenx3 = () => setOpenx3(true);
  const handleClosex3 = () => setOpenx3(false);
  return (
    <div ref={ref}>
      <div
        style={{
          alignItems: "center",
          margin: "1vw 0vw",
          padding: width > 700 ? "0.2vw  2vw" : "2vw",
          color: "black",
          width: width <= 700 && "192vw",
        }}
        className="navoftableblogsdata"
      >
        <div style={{ width: width > 700 ? "12vw" : "30vw" }}>
          {data?.invoiceNo}
        </div>
        <div style={{ width: width > 700 ? "15.5vw" : "50vw" }}>
          {data?.buyerName}
        </div>
        <div style={{ width: width > 700 ? "11vw" : "30vw" }}>
          {" "}
          Rs.{parseFloat(data?.totalValue).toFixed(2)}
        </div>
        <div style={{ width: width > 700 ? "9vw" : "20vw" }}>
          Rs.{parseFloat(data?.grandTotal - data?.totalValue).toFixed(2)}
        </div>
        <div style={{ width: width > 700 ? "15.5vw" : "40vw" }}>
          {" "}
          Rs.{parseFloat(data?.grandTotal).toFixed(2)}
        </div>
        <div style={{ width: width > 700 ? "9vw" : "30vw" }}>
          {data?.created_at && (
            <span>
              {/* {data?.created_at?.slice(11, 16)}{" "}
                    {data?.created_at?.slice(0, 10)} */}
              {/* {new Date(data?.created_at).getHours()}:
                      {new Date(data?.created_at).getMinutes()}
                      {" , "} */}
              {new Date(data?.created_at).getDate()}/
              {new Date(data?.created_at).getMonth() + 1}/
              {new Date(data?.created_at).getFullYear()}
            </span>
          )}
        </div>
        <div
          style={{
            width: width > 700 ? "7vw" : "12vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img
            onClick={() =>
              navigate(`/dashbaord/editinvoice/${data?.invoiceId}`)
            }
            style={{
              width: width > 700 ? "1.82vw" : "4vw",
              cursor: "pointer",
              marginRight: "1vw",
            }}
            src={img2}
            alt=""
          />
          {width > 700 && (
            <img
              onClick={() => handleOpenx()}
              style={{
                width: width > 700 ? "1.82vw" : "4vw",
                cursor: "pointer",
                marginRight: "1vw",
                filter: "brightness(0)",
              }}
              src={img3}
              alt=""
            />
          )}
          <PDFDownloadLink
            document={<MyDoc data={data} />}
            fileName={`${data?.buyerName}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                " ..."
              ) : (
                <CloudDownloadOutlinedIcon
                  style={{
                    width: width > 700 ? "1.82vw" : "4vw",
                    cursor: "pointer",
                    marginRight: "1vw",
                  }}
                  src={img2}
                  alt=""
                />
              )
            }
          </PDFDownloadLink>
          <img
            onClick={() => handleOpenx3()}
            style={{
              width: width > 700 ? "1.82vw" : "4vw",
              cursor: "pointer",
            }}
            src={img4}
            alt=""
          />
        </div>
      </div>
      <Modal
        open={openx}
        onClose={handleClosex}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style2}>
          <PDFViewer style={styles.viewer}>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.taxinvoice}>Tax Invoice</Text>
                </View>
                <View style={styles.flexboxcompanydetails}>
                  {data?.logo && (
                    <Image style={styles.image} src={data?.logo} alt="" />
                  )}
                  <View style={styles.section}>
                    <Text style={styles.companyname}>{data?.companyName} </Text>
                    <Text style={styles.companytitle}>
                      {data?.companyTitle}
                    </Text>
                  </View>

                  {data?.qr && (
                    <Image style={styles.image} src={data?.qr} alt="" />
                  )}
                </View>
                <View style={styles.flexboxcompanydetails}>
                  <View style={styles.section1}>
                    <Text style={styles.detailxx}>
                      Invoice No: {data?.invoiceNo}
                    </Text>
                  </View>
                  <View style={styles.section1}>
                    <Text style={styles.detailxx}>
                      Invoice date : {data?.date}
                    </Text>
                  </View>
                  <View style={styles.section1}>
                    <Text style={styles.detailxx}>P.O NO: {data?.PONO}</Text>
                  </View>
                </View>

                <View style={styles.flexboxcompanydetails}>
                  <View style={styles.section1}>
                    <Text style={styles.taxinvoice1}>Company Details</Text>
                    <Text style={styles.details}>Mobile: {data?.mobile}</Text>
                    <Text style={styles.details}>Email: {data?.emailId}</Text>
                    <Text style={styles.details}>Address: {data?.adress}</Text>
                    <Text style={styles.details}>State: {data?.state}</Text>
                    <Text style={styles.details}>Pincode: {data?.pinCode}</Text>
                    <Text style={styles.details}>GST No: {data?.gstNo}</Text>
                  </View>
                  <View style={styles.section1}>
                    <Text style={styles.taxinvoice1}>Buyer Details</Text>
                    <Text style={styles.details}>Name: {data?.buyerName}</Text>
                    <Text style={styles.details}>
                      Mobile: {data?.buyerMobile}
                    </Text>
                    <Text style={styles.details}>
                      Email: {data?.buyerEmailId}
                    </Text>
                    <Text style={styles.details}>
                      Address: {data?.buyerAddress}
                    </Text>
                    <Text style={styles.details}>
                      State: {data?.buyerState}
                    </Text>
                    <Text style={styles.details}>
                      Pincode: {data?.buyerPinCode}
                    </Text>
                    <Text style={styles.details}>
                      GST No: {data?.buyerGSTNo}
                    </Text>
                  </View>
                  <View style={styles.section1}>
                    {" "}
                    <Text style={styles.taxinvoice1}>Consigner Details</Text>
                    <Text style={styles.details}>
                      Name: {data?.consignerName}
                    </Text>
                    <Text style={styles.details}>
                      Mobile: {data?.consignerMobile}
                    </Text>
                    <Text style={styles.details}>
                      Email: {data?.consignerEmailId}
                    </Text>
                    <Text style={styles.details}>
                      Address: {data?.consignerAddress}
                    </Text>
                    <Text style={styles.details}>
                      State: {data?.consignerState}
                    </Text>
                    <Text style={styles.details}>
                      Pincode: {data?.consignerPinCode}
                    </Text>
                    <Text style={styles.details}>
                      GST No: {data?.consignerGSTNo}
                    </Text>
                  </View>
                </View>

                <View style={styles.table}>
                  <View style={styles.flexboxcompanydetails2}>
                    <View style={styles.details5}>
                      <Text style={styles.detailx}>SrNo </Text>
                    </View>
                    <View style={styles.details35}>
                      <Text style={styles.detailx}>Product description</Text>
                    </View>
                    <View style={styles.details1}>
                      {" "}
                      <Text style={styles.detailx}>HSN Code</Text>
                    </View>
                    <View style={styles.details1}>
                      {" "}
                      <Text style={styles.detailx}>Rate (Rs) </Text>
                    </View>
                    <View style={styles.details1}>
                      {" "}
                      <Text style={styles.detailx}>QTY/Unit</Text>
                    </View>
                    <View style={styles.details1}>
                      {" "}
                      <Text style={styles.detailx}>Total Price (Rs)</Text>
                    </View>
                  </View>
                  {data?.items?.map((data, index) => {
                    return (
                      <View style={styles.flexboxcompanydetails3}>
                        <View style={styles.details5}>
                          <Text style={styles.detailx}>{index + 1}</Text>
                        </View>
                        <View style={styles.details35}>
                          <Text style={styles.detailx}>
                            {data?.productName}
                          </Text>
                        </View>
                        <View style={styles.details1}>
                          {" "}
                          <Text style={styles.detailx}>{data?.hsnCode}</Text>
                        </View>
                        <View style={styles.details1}>
                          {" "}
                          <Text style={styles.detailx}>{data?.rate}</Text>
                        </View>
                        <View style={styles.details1}>
                          {" "}
                          <Text style={styles.detailx}>{data?.qty}</Text>
                        </View>
                        <View style={styles.details1}>
                          {" "}
                          <Text style={styles.detailx}>
                            {parseFloat(data?.value).toFixed(2)}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
                <View style={styles.flexboxcompanydetails}>
                  <View style={styles.section11}>
                    <Text style={styles.taxinvoice16}>
                      Total Invoice Value in Words (Rs)
                    </Text>
                    <Text style={styles.details}>
                      {inWords(parseInt(data?.grandTotal)).toUpperCase()}
                    </Text>
                  </View>
                  <View style={styles.section1}>
                    <View style={styles.flexboxcompanydetail}>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          Total Taxable Value :
                        </Text>
                      </View>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          {" "}
                          Rs {parseFloat(data?.totalValue).toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flexboxcompanydetail}>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          <Text style={styles.details}>
                            CGST{" "}
                            {data?.state === data?.buyerState &&
                              `(${
                                data?.state === data?.buyerState &&
                                data?.cgst + "%"
                              })`}{" "}
                            :
                          </Text>
                        </Text>
                      </View>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          {" "}
                          {data?.state === data?.buyerState
                            ? "Rs " +
                              parseFloat(
                                (data?.totalValue * data?.cgst) / 100
                              ).toFixed(2)
                            : "-"}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.flexboxcompanydetail}>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          <Text style={styles.details}>
                            SGST{" "}
                            {data?.state === data?.buyerState &&
                              `(${
                                data?.state === data?.buyerState &&
                                data?.cgst + "%"
                              })`}
                            :
                          </Text>
                        </Text>
                      </View>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          {data?.state === data?.buyerState
                            ? "Rs " +
                              parseFloat(
                                (data?.totalValue * data?.cgst) / 100
                              ).toFixed(2)
                            : "-"}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.flexboxcompanydetail}>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          <Text style={styles.details}>
                            IGST{" "}
                            {data?.state !== data?.buyerState &&
                              `(${
                                data?.state !== data?.buyerState &&
                                data?.igst + "%"
                              })`}{" "}
                            :
                          </Text>
                        </Text>
                      </View>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          {data?.state !== data?.buyerState
                            ? "Rs " +
                              parseFloat(
                                (data?.totalValue * data?.igst) / 100
                              ).toFixed(2)
                            : "-"}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.flexboxcompanydetail}>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          Total Invoice Value :
                        </Text>
                      </View>
                      <View>
                        {" "}
                        <Text style={styles.detailx}>
                          {" "}
                          Rs {parseFloat(data?.grandTotal).toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flexboxcompanydetails}>
                  <View style={styles.section1}>
                    {" "}
                    <Text style={styles.taxinvoice1}>Transport Details</Text>
                    <Text style={styles.details}>
                      Mode of Transport: {data?.modeOfTransport}
                    </Text>
                    <Text style={styles.details}>
                      Vehical No: {data?.vehicalNo}
                    </Text>
                    <Text style={styles.details}>G.R NO: {data?.GRNO}</Text>
                    <Text style={styles.details}>
                      E-way Bill No: {data?.eWAyBillNo}
                    </Text>
                    <Text style={styles.details}>
                      E-way Date: {data?.eWayDate}
                    </Text>
                  </View>
                  <View style={styles.section1}>
                    {" "}
                    <Text style={styles.taxinvoice1}>Bank Details</Text>
                    <Text style={styles.details}>
                      Bank Name: {data?.bankName}
                    </Text>
                    <Text style={styles.details}>
                      Account Holder Name: {data?.accountHolderName}
                    </Text>
                    <Text style={styles.details}>
                      Account No: {data?.accNo}
                    </Text>
                    <Text style={styles.details}>Ifsc: {data?.ifscCode}</Text>
                    <Text style={styles.details}>Branch: {data?.branch}</Text>
                    <Text style={styles.details}>
                      Payment Link: {data?.paymentLink}
                    </Text>
                    <Text style={styles.details}>Payment Qr :</Text>
                    <View style={styles.section}>
                      <View style={styles.section}>
                        {data?.payment && (
                          <Image
                            style={styles.image}
                            src={data?.payment}
                            alt=""
                          />
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={styles.section1}>
                    {" "}
                    <Text style={styles.taxinvoice1}>Signature and Stamp</Text>
                    <View style={styles.section}>
                      {" "}
                      <View style={styles.section}>
                        <View style={styles.section}>
                          {data?.signAndStamp && (
                            <Image
                              style={styles.imagex}
                              src={data?.signAndStamp}
                              alt=""
                            />
                          )}{" "}
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flexboxcompanydetails}>
                  <View style={styles.section15}>
                    <View style={styles.section}>
                      <Text style={styles.companytitle1}>
                        ** Goods once sold will not be taken back **
                      </Text>
                    </View>
                    <View style={styles.section}>
                      <Text style={styles.companytitle1}>
                        ** Any dispute will be subject Juridication **{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.section15x}>
                    <View style={styles.section44}>
                      {<Image style={styles.imagex} src={img} alt="" />}
                    </View>

                    <Text style={styles.taxinvoice17}>
                      Invoice created on SMS.com
                    </Text>
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </Box>
      </Modal>
      <Modal
        open={openx3}
        onClose={handleClosex3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style1 : style3}>
          <div style={{ padding: "1vw" }} className="profiletitleandmenunav">
            <div className="profiledetailstitle">Delete Invoice</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClosex3}
                  style={{
                    fontSize: width > 700 ? "1.5vw" : "4vw",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#000000" }} />

          <div
            style={{ left: "0vw", width: "100%", padding: "1vw" }}
            className="loginfield"
          >
            Are you sure Want to Delete this Invoice ?
          </div>

          <hr style={{ color: "#000000" }} />
          <div
            style={{ marginTop: "0.31vw", padding: "1vw" }}
            className="handlemoreaboutskill"
          >
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClosex3}
            >
              Cancel
            </div>
            <div
              onClick={() => {
                handledelete();
              }}
              style={{ cursor: "pointer", background: "#168B12" }}
              className="handlecirclieaboutsave"
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
