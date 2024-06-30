import React from "react";
import Slider from "react-slick";

import { Power4 } from "gsap/all";
import gsap from 'gsap';

import "./project-frame.styles.scss";

function getFullMonthShort(month) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return monthNames[month];
}

function renderGallery(images) {
    const settings = {
        slidesToShow: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false
    }
    return (
        <div className="global-box-shadow" style={{minWidth:0, minHeight:0}}>
            <Slider className="" {...settings}>
                {images.map(image => (
                    // console.log(image)
                    <div key={image} className="image-frame">
                        <img src={image} alt="img"></img>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

class ProjectFrame extends React.Component {
    
    constructor(props) {
        super(props);
        this.projectFrameRef = null;
        this.projectNameRef = null;
    }
    componentDidUpdate() {
        gsap.fromTo(this.projectFrameRef, {autoAlpha:0}, {autoAlpha: 1, duration: 2, ease: Power4.easeOut});
        if (!this.props.reverseAnimation) {
            gsap.fromTo(this.projectNameRef, {translateX:"20%"}, { translateX:0 , duration:1, ease: Power4.easeOut});
        }
        else {
            gsap.fromTo(this.projectNameRef, {translateX:"-10%"}, { translateX:0 , duration:1, ease: Power4.easeOut});
        }
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.index === nextProps.index) {
            return false;
        } return true;
    }
    
    render() {
        const {projectName: name, title,  images, stack, description, links, shortDescription, date} = this.props.project;

        return (
            <div className="w-100 project-frame-component" ref={div => this.projectFrameRef=div}>
                {/* <div className="d-flex align-items-center">
                    <div style={{flexGrow:1}}
                        ><hr/>
                    </div>
                    <div className="ml-3 project-year" style={{lineHeight:1}}>
                        {getFullMonthShort(date.getMonth()).toUpperCase()} <span className="bold">{date.getFullYear()}</span>
                    </div>
                </div> */}
                <div className="project-frame-component-wrapper">
                    <div className="left-info">

                        <div>
                            <h2 className="mb-2" ref={h2 => this.projectNameRef = h2}>{name}</h2>
                            <div style={{fontSize:"1.2em"}} className="color-grey-light-more thin italic">
                                {getFullMonthShort(date.getMonth()).toUpperCase()} {date.getFullYear()} - {title}
                            </div>
                        </div>
                        
                        <hr className="global-hr mt-2 mb-2"></hr>
    
                        <p className="project-description mb-4"> {shortDescription || description}</p>
    
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="project-stack">
                                {stack.map(item => {
                                    return <i className={`${item.iconClass} colored`} key={item.name}></i>
                                })}
                            </div>
                            <div>
                                {links && 
                                    links.map(link => {return (
                                        <a 
                                            key={link.name}
                                            target="_blank" 
                                            rel="noreferrer"
                                            href={link.url}
                                            className="link arrow-right mr-4"
                                            data-event-category={`External link`}
                                            data-event-action="Click"
                                            data-event-label={`External link - Go to project ${name} - ${link.name}`}
                                        >{link.name}</a>
                                            
                                    )})
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right-images">
                        {renderGallery(images)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectFrame;