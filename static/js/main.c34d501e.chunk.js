(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{32:function(e,a,t){"use strict";var n=t(1),c=t.n(n),o=function(){return c.a.createElement("div",{className:"loading-bar"},c.a.createElement("div",{className:"ui active centered inline loader"}))};t(49),a.a=o},34:function(e){e.exports=JSON.parse('{"a":"https://github.com/lthong/react-web-projects"}')},49:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),o=t(33),l=t.n(o),i=(t(41),t(8)),r=t.n(i),s=t(7),m=t(13),u=t(2),p=t(11),d=t.n(p),b=t(32),v=function(e){return e.pastDelay?c.a.createElement(b.a,null):null},f=d()({loader:function(){return t.e(1).then(t.bind(null,89))},loading:v}),E=d()({loader:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,87))},loading:v}),h=d()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,88))},loading:v}),N="/",k="/music-player",g="/vedio-browser",j=t(10),C=t(35),w=t(17),O=t(34),P=[{path:N,label:"Home",Icon:j.a},{path:k,label:"Music Player",Icon:C.a},{path:g,label:"Vedio Browser",Icon:j.c}],I=function(e){var a=e.isDarkTheme,t=e.setIsDarkTheme,o=Object(u.e)(),l=Object(u.f)(),i=Object(n.useState)(!1),m=r()(i,2),p=m[0],d=m[1],b=Object(n.useCallback)((function(){d((function(e){return!e}))}),[]),v=Object(n.useCallback)((function(e){b(),o.push(e)}),[b,o]);return c.a.createElement("div",{className:Object(s.a)("menu",{"navs-open":p}),onClick:function(e){p&&"navs"!==e.target.id&&b()}},c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"left-items"},c.a.createElement("div",{className:Object(s.a)("menu-icon",{active:p}),onClick:function(e){e.stopPropagation(),b()}},c.a.createElement("div",{className:"mid"}))),c.a.createElement("div",{className:"title",onClick:function(e){e.stopPropagation(),v(N),d(!1)}},"React Projects"),c.a.createElement("div",{className:"right-items"},a?c.a.createElement(w.b,{className:"tool-icon",size:25,onClick:function(e){e.stopPropagation(),t(!1)}}):c.a.createElement(w.a,{className:"tool-icon",size:22,onClick:function(e){e.stopPropagation(),t(!0)}}),c.a.createElement(j.d,{className:"tool-icon",size:25,onClick:function(){window.location.replace(O.a)}}))),c.a.createElement("div",{className:"navs",id:"navs"},P.map((function(e){var a=e.path,t=e.label,n=e.Icon,o=l.pathname===a;return c.a.createElement("div",{key:a,className:Object(s.a)("item",{active:o}),onClick:function(e){e.stopPropagation(),v(a)}},c.a.createElement(n,{size:20,className:"nav-icon"}),t)}))))},y=(t(52),I),D=(t(53),[{path:N,Comp:f,exact:!0},{path:k,Comp:E},{path:g,Comp:h}]),x=function(){var e=Object(n.useState)(!0),a=r()(e,2),t=a[0],o=a[1];return c.a.createElement(m.a,{basename:"/react-web-projects/"},c.a.createElement("div",{className:Object(s.a)("app",{lite:!t})},c.a.createElement(y,{isDarkTheme:t,setIsDarkTheme:o}),c.a.createElement("div",{className:"content"},D.map((function(e){var a=e.path,t=e.Comp,n=e.exact,o=void 0!==n&&n;return c.a.createElement(u.a,{key:a,path:a,exact:o},c.a.createElement(t,null))})))))},z=(t(54),x);l.a.render(c.a.createElement(z,null),document.getElementById("root"))}},[[79,5,0]]]);