import React from "react";
import Footer from "../../components/footer/footer.component"
import { projects } from "../../data/projects";
import {Link} from "react-router-dom";

let paths = ["/", "/home-old", "/projects", "/contact", "/projects-all"];

for (let x = 0; x < projects.length; x++) {
    paths.push(projects[x].path);
}
paths.forEach(path => {
    // console.log(process.env.PUBLIC_URL+path)
    path = process.env.PUBLIC_URL+path;
})
// console.log(paths);

class NotFound extends React.Component {
    removeTrailingSlash(str) {
        if (str.length <= 1){
            return str;
        }
        return str.endsWith('/') ?
            str.slice(0, -1) :
            str;
    };

    render() {
        const path = this.removeTrailingSlash(this.props.location.pathname);
        // console.log(path);
        if (paths.indexOf(path) === -1){
            return (
                <div className="d-flex flex-column vh-100">
                    <div className="container py-5 my-5 text-center flex-grow-1 d-flex justify-content-center align-items-center">
                        <div>
                            <h1> Page Not Found </h1>
                            <h5>Sorry, looks like the page you are looking for is missing.</h5>
                            <Link className="link arrow-right" to="/">Take me home</Link>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
        return null;
    }
}

export default NotFound;