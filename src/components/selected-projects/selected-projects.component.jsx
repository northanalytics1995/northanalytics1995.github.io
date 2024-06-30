import React from "react";
import { getSelectedProjects } from "../../data/projects";
import { Link } from "react-router-dom";
import ProjectFrame from "../project-frame/project-frame.component";
import "./selected-projects.styles.scss";
const projects = getSelectedProjects();


class SelectedProjects extends React.Component {
    constructor(props) {
        super(props);
        this.projects = getSelectedProjects();
        this.state = {
            currentIndex: 0,
            currentProject: projects[0],
            reverseAnimation: false
        }
        this.transitioning = false;
        this.projectFrameRef = null;
        this.autoPlayTime = 4200;
    }

    componentDidMount() {
        this.startAutoPlay();
    }
    componentWillUnmount() {
        this.stopAutoPlay();
    }

    startAutoPlay = () => {
        if (!('ontouchstart' in window)) {
            this.setState({interval: setInterval(this.nextProject, this.autoPlayTime)}); 
        }
    }
  
    stopAutoPlay = () => {
        clearInterval(this.state.interval);
    }
    nextProject = () => {
        let newIndex = this.state.currentIndex + 1
        if (newIndex === this.projects.length) newIndex = 0;
        this.setState({currentIndex: newIndex, currentProject: this.projects[newIndex], reverseAnimation: false})
    }
    prevProject = () => {
        let newIndex = this.state.currentIndex - 1
        if (newIndex < 0) newIndex = this.projects.length-1;
        this.setState({currentIndex: newIndex, currentProject: this.projects[newIndex], reverseAnimation: true});
    }
    render() {
        return (
            <div  className="container py-5">
                <div 
                    ref={ele => this.projectFrameRef = ele} 
                    className="d-flex justify-content-between align-items-center selected-work-line mt-3 mb-2 mb-sm-3">
                    <div className=" text-center selected-work-title extra-bold color-grey-light-extra">
                        Selected work
                    </div>
                    <div className="mx-2 mx-sm-3" style={{flexGrow:1}}><hr/></div>
                    <div className="d-flex justify-content-center"
                        onMouseEnter={this.stopAutoPlay}
                        onMouseLeave={this.startAutoPlay}
                    >
                        <div 
                            className="color-grey-light hover text-small" 
                            onClick={this.prevProject}
                            data-event-category="Control button"
                            data-event-action="Click"
                            data-event-label="Control button - Go to previous project on projects page"
                        ><i className="fas fa-arrow-left"></i></div>
                        <div className="text-small color-grey mx-3">
                        0{this.state.currentIndex+1} / 0{this.projects.length}</div>
                        <div 
                            className="color-grey-light hover text-small" 
                            onClick={this.nextProject}
                            data-event-category="Control button"
                            data-event-action="Click"
                            data-event-label="Control button - Go to next project on projects page"
                        ><i className="fas fa-arrow-right"></i></div>
                    </div>
                </div>
                <div 
                    className="project-frame-component-outer" 
                    onMouseEnter={this.stopAutoPlay}
                    onMouseLeave={this.startAutoPlay}
                >
                    <ProjectFrame index={this.state.currentIndex} project={this.state.currentProject} reverseAnimation={this.state.reverseAnimation}></ProjectFrame>
                </div>
                <hr/>
                {/* <div className="d-block d-sm-flex justify-content-between align-items-center"> */}
                <div className="text-right mt-2 mt-sm-0">
                    <Link 
                    className="link d-inline-block" 
                    to="/projects-all"
                    data-event-category="Virtual link"
                    data-event-action="Click"
                    data-event-label="Go to all projects from projects page"
                    > See all projects </Link>
                    <i className="fas fa-server ml-2 color-grey-light-extra"></i>
                </div>
            </div>
        );
    }
}

export default SelectedProjects;