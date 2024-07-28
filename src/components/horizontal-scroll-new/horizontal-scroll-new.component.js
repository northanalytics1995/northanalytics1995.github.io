import React from "react";

import "./horizontal-scroll-new.styles.scss";

// import ScrollContainer from "react-indiana-drag-scroll";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import bg from "../../img/background-transp.png";
// import bg from "../../img/bg.jpg";




const iconList = [
    {className: "devicon-angularjs-plain", label: "Angular"},
    {className: "devicon-photoshop-line", label: "Photoshop"},
    {className: "devicon-react-original", label: "React"},
    {className: "devicon-java-plain", label: "Java"},
    {className: "devicon-javascript-plain", label: "JavaScript"},
    {className: "devicon-git-plain", label: "Git"},
    {className: "fab fa-github", label: "GitHub"},
    {className: "devicon-html5-plain-wordmark", label: "HTML"},
    {className: "devicon-mongodb-plain", label: "MongoDB"},
    {className: "devicon-express-original-wordmark", label: "Express"},
]
const HorizontalScroll = () => {
    const settings = {
        arrows: false,
        slidesToShow: 7,
        infinite: true,
        centerMode:true,
        // centerPadding: "5em",
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        swipeToSlide:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
        ]
    }
    return (
        <div className="horizontal-scroll-new background-light py-5 background" style={{
            backgroundImage:`url(${bg})`
        }}>
            <div className="container my-4">
                <h2 className="font-display">About us.</h2>
                <hr className="mb-4 hr-theme"></hr>
                <p className="paragraph-description"> We are a team of experts in data and analytics baesd in Toronto, Canada. Our comprehensive data analytics services are taylored for individual clients to understand their audience, improve site traffic, gain click through rates, and grow their business. 

</p>
            </div>
            <Slider className="" {...settings}>
            {iconList.map(item => (
                <div className="item" key={item.className}>
                    <div className="icon"> 
                        <i  className={item.className}></i>
                    </div>
                    <div className="label"> {item.label} </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default HorizontalScroll;