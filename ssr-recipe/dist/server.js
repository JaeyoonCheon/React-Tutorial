(()=>{"use strict";var e={n:r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},d:(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};require("react");const r=require("react-dom/server");var n=e.n(r);const t=require("express");var o=e.n(t);const i=require("react-router-dom"),u=require("react/jsx-runtime"),s=function(){return(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(i.Link,{to:"/red",children:"Red"})}),(0,u.jsx)("li",{children:(0,u.jsx)(i.Link,{to:"/blue",children:"Blue"})})]})},c=function(){return(0,u.jsx)("div",{className:"Red",children:"Red"})},l=function(){return(0,u.jsx)(c,{})},d=function(){return(0,u.jsx)("div",{className:"Blue",children:"Blue"})},a=function(){return(0,u.jsx)(d,{})},x=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(s,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(i.Route,{path:"/red",component:l}),(0,u.jsx)(i.Route,{path:"/blue",component:a})]})},j=require("path");var h=e.n(j),v=o()(),f=o().static(h().resolve("./build"),{index:blue});v.use(f),v.use((function(e,r,t){var o=(0,u.jsx)(i.StaticRouter,{location:e.url,context:{},children:(0,u.jsx)(x,{})}),s=n().renderToString(o);r.send(s)})),v.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))})();