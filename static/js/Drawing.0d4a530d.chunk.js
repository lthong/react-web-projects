(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var n=window.innerWidth<530,c={topHeight:55,canvasW:window.innerWidth,canvasH:window.innerHeight-55}},121:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a.n(n),l=a(1),i=a.n(l),o=a(9),u=a(8),r=a(105),s=r.a.topHeight,b=r.a.canvasW,d=r.a.canvasH,m={small:5,middle:15,large:25},v=function(){var e=Object(l.useRef)(null),t=Object(l.useState)(!1),a=c()(t,2),n=a[0],r=a[1],v=Object(l.useState)({}),f=c()(v,2),g=f[0],h=f[1],k=Object(l.useState)("#ffae00"),C=c()(k,2),j=C[0],O=C[1],p=Object(l.useState)(!0),w=c()(p,2),E=w[0],N=w[1],x=Object(l.useState)("middle"),y=c()(x,2),S=y[0],M=y[1],T=Object(l.useCallback)((function(e){r(!0),h({x:e.clientX,y:e.clientY-s})}),[]),X=Object(l.useCallback)((function(){r(!1)}),[]),Y=Object(l.useCallback)((function(){r(!1)}),[]),H=Object(l.useCallback)((function(t){var a=t.x,c=t.y;if(n&&e.current){var l=e.current.getContext("2d");l.strokeStyle=E?j:"rgb(232, 232, 232)",l.lineWidth=E?m[S]:40,l.lineCap="round",l.beginPath(),l.moveTo(g.x,g.y),l.lineTo(a,c),l.stroke(),h({x:a,y:c})}}),[n,g,j,S,E]),W=Object(l.useCallback)((function(e){H({x:e.clientX,y:e.clientY-s})}),[H]),D=Object(l.useCallback)((function(e){e.preventDefault();var t=e.targetTouches[0];return{clientX:t.clientX,clientY:t.clientY}}),[]),L=Object(l.useCallback)((function(e){r(!0);var t=D(e),a=t.clientX,n=t.clientY;h({x:a,y:n-s})}),[D]),R=Object(l.useCallback)((function(e){O(e.target.value)}),[]),z=Object(l.useCallback)((function(e){M(e.target.value)}),[]),J=Object(l.useCallback)((function(){e.current.getContext("2d").clearRect(0,0,b,d)}),[]),U=Object(l.useCallback)((function(){var t=document.createElement("a"),a=e.current;t.download="drawing.png",t.href=a.toDataURL("image/png"),t.click()}),[]);return i.a.createElement("div",{className:"drawing"},i.a.createElement("canvas",{className:"canvas",ref:e,width:b,height:d,onMouseDown:T,onMouseUp:X,onMouseLeave:Y,onMouseMove:W,onTouchStart:L,onTouchMove:function(e){var t=D(e),a=t.clientX,n=t.clientY;H({x:a,y:n-s})},onTouchEnd:Y}),i.a.createElement("div",{className:"tool-bar"},i.a.createElement("div",null,i.a.createElement(u.c,{className:Object(o.a)("icon",{active:!E}),size:35,onClick:function(){N(!1)}}),i.a.createElement(u.i,{className:Object(o.a)("icon",{active:E}),size:35,onClick:function(){N(!0)}}),i.a.createElement("input",{type:"color",className:"color-choose",onChange:R,value:j}),i.a.createElement("div",{className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("select",{className:"ui search dropdown",value:S,onChange:z},i.a.createElement("option",{value:"small"},"Small"),i.a.createElement("option",{value:"middle"},"Middle"),i.a.createElement("option",{value:"large"},"Large"))))),i.a.createElement("div",null,i.a.createElement("button",{className:"ui button btn",onClick:J},"clear"),i.a.createElement("button",{className:"ui button btn",onClick:U},"save"))))};a(121),t.default=v}}]);