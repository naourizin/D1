var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=decodeURIComponent,ba=Object,l=window,ca=parseInt,da=encodeURIComponent,p=document,ea=Array,q=String;function ga(a,b){return a.type=b}
var ha="match",r="href",v="split",x="substr",y="join",z="getAttribute",A="style",ia="call",B="prototype",ja="exec",ka="concat",la="appendChild",ma="update",na="getElementById",C="indexOf",oa="action",D="parentNode",E="replace",pa="removeChild",qa="substring",ra="attributes",sa="documentMode",ta="charAt",F="push",ua="type",G="location",va="getElementsByTagName",wa="protocol",xa="width",ya="shift",za="nodeName",H="apply",Aa="height",J="length",Ba="JSON",K="test",L="toString",Ca="charCodeAt",Da="toLowerCase",
Ea="setAttribute",Fa="getTime",M="createElement",Ga=function(a,b,c){return a[ia][H](a.bind,arguments)},Ha=function(a,b,c){if(!a)throw Error();if(2<arguments[J]){var d=ea[B].slice[ia](arguments,2);return function(){var c=ea[B].slice[ia](arguments);ea[B].unshift[H](c,d);return a[H](b,c)}}return function(){return a[H](b,arguments)}},Ia=function(a,b,c){Ia=Function[B].bind&&-1!=Function[B].bind[L]()[C]("native code")?Ga:Ha;return Ia[H](null,arguments)};var N=l,P=p,Ja=N[G],Ka=function(){},La=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},Ma=function(a){for(var b=0;b<this[J];b++)if(this[b]===a)return b;return-1},Na=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[J];d++){var e=a[d];e!=c&&b[F](e);c=e}return b},Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=function(a){return q(a)[E](Oa,"&amp;")[E](Pa,"&lt;")[E](Qa,"&gt;")[E](Ra,"&quot;")[E](Sa,"&#39;")},R=function(){var a;if((a=ba.create)&&La[K](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},S=function(a,b){return ba[B].hasOwnProperty[ia](a,b)},Ua=function(a){if(La[K](ba.keys))return ba.keys(a);var b=[],c;for(c in a)S(a,c)&&b[F](c);return b},T=function(a,b){a=a||{};for(var c in a)S(a,c)&&(b[c]=a[c])},Va=function(a){return function(){N.setTimeout(a,0)}},Wa=function(a,b){if(!a)throw Error(b||"");},U=Q(N,"gapi",{});var V=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ja](a)||b[ja](a)))try{c=aa(a[2])}catch(e){}return c},Xa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ya=function(a){a=a[ha](Xa);var b=R();b.K=a[1];b.l=a[3]?[a[3]]:[];b.v=a[5]?[a[5]]:[];return b},Za=function(a){return a.K+(0<a.l[J]?"?"+a.l[y]("&"):"")+(0<a.v[J]?"#"+a.v[y]("&"):"")},$a=function(a,b){var c=[];if(a)for(var d in a)if(S(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[F](da(d)+
"="+da(e))}return c},ab=function(a,b,c,d){a=Ya(a);a.l[F][H](a.l,$a(b,d));a.v[F][H](a.v,$a(c,d));return Za(a)},bb=function(a,b){var c="";2E3<b[J]&&(c=b[qa](2E3),b=b[qa](0,2E3));var d=a[M]("div"),e=a[M]("a");e.href=b;d[la](e);d.innerHTML=d.innerHTML;b=q(d.firstChild[r]);d[D]&&d[D][pa](d);return b+c},cb=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var db=function(a,b,c,d){if(N[c+"EventListener"])N[c+"EventListener"](a,b,!1);else if(N[d+"tachEvent"])N[d+"tachEvent"]("on"+a,b)},eb=function(){var a=P.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent[C]("MSIE")},hb=function(a){var b=fb;if(!eb())try{b()}catch(c){}gb(a)},gb=function(a){if(eb())a();else{var b=!1,c=function(){if(!b)return b=!0,a[H](this,arguments)};N.addEventListener?(N.addEventListener("load",c,!1),N.addEventListener("DOMContentLoaded",c,!1)):N.attachEvent&&
(N.attachEvent("onreadystatechange",function(){eb()&&c[H](this,arguments)}),N.attachEvent("onload",c))}},ib=function(a){for(;a.firstChild;)a[pa](a.firstChild)},jb={button:!0,div:!0,span:!0};var W;W=Q(N,"___jsl",R());Q(W,"I",0);Q(W,"hel",10);var kb=function(a){return W.dpo?W.h:V(a,"jsh",W.h)},lb=function(a){var b=Q(W,"sws",[]);b[F][H](b,a)},mb=function(a){return Q(W,"watt",R())[a]},ob=function(a){var b=Q(W,"PQ",[]);W.PQ=[];var c=b[J];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},pb=function(a){return Q(Q(W,"H",R()),a,R())};var qb=Q(W,"perf",R()),rb=Q(qb,"g",R()),sb=Q(qb,"i",R());Q(qb,"r",[]);R();R();var tb=function(a,b,c){var d=qb.r;"function"===typeof d?d(a,b,c):d[F]([a,b,c])},ub=function(a,b,c){rb[a]=!b&&rb[a]||c||(new Date)[Fa]();tb(a)},wb=function(a,b,c){b&&0<b[J]&&(b=vb(b),c&&0<c[J]&&(b+="___"+vb(c)),28<b[J]&&(b=b[x](0,28)+(b[J]-28)),c=b,b=Q(sb,"_p",R()),Q(b,c,R())[a]=(new Date)[Fa](),tb(a,"_p",c))},vb=function(a){return a[y]("__")[E](/\./g,"_")[E](/\-/g,"_")[E](/\,/g,"_")};var xb=R(),yb=[],X=function(a){throw Error("Bad hint"+(a?": "+a:""));};yb[F](["jsl",function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?W[b]=Q(W,b,[])[ka](c):Q(W,b,c)}if(b=a.u)a=Q(W,"us",[]),a[F](b),(b=/^https:(.*)$/[ja](b))&&a[F]("http:"+b[1])}]);var zb=/^(\/[a-zA-Z0-9_\-]+)+$/,Ab=/^[a-zA-Z0-9\-_\.,!]+$/,Bb=/^gapi\.loaded_[0-9]+$/,Cb=/^[a-zA-Z0-9,._-]+$/,Gb=function(a,b,c,d){var e=a[v](";"),f=e[ya](),g=xb[f],k=null;g?k=g(e,b,c,d):X("no hint processor for: "+f);k||X("failed to generate load url");b=k;c=b[ha](Db);(d=b[ha](Eb))&&1===d[J]&&Fb[K](b)&&c&&1===c[J]||X("failed sanity: "+a);return k},Jb=function(a,b,c,d){a=Hb(a);Bb[K](c)||X("invalid_callback");b=Ib(b);d=d&&d[J]?Ib(d):null;var e=function(a){return da(a)[E](/%2C/g,",")};return[da(a.$)[E](/%2C/g,
",")[E](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.J?"/am="+e(a.J):"",a.T?"/rs="+e(a.T):"",a.V?"/t="+e(a.V):"","/cb=",e(c)][y]("")},Hb=function(a){"/"!==a[ta](0)&&X("relative path");for(var b=a[qa](1)[v]("/"),c=[];b[J];){a=b[ya]();if(!a[J]||0==a[C]("."))X("empty/relative directory");else if(0<a[C]("=")){b.unshift(a);break}c[F](a)}a={};for(var d=0,e=b[J];d<e;++d){var f=b[d][v]("="),g=aa(f[0]),k=aa(f[1]);2==f[J]&&g&&k&&(a[g]=a[g]||k)}b="/"+c[y]("/");zb[K](b)||
X("invalid_prefix");c=Kb(a,"k",!0);d=Kb(a,"am");e=Kb(a,"rs");a=Kb(a,"t");return{$:b,version:c,J:d,T:e,V:a}},Ib=function(a){for(var b=[],c=0,d=a[J];c<d;++c){var e=a[c][E](/\./g,"_")[E](/-/g,"_");Cb[K](e)&&b[F](e)}return b[y](",")},Kb=function(a,b,c){a=a[b];!a&&c&&X("missing: "+b);if(a){if(Ab[K](a))return a;X("invalid: "+b)}return null},Fb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Eb=/\/cb=/g,Db=/\/\//g,Lb=function(){var a=kb(Ja[r]);if(!a)throw Error("Bad hint");return a};
xb.m=function(a,b,c,d){(a=a[0])||X("missing_hint");return"https://apis.google.com"+Jb(a,b,c,d)};var Mb=decodeURI("%73cript"),Nb=function(a,b){for(var c=[],d=0;d<a[J];++d){var e=a[d];e&&0>Ma[ia](b,e)&&c[F](e)}return c},Pb=function(a){"loading"!=P.readyState?Ob(a):P.write("<"+Mb+' src="'+encodeURI(a)+'"></'+Mb+">")},Ob=function(a){var b=P[M](Mb);b[Ea]("src",a);b.async="true";(a=P[va](Mb)[0])?a[D].insertBefore(b,a):(P.head||P.body||P.documentElement)[la](b)},Qb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<yb[J];d++){var e=yb[d][0],f=yb[d][1];f&&S(c,e)&&f(c[e],a,b)}},Sb=function(a,b,c){Rb(function(){var c;
c=b===kb(Ja[r])?Q(U,"_",R()):R();c=Q(pb(b),"_",c);a(c)},c)},Ub=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Qb(a,c);var d=a?a[v](":"):[],e=c.h||Lb(),f=Q(W,"ah",R());if(f["::"]&&d[J]){for(var g=[],k=null;k=d[ya]();){var h=k[v]("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,t=g[J]&&g[g[J]-1]||null,m=t;t&&t.hint==h||(m={hint:h,N:[]},g[F](m));m.N[F](k)}var n=g[J];if(1<n){var w=c.callback;w&&(c.callback=function(){0==--n&&w()})}for(;d=g[ya]();)Tb(d.N,c,d.hint)}else Tb(d||[],c,e)},Tb=function(a,
b,c){a=Na(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,k=b.onerror,h=void 0;"function"==typeof k&&(h=k);var t=null,m=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=Q(pb(c),"r",[]).sort(),n=Q(pb(c),"L",[]).sort(),w=[][ka](k),O=function(a,b){if(m)return 0;N.clearTimeout(t);n[F][H](n,u);var d=((U||{}).config||{})[ma];d?d(e):e&&Q(W,"cu",[])[F](e);if(b){wb("me0",a,w);try{Sb(b,c,h)}finally{wb("me1",a,w)}}return 1};0<f&&(t=N.setTimeout(function(){m=
!0;g()},f));var u=Nb(a,n);if(u[J]){var u=Nb(a,k),I=Q(W,"CP",[]),fa=I[J];I[fa]=function(a){if(!a)return 0;wb("ml1",u,w);var b=function(b){I[fa]=null;O(u,a)&&ob(function(){d&&d();b()})},c=function(){var a=I[fa+1];a&&a()};0<fa&&I[fa-1]?I[fa]=function(){b(c)}:b(c)};if(u[J]){var nb="loaded_"+W.I++;U[nb]=function(a){I[fa](a);U[nb]=null};a=Gb(c,u,"gapi."+nb,k);k[F][H](k,u);wb("ml0",u,w);b.sync||N.___gapisync?Pb(a):Ob(a)}else I[fa](Ka)}else O(u)&&d&&d()};var Rb=function(a,b){if(W.hee&&0<W.hel)try{return a()}catch(c){b&&b(c),W.hel--,Ub("debug_error",function(){try{l.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(d){throw b&&b(d),d;}};U.load=function(a,b){return Rb(function(){return Ub(a,b)})};var Vb=function(a){var b=l.___jsl=l.___jsl||{};b[a]=b[a]||[];return b[a]},Wb=function(a){var b=l.___jsl=l.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Xb=function(a){return"object"===typeof a&&/\[native code\]/[K](a[F])},Yb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Xb(a[c])&&!Xb(b[c])?Yb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Xb(b[c])?[]:{},Yb(a[c],b[c])):a[c]=b[c])},Zb=function(a){if(a&&!/^\s+$/[K](a)){for(;0==a[Ca](a[J]-
1);)a=a[qa](0,a[J]-1);var b;try{b=l[Ba].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},$b=function(a){Wb(!0);var b=l.___gcfg,c=Vb("cu");if(b&&b!==l.___gu){var d={};Yb(d,b);c[F](d);l.___gu=b}var b=Vb("cu"),e=p.scripts||p[va]("script")||[],d=[],f=[];f[F][H](f,Vb("us"));for(var g=0;g<e[J];++g)for(var k=e[g],h=0;h<f[J];++h)k.src&&
0==k.src[C](f[h])&&d[F](k);0==d[J]&&0<e[J]&&e[e[J]-1].src&&d[F](e[e[J]-1]);for(e=0;e<d[J];++e)d[e][z]("gapi_processed")||(d[e][Ea]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Zb(f))&&b[F](f));a&&(d={},Yb(d,a),c[F](d));d=Vb("cd");a=0;for(b=d[J];a<b;++a)Yb(Wb(),d[a]);d=Vb("ci");a=0;for(b=d[J];a<b;++a)Yb(Wb(),d[a]);a=0;for(b=c[J];a<b;++a)Yb(Wb(),c[a])},Y=function(a){if(!a)return Wb();a=a[v]("/");for(var b=Wb(),c=0,d=a[J];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[J]&&void 0!==b?b:void 0},ac=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[v]("/"),f=0,g=e[J];f<g-1;++f)var k={},d=d[e[f]]=k;d[e[f]]=b}$b(c)};var bc=function(){var a=l.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),Q(W,"ci",[])[F](a),l.__GOOGLEAPIS=void 0)};var cc={apppackagename:1,callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},dc=!1,ec=R(),fc=function(){if(!dc){for(var a=p[va]("meta"),b=0;b<a[J];++b){var c=a[b].name[Da]();if(0==c.lastIndexOf("google-signin-",0)){var c=c[qa](14),d=a[b].content;cc[c]&&d&&(ec[c]=d)}}if(l.self!==l.top){var a=p[G][L](),e;for(e in cc)0<cc[e]&&(b=V(a,e,""))&&(ec[e]=b)}dc=!0}e=R();T(ec,e);return e},gc=function(a){return!!(a.clientid&&a.scope&&a.callback)};var hc=l.console,ic=function(a){hc&&hc.log&&hc.log(a)};var jc=function(){return!!W.oa},kc=function(){};var Z=Q(W,"rw",R()),lc=function(a){for(var b in Z)a(Z[b])},mc=function(a,b){var c=Z[a];c&&c.state<b&&(c.state=b)};var nc;var oc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,pc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,qc=function(a){var b=Y("googleapis.config/sessionIndex");null==b&&(b=l.__X_GOOG_AUTHUSER);if(null==b){var c=l.google;c&&(b=c.authuser)}null==b&&(a=a||l[G][r],b=V(a,"authuser")||null,null==b&&(b=(b=a[ha](oc))?b[1]:null));return null==b?null:q(b)},rc=function(a){var b=Y("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||l[G][r])[ha](pc))?
a[1]:null);return null==b?null:q(b)};var sc=function(){this.c=-1};var tc=function(){this.c=-1;this.c=64;this.b=[];this.C=[];this.W=[];this.w=[];this.w[0]=128;for(var a=1;a<this.c;++a)this.w[a]=0;this.A=this.j=0;this.reset()};(function(){function a(){}a.prototype=sc[B];tc.ga=sc[B];tc.prototype=new a;tc.K=function(a,c,d){for(var e=ea(arguments[J]-2),f=2;f<arguments[J];f++)e[f-2]=arguments[f];return sc[B][c][H](a,e)}})();tc[B].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.A=this.j=0};
var uc=function(a,b,c){c||(c=0);var d=a.W;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[Ca](c)<<24|b[Ca](c+1)<<16|b[Ca](c+2)<<8|b[Ca](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],k=a.b[3],h=a.b[4],t,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),t=1518500249):(f=c^g^k,t=1859775393):60>e?(f=c&g|k&(c|g),t=2400959708):(f=c^g^k,t=3395469782),f=(b<<5|b>>>27)+
f+h+t+d[e]&4294967295,h=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+h&4294967295};
tc[B].update=function(a,b){if(null!=a){void 0===b&&(b=a[J]);for(var c=b-this.c,d=0,e=this.C,f=this.j;d<b;){if(0==f)for(;d<=c;)uc(this,a,d),d+=this.c;if("string"==typeof a)for(;d<b;){if(e[f]=a[Ca](d),++f,++d,f==this.c){uc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.c){uc(this,e);f=0;break}}this.j=f;this.A+=b}};
tc[B].digest=function(){var a=[],b=8*this.A;56>this.j?this[ma](this.w,56-this.j):this[ma](this.w,this.c-(this.j-56));for(var c=this.c-1;56<=c;c--)this.C[c]=b&255,b/=256;uc(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var vc=function(){this.G=new tc};vc[B].reset=function(){this.G.reset()};var wc=N.crypto,xc=!1,yc=0,zc=0,Ac=1,Bc=0,Cc="",Dc=function(a){a=a||N.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[Fa]()%1E6*b;Ac=Ac*b%Bc;0<yc&&++zc==yc&&db("mousemove",Dc,"remove","de")},Ec=function(a){var b=new vc;a=unescape(da(a));for(var c=[],d=0,e=a[J];d<e;++d)c[F](a[Ca](d));b.G[ma](c);b=b.G.digest();a="";for(c=0;c<b[J];c++)a+="0123456789ABCDEF"[ta](Math.floor(b[c]/16))+"0123456789ABCDEF"[ta](b[c]%16);return a},xc=!!wc&&"function"==typeof wc.getRandomValues;
xc||(Bc=1E6*(screen[xa]*screen[xa]+screen[Aa]),Cc=Ec(P.cookie+"|"+P[G]+"|"+(new Date)[Fa]()+"|"+Math.random()),yc=Y("random/maxObserveMousemove")||0,0!=yc&&db("mousemove",Dc,"add","at"));var Fc=function(){var a=Ac,a=a+ca(Cc[x](0,20),16);Cc=Ec(Cc);return a/(Bc+Math.pow(16,20))},Gc=function(){var a=new N.Uint32Array(1);wc.getRandomValues(a);return Number("0."+a[0])};var Hc=function(){var a=W.onl;if(!a){a=R();W.onl=a;var b=R();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Ic=function(a,b){var c=b.onload;return"function"===typeof c?(Hc().a(a,c),c):null},Jc=function(a){Wa(/^\w+$/[K](a),"Unsupported id - "+a);Hc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Kc=function(a){Hc().r(a)};var Lc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Mc={allowtransparency:!0,onload:!0},Nc=0,Oc=function(a){Wa(!a||cb[K](a),"Illegal url for new iframe - "+a)},Pc=function(a,b,c,d,e){Oc(c.src);var f,g=Ic(d,c),k=g?Jc(d):"";try{p.all&&(f=a[M]('<iframe frameborder="'+Ta(q(c.frameborder))+'" scrolling="'+Ta(q(c.scrolling))+'" '+k+' name="'+Ta(q(c.name))+'"/>'))}catch(h){}finally{f||(f=a[M]("iframe"),
g&&(f.onload=function(){f.onload=null;g[ia](this)},Kc(d)))}for(var t in c)a=c[t],"style"===t&&"object"===typeof a?T(a,f[A]):Mc[t]||f[Ea](t,q(a));(t=e&&e.beforeNode||null)||e&&e.dontclear||ib(b);b.insertBefore(f,t);f=t?t.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Qc=/^:[\w]+$/,Rc=/:([a-zA-Z_]+):/g,Sc=function(){var a=qc()||"0",b=rc(),c;c=qc(void 0)||a;var d=rc(void 0),e="";c&&(e+="u/"+c+"/");d&&(e+="b/"+d+"/");c=e||null;(e=(d=!1===Y("isLoggedIn"))?"_/im/":"")&&(c="");var f=Y("iframes/:socialhost:"),g=Y("iframes/:im_socialhost:");return nc={socialhost:f,ctx_socialhost:d?g:f,session_index:a,session_delegate:b,session_prefix:c,im_prefix:e}},Tc=function(a,b){return Sc()[b]||""},Uc=function(a){return function(b,c){return a?Sc()[c]||a[c]||"":Sc()[c]||""}};var Vc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Wc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[K](a)?'"'+a[E](b,function(a){var b=Vc[a];if(b)return b;b=a[Ca]();return"\\u00"+Math.floor(b/16)[L](16)+(b%16)[L](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?q(a):"null";case "boolean":case "null":return q(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[J]&&!a.propertyIsEnumerable("length")){d=
a[J];for(c=0;c<d;c+=1)b[F](Wc(a[c])||"null");return"["+b[y](",")+"]"}for(c in a)!/___$/[K](c)&&S(a,c)&&"string"===typeof c&&(d=Wc(a[c]))&&b[F](Wc(c)+":"+d);return"{"+b[y](",")+"}"}return""}},Xc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[K](a[E](/\\["\\\/b-u]/g,"@")[E](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[E](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Yc=!1;try{Yc=!!l[Ba]&&'["a"]'===l[Ba].stringify(["a"])&&"a"===l[Ba].parse('["a"]')[0]}catch(Zc){}
var $c=function(a){try{return l[Ba].parse(a)}catch(b){return!1}},ad=Yc?l[Ba].stringify:Wc,bd=Yc?$c:Xc;var cd=function(a){var b;a[ha](/^https?%3A/i)&&(b=aa(a));return bb(p,b?b:a)},dd=function(a){a=a||"canonical";for(var b=p[va]("link"),c=0,d=b[J];c<d;c++){var e=b[c],f=e[z]("rel");if(f&&f[Da]()==a&&(e=e[z]("href"))&&(e=cd(e))&&null!=e[ha](/^https?:\/\/[\w\-\_\.]+/i))return e}return l[G][r]};var ed={se:"0"},fd={post:!0},gd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},hd="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),id=Q(W,"WI",R()),jd=function(a,b,c){var d,e;d={};var f=e=a;"plus"==a&&b[oa]&&(e=a+"_"+b[oa],f=a+"/"+b[oa]);(e=Y("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+f+"?usegapi=1");for(var g in ed)d[g]=g+"/"+(b[g]||ed[g])+"/";d=bb(P,e[E](Rc,Uc(d)));g="iframes/"+
a+"/params/";f={};T(b,f);(e=Y("lang")||Y("gwidget/lang"))&&(f.hl=e);fd[a]||(f.origin=l[G].origin||l[G][wa]+"//"+l[G].host);f.exp=Y(g+"exp");if(g=Y(g+"location"))for(e=0;e<g[J];e++){var k=g[e];f[k]=N[G][k]}switch(a){case "plus":case "follow":g=f[r];e=b[oa]?void 0:"publisher";g=(g="string"==typeof g?g:void 0)?cd(g):dd(e);f.url=g;delete f[r];break;case "plusone":g=(g=b[r])?cd(g):dd();f.url=g;g=b.db;e=Y();null==g&&e&&(g=e.db,null==g&&(g=e.gwidget&&e.gwidget.db));f.db=g||void 0;g=b.ecp;e=Y();null==g&&
e&&(g=e.ecp,null==g&&(g=e.gwidget&&e.gwidget.ecp));f.ecp=g||void 0;delete f[r];break;case "signin":f.url=dd()}W.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;for(var h in ed)f[h]&&delete f[h];f.gsrc=Y("iframes/:source:");h=Y("inline/css");"undefined"!==typeof h&&0<c&&h>=c&&(f.ic="1");h=/^#|^fr-/;c={};for(var t in f)S(f,t)&&h[K](t)&&(c[t[E](h,"")]=f[t],delete f[t]);t="q"==Y("iframes/"+a+"/params/si")?f:c;h=fc();for(var m in h)!S(h,m)||S(f,m)||S(c,m)||(t[m]=h[m]);m=[][ka](hd);(t=Y("iframes/"+
a+"/methods"))&&"object"===typeof t&&La[K](t[F])&&(m=m[ka](t));for(var n in b)S(b,n)&&/^on/[K](n)&&("plus"!=a||"onconnect"!=n)&&(m[F](n),delete f[n]);delete f.callback;c._methods=m[y](",");return ab(d,f,c)},kd=["style","data-gapiscan"],md=function(a){for(var b=R(),c=0!=a[za][Da]()[C]("g:"),d=0,e=a[ra][J];d<e;d++){var f=a[ra][d],g=f.name,k=f.value;0<=Ma[ia](kd,g)||c&&0!=g[C]("data-")||"null"===k||"specified"in f&&!f.specified||(c&&(g=g[x](5)),b[g[Da]()]=k)}a=a[A];(c=ld(a&&a[Aa]))&&(b.height=q(c));
(a=ld(a&&a[xa]))&&(b.width=q(a));return b},ld=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=ca(a,10));return b},od=function(){var a=W.drw;lc(function(b){if(a!==b.id&&4!=b.state&&"share"!=b[ua]){var c=b.id,d=b[ua],e=b.url;b=b.userParams;var f=P[na](c);if(f){var g=jd(d,b,0);g?(f=f[D],e[E](/\#.*/,"")[E](/(\?|&)ic=1/,"")!==g[E](/\#.*/,"")[E](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ga(b,d),nd(f,b),(d=Z[f.lastChild.id])&&(d.oid=c),mc(c,4))):delete Z[c]}else delete Z[c]}})};var pd,qd,rd,sd,td,ud=/(?:^|\s)g-((\S)*)(?:$|\s)/,vd={plusone:!0,autocomplete:!0,profile:!0,signin:!0,signin2:!0};pd=Q(W,"SW",R());qd=Q(W,"SA",R());rd=Q(W,"SM",R());sd=Q(W,"FW",[]);td=null;
var xd=function(a,b){wd(void 0,!1,a,b)},wd=function(a,b,c,d){ub("ps0",!0);c=("string"===typeof c?p[na](c):c)||P;var e;e=P[sa];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Ua(pd)[ka](Ua(qd))[ka](Ua(rd));for(var f=[],g=0;g<e[J];g++){var k=e[g];f[F](".g-"+k,"g\\:"+k)}e=c.querySelectorAll(f[y](","))}else e=c[va]("*");c=R();for(f=0;f<e[J];f++){g=e[f];var h=g,k=d,t=h[za][Da](),m=void 0;h[z]("data-gapiscan")?k=null:(0==t[C]("g:")?m=t[x](2):(h=(h=q(h.className||h[z]("class")))&&ud[ja](h))&&(m=h[1]),k=!m||!(pd[m]||
qd[m]||rd[m])||k&&m!==k?null:m);k&&(vd[k]||0==g[za][Da]()[C]("g:")||0!=Ua(md(g))[J])&&(g[Ea]("data-gapiscan",!0),Q(c,k,[])[F](g))}if(b)for(var n in c)for(b=c[n],d=0;d<b[J];d++)b[d][Ea]("data-onload",!0);for(var w in c)sd[F](w);ub("ps1",!0);if((n=sd[y](":"))||a)try{U.load(n,a)}catch(O){ic(O);return}if(yd(td||{}))for(var u in c){a=c[u];w=0;for(b=a[J];w<b;w++)a[w].removeAttribute("data-gapiscan");zd(u)}else{d=[];for(u in c)for(a=c[u],w=0,b=a[J];w<b;w++)e=a[w],Ad(u,e,md(e),d,b);Bd(n,d)}},Cd=function(a){var b=
Q(U,a,{});b.go||(b.go=function(b){return xd(b,a)},b.render=function(b,d){var e=d||{};ga(e,a);return nd(b,e)})},Dd=function(a){pd[a]=!0},Ed=function(a){qd[a]=!0},Fd=function(a){rd[a]=!0};var zd=function(a,b){var c=mb(a);b&&c?(c(b),(c=b.iframeNode)&&c[Ea]("data-gapiattached",!0)):U.load(a,function(){var c=mb(a),e=b&&b.iframeNode,f=b&&b.userParams;e&&c?(c(b),e[Ea]("data-gapiattached",!0)):(c=U[a].go,"signin2"==a?c(e,f):c(e&&e[D],f))})},yd=function(){return!1},Bd=function(){},Ad=function(a,b,c,d,e,f,g){switch(Gd(b,a,f)){case 0:a=rd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;zd(a,d);break;case 1:var k;if(b[D]){for(var h in c){if(f=S(c,h))f=c[h],f=!!f&&"object"===typeof f&&
(!f[L]||f[L]===ba[B][L]||f[L]===ea[B][L]);if(f)try{c[h]=ad(c[h])}catch(t){delete c[h]}}f=!0;c.dontclear&&(f=!1);delete c.dontclear;kc();h=jd(a,c,e);e=g||{};e.allowPost=1;e.attributes=gd;e.dontclear=!f;g={};g.userParams=c;g.url=h;ga(g,a);var m;c.rd?m=b:(m=p[M]("div"),b[Ea]("data-gapistub",!0),m[A].cssText="position:absolute;width:450px;left:-10000px;",b[D].insertBefore(m,b));g.siteElement=m;m.id||(b=m,Q(id,a,0),f="___"+a+"_"+id[a]++,b.id=f);b=R();b[">type"]=a;T(c,b);f=h;c=m;h=e||{};b=h[ra]||{};Wa(!h.allowPost||
!b.onload,"onload is not supported by post iframe");e=b=f;Qc[K](b)&&(e=Y("iframes/"+e[qa](1)+"/url"),Wa(!!e,"Unknown iframe url config for - "+b));f=bb(P,e[E](Rc,Tc));b=c.ownerDocument||P;m=0;do e=h.id||["I",Nc++,"_",(new Date)[Fa]()][y]("");while(b[na](e)&&5>++m);Wa(5>m,"Error creating iframe id");m={};var n={};b[sa]&&9>b[sa]&&(m.hostiemode=b[sa]);T(h.queryParams||{},m);T(h.fragmentParams||{},n);var w=h.connectWithQueryParams?m:n,O=h.pfname,u=R();u.id=e;u.parent=b[G][wa]+"//"+b[G].host;var I=V(b[G][r],
"parent"),O=O||"";!O&&I&&(I=V(b[G][r],"id",""),O=V(b[G][r],"pfname",""),O=I?O+"/"+I:"");u.pfname=O;T(u,w);(u=V(f,"rpctoken")||m.rpctoken||n.rpctoken)||(u=w.rpctoken=h.rpctoken||q(Math.round(1E8*(xc?Gc():Fc()))));h.rpctoken=u;u=b[G][r];w=R();(I=V(u,"_bsh",W.bsh))&&(w._bsh=I);(u=kb(u))&&(w.jsh=u);h.hintInFragment?T(w,n):T(w,m);f=ab(f,m,n,h.paramsSerializer);n=R();T(Lc,n);T(h[ra],n);n.name=n.id=e;n.src=f;h.eurl=f;if((h||{}).allowPost&&2E3<f[J]){m=Ya(f);n.src="";n["data-postorigin"]=f;f=Pc(b,c,n,e);-1!=
navigator.userAgent[C]("WebKit")&&(k=f.contentWindow.document,k.open(),n=k[M]("div"),w={},u=e+"_inner",w.name=u,w.src="",w.style="display:none",Pc(b,n,w,u,h));n=(h=m.l[0])?h[v]("&"):[];h=[];for(w=0;w<n[J];w++)u=n[w][v]("=",2),h[F]([aa(u[0]),aa(u[1])]);m.l=[];n=Za(m);Wa(cb[K](n),"Invalid URL: "+n);m=b[M]("form");m.action=n;m.method="POST";m.target=e;m[A].display="none";for(e=0;e<h[J];e++)n=b[M]("input"),ga(n,"hidden"),n.name=h[e][0],n.value=h[e][1],m[la](n);c[la](m);m.submit();m[D][pa](m);k&&k.close();
k=f}else k=Pc(b,c,n,e,h);g.iframeNode=k;g.id=k[z]("id");k=g.id;c=R();c.id=k;c.userParams=g.userParams;c.url=g.url;ga(c,g[ua]);c.state=1;Z[k]=c;k=g}else k=null;k&&((g=k.id)&&d[F](g),zd(a,k))}},Gd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(rd[b]){if(jb[a[za][Da]()])return(a=a.innerHTML)&&a[E](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(qd[b])return 0;if(pd[b])return 1}}return null},nd=function(a,b){var c=b[ua];delete b[ua];var d=("string"===typeof a?p[na](a):a)||void 0;if(d){var e={},f;
for(f in b)S(b,f)&&(e[f[Da]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];Ad(c,d,e,g,0,f,void 0);Bd(c,g)}else ic("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};Q(U,"platform",{}).go=xd;var yd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[J]&&a;c++)a=a[b[c]];b=kb(Ja[r]);return!a||0!=a[C]("n;")&&0!=b[C]("n;")&&a!==b},Bd=function(a,b){Hd(a,b)},fb=function(a){wd(a,!0)},Id=function(a,b){for(var c=b||[],d=0;d<c[J];++d)a(c[d]);for(d=0;d<c[J];d++)Cd(c[d])};
yb[F](["platform",function(a,b,c){td=c;b&&sd[F](b);Id(Dd,a);Id(Ed,c._c.annotation);Id(Fd,c._c.bimodal);bc();$b();if("explicit"!=Y("parsetags")){lb(a);gc(fc())&&!Y("disableRealtimeCallback")&&kc();var d;c&&(a=c.callback)&&(d=Va(a),delete c.callback);hb(function(){fb(d)})}}]);U._pl=!0;var Jd=function(a){a=(a=Z[a])?a.oid:void 0;if(a){var b=P[na](a);b&&b[D][pa](b);delete Z[a];Jd(a)}};var Kd=/^\{h\:'/,Ld=/^!_/,Md="",Hd=function(a,b){function c(){db("message",d,"remove","de")}function d(d){var g=d.data,k=d.origin;if(Nd(g,b)){var h=e;e=!1;h&&ub("rqe");Od(a,function(){h&&ub("rqd");c();for(var a=Q(W,"RPMQ",[]),b=0;b<a[J];b++)a[b]({data:g,origin:k})})}}if(0!==b[J]){Md=V(Ja[r],"pfname","");var e=!0;db("message",d,"add","at");Ub(a,c)}},Nd=function(a,b){a=q(a);if(Kd[K](a))return!0;var c=!1;Ld[K](a)&&(c=!0,a=a[x](2));if(!/^\{/[K](a))return!1;var d=bd(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=Ma[ia](b,e)){if("_renderstart"===d.s||d.s===Md+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=P[na](e);mc(e,2);if(f&&c&&f[xa]&&f[Aa]){a:{d=c[D];e=f||{};if(jc()){var g=c.id;if(g){f=(f=Z[g])?f.state:void 0;if(1===f||4===f)break a;Jd(g)}}(f=d.nextSibling)&&f[z]&&f[z]("data-gapistub")&&(d[D][pa](f),d[A].cssText="");var f=e[xa],k=e[Aa],h=d[A];h.textIndent="0";h.margin="0";h.padding="0";h.background="transparent";h.borderStyle="none";h.cssFloat="none";h.styleFloat="none";h.lineHeight="normal";h.fontSize=
"1px";h.verticalAlign="baseline";d=d[A];d.display="inline-block";h=c[A];h.position="static";h.left=0;h.top=0;h.visibility="visible";f&&(d.width=h.width=f+"px");k&&(d.height=h.height=k+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&mc(g,3)}c["data-csi-wdt"]=(new Date)[Fa]()}}return!0}return!1},Od=function(a,b){Ub(a,b)};var Pd=function(a,b){this.P=a;var c=b||{};this.Z=Number(c.maxAge)||0;this.M=c.domain;this.R=c.path;this.aa=!!c.secure},Qd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Rd=/^[A-Z_][A-Z0-9_]{0,63}$/;
Pd[B].write=function(a,b){if(!Rd[K](this.P))throw"Invalid cookie name";if(!Qd[K](a))throw"Invalid cookie value";var c=this.P+"="+a;this.M&&(c+=";domain="+this.M);this.R&&(c+=";path="+this.R);var d="number"===typeof b?b:this.Z;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.aa&&(c+=";secure");p.cookie=c;return!0};Pd.iterate=function(a){for(var b=p.cookie[v](/;\s*/),c=0;c<b[J];++c){var d=b[c][v]("="),e=d[ya]();a(e,d[y]("="))}};var Sd=function(a){this.Y=a},Td={};Sd[B].write=function(a){Td[this.Y]=a;return!0};Sd.iterate=function(a){for(var b in Td)Td.hasOwnProperty(b)&&a(b,Td[b])};var Ud="https:"===l[G][wa],Vd=Ud||"http:"===l[G][wa]?Pd:Sd,Wd=function(a){var b=a[x](1),c="",d=l[G].hostname;if(""!==b){c=ca(b,10);if(isNaN(c))return null;b=d[v](".");if(b[J]<c-1)return null;b[J]==c-1&&(d="."+d)}else d="";return{g:"S"==a[ta](0),domain:d,i:c}},Xd=function(){var a,b=null;Vd.iterate(function(c,d){if(0===c[C]("G_AUTHUSER_")){var e=Wd(c[qa](11));if(!a||e.g&&!a.g||e.g==a.g&&e.i>a.i)a=e,b=d}});return{X:a,B:b}};var Yd=function(a){if(0!==a[C]("GCSC"))return null;var b={O:!1};a=a[x](4);if(!a)return b;var c=a[ta](0);a=a[x](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Wd(a[x](d+1));if(null==e)return b;a=a[qa](0,d);if("_"!==a[ta](0))return b;d="E"===c&&e.g;return!d&&("U"!==c||e.g)||d&&!Ud?b:{O:!0,g:d,da:a[x](1),domain:e.domain,i:e.i}},Zd=function(a){if(!a)return[];a=a[v]("=");return a[1]?a[1][v]("|"):[]},$d=function(a){a=a[v](":");return{D:a[0][v]("=")[1],ca:Zd(a[1]),fa:Zd(a[2]),ea:Zd(a[3])}},ae=function(){var a=
Xd(),b=a.X,a=a.B;if(null!==a){var c;Vd.iterate(function(a,d){var e=Yd(a);e&&e.O&&e.g==b.g&&e.i==b.i&&(c=d)});if(c){var d=$d(c),e=d&&d.ca[Number(a)],d=d&&d.D;if(e)return{B:a,ba:e,D:d}}}return null};var be=function(a){this.L=a};be[B].o=0;be[B].H=2;be[B].L=null;be[B].F=!1;be[B].U=function(){this.F||(this.o=0,this.F=!0,this.S())};be[B].S=function(){this.F&&(this.L()?this.o=this.H:this.o=Math.min(2*(this.o||this.H),120),l.setTimeout(Ia(this.S,this),1E3*this.o))};for(var ce=0;64>ce;++ce);var de=null,jc=function(){return W.oa=!0},kc=function(){W.oa=!0;var a=ae();(a=a&&a.B)&&ac("googleapis.config/sessionIndex",a);de||(de=Q(W,"ss",new be(ee)));a=de;a.U&&a.U()},ee=function(){var a=ae(),b=a&&a.ba||null,c=a&&a.D;Ub("auth",{callback:function(){var a=N.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,k=Y("isLoggedIn");b=Y("debug/forceIm")?!1:c&&b||!c&&!b;if(k=k!=b)ac("isLoggedIn",b),kc(),od(),b||((b=a.signOut)?b():(b=a.setToken)&&b(null));
b=fc();var h=Y("savedUserState"),c=a._guss(b.cookiepolicy),h=h!=c&&"undefined"!=typeof h;ac("savedUserState",c);(k||h)&&gc(b)&&!Y("disableRealtimeCallback")&&a._pimf(b,!0)})}});return!0};ub("bs0",!0,l.gapi._bs);ub("bs1",!0);delete l.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"lexps":[81,97,99,122,123,45,30,79,127],"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":false}},"isPlusUser":false,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"skipInitCommand":true},"csi":{"rate":0.01},"report":{"apiRate":{"gapi\\.signin\\..*":0.05,"gapi\\.signin2\\..*":0.05},"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*"],"rate":0.001,"host":"https://apis.google.com"},"client":{"headers":{"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-authority-selector","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"],"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","Unzipped-Content-MD5","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Goog-Updated-Authorization","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"]},"rms":"migrated","cors":false},"isLoggedIn":false,"include_granted_scopes":true,"llang":"fr","plus_layer":{"isEnabled":false},"iframes":{"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"udc_webconsentflow":{"params":{"url":""},"url":"https://www.google.com/settings/webconsent?usegapi\u003d1"},":source:":"3p","blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},":socialhost:":"https://apis.google.com","shortlists":{"url":""},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"photocomments":{"url":":socialhost:/:session_prefix:_/widget/render/photocomments?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"additnow":{"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"sharetoclassroom":{"url":"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"reportabuse":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.fr.GS65GpViYZ4.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAGLTcCMj4ibTBOAVV0GiV0_q38KkrnNyig","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"8b88d1ef8fe12e0b74fb86d2de887b38f9bdb499","dpo":false},"platform":["additnow","backdrop","blogger","comments","commentcount","community","follow","page","person","playreview","plus","plusone","post","reportabuse","savetodrive","savetowallet","shortlists","signin2","udc_webconsentflow","visibility","youtube","ytsubscribe","zoomableimage","photocomments","hangout","sharetoclassroom"],"fp":"8b88d1ef8fe12e0b74fb86d2de887b38f9bdb499","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});