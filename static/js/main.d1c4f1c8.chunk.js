(this.webpackJsonpsorting_visualizer=this.webpackJsonpsorting_visualizer||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(5),s=n.n(i),l=(n(18),n(19),n(3)),o=n(2),u=function(e,t,n){return t===n.length-1&&1!==n.length?Object(c.jsx)("i",{className:"fa fa-undo","aria-hidden":"true"}):e.length>0?Object(c.jsx)("i",{className:"fa fa-pause","aria-hidden":"true"}):Object(c.jsx)("i",{className:"fa fa-play","aria-hidden":"true"})},h={"Bubble Sort":{slow:60,medium:20,fast:7},"Merge Sort":{slow:60,medium:30,fast:10},"Selection Sort":{slow:60,medium:20,fast:10},"Insertion Sort":{slow:60,medium:50,fast:20}},b=function(e,t,n){var c=e[t];return e[t]=e[n],e[n]=c,e},j=function(e,t,n){for(var c=e.slice(),a=n[n.length-1].slice(),r=0;r<c.length-1;r++){for(var i=0;i<c.length-r-1;i++)c[i]>c[i+1]&&(c=b(c,i,i+1)),t.push(c.slice()),a[i]=1,a[i+1]=1,n.push(a.slice()),a[i]=0,a[i+1]=0;a[c.length-1-r]=2,t.push(c.slice()),n.push(a.slice())}n[n.length-1]=new Array(c.length).fill(3)},f=function(e,t,n,c,a){for(var r=[];e.length>0&&t.length>0;)e[0]<t[0]?(r.push(e.shift()),O(r,n,c)):(r.push(t.shift()),O(r,n,c)),d(n,a,r.length-1,[],[]);return 0===e.length&&0===t.length||(d(n,a,r.length,e,t),r=[].concat(Object(l.a)(r),Object(l.a)(e)),r=[].concat(Object(l.a)(r),Object(l.a)(t)),O(r,n,c)),r},d=function(e,t,n,c,a){var r=t[t.length-1].slice(),i=e+n+c.length+a.length;i===(n+=e)?r.fill(1,n,i+1):r.fill(1,n,i),t.push(r)},O=function(e,t,n){var c=n[n.length-1].slice();c.splice.apply(c,[t,e.length].concat(Object(l.a)(e))),n.push(c)},g=function e(t,n,c,a){if(1===t.length)return t;var r=Math.floor(t.length/2),i=t.slice(0,r),s=t.slice(r),l=e(i,n,c,a),o=e(s,n+r,c,a),u=f(l,o,n,c,a);return c.push(c[c.length-1].slice()),a.push(a[a.length-1].fill(u.length===c[0].length?3:0)),u},p=function(e,t,n){for(var c=e.slice(),a=c.length,r=n[n.length-1].slice(),i=0;i<a;i++){for(var s=i,l=i+1;l<a;l++)r[s]=1,r[l]=1,c[s]>c[l]&&(r[s]=0,s=l),t.push(c.slice()),n.push(r.slice()),r[l]=0;if(s!==i){var o=c[i];c[i]=c[s],c[s]=o}r[s]=0,r[i]=2,t.push(c.slice()),i===c.length-1?n.push(new Array(c.length).fill(3)):n.push(r.slice())}return c},m=function(e,t,n){for(var c=e.slice(),a=n[n.length-1].slice(),r=c.length,i=1;i<r;i++){var s=c[i],l=i-1;for(a[l]=1,a[i]=1,n.push(a.slice()),t.push(c.slice());l>=0&&c[l]>s;)c[l+1]=c[l],a[l+1]=0,a[l]=1,0!==l&&(a[l-1]=1),n.push(a.slice()),t.push(c.slice()),l--;c[l+1]=s,a[l]=0,a[l+1]=0,n.push(a.slice()),t.push(c.slice())}for(var o=e.length-1;o>=0;o--)a[o]=1,n.push(a.slice()),t.push(c.slice());return c};function v(e){var t=e.clickHandler,n=e.title,a=e.item,r=e.disabled;return Object(c.jsx)("button",{className:"myButton",onClick:function(){return t(a)},disabled:r,children:n})}function x(e){var t=e.height,n=e.color,a=e.index,r={height:"".concat(t,"%"),backgroundColor:n};return Object(c.jsx)("div",{className:"bar-number",style:r},a)}function S(e){var t=e.arr,n=e.colorStep;if(!t)return null;var a={0:"whitesmoke",1:"red",2:"red",3:"red"};return Object(c.jsx)("div",{className:"bar-container",children:t.map((function(e,t){var r=e/1e3*100,i=a[n[t]];return Object(c.jsx)(x,{height:r,color:i,index:t},t)}))})}var k=n(4),w=n(12),N=["slow","medium","fast"],y={slow:">",medium:">>",fast:">>>"},B=function(e){var t=e.clickHandler,n=e.speed;return Object(c.jsx)("div",{className:"radio-container",children:N.map((function(e,a){return Object(c.jsxs)("label",{className:"radio",children:[Object(c.jsx)("input",{type:"radio",name:"animationSpeed",value:e,checked:e===n,onChange:t},a),y[e]]},a)}))})},A=function(e){var t=e.dropDownSelect,n=e.selectAlgo,r=e.radioSelect,i=e.speed,s=e.changeNumberOfBars,l=e.numberOfBars,u=Object(a.useState)(null),h=Object(o.a)(u,2),b=h[0],j=h[1],f=n.map((function(e){return{value:e,label:e}})),d={placeholder:function(e){return Object(k.a)(Object(k.a)({},e),{},{color:"white"})},option:function(e,t){return Object(k.a)(Object(k.a)({},e),{},{borderBottom:"1px solid black",color:t.isSelected?"black":"whitesmoke",padding:20,backgroundColor:t.isSelected?"whitesmoke":"black",fontSize:15})},control:function(e){return Object(k.a)(Object(k.a)({},e),{},{width:155,background:"black",border:"1px solid whitesmoke",borderRadius:3,color:"white",height:30,fontSize:15})},singleValue:function(e,t){return Object(k.a)(Object(k.a)({},e),{},{opacity:1,transition:"opacity 300ms",color:"white"})}};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsxs)("div",{className:"logoWrapper",children:[Object(c.jsx)("span",{className:"stylish",children:"Visual"}),Object(c.jsx)("span",{className:"logo",children:"Sorting"})]}),Object(c.jsx)("div",{className:"dropdown-nav",children:Object(c.jsx)(w.a,{options:f,value:b,onChange:function(e){j(e),t(e.value)},styles:d,placeholder:"Algorithm"})}),Object(c.jsxs)("div",{className:"num-bar-nav",children:["# of Bars",Object(c.jsx)("input",{id:"bar-range",type:"range",min:"10",max:"50",value:l,step:"10",onChange:s})]}),Object(c.jsxs)("div",{className:"speed-nav",children:["Speed",Object(c.jsx)(B,{clickHandler:r,speed:i})]})]})})},H=(n(39),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(30),s=Object(o.a)(i,2),b=s[0],f=s[1],d=Object(a.useState)([]),O=Object(o.a)(d,2),x=O[0],k=O[1],w=Object(a.useState)("medium"),N=Object(o.a)(w,2),y=N[0],B=N[1],H=Object(a.useState)(0),M=Object(o.a)(H,2),C=M[0],E=M[1],z=Object(a.useState)([]),I=Object(o.a)(z,2),R=I[0],D=I[1],J=Object(a.useState)([]),T=Object(o.a)(J,2),V=T[0],_=T[1],F=Object(a.useState)([]),W=Object(o.a)(F,2),q=W[0],G=W[1],K=Object(a.useState)(""),L=Object(o.a)(K,2),P=L[0],Q=L[1],U=Object(a.useRef)(C);U.current=C,Object(a.useEffect)((function(){$(b)}),[b]),Object(a.useEffect)((function(){Y(),X()}),[n]),Object(a.useEffect)((function(){Z(P)}),[P]);var X=function(){var e=new Array(n.length).fill(0);D([e])},Y=function(){var e=[Object(l.a)(n)];k(e)},Z=function(e){!function(e,t,n,c,a){switch(e){case"Bubble Sort":t();break;case"Merge Sort":n();break;case"Selection Sort":c();break;case"Insertion Sort":a();break;default:;}}(e,ne,ce,ee,te)},$=function(e){ae();var t=function(e){for(var t,n,c=[],a=0;a<e;a++)c.push((t=5,n=1e3,Math.floor(Math.random()*(n-t+1)+t)));return c}(e);r(t),E(0),G(["Selection Sort","Insertion Sort","Bubble Sort","Merge Sort"])},ee=function(){ae();var e=Object(l.a)(n);p(e,x,R)},te=function(){ae();var e=Object(l.a)(n);m(e,x,R)},ne=function(){ae();var e=Object(l.a)(n);j(e,x,R)},ce=function(){ae();var e=Object(l.a)(n);g(e,0,x,R)},ae=function(){V.forEach((function(e){return clearTimeout(e)})),_([])},re=function(){1===x.length&&Z(P);var e=h[P][y]||30;ae();for(var t=[],n=0;n<x.length-C-1;n++){var c=setTimeout((function(){E(U.current+1)}),n*e);t.push(c)}_(t)};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(A,{dropDownSelect:function(e){Y(),X(),E(0),Q(e)},selectAlgo:q,radioSelect:function(e){ae(),B(e.target.value)},speed:y,changeNumberOfBars:function(e){f(e.target.value)},numberOfBars:b}),Object(c.jsxs)("div",{className:"controls-container",children:[Object(c.jsx)(v,{clickHandler:$,title:"Reset",item:b}),Object(c.jsx)(v,{clickHandler:function(){C<=0||(ae(),E(C-1))},title:Object(c.jsx)("i",{className:"fa fa-chevron-left"})}),Object(c.jsx)(v,{clickHandler:function(){if(C===x.length-1&&1!==x.length)return E(0),void re();V.length>0?ae():re()},title:u(V,C,x),item:P,disabled:""===P}),Object(c.jsx)(v,{clickHandler:function(){C>=x.length-1||(ae(),E(C+1))},title:Object(c.jsx)("i",{className:"fa fa-chevron-right"})})]}),Object(c.jsx)(S,{arr:x[C],colorStep:R[C]})]})});var M=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(H,{})})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d1c4f1c8.chunk.js.map