import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import axios from "axios";
import API_HOST from "../../../env";
const currencies = [
  {
    value: "completed",
  },
  {
    value: "processing",
  },
  {
    value: "pending",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
export default function ContactBox({ data, setRecall, recall }) {
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [currency, setCurrency] = React.useState(data?.status);
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleDelete = () => {
    axios
      .post(`${API_HOST}/contactUs/removeContact`, {
        contactId: data?.contactId,
      })
      .then((res) => {
        handleClose3();

        setRecall(!recall);
      });
  };

  const handleUpdateblog = (value) => {
    axios
      .post(`${API_HOST}/contactUs/editContact`, {
        contactId: data?.contactId,
        status: value,
      })
      .then((res) => {
        setRecall(!recall);
      });
  };

  return (
    <div
      style={{
        margin: "1vw",
        border: "none",
        boxShadow: "1px 5px 10px #00000050",
        padding: "1vw",
        marginBottom: "2vw",
        height: "fit-content",
      }}
      className="workhistrybox"
    >
      <div
        className="workhistryboxtitle"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <div>{data?.queries}</div>
        <div style={{ width: "5vw", height: "1vw" }}>
          <img
            onClick={() => {
              handleOpen3();
            }}
            style={{
              margin: "0vw 0.5vw",
              marginRight: "3vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img1}
            alt=""
          />
        </div>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Query</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose3}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              Are you really want to delete these ' Query '
            </div>

            <hr style={{ color: "#00000090" }} />
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
                onClick={handleClose3}
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  handleDelete();
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div
        style={{ fontSize: "0.95vw", marginTop: "0.51vw", color: "black" }}
        className="workhistryboxdata"
      >
        {data?.shortDescription}
      </div>

      <div style={{ width: "90%", color: "black" }}>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div
              style={{ color: "black" }}
              className="profileuserfirstonetitle"
            >
              Fullname
            </div>
            <div style={{ color: "black" }} className="profileuserfirstonedata">
              {data?.firstName} {data?.lastName}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div
              style={{ color: "black" }}
              className="profileuserfirstonetitle"
            >
              Email
            </div>
            <div style={{ color: "black" }} className="profileuserfirstonedata">
              {data?.emailId}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div
              style={{ color: "black" }}
              className="profileuserfirstonetitle"
            >
              mobileNo
            </div>
            <div style={{ color: "black" }} className="profileuserfirstonedata">
              {data?.mobileNo}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div
              style={{ color: "black" }}
              className="profileuserfirstonetitle"
            >
              Status
            </div>
            <div className="profileuserfirstonedata">
              <div
                style={{
                  width: "12vw",
                  padding: "0vw",
                  paddingLeft: "0vw",
                }}
              >
                <div
                  style={{ marginBottom: "0", marginTop: "0vw" }}
                  className="inputtypeformfield"
                >
                  <TextField
           
                    id="standard-select-currency"
                    select
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderBottom: "0.11px solid white",
                      color: "black !important",
                    }}
                    value={currency}
                    onChange={handleChange}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <MenuItem
                        hidden={
                          option.value === "Select Category" ? true : false
                        }
                        key={option.value}
                        value={option.value}
                        onClick={() => handleUpdateblog(option.value)}
                      >
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          height: "1.5vw",
        }}
        className="workhistryboxdate"
      >
        {/* {data?.created_at?.slice(0, 10)} */}
        {new Date(data?.created_at).getDate()}/
          {new Date(data?.created_at).getMonth() + 1}/
          {new Date(data?.created_at).getFullYear()}
      </div>
    </div>
  );
}
