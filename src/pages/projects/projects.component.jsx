import React from "react";

// import "./contact-page.styles.scss";
import TitleUnit from "../../components/title-unit/title-unit.component";
import Footer from "../../components/footer/footer.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import SelectedProjects from "../../components/selected-projects/selected-projects.component";
import { animateScroll as scroll } from 'react-scroll';

import image from "../../img/ipad.png";
import "./projects.styles.scss";

// import VizSensor from "react-visibility-sensor";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

class Projects extends React.Component {

    render() {
        return (
            <div className="projects-page-component">
                <TitleUnit
                    title="My selected work"
                    titleParagraph="I always find there’s a strong connection between creativity and coding. I often find myself building stuff in my free time."
                    imageSrc={image}
                    button={<div 
                        onClick={() => scroll.scrollTo(this.projectFrameRef.offsetTop - 60)}
                        className="theme-button d-inline-block"
                        data-event-category="Anchor link"
                        data-event-action="Click"
                        data-event-label="Anchor link - Scroll down on projects page"
                    >Show me <i className="fas fa-caret-down ml-1"></i> </div>}
                />
                <div className="background-light">
                    <SelectedProjects/>
                </div>
                <ScrollToTop/>
                <Footer/>
            </div>
        )
    }
}
export default Projects