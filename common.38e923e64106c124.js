"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7543:(M,C,d)=>{d.d(C,{c:()=>l});var m=d(1308),f=d(7864),t=d(1911);const l=(u,o)=>{let n,e;const i=(g,p,w)=>{if(typeof document>"u")return;const s=document.elementFromPoint(g,p);s&&o(s)?s!==n&&(_(),c(s,w)):_()},c=(g,p)=>{n=g,e||(e=n);const w=n;(0,m.c)(()=>w.classList.add("ion-activated")),p()},_=(g=!1)=>{if(!n)return;const p=n;(0,m.c)(()=>p.classList.remove("ion-activated")),g&&e!==n&&n.click(),n=void 0};return(0,t.createGesture)({el:u,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>i(g.currentX,g.currentY,f.a),onMove:g=>i(g.currentX,g.currentY,f.b),onEnd:()=>{_(!0),(0,f.h)(),e=void 0}})}},2225:(M,C,d)=>{d.d(C,{g:()=>m});const m=(o,n,e,i,c)=>t(o[1],n[1],e[1],i[1],c).map(_=>f(o[0],n[0],e[0],i[0],_)),f=(o,n,e,i,c)=>c*(3*n*Math.pow(c-1,2)+c*(-3*e*c+3*e+i*c))-o*Math.pow(c-1,3),t=(o,n,e,i,c)=>u((i-=c)-3*(e-=c)+3*(n-=c)-(o-=c),3*e-6*n+3*o,3*n-3*o,o).filter(g=>g>=0&&g<=1),u=(o,n,e,i)=>{if(0===o)return((o,n,e)=>{const i=n*n-4*o*e;return i<0?[]:[(-n+Math.sqrt(i))/(2*o),(-n-Math.sqrt(i))/(2*o)]})(n,e,i);const c=(3*(e/=o)-(n/=o)*n)/3,_=(2*n*n*n-9*n*e+27*(i/=o))/27;if(0===c)return[Math.pow(-_,1/3)];if(0===_)return[Math.sqrt(-c),-Math.sqrt(-c)];const g=Math.pow(_/2,2)+Math.pow(c/3,3);if(0===g)return[Math.pow(_/2,.5)-n/3];if(g>0)return[Math.pow(-_/2+Math.sqrt(g),1/3)-Math.pow(_/2+Math.sqrt(g),1/3)-n/3];const p=Math.sqrt(Math.pow(-c/3,3)),w=Math.acos(-_/(2*Math.sqrt(Math.pow(-c/3,3)))),s=2*Math.pow(p,1/3);return[s*Math.cos(w/3)-n/3,s*Math.cos((w+2*Math.PI)/3)-n/3,s*Math.cos((w+4*Math.PI)/3)-n/3]}},5062:(M,C,d)=>{d.d(C,{i:()=>m});const m=f=>f&&""!==f.dir?"rtl"===f.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5106:(M,C,d)=>{d.r(C),d.d(C,{startFocusVisible:()=>l});const m="ion-focused",t=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=u=>{let o=[],n=!0;const e=u?u.shadowRoot:document,i=u||document.body,c=h=>{o.forEach(r=>r.classList.remove(m)),h.forEach(r=>r.classList.add(m)),o=h},_=()=>{n=!1,c([])},g=h=>{n=t.includes(h.key),n||c([])},p=h=>{if(n&&void 0!==h.composedPath){const r=h.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));c(r)}},w=()=>{e.activeElement===i&&c([])};return e.addEventListener("keydown",g),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",_),e.addEventListener("mousedown",_),{destroy:()=>{e.removeEventListener("keydown",g),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",_),e.removeEventListener("mousedown",_)},setFocus:c}}},7040:(M,C,d)=>{d.d(C,{C:()=>u,a:()=>t,d:()=>l});var m=d(5861),f=d(5730);const t=function(){var o=(0,m.Z)(function*(n,e,i,c,_,g){var p;if(n)return n.attachViewToDom(e,i,_,c);if(!(g||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const w="string"==typeof i?null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement(i):i;return c&&c.forEach(s=>w.classList.add(s)),_&&Object.assign(w,_),e.appendChild(w),yield new Promise(s=>(0,f.c)(w,s)),w});return function(e,i,c,_,g,p){return o.apply(this,arguments)}}(),l=(o,n)=>{if(n){if(o)return o.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()},u=()=>{let o,n;return{attachViewToDom:function(){var c=(0,m.Z)(function*(_,g,p={},w=[]){var s,h;if(o=_,g){const v="string"==typeof g?null===(s=o.ownerDocument)||void 0===s?void 0:s.createElement(g):g;w.forEach(a=>v.classList.add(a)),Object.assign(v,p),o.appendChild(v),yield new Promise(a=>(0,f.c)(v,a))}else if(o.children.length>0&&!o.children[0].classList.contains("ion-delegate-host")){const a=null===(h=o.ownerDocument)||void 0===h?void 0:h.createElement("div");a.classList.add("ion-delegate-host"),w.forEach(E=>a.classList.add(E)),a.append(...o.children),o.appendChild(a)}const r=document.querySelector("ion-app")||document.body;return n=document.createComment("ionic teleport"),o.parentNode.insertBefore(n,o),r.appendChild(o),o});return function(g,p){return c.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&n&&(n.parentNode.insertBefore(o,n),n.remove()),Promise.resolve())}}},7864:(M,C,d)=>{d.d(C,{a:()=>l,b:()=>u,c:()=>t,d:()=>n,h:()=>o});const m={getEngine(){var e;const i=window;return i.TapticEngine||(null===(e=i.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var e;const i=window;return!!this.getEngine()&&("web"!==(null===(e=i.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const i=this.getEngine();if(!i)return;const c=this.isCapacitor()?e.style.toUpperCase():e.style;i.impact({style:c})},notification(e){const i=this.getEngine();if(!i)return;const c=this.isCapacitor()?e.style.toUpperCase():e.style;i.notification({style:c})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},f=()=>m.available(),t=()=>{f()&&m.selection()},l=()=>{f()&&m.selectionStart()},u=()=>{f()&&m.selectionChanged()},o=()=>{f()&&m.selectionEnd()},n=e=>{f()&&m.impact(e)}},6642:(M,C,d)=>{d.d(C,{I:()=>u,a:()=>c,b:()=>o,c:()=>p,d:()=>s,f:()=>_,g:()=>i,i:()=>e,p:()=>w,r:()=>h,s:()=>g});var m=d(5861),f=d(5730),t=d(4147);const u="ion-content",o=".ion-content-scroll-host",n=`${u}, ${o}`,e=r=>"ION-CONTENT"===r.tagName,i=function(){var r=(0,m.Z)(function*(v){return e(v)?(yield new Promise(a=>(0,f.c)(v,a)),v.getScrollElement()):v});return function(a){return r.apply(this,arguments)}}(),c=r=>r.querySelector(o)||r.querySelector(n),_=r=>r.closest(n),g=(r,v)=>e(r)?r.scrollToTop(v):Promise.resolve(r.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(r,v,a,E)=>e(r)?r.scrollByPoint(v,a,E):Promise.resolve(r.scrollBy({top:a,left:v,behavior:E>0?"smooth":"auto"})),w=r=>(0,t.a)(r,u),s=r=>{if(e(r)){const a=r.scrollY;return r.scrollY=!1,a}return r.style.setProperty("overflow","hidden"),!0},h=(r,v)=>{e(r)?r.scrollY=v:r.style.removeProperty("overflow")}},2357:(M,C,d)=>{d.d(C,{a:()=>m,b:()=>g,c:()=>n,d:()=>p,e:()=>P,f:()=>o,g:()=>w,h:()=>t,i:()=>f,j:()=>a,k:()=>E,l:()=>e,m:()=>c,n:()=>s,o:()=>i,p:()=>u,q:()=>l,r:()=>v,s:()=>b,t:()=>_,u:()=>h,v:()=>r});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(M,C,d)=>{d.d(C,{s:()=>m});const m=e=>{try{if(e instanceof n)return e.value;if(!l()||"string"!=typeof e||""===e)return e;const i=document.createDocumentFragment(),c=document.createElement("div");i.appendChild(c),c.innerHTML=e,o.forEach(w=>{const s=i.querySelectorAll(w);for(let h=s.length-1;h>=0;h--){const r=s[h];r.parentNode?r.parentNode.removeChild(r):i.removeChild(r);const v=t(r);for(let a=0;a<v.length;a++)f(v[a])}});const _=t(i);for(let w=0;w<_.length;w++)f(_[w]);const g=document.createElement("div");g.appendChild(i);const p=g.querySelector("div");return null!==p?p.innerHTML:g.innerHTML}catch(i){return console.error(i),""}},f=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let c=e.attributes.length-1;c>=0;c--){const _=e.attributes.item(c),g=_.name;if(!u.includes(g.toLowerCase())){e.removeAttribute(g);continue}const p=_.value;null!=p&&p.toLowerCase().includes("javascript:")&&e.removeAttribute(g)}const i=t(e);for(let c=0;c<i.length;c++)f(i[c])},t=e=>null!=e.children?e.children:e.childNodes,l=()=>{var e;const i=window,c=null===(e=null==i?void 0:i.Ionic)||void 0===e?void 0:e.config;return!c||(c.get?c.get("sanitizerEnabled",!0):!0===c.sanitizerEnabled||void 0===c.sanitizerEnabled)},u=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"];class n{constructor(i){this.value=i}}},1316:(M,C,d)=>{d.r(C),d.d(C,{KEYBOARD_DID_CLOSE:()=>f,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>v,keyboardDidClose:()=>w,keyboardDidOpen:()=>g,keyboardDidResize:()=>p,resetKeyboardAssist:()=>n,setKeyboardClose:()=>_,setKeyboardOpen:()=>c,startKeyboardAssist:()=>e,trackViewportChanges:()=>r});const m="ionKeyboardDidShow",f="ionKeyboardDidHide";let l={},u={},o=!1;const n=()=>{l={},u={},o=!1},e=a=>{i(a),a.visualViewport&&(u=v(a.visualViewport),a.visualViewport.onresize=()=>{r(a),g()||p(a)?c(a):w(a)&&_(a)})},i=a=>{a.addEventListener("keyboardDidShow",E=>c(a,E)),a.addEventListener("keyboardDidHide",()=>_(a))},c=(a,E)=>{s(a,E),o=!0},_=a=>{h(a),o=!1},g=()=>!o&&l.width===u.width&&(l.height-u.height)*u.scale>150,p=a=>o&&!w(a),w=a=>o&&u.height===a.innerHeight,s=(a,E)=>{const P=new CustomEvent(m,{detail:{keyboardHeight:E?E.keyboardHeight:a.innerHeight-u.height}});a.dispatchEvent(P)},h=a=>{const E=new CustomEvent(f);a.dispatchEvent(E)},r=a=>{l=Object.assign({},u),u=v(a.visualViewport)},v=a=>({width:Math.round(a.width),height:Math.round(a.height),offsetTop:a.offsetTop,offsetLeft:a.offsetLeft,pageTop:a.pageTop,pageLeft:a.pageLeft,scale:a.scale})},9852:(M,C,d)=>{d.d(C,{c:()=>f});var m=d(3457);const f=t=>{let l,u,o;const n=()=>{l=()=>{o=!0,t&&t(!0)},u=()=>{o=!1,t&&t(!1)},null==m.w||m.w.addEventListener("keyboardWillShow",l),null==m.w||m.w.addEventListener("keyboardWillHide",u)};return n(),{init:n,destroy:()=>{null==m.w||m.w.removeEventListener("keyboardWillShow",l),null==m.w||m.w.removeEventListener("keyboardWillHide",u),l=u=void 0},isKeyboardVisible:()=>o}}},7741:(M,C,d)=>{d.d(C,{S:()=>f});const f={bubbles:{dur:1e3,circles:9,fn:(t,l,u)=>{const o=t*l/u-t+"ms",n=2*Math.PI*l/u;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,l,u)=>{const o=l/u,n=t*o-t+"ms",e=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(t,l,u)=>({y1:14,y2:26,style:{transform:`rotate(${360/u*l+(l<u/2?180:-180)}deg)`,"animation-delay":t*l/u-t+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(t,l,u)=>({y1:12,y2:20,style:{transform:`rotate(${360/u*l+(l<u/2?180:-180)}deg)`,"animation-delay":t*l/u-t+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(t,l,u)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":t*l/u-t+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(t,l,u)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":t*l/u-t+"ms"}})}}},1959:(M,C,d)=>{d.r(C),d.d(C,{createSwipeBackGesture:()=>u});var m=d(5730),f=d(5062),t=d(1911);d(4349);const u=(o,n,e,i,c)=>{const _=o.ownerDocument.defaultView,g=(0,f.i)(o),w=a=>g?-a.deltaX:a.deltaX;return(0,t.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:a=>(a=>{const{startX:b}=a;return g?b>=_.innerWidth-50:b<=50})(a)&&n(),onStart:e,onMove:a=>{const b=w(a)/_.innerWidth;i(b)},onEnd:a=>{const E=w(a),b=_.innerWidth,P=E/b,D=(a=>g?-a.velocityX:a.velocityX)(a),O=D>=0&&(D>.2||E>b/2),y=(O?1-P:P)*b;let x=0;if(y>5){const k=y/Math.abs(D);x=Math.min(k,540)}c(O,P<=0?.01:(0,m.l)(0,P,.9999),x)}})}},253:(M,C,d)=>{d.d(C,{i:()=>g});var m=d(655),f=d(433),t=d(8256),l=d(5035),u=d(3079),o=d(6895);function n(p,w){if(1&p){const s=t.EpF();t.TgZ(0,"div")(1,"button",7),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("cabeza"))}),t._uU(2," Cabeza"),t.qZA(),t.TgZ(3,"button",8),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("torso"))}),t._uU(4," Torso"),t.qZA(),t.TgZ(5,"button",9),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("brazo-"+("frente"===r.rotacion?"izq":"der")))}),t._uU(6),t.qZA(),t.TgZ(7,"button",10),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("brazo-"+("frente"===r.rotacion?"der":"izq")))}),t._uU(8),t.qZA(),t.TgZ(9,"button",11),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("mano-"+("frente"===r.rotacion?"izq":"der")))}),t._uU(10),t.qZA(),t.TgZ(11,"button",12),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("mano-"+("frente"===r.rotacion?"der":"izq")))}),t._uU(12),t.qZA(),t.TgZ(13,"button",13),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("pierna-"+("frente"===r.rotacion?"izq":"der")))}),t._uU(14),t.qZA(),t.TgZ(15,"button",14),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("pierna-"+("frente"===r.rotacion?"der":"izq")))}),t._uU(16),t.qZA(),t.TgZ(17,"button",15),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("pie-"+("frente"===r.rotacion?"izq":"der")))}),t._uU(18),t.qZA(),t.TgZ(19,"button",16),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.parteDelcuerpo("pie-"+("frente"===r.rotacion?"der":"izq")))}),t._uU(20),t.qZA()()}if(2&p){const s=t.oxw();t.xp6(6),t.hij(" Brazo ","frente"===s.rotacion?"Izq":"Der",""),t.xp6(2),t.hij(" Brazo ","frente"===s.rotacion?"Der":"Izq",""),t.xp6(2),t.hij(" Mano ","frente"===s.rotacion?"Izq":"Der",""),t.xp6(2),t.hij(" Mano ","frente"===s.rotacion?"Der":"Izq",""),t.xp6(2),t.hij(" Pierna ","frente"===s.rotacion?"Izq":"Der",""),t.xp6(2),t.hij(" Pierna ","frente"===s.rotacion?"Der":"Izq",""),t.xp6(2),t.hij(" Pie ","frente"===s.rotacion?"Izq":"Der",""),t.xp6(2),t.hij(" Pie ","frente"===s.rotacion?"Der":"Izq","")}}function e(p,w){if(1&p&&(t.TgZ(0,"ion-select-option",21),t._uU(1),t.qZA()),2&p){const s=w.$implicit;t.Q6J("value",s),t.xp6(1),t.Oqu(s.nombre)}}function i(p,w){1&p&&(t.TgZ(0,"span"),t._uU(1,"Debe escoger una parte del cuerpo para continuar"),t.qZA())}function c(p,w){if(1&p&&(t.TgZ(0,"div",22),t.YNc(1,i,2,0,"span",4),t.qZA()),2&p){const s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==s.parteCuerpo||null==s.parteCuerpo.errors?null:s.parteCuerpo.errors.required)}}function _(p,w){if(1&p&&(t.TgZ(0,"form",17)(1,"ion-item")(2,"ion-label"),t._uU(3,"Parte del cuerpo"),t.qZA(),t.TgZ(4,"ion-item")(5,"ion-select",18),t.YNc(6,e,2,2,"ion-select-option",19),t.qZA()()(),t.YNc(7,c,2,1,"div",20),t.qZA()),2&p){const s=t.oxw();t.Q6J("formGroup",s.cuerpoForm),t.xp6(6),t.Q6J("ngForOf",s.partes),t.xp6(1),t.Q6J("ngIf",((null==s.parteCuerpo?null:s.parteCuerpo.dirty)||(null==s.parteCuerpo?null:s.parteCuerpo.touched))&&(null==s.parteCuerpo?null:s.parteCuerpo.errors))}}let g=(()=>{class p{constructor(s,h,r,v){this.modalCtrl=s,this.fb=h,this.app=r,this.alertController=v,this.cuerpo="assets/images/frente.png",this.image="",this.rotacion="frente",this.partes=[],this.parteSeleccionada={id:0,nombre:"",tipo:0},this.cuerpoForm=this.fb.group({parteCuerpo:[null,[f.kI.required]]})}ngOnInit(){this.cuerpo=`assets/images/-${this.rotacion}.png`}rotar(){"frente"===this.rotacion?(this.rotacion="espalda",this.cuerpo=`assets/images/${this.image}-${this.rotacion}.png`):(this.rotacion="frente",this.cuerpo=`assets/images/${this.image}-${this.rotacion}.png`)}parteDelcuerpo(s){var h;console.log("Parte escogida",s),this.image=s;let r="",v=s.split("-");r=v.length>1?v[0]+v[1][0].toUpperCase()+v[1].substring(1):v[0],r+="frente"===this.rotacion?"Frente":"Espalda",this.partes=null===(h=this.app)||void 0===h?void 0:h.partesCuerpo[r],this.cuerpo=`assets/images/${s}-${this.rotacion}.png`}cancel(){return this.modalCtrl.dismiss(null,"cancel")}escoger(){return(0,m.mG)(this,void 0,void 0,function*(){this.cuerpoForm.invalid&&""!==this.image?Object.keys(this.cuerpoForm.controls).forEach(s=>{var h;null===(h=this.cuerpoForm.get(s))||void 0===h||h.markAllAsTouched()}):""===this.image?yield(yield this.alertController.create({header:"Escoger parte del cuerpo",message:"Debe escoger una parte del cuerpo para continuar",buttons:["Aceptar"]})).present():this.modalCtrl.dismiss(this.cuerpoForm.value.parteCuerpo,"escoger")})}get parteCuerpo(){return this.cuerpoForm.get("parteCuerpo")}get parteEspecifica(){return this.cuerpoForm.get("parteEspecifica")}}return p.\u0275fac=function(s){return new(s||p)(t.Y36(l.IN),t.Y36(f.qu),t.Y36(u.z),t.Y36(l.Br))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-cuerpo"]],decls:14,vars:3,consts:[[1,"title-cuerpo"],["expand","block",3,"click"],[1,"container"],["alt","Cuerpo",3,"src"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],["id","seleccionar-parte-button","type","button","expand","block",3,"click"],["id","cabeza-button",1,"btn-cabeza","floating-btn",3,"click"],[1,"btn-torso","floating-btn",3,"click"],[1,"btn-brazo-iz","floating-btn",3,"click"],[1,"btn-brazo-de","floating-btn",3,"click"],[1,"btn-mano-iz","floating-btn",3,"click"],[1,"btn-mano-de","floating-btn",3,"click"],[1,"btn-pierna-iz","floating-btn",3,"click"],[1,"btn-pierna-de","floating-btn",3,"click"],[1,"btn-pie-iz","floating-btn",3,"click"],[1,"btn-pie-de","floating-btn",3,"click"],[3,"formGroup"],["formControlName","parteCuerpo","placeholder","Seleccione parte"],[3,"value",4,"ngFor","ngForOf"],["class","form-error",4,"ngIf"],[3,"value"],[1,"form-error"]],template:function(s,h){1&s&&(t.TgZ(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title",0),t._uU(4," Escoger parte del cuerpo "),t.qZA()()(),t.TgZ(5,"ion-button",1),t.NdJ("click",function(){return h.rotar()}),t._uU(6,"Rotar"),t.qZA(),t.TgZ(7,"div",2),t._UZ(8,"img",3),t.YNc(9,n,21,8,"div",4),t.YNc(10,_,8,3,"form",5),t.qZA()(),t.TgZ(11,"ion-footer")(12,"ion-button",6),t.NdJ("click",function(){return h.escoger()}),t._uU(13," Escoger "),t.qZA()()),2&s&&(t.xp6(8),t.Q6J("src",h.cuerpo,t.LSH),t.xp6(1),t.Q6J("ngIf",""===h.image),t.xp6(1),t.Q6J("ngIf",""!==h.image))},dependencies:[o.sg,o.O5,f._Y,f.JJ,f.JL,l.YG,l.W2,l.fr,l.Gu,l.Ie,l.Q$,l.t9,l.n0,l.wd,l.sr,l.QI,f.sg,f.u],styles:[".container[_ngcontent-%COMP%]{position:relative;width:100%}.title-cuerpo[_ngcontent-%COMP%]{padding-inline:0px;text-align:center;font-size:x-large}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.container[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%]{position:absolute;background-color:transparent;color:#fff;font-size:16px;padding:10px;border:none;cursor:pointer;border-radius:5px;border-style:solid;border-color:#000;border-width:1px}.container[_ngcontent-%COMP%]   .btn-cabeza[_ngcontent-%COMP%]{top:12%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-torso[_ngcontent-%COMP%]{top:40%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-brazo-iz[_ngcontent-%COMP%]{top:30%;left:70%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-brazo-de[_ngcontent-%COMP%]{top:30%;left:30%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-mano-iz[_ngcontent-%COMP%]{top:45%;left:85%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-mano-de[_ngcontent-%COMP%]{top:45%;left:15%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pierna-iz[_ngcontent-%COMP%]{top:65%;left:70%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pierna-de[_ngcontent-%COMP%]{top:65%;left:30%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pie-iz[_ngcontent-%COMP%]{top:85%;left:70%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .btn-pie-de[_ngcontent-%COMP%]{top:85%;left:30%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%]:hover{background-color:#000}"]}),p})()},7556:(M,C,d)=>{d.d(C,{e:()=>o});var m=d(2340),f=d(8256),t=d(529),l=d(3079);const u=m.N.API.API_URL;let o=(()=>{class n{constructor(i,c){this.http=i,this.appService=c;let _=localStorage.getItem("user");this.user=_?JSON.parse(_):{email:"",names:""}}login(i){return this.http.post(u+(this.appService.isPhone?m.N.API.API_LOGIN_USUARIO_ENDPOINT:m.N.API.API_LOGIN_MEDICO_ENDPOINT),i)}setUser(i){this.user=i,localStorage.setItem("user",JSON.stringify(i))}logout(){localStorage.removeItem("user")}}return n.\u0275fac=function(i){return new(i||n)(f.LFG(t.eN),f.LFG(l.z))},n.\u0275prov=f.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);