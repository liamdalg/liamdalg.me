(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(162),l=a(160),o=i.a.createElement("div",{className:"err-splash absolute-centered"},i.a.createElement("h1",null,"Whoops!"),i.a.createElement("h3",null,"404: Route not found."));t.default=function(){return i.a.createElement(r.a,{banner:o,bannerHeight:"100vh"},i.a.createElement(l.a,{title:"404: Not found"}))}},153:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";a(164);t.a=function(e,t){var a=(new TextEncoder).encode(JSON.stringify(t)),n=new Blob([a],{type:"application/json;charset=utf-8"});window.particlesJS.load(e,URL.createObjectURL(n),function(){return console.log("loaded")})}},157:function(e,t,a){"use strict";t.a={particles:{number:{value:150,density:{enable:!0,value_area:2e3}},color:{value:"#fb713f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!1,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fb713f",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},158:function(e){e.exports={data:{site:{siteMetadata:{title:"liamdalg",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"}],social:[{name:"github",link:"https://github.com/liamdalg"},{name:"linkedin",link:"https://www.linkedin.com/in/liamdalg/"},{name:"twitter",link:"https://twitter.com/Dalgrayno"}]}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,a){"use strict";var n=a(161),i=a(0),r=a.n(i),l=a(4),o=a.n(l),c=a(167),s=a.n(c);function d(e){var t=e.description,a=e.lang,i=e.meta,l=e.keywords,o=e.title,c=n.data.site,d=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},161:function(e){e.exports={data:{site:{siteMetadata:{title:"liamdalg",description:"Personal blog built with Gatsby.",author:"@liamdalg"}}}}},162:function(e,t,a){"use strict";a(154),a(155);var n=a(7),i=a.n(n),r=a(158),l=a(0),o=a.n(l),c=a(4),s=a.n(c),d=a(33),m=a.n(d),u=(a(153),o.a.createContext({})),p=function(e){return o.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(143);var v=function(e){var t=e.siteTitle,a=e.navLinks;return o.a.createElement("header",{className:"main-header"},o.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",{className:"nav-left"},o.a.createElement("li",null,o.a.createElement(m.a,{to:"/",className:"main-link"},t))),o.a.createElement("ul",{className:"nav-right"},a.map(function(e){var t=e.name,a=e.link;return o.a.createElement("li",{key:"navbar-link-"+t},o.a.createElement(m.a,{to:a,activeClassName:"nav-active",className:"nav-link main-link"},t))}),o.a.createElement("a",{href:"/cv-pub.pdf",target:"_blank",className:"nav-link main-link"},"CV")))))},g=(a(144),a(156)),h=a(157),b=a(163),f=a(165),y=a(166);b.c.add(f.a),b.c.add(f.b),b.c.add(f.c),b.a.autoAddCss=!1;var E=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(g.a)("particles-js",h.a)},a.render=function(){var e=this;return o.a.createElement(p,{query:"1973186001",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{siteTitle:t.site.siteMetadata.title,navLinks:t.site.siteMetadata.navLinks}),o.a.createElement("div",null,o.a.createElement("div",{style:{position:"relative",backgroundColor:"#161616",width:"100%",height:e.props.bannerHeight}},e.props.banner,o.a.createElement("div",{id:"particles-js",className:"particles"})),o.a.createElement("main",null,e.props.children),o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-wrapper"},o.a.createElement("div",{className:"media-icons-wrapper"},t.site.siteMetadata.social.map(function(e){var t=e.name,a=e.link;return o.a.createElement("a",{className:"media-icon",key:"media-icon-"+t,href:a},o.a.createElement(y.a,{width:48,icon:["fab",t]}))})),o.a.createElement("div",{className:"footer-other"},o.a.createElement("p",null,"liamdalg99@gmail.com"),o.a.createElement("p",null,"© 2019 Liam Dalgarno | Made with GatsbyJS and Github Pages."))))))},data:r})},t}(o.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-00eb22586abd9b5cf548.js.map