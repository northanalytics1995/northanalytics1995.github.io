import React from "react";

import "./horizontal-scroll.styles.scss";

// import ScrollContainer from "react-indiana-drag-scroll";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


import bg from "../../../img/background-rotated-dark.png";
// import bg from "../../img/bg.jpg";




const iconList = [
    {className: "devicon-angularjs-plain", label: "Angular"},
    {className: "fab fa-adobe", label: "Adobe"},
    {className: "devicon-react-original", label: "React"},
    {className: "devicon-java-plain", label: "Java"},
    {className: "devicon-javascript-plain", label: "JavaScript"},
    {className: "devicon-git-plain", label: "Git"},
    {className: "devicon-github-plain", label: "GitHub"},
    {className: "devicon-html5-plain-wordmark", label: "HTML"},
    {className: "devicon-express-original-wordmark", label: "Express"},
];
const HorizontalScroll = () => {
    const settings = {
        arrows: false,
        slidesToShow: 5,
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
                    slidesToScroll: 3,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
        ]
    }
    return (
        <div className="horizontal-scroll background-dark py-5 background" style={{
            backgroundImage:`url(${bg})`
        }}>
            <div className="text-center container py-5">
                <h1 className="COLOR-LIGHT">Technologies I use</h1>
                <h4 className="COLOR-LIGHT OPACITY-50">Scroll to see more</h4>
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