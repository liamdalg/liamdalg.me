(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),l=a(152),c=a(156);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(147);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"},{name:"About",link:"/about"}]}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),l=a(146),c=(a(150),a(151),a(154),function(e){var t=e.inverted,a=e.siteTitle,n=e.navLinks;return i.a.createElement("header",{className:"main-header"},i.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav-left"},i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",className:t?"main-link inverted":"main-link"},a))),i.a.createElement("ul",{className:"nav-right"},n.map(function(e){var a=e.name,n=e.link;return i.a.createElement("li",{key:"navbar-link-"+a},i.a.createElement(l.a,{to:n,activeClassName:"nav-active",className:t?"nav-link main-link inverted":"nav-link main-link"},a))})))))});a(155),t.a=function(e){var t=e.invertedHeader,a=e.children;return i.a.createElement(l.b,{query:"1170218135",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{inverted:t,siteTitle:e.site.siteMetadata.title,navLinks:e.site.siteMetadata.navLinks}),i.a.createElement("div",null,i.a.createElement("main",null,a),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(158),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",description:"Personal blog built with Gatsby.",author:"@liamdalg"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-6a1762fd7a24efe46384.js.map