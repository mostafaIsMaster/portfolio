import{L as yt}from"./lottie-web-84aad4ed.js";import{e as ht,r as bt,c as _t,w as $t,d as mt,n as Tt,p as At,A as Ot}from"./@vue-99715406.js";(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".lottie-animation-container{width:var(--lottie-animation-container-width);height:var(--lottie-animation-container-height);background-color:var(--lottie-animation-container-background-color);overflow:hidden;margin:0 auto}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();var wt=typeof global=="object"&&global&&global.Object===Object&&global,ze=wt,St=typeof self=="object"&&self&&self.Object===Object&&self,jt=ze||St||Function("return this")(),A=jt,Pt=A.Symbol,j=Pt,qe=Object.prototype,Et=qe.hasOwnProperty,Ct=qe.toString,N=j?j.toStringTag:void 0;function xt(e){var t=Et.call(e,N),r=e[N];try{e[N]=void 0;var n=!0}catch{}var i=Ct.call(e);return n&&(t?e[N]=r:delete e[N]),i}var Lt=Object.prototype,It=Lt.toString;function Dt(e){return It.call(e)}var Mt="[object Null]",Ft="[object Undefined]",_e=j?j.toStringTag:void 0;function q(e){return e==null?e===void 0?Ft:Mt:_e&&_e in Object(e)?xt(e):Dt(e)}function C(e){return e!=null&&typeof e=="object"}var Bt=Array.isArray,U=Bt;function Y(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ht="[object AsyncFunction]",Nt="[object Function]",Rt="[object GeneratorFunction]",Ut="[object Proxy]";function Ye(e){if(!Y(e))return!1;var t=q(e);return t==Nt||t==Rt||t==Ht||t==Ut}var Gt=A["__core-js_shared__"],re=Gt,$e=function(){var e=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Kt(e){return!!$e&&$e in e}var zt=Function.prototype,qt=zt.toString;function L(e){if(e!=null){try{return qt.call(e)}catch{}try{return e+""}catch{}}return""}var Yt=/[\\^$.*+?()[\]{}|]/g,Wt=/^\[object .+?Constructor\]$/,Vt=Function.prototype,Jt=Object.prototype,Xt=Vt.toString,Zt=Jt.hasOwnProperty,Qt=RegExp("^"+Xt.call(Zt).replace(Yt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function kt(e){if(!Y(e)||Kt(e))return!1;var t=Ye(e)?Qt:Wt;return t.test(L(e))}function er(e,t){return e==null?void 0:e[t]}function I(e,t){var r=er(e,t);return kt(r)?r:void 0}var tr=I(A,"WeakMap"),ie=tr,me=Object.create,rr=function(){function e(){}return function(t){if(!Y(t))return{};if(me)return me(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),nr=rr;function ar(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var or=function(){try{var e=I(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Te=or;function ir(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var sr=9007199254740991,ur=/^(?:0|[1-9]\d*)$/;function lr(e,t){var r=typeof e;return t=t??sr,!!t&&(r=="number"||r!="symbol"&&ur.test(e))&&e>-1&&e%1==0&&e<t}function We(e,t,r){t=="__proto__"&&Te?Te(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function ce(e,t){return e===t||e!==e&&t!==t}var fr=Object.prototype,cr=fr.hasOwnProperty;function Ve(e,t,r){var n=e[t];(!(cr.call(e,t)&&ce(n,r))||r===void 0&&!(t in e))&&We(e,t,r)}function k(e,t,r,n){var i=!r;r||(r={});for(var a=-1,o=t.length;++a<o;){var s=t[a],u=n?n(r[s],e[s],s,r,e):void 0;u===void 0&&(u=e[s]),i?We(r,s,u):Ve(r,s,u)}return r}var dr=9007199254740991;function Je(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=dr}function Xe(e){return e!=null&&Je(e.length)&&!Ye(e)}var pr=Object.prototype;function de(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||pr;return e===r}function gr(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var vr="[object Arguments]";function Ae(e){return C(e)&&q(e)==vr}var Ze=Object.prototype,yr=Ze.hasOwnProperty,hr=Ze.propertyIsEnumerable,br=Ae(function(){return arguments}())?Ae:function(e){return C(e)&&yr.call(e,"callee")&&!hr.call(e,"callee")},_r=br;function $r(){return!1}var Qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oe=Qe&&typeof module=="object"&&module&&!module.nodeType&&module,mr=Oe&&Oe.exports===Qe,we=mr?A.Buffer:void 0,Tr=we?we.isBuffer:void 0,Ar=Tr||$r,X=Ar,Or="[object Arguments]",wr="[object Array]",Sr="[object Boolean]",jr="[object Date]",Pr="[object Error]",Er="[object Function]",Cr="[object Map]",xr="[object Number]",Lr="[object Object]",Ir="[object RegExp]",Dr="[object Set]",Mr="[object String]",Fr="[object WeakMap]",Br="[object ArrayBuffer]",Hr="[object DataView]",Nr="[object Float32Array]",Rr="[object Float64Array]",Ur="[object Int8Array]",Gr="[object Int16Array]",Kr="[object Int32Array]",zr="[object Uint8Array]",qr="[object Uint8ClampedArray]",Yr="[object Uint16Array]",Wr="[object Uint32Array]",d={};d[Nr]=d[Rr]=d[Ur]=d[Gr]=d[Kr]=d[zr]=d[qr]=d[Yr]=d[Wr]=!0;d[Or]=d[wr]=d[Br]=d[Sr]=d[Hr]=d[jr]=d[Pr]=d[Er]=d[Cr]=d[xr]=d[Lr]=d[Ir]=d[Dr]=d[Mr]=d[Fr]=!1;function Vr(e){return C(e)&&Je(e.length)&&!!d[q(e)]}function pe(e){return function(t){return e(t)}}var ke=typeof exports=="object"&&exports&&!exports.nodeType&&exports,R=ke&&typeof module=="object"&&module&&!module.nodeType&&module,Jr=R&&R.exports===ke,ne=Jr&&ze.process,Xr=function(){try{var e=R&&R.require&&R.require("util").types;return e||ne&&ne.binding&&ne.binding("util")}catch{}}(),B=Xr,Se=B&&B.isTypedArray,Zr=Se?pe(Se):Vr,et=Zr,Qr=Object.prototype,kr=Qr.hasOwnProperty;function tt(e,t){var r=U(e),n=!r&&_r(e),i=!r&&!n&&X(e),a=!r&&!n&&!i&&et(e),o=r||n||i||a,s=o?gr(e.length,String):[],u=s.length;for(var f in e)(t||kr.call(e,f))&&!(o&&(f=="length"||i&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||lr(f,u)))&&s.push(f);return s}function rt(e,t){return function(r){return e(t(r))}}var en=rt(Object.keys,Object),tn=en,rn=Object.prototype,nn=rn.hasOwnProperty;function an(e){if(!de(e))return tn(e);var t=[];for(var r in Object(e))nn.call(e,r)&&r!="constructor"&&t.push(r);return t}function ge(e){return Xe(e)?tt(e):an(e)}function on(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var sn=Object.prototype,un=sn.hasOwnProperty;function ln(e){if(!Y(e))return on(e);var t=de(e),r=[];for(var n in e)n=="constructor"&&(t||!un.call(e,n))||r.push(n);return r}function ve(e){return Xe(e)?tt(e,!0):ln(e)}var fn=I(Object,"create"),G=fn;function cn(){this.__data__=G?G(null):{},this.size=0}function dn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var pn="__lodash_hash_undefined__",gn=Object.prototype,vn=gn.hasOwnProperty;function yn(e){var t=this.__data__;if(G){var r=t[e];return r===pn?void 0:r}return vn.call(t,e)?t[e]:void 0}var hn=Object.prototype,bn=hn.hasOwnProperty;function _n(e){var t=this.__data__;return G?t[e]!==void 0:bn.call(t,e)}var $n="__lodash_hash_undefined__";function mn(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=G&&t===void 0?$n:t,this}function x(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}x.prototype.clear=cn;x.prototype.delete=dn;x.prototype.get=yn;x.prototype.has=_n;x.prototype.set=mn;function Tn(){this.__data__=[],this.size=0}function ee(e,t){for(var r=e.length;r--;)if(ce(e[r][0],t))return r;return-1}var An=Array.prototype,On=An.splice;function wn(e){var t=this.__data__,r=ee(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():On.call(t,r,1),--this.size,!0}function Sn(e){var t=this.__data__,r=ee(t,e);return r<0?void 0:t[r][1]}function jn(e){return ee(this.__data__,e)>-1}function Pn(e,t){var r=this.__data__,n=ee(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function S(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}S.prototype.clear=Tn;S.prototype.delete=wn;S.prototype.get=Sn;S.prototype.has=jn;S.prototype.set=Pn;var En=I(A,"Map"),K=En;function Cn(){this.size=0,this.__data__={hash:new x,map:new(K||S),string:new x}}function xn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function te(e,t){var r=e.__data__;return xn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ln(e){var t=te(this,e).delete(e);return this.size-=t?1:0,t}function In(e){return te(this,e).get(e)}function Dn(e){return te(this,e).has(e)}function Mn(e,t){var r=te(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function D(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}D.prototype.clear=Cn;D.prototype.delete=Ln;D.prototype.get=In;D.prototype.has=Dn;D.prototype.set=Mn;function nt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Fn=rt(Object.getPrototypeOf,Object),at=Fn;function Bn(){this.__data__=new S,this.size=0}function Hn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Nn(e){return this.__data__.get(e)}function Rn(e){return this.__data__.has(e)}var Un=200;function Gn(e,t){var r=this.__data__;if(r instanceof S){var n=r.__data__;if(!K||n.length<Un-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new D(n)}return r.set(e,t),this.size=r.size,this}function w(e){var t=this.__data__=new S(e);this.size=t.size}w.prototype.clear=Bn;w.prototype.delete=Hn;w.prototype.get=Nn;w.prototype.has=Rn;w.prototype.set=Gn;function Kn(e,t){return e&&k(t,ge(t),e)}function zn(e,t){return e&&k(t,ve(t),e)}var ot=typeof exports=="object"&&exports&&!exports.nodeType&&exports,je=ot&&typeof module=="object"&&module&&!module.nodeType&&module,qn=je&&je.exports===ot,Pe=qn?A.Buffer:void 0,Ee=Pe?Pe.allocUnsafe:void 0;function Yn(e,t){if(t)return e.slice();var r=e.length,n=Ee?Ee(r):new e.constructor(r);return e.copy(n),n}function Wn(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function it(){return[]}var Vn=Object.prototype,Jn=Vn.propertyIsEnumerable,Ce=Object.getOwnPropertySymbols,Xn=Ce?function(e){return e==null?[]:(e=Object(e),Wn(Ce(e),function(t){return Jn.call(e,t)}))}:it,ye=Xn;function Zn(e,t){return k(e,ye(e),t)}var Qn=Object.getOwnPropertySymbols,kn=Qn?function(e){for(var t=[];e;)nt(t,ye(e)),e=at(e);return t}:it,st=kn;function ea(e,t){return k(e,st(e),t)}function ut(e,t,r){var n=t(e);return U(e)?n:nt(n,r(e))}function se(e){return ut(e,ge,ye)}function ta(e){return ut(e,ve,st)}var ra=I(A,"DataView"),ue=ra,na=I(A,"Promise"),le=na,aa=I(A,"Set"),fe=aa,xe="[object Map]",oa="[object Object]",Le="[object Promise]",Ie="[object Set]",De="[object WeakMap]",Me="[object DataView]",ia=L(ue),sa=L(K),ua=L(le),la=L(fe),fa=L(ie),E=q;(ue&&E(new ue(new ArrayBuffer(1)))!=Me||K&&E(new K)!=xe||le&&E(le.resolve())!=Le||fe&&E(new fe)!=Ie||ie&&E(new ie)!=De)&&(E=function(e){var t=q(e),r=t==oa?e.constructor:void 0,n=r?L(r):"";if(n)switch(n){case ia:return Me;case sa:return xe;case ua:return Le;case la:return Ie;case fa:return De}return t});var z=E,ca=Object.prototype,da=ca.hasOwnProperty;function pa(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&da.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var ga=A.Uint8Array,Z=ga;function he(e){var t=new e.constructor(e.byteLength);return new Z(t).set(new Z(e)),t}function va(e,t){var r=t?he(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ya=/\w*$/;function ha(e){var t=new e.constructor(e.source,ya.exec(e));return t.lastIndex=e.lastIndex,t}var Fe=j?j.prototype:void 0,Be=Fe?Fe.valueOf:void 0;function ba(e){return Be?Object(Be.call(e)):{}}function _a(e,t){var r=t?he(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var $a="[object Boolean]",ma="[object Date]",Ta="[object Map]",Aa="[object Number]",Oa="[object RegExp]",wa="[object Set]",Sa="[object String]",ja="[object Symbol]",Pa="[object ArrayBuffer]",Ea="[object DataView]",Ca="[object Float32Array]",xa="[object Float64Array]",La="[object Int8Array]",Ia="[object Int16Array]",Da="[object Int32Array]",Ma="[object Uint8Array]",Fa="[object Uint8ClampedArray]",Ba="[object Uint16Array]",Ha="[object Uint32Array]";function Na(e,t,r){var n=e.constructor;switch(t){case Pa:return he(e);case $a:case ma:return new n(+e);case Ea:return va(e,r);case Ca:case xa:case La:case Ia:case Da:case Ma:case Fa:case Ba:case Ha:return _a(e,r);case Ta:return new n;case Aa:case Sa:return new n(e);case Oa:return ha(e);case wa:return new n;case ja:return ba(e)}}function Ra(e){return typeof e.constructor=="function"&&!de(e)?nr(at(e)):{}}var Ua="[object Map]";function Ga(e){return C(e)&&z(e)==Ua}var He=B&&B.isMap,Ka=He?pe(He):Ga,za=Ka,qa="[object Set]";function Ya(e){return C(e)&&z(e)==qa}var Ne=B&&B.isSet,Wa=Ne?pe(Ne):Ya,Va=Wa,Ja=1,Xa=2,Za=4,lt="[object Arguments]",Qa="[object Array]",ka="[object Boolean]",eo="[object Date]",to="[object Error]",ft="[object Function]",ro="[object GeneratorFunction]",no="[object Map]",ao="[object Number]",ct="[object Object]",oo="[object RegExp]",io="[object Set]",so="[object String]",uo="[object Symbol]",lo="[object WeakMap]",fo="[object ArrayBuffer]",co="[object DataView]",po="[object Float32Array]",go="[object Float64Array]",vo="[object Int8Array]",yo="[object Int16Array]",ho="[object Int32Array]",bo="[object Uint8Array]",_o="[object Uint8ClampedArray]",$o="[object Uint16Array]",mo="[object Uint32Array]",c={};c[lt]=c[Qa]=c[fo]=c[co]=c[ka]=c[eo]=c[po]=c[go]=c[vo]=c[yo]=c[ho]=c[no]=c[ao]=c[ct]=c[oo]=c[io]=c[so]=c[uo]=c[bo]=c[_o]=c[$o]=c[mo]=!0;c[to]=c[ft]=c[lo]=!1;function J(e,t,r,n,i,a){var o,s=t&Ja,u=t&Xa,f=t&Za;if(r&&(o=i?r(e,n,i,a):r(e)),o!==void 0)return o;if(!Y(e))return e;var $=U(e);if($){if(o=pa(e),!s)return ar(e,o)}else{var g=z(e),p=g==ft||g==ro;if(X(e))return Yn(e,s);if(g==ct||g==lt||p&&!i){if(o=u||p?{}:Ra(e),!s)return u?ea(e,zn(o,e)):Zn(e,Kn(o,e))}else{if(!c[g])return i?e:{};o=Na(e,g,s)}}a||(a=new w);var m=a.get(e);if(m)return m;a.set(e,o),Va(e)?e.forEach(function(y){o.add(J(y,t,r,y,e,a))}):za(e)&&e.forEach(function(y,h){o.set(h,J(y,t,r,h,e,a))});var b=f?u?ta:se:u?ve:ge,_=$?void 0:b(e);return ir(_||e,function(y,h){_&&(h=y,y=e[h]),Ve(o,h,J(y,t,r,h,e,a))}),o}var To=1,Ao=4;function Oo(e){return J(e,To|Ao)}var wo="__lodash_hash_undefined__";function So(e){return this.__data__.set(e,wo),this}function jo(e){return this.__data__.has(e)}function Q(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new D;++t<r;)this.add(e[t])}Q.prototype.add=Q.prototype.push=So;Q.prototype.has=jo;function Po(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function Eo(e,t){return e.has(t)}var Co=1,xo=2;function dt(e,t,r,n,i,a){var o=r&Co,s=e.length,u=t.length;if(s!=u&&!(o&&u>s))return!1;var f=a.get(e),$=a.get(t);if(f&&$)return f==t&&$==e;var g=-1,p=!0,m=r&xo?new Q:void 0;for(a.set(e,t),a.set(t,e);++g<s;){var b=e[g],_=t[g];if(n)var y=o?n(_,b,g,t,e,a):n(b,_,g,e,t,a);if(y!==void 0){if(y)continue;p=!1;break}if(m){if(!Po(t,function(h,O){if(!Eo(m,O)&&(b===h||i(b,h,r,n,a)))return m.push(O)})){p=!1;break}}else if(!(b===_||i(b,_,r,n,a))){p=!1;break}}return a.delete(e),a.delete(t),p}function Lo(e){var t=-1,r=Array(e.size);return e.forEach(function(n,i){r[++t]=[i,n]}),r}function Io(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var Do=1,Mo=2,Fo="[object Boolean]",Bo="[object Date]",Ho="[object Error]",No="[object Map]",Ro="[object Number]",Uo="[object RegExp]",Go="[object Set]",Ko="[object String]",zo="[object Symbol]",qo="[object ArrayBuffer]",Yo="[object DataView]",Re=j?j.prototype:void 0,ae=Re?Re.valueOf:void 0;function Wo(e,t,r,n,i,a,o){switch(r){case Yo:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qo:return!(e.byteLength!=t.byteLength||!a(new Z(e),new Z(t)));case Fo:case Bo:case Ro:return ce(+e,+t);case Ho:return e.name==t.name&&e.message==t.message;case Uo:case Ko:return e==t+"";case No:var s=Lo;case Go:var u=n&Do;if(s||(s=Io),e.size!=t.size&&!u)return!1;var f=o.get(e);if(f)return f==t;n|=Mo,o.set(e,t);var $=dt(s(e),s(t),n,i,a,o);return o.delete(e),$;case zo:if(ae)return ae.call(e)==ae.call(t)}return!1}var Vo=1,Jo=Object.prototype,Xo=Jo.hasOwnProperty;function Zo(e,t,r,n,i,a){var o=r&Vo,s=se(e),u=s.length,f=se(t),$=f.length;if(u!=$&&!o)return!1;for(var g=u;g--;){var p=s[g];if(!(o?p in t:Xo.call(t,p)))return!1}var m=a.get(e),b=a.get(t);if(m&&b)return m==t&&b==e;var _=!0;a.set(e,t),a.set(t,e);for(var y=o;++g<u;){p=s[g];var h=e[p],O=t[p];if(n)var W=o?n(O,h,p,t,e,a):n(h,O,p,e,t,a);if(!(W===void 0?h===O||i(h,O,r,n,a):W)){_=!1;break}y||(y=p=="constructor")}if(_&&!y){var M=e.constructor,F=t.constructor;M!=F&&"constructor"in e&&"constructor"in t&&!(typeof M=="function"&&M instanceof M&&typeof F=="function"&&F instanceof F)&&(_=!1)}return a.delete(e),a.delete(t),_}var Qo=1,Ue="[object Arguments]",Ge="[object Array]",V="[object Object]",ko=Object.prototype,Ke=ko.hasOwnProperty;function ei(e,t,r,n,i,a){var o=U(e),s=U(t),u=o?Ge:z(e),f=s?Ge:z(t);u=u==Ue?V:u,f=f==Ue?V:f;var $=u==V,g=f==V,p=u==f;if(p&&X(e)){if(!X(t))return!1;o=!0,$=!1}if(p&&!$)return a||(a=new w),o||et(e)?dt(e,t,r,n,i,a):Wo(e,t,u,r,n,i,a);if(!(r&Qo)){var m=$&&Ke.call(e,"__wrapped__"),b=g&&Ke.call(t,"__wrapped__");if(m||b){var _=m?e.value():e,y=b?t.value():t;return a||(a=new w),i(_,y,r,n,a)}}return p?(a||(a=new w),Zo(e,t,r,n,i,a)):!1}function pt(e,t,r,n,i){return e===t?!0:e==null||t==null||!C(e)&&!C(t)?e!==e&&t!==t:ei(e,t,r,n,pt,i)}function oe(e,t){return pt(e,t)}var ti=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r};const ri=ht({props:{animationData:{type:Object,default:()=>({})},animationLink:{type:String,default:""},loop:{type:[Boolean,Number],default:!0},autoPlay:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},speed:{type:Number,default:1},delay:{type:Number,default:0},direction:{type:String,default:"forward"},pauseOnHover:{type:Boolean,default:!1},playOnHover:{type:Boolean,default:!1},backgroundColor:{type:String,default:"transparent"},pauseAnimation:{type:Boolean,default:!1},renderer:{type:String,default:"svg"},rendererSettings:{type:Object,default:()=>({})},assetsPath:{type:String,default:""}},emits:{onComplete:null,onLoopComplete:null,onEnterFrame:null,onSegmentStart:null,onAnimationLoaded:null},setup(e,{emit:t}){let r=null;const n=bt("");let i=1;const a=l=>document.querySelector(`[data-id="${l}"]`)!==null,o=async l=>{let v=e.autoPlay;e.playOnHover&&(v=!1);let T={};if(oe(e.animationData,{})===!1&&(T=Oo(e.animationData)),e.animationLink!="")try{T=await(await fetch(e.animationLink)).json()}catch(be){console.error(be);return}let P=e.loop;typeof P=="number"&&P>0&&(P=P-1),e.delay>0&&(v=!1);const H={container:l,renderer:e.renderer,loop:P,autoplay:v,animationData:T,assetsPath:e.assetsPath};oe(e.rendererSettings,{})===!1&&(H.rendererSettings=e.rendererSettings),r=yt.loadAnimation(H),setTimeout(()=>{v=e.autoPlay,e.playOnHover?r==null||r.pause():v?r==null||r.play():r==null||r.pause(),t("onAnimationLoaded")},e.delay),r.setSpeed(e.speed),e.direction==="reverse"&&r.setDirection(-1),e.direction==="normal"&&r.setDirection(1),(e.pauseAnimation||e.playOnHover)&&r.pause(),r.addEventListener("loopComplete",()=>{e.direction==="alternate"&&(r==null||r.stop(),i=i===-1?1:-1,r==null||r.setDirection(i),r==null||r.play()),t("onLoopComplete")}),r.addEventListener("complete",()=>{t("onComplete")}),r.addEventListener("enterFrame",()=>{t("onEnterFrame")}),r.addEventListener("segmentStart",()=>{t("onSegmentStart")})},s=_t(()=>{let l=e.width,v=e.height;return typeof e.width=="number"&&(l=`${e.width}px`),typeof e.height=="number"&&(v=`${e.height}px`),{"--lottie-animation-container-width":l,"--lottie-animation-container-height":v,"--lottie-animation-container-background-color":e.backgroundColor}}),u=()=>{r&&e.pauseOnHover&&r.pause(),r&&e.playOnHover&&r.play()},f=()=>{r&&e.pauseOnHover&&r.play(),r&&e.playOnHover&&r.pause()};$t(()=>e.pauseAnimation,()=>{if((e.pauseOnHover||e.playOnHover)&&e.pauseAnimation){console.error("If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover");return}r&&(e.pauseAnimation?r.pause():r.play())});const $=()=>{r&&r.play()},g=()=>{r&&r.pause()},p=()=>{r&&r.stop()},m=()=>{r&&r.destroy()},b=(l=1)=>{if(l<=0)throw new Error("Speed must be greater than 0");r&&r.setSpeed(l)},_=l=>{r&&(l==="forward"?r.setDirection(1):l==="reverse"&&r.setDirection(-1))},y=(l,v=!0)=>{r&&r.goToAndStop(l,v)},h=(l,v=!0)=>{r&&r.goToAndPlay(l,v)},O=(l,v=!1)=>{r&&r.playSegments(l,v)},W=(l=!0)=>{r&&r.setSubframe(l)},M=(l=!0)=>{if(r)return r.getDuration(l)},F=(l,v=0)=>{r&&r.renderer.elements[v].updateDocumentData(l)},gt=l=>{for(var v="",T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",P=T.length,H=0;H<l;H++)v+=T.charAt(Math.floor(Math.random()*P));return v},vt=l=>{if(e.pauseOnHover&&e.playOnHover)throw new Error("You cannot set pauseOnHover and playOnHover for Vue3-Lottie at the same time.");if(e.animationLink===""&&oe(e.animationData,{}))throw new Error("You must provide either animationLink or animationData");const v=setInterval(()=>{if(a(l)){clearInterval(v);const T=document.querySelector(`[data-id="${l}" ]`);T&&o(T)}},0)};return mt(async()=>{n.value=gt(20),vt(n.value)}),{elementid:n,hoverEnded:f,hoverStarted:u,getCurrentStyle:s,play:$,pause:g,stop:p,destroy:m,setSpeed:b,setDirection:_,goToAndStop:y,goToAndPlay:h,playSegments:O,setSubFrame:W,getDuration:M,updateDocumentData:F}}}),ni=["data-id"];function ai(e,t,r,n,i,a){return Tt(),At("div",{"data-id":e.elementid,class:"lottie-animation-container",style:Ot(e.getCurrentStyle),onMouseenter:t[0]||(t[0]=(...o)=>e.hoverStarted&&e.hoverStarted(...o)),onMouseleave:t[1]||(t[1]=(...o)=>e.hoverEnded&&e.hoverEnded(...o))},null,44,ni)}var oi=ti(ri,[["render",ai]]),li={install(e,t){var r;const n=(r=t==null?void 0:t.name)!=null?r:"Vue3Lottie";e.component(n,oi)}};export{oi as V,li as i};
