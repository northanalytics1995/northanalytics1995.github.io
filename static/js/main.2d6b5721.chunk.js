(this["webpackJsonpnorth-analytics"]=this["webpackJsonpnorth-analytics"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(11),c=a.n(i),l=(a(49),a(2)),o=a(114),r=(a(50),a.p+"static/media/north-analytics-logo(full-colour)rgb.1585b19c.png"),d=a(8),m=a(38),h=a.n(m),p=a.p+"static/media/background-solid.2ff0f3c7.png",b=a(0);class u extends n.a.Component{constructor(){super(),this.handleScroll=()=>{const{prevScrollpos:e}=this.state,t=window.pageYOffset,a=e<t;this.setState({prevScrollpos:t,scrollingDown:a})},this.handleMenuClick=()=>{window.setTimeout((()=>{this.setState({menuIsOpen:!this.state.menuIsOpen})}),30)},this.handleMenuLinkClick=()=>{this.state.menuIsOpen&&window.setTimeout((()=>{this.setState({menuIsOpen:!1})}),230)},this.state={prevScrollpos:window.pageYOffset,scrollingDown:!1,menuIsOpen:!1}}render(){return Object(b.jsxs)("nav",{id:"nav4",children:[Object(b.jsx)("div",{id:"nav4-navbar",className:"",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("a",{className:"nav4-brand",href:"/",children:Object(b.jsx)("img",{src:r,className:"logo-2",alt:"logo"})}),Object(b.jsx)("div",{id:"nav4-menu-button",className:" ".concat(this.state.menuIsOpen?"rotate":""),"data-event-category":"Navbar button","data-event-action":"Click","data-event-label":"Open/close nav menu",children:Object(b.jsx)(h.a,{isOpen:this.state.menuIsOpen,menuClicked:this.handleMenuClick,width:30,height:20,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5})})]})}),Object(b.jsx)("div",{id:"nav4-menu",className:"background overlay ".concat(this.state.menuIsOpen?"menuIsOpen":""),style:{backgroundImage:"url(".concat(p,")")},children:Object(b.jsxs)("div",{className:"overlay-content",children:[Object(b.jsxs)(d.b,{className:"nav4-link",onClick:this.handleMenuLinkClick,to:"/projects-all","data-event-category":"Navbar virtual link","data-event-action":"Click","data-event-label":"Go to projects page",children:[Object(b.jsx)("div",{className:"navbar-page-title bold",children:"Projects"}),Object(b.jsx)("div",{className:"navbar-page-subtitle",children:"What I've made"})]}),Object(b.jsxs)(d.b,{className:"nav4-link",onClick:this.handleMenuLinkClick,to:"/","data-event-category":"Navbar virtual link","data-event-action":"Click","data-event-label":"Go to home page",children:[Object(b.jsx)("div",{className:"navbar-page-title bold",children:"Home"}),Object(b.jsx)("div",{className:"navbar-page-subtitle",children:"About us"})]}),Object(b.jsxs)(d.b,{className:"nav4-link",onClick:this.handleMenuLinkClick,to:"/contact","data-event-category":"Navbar virtual link","data-event-action":"Click","data-event-label":"Go to contact page",children:[Object(b.jsx)("div",{className:"navbar-page-title bold",children:"Contact"}),Object(b.jsx)("div",{className:"navbar-page-subtitle",children:"Reach us"})]})]})})]})}}var g=u,j=(a(59),a(60),a.p+"static/media/react-logo-3.54e49755.png");class v extends n.a.Component{render(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("div",{className:"footer-container container",children:Object(b.jsxs)("div",{className:" d-block d-md-flex align-items-end justify-content-between",children:[Object(b.jsxs)("div",{className:"right-text",children:[Object(b.jsx)("div",{className:"icons",children:[{link:"https://www.instagram.com/",icon:Object(b.jsx)("i",{className:"fab fa-instagram"}),name:"Instagram"},{link:"https://www.facebook.com/",icon:Object(b.jsx)("i",{className:"fab fa-facebook-square"}),name:"Facebook"},{link:"https://www.linkedin.com/in/",icon:Object(b.jsx)("i",{className:"fab fa-linkedin-in"}),name:"LinkedIn"},{link:"https://github.com/",icon:Object(b.jsx)("i",{className:"fab fa-github"}),name:"Github"}].map((e=>Object(b.jsx)("a",{className:"ml-0 mr-3",href:e.link,target:"_blank",rel:"noreferrer","data-event-category":"Footer contact external link","data-event-action":"Click","data-event-label":"Footer contact external link - Go to "+e.name,children:e.icon},e.link)))}),Object(b.jsx)("div",{className:"text-small",children:"Say hi - northanalytics1995 [at] gmail.com"})]}),Object(b.jsxs)("div",{className:"design-and-build",children:[Object(b.jsx)("div",{className:"text-small",children:"Designed and built by Dylan"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"mr-1 mt-1 d-inline  text-small",children:"Powered by React"}),Object(b.jsx)("img",{src:j,className:"App-logo color-white d-inline",alt:"react logo"})]})]})]})}),Object(b.jsxs)("div",{className:"text-center text-small pb-1 opacity-50",children:["Build Time: ","8/31/2024, 2:54:45 PM"]})]})}}var x=v,f=(a(61),a(40)),O=a.n(f),N=(a(77),a(78),a.p+"static/media/background-transp.73bfbf27.png");const k=[{className:"devicon-angularjs-plain",label:"Angular"},{className:"devicon-photoshop-line",label:"Photoshop"},{className:"devicon-react-original",label:"React"},{className:"devicon-java-plain",label:"Java"},{className:"devicon-javascript-plain",label:"JavaScript"},{className:"devicon-git-plain",label:"Git"},{className:"fab fa-github",label:"GitHub"},{className:"devicon-html5-plain-wordmark",label:"HTML"},{className:"devicon-mongodb-plain",label:"MongoDB"},{className:"devicon-express-original-wordmark",label:"Express"}];var y=()=>Object(b.jsxs)("div",{className:"horizontal-scroll-new background-light py-5 background",style:{backgroundImage:"url(".concat(N,")")},children:[Object(b.jsxs)("div",{className:"container my-4",children:[Object(b.jsx)("h2",{className:"font-display",children:"About us."}),Object(b.jsx)("hr",{className:"mb-4 hr-theme"}),Object(b.jsx)("p",{className:"paragraph-description",children:" We are a team of experts in data and analytics baesd in Toronto, Canada. Our comprehensive data analytics services are taylored for individual clients to understand their audience, improve site traffic, gain click through rates, and grow their business."})]}),Object(b.jsx)(O.a,{className:"",arrows:!1,slidesToShow:7,infinite:!0,centerMode:!0,autoplay:!0,autoplaySpeed:2e3,dots:!1,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToScroll:1,slidesToShow:5}},{breakpoint:576,settings:{slidesToScroll:1,slidesToShow:2}}],children:k.map((e=>Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)("i",{className:e.className})}),Object(b.jsxs)("div",{className:"label",children:[" ",e.label," "]})]},e.className)))})]});var w=()=>{const{pathname:e}=Object(l.e)();return Object(s.useLayoutEffect)((()=>{setTimeout((()=>{window.scrollTo(0,0)}),100)}),[e]),null},S=a(17),T=a(41),C=a.n(T);const E=[{icon:Object(b.jsx)("i",{className:"fa-solid fa-chart-simple"}),title:"Custom Data Tracking",desc:"Design and implement custom analytics tracking by experts based on your needs."},{icon:Object(b.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),title:"SEO Analytics",desc:"Analytics driven Search Engine Optimization, improve site traffic with evidence."},{icon:Object(b.jsx)("i",{className:"fas fa-solid fa-computer"}),title:"Data Visualization",desc:"Utilize dashboards to unlock the power of data, visualize your business performance with ease."},{icon:Object(b.jsx)("i",{className:"fas fa-pen-nib"}),title:"Design and Prototype",desc:"Design and prototype user-centered web interfaces, optimize UI to maximize click rates."}];class D extends n.a.Component{constructor(){super(),this.aLittleAboutMeRef=null}renderWhatIDoItem(e,t,a){return Object(b.jsx)("div",{className:"d-flex my-2 what-i-do-child col-12 col-lg-6",children:Object(b.jsxs)("div",{className:"flex-grow-1 mr-lg-4",children:[Object(b.jsx)("div",{className:"mb-1 text-size-125 color-theme",children:e}),Object(b.jsx)("h5",{className:"bold",children:t}),Object(b.jsx)("p",{className:"text-size-90",children:a})]})},t)}render(){return Object(b.jsxs)("div",{className:"home-new background-white",children:[Object(b.jsx)("h1",{className:"mt-5 pt-4 pt-xxl-5 text-center mb-2 main-title font-display",children:"North Analytics"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:" main-container mb-5",children:[Object(b.jsx)("div",{className:"heading2",children:"Transform your online business with actionable insights."}),Object(b.jsxs)("div",{className:"d-block d-sm-flex justify-content-center align-items-center my-2",children:[Object(b.jsxs)("div",{className:"link theme-button d-block mx-3 ml-sm-0 mb-2 mb-sm-0",onClick:()=>S.animateScroll.scrollTo(this.aLittleAboutMeRef.offsetTop-50),"data-event-category":"Anchor link","data-event-action":"Click","data-event-label":"Anchor link to go down on the home page",children:["Learn more",Object(b.jsx)("i",{className:"fas fa-caret-down ml-1"})]}),Object(b.jsxs)(d.b,{className:"link",to:"/contact","data-event-category":"Virtual link","data-event-action":"Click","data-event-label":"Go to projects from home page",children:[" Contact us ",Object(b.jsx)("i",{className:"ml-1 fas fa-caret-right"})]})]})]})}),Object(b.jsx)("div",{id:"aLittleAboutMe",ref:e=>this.aLittleAboutMeRef=e,children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"py-5 background",style:{backgroundImage:"url(".concat(p,")")},children:Object(b.jsxs)("div",{className:"container pt-5",children:[Object(b.jsx)("h2",{className:"font-display",children:"Our services."}),Object(b.jsx)(C.a,{onChange:e=>{e&&window.dataLayer.push({event:"customEvent",eventCategory:"Home page scroll",eventAction:"Scroll",eventLabel:"User scroll to home page bottom "})},children:Object(b.jsx)("hr",{className:"hr-theme"})}),Object(b.jsx)("div",{className:"my-5 what-i-do mx-auto row",children:E.map((e=>{let{icon:t,title:a,desc:s}=e;return this.renderWhatIDoItem(t,a,s)}))})]})}),Object(b.jsx)(w,{}),Object(b.jsx)(x,{})]})}}var I=D;const A="",M={name:"node.js",iconClass:"devicon-nodejs-plain ".concat(A),tag:Object(b.jsx)("span",{className:"tag color-green",children:"Node.js"})},L={name:"JavaScript",iconClass:"devicon-javascript-plain ".concat(A),tag:Object(b.jsx)("span",{className:"tag color-yellow",children:"JavaScript"})},R={name:"HTML",iconClass:"devicon-html5-plain-wordmark ".concat(A),tag:Object(b.jsx)("span",{className:"tag color-red",children:"HTML"})},q={name:"CSS",iconClass:"devicon-css3-plain-wordmark ".concat(A),tag:Object(b.jsx)("span",{className:"tag color-blue",children:"CSS"})},W=("devicon-java-plain ".concat(A),{name:"React",iconClass:"devicon-react-original ".concat(A),tag:Object(b.jsx)("span",{className:"tag color-red",children:"React"})}),P={name:"MongoDB",iconClass:"devicon-mongodb-plain-wordmark ".concat(A),tag:Object(b.jsx)("span",{className:"tag color-yellow",children:"MongoDB"})},_=[{title:"Full Stack Web Application",projectName:"ToneNotebook",year:2022,date:new Date("2022-05-02T00:00:00"),description:"This is a web application designed for guitar players to keep track of amplifier setttings. Authenticated users can create new presets and save presets created by other users. This application is currently under development.",images:["tonenotebook-0.jpg","tonenotebook-1.jpg","tonenotebook-2.jpg","tonenotebook-3.jpg"],links:[{name:"App under development",url:"https://tonenotebook.com"}],stack:[R,q,L,W],selected:!0},{title:"Web Game",projectName:"Find The Unique Color",year:2018,date:new Date("2018-02-01T00:00:00"),description:"This is a web game built using HTML, CSS, and JavaScript. The objective is to find the different color at each level. There are 25 levels, the difficulty increases gradually.",images:["find-the-unique-color-0.jpg","find-the-unique-color-1.jpg"],links:[{name:"Visit",url:"https://www.cs.ryerson.ca/~d42liu/colorGame3/"}],stack:[R,q,L],selected:!0},{title:"React App",projectName:"Unsplash Image Searcher",folderName:"unsplash-searcher",year:2020,date:new Date("2020-02-01T00:00:00"),description:"This React based single page app uses Unpslash API, takes user input, sends a GET request asynchronously to the API, returns the top 10 images based on user input, and eventually displays the images in a user-friendly, responsive, and minimalist layout.",shortDescription:"This React based single page app uses Unpslash API to fetch 10 images based on user input, and displays them in a user-friendly, responsive, and minimalist layout.",links:[{name:"Visit",url:"https://dylan-dingqi.github.io/unsplash-searcher"},{name:"GitHub",url:"https://github.com/Dylan-Dingqi/unsplash-searcher"}],images:["unsplash-searcher-0.jpg","unsplash-searcher-1.jpg","unsplash-searcher-2.jpg"],stack:[R,q,W,L],selected:!0},{title:"Website",projectName:"Photography Website",year:2020,date:new Date("2020-02-01T00:00:00"),description:"This is a website that showcases some of my photography work. It allows users to comment and like the posts. Authenticated admins can manage posts and comments with a user friendly user interface. \n The website is built using RESTful routing, with Node.js with Express and MongoDB.",shortDescription:"This website showcases my photography work. It allows users to comment and like the posts, and authenticated admins can manage posts and comments.",links:[{name:"Visit",url:"https://hidden-brushlands-36862.herokuapp.com/"}],images:["photography-website-0.jpg","photography-website-1.jpg","photography-website-2.jpg"],stack:[M,R,q,P,L],selected:!0},{title:"Static Website",projectName:"Digital Web Clock",year:2019,date:new Date("2019-02-01T00:00:00"),description:"This is a responsive web-based app that displays time in a stylish way, and it allows users customize the background by providing a link to the image at the bottom of the screen.",links:[{name:"GitHub",url:"https://github.com/Dylan-Dingqi/web_clock"},{name:"Visit",url:"https://dylan-dingqi.github.io/web_clock"}],images:["screenshot4-0.jpg","screenshot4-1.jpg","screenshot4-2.jpg"],stack:[R,q,L]},{title:"Node website",projectName:"Web Frameworks Demo",year:2019,date:new Date("2019-02-01T00:00:00"),description:"This is a final project for Web Development class at Ryerson University, It demos and teaches the essentials about Express and Materialize frameworks.",links:[{name:"GitHub",url:"https://github.com/Dylan-Dingqi/web_clock"},{name:"Visit",url:"https://intense-peak-42405.herokuapp.com/"}],images:["screenshot6-0.jpg","screenshot6-1.jpg","screenshot6-2.jpg"],stack:[R,q,L,M]}];_.forEach((e=>{e.id=e.projectName.toLowerCase().replace(/\s/g,"-"),e.path="/projects/"+e.id}));for(let ie=0;ie<_.length;ie++){for(let e=0;e<_[ie].images.length;e++)_[ie].images[e]="/img/projects/"+(_[ie].folderName||_[ie].id)+"/"+_[ie].images[e];ie===_.length-1?_[ie].nextID=_[0].id:_[ie].nextID=_[ie+1].id}const H=e=>e?_.find((t=>t.id===e)):_;let F=["/","/home-old","/projects","/contact","/projects-all"];for(let ie=0;ie<_.length;ie++)F.push(_[ie].path);F.forEach((e=>{e=""+e}));class z extends n.a.Component{removeTrailingSlash(e){return e.length<=1?e:e.endsWith("/")?e.slice(0,-1):e}render(){const e=this.removeTrailingSlash(this.props.location.pathname);return-1===F.indexOf(e)?Object(b.jsxs)("div",{className:"d-flex flex-column vh-100",children:[Object(b.jsx)("div",{className:"container py-5 my-5 text-center flex-grow-1 d-flex justify-content-center align-items-center",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" Page Not Found "}),Object(b.jsx)("h5",{children:"Sorry, looks like the page you are looking for is missing."}),Object(b.jsx)(d.b,{className:"link arrow-right",to:"/",children:"Take me home"})]})}),Object(b.jsx)(x,{})]}):null}}var G=z;a(86),a(87);class U extends n.a.Component{render(){return Object(b.jsxs)("div",{className:"my-5 pt-4 title-unit-component",children:[Object(b.jsxs)("div",{className:"container wrapper",children:[Object(b.jsxs)("div",{className:"left-text",children:[Object(b.jsx)("h1",{className:"mb-0 font-display",children:this.props.title?this.props.title:"Missing props 'title'"}),Object(b.jsx)("hr",{className:"global-hr mt-2"}),Object(b.jsx)("p",{className:"global-title-paragraph",children:this.props.titleParagraph?this.props.titleParagraph:"Missing props 'titleParagraph', Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam excepturi eum hic ipsam praesentium ducimus, suscipit voluptates dolorum pariatur officiis sed rem deserunt fuga quisquam cupiditate molestiae non rerum?"}),this.props.button?this.props.button:null]}),Object(b.jsx)("div",{className:"right-image",children:Object(b.jsx)("img",{src:this.props.imageSrc?this.props.imageSrc:"https://via.placeholder.com/150",alt:"placeholder"})})]}),Object(b.jsx)("p",{className:"global-title-paragraph"})]})}}var J=U,B=a.p+"static/media/coffee.114f11d5.png",V=a.p+"static/media/background.89e169ee.png",Y=a(42),Q=a.n(Y),Z=a(43),K=a.n(Z);class X extends n.a.Component{constructor(e){super(e),this.handleFormSubmit=e=>{e.preventDefault(),e.target.querySelector("#input-name").value?e.target.querySelector("#input-email").value?e.target.querySelector("#input-message").value?"imustpass@imustpass"===this.state.senderEmail?this.sendRestEmail("imustpass"):this.state.messageError||this.state.messageSent||this.state.messageSending||this.sendRestEmail():console.log("Message is null"):console.log("Email is null"):console.log("Name is null")},this.sendErrorEventToDataLayer=e=>{window.dataLayer.push({event:"customEvent",eventCategory:"Error",eventAction:"HTML request",eventLabel:"Status "+e+" on sending message"})},this.sendEmailForm=e=>{Q.a.sendForm("service_h94la4l","template_46s9wc8",e.target,"user_E1Chew1zIWrHcdWZzggyc").then((e=>{this.setState({messageSent:!0,messageSending:!1})}),(e=>{this.setState({messageSending:!1,messageError:!0}),console.log(e.text)}))},this.sendRestEmail=async e=>{if(!this.state.messageSent&&!this.state.messageError&&!this.messageSending){this.setState({messageSending:!0});const e={service_id:this.service_id,template_id:this.template_id,user_id:this.user_id,template_params:{"sender-name":this.state.senderName,"sender-email":this.state.senderEmail,message:this.state.senderMessage}},t=await K.a.post("https://api.emailjs.com/api/v1.0/email/send",e);200!==t.status?(this.setState({messageSending:!1,messageError:!0}),this.sendErrorEventToDataLayer(t.status),console.log(t)):this.setState({messageSending:!1,messageSent:!0})}},this.sendEmailDummy=e=>{setTimeout((()=>this.setState({messageSent:!0,messageSending:!1})),1e3)},this.state={recaptchaNotPassed:!1,messageSent:!1,messageError:!1,messageSending:!1,senderEmail:"",senderName:"",senderMessage:""},this.service_id="service_h94la4l",this.template_id="template_46s9wc8",this.user_id="mpve1APHnQjLA0lia",this.recaptchaKey="6LebXf0ZAAAAAI0mxr9zrpIdqroWJxUescJYy-r4",this.recaptchaRef=null,this.scrollToThisRef=null,this.formRef=null}render(){return Object(b.jsxs)("div",{className:"contact-page-component",children:[Object(b.jsx)(J,{title:"Get in touch",titleParagraph:"We\u2019re here to help you unlock the full potential of your data and drive your marketing strategies to new heights. Whether you have a question about our services, need a customized analytics solution, or want to explore partnership opportunities, don\u2019t hesitate to get in touch. Here\u2019s how you can reach us:",imageSrc:B,button:Object(b.jsxs)("div",{onClick:()=>S.animateScroll.scrollTo(this.scrollToThisRef.offsetTop),className:"theme-button d-inline-block","data-event-category":"Anchor link","data-event-action":"Click","data-event-label":"Anchor link - Scroll down on contact page",children:["Sure ",Object(b.jsx)("i",{className:"fas fa-caret-down ml-1"})]})}),Object(b.jsx)("div",{className:"background-light background",ref:e=>{this.scrollToThisRef=e},style:{backgroundImage:"url(".concat(V,")")},children:Object(b.jsx)("div",{className:"container py-5",children:Object(b.jsxs)("div",{className:"wrapper py-3",children:[Object(b.jsxs)("form",{className:"left-form p-3 p-lg-5 global-box-shadow",onSubmit:this.handleFormSubmit,ref:e=>this.formRef=e,children:[Object(b.jsx)("h4",{className:"bold mt-3 mt-lg-1 mb-3",children:"Shoot me a message"}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"color-grey text-small mb-1",htmlFor:"input-name",children:"Name"}),Object(b.jsx)("input",{required:!0,name:"sender-name",type:"name",className:"form-control text-small",id:"input-name",placeholder:"Captain Barbossa",onChange:e=>this.setState({senderName:e.target.value})}),Object(b.jsx)("label",{className:"color-grey text-small mt-3 mb-1",htmlFor:"input-email",children:"Email"}),Object(b.jsx)("input",{required:!0,name:"sender-email",type:"email",className:"form-control text-small",id:"input-email",placeholder:"pirates@blackpearl.ship",onChange:e=>this.setState({senderEmail:e.target.value})}),Object(b.jsx)("label",{className:"color-grey text-small mt-3 mb-1",htmlFor:"input-message",children:"Message"}),Object(b.jsx)("textarea",{required:!0,className:"form-control text-small",id:"input-message",rows:"3",name:"message",onChange:e=>this.setState({senderMessage:e.target.value})})]}),Object(b.jsxs)("div",{className:"mt-3",children:[Object(b.jsx)("button",{className:"theme-button color-theme-dark background-light text-small mr-3 ".concat(this.state.messageError||this.state.messageSent?"global-button-disabled":""),disabled:this.state.messageError||this.state.messageSent,children:"Submit"}),this.state.messageSent?Object(b.jsxs)("div",{className:"d-inline-block text-small color-green",children:[" ","Hooray, message sent ",Object(b.jsx)("i",{className:"fas fa-check"})]}):null,this.state.messageError?Object(b.jsxs)("div",{className:"d-inline-block text-small color-theme-contrast",children:[" ","Uhmm, something went wrong."," ",Object(b.jsx)("i",{className:"fas fa-exclamation"})]}):null,this.state.messageSending?Object(b.jsx)("div",{className:"spinner-border spinner-border-sm color-theme-dark",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Loading..."})}):null]})]}),Object(b.jsxs)("div",{className:"right-info py-4",children:[Object(b.jsx)("h4",{children:"Contact Information"}),Object(b.jsxs)("div",{className:"my-3 text-small",children:[Object(b.jsx)("strong",{children:"Email"})," : info@northanalytics.ca"]}),Object(b.jsxs)("div",{className:"my-3 text-small",children:[Object(b.jsx)("strong",{children:"Office Hours"})," : Monday - Friday, 9 AM - 6 PM (EST)"]})]})]})})}),Object(b.jsx)(x,{})]})}}var $=X;a(109),a(110),a(111);const ee=[{path:"/",name:"Home",Component:I,exact:!0,className:"page"},{path:"/",Component:G,name:"not found",exact:!1,className:"page"},{path:"/contact",Component:$,name:"Contact",exact:!0}],te="North Analytics";function ae(){let e=Object(l.e)();Object(s.useEffect)((()=>{var t=function(e){let t=null;for(let a=0;a<ee.length;a++){const s=ee[a];if(s.path===e&&s.exact){t="".concat(s.name," - ").concat(te);break}"projects"===e.split("/")[1]&&!s.exact&&H(e.split("/")[2])&&(t="".concat(H(e.split("/")[2]).projectName," - ").concat(te))}return t||"Not Found - ".concat(te)}(e.pathname)||te;window.dataLayer.push({event:"virtualPageview",virtualPath:e.pathname,virtualUrl:window.location.hostname+e.pathname,virtualPageName:t}),document.title=t}),[e])}function se(){return ae(),ee.map((e=>{let{path:t,Component:a,exact:s,name:n,className:i}=e;return Object(b.jsx)(l.a,{exact:s,path:t,children:e=>{let{match:t,location:s}=e;return Object(b.jsx)(o.a,{in:null!=t,timeout:500,classNames:i||"page",unmountOnExit:!0,children:Object(b.jsx)("div",{className:"page",children:Object(b.jsx)(a,{location:s,match:t})})})}},n)}))}var ne=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(d.a,{children:Object(b.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},49:function(e,t,a){},50:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.2d6b5721.chunk.js.map