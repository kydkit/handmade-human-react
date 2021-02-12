(this["webpackJsonphandmade-human-react"]=this["webpackJsonphandmade-human-react"]||[]).push([[0],{11:function(e,t,a){e.exports={jumbo:"Jumbotron_jumbo__1P5_u",hide:"Jumbotron_hide__PX0d1",span:"Jumbotron_span__3lxxx",subhead:"Jumbotron_subhead__24NvY"}},12:function(e,t,a){e.exports={highFade:"High_highFade__3JPZO",first:"High_first__3a9HP",second:"High_second__3XzCE",third:"High_third__1lgme",fourth:"High_fourth__1aMGh"}},21:function(e,t,a){e.exports={about:"Contact_about__3Ny9y"}},22:function(e,t,a){e.exports={navcontainer:"Navbar_navcontainer__o6UuE"}},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(20),s=a.n(i),r=(a(29),a(14)),o=a(3),l=a(24),j=a.p+"static/media/equalizer-24px.96738277.svg",h=a.p+"static/media/cubes-solid.9d928c9c.svg",d=a.p+"static/media/vue.8813c2e3.png",u=a(9),b=a(0),m=a(12),p=a.n(m),O=a(1),x=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.a.to(e,7,{opacity:0,y:0,ease:b.b.easeOut,delay:.5,repeat:-1}),u.a.to(t,7,{opacity:0,y:0,ease:b.b.easeOut,delay:.7,repeat:-1}),u.a.to(a,7,{opacity:0,y:0,ease:b.b.easeOut,repeat:-1}),u.a.to(c,7,{opacity:0,y:0,ease:b.b.easeOut,delay:.2,repeat:-1})})),Object(O.jsxs)("div",{className:p.a.highFade,children:[Object(O.jsx)("span",{className:p.a.first,ref:function(t){e=t},children:"H"}),Object(O.jsx)("span",{className:p.a.second,ref:function(e){t=e},children:"I"}),Object(O.jsx)("span",{className:p.a.third,ref:function(e){a=e},children:"G"}),Object(O.jsx)("span",{className:p.a.fourth,ref:function(e){c=e},children:"H"})]})},g=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([{id:1,image:j,url:"http://kyd.one/music-player/",name:"Music Player",language:"HTML, CSS, JavaScript",github:"https://github.com/kydkit/music-player"},{id:2,image:d,url:"http://kyd.one/vue-travel-list/",name:"Travel List",language:"HTML, CSS, Vue.js",github:"https://github.com/kydkit/vue-travel-list"},{id:3,image:h,url:"http://kyd.one/architecture-viz/",name:"The Other Architecture",language:"HTML, CSS, JavaScript",github:"https://github.com/kydkit/architecture-viz"}]),a=Object(l.a)(t,2),c=a[0];a[1];return Object(O.jsx)(g.Provider,{value:{projects:c},children:e.children})},_=a(11),v=a.n(_),y=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.a.to(e,1.2,{opacity:1,y:0,ease:b.b.easeOut}),u.a.to(t,1.2,{opacity:1,y:0,ease:b.b.easeOut,delay:.4})})),Object(O.jsxs)("div",{className:v.a.jumbo,children:[Object(O.jsxs)("div",{className:"tl",children:[Object(O.jsx)("h1",{className:v.a.hide,children:Object(O.jsx)("span",{className:v.a.span,ref:function(t){e=t},children:"Handmade"})}),Object(O.jsx)("h1",{className:v.a.hide,children:Object(O.jsx)("span",{className:v.a.span,ref:function(e){t=e},children:"Human"})})]}),Object(O.jsx)("p",{className:v.a.subhead,children:"Projects done by Kyd Kitchaiya while diving into the world of programming, starting from Autumn 2020"})]})},N=a(8),k=a.n(N),C=function(){var e=Object(n.useContext)(g).projects;return Object(O.jsxs)("div",{className:k.a.projectContainer,children:[e.map((function(e){return Object(O.jsxs)("div",{className:k.a.cardContainer,children:[Object(O.jsx)("div",{className:k.a.imageContainer,children:Object(O.jsx)("a",{href:e.url,target:"blank",children:Object(O.jsx)("img",{src:e.image,alt:e.alt})})}),Object(O.jsx)("h4",{className:k.a.title,children:e.name}),Object(O.jsx)("p",{children:e.language}),Object(O.jsx)("p",{className:k.a.gitlink,children:Object(O.jsx)("a",{href:e.github,target:"blank",children:"Github"})})]},e.id)})),Object(O.jsx)("div",{className:k.a.cardContainer,children:Object(O.jsxs)("div",{className:k.a.imageContainer,children:[Object(O.jsx)("a",{href:"http://kyd.one/high-on-hayon",target:"blank",children:Object(O.jsx)(x,{})}),Object(O.jsx)("h4",{className:k.a.title,children:"High On Hayon"}),Object(O.jsx)("p",{children:"HTML, CSS"}),Object(O.jsx)("p",{className:k.a.gitlink,children:Object(O.jsx)("a",{href:"https://github.com/kydkit/high-on-hayon",target:"blank",children:"Github"})})]})})]})},H=function(){return Object(O.jsxs)("div",{className:"home tc",children:[Object(O.jsx)(y,{}),Object(O.jsx)(C,{})]})},P=a(21),S=a.n(P),M=function(){return Object(O.jsxs)("div",{className:S.a.about,children:[Object(O.jsx)("p",{children:"These are a collection of projects I have done while studying Front End Development at Medieinstitutet in Malm\xf6, Sweden."}),Object(O.jsx)("p",{children:"Prior to programming, I worked as an architect, in Copenhagen and Malm\xf6, specializing in architectural visualizations. Every now and then, I still freelance in that area."}),Object(O.jsxs)("p",{children:["Say ",Object(O.jsxs)("a",{href:"mailto:info@kydkit.com",children:[Object(O.jsx)("span",{children:"Hello"}),"!"]})]})]})},w=a.p+"static/media/logo.bda18f83.svg",J=a(22),E=a.n(J),T=function(){return Object(O.jsxs)("nav",{className:E.a.navcontainer,children:[Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("img",{src:w,alt:"logo"})}),Object(O.jsx)(r.b,{to:"/contact",children:"Contact"})]})};var z=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(T,{}),Object(O.jsx)(f,{children:Object(O.jsx)(o.a,{exact:!0,path:"/",component:H})}),Object(O.jsx)(o.a,{exact:!0,path:"/contact",component:M})]})};a(36);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={cardContainer:"Projects_cardContainer__3BPl2",imageContainer:"Projects_imageContainer__1Zlcw",title:"Projects_title__1LFF3",gitlink:"Projects_gitlink__oiG0c",projectContainer:"Projects_projectContainer__2Nnvx"}}},[[37,1,2]]]);
//# sourceMappingURL=main.29b7e37c.chunk.js.map