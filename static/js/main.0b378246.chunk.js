(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{229:function(t,n,e){"use strict";e.r(n);var r,o,i,a,c,s,l,d=e(0),u=e.n(d),m=e(88),b=e.n(m),f=e(25),j=e.n(f),p=e(59),h=e(56),g=e(7),O=e(1),x=Object(d.createContext)({}),v=function(t){var n=t.children,e=Object(d.useState)([]),r=Object(g.a)(e,2),o=r[0],i=r[1],a=Object(d.useState)("https://pokeapi.co/api/v2/pokemon"),c=Object(g.a)(a,2),s=c[0],l=c[1],u=Object(d.useState)(!1),m=Object(g.a)(u,2),b=m[0],f=m[1],v=Object(d.useRef)(null),k=Object(d.useCallback)(Object(h.a)(j.a.mark((function t(){var n,e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(s);case 3:if(404!==(n=t.sent).status){t.next=6;break}throw new Error("Network Error");case 6:return t.next=8,n.json();case 8:e=t.sent,v.current=e.next,i((function(t){return[].concat(Object(p.a)(t),Object(p.a)(e.results))})),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0),f(!0);case 17:case"end":return t.stop()}}),t,null,[[0,13]])}))),[s]),w=Object(d.useCallback)((function(){return l(v.current||"")}),[]);Object(d.useEffect)((function(){s&&k()}),[s,k]);var y=Object(d.useState)({}),C=Object(g.a)(y,2),P=C[0],E=C[1],z=Object(d.useCallback)(function(){var t=Object(h.a)(j.a.mark((function t(n){var e,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n));case 3:if(404!==(e=t.sent).status){t.next=6;break}throw new Error("Pokemon not found");case 6:return t.next=8,e.json();case 8:r=t.sent,E(r),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(0),new Error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(n){return t.apply(this,arguments)}}(),[]),S=Object(d.useState)(!1),A=Object(g.a)(S,2),F=A[0],I=A[1],N=Object(d.useCallback)((function(t){return I(t)}),[]);return Object(O.jsx)(x.Provider,{value:{pokemonList:o,page:s,currentPokemon:P,getPokemon:k,setPage:w,getPokemonById:z,pokemonNotFoundError:F,setPokemonError:N,isNetworkError:b},children:n})},k=e(92),w=e(4),y=e(2),C=e(3),P=(Object(C.d)(r||(r=Object(y.a)(["\n  from {\n    transform: scale3d(0, 0, 0);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"]))),Object(C.d)(o||(o=Object(y.a)(["\n  from {\n    transform: translate3d(0, 100vh, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])))),E=Object(C.d)(a||(a=Object(y.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),z=Object(C.d)(c||(c=Object(y.a)(["\n  from {\n    transform: translate3d(0, 1rem, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),S=C.c.div(l||(l=Object(y.a)(["\n\tbackground-color: ",";\n\tborder-radius: 0.5rem;\n\tfont-size: 1.6rem;\n\tmax-width: 120rem;\n\tmargin: 0 auto;\n\tpadding: 1rem 2.5rem;\n\ttext-align: center;\n\twidth: 100%;\n\tposition: fixed;\n\ttop: 1rem;\n\tleft: 0;\n\tright: 0;\n\tz-index: 100;\n\t",";\n"])),(function(t){return"success"===t.type?"rgb(75, 192, 122)":"#D50000"}),(function(){return Object(C.b)(s||(s=Object(y.a)(["\n\t\tanimation: "," 0.3s ease forwards, "," 0.3s ease forwards;\n\t"])),E,z)}));var A,F=function(t){var n=t.open,e=t.type,r=void 0===e?"success":e,o=t.text,i=t.autoHide,a=void 0!==i&&i,c=Object(d.useState)(n),s=Object(g.a)(c,2),l=s[0],u=s[1];return Object(d.useEffect)((function(){a&&setTimeout((function(){u(!1)}),2800)}),[a]),l?Object(O.jsx)(S,{type:r,children:o}):null},I=C.c.div(A||(A=Object(y.a)(["\n\tmargin: 0 auto;\n\tmax-width: 120rem;\n\tpadding: 0 2rem;\n\twidth: 100%;\n"])));var N,B=function(t){var n=t.children;return Object(O.jsx)(I,{children:n})},L=e.p+"static/media/pokeball.0f112db8.svg",D=C.c.header(N||(N=Object(y.a)(["\n\tposition: relative;\n\theight: 20rem;\n\tdisplay: flex;\n\talign-items: center;\n\timg {\n\t\tdisplay: block;\n\t\theight: 24.8rem;\n\t\twidth: 24.8rem;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -1rem;\n\t\tz-index: -1;\n\t}\n\th1 {\n\t\tfont-size: 3rem;\n\t\tletter-spacing: 1px;\n\t}\n"])));var W,U,T,M=function(){return Object(O.jsx)(D,{children:Object(O.jsxs)(B,{children:[Object(O.jsx)("img",{src:L,alt:"pokeball"}),Object(O.jsx)("h1",{children:"Pokedex"})]})})},H=Object(C.d)(W||(W=Object(y.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),R=C.c.div(U||(U=Object(y.a)(["\n\tborder-top: 0.2rem solid #fff;\n\tborder-radius: 50%;\n\theight: 2.5rem;\n\tdisplay: ",";\n\twidth: 2.5rem;\n\tmargin-left: ",";\n\tmargin-right: ",";\n\tanimation: "," 1s linear infinite;\n\tmargin-top: ",";\n"])),(function(t){var n;return(null===(n=t.className)||void 0===n?void 0:n.includes("visible"))?"block":"none"}),(function(t){return"right"===t.align||"center"===t.align?"auto":0}),(function(t){return"left"===t.align||"center"===t.align?"auto":0}),H,(function(t){var n;return(null===(n=t.className)||void 0===n?void 0:n.includes("mt"))?"4rem":"0"})),_=Object(d.forwardRef)((function(t,n){var e=t.align,r=t.className,o=void 0===r?"visible":r;return Object(O.jsx)("div",{ref:n,role:"status","aria-label":"Loading...",children:Object(O.jsx)(R,{className:o,align:e})})})),J=e(38);function X(t){return(299*t.r+587*t.g+114*t.b)/1e3}function $(t){if(t&&void 0!==t&&""!==t){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:void 0}}function G(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128;if(void 0===t)return"#000";var e=$(t);return void 0===e||X(e)>=n?"#000":"#fff"}var K=C.c.li(T||(T=Object(y.a)(["\n\tbackground-color: ",";\n\tborder-radius: 0.5rem;\n\tcursor: pointer;\n\theight: ",";\n\tpadding: 1.5rem 0.4rem;\n\tpadding-right: ",";\n\twidth: 100%;\n\ttransition: background-color 0.5s ease, height 0.5s ease;\n\ta {\n\t\ttext-decoration: none;\n\t}\n\tp {\n\t\tcolor: ",";\n\t\tfont-size: 2rem;\n\t\tfont-weight: 500;\n\t\tletter-spacing: 0.5px;\n\t\tmargin: 0 0 0rem 1rem;\n\t\ttext-transform: capitalize;\n\t}\n\timg {\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\tmargin-left: auto;\n\t\tmax-width: 100%;\n\t\tobject-fit: cover;\n\t\ttransform: ",";\n\t\ttransition: transform 0.3s 0.5s ease;\n\t}\n\t&:hover img {\n\t\ttransform: translate3d(-1.5rem, 0, 0);\n\t\ttransition-delay: 0s;\n\t}\n"])),(function(t){return t.backgroundColor}),(function(t){return t.isLoading?"10rem":"20rem"}),(function(t){return t.isLoading?"1rem":"0.4rem"}),(function(t){return G(t.backgroundColor)}),(function(t){return t.isLoading?"scale3d(0, 0, 0)":"scale3d(1, 1, 1)"}));var q,Q=function(t){var n=t.pokemonId,e=t.name,r=Object(d.useState)("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png")),o=Object(g.a)(r,2),i=o[0],a=o[1],c=Object(J.usePalette)(i),s=c.data,l=c.loading,u=c.error,m=Object(d.useState)(!0),b=Object(g.a)(m,2),f=b[0],j=b[1],p=Object(w.g)();return Object(d.useEffect)((function(){u&&a("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"))}),[u,n]),Object(O.jsxs)(K,{backgroundColor:s.muted||"gray",isLoading:f,onClick:function(){p.push("/pokemon/".concat(n),{name:e,bgc:s.muted,artworkUrl:i})},children:[Object(O.jsx)("p",{children:e}),l?Object(O.jsx)(_,{align:"right"}):!l&&u?Object(O.jsx)("p",{children:"Image not found"}):Object(O.jsx)("img",{src:i,alt:"Pok\xe9mon",onLoad:function(){j(!1)}})]})},V=e(230),Y=C.c.ul(q||(q=Object(y.a)(["\n\tlist-style: none;\n\tmargin: 0;\n\tmargin-bottom: 2rem;\n\tpadding: 0;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n\tgrid-gap: 2rem 0.6rem;\n"])));var Z=function(){var t=Object(d.useContext)(x),n=t.isNetworkError,e=t.pokemonList,r=t.setPage,o=t.page,i=Object(d.useRef)(null);return Object(d.useEffect)((function(){var t=new window.IntersectionObserver((function(t,n){t[0].isIntersecting&&r()}),{root:null,rootMargin:"10px",threshold:1});i.current&&t.observe(i.current)}),[r]),Object(O.jsx)(B,{children:n?Object(O.jsxs)("div",{className:"network-error",children:[Object(O.jsx)("h1",{children:"Oops... something went wrong"}),Object(O.jsx)("div",{children:Object(O.jsx)(V.a,{size:72,color:"currentColor"})}),Object(O.jsx)("button",{onClick:function(){return window.location.reload()},children:"Try reload the page"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Y,{children:e.map((function(t){var n=t.name,e=t.url;return Object(O.jsx)(Q,{name:n,pokemonId:+e.split("/")[6]},n)}))}),Object(O.jsx)(_,{ref:i,align:"center",className:o?"visible":"hidden"})]})})};var tt,nt=function(){var t=Object(d.useContext)(x).pokemonNotFoundError;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(F,{open:t,type:"error",text:"Pok\xe9mon not found",autoHide:!0}),Object(O.jsx)(M,{}),Object(O.jsx)(Z,{})]})};var et=C.c.img.attrs((function(t){return{src:t.src,alt:t.alt}}))(tt||(tt=Object(y.a)(["\n\tdisplay: block;\n\theight: 30rem;\n\tmargin: 0 auto;\n\tobject-fit: contain;\n\tposition: relative;\n\twidth: 30rem;\n\ttransition: opacity 0.3s ease;\n"])));var rt,ot=function(t){var n=t.image,e=t.name;return Object(O.jsx)(et,{alt:e,src:n})},it=C.c.div(rt||(rt=Object(y.a)(["\n\tbackground-color: ",";\n\theight: 100%;\n\twidth: 100%;\n\tclip-path: polygon(0% 0%, 100% 0%, 100% 45%, 0% 100%);\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\ttransition: background-color 0.5s ease;\n"])),(function(t){return t.bgc}));var at,ct=function(t){var n=t.bgc;return Object(O.jsx)(it,{bgc:n})},st=e(231),lt=C.c.header(at||(at=Object(y.a)(["\n\tpadding: 1.5rem 0;\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbutton {\n\t\tbackground: none;\n\t\tborder: none;\n\t\tcolor: inherit;\n\t\tcursor: pointer;\n\t\tmargin: 0;\n\t\tpadding: 0.5rem;\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\ttransition: transform 0.3s ease;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t\t&:hover,\n\t\t&:focus {\n\t\t\ttransform: translate3d(-0.5rem, 0, 0);\n\t\t}\n\t}\n\tspan {\n\t\tfont-size: 2rem;\n\t\tfont-weight: 900;\n\t\tletter-spacing: 0.3px;\n\t\tmargin-left: -4rem;\n\t}\n"])));var dt,ut=function(t){var n=t.id,e=Object(w.g)();return Object(O.jsxs)(lt,{children:[Object(O.jsx)("button",{onClick:function(){if(2===e.length)return e.replace("/");e.push("/")},children:Object(O.jsx)(st.a,{size:32,color:"currentColor"})}),Object(O.jsxs)("span",{children:["#",n<10?"00"+n:n<100?"0"+n:n]}),Object(O.jsx)("div",{})]})},mt=e(232),bt=e(233),ft=C.c.div(dt||(dt=Object(y.a)(["\n\tcolor: ",";\n\theight: 35rem;\n\tposition: relative;\n\ttransition: color 0.5s ease;\n\t> div > button {\n\t\tbackground: rgba(255, 255, 255, 0.45);\n\t\tborder: none;\n\t\tborder-radius: 50%;\n\t\tcolor: #000;\n\t\tcursor: pointer;\n\t\theight: 3.6rem;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 3.6rem;\n\t\tposition: absolute;\n\t\ttop: calc(50% - 1.8rem);\n\t\tz-index: 1;\n\t\ttransition: transform 0.3s ease;\n\t\t&:first-child {\n\t\t\tleft: 1rem;\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\ttransform: translateX(-0.5rem);\n\t\t\t}\n\t\t}\n\t\t&:last-child {\n\t\t\tright: 1rem;\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\ttransform: translateX(0.5rem);\n\t\t\t}\n\t\t}\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t\t&:disabled {\n\t\t\tdisplay: none;\n\t\t}\n\t\t@media (min-width: 75em) {\n\t\t\t&:first-child {\n\t\t\t\tmargin-left: calc((100vw - 120rem) / 2);\n\t\t\t}\n\t\t\t&:last-child {\n\t\t\t\tmargin-right: calc((100vw - 120rem) / 2);\n\t\t\t}\n\t\t}\n\t}\n\t.pos-r {\n\t\tposition: relative;\n\t}\n"])),(function(t){return t.color}));var jt,pt=function(t){var n=t.children,e=t.color,r=Object(w.g)(),o=+Object(w.h)().pathname.split("/")[2];return Object(O.jsx)(ft,{color:e,children:Object(O.jsxs)(B,{children:[Object(O.jsx)("button",{title:"Prev",onClick:function(){return r.push("/pokemon/".concat(o-1))},disabled:1===o,children:Object(O.jsx)(mt.a,{size:24,color:"currentColor"})}),n,Object(O.jsx)("button",{title:"Next",children:Object(O.jsx)(bt.a,{size:24,color:"currentColor",onClick:function(){return r.push("/pokemon/".concat(o+1))}})})]})})},ht=new Map([["normal","#A8A77A"],["fire","#EE8130"],["water","#6390F0"],["electric","#F7D02C"],["grass","#7AC74C"],["ice","#96D9D6"],["fighting","#C22E28"],["poison","#A33EA1"],["ground","#E2BF65"],["flying","#A98FF3"],["psychic","#F95587"],["bug","#A6B91A"],["rock","#B6A136"],["ghost","#735797"],["dragon","#6F35FC"],["dark","#705746"],["steel","#B7B7CE"],["fairy","#D685AD"]]),gt=new Map([["hp","HP"],["attack","Attack"],["defense","Defense"],["special-attack","Sp. Atk"],["special-defense","Sp. Def"],["speed","Speed"]]),Ot=C.c.ul(jt||(jt=Object(y.a)(["\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\t@media (min-width: 56.25em) {\n\t\tjustify-content: center;\n\t}\n\tli {\n\t\tflex: 0.45;\n\t\tborder-radius: 2rem;\n\t\tpadding: 0.8rem;\n\t\ttext-align: center;\n\t\tuser-select: none;\n\t\ttext-transform: capitalize;\n\t\t@media (min-width: 56.25em) {\n\t\t\tflex: 0.2;\n\t\t\t&:not(:last-child) {\n\t\t\t\tmargin-right: 1rem;\n\t\t\t}\n\t\t}\n\t}\n"])));var xt,vt=function(t){var n=t.typeList;return Object(O.jsx)(Ot,{children:n.map((function(t){return Object(O.jsx)("li",{style:{backgroundColor:ht.get(t.type.name)},children:t.type.name},t.type.name)}))})},kt=C.c.div(xt||(xt=Object(y.a)(["\n\t@media (min-width: 56.25em) {\n\t\tmargin-top: 4rem;\n\t}\n\th2 {\n\t\ttext-align: center;\n\t\t@media (min-width: 56.25em) {\n\t\t\tfont-size: 3.2rem;\n\t\t}\n\t}\n\tul {\n\t\tlist-style: none;\n\t\tmax-width: 90rem;\n\t\tmargin: 0 auto;\n\t\tpadding: 0;\n\t}\n\tli {\n\t\tmargin-bottom: 2rem;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 35% 1fr;\n\t\tgap: 2rem;\n\t\talign-items: center;\n\t\t@media (min-width: 56.25em) {\n\t\t\tgrid-template-columns: 30% 1fr;\n\t\t\tgap: 4rem;\n\t\t}\n\t\tdiv:first-child {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\tdiv:last-child {\n\t\t\tbackground-color: #f4f5f4;\n\t\t\tborder-radius: 0.4rem;\n\t\t\theight: 0.4rem;\n\t\t\toverflow: hidden;\n\t\t\tdiv {\n\t\t\t\tborder-radius: 0.4rem;\n\t\t\t\twidth: 0;\n\t\t\t\ttransition: width 0.3s ease;\n\t\t\t}\n\t\t}\n\t}\n"])));var wt,yt=function(t){var n=t.stats;return Object(O.jsxs)(kt,{children:[Object(O.jsx)("h2",{children:"Base Stats"}),Object(O.jsx)("ul",{children:n.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:gt.get(t.stat.name)})," ",t.base_stat]}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{style:{backgroundColor:t.base_stat<50?"#FB6C6C":"#4BC07A",width:"".concat(t.base_stat,"%")}})})]},t.stat.name)}))})]})},Ct=C.c.div(wt||(wt=Object(y.a)(["\n\tcolor: #fff;\n\t@media (min-width: 56.25em) {\n\t\tmargin-top: 6rem;\n\t}\n\t> div:first-of-type {\n\t\tmargin-top: 3rem;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tdiv {\n\t\t\ttext-align: center;\n\t\t\tspan {\n\t\t\t\t@media (min-width: 56.25em) {\n\t\t\t\t\tfont-size: 2.4rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tp {\n\t\t\tfont-size: 3rem;\n\t\t\tfont-weight: 700;\n\t\t\tmargin: 0;\n\t\t\tspan {\n\t\t\t\tfont-size: 1.8rem;\n\t\t\t}\n\t\t\t@media (min-width: 56.25em) {\n\t\t\t\tfont-size: 4.5rem;\n\t\t\t\tspan {\n\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));var Pt,Et=function(t){var n=t.pokemon;return Object(O.jsx)(B,{children:Object(O.jsxs)(Ct,{children:[Object(O.jsx)(vt,{typeList:n.types}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:n.order}),Object(O.jsx)("span",{children:"Order"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[n.height/10," ",Object(O.jsx)("span",{children:"M"})]}),Object(O.jsx)("span",{children:"Height"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[n.weight/10," ",Object(O.jsx)("span",{children:"KG"})]}),Object(O.jsx)("span",{children:"Weight"})]})]}),Object(O.jsx)(yt,{stats:n.stats})]})})},zt=C.c.div(Pt||(Pt=Object(y.a)(["\n\t",";\n\n\th1 {\n\t\tfont-size: 3.6rem;\n\t\tletter-spacing: 1.5px;\n\t\tmargin-top: 4rem;\n\t\ttext-align: center;\n\t\ttext-transform: capitalize;\n\t\t@media (min-width: 56.25em) {\n\t\t\tfont-size: 5.2rem;\n\t\t}\n\t}\n"])),(function(){return Object(C.b)(i||(i=Object(y.a)(["\n\t\tanimation: "," 0.5s ease forwards;\n\t"])),P)}));var St=function(t){var n=t.match,e=t.location,r=t.history,o=n.params.id,i=function(t,n){var e=Object(d.useState)("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png")),r=Object(g.a)(e,2),o=r[0],i=r[1],a=Object(J.usePalette)(o),c=a.data,s=a.error;return Object(d.useEffect)((function(){s&&i("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"))}),[s,n]),Object(d.useEffect)((function(){i("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png"))}),[n]),t||{name:null,artworkUrl:o,bgc:c.muted||"gray"}}(e.state,o),a=i.name,c=i.bgc,s=i.artworkUrl,l=Object(d.useState)(!0),u=Object(g.a)(l,2),m=u[0],b=u[1],f=Object(d.useContext)(x),j=f.getPokemonById,p=f.currentPokemon,h=Object(d.useContext)(x).setPokemonError;return Object(d.useEffect)((function(){j(+o).then((function(){b(!1),h(!1)})).catch((function(){h(!0),r.replace("/")}))}),[j,o,r,h]),Object(d.useEffect)((function(){b(!0)}),[o]),Object(d.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(O.jsxs)(zt,{children:[Object(O.jsxs)(pt,{color:G(c),children:[Object(O.jsx)(ut,{id:+o}),Object(O.jsx)(ct,{bgc:c}),Object(O.jsx)(ot,{image:s,name:a||p.name})]}),!m&&Object(O.jsx)("h1",{children:a||p.name}),m?Object(O.jsx)(_,{align:"center",className:"visible mt"}):Object(O.jsx)(Et,{pokemon:p})]})};var At,Ft=function(){return Object(O.jsx)(k.a,{basename:"/pokemon-app",children:Object(O.jsxs)(w.d,{children:[Object(O.jsx)(w.b,{path:"/",exact:!0,component:nt}),Object(O.jsx)(w.b,{path:"/pokemon/:id",exact:!0,component:St}),Object(O.jsx)(w.a,{to:"/"})]})})},It=Object(C.a)(At||(At=Object(y.a)(["\n  html {\n    font-size: 62.5%;\n    box-sizing: border-box;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n  body {\n    background-color: #121212;\n    color: #fff;\n    margin: 0;\n    font-size: 1.6rem;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n      'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    padding-bottom: 2rem;\n    overflow-x: hidden;\n  }\n  .network-error {\n    text-align: center;\n    button {\n      background: none;\n      border: none;\n      color: #1E88E5;\n      cursor: pointer;\n      font-family: inherit;\n      font-size: 1.8rem;\n      font-weight: 500;\n      margin: 0;\n      margin-top: 1.4rem;\n      padding: 1rem;\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n"])));var Nt=function(){return Object(O.jsxs)(v,{children:[Object(O.jsx)(It,{}),Object(O.jsx)(Ft,{})]})},Bt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Lt(t,n){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Dt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,234)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),r(t),o(t),i(t),a(t)}))};b.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(Nt,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/pokemon-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pokemon-app","/service-worker.js");Bt?(!function(t,n){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):Lt(t,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Lt(n,t)}))}}(),Dt()}},[[229,1,2]]]);
//# sourceMappingURL=main.0b378246.chunk.js.map