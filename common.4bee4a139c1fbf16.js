"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7543:(M,C,f)=>{f.d(C,{c:()=>u});var _=f(1308),h=f(7864),t=f(1911);const u=(d,r)=>{let n,e;const s=(g,v,p)=>{if(typeof document>"u")return;const w=document.elementFromPoint(g,v);w&&r(w)?w!==n&&(m(),l(w,p)):m()},l=(g,v)=>{n=g,e||(e=n);const p=n;(0,_.c)(()=>p.classList.add("ion-activated")),v()},m=(g=!1)=>{if(!n)return;const v=n;(0,_.c)(()=>v.classList.remove("ion-activated")),g&&e!==n&&n.click(),n=void 0};return(0,t.createGesture)({el:d,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>s(g.currentX,g.currentY,h.a),onMove:g=>s(g.currentX,g.currentY,h.b),onEnd:()=>{m(!0),(0,h.h)(),e=void 0}})}},2225:(M,C,f)=>{f.d(C,{g:()=>_});const _=(r,n,e,s,l)=>t(r[1],n[1],e[1],s[1],l).map(m=>h(r[0],n[0],e[0],s[0],m)),h=(r,n,e,s,l)=>l*(3*n*Math.pow(l-1,2)+l*(-3*e*l+3*e+s*l))-r*Math.pow(l-1,3),t=(r,n,e,s,l)=>d((s-=l)-3*(e-=l)+3*(n-=l)-(r-=l),3*e-6*n+3*r,3*n-3*r,r).filter(g=>g>=0&&g<=1),d=(r,n,e,s)=>{if(0===r)return((r,n,e)=>{const s=n*n-4*r*e;return s<0?[]:[(-n+Math.sqrt(s))/(2*r),(-n-Math.sqrt(s))/(2*r)]})(n,e,s);const l=(3*(e/=r)-(n/=r)*n)/3,m=(2*n*n*n-9*n*e+27*(s/=r))/27;if(0===l)return[Math.pow(-m,1/3)];if(0===m)return[Math.sqrt(-l),-Math.sqrt(-l)];const g=Math.pow(m/2,2)+Math.pow(l/3,3);if(0===g)return[Math.pow(m/2,.5)-n/3];if(g>0)return[Math.pow(-m/2+Math.sqrt(g),1/3)-Math.pow(m/2+Math.sqrt(g),1/3)-n/3];const v=Math.sqrt(Math.pow(-l/3,3)),p=Math.acos(-m/(2*Math.sqrt(Math.pow(-l/3,3)))),w=2*Math.pow(v,1/3);return[w*Math.cos(p/3)-n/3,w*Math.cos((p+2*Math.PI)/3)-n/3,w*Math.cos((p+4*Math.PI)/3)-n/3]}},5062:(M,C,f)=>{f.d(C,{i:()=>_});const _=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5106:(M,C,f)=>{f.r(C),f.d(C,{startFocusVisible:()=>u});const _="ion-focused",t=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],u=d=>{let r=[],n=!0;const e=d?d.shadowRoot:document,s=d||document.body,l=a=>{r.forEach(i=>i.classList.remove(_)),a.forEach(i=>i.classList.add(_)),r=a},m=()=>{n=!1,l([])},g=a=>{n=t.includes(a.key),n||l([])},v=a=>{if(n&&void 0!==a.composedPath){const i=a.composedPath().filter(c=>!!c.classList&&c.classList.contains("ion-focusable"));l(i)}},p=()=>{e.activeElement===s&&l([])};return e.addEventListener("keydown",g),e.addEventListener("focusin",v),e.addEventListener("focusout",p),e.addEventListener("touchstart",m),e.addEventListener("mousedown",m),{destroy:()=>{e.removeEventListener("keydown",g),e.removeEventListener("focusin",v),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",m),e.removeEventListener("mousedown",m)},setFocus:l}}},7040:(M,C,f)=>{f.d(C,{C:()=>d,a:()=>t,d:()=>u});var _=f(5861),h=f(5730);const t=function(){var r=(0,_.Z)(function*(n,e,s,l,m,g){var v;if(n)return n.attachViewToDom(e,s,m,l);if(!(g||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof s?null===(v=e.ownerDocument)||void 0===v?void 0:v.createElement(s):s;return l&&l.forEach(w=>p.classList.add(w)),m&&Object.assign(p,m),e.appendChild(p),yield new Promise(w=>(0,h.c)(p,w)),p});return function(e,s,l,m,g,v){return r.apply(this,arguments)}}(),u=(r,n)=>{if(n){if(r)return r.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()},d=()=>{let r,n;return{attachViewToDom:function(){var l=(0,_.Z)(function*(m,g,v={},p=[]){var w,a;if(r=m,g){const c="string"==typeof g?null===(w=r.ownerDocument)||void 0===w?void 0:w.createElement(g):g;p.forEach(o=>c.classList.add(o)),Object.assign(c,v),r.appendChild(c),yield new Promise(o=>(0,h.c)(c,o))}else if(r.children.length>0&&!r.children[0].classList.contains("ion-delegate-host")){const o=null===(a=r.ownerDocument)||void 0===a?void 0:a.createElement("div");o.classList.add("ion-delegate-host"),p.forEach(E=>o.classList.add(E)),o.append(...r.children),r.appendChild(o)}const i=document.querySelector("ion-app")||document.body;return n=document.createComment("ionic teleport"),r.parentNode.insertBefore(n,r),i.appendChild(r),r});return function(g,v){return l.apply(this,arguments)}}(),removeViewFromDom:()=>(r&&n&&(n.parentNode.insertBefore(r,n),n.remove()),Promise.resolve())}}},7864:(M,C,f)=>{f.d(C,{a:()=>u,b:()=>d,c:()=>t,d:()=>n,h:()=>r});const _={getEngine(){var e;const s=window;return s.TapticEngine||(null===(e=s.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var e;const s=window;return!!this.getEngine()&&("web"!==(null===(e=s.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const s=this.getEngine();if(!s)return;const l=this.isCapacitor()?e.style.toUpperCase():e.style;s.impact({style:l})},notification(e){const s=this.getEngine();if(!s)return;const l=this.isCapacitor()?e.style.toUpperCase():e.style;s.notification({style:l})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},h=()=>_.available(),t=()=>{h()&&_.selection()},u=()=>{h()&&_.selectionStart()},d=()=>{h()&&_.selectionChanged()},r=()=>{h()&&_.selectionEnd()},n=e=>{h()&&_.impact(e)}},6642:(M,C,f)=>{f.d(C,{I:()=>d,a:()=>l,b:()=>r,c:()=>v,d:()=>w,f:()=>m,g:()=>s,i:()=>e,p:()=>p,r:()=>a,s:()=>g});var _=f(5861),h=f(5730),t=f(4147);const d="ion-content",r=".ion-content-scroll-host",n=`${d}, ${r}`,e=i=>"ION-CONTENT"===i.tagName,s=function(){var i=(0,_.Z)(function*(c){return e(c)?(yield new Promise(o=>(0,h.c)(c,o)),c.getScrollElement()):c});return function(o){return i.apply(this,arguments)}}(),l=i=>i.querySelector(r)||i.querySelector(n),m=i=>i.closest(n),g=(i,c)=>e(i)?i.scrollToTop(c):Promise.resolve(i.scrollTo({top:0,left:0,behavior:c>0?"smooth":"auto"})),v=(i,c,o,E)=>e(i)?i.scrollByPoint(c,o,E):Promise.resolve(i.scrollBy({top:o,left:c,behavior:E>0?"smooth":"auto"})),p=i=>(0,t.a)(i,d),w=i=>{if(e(i)){const o=i.scrollY;return i.scrollY=!1,o}return i.style.setProperty("overflow","hidden"),!0},a=(i,c)=>{e(i)?i.scrollY=c:i.style.removeProperty("overflow")}},2357:(M,C,f)=>{f.d(C,{a:()=>_,b:()=>g,c:()=>n,d:()=>v,e:()=>x,f:()=>r,g:()=>p,h:()=>t,i:()=>h,j:()=>o,k:()=>E,l:()=>e,m:()=>l,n:()=>w,o:()=>s,p:()=>d,q:()=>u,r:()=>c,s:()=>b,t:()=>m,u:()=>a,v:()=>i});const _="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(M,C,f)=>{f.d(C,{s:()=>_});const _=e=>{try{if(e instanceof n)return e.value;if(!u()||"string"!=typeof e||""===e)return e;const s=document.createDocumentFragment(),l=document.createElement("div");s.appendChild(l),l.innerHTML=e,r.forEach(p=>{const w=s.querySelectorAll(p);for(let a=w.length-1;a>=0;a--){const i=w[a];i.parentNode?i.parentNode.removeChild(i):s.removeChild(i);const c=t(i);for(let o=0;o<c.length;o++)h(c[o])}});const m=t(s);for(let p=0;p<m.length;p++)h(m[p]);const g=document.createElement("div");g.appendChild(s);const v=g.querySelector("div");return null!==v?v.innerHTML:g.innerHTML}catch(s){return console.error(s),""}},h=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let l=e.attributes.length-1;l>=0;l--){const m=e.attributes.item(l),g=m.name;if(!d.includes(g.toLowerCase())){e.removeAttribute(g);continue}const v=m.value;null!=v&&v.toLowerCase().includes("javascript:")&&e.removeAttribute(g)}const s=t(e);for(let l=0;l<s.length;l++)h(s[l])},t=e=>null!=e.children?e.children:e.childNodes,u=()=>{var e;const s=window,l=null===(e=null==s?void 0:s.Ionic)||void 0===e?void 0:e.config;return!l||(l.get?l.get("sanitizerEnabled",!0):!0===l.sanitizerEnabled||void 0===l.sanitizerEnabled)},d=["class","id","href","src","name","slot"],r=["script","style","iframe","meta","link","object","embed"];class n{constructor(s){this.value=s}}},1316:(M,C,f)=>{f.r(C),f.d(C,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>_,copyVisualViewport:()=>c,keyboardDidClose:()=>p,keyboardDidOpen:()=>g,keyboardDidResize:()=>v,resetKeyboardAssist:()=>n,setKeyboardClose:()=>m,setKeyboardOpen:()=>l,startKeyboardAssist:()=>e,trackViewportChanges:()=>i});const _="ionKeyboardDidShow",h="ionKeyboardDidHide";let u={},d={},r=!1;const n=()=>{u={},d={},r=!1},e=o=>{s(o),o.visualViewport&&(d=c(o.visualViewport),o.visualViewport.onresize=()=>{i(o),g()||v(o)?l(o):p(o)&&m(o)})},s=o=>{o.addEventListener("keyboardDidShow",E=>l(o,E)),o.addEventListener("keyboardDidHide",()=>m(o))},l=(o,E)=>{w(o,E),r=!0},m=o=>{a(o),r=!1},g=()=>!r&&u.width===d.width&&(u.height-d.height)*d.scale>150,v=o=>r&&!p(o),p=o=>r&&d.height===o.innerHeight,w=(o,E)=>{const x=new CustomEvent(_,{detail:{keyboardHeight:E?E.keyboardHeight:o.innerHeight-d.height}});o.dispatchEvent(x)},a=o=>{const E=new CustomEvent(h);o.dispatchEvent(E)},i=o=>{u=Object.assign({},d),d=c(o.visualViewport)},c=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,C,f)=>{f.d(C,{c:()=>h});var _=f(3457);const h=t=>{let u,d,r;const n=()=>{u=()=>{r=!0,t&&t(!0)},d=()=>{r=!1,t&&t(!1)},null==_.w||_.w.addEventListener("keyboardWillShow",u),null==_.w||_.w.addEventListener("keyboardWillHide",d)};return n(),{init:n,destroy:()=>{null==_.w||_.w.removeEventListener("keyboardWillShow",u),null==_.w||_.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>r}}},7741:(M,C,f)=>{f.d(C,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(t,u,d)=>{const r=t*u/d-t+"ms",n=2*Math.PI*u/d;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,u,d)=>{const r=u/d,n=t*r-t+"ms",e=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,u)=>({r:6,style:{left:9-9*u+"px","animation-delay":-110*u+"ms"}})},lines:{dur:1e3,lines:8,fn:(t,u,d)=>({y1:14,y2:26,style:{transform:`rotate(${360/d*u+(u<d/2?180:-180)}deg)`,"animation-delay":t*u/d-t+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(t,u,d)=>({y1:12,y2:20,style:{transform:`rotate(${360/d*u+(u<d/2?180:-180)}deg)`,"animation-delay":t*u/d-t+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(t,u,d)=>({y1:17,y2:29,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":t*u/d-t+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(t,u,d)=>({y1:12,y2:20,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":t*u/d-t+"ms"}})}}},1959:(M,C,f)=>{f.r(C),f.d(C,{createSwipeBackGesture:()=>d});var _=f(5730),h=f(5062),t=f(1911);f(4349);const d=(r,n,e,s,l)=>{const m=r.ownerDocument.defaultView,g=(0,h.i)(r),p=o=>g?-o.deltaX:o.deltaX;return(0,t.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(o=>{const{startX:b}=o;return g?b>=m.innerWidth-50:b<=50})(o)&&n(),onStart:e,onMove:o=>{const b=p(o)/m.innerWidth;s(b)},onEnd:o=>{const E=p(o),b=m.innerWidth,x=E/b,y=(o=>g?-o.velocityX:o.velocityX)(o),O=y>=0&&(y>.2||E>b/2),D=(O?1-x:x)*b;let P=0;if(D>5){const T=D/Math.abs(y);P=Math.min(T,540)}l(O,x<=0?.01:(0,_.l)(0,x,.9999),P)}})}},253:(M,C,f)=>{f.d(C,{i:()=>v});var _=f(655),h=f(4006),t=f(8274),u=f(5035),d=f(3079),r=f(6895),n=f(4032);function e(p,w){if(1&p){const a=t.EpF();t.TgZ(0,"div")(1,"button",7),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("cabeza"))}),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"button",8),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("torso"))}),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"button",9),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("brazo-"+("frente"===c.rotacion?"izq":"der")))}),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"button",10),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("brazo-"+("frente"===c.rotacion?"der":"izq")))}),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"button",11),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("pierna-"+("frente"===c.rotacion?"izq":"der")))}),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("pierna-"+("frente"===c.rotacion?"der":"izq")))}),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"button",13),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("pie-"+("frente"===c.rotacion?"izq":"der")))}),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"button",14),t.NdJ("click",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.parteDelcuerpo("pie-"+("frente"===c.rotacion?"der":"izq")))}),t._uU(23),t.ALo(24,"translate"),t.qZA()()}if(2&p){const a=t.oxw();t.xp6(2),t.hij(" ",t.lcZ(3,14,"cuerpo.cabeza"),""),t.xp6(3),t.hij(" ",t.lcZ(6,16,"cuerpo.torso"),""),t.xp6(3),t.AsE(" ",t.lcZ(9,18,"cuerpo.brazo")," ","frente"===a.rotacion?"Izq":"Der",""),t.xp6(3),t.AsE(" ",t.lcZ(12,20,"cuerpo.brazo")," ","frente"===a.rotacion?"Der":"Izq",""),t.xp6(3),t.AsE(" ",t.lcZ(15,22,"cuerpo.pierna")," ","frente"===a.rotacion?"Izq":"Der",""),t.xp6(3),t.AsE(" ",t.lcZ(18,24,"cuerpo.pierna")," ","frente"===a.rotacion?"Der":"Izq",""),t.xp6(3),t.AsE(" ",t.lcZ(21,26,"cuerpo.pie")," ","frente"===a.rotacion?"Izq":"Der",""),t.xp6(3),t.AsE(" ",t.lcZ(24,28,"cuerpo.pie")," ","frente"===a.rotacion?"Der":"Izq","")}}function s(p,w){if(1&p&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&p){const a=w.$implicit;t.Q6J("value",a),t.xp6(1),t.Oqu(a.value)}}function l(p,w){1&p&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&p&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"cuerpo.escogerContinuar")))}function m(p,w){if(1&p&&(t.TgZ(0,"div",20),t.YNc(1,l,3,3,"span",4),t.qZA()),2&p){const a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==a.parteCuerpo||null==a.parteCuerpo.errors?null:a.parteCuerpo.errors.required)}}function g(p,w){if(1&p&&(t.TgZ(0,"form",15)(1,"ion-item")(2,"ion-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"ion-item")(6,"ion-select",16),t.ALo(7,"translate"),t.YNc(8,s,2,2,"ion-select-option",17),t.qZA()()(),t.YNc(9,m,2,1,"div",18),t.qZA()),2&p){const a=t.oxw();t.Q6J("formGroup",a.cuerpoForm),t.xp6(3),t.Oqu(t.lcZ(4,5,"cuerpo.parteCuerpo")),t.xp6(3),t.s9C("placeholder",t.lcZ(7,7,"cuerpo.placeHolderParteCuerpo")),t.xp6(2),t.Q6J("ngForOf",a.partes),t.xp6(1),t.Q6J("ngIf",((null==a.parteCuerpo?null:a.parteCuerpo.dirty)||(null==a.parteCuerpo?null:a.parteCuerpo.touched))&&(null==a.parteCuerpo?null:a.parteCuerpo.errors))}}let v=(()=>{class p{constructor(a,i,c,o){this.modalCtrl=a,this.fb=i,this.app=c,this.alertController=o,this.cuerpo="assets/images/frente.png",this.image="",this.rotacion="frente",this.partes=[],this.parteSeleccionada={id:0,nombre:"",tipo:0},this.cuerpoForm=this.fb.group({parteCuerpo:[null,[h.kI.required]]})}ngOnInit(){this.cuerpo=`assets/images/-${this.rotacion}.png`}rotar(){"frente"===this.rotacion?(this.rotacion="espalda",this.cuerpo=`assets/images/${this.image}-${this.rotacion}.png`):(this.rotacion="frente",this.cuerpo=`assets/images/${this.image}-${this.rotacion}.png`)}parteDelcuerpo(a){var i;console.log("Parte escogida",a),this.image=a;let c="",o=a.split("-");c=o.length>1?o[0]+o[1][0].toUpperCase()+o[1].substring(1):o[0],c+="frente"===this.rotacion?"Frente":"Espalda",this.partes=null===(i=this.app)||void 0===i?void 0:i.partesCuerpo[c],this.cuerpo=`assets/images/${a}-${this.rotacion}.png`}cancel(){return this.modalCtrl.dismiss(null,"cancel")}escoger(){return(0,_.mG)(this,void 0,void 0,function*(){this.cuerpoForm.invalid&&""!==this.image?Object.keys(this.cuerpoForm.controls).forEach(a=>{var i;null===(i=this.cuerpoForm.get(a))||void 0===i||i.markAllAsTouched()}):""===this.image?yield(yield this.alertController.create({header:"Escoger parte del cuerpo",message:"Debe escoger una parte del cuerpo para continuar",buttons:["Aceptar"]})).present():this.modalCtrl.dismiss(this.cuerpoForm.value.parteCuerpo,"escoger")})}get parteCuerpo(){return this.cuerpoForm.get("parteCuerpo")}get parteEspecifica(){return this.cuerpoForm.get("parteEspecifica")}}return p.\u0275fac=function(a){return new(a||p)(t.Y36(u.IN),t.Y36(h.qu),t.Y36(d.z),t.Y36(u.Br))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-cuerpo"]],decls:17,vars:12,consts:[[1,"title-cuerpo"],["expand","block",3,"click"],[1,"container"],["alt","Cuerpo",3,"src"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],["id","seleccionar-parte-button","type","button","expand","block",3,"click"],["id","cabeza-button",1,"btn-cabeza","floating-btn",3,"click"],[1,"btn-torso","floating-btn",3,"click"],[1,"btn-brazo-iz","floating-btn",3,"click"],[1,"btn-brazo-de","floating-btn",3,"click"],[1,"btn-pierna-iz","floating-btn",3,"click"],[1,"btn-pierna-de","floating-btn",3,"click"],[1,"btn-pie-iz","floating-btn",3,"click"],[1,"btn-pie-de","floating-btn",3,"click"],[3,"formGroup"],["formControlName","parteCuerpo",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],["class","form-error",4,"ngIf"],[3,"value"],[1,"form-error"]],template:function(a,i){1&a&&(t.TgZ(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title",0),t._uU(4),t.ALo(5,"translate"),t.qZA()()(),t.TgZ(6,"ion-button",1),t.NdJ("click",function(){return i.rotar()}),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",2),t._UZ(10,"img",3),t.YNc(11,e,25,30,"div",4),t.YNc(12,g,10,9,"form",5),t.qZA()(),t.TgZ(13,"ion-footer")(14,"ion-button",6),t.NdJ("click",function(){return i.escoger()}),t._uU(15),t.ALo(16,"translate"),t.qZA()()),2&a&&(t.xp6(4),t.hij(" ",t.lcZ(5,6,"cuerpo.titulo")," "),t.xp6(3),t.Oqu(t.lcZ(8,8,"cuerpo.rotar")),t.xp6(3),t.Q6J("src",i.cuerpo,t.LSH),t.xp6(1),t.Q6J("ngIf",""===i.image),t.xp6(1),t.Q6J("ngIf",""!==i.image),t.xp6(3),t.hij(" ",t.lcZ(16,10,"cuerpo.botonEscoger")," "))},dependencies:[r.sg,r.O5,h._Y,h.JJ,h.JL,u.YG,u.W2,u.fr,u.Gu,u.Ie,u.Q$,u.t9,u.n0,u.wd,u.sr,u.QI,h.sg,h.u,n.X$],styles:[".container[_ngcontent-%COMP%]{position:relative;width:100%}.title-cuerpo[_ngcontent-%COMP%]{padding-inline:0px;text-align:center;font-size:x-large}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.container[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%]{position:absolute;background-color:transparent;color:#fff;font-size:16px;padding:10px;border:none;cursor:pointer;border-radius:5px;border-style:solid;border-color:#000;border-width:1px}.container[_ngcontent-%COMP%]   .btn-cabeza[_ngcontent-%COMP%]{top:12%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-torso[_ngcontent-%COMP%]{top:40%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-brazo-iz[_ngcontent-%COMP%]{top:30%;left:70%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-brazo-de[_ngcontent-%COMP%]{top:30%;left:30%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-mano-iz[_ngcontent-%COMP%]{top:45%;left:85%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-mano-de[_ngcontent-%COMP%]{top:45%;left:15%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pierna-iz[_ngcontent-%COMP%]{top:65%;left:70%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pierna-de[_ngcontent-%COMP%]{top:65%;left:30%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pie-iz[_ngcontent-%COMP%]{top:85%;left:70%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pie-de[_ngcontent-%COMP%]{top:85%;left:30%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%]:hover{background-color:#000}"]}),p})()}}]);