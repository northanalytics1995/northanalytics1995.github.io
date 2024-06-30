import React, {useEffect} from 'react';
import { HashRouter as Router, Route, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import "../../styles/_custom.scss";


import HomeOld from "../home-old/home.component";
import Home from "../home/home.component";
import ProjectsAll from "../projects-all/projects-all.component";
import Navbar from "../navbar/navbar.component";
import ProjectDetail from "../project-detail/project-detail.component";
import NotFound from "../not-found/not-found.component";
import ContactPage from "../contact-page/contact-page.component";
import Projects from "../projects/projects.component";

import {getProject} from "../../data/projects";
// import Footer from "../Footer/footer.component";
import "./App.scss";

// import { CSSPlugin } from 'gsap/CSSPlugin'

import "../../styles/_global.scss";

import "../../data/projects";



const routes = [
  { path: '/', name: 'Home', Component: Home , exact:true, className: "page"},
  { path: '/home-old', name: 'Home Old', Component: HomeOld , exact:true, className: "page"},
  { path: '/projects-all', name: 'All Projects', Component: ProjectsAll ,exact:true, className: "page"},
  { path: "/projects/:projectID", name:"Project Details", Component: ProjectDetail, exact:false},
  { path: "/", Component: NotFound, name: "not found", exact:false, className: "page"},
  { path: "/contact", Component: ContactPage, name: "Contact", exact:true},
  { path: "/projects", Component: Projects, name: "Projects Overview", exact:true},
]


// routes.forEach((route) => {
//     route.path = process.env.PUBLIC_URL + route.path;
// })
const PAGE_NAME = "Dylan's Site"

function getPageName(pagePath) {
    let name = null;
    for (let x = 0; x < routes.length; x++) {
        const route = routes[x];
        if (route.path === pagePath && route.exact) {
            name = `${route.name} - ${PAGE_NAME}`;
            break;
        }
        else if (pagePath.split("/")[1] === "projects" && !route.exact && getProject(pagePath.split("/")[2])) {
            name = `${getProject(pagePath.split("/")[2]).projectName} - ${PAGE_NAME}`;
        }

    }

    return name || `Not Found - ${PAGE_NAME}`;
    
}

function usePageViews() {
    let location = useLocation();
    useEffect(
        () => {
            var virtualPageName = getPageName(location.pathname) || PAGE_NAME;
            window.dataLayer.push({
                event:"virtualPageview",
                virtualPath: location.pathname,
                virtualUrl: window.location.hostname + location.pathname,
                virtualPageName: virtualPageName
            }); 
            document.title = virtualPageName
            
        }, [location]
    );
}

function App() {
    usePageViews();
    return (
        routes.map(({ path, Component, exact, name, className }) => (
            <Route key={name} exact={exact} path={path}>
                {({ match, location }) => {
                    return (                          
                        <CSSTransition in={match != null} timeout={500} classNames={className || "page"}unmountOnExit>
                            <div className={"page"}>
                                <Component location={location} match={match}/>
                            </div>
                        </CSSTransition>
                    )}}
            </Route>
        ))
  )
}

function AppWrapper() {
    return (
        <div>
            <Router>
                <Navbar/>
                <App/>
            </Router>
        </div>
      )
}

export default AppWrapper;
