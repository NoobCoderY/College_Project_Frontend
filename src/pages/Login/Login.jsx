import React, { useState } from "react";
import "./navbar.css";
import img21 from "../../assets/jobhome/Secure login-pana.svg";
import { TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { makeStyles } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { userActions } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import API_HOST from "../../env";
import "./Addcatalog.css";
import "./BlogDetail.css";
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
  },
}));

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [resetpassword, setResetpassword] = useState(true);
  const [checkmail, setCheckmail] = useState(false);
  const [newpassword, setnewpassword] = useState(false);
  const [resetdone, setResetdone] = useState(false);
  const [visitpassword, setVisitpassword] = useState(false);

  const handlelogin = () => {
    const data = {
      emailId: loginid,
      password: loginpassword,
    };
    axios
      .post(`${API_HOST}/adminLogin`, data)
      .then((res) => {
        setWrongid(false);
        setWrongidp(false);

        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );

        localStorage.setItem("token", JSON.stringify(res.data.success.Tokens));
        localStorage.setItem("user", JSON.stringify(res.data.success.data));
        navigate("/dashbaord");
      })
      .catch((e) => {
        console.log(e.response);
        if (e.response.status === 404 || e.response.status === 406) {
          setWrongidp(true);
          setWrongid(false);
        } else {
          setWrongidp(false);
          setWrongid(true);
        }
      });
  };

  const [wrongid, setWrongid] = useState(false);
  const [wrongidp, setWrongidp] = useState(false);
  const [loginid, setLoginid] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  return (
    <div id="myHeader" className="login-container">
      <div style={{ height: "100vh" }} className="loginbox">
        <div className="loginbox1">
          <div className="loginbox1title">Welcome to SMS</div>
          <div className="loginbox1subtitle">
            See your Growth and get the Support
          </div>
          <div className="loginbox-img">
            <img
              style={{
                marginTop: "7rem",
                width: "32vw",
                marginLeft: "8vw",
              }}
              src={img21}
              alt=""
            />
          </div>
        </div>
        {resetpassword ? (
          <div style={{ marginTop: "12rem" }} className="loginbox2">
            <div className="lgointext">Login</div>
            <div className="loginfield">
              <TextField
                error={!wrongid ? false : true}
                id={"outlined-basic"}
                label="Email"
                helperText={wrongid ? "Please enter a valid  Email" : ""}
                value={loginid}
                variant="outlined"
                style={{
                  width: "32vw",
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1vw",
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: !wrongid ? "black" : "#dc3545",
                  },
                }}
                inputProps={{
                  className: classes.input,
                }}
                onChange={(e) => {
                  setLoginid(e.target.value);
                  setWrongid(false);
                }}
              />
              <AlternateEmailIcon
                style={{
                  fontSize: "2vw",
                  position: "relative",
                  top: "1vw",
                  right: "3vw",
                }}
              />
            </div>
            <div className="loginfield">
              <TextField
                type={visitpassword ? "text" : "password"}
                error={!wrongidp ? false : true}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={loginpassword}
                helperText={wrongidp ? "Please enter a valid  Password" : ""}
                style={{ width: "32vw" }}
                InputLabelProps={{
                  style: {
                    fontSize: "1vw",
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: !wrongidp ? "black" : "#dc3545",
                  },
                }}
                inputProps={{ className: classes.input }}
                onChange={(e) => {
                  setLoginpassword(e.target.value);
                  setWrongidp(false);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handlelogin();
                  }
                }}
              />
              <VisibilityIcon
                style={{
                  fontSize: "2vw",
                  position: "relative",
                  top: "1vw",
                  right: "3vw",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setVisitpassword(!visitpassword);
                }}
              />
            </div>

            <div
              className="forget-password"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setResetpassword(false);
              }}
            >
              Forget Password
            </div>

            <button onClick={handlelogin} className="loginbutton">
              Login
            </button>
          </div>
        ) : (
          <>
            {checkmail ? (
              <>
                {newpassword ? (
                  <>
                    {resetdone ? (
                      <div style={{ marginTop: "6vw" }} className="loginbox2">
                        <div
                          className="lgointext"
                          style={{ marginBottom: "0.11vw" }}
                        >
                          Password Reset
                        </div>
                        <div
                          className="loginbox1subtitle"
                          style={{ marginBottom: "2vw" }}
                        >
                          Your Password has been changed Succesfully reset{" "}
                          <br />
                          Click below to log in magically
                        </div>

                        <button className="loginbutton" onClick={() => {}}>
                          Continue
                        </button>

                        <div className="continueloginwithdont">
                          <span>
                            <ArrowBack
                              style={{
                                fontSize: "1.5vw",
                                marginRight: "1vw",
                              }}
                            />
                          </span>
                          Back to{" "}
                          <span
                            onClick={() => {
                              setResetpassword(true);
                              setCheckmail(false);
                              setResetdone(false);
                              setnewpassword(false);
                            }}
                          >
                            {" "}
                            Login
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ marginTop: "3vw" }} className="loginbox2">
                        <div
                          className="lgointext"
                          style={{ marginBottom: "0.11vw" }}
                        >
                          Set new password
                        </div>
                        <div
                          className="loginbox1subtitle"
                          style={{ marginBottom: "2vw" }}
                        >
                          Your new password must be different to previously used
                          passwords
                        </div>
                        <div className="loginfield">
                          <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            style={{ width: "32vw" }}
                            InputLabelProps={{
                              style: {
                                fontSize: "1vw",
                                fontFamily: "Poppins",
                                fontStyle: "500",
                                fontWeight: "500",
                                color: "black",
                              },
                            }}
                            inputProps={{ className: classes.input }}
                          />
                          <VisibilityIcon
                            style={{
                              fontSize: "2vw",
                              position: "relative",
                              top: "1vw",
                              right: "3vw",
                            }}
                          />
                        </div>
                        <div className="loginfield">
                          <TextField
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            style={{ width: "32vw" }}
                            InputLabelProps={{
                              style: {
                                fontSize: "1vw",
                                fontFamily: "Poppins",
                                fontStyle: "500",
                                fontWeight: "500",
                                color: "black",
                              },
                            }}
                            inputProps={{ className: classes.input }}
                          />
                          <VisibilityIcon
                            style={{
                              fontSize: "2vw",
                              position: "relative",
                              top: "1vw",
                              right: "3vw",
                            }}
                          />
                        </div>
                        <button
                          className="loginbutton"
                          onClick={() => {
                            setResetdone(true);
                          }}
                        >
                          Reset Password
                        </button>

                        {/* <div className="continueloginwithdont">
                            Don't receive the mail? <span> Click to resend</span>
                          </div> */}
                        <div className="continueloginwithdont">
                          <span>
                            <ArrowBack
                              style={{
                                fontSize: "1.5vw",
                                marginRight: "1vw",
                              }}
                            />
                          </span>
                          Back to{" "}
                          <span
                            onClick={() => {
                              setResetpassword(true);
                              setCheckmail(false);
                              setResetdone(false);
                              setnewpassword(false);
                            }}
                          >
                            {" "}
                            Login
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ marginTop: "6vw" }} className="loginbox2">
                    <div
                      className="lgointext"
                      style={{ marginBottom: "0.11vw" }}
                    >
                      Check your mail
                    </div>
                    <div
                      className="loginbox1subtitle"
                      style={{ marginBottom: "3vw" }}
                    >
                      We sent a Password reset Link to your Mail
                    </div>

                    <button
                      className="loginbutton"
                      onClick={() => {
                        setnewpassword(true);
                      }}
                    >
                      Verify
                    </button>

                    <div className="continueloginwithdont">
                      Don't receive the mail? <span> Click to resend</span>
                    </div>
                    <div className="continueloginwithdont">
                      <span>
                        <ArrowBack
                          style={{
                            fontSize: "1.5vw",
                            marginRight: "1vw",
                          }}
                        />
                      </span>
                      Back to{" "}
                      <span
                        onClick={() => {
                          setResetpassword(true);
                          setCheckmail(false);
                          setResetdone(false);
                          setnewpassword(false);
                        }}
                      >
                        {" "}
                        Login
                      </span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{ marginTop: "3vw" }} className="loginbox2">
                <div className="lgointext" style={{ marginBottom: "0.82vw" }}>
                  Forgot Password
                </div>
                <div className="loginbox1subtitle">
                  No worries we'll send your reset instructions
                </div>
                <div className="loginfield">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "32vw" }}
                    InputLabelProps={{
                      style: {
                        fontSize: "1vw",
                        fontFamily: "Poppins",
                        fontStyle: "500",
                        fontWeight: "500",
                        color: "black",
                      },
                    }}
                    inputProps={{ className: classes.input }}
                  />
                  <AlternateEmailIcon
                    style={{
                      fontSize: "2vw",
                      position: "relative",
                      top: "1vw",
                      right: "3vw",
                    }}
                  />
                </div>
                <button
                  className="loginbutton"
                  onClick={() => {
                    setCheckmail(true);
                  }}
                >
                  Reset Password
                </button>

                <div className="continueloginwithdont">
                  <span>
                    <ArrowBack
                      style={{ fontSize: "1.5vw", marginRight: "1vw" }}
                    />
                  </span>
                  Back to{" "}
                  <span
                    onClick={() => {
                      setResetpassword(true);
                      setCheckmail(false);
                      setResetdone(false);
                      setnewpassword(false);
                    }}
                  >
                    {" "}
                    Login
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
