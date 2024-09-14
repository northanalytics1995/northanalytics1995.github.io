import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
// import reactLogo from "../../img/react-logo-3.png";
import reactLogo from "../../img/react-logo-3.png";
import preval from "preval.macro";
// import VisibilitySensor from "react-visibility-sensor";

const dateTimeStamp = preval`module.exports = new Date().toLocaleString("en-CA", {timeZone: "America/New_York"});`;

class Footer extends React.Component {
  render() {
    return (
      // <div className="footer">
      //     <div className="footer-container container">
      //         <div className="main">
      //             <div className="heading font-decoration">Thank you for visiting</div>
      //             <p className="caption">Say hi - dingqi.liu [at] ryerson.ca</p>
      //             <div className="d-flex icons">
      //                 {renderContactLinks()}
      //             </div>
      //         </div>
      //     </div>
      //     <div className="container bottom text-center">
      //         <p className="mr-1 mt-1 d-inline">Designed and built by Dylan. Powered by React </p>
      //         <img src={reactLogo} className="App-logo color-white d-inline" alt="react logo" />
      //     </div>
      // </div>
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
