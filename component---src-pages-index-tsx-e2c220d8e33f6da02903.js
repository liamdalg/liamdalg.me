(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),s=n.n(i),l=n(150),o=(n(165),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(new TextEncoder).encode(JSON.stringify(this.props.config)),t=new Blob([e],{type:"application/json;charset=utf-8"});particlesJS.load("particles-js",URL.createObjectURL(t),function(){return console.log("loaded")})},n.render=function(){return s.a.createElement("div",{id:"particles-js",className:"particles"})},t}(s.a.Component)),c={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#fb713f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fb713f",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},u=(n(166),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={invertedHeader:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("scroll",function(){return e.setState({invertedHeader:window.pageYOffset+62>=window.innerHeight})})},n.render=function(){return s.a.createElement(l.a,{invertedHeader:this.state.invertedHeader},s.a.createElement("div",{className:"home-splash text-centered"},s.a.createElement("div",{className:"absolute-centered splash-info"},s.a.createElement("h1",{className:"splash-title"},s.a.createElement("span",{className:"accent-text"},"l"),"iam",s.a.createElement("span",{className:"accent-text"},"d"),"alg"),s.a.createElement("h4",{className:"splash-subtitle"},"Something goes here.")),s.a.createElement(o,{config:c}),s.a.createElement("div",{onClick:function(){return document.querySelector("#firstContainer").scrollIntoView({behavior:"smooth"})},className:"arrow-down absolute-centeredX clickable"})),s.a.createElement("div",{id:"firstContainer",className:"container"},s.a.createElement("h1",{className:"title"},"Hey There."),s.a.createElement("p",null,"Development in progress with Gatsby + SASS + TypeScript.")))},t}(s.a.Component));t.default=u},146:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),l=n(33),o=n.n(l);n.d(t,"a",function(){return o.a});n(147);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"},{name:"About",link:"/about"}]}}}}},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),l=n(55),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(148),s=n(0),l=n.n(s),o=n(146),c=(n(151),n(152),n(154),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},l.a.createElement("nav",{className:"navbar"},l.a.createElement("ul",{className:"nav-left"},l.a.createElement("li",null,l.a.createElement(o.a,{to:"/",className:this.props.inverted?"main-link inverted":"main-link"},this.props.siteTitle))),l.a.createElement("ul",{className:"nav-right"},this.props.navLinks.map(function(t){var n=t.name,a=t.link;return l.a.createElement("li",{key:"navbar-link-"+n},l.a.createElement(o.a,{to:a,activeClassName:"nav-active",className:e.props.inverted?"nav-link main-link inverted":"nav-link main-link"},n))})))))},t}(l.a.Component));n(155);n.d(t,"a",function(){return u});var u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(o.b,{query:"752744215",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{inverted:e.props.invertedHeader,siteTitle:t.site.siteMetadata.title,navLinks:t.site.siteMetadata.navLinks}),l.a.createElement("div",null,l.a.createElement("main",null,e.props.children),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})},t}(l.a.Component)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e2c220d8e33f6da02903.js.map