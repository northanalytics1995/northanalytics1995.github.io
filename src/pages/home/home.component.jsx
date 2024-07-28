import React from "react";
import "./home.styles.scss";

import {Link} from "react-router-dom";

import backgroundSolid from "../../img/background-solid.png";


import Footer from "../../components/footer/footer.component";
import HorizontalScroll from "../../components/horizontal-scroll-new/horizontal-scroll-new.component";

import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component"

// import {Link as scrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

import VisibilitySensor from "react-visibility-sensor";


const whatIDoList = [
    {
        icon: <i className="fa-solid fa-chart-simple"></i>,
        title: "Custom Data Tracking",
        desc: "Design and implement custom analytics tracking by experts based on your needs."
    },
    {
        icon: <i className="fa-solid fa-magnifying-glass"></i>,
        title: "SEO Analytics",
        desc: "Analytics driven Search Engine Optimization, improve site traffic with evidence."
    },
    {
        icon: <i className="fas fa-solid fa-computer"></i>,
        title: "Data Visualization",
        desc: "Utilize dashboards to unlock the power of data, visualize your business performance with ease."
    },
    {
        icon: <i className="fas fa-pen-nib"></i>,
        title: "Design and Prototype",
        desc: "Design and prototype user-centered web interfaces, optimize UI to maximize click rates."
    },

]

class HomeNew extends React.Component {
    constructor() {
        super();
        this.aLittleAboutMeRef = null;
    }
    renderWhatIDoItem(icon, title, desc) {
        return (
            <div className="d-flex my-2 what-i-do-child col-12 col-lg-6" key={title}>
                {/* <div className="mr-4 mt-2 what-i-do-title" style={{fontSize:"2rem"}}>{icon}</div> */}
                <div className="flex-grow-1 mr-lg-4">
                    <div className="mb-1 text-size-125 color-theme">{icon}</div>
                    <h5 className="bold">{title}</h5>
                    {/* <hr className="hr-default"/> */}
                    <p className="text-size-90">{desc}</p>
                </div>
            </div>
        )
    }
    render() {
        return (
        <div className="home-new background-white">
                    <h1 className="mt-5 pt-4 pt-xxl-5 text-center mb-2 main-title font-display">North Analytics</h1>
            <div className="container">
                <div className=" main-container mb-5">
                    <div className="heading2">Transform your online business with actionable insights.</div>
                    <div className="d-block d-sm-flex justify-content-center align-items-center my-2">
                        <div 
                            className="link theme-button d-block mx-3 ml-sm-0 mb-2 mb-sm-0" 
                            onClick={() => scroll.scrollTo((this.aLittleAboutMeRef.offsetTop)-50)}
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
                        > Contact us <i className="ml-1 fas fa-caret-right"></i></Link>
                    </div>
                   
                </div>
            </div>
            <div id="aLittleAboutMe" ref={(div) => this.aLittleAboutMeRef=div}>
                <HorizontalScroll></HorizontalScroll>
            </div>

            <div className="py-5 background" style={{backgroundImage:`url(${backgroundSolid})`}}>
                <div className="container pt-5">
                    <h2 className="font-display">Our services.</h2>
                    <VisibilitySensor onChange={isVisible => {
                        // console.log("Scrolling");
                        if (isVisible) {
                            window.dataLayer.push({
                                event: "customEvent",
                                eventCategory: "Home page scroll",
                                eventAction: "Scroll",
                                eventLabel: "User scroll to home page bottom ",
                            });
                        }
                    }}>
                    <hr className="hr-theme"/>
                    </VisibilitySensor>
                    <div className="my-5 what-i-do mx-auto row">
                        {whatIDoList.map(({icon, title, desc}) => this.renderWhatIDoItem(icon,title,desc))}
                    </div>
                </div>
            </div>

            <ScrollToTop/>
            <Footer/>
        </div>
        )
    }
}

export default HomeNew;