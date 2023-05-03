import React from "react";
import "./footer.css";
import img from "../../assets/Logo/tools 44 shorten svg.svg";
import img1 from "../../assets/png/Landing/instagram (2).png";
import img2 from "../../assets/png/Landing/facebook.png";
import img4 from "../../assets/png/Landing/Group 7792.png";
import img3 from "../../assets/png/Landing/twitter (1).png";
import img5 from "../../assets/Webfiles/Web 1366 – 9/LinkedIn_icon.svg.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Footer({ width }) {
  const navigate = useNavigate();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {width > 700 ? (
        <div className="footer-container">
          <div className="footerlogosocial">
            <div
              onClick={() => {
                window.scrollTo(0, 0, { behavior: "smooth" });
              }}
              className="footer44logo"
            >
              <img src={img} alt="" />
            </div>

            <div className="folow-footer">
              <div className="follow-titile">Follow Us On</div>
              <div className="follo-imges">
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://facebook.com/44resources")
                  }
                >
                  <img style={{ width: "2vw" }} src={img2} alt="" />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://twitter.com/44Resources")
                  }
                >
                  <img style={{ width: "2vw" }} src={img3} alt="" />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://instagram.com/44resources")
                  }
                >
                  <img style={{ width: "2vw" }} src={img1} alt="" />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://g.page/44Resources?share")
                  }
                >
                  <img style={{ width: "2vw" }} src={img4} alt="" />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/company/44-resources"
                    )
                  }
                >
                  <img style={{ width: "2vw" }} src={img5} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div hidden className="footercols">
            <div className="follow-titilex">Freelaunchers </div>
            <div className="listfooter">Categories</div>
            <div className="listfooter">Expert Advices</div>
            <div className="listfooter">Support us</div>
          </div>
          <div className="footercols">
            <div className="follow-titilex">Quick Links</div>
            <div
              className="listfooter"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/aboutus")}
            >
              About us
            </div>
            <div
              className="listfooter"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/services")}
            >
              Services
            </div>

            <div
              hidden
              className="listfooter"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </div>
            <div
              className="listfooter"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/blogs")}
            >
              {" "}
              Blogs
            </div>
            <div
              className="listfooter"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/contactus")}
            >
              Contact us
            </div>
          </div>
          <div className="footercols">
            <div className="follow-titilex">Policies</div>
            <Link to="/termsandconditions">
              {" "}
              <div className="listfooter">Terms & Condition</div>{" "}
            </Link>
            {/* <div className="listfooter">Privacy Policy</div> */}

            <Link to="/privacypolicy">
              <div className="listfooter">Privacy Policy</div>
            </Link>
            <div hidden className="listfooter">
              Cookies
            </div>
            <div hidden className="listfooter">
              Security
            </div>
            <div hidden className="listfooter">
              {" "}
              Anti-Spam
            </div>
          </div>
          <div className="footeradd">
            <div className="follow-titilex">Contact Information</div>
            <div className="footerfollowaddress">
              <div>
                <FmdGoodIcon
                  style={{
                    fontSize: "1.72vw",
                    marginRight: "0.81vw",
             
                  }}
                />
              </div>
              <div
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => openInNewTab("https://g.page/44Resources?share")}
              >
                Regal Building, 2nd Floor, 44, Regal Building, Outer Circle,
                Connaught Place, New Delhi, New Delhi, Delhi, 110001
              </div>
            </div>
            <div className="footerfollowaddress">
              <div>
                {" "}
                <LocalPhoneIcon
                  style={{
                    fontSize: "1.72vw",
                    marginRight: "0.81vw",
              
                  }}
                />
              </div>
              <div>
                <a href="tel:+919650040246">+919650040246</a>
              </div>
            </div>
            <div className="footerfollowaddress">
              <div>
                <EmailRoundedIcon
                  style={{
                    fontSize: "1.72vw",
                    marginRight: "0.81vw",
                 
                  }}
                />
              </div>
              <div>
                <a href="mailto:hello@44resources.com">hello@44resources.com</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-container">
          <div className="footerlogosocial">
            <div
              onClick={() => {
                window.scrollTo(0, 0, { behavior: "smooth" });
              }}
              className="footer44logo"
            >
              <img src={img} alt="" />
            </div>
            <div className="folow-footer">
              <div className="follow-titile">Follow Us On</div>
              <div className="follo-imges">
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://facebook.com/44resources")
                  }
                >
                  <img
                    src={img2}
                    alt=""
                    style={{ width: "8vw", marginLeft: "4vw" }}
                  />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://mobile.twitter.com/44Resources")
                  }
                >
                  <img
                    src={img3}
                    alt=""
                    style={{ width: "8vw", marginLeft: "4vw" }}
                  />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://instagram.com/44resources")
                  }
                >
                  <img
                    src={img1}
                    alt=""
                    style={{ width: "8vw", marginLeft: "4vw" }}
                  />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://g.page/44Resources?share")
                  }
                >
                  <img
                    src={img4}
                    alt=""
                    style={{ width: "8vw", marginLeft: "4vw" }}
                  />
                </span>
                <span
                  className="footerSocialLinks"
                  onClick={() =>
                    openInNewTab("https://g.page/44Resources?share")
                  }
                >
                  <img
                    style={{ width: "8vw", marginLeft: "4vw" }}
                    src={img5}
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "space-between",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div hidden className="footercols">
              <div className="follow-titilex">Freelaunchers </div>
              <div className="listfooter">Categories</div>
              <div className="listfooter">Expert Advices</div>
              <div className="listfooter">Support us</div>
            </div>
            <div className="footercols">
              <div className="follow-titilex">Quick Links</div>
              <div
                className="listfooter"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/aboutus")}
              >
                About us
              </div>
              <div
                className="listfooter"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/services")}
              >
                Services
              </div>

              <div
                hidden
                className="listfooter"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </div>
              <div
                className="listfooter"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/blogs")}
              >
                {" "}
                Blogs
              </div>
              <div
                className="listfooter"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/contactus")}
              >
                Contact us
              </div>
            </div>

            <div className="footercols">
              <div className="follow-titilex">Policies</div>
              <Link to="/termsandconditions">
                {" "}
                <div className="listfooter">Terms & Condition</div>{" "}
              </Link>
              {/* <div className="listfooter">Privacy Policy</div> */}

              <Link to="/privacypolicy">
                <div className="listfooter">Privacy Policy</div>
              </Link>
              <div hidden className="listfooter">
                Cookies
              </div>
              <div hidden className="listfooter">
                Security
              </div>
              <div hidden className="listfooter">
                {" "}
                Anti-Spam
              </div>
            </div>
          </div>
          <div className="footeradd">
            <div className="follow-titilex">Contact Information</div>
            <div className="footerfollowaddress">
              <div>
                <FmdGoodIcon
                  style={{
                    fontSize: width > 700 ? "1.72vw" : "5vw",
                    marginRight: "0.81vw",
                  }}
                />
              </div>
              <div
                style={{ color: "black" }}
                onClick={() => openInNewTab("https://g.page/44Resources?share")}
              >
                Regal Building, 2nd Floor, 44, Regal Building, Outer Circle,
                Connaught Place, New Delhi, New Delhi, Delhi, 110001
              </div>
            </div>
            <div className="footerfollowaddress">
              <div>
                {" "}
                <LocalPhoneIcon
                  style={{
                    fontSize: width > 700 ? "1.72vw" : "5vw",
                    marginRight: "0.81vw",
                  }}
                />
              </div>
              <div>
                <a href="tel:+919650040246">+919650040246</a>
              </div>
            </div>
            <div className="footerfollowaddress">
              <div>
                <EmailRoundedIcon
                  style={{
                    fontSize: width > 700 ? "1.72vw" : "5vw",
                    marginRight: "0.81vw",
                  }}
                />
              </div>
              <div>
                <a href="mailto:hello@44resources.com">hello@44resources.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
