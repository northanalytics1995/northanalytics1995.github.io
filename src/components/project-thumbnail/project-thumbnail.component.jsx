import React from "react";
import "./project-thumbnail.styles.scss";

import {Link} from "react-router-dom";

// import VizSensor from "react-visibility-sensor";


class ProjectThumbnail extends React.Component {

    render() {
        const projectObj = this.props.projectObj;
        const index = this.props.index;
        const odd = index%2 ? "background-light" : "background-white";
        const odd2 = index%2 ? "even" : "odd";
        return (

            <div className={`${odd} project-frame-outer`}>
                {/* <VizSensor key={projectObj.id} onChange={this.doWhenVisible}> */}
                <div className={`container ${odd2} project-frame`}>
                    <div className="image-frame">
                        <Link  
                            style={{textDecoration:"none"}} 
                            to={"/projects/" + projectObj.id}
                        >
                                <div className="m-0">
                                    <img 
                                        src={projectObj.images[0]} 
                                        alt="project screenshot"
                                        data-event-category="Virtual link - Go to project"
                                        data-event-action="Click"
                                        data-event-label={"Go to project - " + projectObj.projectName}
                                    />
                                </div>
                        </Link>
                    </div>
                    
                    <div className="info-frame ">
                        <h6 className="project-year"> {projectObj.year} </h6>

                        <h6 className="project-title"> {projectObj.title} </h6>
                        <Link  
                            style={{textDecoration:"none"}} 
                            to={"/projects/" + projectObj.id}
                            data-event-category="Virtual link - Go to project"
                            data-event-action="Click"
                            data-event-label={"Go to project - " + projectObj.projectName}
                        >
                            <h2 className="project-name">{projectObj.projectName}</h2>
                            <div className="project-description text-small">
                                <p> {projectObj.description}</p>
                            </div>
                        </Link>
                        <div className="project-icons"> {projectObj.stack.map(item => {
                            return <i className={`${item.iconClass} colored`} key={item.name}></i>
                        })}</div>
                    </div>
                </div>
            </div>
        );
    }
}

class ProjectThumbnailGrid extends React.Component {

    render() {
        const projectObj = this.props.projectObj;
        return (
            <div className="project-thumbnail-grid col-12 col-md-6 col-xl-4 my-3">
                <Link  style={{textDecoration:"none"}} to={"/projects/" + projectObj.id}>
                    <div className="image-frame">
                        <img src={projectObj.images[0]} alt="project screenshot"></img>
                        <div 
                            className="overlay-info"
                            data-event-category="Virtual link - Go to project"
                            data-event-action="Click"
                            data-event-label={"Go to project - " + projectObj.projectName}
                        >
                            <div className="text">
                                <div className="color-grey">{projectObj.year}</div>
                                <hr className="mt-0 mb-1 py-0"></hr>
                                <h5 className="mb-1"> {projectObj.projectName} </h5>
                                <div className="project-icons"> {projectObj.stack.map(item => {
                                    return <i className={`${item.iconClass} color-theme-dark mr-1`} key={item.name}></i>
                                })}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export {ProjectThumbnail, ProjectThumbnailGrid};