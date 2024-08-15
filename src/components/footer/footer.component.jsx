import React from "react";
import "./footer.styles.scss";
// import {Link} from "react-router-dom";
// import reactLogo from "../../img/react-logo-3.png";
import reactLogo from "../../img/react-logo-3.png";
import preval from "preval.macro";
// import VisibilitySensor from "react-visibility-sensor";

const dateTimeStamp = preval`module.exports = new Date().toLocaleString("en-CA", {timeZone: "America/New_York"});`;

function renderContactLinks() {
  const links = [
    {
      link: "https://www.instagram.com/",
      icon: <i className="fab fa-instagram"></i>,
      name: "Instagram",
    },
    {
      link: "https://www.facebook.com/",
      icon: <i className="fab fa-facebook-square"></i>,
      name: "Facebook",
    },
    {
      link: "https://www.linkedin.com/in/",
      icon: <i className="fab fa-linkedin-in"></i>,
      name: "LinkedIn",
    },
    {
      link: "https://github.com/",
      icon: <i className="fab fa-github"></i>,
      name: "Github",
    },
  ];
  return links.map((each) => {
    return (
      <a
        className="ml-0 mr-3"
        key={each.link}
        href={each.link}
        target="_blank"
        rel="noreferrer"
        data-event-category="Footer contact external link"
        data-event-action="Click"
        data-event-label={"Footer contact external link - Go to " + each.name}
      >
        {each.icon}
      </a>
    );
  });
}

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
              <div className="icons">{renderContactLinks()}</div>
              <div className="text-small">
                Say hi - northanalytics1995 [at] gmail.com
              </div>
            </div>
            <div className="design-and-build">
              <div className="text-small">Designed and built by Dylan</div>
              <div>
                <p className="mr-1 mt-1 d-inline  text-small">
                  Powered by React
                </p>
                <img
                  src={reactLogo}
                  className="App-logo color-white d-inline"
                  alt="react logo"
                />
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
