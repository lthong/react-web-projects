(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){for(var t=e.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}},111:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=n(12),o=n.n(a),i=n(1),u=n.n(i),l=[n.p+"static/media/hakase.16003822.jpg",n.p+"static/media/dog.dd5afbd9.jpg",n.p+"static/media/penguin.e0038c4e.jpg"],s=n(103);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Array(4).fill(null),g=function(){return Object(s.a)(p.map((function(e,t){return t+1}))).reduce((function(e,t,n){return f(f({},e),{},c()({},n,t))}),{})};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(g()),n=o()(t,2),r=n[0],a=n[1],s=Object(i.useState)({}),b=o()(s,2),f=b[0],d=b[1],O=Object(i.useState)({}),v=o()(O,2),j=v[0],y=v[1],h=Object(i.useState)(0),x=o()(h,2),w=x[0],D=x[1],E=Object(i.useState)(!1),k=o()(E,2),I=k[0],P=k[1],N=Object(i.useState)({}),C=o()(N,2),S=C[0],M=C[1],T=Object(i.useCallback)((function(){a(g()),d({})}),[]),R=Object(i.useCallback)((function(){D((function(e){return e+1>=l.length?0:e+1})),T()}),[T]),B=Object(i.useCallback)((function(){var e=Object.values(f),t=4===e.length&&e.every((function(e,t){return e===Number(t)+1}));alert(t?"恭喜答對！":"加油！快完成了！"),t&&R()}),[f,R]),X=Object(i.useCallback)((function(){P((function(e){return!e}))}),[]);return u.a.createElement("div",{className:"jigsaw-game"},u.a.createElement("div",{className:"main-block"},u.a.createElement("div",{className:"jigsaw-block"},p.map((function(t,n){var o=S.isTouchMove&&S.boxIndex===n;return u.a.createElement(u.a.Fragment,{key:"originPiece-".concat(n)},u.a.createElement("div",{className:"box",style:o?{zIndex:2,position:"absolute",left:S.clientX,top:S.clientY}:{},onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),r[n]||("target"!==j.type?a((function(e){return m(m({},e),{},c()({},j.boxIndex,null))})):d((function(e){return m(m({},e),{},c()({},j.boxIndex,null))})),a((function(e){return m(m({},e),{},c()({},n,j.pieceIndex))})))}},r[n]&&u.a.createElement("div",{className:"piece order-".concat(r[n]),style:{backgroundImage:"url(".concat(l[w],")")},onDrag:function(e){e.preventDefault(),y({boxIndex:n,pieceIndex:r[n],type:"origin"})},onTouchMove:function(e){e.preventDefault();var t=e.targetTouches[0],c=t.target.getBoundingClientRect(),a=c.width,o=c.height;M({isTouchMove:!0,clientX:t.clientX-a/2,clientY:t.clientY-o-30,boxIndex:n,pieceIndex:r[n],type:"origin"})},onTouchEnd:function(t){t.preventDefault();var n=t.target.getBoundingClientRect(),r=n.left,o=n.right,i=n.top,u=n.bottom,l=e.current.getBoundingClientRect(),s=l.left,b=l.right,f=l.top,p=l.bottom,g=l.width,O=l.height/2+s,v=g/2+f;if(i>=f-10&&u<=p+10&&r>=s-10&&o<=b+10){var j=S.boxIndex,y=S.pieceIndex,h=null;u<=v+10&&o<=O+10?h=0:u<v+10&&r>O-10?h=1:i>=v-10&&o<=O+10?h=2:i>v-10&&r>O-10&&(h=3),"number"==typeof h&&(a((function(e){var t=m({},e);return delete t[j],t})),d((function(e){return e[h]?e:m(m({},e),{},c()({},h,y))})))}M({isTouchMove:!1})},draggable:!0})),o&&u.a.createElement("div",{className:"box"}))}))),u.a.createElement("div",{className:"jigsaw-block",ref:e},p.map((function(e,t){return u.a.createElement("div",{key:"targetPiece-".concat(t),className:"box",onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),f[t]||("target"!==j.type?a((function(e){return m(m({},e),{},c()({},j.boxIndex,null))})):d((function(e){return m(m({},e),{},c()({},j.boxIndex,null))})),d((function(e){return m(m({},e),{},c()({},t,j.pieceIndex))})))}},f[t]&&u.a.createElement("div",{className:"target order-".concat(f[t]),style:{backgroundImage:"url(".concat(l[w],")")},onDrag:function(e){e.preventDefault(),y({boxIndex:t,pieceIndex:f[t],type:"target"})},draggable:!0}))})))),u.a.createElement("div",{className:"actions"},u.a.createElement("button",{className:"ui orange button",onClick:X},"提示"),u.a.createElement("button",{className:"ui primary button",onClick:T},"重來"),u.a.createElement("button",{className:"ui green button",onClick:R},"換題"),u.a.createElement("button",{className:"ui teal button",onClick:B},"完成")),I&&u.a.createElement("div",{className:"hint-modal",onClick:function(e){"hint-img"!==e.target.id&&P(!1)}},u.a.createElement("img",{src:l[w],alt:"hint",id:"hint-img"})))};n(111),t.default=O}}]);