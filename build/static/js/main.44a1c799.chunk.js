(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{31:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(22),r=c.n(n),s=c(14),i=c(3),l=(c(31),c(1)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)(s.b,{to:"/",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{end:!0,style:function(e){return{color:e.isActive?"#9F0013":""}},to:"/",children:"Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{end:!0,style:function(e){return{color:e.isActive?"#9F0013":""}},to:"/comics",children:"Comics"})})]})})]})},j=c(4),u=(c(34),c(5)),b=c.n(u),m=c(6),d=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(j.a)(r,2),i=s[0],l=s[1];return{loading:c,request:Object(a.useCallback)(function(){var e=Object(m.a)(b.a.mark((function e(t){var c,a,r,s,i,o=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,". \n Status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,n(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(a.useCallback)((function(){l(null)}),[])}},h=function(){var e=d(),t=e.loading,c=e.request,a=e.error,n=e.clearError,r="https://gateway.marvel.com:443/v1/public/",s="apikey=79cae34e03476628147b9cbd9670c345",i=300,l=function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:i,e.next=3,c("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(s));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(j));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(r,"characters/").concat(t,"?").concat(s));case 2:return a=e.sent,e.abrupt("return",j(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t;return e.description.length<2?t="Description unavailable.":e.description.length>35&&(t=e.description.slice(0,148)+"..."),{id:e.id,name:e.name,description:t,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,9)}},u=function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:i,e.next=3,c("".concat(r,"comics?limit=8&offset=").concat(t,"&").concat(s));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var t;return t=0===e.prices[0].price?"NOT AVAILABLE":e.prices[0].price+"$",{name:e.title,price:t,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension)}};return{loading:t,error:a,getAllCharacters:l,getCharacter:o,clearError:n,getAllComics:u}},O=c.p+"static/media/mjolnir.61f31e18.png",f=function(){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"1",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=c.p+"static/media/error.42292aa1.gif",p=function(){return Object(l.jsx)("img",{src:x,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"Error"})},v=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},g=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],r=h(),s=r.loading,i=r.error,o=r.getCharacter,u=r.clearError;Object(a.useEffect)((function(){b();var e=setInterval(b,6e4);return function(){clearInterval(e)}}),[]);var b=function(){u();var e=Math.floor(400*Math.random()+1011e3);o(e).then(m)},m=function(e){n(e)},d=i?Object(l.jsx)(p,{}):null,x=s?Object(l.jsx)(f,{}):null,g=s||i?null:Object(l.jsx)(v,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[d,x,g,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",children:Object(l.jsx)("div",{className:"inner",onClick:b,children:"try it"})}),Object(l.jsx)("img",{src:O,alt:"mjolnir",className:"randomchar__decoration"})]})]})},_=c(7),y=(c(35),function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(300),m=Object(j.a)(b,2),d=m[0],O=m[1],f=Object(a.useState)(!1),x=Object(j.a)(f,2),p=x[0],v=x[1],g=Object(a.useState)(null),y=Object(j.a)(g,2),N=y[0],k=y[1],C=h(),w=(C.loading,C.error,C.getAllCharacters);Object(a.useEffect)((function(){T()}),[]);var T=function(e){u(!0),w(e).then(F)},F=function(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(_.a)(t),Object(_.a)(e))})),u((function(e){return!1})),O((function(e){return e+9})),v((function(e){return t}))},S=n.map((function(t){var c=t.name,a=t.thumbnail,n=t.id,r={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(r={objectFit:"contain"});var s=N===n?"char__item char__item_selected":"char__item";return Object(l.jsxs)("li",{tabIndex:"0",className:s,onFocus:function(){e.onCharSelected(n),k(n)},children:[Object(l.jsx)("img",{src:a,alt:c,style:r}),Object(l.jsx)("div",{className:"char__name",children:c})]},n)}));return Object(l.jsxs)("div",{className:"char__list",children:[Object(l.jsx)("ul",{className:"char__grid",children:S}),Object(l.jsx)("button",{style:{display:p?"none":"block"},className:"button button__main button__long",disabled:o,onClick:function(){T(d)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),N=(c(36),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),k=(c(37),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.wiki,s=t.homepage,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:s,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:r,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length<1?"There are no comics available for this character.":null,i.map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),C=function(e){var t=Object(a.useState)(null),c=Object(j.a)(t,2),n=c[0],r=c[1],s=h(),i=s.loading,o=s.error,u=s.getCharacter,b=s.clearError;Object(a.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(b(),u(t).then(d))},d=function(e){r(e)},O=n||i||o?null:Object(l.jsx)(N,{}),x=o?Object(l.jsx)(p,{}):null,v=i?Object(l.jsx)(f,{}):null,g=i||o||!n?null:Object(l.jsx)(k,{char:n});return Object(l.jsxs)("div",{className:"char__info",children:[O,x,v,g]})},w=c(8),T=c(10),F=c(11),S=c(12),A=function(e){Object(F.a)(c,e);var t=Object(S.a)(c);function c(){var e;Object(w.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(T.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(p,{}):this.props.children}}]),c}(a.Component),E=c.p+"static/media/vision.067d4ae1.png",I=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(y,{onCharSelected:function(e){n(e)}}),Object(l.jsx)(A,{children:Object(l.jsx)(C,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})},M=(c(38),c.p+"static/media/Avengers.4065c8f9.png"),R=c.p+"static/media/Avengers_logo.9eaf2193.png",B=function(){return Object(l.jsxs)("div",{className:"app__banner",children:[Object(l.jsx)("img",{src:M,alt:"Avengers"}),Object(l.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(l.jsx)("br",{}),"Stay tuned!"]}),Object(l.jsx)("img",{src:R,alt:"Avengers logo"})]})},D=(c(39),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(300),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(!1),b=Object(j.a)(u,2),m=b[0],d=b[1],O=h().getAllComics;Object(a.useEffect)((function(){f()}),[]);var f=function(e){d(!0),O(e).then(x)},x=function(e){n((function(t){return[].concat(Object(_.a)(t),Object(_.a)(e))})),o((function(e){return e+8})),d(!1)},p=c.map((function(e,t){var c=e.name,a=e.price,n=e.thumbnail;return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)("a",{href:"#",children:[Object(l.jsx)("img",{src:n,alt:c,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:c}),Object(l.jsx)("div",{className:"comics__item-price",children:a})]})},t)}));return Object(l.jsxs)("div",{className:"comics__list",children:[Object(l.jsx)("ul",{className:"comics__grid",children:p}),Object(l.jsx)("button",{className:"button button__main button__long",disabled:m,onClick:function(){f(i)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),q=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B,{}),Object(l.jsx)(D,{})]})},J=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)("main",{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(I,{})}),Object(l.jsx)(i.a,{path:"/comics",element:Object(l.jsx)(q,{})})]})})]})})};c(40);r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(J,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.44a1c799.chunk.js.map