// const test = require("../img/projects/find-the-unique-color/find-the-unique-color-0.jpg");
// console.log(test);   
import React from "react";

const colored = "";

const 
    node = {
        name: "node.js",
        iconClass:  `devicon-nodejs-plain ${colored}` ,    
        tag: <span className="tag color-green">Node.js</span>
    },
    js = {
        name: "JavaScript",
        iconClass: `devicon-javascript-plain ${colored}` ,  
        tag: <span className="tag color-yellow">JavaScript</span>
    },
    html = {
        name: "HTML",
        iconClass: `devicon-html5-plain-wordmark ${colored}` , 
        tag: <span className="tag color-red">HTML</span>
    },
    css = {
        name: "CSS",
        iconClass:  `devicon-css3-plain-wordmark ${colored}` , 
        tag: <span className="tag color-blue">CSS</span>
    },
    java = {
        name: "Java",
        iconClass:  `devicon-java-plain ${colored}` , 
        tag: <span className="tag color-red">Java</span>
    },
    react = {
        name: "React",
        iconClass:  `devicon-react-original ${colored}` , 
        tag: <span className="tag color-red">React</span>
    },
    mongodb = {
        name: "MongoDB",
        iconClass:  `devicon-mongodb-plain-wordmark ${colored}` , 
        tag: <span className="tag color-yellow">MongoDB</span>
    };

const icons = [node, js, html, css, java, mongodb, react];


const projects = [
    {
        title: "Full Stack Web Application",
        projectName: "ToneNotebook",
        year: 2022,
        date: new Date("2022-05-02T00:00:00"),
        description: "This is a web application designed for guitar players to keep track of amplifier setttings. Authenticated users can create new presets and save presets created by other users. This application is currently under development.",
        images: [
            "tonenotebook-0.jpg",
            "tonenotebook-1.jpg",
            "tonenotebook-2.jpg",
            "tonenotebook-3.jpg"
        ],
        links: [
            {name: "App under development", url: "https://tonenotebook.com"}
        ],
        stack: [ html, css, js, react ],
        selected: true
    },
    {
        title: "Web Game",
        projectName: "Find The Unique Color",
        year: 2018,
        date: new Date("2018-02-01T00:00:00"),
        description: "This is a web game built using HTML, CSS, and JavaScript. The objective is to find the different color at each level. There are 25 levels, the difficulty increases gradually.",
        images: [
            "find-the-unique-color-0.jpg",
            "find-the-unique-color-1.jpg"
        ],
        links: [
            {name: "Visit", url: "https://www.cs.ryerson.ca/~d42liu/colorGame3/"}
        ],
        stack: [ html, css, js ],
        selected: true
    },
    {
        title: "React App",
        projectName: "Unsplash Image Searcher",
        folderName: "unsplash-searcher",
        year: 2020,
        date: new Date("2020-02-01T00:00:00"),
        description: "This React based single page app uses Unpslash API, takes user input, sends a GET request asynchronously to the API, returns the top 10 images based on user input, and eventually displays the images in a user-friendly, responsive, and minimalist layout.",
        shortDescription: "This React based single page app uses Unpslash API to fetch 10 images based on user input, and displays them in a user-friendly, responsive, and minimalist layout.",
        links: [
            {
                name: "Visit",
                url: "https://dylan-dingqi.github.io/unsplash-searcher"
            },
            {
                name: "GitHub",
                url: "https://github.com/Dylan-Dingqi/unsplash-searcher"
            }
        ],
        images: [
            "unsplash-searcher-0.jpg",
            "unsplash-searcher-1.jpg",
            "unsplash-searcher-2.jpg"
        ],
        stack: [html, css, react, js],
        selected: true
    },
    {
        title: "Website",
        projectName: "Photography Website",
        year: 2020,
        date: new Date("2020-02-01T00:00:00"),
        description: "This is a website that showcases some of my photography work. It allows users to comment and like the posts. Authenticated admins can manage posts and comments with a user friendly user interface. \n The website is built using RESTful routing, with Node.js with Express and MongoDB.",
        shortDescription: "This website showcases my photography work. It allows users to comment and like the posts, and authenticated admins can manage posts and comments.",
        links: [
            {
                name: "Visit",
                url: "https://hidden-brushlands-36862.herokuapp.com/"
            },
        ],
        images: [
            "photography-website-0.jpg",
            "photography-website-1.jpg",
            "photography-website-2.jpg",
        ],
        stack: [node, html, css, mongodb, js],
        selected: true
    },
    {
        title: "Static Website",
        projectName: "Digital Web Clock",
        year: 2019,
        date: new Date("2019-02-01T00:00:00"),
        description: "This is a responsive web-based app that displays time in a stylish way, and it allows users customize the background by providing a link to the image at the bottom of the screen.",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/Dylan-Dingqi/web_clock"
            },
            {
                name: "Visit",
                url: "https://dylan-dingqi.github.io/web_clock"
            },
        ],
        images: [
            "screenshot4-0.jpg",
            "screenshot4-1.jpg",
            "screenshot4-2.jpg",
        ],
        stack: [html, css, js]
    },
    {
        title: "Node website",
        projectName: "Web Frameworks Demo",
        year: 2019,
        date: new Date("2019-02-01T00:00:00"),
        description: "This is a final project for Web Development class at Ryerson University, It demos and teaches the essentials about Express and Materialize frameworks.",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/Dylan-Dingqi/web_clock"
            },
            {
                name: "Visit",
                url: "https://intense-peak-42405.herokuapp.com/"
            },
        ],
        images: [
            "screenshot6-0.jpg",
            "screenshot6-1.jpg",
            "screenshot6-2.jpg",
        ],
        stack: [html, css, js ,node]
    }
    // {
    //     projectName: "test",
    //     description: "This is a test"
    // }
];

const imgPath = process.env.PUBLIC_URL + "/img/projects/";

projects.forEach(element => {
    element.id = element.projectName.toLowerCase().replace(/\s/g, "-");
    element.path = "/projects/" + element.id;
});

for (let x = 0; x < projects.length; x++) {
    // generate path
    for (let y = 0; y < projects[x].images.length; y++) {
        projects[x].images[y] =  imgPath + ( projects[x].folderName || projects[x].id) + "/" + projects[x].images[y];
    }

    // set next item
    if (x === projects.length-1) {
        projects[x].nextID = projects[0].id;
    }
    else projects[x].nextID = projects[x+1].id;
}

const getProject = (projectID) => {
    if (projectID) {
        return projects.find((element) => element.id === projectID);
    }
    else return projects;
}

const getSelectedProjects = () => {
    const newProjects = projects.filter((proj) => proj.selected);
    return newProjects;
}

export {projects, icons, getProject, getSelectedProjects};
