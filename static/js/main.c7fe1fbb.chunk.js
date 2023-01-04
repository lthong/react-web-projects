(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{23:function(e,a,t){"use strict";var n=t(1),o=t.n(n),i=function(){return o.a.createElement("div",{className:"loading-bar"},o.a.createElement("div",{className:"ui active centered inline loader"}))};t(57),a.a=i},3:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return u})),t.d(a,"d",(function(){return d}));var n=t(12),o=t(17),i=t(18),l=t(11),c=t(27),r=t(43),m={HOME:"/",MUSIC_PLAYER:"/music-player",VEDIO_BROWSER:"/vedio-browser",ANIMA_SLIDER:"/anima-slider",IG_FILTER:"/ig-filter",SNAKE_GAME:"/snake-game",JIGSAW_GAME:"/jigsaw-game",DINO_GAME:"/dino-game",MATCHING_GAME:"/matching-game",COUNTDOWN:"/countdown"};a.a=m;var s=[{path:m.HOME,label:"Home",Icon:n.a,type:"page"},{pageIndex:2,path:m.VEDIO_BROWSER,label:"Vedio Browser",Icon:n.d,type:"service",date:"2022-07",imgName:"m2",intro:"簡易版 Youtube，有支援無限滾動喔！不過因為 API 有每日請求上限，當作一個 demo 就好啦 XD"},{pageIndex:7,path:m.ANIMA_SLIDER,label:"Animation Slider",Icon:l.b,type:"service",date:"2022-12",imgName:"m7",intro:"在不使用套件的情況下，自製一個圖片輪播的功能～輪播框拖曳滑動那邊做到快起笑 XD，"},{pageIndex:1,path:m.MUSIC_PLAYER,label:"Music Player",Icon:o.c,type:"service",date:"2022-06",imgName:"m1",intro:"小小的音樂播放器，支援切換曲目，即時顯示目前播放的音軌位置及時間"},{pageIndex:6,path:m.DINO_GAME,label:"Dinosaur Game",Icon:l.e,type:"game",date:"2022-11",imgName:"m6",intro:"復刻 Google 經典的恐龍遊戲，還有背景音樂喔！"},{pageIndex:8,path:m.MATCHING_GAME,label:"matching Game",Icon:c.a,type:"game",date:"2022-12",imgName:"m8",intro:"寶可夢的卡牌記憶遊戲，角色牌隨機出現"},{pageIndex:5,path:m.JIGSAW_GAME,label:"Jigsaw Game",Icon:i.a,type:"game",date:"2022-09",imgName:"m5",intro:"要不要玩拼圖～支援桌機與手機的拖拉模式，實作難度五顆心 XD"},{pageIndex:4,path:m.SNAKE_GAME,label:"Snake Game",Icon:i.b,type:"game",date:"2022-09",imgName:"m4",intro:"經典的貪吃蛇遊戲，小心不要碰到牆壁與蛇身喔！"},{pageIndex:3,path:m.IG_FILTER,label:"IG Filter",Icon:o.b,type:"tool",date:"2022-07",imgName:"m3",intro:"簡易的 IG 濾鏡，可以自己上傳檔案，並支援下載儲存"},{pageIndex:9,path:m.COUNTDOWN,label:"Countdown",Icon:n.i,type:"tool",date:"2023-01",imgName:"m9",intro:"倒數計值器，可自行輸入秒數，使用開始鍵與暫停鍵進行操作，倒數時附有動畫特效"}],u=s.filter((function(e){return e.path!==m.HOME})),d=Object(r.a)(u).groupBy((function(e){return e.get("type")})).toJS()},44:function(e){e.exports=JSON.parse('{"a":"https://github.com/lthong/react-web-projects"}')},57:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),i=t(41),l=t.n(i),c=(t(50),t(15)),r=t(42),m=t.n(r);t(51);m.a.init({delay:200,duration:1300});var s=t(22),u=t.n(s),d=t(13),p=t.n(d),E=t(8),b=t(2),g=t(7),h=t.n(g),I=t(23),f=function(e){return e.pastDelay?o.a.createElement(I.a,null):null},N=h()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,117))},loading:f}),O=h()({loader:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,118))},loading:f}),v=h()({loader:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,124))},loading:f}),A=h()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,122))},loading:f}),C=h()({loader:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,123))},loading:f}),M=h()({loader:function(){return t.e(6).then(t.bind(null,121))},loading:f}),G=h()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,120))},loading:f}),D=h()({loader:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,116))},loading:f}),S=h()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,119))},loading:f}),_=h()({loader:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,125))},loading:f}),j=t(3),k=t(12),w=t(11),y=t(44),P=function(e){var a=e.isDarkTheme,t=e.setIsDarkTheme,i=e.isScrollDown,l=Object(b.e)(),c=Object(b.f)(),r=Object(n.useState)(!1),m=p()(r,2),s=m[0],u=m[1],d=Object(n.useCallback)((function(){u((function(e){return!e}))}),[]),g=Object(n.useCallback)((function(e){d(),l.push(e)}),[d,l]);return o.a.createElement("div",{className:Object(E.a)("menu",{"navs-open":s}),onClick:function(e){s&&"navs"!==e.target.id&&d()}},o.a.createElement("div",{className:Object(E.a)("bar",{active:i})},o.a.createElement("div",{className:"left-items"},o.a.createElement("div",{className:Object(E.a)("menu-icon",{active:s}),onClick:function(e){e.stopPropagation(),d()}},o.a.createElement("div",{className:"mid"}))),o.a.createElement("div",{className:"title",onClick:function(e){e.stopPropagation(),g(j.a.HOME),u(!1)}},o.a.createElement(w.h,{size:26,className:"react-icon"}),o.a.createElement("span",null,"DEMO")),o.a.createElement("div",{className:"right-items"},a?o.a.createElement(w.k,{className:"tool-icon",size:25,onClick:function(e){e.stopPropagation(),t(!1)}}):o.a.createElement(w.g,{className:"tool-icon",size:22,onClick:function(e){e.stopPropagation(),t(!0)}}),o.a.createElement(k.j,{className:"tool-icon",size:25,onClick:function(){window.location.replace(y.a)}}))),o.a.createElement("div",{className:"navs",id:"navs"},j.b.map((function(e){var a=e.path,t=e.label,n=e.Icon,i=c.pathname===a;return o.a.createElement("div",{key:a,className:Object(E.a)("item",{active:i}),onClick:function(e){e.stopPropagation(),g(a)}},o.a.createElement(n,{size:20,className:"nav-icon"}),t)}))))},R=(t(60),P),x=(t(61),[{path:j.a.MUSIC_PLAYER,Comp:O},{path:j.a.VEDIO_BROWSER,Comp:v},{path:j.a.ANIMA_SLIDER,Comp:D},{path:j.a.IG_FILTER,Comp:A},{path:j.a.SNAKE_GAME,Comp:C},{path:j.a.JIGSAW_GAME,Comp:M},{path:j.a.DINO_GAME,Comp:G},{path:j.a.MATCHING_GAME,Comp:S},{path:j.a.COUNTDOWN,Comp:_}]),T=function(){var e=Object(n.useState)(!0),a=p()(e,2),t=a[0],i=a[1],l=Object(n.useState)(!1),c=p()(l,2),r=c[0],m=c[1],s=Object(b.e)(),d=Object(b.f)(),g=d.pathname,h=d.search,I=Object(n.useMemo)((function(){return"path-".concat(g.substring(1)||"home")}),[g]),f=Object(n.useCallback)((function(e){m(e)}),[]);return Object(n.useEffect)((function(){window.scroll(0,0)}),[g]),Object(n.useEffect)((function(){var e=null==h?void 0:h.substring(1).split("path=");if(2===(null==e?void 0:e.length)){var a=e[1];s.push(a)}}),[h]),o.a.createElement("div",{className:Object(E.a)("app",u()({lite:!t},I,!0))},o.a.createElement(R,{isDarkTheme:t,setIsDarkTheme:i,isScrollDown:r}),o.a.createElement("div",{className:"content"},o.a.createElement(b.a,{path:j.a.HOME,exact:!0},o.a.createElement(N,{onScrollDown:f})),x.map((function(e){var a=e.path,t=e.Comp,n=e.exact,i=void 0!==n&&n;return o.a.createElement(b.a,{key:a,path:a,exact:i},o.a.createElement(t,null))}))))},H=(t(62),T);l.a.render(o.a.createElement(c.a,{basename:"/react-web-projects/"},o.a.createElement(H,null)),document.getElementById("root"))}},[[90,12,0]]]);