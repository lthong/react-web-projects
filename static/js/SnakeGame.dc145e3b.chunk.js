(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{104:function(e,t,n){"use strict";var r=n(13),c=n.n(r),a=n(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resizeCallback,n=void 0===t?function(){}:t,r=e.widthThreshold,u=void 0===r?530:r,i=Object(a.useState)(window.innerWidth<u),l=c()(i,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){var e=function(){s(window.innerWidth<u),n&&n()};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n,u]),{isMobile:o}}},105:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=window.innerWidth<530,c={topHeight:55,canvasW:window.innerWidth,canvasH:window.innerHeight-55}},115:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(93),c=n.n(r),a=n(13),u=n.n(a),i=n(1),l=n.n(i),o=n(9),s=function(e){var t=e.update,n=void 0===t?function(){}:t,r=e.delay,c=void 0===r?100:r,a=e.isStartInterval,u=Object(i.useRef)(n),l=Object(i.useRef)();Object(i.useEffect)((function(){u.current=n}),[n]),Object(i.useEffect)((function(){return a&&(l.current=setInterval(u.current,c)),function(){clearInterval(l.current)}}),[a,c])},f=n(104),b=n(105).b?240:360,d=b-20,v={ArrowUp:{x:0,y:-20,invalidKey:"ArrowDown"},ArrowDown:{x:0,y:20,invalidKey:"ArrowUp"},ArrowLeft:{x:-20,y:0,invalidKey:"ArrowRight"},ArrowRight:{x:20,y:0,invalidKey:"ArrowLeft"}},m=Object.keys(v),w="INIT",y="START",k="PAUSE",E="END",O=b/2,j=Array(3).fill(null).map((function(e,t){var n=v.ArrowUp;return{x:O+n.x*t,y:O-n.y*t}})),C=function(){return 20*Math.floor(Math.random()*(b/20))},h=function e(t){var n={x:C(),y:C()};return[n.x,n.y].some((function(e){return[0,d].includes(e)}))||(null==t?void 0:t.some((function(e){var t=e.x,r=e.y;return t===n.x&&r===n.y})))?e(t):n},x=n(12),p=n(102),N=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(j),n=Object(i.useRef)("ArrowUp"),r=Object(i.useRef)(h(j)),a=Object(i.useState)(0),O=u()(a,2),C=O[0],N=O[1],A=Object(i.useState)(w),g=u()(A,2),R=g[0],S=g[1],L=Object(f.a)().isMobile,U=Object(i.useCallback)((function(){var t=e.current,n=t.getContext("2d");n.fillStyle="black",n.fillRect(0,0,t.width,t.height)}),[]),I=Object(i.useCallback)((function(){var n=e.current.getContext("2d");n.fillStyle="lime",t.current.forEach((function(e){var t=e.x,r=e.y;n.fillRect(t,r,19,19)}))}),[]),K=Object(i.useCallback)((function(){var t=e.current.getContext("2d");t.fillStyle="red",t.fillRect(r.current.x,r.current.y,19,19)}),[]),M=Object(i.useCallback)((function(){var e=t.current[0];return{x:e.x+v[n.current].x,y:e.y+v[n.current].y}}),[]),W=Object(i.useCallback)((function(){var e,n,a,u=t.current[0],i=u.x,l=u.y,o=(n=(e={x:i,y:l}).x,a=e.y,n<0||a<0||n>d||a>d),s=t.current.some((function(e,t){var n=e.x,r=e.y;return 0!==t&&i===n&&l===r}));if((o||s)&&S(E),i===r.current.x&&l===r.current.y){N((function(e){return e+1}));var f=[M()].concat(c()(t.current));t.current=f,r.current=h(f)}}),[M]),D=Object(i.useCallback)((function(){var e=M(),n=t.current.filter((function(e,n){return n!==t.current.length-1}));t.current=[e].concat(c()(n))}),[M]),T=Object(i.useCallback)((function(){U(),D(),K(),I(),W()}),[U,D,I,K,W]),z=Object(i.useMemo)((function(){return R===y}),[R]);s({update:T,delay:150,isStartInterval:z});var H=Object(i.useCallback)((function(e){var t=e.key;m.includes(t)&&z&&v[n.current].invalidKey!==t&&(n.current=t)}),[z]);Object(i.useEffect)((function(){return window.addEventListener("keydown",H),function(){window.removeEventListener("keydown",H)}}),[H]);var P=Object(i.useCallback)((function(){S(y)}),[]),J=Object(i.useCallback)((function(){S(k)}),[]),G=Object(i.useCallback)((function(){S(w),U(),t.current=j,r.current=h(j),n.current="ArrowUp",N(0)}),[U]),q=Object(i.useCallback)((function(){H({key:"ArrowDown"})}),[H]),B=Object(i.useCallback)((function(){H({key:"ArrowLeft"})}),[H]),F=Object(i.useCallback)((function(){H({key:"ArrowRight"})}),[H]),Q=Object(i.useCallback)((function(){H({key:"ArrowUp"})}),[H]);return Object(i.useEffect)((function(){U(),I()}),[]),l.a.createElement("div",{className:"snake-game"},l.a.createElement("div",{className:"map-block"},l.a.createElement("div",{className:"top-info"},R===y&&l.a.createElement("div",null,"鍵盤方向鍵控制移動"),l.a.createElement("div",{className:"score"},"Score ",C)),l.a.createElement("canvas",{ref:e,width:b,height:b}),l.a.createElement("div",{className:Object(o.a)("status-btns",{"m-platform":L})},R!==E&&(R===y?l.a.createElement("button",{className:"ui red button",onClick:J},"Pause"):l.a.createElement("button",{className:"ui green button start",onClick:P},"Start")),R!==w&&l.a.createElement("button",{className:"ui grey button",onClick:G},"Reset")),l.a.createElement("div",{className:"direction-btns"},l.a.createElement("button",{className:"ui icon blue button down",onClick:q},l.a.createElement(x.d,null)),l.a.createElement("button",{className:"ui icon blue button left",onClick:B},l.a.createElement(x.e,null)),l.a.createElement("button",{className:"ui icon blue button right",onClick:F},l.a.createElement(x.f,null)),l.a.createElement("button",{className:"ui icon blue button up",onClick:Q},l.a.createElement(x.g,null)))),R===w&&l.a.createElement("div",{className:"status-info init"},l.a.createElement(p.a,{className:"icon"}),"Press Start",l.a.createElement(p.a,{className:"icon"})),R===E&&l.a.createElement("div",{className:"status-info"},"Game Over"))};n(115),t.default=N}}]);