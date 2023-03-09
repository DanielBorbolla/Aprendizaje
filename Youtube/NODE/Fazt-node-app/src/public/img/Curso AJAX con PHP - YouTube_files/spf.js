(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ca&&ca];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ba(this);
function ea(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function fa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
ea("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.g=f;aa(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
ea("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&aa(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(fa(this))}})}return a});function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}ea("Array.prototype.keys",function(a){return a?a:function(){return ia(this,function(b){return b})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=this||self;function ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function la(a,b){function c(){}c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.X=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function ma(a){return a};function na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}la(na,Error);na.prototype.name="CustomError";function oa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");na.call(this,c+a[d])}la(oa,na);oa.prototype.name="AssertionError";function pa(a,b){throw new oa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var qa;function ra(){if(void 0===qa){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ma,createScript:ma,createScriptURL:ma})}catch(c){l.console&&l.console.error(c.message)}qa=a}else qa=a}return qa};function sa(a,b){this.g=b===ta?a:""}sa.prototype.toString=function(){return this.g+""};var ta={};function ua(a){var b=ra();a=b?b.createScriptURL(a):a;return new sa(a,ta)};var va={};function xa(a,b){this.g=b===va?a:""}xa.prototype.toString=function(){return this.g.toString()};function ya(a){if(a instanceof xa&&a.constructor===xa)return a.g;pa("expected object of type SafeHtml, got '"+a+"' of type "+ja(a));return"type_error:SafeHtml"}function za(a){var b=ra();a=b?b.createHTML(a):a;return new xa(a,va)}var Aa=new xa(l.trustedTypes&&l.trustedTypes.emptyHTML||"",va);var Ba={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ca=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=ya(Aa);return!b.parentElement});
function Da(a,b){if(a.tagName&&Ba[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+a.tagName+".");if(Ca())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=ya(b)}
function Ea(a,b){if(!ka(a)||!ka(a)||!ka(a)||1!==a.nodeType||a.namespaceURI&&"http://www.w3.org/1999/xhtml"!==a.namespaceURI||a.tagName.toUpperCase()!=="SCRIPT".toString()){var c="SCRIPT".toString()+"; got: ";if(ka(a))try{var d=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(e){d="<object could not be stringified>"}else d=void 0===a?"undefined":null===a?"null":typeof a;pa("Argument is not an HTML Element with tag name "+(c+d))}a:{c=(a.ownerDocument&&a.ownerDocument.defaultView||
l).document;if(c.querySelector&&(c=c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&Fa.test(c))break a;c=""}c&&a.setAttribute("nonce",c);b instanceof sa&&b.constructor===sa?b=b.g:(pa("expected object of type TrustedResourceUrl, got '"+b+"' of type "+ja(b)),b="type_error:TrustedResourceUrl");a.src=b}var Fa=/^[\w+/_-]+[=]{0,2}$/;function n(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var e=d.slice();e.push.apply(e,arguments);return a.apply(b,e)}}function Ga(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function p(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var q=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Ha(){};function r(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function Ia(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function Ja(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function Ka(a,b){if(a.filter)return a.filter(b,void 0);var c=[];r(a,function(d,e,f){b.call(void 0,d,e,f)&&c.push(d)});return c}function La(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;r(a,function(d,e,f){c[e]=b.call(void 0,d,e,f)});return c}function v(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function w(a,b){return x[a]=b}var x=window._spf_state||{};window._spf_state=x;function y(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function Ma(a){return"[object String]"==Object.prototype.toString.call(a)}var Na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function z(a,b){a=a.split(b);var c=1==a.length;return[a[0],c?"":b,c?"":a.slice(1).join(b)]}function Oa(){return"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()};function Pa(a){a.data&&Ma(a.data)&&0==a.data.lastIndexOf("spf:",0)&&Qa(a.data.substring(4))}function Qa(a){var b=Ra[a];b&&(delete Ra[a],b())}function Sa(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function Ta(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var Ua=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;Sa(a);window.postMessage("","*");Ta(a);return b}(),Ra={};"async-defers"in x||w("async-defers",Ra);Ra=x["async-defers"];Ua&&("async-listener"in x&&Ta(x["async-listener"]),Sa(Pa),w("async-listener",Pa));var Va={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},A={};"config"in x||w("config",A);A=x.config;function Wa(a){var b=D();a in b&&delete b[a]}function Xa(){var a=D();for(b in a)Ya(a[b])||delete a[b];a=D();var b=parseInt(A["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e;for(e in a)if(a[e].count<d){var f=e;d=a[e].count}delete a[f]}}function Ya(a){if(!(a&&"data"in a))return!1;var b=a.life;b=isNaN(b)?Infinity:b;a=a.time;return q()-a<b}function $a(a){var b=parseInt(x["cache-counter"],10)||0;b++;w("cache-counter",b);a.count=b}
function D(a){return!a&&"cache-storage"in x?x["cache-storage"]:w("cache-storage",a||{})};function ab(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function bb(a,b){if(b){if(a.classList)return a.classList.contains(b);a=ab(a);return Ja(a,function(c){return c==b})}return!1}function E(a,b){b&&(a.classList?a.classList.add(b):bb(a,b)||(a.className+=" "+b))}function F(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=ab(a);c=Ka(c,function(d){return d!=b});a.className=c.join(" ")}};function cb(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+Oa(),a)};function db(a,b){b=b||document;return b.querySelectorAll?b.querySelectorAll(a):[]}function eb(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function fb(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=n(c,null,d));b.body.appendChild(d);return d};function gb(a,b,c){var d=null,e=window.history.state;if(e){d={};for(var f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];hb(!0,a,d,c)}function hb(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=q();w("history-timestamp",e);c["spf-timestamp"]=e;if(a)ib(c,b);else if(a=jb().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");w("history-url",b);d&&(d=x["history-callback"])&&d(b,c)}}
function kb(a){var b=window.location.href;if(x["history-ignore-pop"])w("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==x["history-url"]?(w("history-timestamp",c),ib(a,b)):(a["spf-back"]=c<parseInt(x["history-timestamp"],10),a["spf-current"]=x["history-url"],w("history-timestamp",c),w("history-url",b),(c=x["history-callback"])&&c(b,a))}}
function ib(a,b){var c=jb().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function jb(){var a=document.getElementById("history-iframe");a||(a=fb("history-iframe"));return a};function lb(a,b){a&&b&&(a in G||(G[a]=[]),G[a].push(b))}function mb(a,b){a in G&&b&&Ia(G[a],function(c,d,e){return c==b?(e[d]=null,!1):!0})}function nb(a){a in G&&r(G[a],function(b,c,d){d[c]=null;b&&b()})}var G={};"ps-s"in x||w("ps-s",G);G=x["ps-s"];function J(a,b,c){var d=K[a];return a&&b?(d||(d=K[a]={items:[],A:0,v:0,G:1}),d.items.push({I:b,delay:c||0})):d&&d.items.length||0}function L(a,b){var c=K[a];if(c){var d=!!c.A||!!c.v;0<c.G&&(b||!d)&&ob(a,b)}}function pb(a){(a=K[a])&&a.G--}function qb(a,b){var c=K[a];c&&(c.G++,L(a,b))}function rb(a){var b=K[a];b&&(sb(b),delete K[a])}
function ob(a,b){var c=K[a];if(c&&(sb(c),0<c.G&&c.items.length)){var d=c.items[0];d&&(a=n(function(e,f){f();e()},null,n(ob,null,a,b)),b?(c.items.shift(),a(d.I)):tb(c,d,a))}}function tb(a,b,c){b.delay?(c=n(c,null,Ha),a.v=setTimeout(c,b.delay),b.delay=0):(a.items.shift(),c=n(c,null,b.I),(b=(b=A["advanced-task-scheduler"])&&b.addTask)?a.A=b(c):a.v=setTimeout(c,0))}function sb(a){if(a.A){var b=A["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.A);a.A=0}a.v&&(clearTimeout(a.v),a.v=0)}var K={};function ub(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,username:b.username,password:b.password};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function N(a,b){a=ub(a);return b?a.href:z(a.href,"#")[0]}
function vb(a,b){var c=z(a,"#");a=c[0];r(b,function(d){a=a.replace(new RegExp("([?&])"+d+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(e,f){return"?"==f?f:""})});y(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function wb(a){var b=A["advanced-persistent-parameters"]||"",c=z(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";a+=b?d+b:"";return a+c[1]+c[2]};/*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
function xb(a,b,c,d){var e="js"==a;b=O(a,b);var f=c||"^"+b,g=P(a,f),h;c&&(h=Q[P(a,c)])&&b!=h&&(p(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:h}),e=h,delete Q[P(a,c)],e&&delete S[P(a,e)],delete G[P(a,c)],lb(g,n(yb,null,a,c,h)));if((e=S[P(a,b)])&&f!=e){delete Q[P(a,e)];delete S[P(a,b)];var k=P(a,e);k&&g&&k in G&&(G[g]=(G[g]||[]).concat(G[k]),delete G[k])}S[P(a,b)]=f;Q[P(a,f)]=b;lb(g,d);d=n(zb,null,a);T[P(a,b)]?(e&&f!=e&&(a=Ab(a,b))&&a.setAttribute("name",c||""),d()):(a=Bb(a,b,d,void 0,void 0,
h))&&c&&a.setAttribute("name",c)}function Cb(a,b){var c=Q[P(a,b)];delete Q[P(a,b)];c&&delete S[P(a,c)];delete G[P(a,b)];yb(a,b,c)}function yb(a,b,c){c&&(p("js"==a?"spfjsunload":"spfcssunload",{name:b,url:c}),Db(a,c))}function zb(a){var b=P(a,""),c;for(c in G)0==c.indexOf(b)&&Ia(c.substring(b.length).split("|"),n(Eb,null,a))&&nb(c)}
function Bb(a,b,c,d,e,f){function g(){T[P(a,b,e)]&&(T[P(a,b,e)]=2);h&&m&&m.parentNode&&k==document&&m.parentNode.removeChild(m);c&&setTimeout(c,0);return null}var h="js"==a;b=O(a,b);T[P(a,b,e)]=1;var k=d||document,m=k.createElement(h?"script":"link");if(!b)return g();d=Fb(b);m.className=P(a,d);"onload"in m?m.onerror=m.onload=g:m.onreadystatechange=function(){/^c|loade/.test(m.readyState)&&g()};d=k.getElementsByTagName("head")[0]||k.body;h?(m.async=!0,Ea(m,ua(b)),d.insertBefore(m,d.firstChild)):(m.rel=
"stylesheet",m.href=b,(f=f?Ab(a,f,d):null)?d.insertBefore(m,f):d.appendChild(m));return m}function Db(a,b){b=O(a,b);var c=Ab(a,b);c&&c.parentNode&&c.parentNode.removeChild(c);delete T[P(a,b)]}function Ab(a,b,c){b=Fb(b);return db("."+P(a,b),c)[0]}function Gb(a){var b="js"==a,c=[];r(db(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href;e=O(a,e);if(!T[P(a,e)]){T[P(a,e)]=2;var f=Fb(e);E(d,P(a,f));if(f=d.getAttribute("name"))S[P(a,e)]=f,Q[P(a,f)]=e;c.push(d)}})}
function Hb(a,b,c){if(b&&(b=O(a,b),c||!T[P(a,b)]))if(c&&"img"==a)Ib(b);else{var d=Fb(b),e=P(a,d),f=P(a,"prefetch");d=document.getElementById(f);if(!d)d=fb(f,null,function(g){g.title=f;L(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=n(Jb,null,d,a,b,e,f);d.title?a():J(f,a)}}
function Jb(a,b,c,d,e){var f="js"==b,g="css"==b;a=a.contentWindow.document;var h=a.getElementById(d);h&&h.parentNode.removeChild(h);f?(h=a.createElement("object"),Kb?a.createElement("script").src=c:h.data=c,h.id=d,a.body.appendChild(h)):g?(h=Bb(b,c,null,a,e),h.id=d):(h=a.createElement("img"),Kb&&(c=c+"#"+q()),h.src=c,h.id=d,a.body.appendChild(h))}function Ib(a){var b=new Image;Kb&&(a=a+"#"+q());b.src=a}
function Lb(a,b,c){var d="js"==a,e=Q[P(a,c)],f=b.replace(/\s/g,"");f=f||"";for(var g=0,h=0,k=f.length;h<k;++h)g=31*g+f.charCodeAt(h),g%=4294967296;f="hash-"+g;Q[P(a,c)]=f;!Mb(a,f)&&(b=Nb(a,b))&&(T[P(a,f)]=2,b&&!d&&(d=Fb(f),b.className=P(a,d),b.setAttribute("name",c)),(e=e&&e[0])&&Db(a,e))}
function Nb(a,b){b=Na(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body;"js"==a?(a=document.createElement("script"),a.text=b,c.appendChild(a),c.removeChild(a)):(a=document.createElement("style"),c.appendChild(a),"styleSheet"in a?a.styleSheet.cssText=b:a.appendChild(document.createTextNode(b)));return a}
function O(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=x[c]||"";if(Ma(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);"img"!=a&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=N(b)}else 0==d&&(b=N(b))}return b}function P(a,b,c){return a+"-"+b+(c?"-"+c:"")}function Fb(a){return a?String(a).replace(/[^\w]/g,""):""}function Mb(a,b){a=T[P(a,b)];return""==b||2==a}function Eb(a,b){b=Q[P(a,b)];return void 0!=b&&Mb(a,b)}var T={},S={},Q={},Kb=-1!=navigator.userAgent.indexOf(" Trident/");
"rsrc-s"in x||w("rsrc-s",T);T=x["rsrc-s"];"rsrc-n"in x||w("rsrc-n",S);S=x["rsrc-n"];"rsrc-u"in x||w("rsrc-u",Q);Q=x["rsrc-u"];function Ob(a){a=v(a);r(a,function(b){Hb("img",b,!0)})};function Pb(a,b,c){xb("js",a,b,c)}function Qb(a){Cb("js",a)}function Rb(a,b){Bb("js",a,b)}function Sb(a){a=v(a);r(a,function(b){Hb("js",b)})}function Tb(a,b,c){a=v(a);a=Ka(a,function(g){return!!g});var d=[];r(a,function(g){void 0==Q[P("js",g)]&&d.push(g)});var e=!d.length;if(b){var f=Ia(a,n(Eb,null,"js"));e&&f?b():(a=P("js",a.sort().join("|")),lb(a,b))}c&&!e&&c(d)}function Ub(a,b){a=v(a);r(a,function(c){if(c){var d=Vb[c]||c;d=O("js",d);var e=Q[P("js",c)];e&&d!=e&&Wb(c)}});Tb(a,b,Xb)}
function Xb(a){r(a,function(b){function c(){Pb(e,b)}var d=U[b],e=Vb[b]||b;d?Ub(d,c):c()})}function Wb(a){a=v(a);r(a,function(b){var c=[],d;for(d in U){var e=U[d];e=v(e);r(e,function(f){f==b&&c.push(d)})}r(c,function(f){Wb(f)});Qb(b)})}function Yb(a,b){Lb("js",a,b)}function Zb(a){Nb("js",a)}var U={};"js-d"in x||w("js-d",U);U=x["js-d"];var Vb={};"js-u"in x||w("js-u",Vb);Vb=x["js-u"];function $b(a,b,c){xb("css",a,b,c)}function ac(a,b){Bb("css",a,b)}function bc(a){a=v(a);r(a,function(b){Hb("css",b)})};function cc(a,b,c){if(b){b=[];var d=0;c&&(a+="\r\n");var e=a.indexOf("[\r\n",d);for(-1<e&&(d=e+3);-1<(e=a.indexOf(",\r\n",d));){var f=Na(a.substring(d,e));d=e+3;f&&b.push(JSON.parse(f))}e=a.indexOf("]\r\n",d);-1<e&&(f=Na(a.substring(d,e)),d=e+3,f&&b.push(JSON.parse(f)));f="";a.length>d&&(f=a.substring(d),c&&y(f,"\r\n")&&(f=f.substring(0,f.length-2)));b=dc(b);return{F:b,l:f}}a=JSON.parse(a);b=dc(v(a));return{F:b,l:""}}
function V(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,g=c&&!!c.position,h=c&&c.s,k=b.name||"",m="process "+N(a),B=!A["experimental-process-async"];var u=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&N(b.url)!=N(window.location.href)&&gb(b.url+window.location.hash);b.head&&(u=n(function(t,C){t=W(t);ec(t);gc(t);pb(m);hc(t,function(){C.spfProcessHead=q();qb(m,B)})},null,b.head,b.timing),u=J(m,u));b.attr&&(u=n(function(t,C){for(var H in t){var M=document.getElementById(H);
if(M){var R=void 0,fc=t[H];for(R in fc){var wa=fc[R];"class"==R?M.className=wa:"style"==R?M.style.cssText=wa:(M.setAttribute(R,wa),"value"==R&&(M[R]=wa))}}}C.spfProcessAttr=q()},null,b.attr,b.timing),u=J(m,u));var I=b.body||{},hd=u,Za;for(Za in I)u=n(function(t,C){if(t=document.getElementById(t)){!e||g||h||(w("nav-scroll-position",null),w("nav-scroll-url",null),window.scroll(0,0),h=!0,c&&(c.s=!0));var H=W(C);gc(H);var M=function(){pb(m);hc(H,function(){qb(m,B)})};C=A["animation-class"];ic&&bb(t,C)?
(t=new jc(t,H.html,C,k,!!f),pb(m),L(t.key,!0),J(t.key,n(kc,null,t),0),J(t.key,n(lc,null,t),17),J(t.key,n(mc,null,t),t.duration),J(t.key,n(function(){M();qb(m,B)},null),0),L(t.key)):(C=A["experimental-html-handler"])?(pb(m),C(H.html,t,function(){M();qb(m,B)})):(Da(t,za(H.html)),M())}},null,Za,I[Za],b.timing),u=J(m,u);I=u-hd;b.foot?(u=n(function(t,C,H){H&&(C.spfProcessBody=q());t=W(t);gc(t);pb(m);hc(t,function(){C.spfProcessFoot=q();qb(m,B)})},null,b.foot,b.timing,I),u=J(m,u)):I&&(u=n(function(t){t.spfProcessBody=
q()},null,b.timing),u=J(m,u));d&&(u=J(m,n(d,null,a,b)));L(m,B)}function nc(a,b,c,d){c="preprocess "+N(a);if(b.head){var e=n(function(h){h=W(h);ec(h);oc(h);pc(h)},null,b.head);J(c,e)}var f=b.body||{},g;for(g in f)f[g]&&(e=n(function(h,k){h=W(k);oc(h);pc(h)},null,g,f[g]),J(c,e));b.foot&&(e=n(function(h){h=W(h);oc(h);pc(h)},null,b.foot),J(c,e));d&&J(c,n(d,null,a,b));L(c)}
function kc(a){E(a.g,a.B);E(a.g,a.L);E(a.g,a.T);E(a.g,a.P);E(a.g,a.S);a.u=document.createElement("div");a.u.className=a.W;var b=a.g,c=a.u;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.j=document.createElement("div");a.j.className=a.V;Da(a.j,za(a.U));a.reverse?(b=a.u,b.parentNode.insertBefore(a.j,b)):(b=a.u,b.parentNode.insertBefore(a.j,b.nextSibling))}function lc(a){F(a.g,a.P);F(a.g,a.S);E(a.g,a.J);E(a.g,a.K)}
function mc(a){a.g.removeChild(a.u);var b=a.j,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}F(a.g,a.J);F(a.g,a.K);F(a.g,a.L);F(a.g,a.T);F(a.g,a.B)}function dc(a){var b=v(a);r(b,function(c){if(c){c.head&&(c.head=W(c.head));if(c.body)for(var d in c.body)c.body[d]=W(c.body[d]);c.foot&&(c.foot=W(c.foot))}});return a}
function W(a){var b=new qc;if(!a)return b;if(!Ma(a))return a.scripts&&r(a.scripts,function(c){b.scripts.push({url:c.url||"",text:c.text||"",name:c.name||"",async:c.async||!1})}),a.styles&&r(a.styles,function(c){b.styles.push({url:c.url||"",text:c.text||"",name:c.name||""})}),a.links&&r(a.links,function(c){"spf-preconnect"==c.rel&&b.links.push({url:c.url||"",rel:c.rel||""})}),b.html=a.html||"",b;a=a.replace(rc,function(c,d,e,f){if("script"==d){d=(d=e.match(sc))?d[1]:"";var g=e.match(tc);g=g?g[1]:"";
var h=uc.test(e);e=vc.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:g,text:f,name:d,async:h}),""):c}return"style"==d&&(d=(d=e.match(sc))?d[1]:"",e=vc.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):c});a=a.replace(wc,function(c,d){var e=d.match(xc);e=e?e[1]:"";return"stylesheet"==e?(e=(e=d.match(sc))?e[1]:"",d=(d=d.match(yc))?d[1]:"",b.styles.push({url:d,text:"",
name:e}),""):"spf-preconnect"==e?(d=(d=d.match(yc))?d[1]:"",b.links.push({url:d,rel:e}),""):c});b.html=a;return b}function hc(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?n(Pb,null,e.url,e.name):n(Rb,null,e.url):e.text&&(f=e.name?n(Yb,null,e.text,e.name):n(Zb,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function pc(a){0>=a.scripts.length||(a=La(a.scripts,function(b){return b.url}),Sb(a))}function gc(a){0>=a.styles.length||r(a.styles,function(b){b.url?b.name?$b(b.url,b.name):ac(b.url):b.text&&(b.name?Lb("css",b.text,b.name):Nb("css",b.text))})}function oc(a){0>=a.styles.length||(a=La(a.styles,function(b){return b.url}),bc(a))}function ec(a){0>=a.links.length||(a=La(a.links,function(b){return"spf-preconnect"==b.rel?b.url:""}),Ob(a))}
function jc(a,b,c,d,e){var f=parseInt(A["animation-duration"],10);this.g=a;this.U=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+Oa()))||"";f=parseInt(x.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+w("uid",f));this.L=b&&c+"-from-"+b;this.T=d&&c+"-to-"+d;this.u=null;this.W=c+"-old";this.j=null;this.V=c+"-new";this.B=c+(e?"-reverse":"-forward");this.P=c+"-start";this.S=this.B+"-start";this.J=c+"-end";this.K=this.B+"-end"}
function qc(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var ic=function(){var a=document.createElement("div");return"transition"in a.style?!0:Ja(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),wc=/\x3clink([\s\S]*?)\x3e/ig,rc=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,uc=/(?:\s|^)async(?:\s|=|$)/i,yc=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,sc=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,xc=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,tc=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,vc=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;function zc(a,b,c,d){var e=d||{},f=!1,g=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var m=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;m.call(k)};k.onreadystatechange=function(){var u=k.timing;if(2==k.readyState){u.responseStart=u.responseStart||q();if("json"==k.responseType)f=!1;else if(A["assume-all-json-requests-chunked"]||-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{u=k.getResponseHeader("X-Firefox-Spdy");var I=window.chrome&&
chrome.loadTimes&&chrome.loadTimes();I=I&&I.wasFetchedViaSpdy;f=!(!u&&!I)}e.N&&e.N(k)}else 3==k.readyState?f&&e.C&&(u=k.responseText.substring(g),g=k.responseText.length,e.C(k,u)):4==k.readyState&&(u.responseEnd=u.responseEnd||q(),window.performance&&window.performance.getEntriesByName&&(k.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.C&&k.responseText.length>g&&(u=k.responseText.substring(g),g=k.responseText.length,e.C(k,u)),clearTimeout(h),e.M&&e.M(k))};"responseType"in k&&"json"==
e.responseType&&(k.responseType="json");e.withCredentials&&(k.withCredentials=e.withCredentials);d="FormData"in window&&c instanceof FormData;a="POST"==a&&!d;if(e.headers)for(var B in e.headers)k.setRequestHeader(B,e.headers[B]),"content-type"==B.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.R&&(h=setTimeout(function(){k.abort();e.O&&e.O(k)},e.R));k.timing.fetchStart=q();k.send(c);return k};function Ac(a,b){b=b||{};b.method=((b.method||"GET")+"").toUpperCase();b.type=b.type||"request";var c=a,d=A["url-identifier"]||"";if(d){d=d.replace("__type__",b.type||"");var e=z(c,"#"),f=z(e[0],"?");c=f[0];var g=f[1];f=f[2];var h=e[1];e=e[2];if(0==d.lastIndexOf("?",0))g&&(d=d.replace("?","&")),f+=d;else{if(0==d.lastIndexOf(".",0))if(y(c,"/"))d="index"+d;else{var k=c.lastIndexOf(".");-1<k&&(c=c.substring(0,k))}else y(c,"/")&&0==d.lastIndexOf("/",0)&&(d=d.substring(1));c+=d}c=c+g+f+h+e}d=N(c);c={};
c.spfUrl=d;c.startTime=q();c.fetchStart=c.startTime;g=Bc(a,b.current,null,b.type,!1);g=Cc(g,b.current);c.spfPrefetched=!!g&&"prefetch"==g.type;c.spfCached=!!g;if(g){a=n(Dc,null,a,b,c,g.key,g.response);b=window._spf_state=window._spf_state||{};var m=parseInt(b.uid,10)||0;m++;b=b.uid=m;Ra[b]=a;Ua?window.postMessage("spf:"+b,"*"):window.setTimeout(n(Qa,null,b),0);return null}g={};if(f=A["request-headers"])for(m in f)h=f[m],g[m]=null==h?"":String(h);if(b.headers)for(m in b.headers)h=b.headers[m],g[m]=
null==h?"":String(h);null!=b.i&&(g["X-SPF-Referer"]=b.i);null!=b.current&&(g["X-SPF-Previous"]=b.current);if(m=A["advanced-header-identifier"])g["X-SPF-Request"]=m.replace("__type__",b.type),g.Accept="application/json";m=new Ec;f=n(Fc,null,a,b,c,m);a={headers:g,R:A["request-timeout"],N:n(Gc,null,a,m),C:n(Hc,null,a,b,c,m),M:f,O:f};b.withCredentials&&(a.withCredentials=b.withCredentials);A["advanced-response-type-json"]&&(a.responseType="json");return"POST"==b.method?zc("POST",d,b.H,a):zc("GET",d,null,
a)}function Dc(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=q();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,A["cache-unified"]||(Wa(d),f=!0));b.o&&"multipart"==e.type&&r(e.parts,function(g){g.timing||(g.timing={});g.timing.spfCached=!!c.spfCached;g.timing.spfPrefetched=!!c.spfPrefetched;b.o(a,g)});Ic(a,b,c,e,f)}function Gc(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.j=-1!=a.toLowerCase().indexOf("multipart")}
function Hc(a,b,c,d,e,f,g){if(d.j){f=d.l+f;try{var h=cc(f,!0,g)}catch(k){e.abort();b.m&&b.m(a,k,e);return}b.o&&r(h.F,function(k){k.timing||(k.timing={});k.timing.spfCached=!!c.spfCached;k.timing.spfPrefetched=!!c.spfPrefetched;b.o(a,k)});d.g=d.g.concat(h.F);d.l=h.l}}
function Fc(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var g in e.resourceTiming)c[g]=e.resourceTiming[g];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var h in e.resourceTiming)g=e.resourceTiming[h],void 0!==g&&(y(h,"Start")||y(h,"End")||"startTime"==h)&&(c[h]=f+Math.round(g));"load"!=b.type&&(c.navigationStart=c.startTime);d.g.length&&
(d.l=Na(d.l),d.l&&Hc(a,b,c,d,e,"",!0));if("json"==e.responseType){if(!e.response){b.m&&b.m(a,Error("JSON response parsing failed"),e);return}var k=dc(v(e.response))}else try{k=cc(e.responseText).F}catch(B){b.m&&b.m(a,B,e);return}if(b.o&&1<k.length)for(d=d.g.length;d<k.length;d++)e=k[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.o(a,e);if(1<k.length){var m;r(k,function(B){B.cacheType&&(m=B.cacheType)});k={parts:k,type:"multipart"};m&&(k.cacheType=
m)}else k=1==k.length?k[0]:{};Ic(a,b,c,k,!0)}function Ic(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=Bc(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},g=parseInt(A["cache-lifetime"],10),h=parseInt(A["cache-max"],10);0>=g||0>=h||(h=D(),f={data:f,life:g,time:q(),count:0},$a(f),h[e]=f,setTimeout(Xa,1E3))}d.timing=c;b.D&&b.D(a,d)}
function Bc(a,b,c,d,e){a=N(a);var f;A["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+ub(b).pathname);return f||""}
function Cc(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+ub(b).pathname));c.push(a);var d=null;Ja(c,function(e){a:{var f=D();if(e in f){f=f[e];if(Ya(f)){$a(f);f=f.data;break a}Wa(e)}f=void 0}f&&(d={key:e,response:f.response,type:f.type});return!!f});return d}function Ec(){this.j=!1;this.l="";this.g=[]};function Jc(a){return eb(a,function(b){return bb(b,A["link-class"])})}function Kc(a){return eb(a,function(b){return bb(b,A["nolink-class"])})}function Lc(a,b){return eb(a,function(c){return c.href&&"img"!=c.tagName.toLowerCase()},b)}function Mc(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=Jc(a.target);return!b||A["nolink-class"]&&Kc(a.target)?null:(a=Lc(a.target,b))?a.href:null}function Nc(a){return ub(a).origin!=ub(window.location.href).origin?!1:!0}
function Oc(){if(!x["nav-init"])return!1;var a=parseInt(x["nav-counter"],10)||0;a++;var b=parseInt(A["navigate-limit"],10);b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(x["nav-init-time"],10);a--;a=q()-a;b=parseInt(A["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function Pc(a,b){b=b||window.location.href;return-1!=a.indexOf("#")&&(a=N(a),b=N(b),a==b)?!1:!0}
function Qc(a){if(!a.defaultPrevented){var b=Mc(a);b&&(b=wb(b),Nc(b)&&Oc()&&p("spfclick",{url:b,target:a.target})&&(Rc(b,{},new Sc),a.preventDefault()))}}function Tc(a){var b=Mc(a);b&&setTimeout(function(){Uc(b)},0)}function Vc(){var a=x["nav-scroll-position"]||null;var b=x["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;Wc();a&&window.scroll.apply(null,a)}
function Xc(a,b){b=new Sc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],i:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])});var c=A["reload-identifier"];c&&(a=vb(a,[c]));Nc(a)?Oc()?p("spfhistory",{url:a,referer:b.i,previous:b.current})&&(b.position&&(w("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),w("nav-scroll-url",window.location.href)),Rc(a,{},b)):X(a,"1"):X(a,"9")}
function Rc(a,b,c){Yc();if(Pc(a,c.current))if(Zc(a,c.i,c.current,b)){w("nav-counter",(parseInt(x["nav-counter"],10)||0)+1);$c(a);var d=N(a),e="preprocess "+N(d);for(f in K)e!=f&&0==f.lastIndexOf("preprocess",0)&&rb(f);d=ad()[d];w("nav-request",d);w("nav-promote",null);w("nav-promote-time",null);if(d&&4!=d.readyState)d="preprocess "+N(a),e="promote "+N(a),w("nav-promote",a),w("nav-promote-time",q()),rb(d),L(e,!0),c.history||bd(a,c.i,n(Y,null,b));else{d=n(Y,null,b);e=n(cd,null,b,c);var f=n(dd,null,
b,c);A["advanced-navigate-persist-timing"]||ed();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=Ac(a,{method:b.method,headers:b.headers,o:e,m:d,D:f,H:b.postData,type:c.type,current:c.current,i:c.i});w("nav-request",b);c.history||bd(a,c.i,d)}}else X(a,"2");else c.history||bd(a,c.i,n(Y,null,b)),fd(a,c)}
function fd(a,b){if(b.position)Wc(),window.scroll.apply(null,b.position),b.s=!0;else if(a=z(a,"#"),a[2]){if(a=document.getElementById(a[2]))Wc(),a.scrollIntoView(),b.s=!0}else b.s||(Wc(),window.scroll(0,0),b.s=!0)}function bd(a,b,c){try{gb(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),N(a,!0)!=window.location.href&&hb(!1,a,{"spf-referer":b})}catch(d){Yc(),c(a,d)}}function Y(a,b,c,d){w("nav-request",null);gd(b,c,a,void 0,d)&&X(b,"10",c)}
function cd(a,b,c,d){if(id(c,d,a))if(d.reload)X(c,"5");else if(d.redirect)jd(a,d.redirect);else try{V(c,d,b,function(){kd(c,d,a)})}catch(e){Y(a,c,e)}else X(c,"3")}
function dd(a,b,c,d){w("nav-request",null);if(x["nav-promote"]==b.h){var e=d.timing||{};e.navigationStart=x["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!ld(c,d,a)){X(c,"4");return}if(d.reload){X(c,"5");return}if(d.redirect){jd(a,d.redirect);return}}try{V(c,f?{}:d,b,function(){var g=d.name||"";f&&r(d.parts,function(h){g=h.name||g});cb(g);fd(c,b);md(c,d,a)})}catch(g){Y(a,c,g)}}function jd(a,b){try{b+=window.location.hash,gb(b,null,!0)}catch(c){Yc(),Y(a,b,c)}}
function Yc(){var a=x["nav-request"];a&&(a.abort(),w("nav-request",null))}function Z(a,b){if(a){var c=Array.prototype.slice.call(arguments);c[0]=a;c=Ga.apply(null,c)}return!1!==c}
function X(a,b,c){c=c?c.message:"";Yc();$c();var d=b;c&&(d+=" Message: "+c);p("spfreload",{url:a,reason:d});var e=window.location.href;A["experimental-remove-history"]&&e==a&&(w("history-ignore-pop",!0),window.history.back());setTimeout(function(){var f=A["reload-identifier"];if(f){var g={};g[f]=encodeURIComponent(b);f=a;var h=z(f,"#");f=h[0];var k=-1!=f.indexOf("?")?"&":"?",m;for(m in g)f+=k+m,g[m]&&(f+="="+g[m]),k="&";a=f+h[1]+h[2]}window.location.href=a;Pc(a,e)||window.location.reload()},0)}
function nd(a,b,c){c.h=c.h||a;if(Zc(a,void 0,void 0,b,!0)){var d=n(od,null,!1,b,c),e=n(pd,null,!1,b,c),f=n(qd,null,!1,b,c);c.type="load";Ac(a,{method:b.method,headers:b.headers,o:e,m:d,D:f,H:b.postData,type:c.type,withCredentials:b.withCredentials})}}function Uc(a,b){a=wb(a);rd(a,b||{},new Sc)}
function rd(a,b,c){c.h=c.h||a;if(Zc(a,void 0,void 0,b,!0)){var d=n(od,null,!0,b,c),e=n(pd,null,!0,b,c),f=n(qd,null,!0,b,c);c.type="prefetch";b=Ac(a,{method:b.method,headers:b.headers,o:e,m:d,D:f,H:b.postData,type:c.type,current:c.current});a=N(a);ad()[a]=b}}function od(a,b,c,d,e){a&&sd(d);a&&x["nav-promote"]==c.h?Y(b,d,e):gd(d,e,b,!0)}
function pd(a,b,c,d,e){if(id(d,e,b,!0)){if(e.reload){if(!a)return;if(x["nav-promote"]==c.h){X(d,"5");return}}if(e.redirect)td(a,b,c,e.redirect);else{if(a){var f=n(cd,null,b,c,d,e),g="promote "+N(c.h);J(g,f);if(x["nav-promote"]==c.h){L(g,!0);return}}(a?nc:V)(d,e,c,function(){kd(d,e,b,!0)})}}}
function qd(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!ld(d,e,b,!0)){X(d,"4");return}if(e.reload){if(!a)return;if(x["nav-promote"]==c.h){X(d,"5");return}}if(e.redirect){td(a,b,c,e.redirect);return}}var g="promote "+N(c.h);if(a){sd(d);if(x["nav-promote"]==c.h){J(g,n(dd,null,b,c,d,e));L(g,!0);return}rb(g)}g=a?nc:V;try{g(d,f?{}:e,c,function(){md(d,e,b,!0)})}catch(h){od(a,b,c,d,h)}}
function td(a,b,c,d){a=a?rd:nd;var e={};r("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),function(f){e[f]=b[f]});a(d,e,c)}function gd(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Z((c||{}).onError,a))&&!d&&(c=p("spferror",a));return c}function Zc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{}).onRequest,a))&&!e&&(d=p("spfrequest",a));return d}function id(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartProcess,a))&&!d&&(c=p("spfpartprocess",a));return c}
function kd(a,b,c,d){a={url:a,part:b};Z((c||{}).onPartDone,a)&&!d&&p("spfpartdone",a)}function ld(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onProcess,a))&&!d&&(c=p("spfprocess",a));return c}function md(a,b,c,d){a={url:a,response:b};Z((c||{}).onDone,a)&&!d&&p("spfdone",a)}function sd(a){a=N(a);var b=ad(),c=b[a];c&&c.abort();delete b[a]}function $c(a){var b=ad();a=a&&N(a);for(var c in b)a!=c&&sd(c)}
var ed,ud=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);ed=ud?n(ud,window.performance):Ha;function ad(){return"nav-prefetches"in x?x["nav-prefetches"]:w("nav-prefetches",{})}function Wc(){w("nav-scroll-position",null);w("nav-scroll-url",null)}
function Sc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.h=a.h||"";this.position=a.position||null;this.i=void 0!=a.i?a.i:window.location.href;this.reverse=!!a.reverse;this.s=!!a.s;this.type=a.type||""};function vd(){Gb("js");Gb("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",vd,!1):document.detachEvent&&document.detachEvent("onreadystatechange",vd))}document.addEventListener?document.addEventListener("DOMContentLoaded",vd,!1):document.attachEvent&&document.attachEvent("onreadystatechange",vd);vd();
var wd={init:function(a){var b=!("function"!=typeof window.history.pushState&&!jb().contentWindow.history.pushState);a=a||{};for(var c in Va)A[c]=c in a?a[c]:Va[c];for(c in a)c in Va||(A[c]=a[c]);if(b){c=gd;if(!x["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",kb,!1);w("history-init",!0);w("history-callback",Xc);w("history-error-callback",c);w("history-listener",kb);w("history-url",a);w("history-timestamp",q());var d={"spf-referer":document.referrer};
try{gb(a,d)}catch(e){c&&c(a,e)}}!x["nav-init"]&&document.addEventListener&&(w("nav-init",!0),w("nav-init-time",q()),w("nav-counter",0),document.addEventListener("click",Qc,!1),w("nav-listener",Qc),!A["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",Tc,!1),w("nav-mousedown-listener",Tc)),document.addEventListener("scroll",Vc,!1),w("nav-scroll-listener",Vc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(Yc(),x["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",x["nav-listener"],!1),document.removeEventListener("mousedown",x["nav-mousedown-listener"],!1),document.removeEventListener("scroll",x["nav-scroll-listener"],!1)),w("nav-listener",null),w("nav-mousedown-listener",null),w("nav-scroll-listener",null),w("nav-scroll-position",null),w("nav-scroll-url",null),w("nav-init",!1),w("nav-init-time",null),w("nav-counter",null)),
x["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",x["history-listener"],!1),w("history-init",!1),w("history-callback",null),w("history-error-callback",null),w("history-listener",null),w("history-url",null),w("history-timestamp",0)));for(var a in A)delete A[a]},navigate:function(a,b){a&&(a=wb(a),Nc(a)?Oc()?Rc(a,b||{},new Sc):X(a,"1"):X(a,"9"))},load:function(a,b){a=wb(a);nd(a,b||{},new Sc)},prefetch:Uc,process:function(a,b){function c(f,g,h,k){f==g&&b&&b(k)}var d=
window.location.href;if("multipart"==a.type){a=a.parts;var e=a.length-1;r(a,function(f,g){V(d,f,null,n(c,null,g,e))})}else V(d,a,null,n(c,null,0,0))}},xd={cache:{remove:Wa,clear:function(){D({})}},script:{load:Pb,get:Rb,ready:Tb,done:function(a){Q[P("js",a)]="";zb("js")},require:Ub,declare:function(a,b){if(a){for(var c in a)U[c]=a[c];if(b)for(c in b)Vb[c]=b[c]}},path:function(a){w("rsrc-p-js",a)},unload:Qb,ignore:function(a,b){a=v(a);a=P("js",a.sort().join("|"));mb(a,b)},unrequire:Wb,prefetch:Sb},
style:{load:$b,get:ac,unload:function(a){Cb("css",a)},path:function(a){w("rsrc-p-css",a)},prefetch:bc}},ca=this;ca.spf=ca.spf||{};var yd=ca.spf,zd;for(zd in wd)yd[zd]=wd[zd];for(var Ad in xd)for(var Bd in xd[Ad])yd[Ad]=yd[Ad]||{},yd[Ad][Bd]=xd[Ad][Bd];p("spfready");}).call(this);