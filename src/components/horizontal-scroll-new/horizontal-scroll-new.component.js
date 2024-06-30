import React from "react";

import "./horizontal-scroll-new.styles.scss";

// import ScrollContainer from "react-indiana-drag-scroll";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import bg from "../../../img/background-transp.png";
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
                <h2 className="font-display">A little about me.</h2>
                <hr className="mb-4 hr-theme"></hr>
                <p className="paragraph-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit vulputate dapibus. In interdum dapibus nisi sit amet tincidunt. Nunc non diam dapibus lorem faucibus volutpat. Proin porta metus id pharetra suscipit. Nulla ac mauris id leo interdum viverra id vel augue. Nunc pretium est sed sapien dignissim, dapibus ornare sem faucibus. Fusce eu nisi condimentum, cursus ligula semper, molestie orci. Nulla vitae efficitur leo. Ut facilisis nibh ante, non tincidunt purus rhoncus eu. Duis quis fermentum dolor, vitae luctus orci. Maecenas pulvinar congue mi ac ullamcorper. Curabitur lobortis purus id purus sollicitudin tincidunt. Suspendisse finibus, felis vel blandit suscipit, velit purus ullamcorper felis, eget laoreet tortor nibh at quam.

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