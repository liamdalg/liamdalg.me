(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(164),l=a(162),c=i.a.createElement("div",{className:"err-splash absolute-centered"},i.a.createElement("h1",null,"Whoops!"),i.a.createElement("h3",null,"404: Route not found."));t.default=function(){return i.a.createElement(r.a,{banner:c,bannerHeight:"100vh"},i.a.createElement(l.a,{title:"404: Not found"}))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(155);var s=i.a.createContext({}),d=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},158:function(e,t,a){"use strict";a(166);t.a=function(e,t){var a=(new TextEncoder).encode(JSON.stringify(t)),n=new Blob([a],{type:"application/json;charset=utf-8"});window.particlesJS.load(e,URL.createObjectURL(n),function(){return console.log("loaded")})}},159:function(e,t,a){"use strict";t.a={particles:{number:{value:150,density:{enable:!0,value_area:2e3}},color:{value:"#fb713f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!1,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fb713f",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"liamdalg",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"}],social:[{name:"github",link:"https://github.com/liamdalg"},{name:"linkedin",link:"https://www.linkedin.com/in/liamdalg/"},{name:"twitter",link:"https://twitter.com/Dalgrayno"}]}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,a){"use strict";var n=a(163),i=a(0),r=a.n(i),l=a(4),c=a.n(l),o=a(169),s=a.n(o);function d(e){var t=e.description,a=e.lang,i=e.meta,l=e.keywords,c=e.title,o=n.data.site,d=t||o.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},163:function(e){e.exports={data:{site:{siteMetadata:{title:"liamdalg",description:"Personal blog built with Gatsby.",author:"@liamdalg"}}}}},164:function(e,t,a){"use strict";a(156),a(157);var n=a(7),i=a.n(n),r=a(160),l=a(0),c=a.n(l),o=a(154),s=(a(143),function(e){var t=e.siteTitle,a=e.navLinks;return c.a.createElement("header",{className:"main-header"},c.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"nav-left"},c.a.createElement("li",null,c.a.createElement(o.a,{to:"/",className:"main-link"},t))),c.a.createElement("ul",{className:"nav-right"},a.map(function(e){var t=e.name,a=e.link;return c.a.createElement("li",{key:"navbar-link-"+t},c.a.createElement(o.a,{to:a,activeClassName:"nav-active",className:"nav-link main-link"},t))}),c.a.createElement("a",{href:"/cv-pub.pdf",target:"_blank",className:"nav-link main-link"},"CV")))))}),d=(a(144),a(158)),m=a(159),u=a(165),p=a(167),v=a(168);u.c.add(p.a),u.c.add(p.b),u.c.add(p.c),u.a.autoAddCss=!1;var b=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(d.a)("particles-js",m.a)},a.render=function(){var e=this;return c.a.createElement(o.b,{query:"1973186001",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{siteTitle:t.site.siteMetadata.title,navLinks:t.site.siteMetadata.navLinks}),c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative",backgroundColor:"#161616",width:"100%",height:e.props.bannerHeight}},e.props.banner,c.a.createElement("div",{id:"particles-js",className:"particles"})),c.a.createElement("main",null,e.props.children),c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"media-icons-wrapper"},t.site.siteMetadata.social.map(function(e){var t=e.name,a=e.link;return c.a.createElement("a",{className:"media-icon",key:"media-icon-"+t,href:a},c.a.createElement(v.a,{width:48,icon:["fab",t]}))})),c.a.createElement("div",{className:"footer-other"},c.a.createElement("p",null,"liamdalg99@gmail.com"),c.a.createElement("p",null,"© 2019 Liam Dalgarno | Made with GatsbyJS and Github Pages."))))))},data:r})},t}(c.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-881b166d73e5dab62011.js.map