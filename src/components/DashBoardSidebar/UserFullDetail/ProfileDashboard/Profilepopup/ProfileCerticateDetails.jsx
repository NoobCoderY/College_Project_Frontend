import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const styl = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};

const styl3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};

export default function ProfileCerticateDetails({
  certificate,
  width,
  setcertificated,
  user,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <div className="pusercertificatebox">
            <div onClick={handleOpenx} className="pusercertificateboximg">
              <img
                style={{ cursor: "pointer" }}
                src={certificate?.images}
                alt=""
              />
            </div>
            <a href={certificate?.verifiedUrl} target="_blank">
              <div className="pusercertificateboxtext">
                <div className="pusercertificateboxtexthead">
                  {certificate?.certificateName}
                </div>

                <div className="pusercertificateboxtexthead1">
                  Provider: {certificate?.organization}
                </div>
                <div className="pusercertificateboxtexthead3">
                  Issued on {certificate?.issueDate} / {" "}
                  {certificate?.doesNotExpire
                    ? "present"
                    : certificate?.expiredDate}
                </div>
              </div>{" "}
            </a>
          </div>
        </div>

        <Modal
          open={openx}
          onClose={handleClosex}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? styl : styl3}>
            <div className="imgbocofcerti">
              <img src={certificate?.images} alt="" />
            </div>
          </Box>
        </Modal>
      </div>
      <hr
        style={{
          margin: "1vw 0vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}
