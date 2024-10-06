import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
// import reactLogo from "../../img/react-logo-3.png";
import preval from "preval.macro";
// import VisibilitySensor from "react-visibility-sensor";

const dateTimeStamp = preval`module.exports = new Date().toLocaleString("en-CA", {timeZone: "America/New_York"});`;

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container container">
          {/* <div className="bold mb-1">Thank you for visiting</div> */}
          <div className=" d-block d-md-flex align-items-end justify-content-between">
            <div className="right-text">
              <div className="icons">
                <Link
                  className="nav4-link"
                  to="/contact"
                  data-event-category="Navbar virtual link"
                  data-event-action="Click"
                  data-event-label={"Go to home page"}
                >
                  <i className="far fa-envelope"></i>
                </Link>
              </div>
            </div>
            <div className="design-and-build">
              <div>
                <p className="mr-1 mt-1 d-inline  text-small">
                  Thank you for visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-small pb-1 opacity-50">
          Build Time: {dateTimeStamp}
        </div>
      </div>
    );
  }
}
export default Footer;
