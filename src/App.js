import React, {useEffect} from 'react';
import { Route, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Navbar from "./components/navbar/navbar.component";

import HomePage from "./pages/home/home.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import ContactPage from "./pages/contact/contact-page.component";
// import ProjectsPage from "./pages/projects/projects.component";

import {getProject} from "./data/projects";
import "./App.scss";

// import { CSSPlugin } from 'gsap/CSSPlugin'
import "./styles/_custom.scss";
import "./styles/_global.scss";




const routes = [
  { path: '/', name: 'Home', Component: HomePage , exact:true, className: "page"},
  { path: "/", Component: NotFoundPage, name: "not found", exact:false, className: "page"},
  { path: "/contact", Component: ContactPage, name: "Contact", exact:true},
//   { path: "/projects", Component: ProjectsPage, name: "Projects Overview", exact:true},
]


// routes.forEach((route) => {
//     route.path = process.env.PUBLIC_URL + route.path;
// })
const PAGE_NAME = "North Analytics"

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
                        <CSSTransition in={match != null} timeout={500} classNames={className || "page"} unmountOnExit>
                            <div className="page">
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
            <Navbar/>
            <App/>
        </div>
      )
}

export default AppWrapper;
