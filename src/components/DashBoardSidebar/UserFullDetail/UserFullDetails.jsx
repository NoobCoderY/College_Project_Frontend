import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProfileBanner from "./ProfileDashboard/ProfileBanner";
import ProfileBadges from "./ProfileDashboard/ProfileBadges";
import Profileuserdetails from "./ProfileDashboard/Profileuserdetails";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ProfileCatalogs from "./ProfileDashboard/ProfileCatalogs";
import Profileportfolio from "./ProfileDashboard/Profileportfolio";
import ProfileSkills from "./ProfileDashboard/ProfileSkills";
import ProfileCertificate from "./ProfileDashboard/ProfileCertificate";
import ProfileWorkexperince from "./ProfileDashboard/ProfileWorkexperince";
import ProfileEducation from "./ProfileDashboard/ProfileEducation";
import ProfileOther from "./ProfileDashboard/ProfileOther";
import "./CreatedJob/BiddingFormDashboard.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import API_HOST from "../../../env";
import Documents from "./DocumentsPage/Documents";
import BankDetail from "./BankDetails/BankDetail";
import Companydetails from "./Company details/Companydetails";
import Directbuy from "./BuyingList/Directbuy";
import SellingList from "./Sellinglist/SellingList";
import CreateWork from "./CreateWork/CreateWork";
import AppliedJob from "./Appliedjob/AppliedJob";


const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
  padding: "1vw",
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "hidden",
  padding: 1,
};
export default function SkillCenter() {
  const navigate = useNavigate();
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { type, userName } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (type === "My Profile") {
      setWorkhistorytoggle(1);
    } else if (type === "Wallet") {
      setWorkhistorytoggle(8);
    } else if (type === "directbuylist") {
      setWorkhistorytoggle(2);
    } else if (type === "directsellinglist") {
      setWorkhistorytoggle(3);
    } else if (type === "proposallist") {
      setWorkhistorytoggle(4);
    } else if (type === "biddinglist") {
      setWorkhistorytoggle(5);
    } else if (type === "Bank Details") {
      setWorkhistorytoggle(9);
    } else if (type === "Documents") {
      setWorkhistorytoggle(10);
    } else if (type === "company") {
      setWorkhistorytoggle(13);
    } else {
      setWorkhistorytoggle(9);
    }
  }, [type]);

  useEffect(() => {
    axios.get(`${API_HOST}/users/viewUser?userName=${userName}`).then((res) => {
      setUser(res?.data?.success?.data);
    });
  }, [userName]);

  

  const width = 800;

  const handleAddIssue = () => {
    if (!user?.suspend) {
      axios
        .post(
          `${API_HOST}/users/userSusepnd`,
          {
            userId: user?.userId,
          },
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          axios
            .get(`${API_HOST}/users/viewUser?userName=${userName}`)
            .then((res) => {
              setUser(res?.data?.success?.data);
            });
          handleClose();
        });
    } else {
      axios
        .post(
          `${API_HOST}/users/inactiveSuspend`,
          {
            userId: user?.userId,
          },
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          axios
            .get(`${API_HOST}/users/viewUser?userName=${userName}`)
            .then((res) => {
              setUser(res?.data?.success?.data);
            });
          handleClose();
        });
    }
  };

  return (
    <div
      style={{ margin: "0", padding: "1vw 0vw" }}
      className="BrowseWorkMain-cntainer"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "78vw",
          margin: "1vw 1vw",
          alignItems: "center",
          height: "3vw",
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{
              cursor: "pointer",
              zIndex: "100",
              padding: "0.5vw 0.7vw",
              backgroundColor: "white",
              color: "#000",
              fontSize: "1.2vw",
              borderRadius: "0.3vw",
              border: "1px solid #d7d7d7",
              marginRight: "3vw",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon />
          </button>

          <div
            style={{
              color: "#0052CC",
              fontSize: "2.1vw",
              textTransform: "capitalize",
            }}
          >
            {user?.fullName}
          </div>
        </div>

        <div>
          <button
            style={{ marginRight: "2vw", width: "12vw" }}
            className="hb-buttonx"
            onClick={() => handleOpen()}
          >
            {!user?.suspend ? "Suspend Account" : "Activate Account"}
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style1 : style2}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Suspend Account</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose}
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
                style={{ marginLeft: "1vw" }}
                className="jobpodtedfieldtitile"
              >
                are you sure want to{" "}
                {!user?.suspend ? "Suspend Account" : "Activate Account"} this
                account ?
              </div>

              {user?.suspend ? (
                <div
                  style={{ marginTop: "0.31vw" }}
                  className="handlemoreaboutskill"
                >
                  <div
                    style={{ cursor: "pointer", width: "10vw" }}
                    className="handlecirclieaboutsave"
                    onClick={handleAddIssue}
                  >
                    Activate Now
                  </div>
                </div>
              ) : (
                <div
                  style={{ marginTop: "0.31vw" }}
                  className="handlemoreaboutskill"
                >
                  <div
                    style={{ cursor: "pointer", width: "10vw" }}
                    className="handlecirclieaboutsave"
                    onClick={handleAddIssue}
                  >
                    Suspend Now
                  </div>
                </div>
              )}
            </Box>
          </Modal>

          <button
            className="hb-buttonx"
            onClick={() => navigate("/dashbaord/chat")}
          >
            Chat us
          </button>
        </div>
      </div>
      <div style={{ maxWidth: "80vw", overflow: "scroll" }}>
        <div
          style={{
            position: "relative",
            right: "1vw",
            width: "fit-content",
            overflow: "scroll",
            display: "flex",
            flexWrap: "none",
            justifyContent: "left",
          }}
          className="profileworkhistruytoggleer"
        >
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: workhistorytoggle === 1 ? "#0052CC" : "black",
              width: "7vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/My Profile`);
            }}
          >
            User Profile
          </div>

          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color:
                workhistorytoggle === 2 || workhistorytoggle === 11
                  ? "#0052CC"
                  : "black",
              width: "10vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/directbuylist`);
            }}
          >
            Direct Buying List
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: workhistorytoggle === 3 ? "#0052CC" : "black",
              width: "10vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/directsellinglist`);
            }}
          >
            Direct Selling List
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color:
                workhistorytoggle === 4 || workhistorytoggle === 21
                  ? "#0052CC"
                  : "black",
              width: "9vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/proposallist`);
            }}
          >
            Proposal List
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: workhistorytoggle === 5 ? "#0052CC" : "black",
              width: "8vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/biddinglist`);
            }}
          >
            Bidding List
          </div>

          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: workhistorytoggle === 9 ? "#0052CC" : "black",
              width: "8vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/Bank Details`);
            }}
          >
            Bank Details
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: workhistorytoggle === 10 ? "#0052CC" : "black",
              width: "8vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/Documents`);
            }}
          >
            Document
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: workhistorytoggle === 13 ? "#0052CC" : "black",
              width: "10vw",
            }}
            onClick={() => {
              navigate(`/dashbaord/${userName}/company`);
            }}
          >
            Company Details
          </div>

          <div
            style={{
              color: "#0052CC",
              borderBottom: "0.3vw solid #0052CC",
              width: "9vw",
              position: "relative",
              right:
                workhistorytoggle === 1
                  ? "86vw"
                  : workhistorytoggle === 2 || workhistorytoggle === 11
                  ? "75.5vw"
                  : workhistorytoggle === 3 || workhistorytoggle === 12
                  ? "63.5vw"
                  : workhistorytoggle === 4 || workhistorytoggle === 21
                  ? "52vw"
                  : workhistorytoggle === 5 || workhistorytoggle === 22
                  ? "41.5vw"
                  : workhistorytoggle === 9
                  ? "34vw"
                  : workhistorytoggle === 10
                  ? "22vw"
                  : workhistorytoggle === 13
                  ? "10.5vw"
                  : "10.5vw",

              bottom: "0.3vw",
              transitionDuration: "1s",
              borderRadius: "0.2vw",
            }}
          ></div>
        </div>
      </div>

      <div style={{ height: "calc(100vh - 15vw)" }} className="ScrollTable">
        {workhistorytoggle === 1 ? (
          <div>
            <div
              style={{ flexWrap: "wrap", margin: "0vw", padding: "0vw" }}
              className="filterboxflex"
            >
              <ProfileBanner user={user} width={800} />
              <ProfileBadges user={user} width={800} />
              <Profileuserdetails user={user} width={800} />
              <ProfileCatalogs user={user} width={800} />
              <Profileportfolio user={user} width={800} />
              <ProfileSkills user={user} width={800} />
              <ProfileCertificate user={user} width={800} />
              <ProfileWorkexperince user={user} width={800} />
              <ProfileEducation user={user} width={800} />
              <ProfileOther user={user} width={800} />
            </div>
          </div>
        ) : (
          ""
        )}

        {workhistorytoggle === 2 ? (
          <div>
            {
              <Directbuy
                width={1000}
                user={user}
             
                setWorkhistorytoggle={setWorkhistorytoggle}
              />
            }
          </div>
        ) : (
          ""
        )}
        {workhistorytoggle === 3 ? (
          <>
            <SellingList
              width={1000}
              user={user}
        
              setWorkhistorytoggle={setWorkhistorytoggle}
            />
          </>
        ) : (
          ""
        )}
        {workhistorytoggle === 4 ? (
          <>
            <CreateWork
              width={1000}
              user={user}
             
              setWorkhistorytoggle={setWorkhistorytoggle}
            />
          </>
        ) : (
          ""
        )}
        {workhistorytoggle === 5 ? (
          <>
            <AppliedJob
              width={1000}
              user={user}
              
              setWorkhistorytoggle={setWorkhistorytoggle}
            />
          </>
        ) : (
          ""
        )}

        {workhistorytoggle === 9 ? (
          <>
            <BankDetail user={user} />
          </>
        ) : (
          ""
        )}

        {workhistorytoggle === 10 ? (
          <>
            <Documents user={user} />
          </>
        ) : (
          ""
        )}
      

        {workhistorytoggle === 13 ? (
          <>
            <Companydetails userName={userName} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
