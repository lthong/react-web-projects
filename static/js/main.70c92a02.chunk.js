(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{39:function(e,a,t){"use strict";var n=t(1),c=t.n(n),l=function(){return c.a.createElement("div",{className:"loading-bar"},c.a.createElement("div",{className:"ui active centered inline loader"}))};t(53),a.a=l},41:function(e){e.exports=JSON.parse('{"a":"https://github.com/lthong/react-web-projects"}')},53:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){},6:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return s}));var n=t(12),c=t(17),l=t(18),o=t(13),i={HOME:"/",MUSIC_PLAYER:"/music-player",VEDIO_BROWSER:"/vedio-browser",IG_FILTER:"/ig-filter",SNAKE_GAME:"/snake-game",JIGSAW_GAME:"/jigsaw-game",DINO_GAME:"/dino-game"};a.a=i;var r=[{path:i.HOME,label:"Home",Icon:n.a},{path:i.MUSIC_PLAYER,label:"Music Player",Icon:c.c},{path:i.VEDIO_BROWSER,label:"Vedio Browser",Icon:n.c},{path:i.IG_FILTER,label:"IG Filter",Icon:c.b},{path:i.SNAKE_GAME,label:"Snake Game",Icon:l.b},{path:i.JIGSAW_GAME,label:"Jigsaw Game",Icon:l.a},{path:i.DINO_GAME,label:"Dinosaur Game",Icon:o.a}],s=r.filter((function(e){return e.path!==i.HOME}))},86:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(40),o=t.n(l),i=(t(47),t(15)),r=t(22),s=t.n(r),u=t(11),m=t.n(u),p=t(8),E=t(2),d=t(7),b=t.n(d),f=t(39),h=function(e){return e.pastDelay?c.a.createElement(f.a,null):null},v=b()({loader:function(){return t.e(2).then(t.bind(null,106))},loading:h}),I=b()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,105))},loading:h}),O=b()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,111))},loading:h}),g=b()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,109))},loading:h}),N=b()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,110))},loading:h}),k=b()({loader:function(){return t.e(4).then(t.bind(null,108))},loading:h}),C=b()({loader:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,107))},loading:h}),S=t(6),j=t(12),G=t(13),M=t(41),A=function(e){var a=e.isDarkTheme,t=e.setIsDarkTheme,l=e.isScrollDown,o=Object(E.e)(),i=Object(E.f)(),r=Object(n.useState)(!1),s=m()(r,2),u=s[0],d=s[1],b=Object(n.useCallback)((function(){d((function(e){return!e}))}),[]),f=Object(n.useCallback)((function(e){b(),o.push(e)}),[b,o]);return c.a.createElement("div",{className:Object(p.a)("menu",{"navs-open":u}),onClick:function(e){u&&"navs"!==e.target.id&&b()}},c.a.createElement("div",{className:Object(p.a)("bar",{active:l})},c.a.createElement("div",{className:"left-items"},c.a.createElement("div",{className:Object(p.a)("menu-icon",{active:u}),onClick:function(e){e.stopPropagation(),b()}},c.a.createElement("div",{className:"mid"}))),c.a.createElement("div",{className:"title",onClick:function(e){e.stopPropagation(),f(S.a.HOME),d(!1)}},"React Projects"),c.a.createElement("div",{className:"right-items"},a?c.a.createElement(G.c,{className:"tool-icon",size:25,onClick:function(e){e.stopPropagation(),t(!1)}}):c.a.createElement(G.b,{className:"tool-icon",size:22,onClick:function(e){e.stopPropagation(),t(!0)}}),c.a.createElement(j.h,{className:"tool-icon",size:25,onClick:function(){window.location.replace(M.a)}}))),c.a.createElement("div",{className:"navs",id:"navs"},S.b.map((function(e){var a=e.path,t=e.label,n=e.Icon,l=i.pathname===a;return c.a.createElement("div",{key:a,className:Object(p.a)("item",{active:l}),onClick:function(e){e.stopPropagation(),f(a)}},c.a.createElement(n,{size:20,className:"nav-icon"}),t)}))))},_=(t(56),A),w=(t(57),[{path:S.a.MUSIC_PLAYER,Comp:I},{path:S.a.VEDIO_BROWSER,Comp:O},{path:S.a.IG_FILTER,Comp:g},{path:S.a.SNAKE_GAME,Comp:N},{path:S.a.JIGSAW_GAME,Comp:k},{path:S.a.DINO_GAME,Comp:C}]),D=function(){var e=Object(n.useState)(!0),a=m()(e,2),t=a[0],l=a[1],o=Object(n.useState)(!1),i=m()(o,2),r=i[0],u=i[1],d=Object(E.f)().pathname,b=Object(n.useMemo)((function(){return"path-".concat(d.substr(1)||"home")}),[d]),f=Object(n.useCallback)((function(e){u(e)}),[]);return c.a.createElement("div",{className:Object(p.a)("app",s()({lite:!t},b,!0))},c.a.createElement(_,{isDarkTheme:t,setIsDarkTheme:l,isScrollDown:r}),c.a.createElement("div",{className:"content"},c.a.createElement(E.a,{path:S.a.HOME,exact:!0},c.a.createElement(v,{onScrollDown:f})),w.map((function(e){var a=e.path,t=e.Comp,n=e.exact,l=void 0!==n&&n;return c.a.createElement(E.a,{key:a,path:a,exact:l},c.a.createElement(t,null))}))))},P=(t(58),D);o.a.render(c.a.createElement(i.a,{basename:"/react-web-projects/"},c.a.createElement(P,null)),document.getElementById("root"))}},[[86,9,0]]]);