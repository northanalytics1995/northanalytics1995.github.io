(this["webpackJsonpnorth-analytics"]=this["webpackJsonpnorth-analytics"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(11),c=a.n(i),l=(a(50),a(3)),o=a(115),r=(a(51),a(9)),d=a(39),m=a.n(d),h=a.p+"static/media/background-solid.2ff0f3c7.png",p=a(0);class u extends n.a.Component{constructor(){super(),this.handleScroll=()=>{const{prevScrollpos:e}=this.state,t=window.pageYOffset,a=e<t;this.setState({prevScrollpos:t,scrollingDown:a})},this.handleMenuClick=()=>{window.setTimeout((()=>{this.setState({menuIsOpen:!this.state.menuIsOpen})}),30)},this.handleMenuLinkClick=()=>{this.state.menuIsOpen&&window.setTimeout((()=>{this.setState({menuIsOpen:!1})}),230)},this.state={prevScrollpos:window.pageYOffset,scrollingDown:!1,menuIsOpen:!1}}render(){return Object(p.jsxs)("nav",{id:"nav4",children:[Object(p.jsx)("div",{id:"nav4-navbar",className:"",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("a",{className:"nav4-brand",href:"/",children:Object(p.jsx)("div",{className:"nav4-text pl-2",children:" North Analytics"})}),Object(p.jsx)("div",{id:"nav4-menu-button",className:" ".concat(this.state.menuIsOpen?"rotate":""),"data-event-category":"Navbar button","data-event-action":"Click","data-event-label":"Open/close nav menu",children:Object(p.jsx)(m.a,{isOpen:this.state.menuIsOpen,menuClicked:this.handleMenuClick,width:30,height:20,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5})})]})}),Object(p.jsx)("div",{id:"nav4-menu",className:"background overlay ".concat(this.state.menuIsOpen?"menuIsOpen":""),style:{backgroundImage:"url(".concat(h,")")},children:Object(p.jsxs)("div",{className:"overlay-content",children:[Object(p.jsxs)(r.b,{className:"nav4-link",onClick:this.handleMenuLinkClick,to:"/projects-all","data-event-category":"Navbar virtual link","data-event-action":"Click","data-event-label":"Go to projects page",children:[Object(p.jsx)("div",{className:"navbar-page-title bold",children:"Projects"}),Object(p.jsx)("div",{className:"navbar-page-subtitle",children:"What I've made"})]}),Object(p.jsxs)(r.b,{className:"nav4-link",onClick:this.handleMenuLinkClick,to:"/","data-event-category":"Navbar virtual link","data-event-action":"Click","data-event-label":"Go to home page",children:[Object(p.jsx)("div",{className:"navbar-page-title bold",children:"Home"}),Object(p.jsx)("div",{className:"navbar-page-subtitle",children:"About us"})]}),Object(p.jsxs)(r.b,{className:"nav4-link",onClick:this.handleMenuLinkClick,to:"/contact","data-event-category":"Navbar virtual link","data-event-action":"Click","data-event-label":"Go to contact page",children:[Object(p.jsx)("div",{className:"navbar-page-title bold",children:"Contact"}),Object(p.jsx)("div",{className:"navbar-page-subtitle",children:"Reach me"})]})]})})]})}}var b=u,g=(a(60),a(61),a.p+"static/media/react-logo-3.54e49755.png");class j extends n.a.Component{render(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("div",{className:"footer-container container",children:Object(p.jsxs)("div",{className:" d-block d-md-flex align-items-end justify-content-between",children:[Object(p.jsxs)("div",{className:"right-text",children:[Object(p.jsx)("div",{className:"icons",children:[{link:"https://www.instagram.com/dylan.d.q/",icon:Object(p.jsx)("i",{className:"fab fa-instagram"}),name:"Instagram"},{link:"https://www.facebook.com/profile.php?id=100006511032746",icon:Object(p.jsx)("i",{className:"fab fa-facebook-square"}),name:"Facebook"},{link:"https://www.linkedin.com/in/dingqi-dylan-liu/",icon:Object(p.jsx)("i",{className:"fab fa-linkedin-in"}),name:"LinkedIn"},{link:"https://github.com/Dylan-Dingqi",icon:Object(p.jsx)("i",{className:"fab fa-github"}),name:"Github"}].map((e=>Object(p.jsx)("a",{className:"ml-0 mr-3",href:e.link,target:"_blank",rel:"noreferrer","data-event-category":"Footer contact external link","data-event-action":"Click","data-event-label":"Footer contact external link - Go to "+e.name,children:e.icon},e.link)))}),Object(p.jsx)("div",{className:"text-small",children:"Say hi - northanalytics1995 [at] gmail.com"})]}),Object(p.jsxs)("div",{className:"design-and-build",children:[Object(p.jsx)("div",{className:"text-small",children:"Designed and built by Dylan"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"mr-1 mt-1 d-inline  text-small",children:"Powered by React"}),Object(p.jsx)("img",{src:g,className:"App-logo color-white d-inline",alt:"react logo"})]})]})]})}),Object(p.jsxs)("div",{className:"text-center text-small pb-1 opacity-50",children:["Build Time: ","7/7/2024, 11:41:16 AM"]})]})}}var v=j,x=(a(62),a(40)),f=a.n(x),N=(a(78),a(79),a.p+"static/media/background-transp.73bfbf27.png");const O=[{className:"devicon-angularjs-plain",label:"Angular"},{className:"devicon-photoshop-line",label:"Photoshop"},{className:"devicon-react-original",label:"React"},{className:"devicon-java-plain",label:"Java"},{className:"devicon-javascript-plain",label:"JavaScript"},{className:"devicon-git-plain",label:"Git"},{className:"fab fa-github",label:"GitHub"},{className:"devicon-html5-plain-wordmark",label:"HTML"},{className:"devicon-mongodb-plain",label:"MongoDB"},{className:"devicon-express-original-wordmark",label:"Express"}];var k=()=>Object(p.jsxs)("div",{className:"horizontal-scroll-new background-light py-5 background",style:{backgroundImage:"url(".concat(N,")")},children:[Object(p.jsxs)("div",{className:"container my-4",children:[Object(p.jsx)("h2",{className:"font-display",children:"About us."}),Object(p.jsx)("hr",{className:"mb-4 hr-theme"}),Object(p.jsx)("p",{className:"paragraph-description",children:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit vulputate dapibus. In interdum dapibus nisi sit amet tincidunt. Nunc non diam dapibus lorem faucibus volutpat. Proin porta metus id pharetra suscipit. Nulla ac mauris id leo interdum viverra id vel augue. Nunc pretium est sed sapien dignissim, dapibus ornare sem faucibus. Fusce eu nisi condimentum, cursus ligula semper, molestie orci. Nulla vitae efficitur leo. Ut facilisis nibh ante, non tincidunt purus rhoncus eu. Duis quis fermentum dolor, vitae luctus orci. Maecenas pulvinar congue mi ac ullamcorper. Curabitur lobortis purus id purus sollicitudin tincidunt. Suspendisse finibus, felis vel blandit suscipit, velit purus ullamcorper felis, eget laoreet tortor nibh at quam."})]}),Object(p.jsx)(f.a,{className:"",arrows:!1,slidesToShow:7,infinite:!0,centerMode:!0,autoplay:!0,autoplaySpeed:2e3,dots:!1,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToScroll:1,slidesToShow:5}},{breakpoint:576,settings:{slidesToScroll:1,slidesToShow:2}}],children:O.map((e=>Object(p.jsxs)("div",{className:"item",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("i",{className:e.className})}),Object(p.jsxs)("div",{className:"label",children:[" ",e.label," "]})]},e.className)))})]});var y=()=>{const{pathname:e}=Object(l.e)();return Object(s.useLayoutEffect)((()=>{setTimeout((()=>{window.scrollTo(0,0)}),100)}),[e]),null},w=a(18),S=a(41),C=a.n(S);const T=[{icon:Object(p.jsx)("i",{className:"fas fa-drafting-compass"}),title:"Design and Prototype",desc:"Design and prototype user-centered and visually appealing user interfaces."},{icon:Object(p.jsx)("i",{className:"fas fa-drafting-compass"}),title:"Design and Prototype",desc:"Design and prototype user-centered and visually appealing user interfaces."},{icon:Object(p.jsx)("i",{className:"fas fa-drafting-compass"}),title:"Design and Prototype",desc:"Design and prototype user-centered and visually appealing user interfaces."},{icon:Object(p.jsx)("i",{className:"fas fa-drafting-compass"}),title:"Design and Prototype",desc:"Design and prototype user-centered and visually appealing user interfaces."},{icon:Object(p.jsx)("i",{className:"fas fa-drafting-compass"}),title:"Design and Prototype",desc:"Design and prototype user-centered and visually appealing user interfaces."}];class D extends n.a.Component{constructor(){super(),this.aLittleAboutMeRef=null}renderWhatIDoItem(e,t,a){return Object(p.jsx)("div",{className:"d-flex my-2 what-i-do-child col-12 col-lg-6",children:Object(p.jsxs)("div",{className:"flex-grow-1 mr-lg-4",children:[Object(p.jsx)("div",{className:"mb-1 text-size-125 color-theme",children:e}),Object(p.jsx)("h5",{className:"bold",children:t}),Object(p.jsx)("p",{className:"text-size-90",children:a})]})},t)}render(){return Object(p.jsxs)("div",{className:"home-new background-white",children:[Object(p.jsx)("h1",{className:"mt-5 pt-4 pt-xxl-5 text-center mb-2 main-title font-display",children:"North Analytics"}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:" main-container mb-5",children:[Object(p.jsx)("div",{className:"heading2",children:"We are an analytics company based in Toronto, Canada"}),Object(p.jsxs)("div",{className:"d-block d-sm-flex justify-content-center align-items-center my-2",children:[Object(p.jsxs)("div",{className:"link theme-button d-block mx-3 ml-sm-0 mb-2 mb-sm-0",onClick:()=>w.animateScroll.scrollTo(this.aLittleAboutMeRef.offsetTop-50),"data-event-category":"Anchor link","data-event-action":"Click","data-event-label":"Anchor link to go down on the home page",children:["Learn more",Object(p.jsx)("i",{className:"fas fa-caret-down ml-1"})]}),Object(p.jsxs)(r.b,{className:"link",to:"/contact","data-event-category":"Virtual link","data-event-action":"Click","data-event-label":"Go to projects from home page",children:[" Contact me ",Object(p.jsx)("i",{className:"ml-1 fas fa-caret-right"})]})]})]})}),Object(p.jsx)("div",{id:"aLittleAboutMe",ref:e=>this.aLittleAboutMeRef=e,children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"py-5 background",style:{backgroundImage:"url(".concat(h,")")},children:Object(p.jsxs)("div",{className:"container pt-5",children:[Object(p.jsx)("h2",{className:"font-display",children:"Our services."}),Object(p.jsx)(C.a,{onChange:e=>{e&&window.dataLayer.push({event:"customEvent",eventCategory:"Home page scroll",eventAction:"Scroll",eventLabel:"User scroll to home page bottom "})},children:Object(p.jsx)("hr",{className:"hr-theme"})}),Object(p.jsx)("div",{className:"my-5 what-i-do mx-auto row",children:T.map((e=>{let{icon:t,title:a,desc:s}=e;return this.renderWhatIDoItem(t,a,s)}))})]})}),Object(p.jsx)(y,{}),Object(p.jsx)(v,{})]})}}var E=D;const I="",A={name:"node.js",iconClass:"devicon-nodejs-plain ".concat(I),tag:Object(p.jsx)("span",{className:"tag color-green",children:"Node.js"})},L={name:"JavaScript",iconClass:"devicon-javascript-plain ".concat(I),tag:Object(p.jsx)("span",{className:"tag color-yellow",children:"JavaScript"})},q={name:"HTML",iconClass:"devicon-html5-plain-wordmark ".concat(I),tag:Object(p.jsx)("span",{className:"tag color-red",children:"HTML"})},M={name:"CSS",iconClass:"devicon-css3-plain-wordmark ".concat(I),tag:Object(p.jsx)("span",{className:"tag color-blue",children:"CSS"})},R=("devicon-java-plain ".concat(I),{name:"React",iconClass:"devicon-react-original ".concat(I),tag:Object(p.jsx)("span",{className:"tag color-red",children:"React"})}),P={name:"MongoDB",iconClass:"devicon-mongodb-plain-wordmark ".concat(I),tag:Object(p.jsx)("span",{className:"tag color-yellow",children:"MongoDB"})},W=[{title:"Full Stack Web Application",projectName:"ToneNotebook",year:2022,date:new Date("2022-05-02T00:00:00"),description:"This is a web application designed for guitar players to keep track of amplifier setttings. Authenticated users can create new presets and save presets created by other users. This application is currently under development.",images:["tonenotebook-0.jpg","tonenotebook-1.jpg","tonenotebook-2.jpg","tonenotebook-3.jpg"],links:[{name:"App under development",url:"https://tonenotebook.com"}],stack:[q,M,L,R],selected:!0},{title:"Web Game",projectName:"Find The Unique Color",year:2018,date:new Date("2018-02-01T00:00:00"),description:"This is a web game built using HTML, CSS, and JavaScript. The objective is to find the different color at each level. There are 25 levels, the difficulty increases gradually.",images:["find-the-unique-color-0.jpg","find-the-unique-color-1.jpg"],links:[{name:"Visit",url:"https://www.cs.ryerson.ca/~d42liu/colorGame3/"}],stack:[q,M,L],selected:!0},{title:"React App",projectName:"Unsplash Image Searcher",folderName:"unsplash-searcher",year:2020,date:new Date("2020-02-01T00:00:00"),description:"This React based single page app uses Unpslash API, takes user input, sends a GET request asynchronously to the API, returns the top 10 images based on user input, and eventually displays the images in a user-friendly, responsive, and minimalist layout.",shortDescription:"This React based single page app uses Unpslash API to fetch 10 images based on user input, and displays them in a user-friendly, responsive, and minimalist layout.",links:[{name:"Visit",url:"https://dylan-dingqi.github.io/unsplash-searcher"},{name:"GitHub",url:"https://github.com/Dylan-Dingqi/unsplash-searcher"}],images:["unsplash-searcher-0.jpg","unsplash-searcher-1.jpg","unsplash-searcher-2.jpg"],stack:[q,M,R,L],selected:!0},{title:"Website",projectName:"Photography Website",year:2020,date:new Date("2020-02-01T00:00:00"),description:"This is a website that showcases some of my photography work. It allows users to comment and like the posts. Authenticated admins can manage posts and comments with a user friendly user interface. \n The website is built using RESTful routing, with Node.js with Express and MongoDB.",shortDescription:"This website showcases my photography work. It allows users to comment and like the posts, and authenticated admins can manage posts and comments.",links:[{name:"Visit",url:"https://hidden-brushlands-36862.herokuapp.com/"}],images:["photography-website-0.jpg","photography-website-1.jpg","photography-website-2.jpg"],stack:[A,q,M,P,L],selected:!0},{title:"Static Website",projectName:"Digital Web Clock",year:2019,date:new Date("2019-02-01T00:00:00"),description:"This is a responsive web-based app that displays time in a stylish way, and it allows users customize the background by providing a link to the image at the bottom of the screen.",links:[{name:"GitHub",url:"https://github.com/Dylan-Dingqi/web_clock"},{name:"Visit",url:"https://dylan-dingqi.github.io/web_clock"}],images:["screenshot4-0.jpg","screenshot4-1.jpg","screenshot4-2.jpg"],stack:[q,M,L]},{title:"Node website",projectName:"Web Frameworks Demo",year:2019,date:new Date("2019-02-01T00:00:00"),description:"This is a final project for Web Development class at Ryerson University, It demos and teaches the essentials about Express and Materialize frameworks.",links:[{name:"GitHub",url:"https://github.com/Dylan-Dingqi/web_clock"},{name:"Visit",url:"https://intense-peak-42405.herokuapp.com/"}],images:["screenshot6-0.jpg","screenshot6-1.jpg","screenshot6-2.jpg"],stack:[q,M,L,A]}];W.forEach((e=>{e.id=e.projectName.toLowerCase().replace(/\s/g,"-"),e.path="/projects/"+e.id}));for(let ce=0;ce<W.length;ce++){for(let e=0;e<W[ce].images.length;e++)W[ce].images[e]="/img/projects/"+(W[ce].folderName||W[ce].id)+"/"+W[ce].images[e];ce===W.length-1?W[ce].nextID=W[0].id:W[ce].nextID=W[ce+1].id}const _=e=>e?W.find((t=>t.id===e)):W;let F=["/","/home-old","/projects","/contact","/projects-all"];for(let ce=0;ce<W.length;ce++)F.push(W[ce].path);F.forEach((e=>{e=""+e}));class G extends n.a.Component{removeTrailingSlash(e){return e.length<=1?e:e.endsWith("/")?e.slice(0,-1):e}render(){const e=this.removeTrailingSlash(this.props.location.pathname);return-1===F.indexOf(e)?Object(p.jsxs)("div",{className:"d-flex flex-column vh-100",children:[Object(p.jsx)("div",{className:"container py-5 my-5 text-center flex-grow-1 d-flex justify-content-center align-items-center",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:" Page Not Found "}),Object(p.jsx)("h5",{children:"Sorry, looks like the page you are looking for is missing."}),Object(p.jsx)(r.b,{className:"link arrow-right",to:"/",children:"Take me home"})]})}),Object(p.jsx)(v,{})]}):null}}var H=G;a(87),a(88);class z extends n.a.Component{render(){return Object(p.jsxs)("div",{className:"my-5 pt-4 title-unit-component",children:[Object(p.jsxs)("div",{className:"container wrapper",children:[Object(p.jsxs)("div",{className:"left-text",children:[Object(p.jsx)("h1",{className:"mb-0 font-display",children:this.props.title?this.props.title:"Missing props 'title'"}),Object(p.jsx)("hr",{className:"global-hr mt-2"}),Object(p.jsx)("p",{className:"global-title-paragraph",children:this.props.titleParagraph?this.props.titleParagraph:"Missing props 'titleParagraph', Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam excepturi eum hic ipsam praesentium ducimus, suscipit voluptates dolorum pariatur officiis sed rem deserunt fuga quisquam cupiditate molestiae non rerum?"}),this.props.button?this.props.button:null]}),Object(p.jsx)("div",{className:"right-image",children:Object(p.jsx)("img",{src:this.props.imageSrc?this.props.imageSrc:"https://via.placeholder.com/150",alt:"placeholder"})})]}),Object(p.jsx)("p",{className:"global-title-paragraph"})]})}}var U=z,J=a.p+"static/media/coffee.114f11d5.png",B=a(44),V=a.p+"static/media/background.89e169ee.png",Y=a(42),Z=a.n(Y),K=a(43),Q=a.n(K);class X extends n.a.Component{constructor(e){super(e),this.handleFormSubmit=e=>{e.preventDefault(),e.target.querySelector("#input-name").value?e.target.querySelector("#input-email").value?e.target.querySelector("#input-message").value?"imustpass@imustpass"===this.state.senderEmail?this.sendRestEmail("imustpass"):this.state.messageError||this.state.messageSent||this.state.messageSending||this.recaptchaRef.props.grecaptcha.execute().catch((e=>{this.setState({messageError:!0}),console.error("ReCAPTCHA Not available")})):console.log("Message is null"):console.log("Email is null"):console.log("Name is null")},this.sendErrorEventToDataLayer=e=>{window.dataLayer.push({event:"customEvent",eventCategory:"Error",eventAction:"HTML request",eventLabel:"Status "+e+" on sending message"})},this.handleRecaptcha=async()=>{const e=this.recaptchaRef.props.grecaptcha.getResponse();this.sendRestEmail(e)},this.sendEmailForm=e=>{Z.a.sendForm("service_5g4j04l","template_2b61izp",e.target,"user_E1Chew1zIWrHcdWZzggyc").then((e=>{this.setState({messageSent:!0,messageSending:!1})}),(e=>{this.setState({messageSending:!1,messageError:!0}),console.log(e.text)}))},this.sendRestEmail=async e=>{if(!this.state.messageSent&&!this.state.messageError&&!this.messageSending){this.setState({messageSending:!0});const t={service_id:this.service_id,template_id:this.template_id,user_id:this.user_id,template_params:{"sender-name":this.state.senderName,"sender-email":this.state.senderEmail,message:this.state.senderMessage,"g-recaptcha-response":e}},a=await Q.a.post("https://api.emailjs.com/api/v1.0/email/send",t);200!==a.status?(this.setState({messageSending:!1,messageError:!0}),this.sendErrorEventToDataLayer(a.status),console.log(a)):this.setState({messageSending:!1,messageSent:!0})}},this.sendEmailDummy=e=>{setTimeout((()=>this.setState({messageSent:!0,messageSending:!1})),1e3)},this.state={recaptchaNotPassed:!1,messageSent:!1,messageError:!1,messageSending:!1,senderEmail:"",senderName:"",senderMessage:""},this.service_id="service_5g4j04l",this.template_id="template_2b61izp",this.user_id="user_E1Chew1zIWrHcdWZzggyc",this.recaptchaKey="6LebXf0ZAAAAAI0mxr9zrpIdqroWJxUescJYy-r4",this.recaptchaRef=null,this.scrollToThisRef=null,this.formRef=null}render(){return Object(p.jsxs)("div",{className:"contact-page-component",children:[Object(p.jsx)(U,{title:"Get in touch",titleParagraph:"Coffee lover? Let\u2019s get to know each other over a lovely cup of coffee, we don't need a reason. I'm sure we'll have a great time together.",imageSrc:J,button:Object(p.jsxs)("div",{onClick:()=>w.animateScroll.scrollTo(this.scrollToThisRef.offsetTop),className:"theme-button d-inline-block","data-event-category":"Anchor link","data-event-action":"Click","data-event-label":"Anchor link - Scroll down on contact page",children:["Sure ",Object(p.jsx)("i",{className:"fas fa-caret-down ml-1"})]})}),Object(p.jsx)("div",{className:"background-light background",ref:e=>{this.scrollToThisRef=e},style:{backgroundImage:"url(".concat(V,")")},children:Object(p.jsx)("div",{className:"container py-5",children:Object(p.jsxs)("div",{className:"wrapper py-3",children:[Object(p.jsxs)("form",{className:"left-form p-3 p-lg-5 global-box-shadow",onSubmit:this.handleFormSubmit,ref:e=>this.formRef=e,children:[Object(p.jsx)("h4",{className:"bold mt-3 mt-lg-1 mb-3",children:"Shoot me a message"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"color-grey text-small mb-1",htmlFor:"input-name",children:"Name"}),Object(p.jsx)("input",{required:!0,name:"sender-name",type:"name",className:"form-control text-small",id:"input-name",placeholder:"Captain Barbossa",onChange:e=>this.setState({senderName:e.target.value})}),Object(p.jsx)("label",{className:"color-grey text-small mt-3 mb-1",htmlFor:"input-email",children:"Email"}),Object(p.jsx)("input",{required:!0,name:"sender-email",type:"email",className:"form-control text-small",id:"input-email",placeholder:"pirates@blackpearl.ship",onChange:e=>this.setState({senderEmail:e.target.value})}),Object(p.jsx)("label",{className:"color-grey text-small mt-3 mb-1",htmlFor:"input-message",children:"Message"}),Object(p.jsx)("textarea",{required:!0,className:"form-control text-small",id:"input-message",rows:"3",name:"message",onChange:e=>this.setState({senderMessage:e.target.value})})]}),Object(p.jsx)(B.a,{ref:e=>this.recaptchaRef=e,size:"invisible",sitekey:this.recaptchaKey,onChange:this.handleRecaptcha,badge:"inline"}),Object(p.jsxs)("div",{className:"mt-3",children:[Object(p.jsx)("button",{className:"theme-button color-theme-dark background-light text-small mr-3 ".concat(this.state.messageError||this.state.messageSent?"global-button-disabled":""),disabled:this.state.messageError||this.state.messageSent,children:"Submit"}),this.state.messageSent?Object(p.jsxs)("div",{className:"d-inline-block text-small color-green",children:[" Hooray, message sent ",Object(p.jsx)("i",{className:"fas fa-check"})]}):null,this.state.messageError?Object(p.jsxs)("div",{className:"d-inline-block text-small color-theme-contrast",children:[" Uhmm, something went wrong. ",Object(p.jsx)("i",{className:"fas fa-exclamation"})]}):null,this.state.messageSending?Object(p.jsx)("div",{className:"spinner-border spinner-border-sm color-theme-dark",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})}):null]})]}),Object(p.jsxs)("div",{className:"right-info py-4",children:[Object(p.jsx)("h4",{children:"Other ways to reach"}),Object(p.jsx)("div",{className:"contact-icons",children:$()}),Object(p.jsx)("div",{className:"my-3 text-small",children:"Location - Toronto, ON, Canada"}),Object(p.jsx)("div",{className:"my-3 text-small",children:"Email - dingqi.liu [at] ryerson.ca"})]})]})})}),Object(p.jsx)(v,{})]})}}function $(){return[{link:"https://www.instagram.com/dylan.d.q/",icon:Object(p.jsx)("i",{className:"fab fa-instagram"}),name:"Instagram"},{link:"https://www.facebook.com/profile.php?id=100006511032746",icon:Object(p.jsx)("i",{className:"fab fa-facebook-square"}),name:"Facebook"},{link:"https://www.linkedin.com/in/dingqi-dylan-liu/",icon:Object(p.jsx)("i",{className:"fab fa-linkedin-in"}),name:"LinkedIn"},{link:"https://github.com/Dylan-Dingqi",icon:Object(p.jsx)("i",{className:"fab fa-github"}),name:"Github"}].map((e=>Object(p.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer","data-event-category":"External link","data-event-action":"Click","data-event-label":"Contact - Go to "+e.name,children:e.icon},e.link)))}var ee=X;a(110),a(111),a(112);const te=[{path:"/",name:"Home",Component:E,exact:!0,className:"page"},{path:"/",Component:H,name:"not found",exact:!1,className:"page"},{path:"/contact",Component:ee,name:"Contact",exact:!0}],ae="North Analytics";function se(){let e=Object(l.e)();Object(s.useEffect)((()=>{var t=function(e){let t=null;for(let a=0;a<te.length;a++){const s=te[a];if(s.path===e&&s.exact){t="".concat(s.name," - ").concat(ae);break}"projects"===e.split("/")[1]&&!s.exact&&_(e.split("/")[2])&&(t="".concat(_(e.split("/")[2]).projectName," - ").concat(ae))}return t||"Not Found - ".concat(ae)}(e.pathname)||ae;window.dataLayer.push({event:"virtualPageview",virtualPath:e.pathname,virtualUrl:window.location.hostname+e.pathname,virtualPageName:t}),document.title=t}),[e])}function ne(){return se(),te.map((e=>{let{path:t,Component:a,exact:s,name:n,className:i}=e;return Object(p.jsx)(l.a,{exact:s,path:t,children:e=>{let{match:t,location:s}=e;return Object(p.jsx)(o.a,{in:null!=t,timeout:500,classNames:i||"page",unmountOnExit:!0,children:Object(p.jsx)("div",{className:"page",children:Object(p.jsx)(a,{location:s,match:t})})})}},n)}))}var ie=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(b,{}),Object(p.jsx)(ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(p.jsx)(r.a,{children:Object(p.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},50:function(e,t,a){},51:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.0ef8ab9e.chunk.js.map