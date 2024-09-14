import React from "react";
import "./home.styles.scss";

import { Link } from "react-router-dom";

import backgroundSolid from "../../img/background-solid.png";

import Footer from "../../components/footer/footer.component";

import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

// import {Link as scrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";

import VisibilitySensor from "react-visibility-sensor";

// import ScrollContainer from "react-indiana-drag-scroll";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import bg from "../../img/background-transp.png";

class HomeNew extends React.Component {
  constructor() {
    super();
    this.aLittleAboutMeRef = null;
  }
  render() {
    return (
      <div className="home-new background-white">
        <h1 className="mt-5 pt-4 pt-xxl-5 text-center mb-2 main-title font-display">
          North Analytics
        </h1>
        <div className="container">
          <div className=" main-container mb-5">
            <div className="heading2">
              Transform your online business with actionable insights.
            </div>
            <div className="d-block d-sm-flex justify-content-center align-items-center my-2">
              <div
                className="link theme-button d-block mx-3 ml-sm-0 mb-2 mb-sm-0"
                onClick={() =>
                  scroll.scrollTo(this.aLittleAboutMeRef.offsetTop - 50)
                }
                data-event-category="Anchor link"
                data-event-action="Click"
                data-event-label="Anchor link to go down on the home page"
              >
                Learn more<i className="fas fa-caret-down ml-1"></i>
              </div>
              <Link
                className="link"
                to="/contact"
                data-event-category="Virtual link"
                data-event-action="Click"
                data-event-label="Go to projects from home page"
              >
                {" "}
                Contact us <i className="ml-1 fas fa-caret-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div id="about-us" ref={(div) => (this.aLittleAboutMeRef = div)}>
          <div
            className="horizontal-scroll-new background-light py-5 background"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className="container my-4">
              <h2 className="font-display">About us.</h2>
              <hr className="mb-4 hr-theme"></hr>
              <p className="paragraph-description">
                {" "}
                We are a team of experts in data and analytics baesd in Toronto,
                Canada. Our comprehensive data analytics services are taylored
                for individual clients to understand their audience, improve
                site traffic, gain click through rates, and grow their business.
              </p>
            </div>
            <Slider
              className=""
              {...{
                arrows: false,
                slidesToShow: 7,
                infinite: true,
                centerMode: true,
                // centerPadding: "5em",
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                swipeToSlide: true,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToScroll: 1,
                      slidesToShow: 5,
                    },
                  },
                  {
                    breakpoint: 576,
                    settings: {
                      slidesToScroll: 1,
                      slidesToShow: 2,
                    },
                  },
                ],
              }}
            >
              {[
                { className: "devicon-angularjs-plain", label: "Angular" },
                { className: "devicon-photoshop-line", label: "Photoshop" },
                { className: "devicon-react-original", label: "React" },
                { className: "devicon-java-plain", label: "Java" },
                { className: "devicon-javascript-plain", label: "JavaScript" },
                { className: "devicon-git-plain", label: "Git" },
                { className: "fab fa-github", label: "GitHub" },
                { className: "devicon-html5-plain-wordmark", label: "HTML" },
                { className: "devicon-mongodb-plain", label: "MongoDB" },
                {
                  className: "devicon-express-original-wordmark",
                  label: "Express",
                },
              ].map((item) => (
                <div className="item" key={item.className}>
                  <div className="icon">
                    <i className={item.className}></i>
                  </div>
                  <div className="label"> {item.label} </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div
          className="py-5 background"
          style={{ backgroundImage: `url(${backgroundSolid})` }}
        >
          <div className="container pt-5">
            <h2 className="font-display">Our services.</h2>
            <VisibilitySensor
              onChange={(isVisible) => {
                // console.log("Scrolling");
                if (isVisible) {
                  window.dataLayer.push({
                    event: "customEvent",
                    eventCategory: "Home page scroll",
                    eventAction: "Scroll",
                    eventLabel: "User scroll to home page bottom ",
                  });
                }
              }}
            >
              <hr className="hr-theme" />
            </VisibilitySensor>
            <div className="my-5 what-i-do mx-auto row">
              {[
                {
                  icon: <i className="fa-solid fa-chart-simple"></i>,
                  title: "Custom Data Tracking",
                  desc: "Design and implement custom analytics tracking by experts based on your needs.",
                },
                {
                  icon: <i className="fa-solid fa-magnifying-glass"></i>,
                  title: "SEO Analytics",
                  desc: "Analytics driven Search Engine Optimization, improve site traffic with evidence.",
                },
                {
                  icon: <i className="fas fa-solid fa-computer"></i>,
                  title: "Data Visualization",
                  desc: "Utilize dashboards to unlock the power of data, visualize your business performance with ease.",
                },
                {
                  icon: <i className="fas fa-pen-nib"></i>,
                  title: "Design and Prototype",
                  desc: "Design and prototype user-centered web interfaces, optimize UI to maximize click rates.",
                },
              ].map(({ icon, title, desc }) => {
                return (
                  <div
                    className="d-flex my-2 what-i-do-child col-12 col-lg-6"
                    key={title}
                  >
                    {/* <div className="mr-4 mt-2 what-i-do-title" style={{fontSize:"2rem"}}>{icon}</div> */}
                    <div className="flex-grow-1 mr-lg-4">
                      <div className="mb-1 text-size-125 color-theme">
                        {icon}
                      </div>
                      <h5 className="bold">{title}</h5>
                      {/* <hr className="hr-default"/> */}
                      <p className="text-size-90">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="background-light">
          <div className="container py-5 mx-auto">
            <h2 className="font-display">Meet the team</h2>
            <hr className="hr-theme" />

            <div className="row mt-4 mb-3">
              {[
                {
                  title: "Consultant",
                  name: "Philip Tieu",
                  description:
                    "Philip Tieu has over 7 years in the martech industry with expertise in advertising, data collection, and analytics. With a variety of experience from the client side, agency, as well as consulting, he is able to adapt and understand the complexities of martech solutions for businesses of all sizes. Platform specializations: Google Marketing Platform for data collection, analytics, and advertising; OneTrust for consent management.",
                },
                {
                  title: "Software Developer",
                  name: "Dingqi Liu",
                  description:
                    "Dingqi Liu is a skilled full-stack developer with a Bachelor’s degree in Computer Science and over four years of hands-on experience in software development. His expertise spans across building efficient, practical, and user-centric applications, with a keen focus on automation and UI/UX design. Dingqi is passionate about leveraging cost-effective tools to create high-availability software solutions. His technical proficiency includes many programming languages, network protocols, and data structures, enabling him to tackle complex challenges and deliver robust software solutions.",
                },
                {
                  title: "Consultant",
                  name: "Taeyoung Kim",
                  description:
                    "Taeyoung Kim brings over 6 years of experience in the martech industry, specializing in data analytics, advertising, and platform integration. With a diverse background spanning client-side, agency, and consulting roles, he adeptly navigates the complexities of martech solutions for businesses of all sizes. Taeyoung's platform expertise includes Google Marketing Platform for comprehensive analytics and advertising, as well as OneTrust for efficient consent management. His ability to adapt and implement tailored strategies makes him a valuable asset in optimizing marketing efforts and driving data-driven decisions.",
                },
                {
                  title: "Data Engineer",
                  name: "Danijel Stefanovic",
                  description:
                    "Danijel Stefanovic is a full-stack developer with 3 years of experience in digital marketing. His JavaScript expertise enables him to create effective marketing strategies and develop advanced tracking solutions with Google Tag Manager, both on client and server sides. He specializes in building custom templates with sandboxed JavaScript for secure and efficient performance within GTM. Additionally, Danijel can dynamically adjust GCP infrastructure to handle traffic surges, ensuring precise data collection and insightful analytics to optimize marketing campaigns and boost user engagement.",
                },
              ].map(({ name, description, title }) => {
                return (
                  <div class="col-lg-6">
                    <label className="text-primary">{title}</label>
                    <h3 className="mb-3">{name}</h3>
                    <p className="text-small">{description}</p>
                    <p>
                      {/* <Button text="Test" onClick={() => {}} />
                      {/* <a class="btn btn-secondary" href="#" role="button">
                        View details &raquo;
                      </a> */}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ScrollToTop />
        <Footer />
      </div>
    );
  }
}

export default HomeNew;
