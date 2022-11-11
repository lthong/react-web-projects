(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{39:function(e,a,t){"use strict";var n=t(1),c=t.n(n),l=function(){return c.a.createElement("div",{className:"loading-bar"},c.a.createElement("div",{className:"ui active centered inline loader"}))};t(56),a.a=l},43:function(e){e.exports=JSON.parse('{"a":"https://github.com/lthong/react-web-projects"}')},56:function(e,a,t){},59:function(e,a,t){},6:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return s})),t.d(a,"d",(function(){return u}));var n=t(13),c=t(17),l=t(18),o=t(11),i=t(42),r={HOME:"/",MUSIC_PLAYER:"/music-player",VEDIO_BROWSER:"/vedio-browser",IG_FILTER:"/ig-filter",SNAKE_GAME:"/snake-game",JIGSAW_GAME:"/jigsaw-game",DINO_GAME:"/dino-game"};a.a=r;var m=[{path:r.HOME,label:"Home",Icon:n.a,type:"page"},{path:r.MUSIC_PLAYER,label:"Music Player",Icon:c.c,type:"service",imgName:"m1"},{path:r.VEDIO_BROWSER,label:"Vedio Browser",Icon:n.c,type:"service",imgName:"m2"},{path:r.IG_FILTER,label:"IG Filter",Icon:c.b,type:"tool",imgName:"m3"},{path:r.SNAKE_GAME,label:"Snake Game",Icon:l.b,type:"game",imgName:"m4"},{path:r.JIGSAW_GAME,label:"Jigsaw Game",Icon:l.a,type:"game",imgName:"m5"},{path:r.DINO_GAME,label:"Dinosaur Game",Icon:o.b,type:"game",imgName:"m6"}],s=m.filter((function(e){return e.path!==r.HOME})),u=Object(i.a)(s).groupBy((function(e){return e.get("type")})).toJS()},61:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(40),o=t.n(l),i=(t(49),t(15)),r=t(41),m=t.n(r);t(50);m.a.init({delay:200,duration:1300});var s=t(22),u=t.n(s),p=t(12),E=t.n(p),d=t(8),b=t(2),f=t(7),h=t.n(f),g=t(39),v=function(e){return e.pastDelay?c.a.createElement(g.a,null):null},O=h()({loader:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,110))},loading:v}),N=h()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,109))},loading:v}),I=h()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,115))},loading:v}),S=h()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,113))},loading:v}),k=h()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,114))},loading:v}),C=h()({loader:function(){return t.e(4).then(t.bind(null,112))},loading:v}),M=h()({loader:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,111))},loading:v}),j=t(6),G=t(13),A=t(11),_=t(43),w=function(e){var a=e.isDarkTheme,t=e.setIsDarkTheme,l=e.isScrollDown,o=Object(b.e)(),i=Object(b.f)(),r=Object(n.useState)(!1),m=E()(r,2),s=m[0],u=m[1],p=Object(n.useCallback)((function(){u((function(e){return!e}))}),[]),f=Object(n.useCallback)((function(e){p(),o.push(e)}),[p,o]);return c.a.createElement("div",{className:Object(d.a)("menu",{"navs-open":s}),onClick:function(e){s&&"navs"!==e.target.id&&p()}},c.a.createElement("div",{className:Object(d.a)("bar",{active:l})},c.a.createElement("div",{className:"left-items"},c.a.createElement("div",{className:Object(d.a)("menu-icon",{active:s}),onClick:function(e){e.stopPropagation(),p()}},c.a.createElement("div",{className:"mid"}))),c.a.createElement("div",{className:"title",onClick:function(e){e.stopPropagation(),f(j.a.HOME),u(!1)}},c.a.createElement(A.d,{size:26,className:"react-icon"}),c.a.createElement("span",null,"DEMO")),c.a.createElement("div",{className:"right-items"},a?c.a.createElement(A.f,{className:"tool-icon",size:25,onClick:function(e){e.stopPropagation(),t(!1)}}):c.a.createElement(A.c,{className:"tool-icon",size:22,onClick:function(e){e.stopPropagation(),t(!0)}}),c.a.createElement(G.h,{className:"tool-icon",size:25,onClick:function(){window.location.replace(_.a)}}))),c.a.createElement("div",{className:"navs",id:"navs"},j.b.map((function(e){var a=e.path,t=e.label,n=e.Icon,l=i.pathname===a;return c.a.createElement("div",{key:a,className:Object(d.a)("item",{active:l}),onClick:function(e){e.stopPropagation(),f(a)}},c.a.createElement(n,{size:20,className:"nav-icon"}),t)}))))},y=(t(59),w),D=(t(60),[{path:j.a.MUSIC_PLAYER,Comp:N},{path:j.a.VEDIO_BROWSER,Comp:I},{path:j.a.IG_FILTER,Comp:S},{path:j.a.SNAKE_GAME,Comp:k},{path:j.a.JIGSAW_GAME,Comp:C},{path:j.a.DINO_GAME,Comp:M}]),P=function(){var e=Object(n.useState)(!0),a=E()(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),i=E()(o,2),r=i[0],m=i[1],s=Object(b.f)().pathname,p=Object(n.useMemo)((function(){return"path-".concat(s.substr(1)||"home")}),[s]),f=Object(n.useCallback)((function(e){m(e)}),[]);return c.a.createElement("div",{className:Object(d.a)("app",u()({lite:!t},p,!0))},c.a.createElement(y,{isDarkTheme:t,setIsDarkTheme:l,isScrollDown:r}),c.a.createElement("div",{className:"content"},c.a.createElement(b.a,{path:j.a.HOME,exact:!0},c.a.createElement(O,{onScrollDown:f})),D.map((function(e){var a=e.path,t=e.Comp,n=e.exact,l=void 0!==n&&n;return c.a.createElement(b.a,{key:a,path:a,exact:l},c.a.createElement(t,null))}))))},R=(t(61),P);o.a.render(c.a.createElement(i.a,{basename:"/react-web-projects/"},c.a.createElement(R,null)),document.getElementById("root"))}},[[89,9,0]]]);