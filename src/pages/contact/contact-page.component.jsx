import React from "react";

import "./contact-page.styles.scss";
import TitleUnit from "../../components/title-unit/title-unit.component";
import image from "../../img/coffee.png";
import Footer from "../../components/footer/footer.component";

// import ReCAPTCHA from "react-google-recaptcha";

import { animateScroll as scroll } from "react-scroll";

import bg from "../../img/background.png";

import emailjs from "emailjs-com";

import axios from "axios";

// 6LdK__sZAAAAAOUmhMso-izFbdMFv984NZtsHTFK

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recaptchaNotPassed: false,
      messageSent: false,
      messageError: false,
      messageSending: false,
      senderEmail: "",
      senderName: "",
      senderMessage: "",
    };
    this.service_id = "service_h94la4l";
    this.template_id = "template_46s9wc8";
    this.user_id = "mpve1APHnQjLA0lia";
    this.recaptchaKey = "6LebXf0ZAAAAAI0mxr9zrpIdqroWJxUescJYy-r4"; // Invisible
    // this.recaptchaKey = "6LdK__sZAAAAAOUmhMso-izFbdMFv984NZtsHTFK"; // V2
    this.recaptchaRef = null;
    this.scrollToThisRef = null;
    this.formRef = null;
    // const recaptchaRef = React.useRef();
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    // this.setState({messageSending: true})
    if (!e.target.querySelector("#input-name").value) {
      console.log("Name is null");
    } else if (!e.target.querySelector("#input-email").value) {
      console.log("Email is null");
    } else if (!e.target.querySelector("#input-message").value) {
      console.log("Message is null");
    } else if (this.state.senderEmail === "imustpass@imustpass") {
      this.sendRestEmail("imustpass");
    } else if (
      !this.state.messageError &&
      !this.state.messageSent &&
      !this.state.messageSending
    ) {
      // No error and not yet sent
      this.sendRestEmail();
    }
  };
  sendErrorEventToDataLayer = (statusCode) => {
    window.dataLayer.push({
      event: "customEvent",
      eventCategory: "Error",
      eventAction: "HTML request",
      eventLabel: "Status " + statusCode + " on sending message",
    });
  };

  sendEmailForm = (e) => {
    emailjs
      .sendForm(
        "service_h94la4l",
        "template_46s9wc8",
        e.target,
        "user_E1Chew1zIWrHcdWZzggyc"
      )
      .then(
        (result) => {
          this.setState({ messageSent: true, messageSending: false });
        },
        (error) => {
          this.setState({ messageSending: false, messageError: true });
          console.log(error.text);
        }
      );
  };
  sendRestEmail = async (token) => {
    if (
      !this.state.messageSent &&
      !this.state.messageError &&
      !this.messageSending
    ) {
      this.setState({
        messageSending: true,
      });
      const data = {
        service_id: this.service_id,
        template_id: this.template_id,
        user_id: this.user_id,
        template_params: {
          "sender-name": this.state.senderName,
          "sender-email": this.state.senderEmail,
          message: this.state.senderMessage,
        },
      };
      const result = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      if (result.status !== 200) {
        this.setState({ messageSending: false, messageError: true });
        this.sendErrorEventToDataLayer(result.status);
        console.log(result);
      } else {
        this.setState({ messageSending: false, messageSent: true });
      }
    }
  };
  sendEmailDummy = (e) => {
    setTimeout(
      () => this.setState({ messageSent: true, messageSending: false }),
      1000
    );
    // console.log(`Name: ${this.state.senderName}, message ${this.state.senderMessage}`);
  };

  render() {
    return (
      <div className="contact-page-component">
        <TitleUnit
          title="Get in touch"
          titleParagraph="We’re here to help you unlock the full potential of your data and drive your marketing strategies to new heights. Whether you have a question about our services, need a customized analytics solution, or want to explore partnership opportunities, don’t hesitate to get in touch."
          imageSrc={image}
          button={
            <div
              onClick={() => scroll.scrollTo(this.scrollToThisRef.offsetTop)}
              className="theme-button d-inline-block"
              data-event-category="Anchor link"
              data-event-action="Click"
              data-event-label="Anchor link - Scroll down on contact page"
            >
              Sure <i className="fas fa-caret-down ml-1"></i>
            </div>
          }
        />
        <div
          className="background-light background"
          ref={(div) => {
            this.scrollToThisRef = div;
          }}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container py-5">
            <div className="wrapper py-3">
              <form
                className="left-form p-3 p-lg-5 global-box-shadow"
                onSubmit={this.handleFormSubmit}
                ref={(form) => (this.formRef = form)}
              >
                <h4 className="bold mt-3 mt-lg-1 mb-3">Shoot me a message</h4>
                <div className="form-group">
                  <label
                    className="color-grey text-small mb-1"
                    htmlFor="input-name"
                  >
                    Name
                  </label>
                  <input
                    required
                    name="sender-name"
                    type="name"
                    className="form-control text-small"
                    id="input-name"
                    placeholder="Captain Barbossa"
                    // defaultValue="a"
                    onChange={(e) =>
                      this.setState({ senderName: e.target.value })
                    }
                  ></input>
                  <label
                    className="color-grey text-small mt-3 mb-1"
                    htmlFor="input-email"
                  >
                    Email
                  </label>
                  <input
                    required
                    name="sender-email"
                    type="email"
                    className="form-control text-small"
                    id="input-email"
                    placeholder="pirates@blackpearl.ship"
                    // defaultValue="a@a"
                    onChange={(e) =>
                      this.setState({ senderEmail: e.target.value })
                    }
                  ></input>
                  <label
                    className="color-grey text-small mt-3 mb-1"
                    htmlFor="input-message"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    className="form-control text-small"
                    id="input-message"
                    rows="3"
                    name="message"
                    // defaultValue="a"
                    onChange={(e) =>
                      this.setState({ senderMessage: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button
                    className={`theme-button color-theme-dark background-light text-small mr-3 ${
                      this.state.messageError || this.state.messageSent
                        ? "global-button-disabled"
                        : ""
                    }`}
                    disabled={this.state.messageError || this.state.messageSent}
                  >
                    Submit
                  </button>

                  {this.state.messageSent ? (
                    <div className="d-inline-block text-small color-green">
                      {" "}
                      Hooray, message sent <i className="fas fa-check"></i>
                    </div>
                  ) : null}
                  {this.state.messageError ? (
                    <div className="d-inline-block text-small color-theme-contrast">
                      {" "}
                      Uhmm, something went wrong.{" "}
                      <i className="fas fa-exclamation"></i>
                    </div>
                  ) : null}

                  {this.state.messageSending ? (
                    <div
                      className="spinner-border spinner-border-sm color-theme-dark"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : null}
                </div>
              </form>
              <div className="right-info py-4">
                <h4>Contact Information</h4>
                {/* <div className="contact-icons">{renderContactLinks()}</div> */}

                <div className="my-3 text-small">
                  <strong>Email</strong> : info@northanalytics.ca
                </div>
                <div className="my-3 text-small">
                  <strong>Office Hours</strong> : Monday - Friday, 9 AM - 6 PM
                  (EST)
                </div>
                {/* <div className="my-3 text-small">
                  Location - Toronto, ON, Canada
                </div>
                <div className="my-3 text-small">
                  Email - info [at] northanalytics.ca
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// function renderContactLinks() {
//   const links = [
//     {
//       link: "https://www.instagram.com/dylan.d.q/",
//       icon: <i className="fab fa-instagram"></i>,
//       name: "Instagram",
//     },
//     {
//       link: "https://www.facebook.com/profile.php?id=100006511032746",
//       icon: <i className="fab fa-facebook-square"></i>,
//       name: "Facebook",
//     },
//     {
//       link: "https://www.linkedin.com/in/dingqi-dylan-liu/",
//       icon: <i className="fab fa-linkedin-in"></i>,
//       name: "LinkedIn",
//     },
//     {
//       link: "https://github.com/Dylan-Dingqi",
//       icon: <i className="fab fa-github"></i>,
//       name: "Github",
//     },
//   ];
//   return links.map((each) => {
//     return (
//       <a
//         key={each.link}
//         href={each.link}
//         target="_blank"
//         rel="noreferrer"
//         data-event-category="External link"
//         data-event-action="Click"
//         data-event-label={"Contact - Go to " + each.name}
//       >
//         {each.icon}
//       </a>
//     );
//   });
// }

export default ContactPage;
