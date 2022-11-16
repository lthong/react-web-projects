(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{39:function(e,a,t){"use strict";var n=t(1),c=t.n(n),o=function(){return c.a.createElement("div",{className:"loading-bar"},c.a.createElement("div",{className:"ui active centered inline loader"}))};t(56),a.a=o},43:function(e){e.exports=JSON.parse('{"a":"https://github.com/lthong/react-web-projects"}')},56:function(e,a,t){},59:function(e,a,t){},6:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return s})),t.d(a,"d",(function(){return u}));var n=t(13),c=t(17),o=t(18),i=t(11),l=t(42),r={HOME:"/",MUSIC_PLAYER:"/music-player",VEDIO_BROWSER:"/vedio-browser",IG_FILTER:"/ig-filter",SNAKE_GAME:"/snake-game",JIGSAW_GAME:"/jigsaw-game",DINO_GAME:"/dino-game"};a.a=r;var m=[{path:r.HOME,label:"Home",Icon:n.a,type:"page"},{path:r.MUSIC_PLAYER,label:"Music Player",Icon:c.c,type:"service",imgName:"m1",intro:"小小的音樂播放器，支援切換曲目，即時顯示目前播放的音軌位置及時間"},{path:r.VEDIO_BROWSER,label:"Vedio Browser",Icon:n.c,type:"service",imgName:"m2",intro:"簡易版 Youtube，有支援無限滾動喔！不過因為 API 有每日請求上限，當作一個 demo 就好啦 XD"},{path:r.IG_FILTER,label:"IG Filter",Icon:c.b,type:"tool",imgName:"m3",intro:"簡易的 IG 濾鏡，可以自己上傳檔案，並支援下載儲存"},{path:r.SNAKE_GAME,label:"Snake Game",Icon:o.b,type:"game",imgName:"m4",intro:"經典的貪吃蛇遊戲，小心不要碰到牆壁與蛇身喔！"},{path:r.JIGSAW_GAME,label:"Jigsaw Game",Icon:o.a,type:"game",imgName:"m5",intro:"要不要玩拼圖～支援桌機與手機的拖拉模式，實作難度五顆心 XD"},{path:r.DINO_GAME,label:"Dinosaur Game",Icon:i.b,type:"game",imgName:"m6",intro:"復刻 Google 經典的恐龍遊戲，還有背景音樂喔！"}],s=m.filter((function(e){return e.path!==r.HOME})),u=Object(l.a)(s).groupBy((function(e){return e.get("type")})).toJS()},61:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),o=t(40),i=t.n(o),l=(t(49),t(15)),r=t(41),m=t.n(r);t(50);m.a.init({delay:200,duration:1300});var s=t(22),u=t.n(s),p=t(12),d=t.n(p),E=t(8),b=t(2),f=t(7),h=t.n(f),g=t(39),v=function(e){return e.pastDelay?c.a.createElement(g.a,null):null},I=h()({loader:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,110))},loading:v}),O=h()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,109))},loading:v}),N=h()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,115))},loading:v}),G=h()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,113))},loading:v}),S=h()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,114))},loading:v}),k=h()({loader:function(){return t.e(4).then(t.bind(null,112))},loading:v}),C=h()({loader:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,111))},loading:v}),M=t(6),j=t(13),A=t(11),D=t(43),_=function(e){var a=e.isDarkTheme,t=e.setIsDarkTheme,o=e.isScrollDown,i=Object(b.e)(),l=Object(b.f)(),r=Object(n.useState)(!1),m=d()(r,2),s=m[0],u=m[1],p=Object(n.useCallback)((function(){u((function(e){return!e}))}),[]),f=Object(n.useCallback)((function(e){p(),i.push(e)}),[p,i]);return c.a.createElement("div",{className:Object(E.a)("menu",{"navs-open":s}),onClick:function(e){s&&"navs"!==e.target.id&&p()}},c.a.createElement("div",{className:Object(E.a)("bar",{active:o})},c.a.createElement("div",{className:"left-items"},c.a.createElement("div",{className:Object(E.a)("menu-icon",{active:s}),onClick:function(e){e.stopPropagation(),p()}},c.a.createElement("div",{className:"mid"}))),c.a.createElement("div",{className:"title",onClick:function(e){e.stopPropagation(),f(M.a.HOME),u(!1)}},c.a.createElement(A.d,{size:26,className:"react-icon"}),c.a.createElement("span",null,"DEMO")),c.a.createElement("div",{className:"right-items"},a?c.a.createElement(A.f,{className:"tool-icon",size:25,onClick:function(e){e.stopPropagation(),t(!1)}}):c.a.createElement(A.c,{className:"tool-icon",size:22,onClick:function(e){e.stopPropagation(),t(!0)}}),c.a.createElement(j.h,{className:"tool-icon",size:25,onClick:function(){window.location.replace(D.a)}}))),c.a.createElement("div",{className:"navs",id:"navs"},M.b.map((function(e){var a=e.path,t=e.label,n=e.Icon,o=l.pathname===a;return c.a.createElement("div",{key:a,className:Object(E.a)("item",{active:o}),onClick:function(e){e.stopPropagation(),f(a)}},c.a.createElement(n,{size:20,className:"nav-icon"}),t)}))))},w=(t(59),_),y=(t(60),[{path:M.a.MUSIC_PLAYER,Comp:O},{path:M.a.VEDIO_BROWSER,Comp:N},{path:M.a.IG_FILTER,Comp:G},{path:M.a.SNAKE_GAME,Comp:S},{path:M.a.JIGSAW_GAME,Comp:k},{path:M.a.DINO_GAME,Comp:C}]),P=function(){var e=Object(n.useState)(!0),a=d()(e,2),t=a[0],o=a[1],i=Object(n.useState)(!1),l=d()(i,2),r=l[0],m=l[1],s=Object(b.f)().pathname,p=Object(n.useMemo)((function(){return"path-".concat(s.substr(1)||"home")}),[s]),f=Object(n.useCallback)((function(e){m(e)}),[]);return c.a.createElement("div",{className:Object(E.a)("app",u()({lite:!t},p,!0))},c.a.createElement(w,{isDarkTheme:t,setIsDarkTheme:o,isScrollDown:r}),c.a.createElement("div",{className:"content"},c.a.createElement(b.a,{path:M.a.HOME,exact:!0},c.a.createElement(I,{onScrollDown:f})),y.map((function(e){var a=e.path,t=e.Comp,n=e.exact,o=void 0!==n&&n;return c.a.createElement(b.a,{key:a,path:a,exact:o},c.a.createElement(t,null))}))))},R=(t(61),P);i.a.render(c.a.createElement(l.a,{basename:"/react-web-projects/"},c.a.createElement(R,null)),document.getElementById("root"))}},[[89,9,0]]]);