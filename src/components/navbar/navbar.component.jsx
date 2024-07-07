import React from "react";
// import "./Navbar.scss";
import "./Navbar4.scss";

// import "./navbar3.scss";

import { Link } from "react-router-dom";

import HamburgerMenu from "react-hamburger-menu";

import bg from "../../img/background-solid.png";
// console.log(bg);
class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            prevScrollpos: window.pageYOffset,
            scrollingDown: false,
            menuIsOpen: false
        }
    }

    handleScroll = () => {
        const {prevScrollpos} = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos < currentScrollPos;
        this.setState({
            prevScrollpos: currentScrollPos,
            scrollingDown: visible 
        });
    }

    handleMenuClick = () => {
        window.setTimeout(() => {
            this.setState({
                menuIsOpen: !this.state.menuIsOpen
            });
        },30);
    }
    handleMenuLinkClick = () => {
        if (this.state.menuIsOpen) {
            window.setTimeout(() => {
                this.setState({
                    menuIsOpen: false
                });
            }, 230);
        } 
    }
    render() {
        const nav4 = (
            <nav id="nav4">
                
                <div id="nav4-navbar" className="">
                    <div className="container">
                        <a className="nav4-brand" href="/">
                            {/* <img src={logo} alt="logo"/> */}
                            <div className="nav4-text pl-2"> North Analytics</div>
                        </a>
                        <div                             
                            id="nav4-menu-button"
                            // className={`hideOnDesktop ${this.state.menuIsOpen?"rotate":""}`}>
                            className={` ${this.state.menuIsOpen?"rotate":""}`}
                            data-event-category="Navbar button"
                            data-event-action="Click"
                            data-event-label="Open/close nav menu"
                        >
                            <HamburgerMenu
                                isOpen={this.state.menuIsOpen}
                                menuClicked={this.handleMenuClick}
                                width={30}
                                height={20}
                                strokeWidth={3}
                                rotate={0}
                                color='black'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                        </div>
                    </div>
                </div>
                <div id="nav4-menu" className={`background overlay ${this.state.menuIsOpen?"menuIsOpen":""}`} style={{backgroundImage:`url(${bg})`}}>
                    {/* <a href="javascript:void(0)" class="closebtn" onClick={this.handleMenuClick}>&times;</a> */}
                    <div className="overlay-content">
                        <Link 
                            className="nav4-link" 
                            onClick={this.handleMenuLinkClick} 
                            to="/projects-all"
                            data-event-category="Navbar virtual link"
                            data-event-action="Click"
                            data-event-label={"Go to projects page"}
                        >
                            <div className="navbar-page-title bold">Projects</div>
                            <div className="navbar-page-subtitle">What I've made</div>
                        </Link>

                        <Link 
                            className="nav4-link" 
                            onClick={this.handleMenuLinkClick} 
                            to="/"
                            data-event-category="Navbar virtual link"
                            data-event-action="Click"
                            data-event-label={"Go to home page"}
                        >
                            <div className="navbar-page-title bold">Home</div>
                            <div className="navbar-page-subtitle">About us</div> 
                        </Link>
                        <Link 
                            className="nav4-link" 
                            onClick={this.handleMenuLinkClick} 
                            to="/contact"
                            data-event-category="Navbar virtual link"
                            data-event-action="Click"
                            data-event-label={"Go to contact page"}
                        >
                            <div className="navbar-page-title bold">Contact</div>
                            <div className="navbar-page-subtitle">Reach me</div>
                        </Link>
                    </div>
                </div>
                {/* <div className="nav4-placeholder">.</div> */}
            </nav>
        );
        // const nav1 = (
        //     <div>
        //         <nav id="navbar" className="navbar navbar-expand-lg white mx-auto fixed-top">
        //             <div className="container">
        //                 <a className="navbar-brand" href="/"> DYL</a>
        //                 <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span className="nav-btn">
        //                         <span className="btn-line" id="line1"></span>
        //                         <span className="btn-line" id="line2"></span>
        //                         <span className="btn-line" id="line3"></span>
        //                     </span>
        //                 </button>
        //                 <div className="navbar-collapse navbar-list collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
        //                     <ul className="navbar-nav mx-auto text-center">
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/projects">Projects</Link>
        //                         </li>
        //                         <li className="nav-item active">
        //                             <Link className="nav-link" to="/">Home </Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/contact-page">Contact</Link>
        //                         </li>
        //                     </ul>
        //                     <ul className="nav navbar-nav flex-row flex-nowrap text-center justify-content-center">
        //                         <li className="nav-item">
        //                             <a className="nav-link mx-1" href="https://www.linkedin.com/in/dingqi-dylan-liu/" target="_blank"><i className="fab fa-linkedin-in mr-1"></i></a> 
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link mx-1" href="https://github.com/Dylan-Dingqi" target="_blank"><i className="fab fa-github"></i></a> 
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link mx-1" href="https://www.instagram.com/mister.koala/" target="_blank"><i className="fab fa-instagram"></i></a>     
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>
        //         <div id="nav-placeholder">i</div>
        //     </div>
        // )
        // const nav3 = (
        //     <div>
        //         <div id="nav3-placeholder" className="container" className={`${this.state.open?"show":""}`}>
        //             <div className="container nav3-placeholder-inner">
        //                 <a href="/">
        //                     <img className="nav3-brand" src={logo}></img>
        //                 </a>
        //                 {/* <div>dylan</div> */}
        //                 {/* <div>dylan</div>
        //                 <div></div> */}
        //             </div>
        //         </div>
        //         <div id="navbar3-bar">
        //             <div  className="container d-flex justify-content-end" >
        //                 {/* <div></div>
        //                 <div></div> */}
        //                 <div 
        //                 className={`${this.state.scrollingDown&&!this.state.open?"hideNav":""}`} href="#" 
        //                 id="nav3-menu-button" 
        //                 onClick={this.closeNav}
        //                 >
        //                     {`${this.state.open?"Close":"Menu"}`}
        //                 </div>
        //             </div>
        //         </div>
        //         <div id="navbar3-main" class={`${this.state.open?"show":""}`}>
        //             <div className="navbar3-menu container">
        //                 <Link to="/projects" className="nav3-item" onClick={this.closeNav}>
        //                     <h3>Projects</h3>
        //                     <h6>What I've made.</h6>
        //                 </Link>
        //                 <Link to="/" className="nav3-item" onClick={this.closeNav}>
                            
        //                     <h3>Home</h3>
        //                     <h6>About me.</h6>
        //                 </Link>
        //                 <Link to="/" className="nav3-item" onClick={this.closeNav}>
        //                     <h3>Contact</h3>
        //                     <h6>Reach me here.</h6>
        //                     <h6 className="color-theme"><i className="fas fa-chevron-up"></i></h6>
        //                 </Link>
        //             </div>
        //             <div className="d-flex justify-content-center pt-4">
        //                 <h4 className="px-2"><i className="fab fa-github"></i></h4>
        //                 <h4 className="px-2"><i className="fab fa-instagram"></i></h4>
        //                 <h4 className="px-2"><i className="fab fa-facebook-square"></i></h4>
        //             </div>
        //         </div>


        //     </div>
        // )        
        return nav4;
    }
}

export default Navbar;