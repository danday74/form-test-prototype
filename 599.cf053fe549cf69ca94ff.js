"use strict";(self.webpackChunkform_test=self.webpackChunkform_test||[]).push([[599],{8599:(Co,Y,c)=>{c.r(Y),c.d(Y,{Route2Module:()=>yo});var m=c(8583),H=c(7353),M=c(2145),ht=c(3759),r=c(639),f=c(665);const G={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let O;const dt=new Uint8Array(16);function gt(){if(!O&&(O="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(dt)}const p=[];for(let t=0;t<256;++t)p.push((t+256).toString(16).slice(1));const yt=function(t,e,n){if(G.randomUUID&&!e&&!t)return G.randomUUID();const o=(t=t||{}).random||(t.rng||gt)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(let a=0;a<16;++a)e[n+a]=o[a];return e}return function(t,e=0){return(p[t[e+0]]+p[t[e+1]]+p[t[e+2]]+p[t[e+3]]+"-"+p[t[e+4]]+p[t[e+5]]+"-"+p[t[e+6]]+p[t[e+7]]+"-"+p[t[e+8]]+p[t[e+9]]+"-"+p[t[e+10]]+p[t[e+11]]+p[t[e+12]]+p[t[e+13]]+p[t[e+14]]+p[t[e+15]]).toLowerCase()}(o)},x=function(t,e){return t===e||t!=t&&e!=e},Z=function(t,e){for(var n=t.length;n--;)if(x(t[n][0],e))return n;return-1};var Tt=Array.prototype.splice;function h(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}h.prototype.clear=function(){this.__data__=[],this.size=0},h.prototype.delete=function(t){var e=this.__data__,n=Z(e,t);return!(n<0||(n==e.length-1?e.pop():Tt.call(e,n,1),--this.size,0))},h.prototype.get=function(t){var e=this.__data__,n=Z(e,t);return n<0?void 0:e[n][1]},h.prototype.has=function(t){return Z(this.__data__,t)>-1},h.prototype.set=function(t,e){var n=this.__data__,o=Z(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this};const T=h;var t,L=c(8209),E=c(309),Yt=E.Z["__core-js_shared__"],$=(t=/[^.]+$/.exec(Yt&&Yt.keys&&Yt.keys.IE_PROTO||""))?"Symbol(src)_1."+t:"";var d=c(4214),Lt=Function.prototype.toString;var qt=/^\[object .+?Constructor\]$/,ee=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const re=function(t){return!(!(0,d.Z)(t)||function(t){return!!$&&$ in t}(t))&&((0,L.Z)(t)?ee:qt).test(function(t){if(null!=t){try{return Lt.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t))},I=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return re(n)?n:void 0},B=I(E.Z,"Map"),C=I(Object,"create");var he=Object.prototype.hasOwnProperty;var ye=Object.prototype.hasOwnProperty;function g(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}g.prototype.clear=function(){this.__data__=C?C(null):{},this.size=0},g.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},g.prototype.get=function(t){var e=this.__data__;if(C){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(e,t)?e[t]:void 0},g.prototype.has=function(t){var e=this.__data__;return C?void 0!==e[t]:ye.call(e,t)},g.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=C&&void 0===e?"__lodash_hash_undefined__":e,this};const K=g,w=function(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map};function v(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}v.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(B||T),string:new K}},v.prototype.delete=function(t){var e=w(this,t).delete(t);return this.size-=e?1:0,e},v.prototype.get=function(t){return w(this,t).get(t)},v.prototype.has=function(t){return w(this,t).has(t)},v.prototype.set=function(t,e){var n=w(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this};const P=v;function y(t){var e=this.__data__=new T(t);this.size=e.size}y.prototype.clear=function(){this.__data__=new T,this.size=0},y.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},y.prototype.get=function(t){return this.__data__.get(t)},y.prototype.has=function(t){return this.__data__.has(t)},y.prototype.set=function(t,e){var n=this.__data__;if(n instanceof T){var o=n.__data__;if(!B||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new P(o)}return n.set(t,e),this.size=n.size,this};const ze=y;var Ye=function(){try{var t=I(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();const F=Ye,S=function(t,e,n){"__proto__"==e&&F?F(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},N=function(t,e,n){(void 0!==n&&!x(t[e],n)||void 0===n&&!(e in t))&&S(t,e,n)};const $e=function(e,n,o){for(var a=-1,s=Object(e),l=o(e),i=l.length;i--;){var u=l[++a];if(!1===n(s[u],u,s))break}return e};var q="object"==typeof exports&&exports&&!exports.nodeType&&exports,X=q&&"object"==typeof module&&module&&!module.nodeType&&module,W=X&&X.exports===q?E.Z.Buffer:void 0,k=W?W.allocUnsafe:void 0;const tt=E.Z.Uint8Array,en=function(t,e){var n=e?function(t){var e=new t.constructor(t.byteLength);return new tt(e).set(new tt(t)),e}(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var et=Object.create,on=function(){function t(){}return function(e){if(!(0,d.Z)(e))return{};if(et)return et(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const an=on,nt=(0,c(4184).Z)(Object.getPrototypeOf,Object);var rt=c(1550);var ot=c(3563),A=c(4654),D=c(8402),at=c(6539);var _n=c(3672),mn=c(7290),st=Function.prototype.toString,vn=Object.prototype.hasOwnProperty,yn=st.call(Object);var On=c(3144);const U=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var Tn=Object.prototype.hasOwnProperty;const wn=function(t,e,n){var o=t[e];(!Tn.call(t,e)||!x(o,n)||void 0===n&&!(e in t))&&S(t,e,n)};var Mn=c(1919);var Sn=Object.prototype.hasOwnProperty;const Dn=function(t){if(!(0,d.Z)(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=(0,rt.Z)(t),n=[];for(var o in t)"constructor"==o&&(e||!Sn.call(t,o))||n.push(o);return n},it=function(t){return(0,D.Z)(t)?(0,Mn.Z)(t,!0):Dn(t)},Jn=function(t){return function(t,e,n,o){var a=!n;n||(n={});for(var s=-1,l=e.length;++s<l;){var i=e[s],u=o?o(n[i],t[i],i,n,t):void 0;void 0===u&&(u=t[i]),a?S(n,i,u):wn(n,i,u)}return n}(t,it(t))},zn=function(t,e,n,o,a,s,l){var i=U(t,n),u=U(e,n),_t=l.get(u);if(_t)N(t,n,_t);else{var _=s?s(i,u,n+"",t,e,l):void 0,b=void 0===_;if(b){var Q=(0,A.Z)(u),z=!Q&&(0,_n.Z)(u),mt=!Q&&!z&&(0,On.Z)(u);_=u,Q||z||mt?(0,A.Z)(i)?_=i:function(t){return(0,at.Z)(t)&&(0,D.Z)(t)}(i)?_=function(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}(i):z?(b=!1,_=function(t,e){if(e)return t.slice();var n=t.length,o=k?k(n):new t.constructor(n);return t.copy(o),o}(u,!0)):mt?(b=!1,_=en(u,!0)):_=[]:function(t){if(!(0,at.Z)(t)||"[object Object]"!=(0,mn.Z)(t))return!1;var e=nt(t);if(null===e)return!0;var n=vn.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&st.call(n)==yn}(u)||(0,ot.Z)(u)?(_=i,(0,ot.Z)(i)?_=Jn(i):(!(0,d.Z)(i)||(0,L.Z)(i))&&(_=function(t){return"function"!=typeof t.constructor||(0,rt.Z)(t)?{}:an(nt(t))}(u))):b=!1}b&&(l.set(u,_),a(_,u,o,s,l),l.delete(u)),N(t,n,_)}},Yn=function ct(t,e,n,o,a){t!==e&&$e(e,function(s,l){if(a||(a=new ze),(0,d.Z)(s))zn(t,e,l,n,ct,o,a);else{var i=o?o(U(t,l),s,l+"",t,e,a):void 0;void 0===i&&(i=s),N(t,l,i)}},it)},lt=function(t){return t},jn=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var ut=Math.max;const Kn=function(t){return function(){return t}};var qn=F?function(t,e){return F(t,"toString",{configurable:!0,enumerable:!1,value:Kn(e),writable:!0})}:lt,tr=Date.now,nr=function(t){var e=0,n=0;return function(){var o=tr(),a=16-(o-n);if(n=o,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(qn);const rr=nr,ar=function(t,e){return rr(function(t,e,n){return e=ut(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,s=ut(o.length-e,0),l=Array(s);++a<s;)l[a]=o[e+a];a=-1;for(var i=Array(e+1);++a<e;)i[a]=o[a];return i[e]=n(l),jn(t,this,i)}}(t,e,lt),t+"")};var sr=c(8078);var ur=function(t){return ar(function(e,n){var o=-1,a=n.length,s=a>1?n[a-1]:void 0,l=a>2?n[2]:void 0;for(s=t.length>3&&"function"==typeof s?(a--,s):void 0,l&&function(t,e,n){if(!(0,d.Z)(n))return!1;var o=typeof e;return!!("number"==o?(0,D.Z)(n)&&(0,sr.Z)(e,n.length):"string"==o&&e in n)&&x(n[e],t)}(n[0],n[1],l)&&(s=a<3?void 0:s,a=1),e=Object(e);++o<a;){var i=n[o];i&&t(e,i,o)}return e})}(function(t,e,n){Yn(t,e,n)});const pr=ur;var pt=c(3982),fr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_r=/^\w*$/;function V(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var o=arguments,a=e?e.apply(this,o):o[0],s=n.cache;if(s.has(a))return s.get(a);var l=t.apply(this,o);return n.cache=s.set(a,l)||s,l};return n.cache=new(V.Cache||P),n}V.Cache=P;const gr=V;var br=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Or=/\\(\\)?/g,xr=function(t){var e=gr(t,function(o){return 500===n.size&&n.clear(),o}),n=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(br,function(n,o,a,s){e.push(a?s.replace(Or,"$1"):o||n)}),e});const Zr=xr;var Tr=c(366);const wr=function(t,e){return(0,A.Z)(t)?t:function(t,e){if((0,A.Z)(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!(0,pt.Z)(t))||_r.test(t)||!fr.test(t)||null!=e&&t in Object(e)}(t,e)?[t]:Zr((0,Tr.Z)(t))},Mr=function(t){if("string"==typeof t||(0,pt.Z)(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e},Sr=function(t,e,n){var o=null==t?void 0:function(t,e){for(var n=0,o=(e=wr(e,t)).length;null!=t&&n<o;)t=t[Mr(e[n++])];return n&&n==o?t:void 0}(t,e);return void 0===o?n:o};let Nr=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-error-required"]],inputs:{data:"data"},decls:3,vars:3,template:function(n,o){1&n&&(r.TgZ(0,"span"),r._uU(1),r.ALo(2,"lowercase"),r.qZA()),2&n&&(r.xp6(1),r.Oqu(o.data.label?r.lcZ(2,1,o.data.label)+" "+o.data.key:o.data.key))},pipes:[m.i8],styles:[""]}),t})(),ft=(()=>{class t{constructor(n,o){this.templateRef=n,this.vcRef=o,this.context={$implicit:null,appVar:null},this.hasView=!1}set appVar(n){this.context.$implicit=this.context.appVar=n,this.hasView||(this.vcRef.createEmbeddedView(this.templateRef,this.context),this.hasView=!0)}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(r.Rgc),r.Y36(r.s_b))},t.\u0275dir=r.lG2({type:t,selectors:[["","appVar",""]],inputs:{appVar:"appVar"}}),t})();function Dr(t,e){if(1&t&&(r.TgZ(0,"span"),r._uU(1),r.ALo(2,"lowercase"),r.qZA()),2&t){const n=r.oxw(3);r.xp6(1),r.hij("",r.lcZ(2,1,n.data.label)," is ")}}function Ur(t,e){if(1&t&&(r.TgZ(0,"span"),r.YNc(1,Dr,3,3,"span",1),r.TgZ(2,"span"),r._uU(3),r.qZA(),r.qZA()),2&t){const n=r.oxw().appVar,o=r.oxw();r.xp6(1),r.Q6J("ngIf",o.data.label),r.xp6(2),r.AsE("",n.actualLength,"/",n.requiredLength," characters")}}function Vr(t,e){if(1&t&&(r.TgZ(0,"span"),r._uU(1),r.qZA()),2&t){const n=r.oxw(2);r.xp6(1),r.Oqu(n.data.key)}}function Jr(t,e){if(1&t&&(r.ynx(0),r.YNc(1,Ur,4,3,"span",1),r.YNc(2,Vr,2,1,"span",1),r.BQk()),2&t){const n=e.appVar;r.xp6(1),r.Q6J("ngIf",n),r.xp6(1),r.Q6J("ngIf",!n)}}const Qr={required:{component:Nr,dataProps:["label"]},minlength:{component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-error-minlength"]],inputs:{data:"data"},decls:1,vars:1,consts:[[4,"appVar"],[4,"ngIf"]],template:function(n,o){1&n&&r.YNc(0,Jr,3,2,"ng-container",0),2&n&&r.Q6J("appVar",null==o.data.model||null==o.data.model.errors?null:o.data.model.errors.minlength)},directives:[ft,m.O5],pipes:[m.i8],styles:[""]}),t})(),dataProps:["label","model"]}};var J=c(5345);class Yr{constructor(e){this.notifier=e}call(e,n){const o=new Hr(e),a=(0,J.ft)(this.notifier,new J.IY(o));return a&&!o.seenValue?(o.add(a),n.subscribe(o)):o}}class Hr extends J.Ds{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var Gr=c(7709);let jr=(()=>{class t{constructor(){this.unsubscribe$=new Gr.xQ}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(n,o){},encapsulation:2}),t})(),Lr=(()=>{class t{transform(n){return typeof n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=r.Yjl({name:"typeof",type:t,pure:!0}),t})();const $r=["errorRef"];function Br(t,e){1&t&&(r.TgZ(0,"span"),r._uU(1,"no error"),r.qZA())}function Kr(t,e){if(1&t&&(r.TgZ(0,"span"),r._uU(1),r.qZA()),2&t){const n=r.oxw(2).appVar;r.xp6(1),r.hij("",n," error")}}function qr(t,e){if(1&t&&(r.TgZ(0,"span"),r._uU(1),r.qZA()),2&t){const n=r.oxw(2).appVar;r.xp6(1),r.Oqu(n.formError)}}function Xr(t,e){1&t&&r.GkF(0)}function Wr(t,e){if(1&t&&r.YNc(0,Xr,1,0,"ng-container",7),2&t){r.oxw(5);const n=r.MAs(5);r.Q6J("ngTemplateOutlet",n)}}function kr(t,e){if(1&t&&(r.YNc(0,qr,2,1,"span",1),r.YNc(1,Wr,1,1,"ng-template",null,6,r.W1O)),2&t){const n=r.MAs(2),o=r.oxw().appVar;r.Q6J("ngIf","string"===o.type)("ngIfElse",n)}}function to(t,e){if(1&t&&(r.ynx(0),r.YNc(1,Kr,2,1,"span",1),r.YNc(2,kr,3,2,"ng-template",null,5,r.W1O),r.BQk()),2&t){const n=e.appVar,o=r.MAs(3);r.xp6(1),r.Q6J("ngIf",!n.formError)("ngIfElse",o)}}const eo=function(t,e){return{formError:t,type:e}};function no(t,e){if(1&t&&(r.ynx(0),r.YNc(1,to,4,2,"ng-container",4),r.ALo(2,"typeof"),r.BQk()),2&t){const n=e.appVar,o=r.oxw(2);r.xp6(1),r.Q6J("appVar",r.WLB(3,eo,o.formErrors[n],r.lcZ(2,1,o.formErrors[n])))}}function ro(t,e){if(1&t&&r.YNc(0,no,3,6,"ng-container",4),2&t){const n=r.oxw();r.Q6J("appVar",n.keys(n.model.errors)[0])}}function oo(t,e){}let ao=(()=>{class t extends jr{constructor(n){super(),this.cfr=n,this.keys=M.Z,this.errors={},this.formErrors={}}ngOnInit(){this.setFormErrors()}ngAfterViewInit(){this.model.valueChanges.pipe(function(t){return e=>e.lift(new Yr(t))}(this.unsubscribe$)).subscribe(()=>{this.createErrorComponent()})}ngOnChanges(n){n.errors&&!n.errors.firstChange&&this.setFormErrors()}setFormErrors(){this.formErrors=pr({},Qr,this.errors)}createErrorComponent(){this.errorRef.clear();const n=this.model.errors?(0,M.Z)(this.model.errors)[0]:null,o=n?this.formErrors[n]:null;if(o&&"object"==typeof o&&o.component){const a=this.cfr.resolveComponentFactory(o.component);this.errorRef.createComponent(a).instance.data=(o.dataProps||[]).reduce((i,u)=>(i[u]=Sr(this,u),i),{key:n})}}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(r._Vd))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-form-errors"]],viewQuery:function(n,o){if(1&n&&r.Gf($r,7,r.s_b),2&n){let a;r.iGM(a=r.CRH())&&(o.errorRef=a.first)}},inputs:{label:"label",model:"model",errors:"errors"},features:[r.qOj,r.TTD],decls:6,vars:4,consts:[[1,"x3ui-form-errors"],[4,"ngIf","ngIfElse"],["errorExistsRef",""],["errorRef",""],[4,"appVar"],["showErrorRef",""],["errorObjectRef",""],[4,"ngTemplateOutlet"]],template:function(n,o){if(1&n&&(r.TgZ(0,"div",0),r.YNc(1,Br,2,0,"span",1),r.YNc(2,ro,1,1,"ng-template",null,2,r.W1O),r.YNc(4,oo,0,0,"ng-template",null,3,r.W1O),r.qZA()),2&n){const a=r.MAs(3);r.ekj("invisible",!o.model||o.model.valid||o.model.untouched),r.xp6(1),r.Q6J("ngIf",!o.model||o.model.valid)("ngIfElse",a)}},directives:[m.O5,ft,m.tP],pipes:[Lr],styles:[""]}),t})();const so=["containerRef"];function io(t,e){if(1&t&&(r.ynx(0),r.TgZ(1,"label",3),r._uU(2),r.qZA(),r.BQk()),2&t){const n=r.oxw();r.xp6(1),r.Q6J("for",n.id),r.xp6(1),r.Oqu(n.label)}}const co=[[["input"],["select"]]],lo=["[input, select]"];let uo=(()=>{class t{constructor(){this.errors={}}ngAfterViewInit(){const n=this.containerRef.nativeElement.children;this.setFormControl(n),this.checkProjectedContent(n),this.setId()}setFormControl(n){const o=Array.from(n);this.formControl=o.find(a=>"INPUT"===a.tagName||"SELECT"===a.tagName)}checkProjectedContent(n){if(n.length!==(this.label?3:2)||!this.model||!this.formControl)throw Error("only one <select> or one <input> element should be content projected to <app-form-control> and it must have [(ngModel)] or an equivalent")}setId(){setTimeout(()=>{this.id=this.formControl.id||yt(),this.formControl.id=this.id})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-form-control"]],contentQueries:function(n,o,a){if(1&n&&r.Suo(a,f.On,5),2&n){let s;r.iGM(s=r.CRH())&&(o.model=s.first)}},viewQuery:function(n,o){if(1&n&&r.Gf(so,5),2&n){let a;r.iGM(a=r.CRH())&&(o.containerRef=a.first)}},inputs:{label:"label",errors:"errors"},ngContentSelectors:lo,decls:5,vars:4,consts:[["containerRef",""],[4,"ngIf"],[3,"label","model","errors"],[1,"form-label",3,"for"]],template:function(n,o){1&n&&(r.F$t(co),r.TgZ(0,"div",null,0),r.YNc(2,io,3,2,"ng-container",1),r.Hsn(3),r._UZ(4,"app-form-errors",2),r.qZA()),2&n&&(r.xp6(2),r.Q6J("ngIf",o.label),r.xp6(2),r.Q6J("label",o.label)("model",o.model)("errors",o.errors))},directives:[m.O5,ao],styles:[""]}),t})();function po(t,e){if(1&t&&(r.TgZ(0,"option",9),r._uU(1),r.qZA()),2&t){const n=e.$implicit;r.Q6J("value",n.value),r.xp6(1),r.Oqu(n.name)}}const fo=function(){return{required:"dont leave me empty"}},_o=[{path:"",component:(()=>{class t{constructor(){this.keys=M.Z,this.cars=ht.N,this.model={surname:"",car:""}}submit(){console.log("submit",this.model)}carChange(n){this.model.car=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-route2"]],decls:11,vars:6,consts:[["novalidate","",1,"x3ui-form",3,"ngSubmit"],["myForm","ngForm"],["label","Surname",3,"errors"],["name","surname","required","","minlength","5","pattern","^[a-z]+$",1,"form-control",3,"ngModel","ngModelChange"],["label","Car"],["name","car","required","",1,"form-select",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(n,o){if(1&n&&(r.TgZ(0,"form",0,1),r.NdJ("ngSubmit",function(){return o.submit()}),r.TgZ(2,"app-form-control",2),r.TgZ(3,"input",3),r.NdJ("ngModelChange",function(s){return o.model.surname=s}),r.qZA(),r.qZA(),r.TgZ(4,"app-form-control",4),r.TgZ(5,"select",5),r.NdJ("ngModelChange",function(s){return o.carChange(s)}),r.TgZ(6,"option",6),r._uU(7,"Choose a car"),r.qZA(),r.YNc(8,po,2,2,"option",7),r.qZA(),r.qZA(),r.TgZ(9,"button",8),r._uU(10,"submit"),r.qZA(),r.qZA()),2&n){const a=r.MAs(1);r.xp6(2),r.Q6J("errors",r.DdM(5,fo)),r.xp6(1),r.Q6J("ngModel",o.model.surname),r.xp6(2),r.Q6J("ngModel",o.model.car),r.xp6(3),r.Q6J("ngForOf",o.cars),r.xp6(1),r.Q6J("disabled",a.form.invalid)}},directives:[f._Y,f.JL,f.F,uo,f.Fj,f.Q7,f.wO,f.c5,f.JJ,f.On,f.EJ,f.YN,f.Kr,m.sg],styles:[""]}),t})()}];let mo=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[H.Bz.forChild(_o)],H.Bz]}),t})(),ho=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[m.ez]]}),t})();var go=c(5503);let vo=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[m.ez,ho,go.D]]}),t})(),yo=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[m.ez,mo,f.u5,vo]]}),t})()}}]);