(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{91:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(85),l=n.n(a),c=n(86),i=n.n(c),o=n(8),r=n.n(o),u=n(1),s=n.n(u),d=n(7),v=n(87),m=n.n(v),b=n(34),p=n(88),f=n.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:32,key:"AIzaSyC1w5FVpQT9-VVHGbCaOJkBuHIbCrjgoIg"}});function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=["流行音樂","美食介紹","綜藝節目","旅遊頻道","可愛寵物","居家健身","switch遊戲"],y=function(){var e,t,n=Object(u.useRef)(null),a=Object(u.useRef)(null),c=Object(u.useState)(!1),i=r()(c,2),o=i[0],v=i[1],p=Object(u.useState)(!1),O=r()(p,2),y=O[0],h=O[1],k=Object(u.useState)(!1),w=r()(k,2),E=w[0],C=w[1],N=Object(u.useState)("搖曳露營"),S=r()(N,2),P=S[0],x=S[1],I=Object(u.useState)(P),q=r()(I,2),T=q[0],D=q[1],R=Object(u.useState)([]),A=r()(R,2),J=A[0],V=A[1],z=Object(u.useState)(null),H=r()(z,2),L=H[0],B=H[1],F=Object(u.useState)(null),G=r()(F,2),K=G[0],M=G[1],Q=Object(u.useCallback)((function(e){x(e.target.value)}),[]),U=Object(u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=String((null==e?void 0:e.q)||"").trim();!o&&t&&(v(!0),D(t),f.get("search",{params:g({order:"viewCount",relevanceLanguage:"zh-TW"},e)}).then((function(t){var n,a,c=(null==t||null===(n=t.data)||void 0===n?void 0:n.items)||[];(null==e?void 0:e.pageToken)?V((function(e){return[].concat(l()(e),l()(c))})):V(c),B(null==t||null===(a=t.data)||void 0===a?void 0:a.nextPageToken),C(!1)})).catch((function(e){var t,n,a,l=null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n||null===(a=n.error)||void 0===a?void 0:a.message;alert("API failed!\n".concat(l)),C(!0)})).finally((function(){v(!1)})))}),[o]),W=Object(u.useCallback)((function(){o||x("")}),[o]),X=Object(u.useCallback)((function(e){13===e.keyCode&&U({q:P})}),[U,P]),Y=Object(u.useCallback)((function(e){x(e),U({q:e})}),[U]),Z=Object(u.useCallback)((function(e){var t,l;e&&(e.getAttribute("data-vedio-index")===String(J.length-1)&&(null===(t=a.current)||void 0===t||t.disconnect(),a.current=new IntersectionObserver((function(e){e[0].isIntersecting&&!E&&(n.current=setTimeout((function(){U({q:T,pageToken:L})}),600))}),{threshold:1,rootMargin:"0px 0px -70px 0px"}),null===(l=a.current)||void 0===l||l.observe(e)));return null}),[J,U,T,L,E]);return Object(u.useEffect)((function(){return U({q:P}),function(){clearTimeout(n.current)}}),[]),s.a.createElement("div",{className:"vedio-browser"},s.a.createElement("div",{className:"search-bar"},s.a.createElement("div",{className:"ui action input left icon fluid"},s.a.createElement("i",{className:"search icon"}),s.a.createElement("input",{type:"text",placeholder:"Search...",value:P,onChange:Q,onKeyDown:X}),s.a.createElement("i",{className:"times circle outline icon closed",onClick:W}),s.a.createElement("button",{className:Object(d.a)("ui icon button",{loading:o,disabled:o}),onClick:function(){U({q:P})}},"搜尋")),s.a.createElement("div",{className:"quick-search"},j.map((function(e){return s.a.createElement("button",{key:e,className:"keyword ui grey tiny button",onClick:function(){Y(e)}},e)})))),s.a.createElement("div",{className:"vedio-items"},null==J?void 0:J.map((function(e,t){var n,a,l,c,i,o;return s.a.createElement("div",{ref:Z,"data-vedio-index":t,className:"item",key:"vedio-".concat(t),onClick:function(){M(e),h(!0)}},s.a.createElement("img",{src:null==e||null===(n=e.snippet)||void 0===n||null===(a=n.thumbnails)||void 0===a||null===(l=a.medium)||void 0===l?void 0:l.url,alt:null==e||null===(c=e.snippet)||void 0===c?void 0:c.title}),s.a.createElement("div",{className:"title"},null==e||null===(i=e.snippet)||void 0===i?void 0:i.title),s.a.createElement("div",{className:"tooltip"},null==e||null===(o=e.snippet)||void 0===o?void 0:o.title))}))),s.a.createElement(b.a,null),K&&s.a.createElement("div",{className:"vedio-modal",onClick:function(e){"vedio-player"!==e.target.id&&M(null)}},s.a.createElement("div",{className:"vedio-player",id:"vedio-player"},s.a.createElement("i",{className:"times circle icon closed",onClick:function(){M(null)}}),y&&s.a.createElement(b.a,null),(null==K||null===(e=K.id)||void 0===e?void 0:e.videoId)&&s.a.createElement(m.a,{width:"100%",height:"100%",style:{display:y?"none":"block"},url:"https://www.youtube.com/embed/".concat(null==K||null===(t=K.id)||void 0===t?void 0:t.videoId),onReady:function(){h(!1)},controls:!0}))))};n(91),t.default=y}}]);