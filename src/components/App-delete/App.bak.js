import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import "../../styles/_custom.scss";


import Home from "../home/home.component";
import Projects from "../projects/projects.component";
import Navbar from "../Navbar/Navbar";
import ProjectDetail from "../project-detail/project-detail.component";
import NotFound from "../NotFound/NotFound";
// import Footer from "../Footer/footer.component";
import "./App.scss"



import "../../styles/_global.scss";

import "../../data/projects";

const routes = [
  { path: '/', name: 'Home', Component: Home , exact:true, className: "page"},
  { path: '/projects', name: 'About', Component: Projects ,exact:true, className: "page"},
  { path: "/projects/:projectID", name:"Project Details", Component: ProjectDetail, exact:false},
  { path: "/", Component: NotFound, name: "not found", exact:false}
]

function App() {
    return (
    <div>
        <Router>
            <Navbar/>
            {routes.map(({ path, Component, exact, name, className }) => (
                <Route key={name} exact={exact} path={path}>
                    {({ match, location }) => {
                        // console.log(className);
                        return (                          
                            <CSSTransition in={match != null} timeout={500} classNames={className || "page"}unmountOnExit>
                                <div className={"page"}>
                                    <Component location={location} match={match}/>
                                </div>
                            </CSSTransition>
                        )}}
                </Route>
            ))}
        </Router>
    </div>
  )
}

export default App;
