!function(){"use strict";var e,c,f,t,a,n,r,d,o,b={},i={};function u(e){var c=i[e];if(void 0!==c)return c.exports;var f=i[e]={id:e,loaded:!1,exports:{}},t=!0;try{b[e].call(f.exports,f,f.exports,u),t=!1}finally{t&&delete i[e]}return f.loaded=!0,f.exports}u.m=b,e=[],u.O=function(c,f,t,a){if(f){a=a||0;for(var n=e.length;n>0&&e[n-1][2]>a;n--)e[n]=e[n-1];e[n]=[f,t,a];return}for(var r=1/0,n=0;n<e.length;n++){for(var f=e[n][0],t=e[n][1],a=e[n][2],d=!0,o=0;o<f.length;o++)r>=a&&Object.keys(u.O).every(function(e){return u.O[e](f[o])})?f.splice(o--,1):(d=!1,a<r&&(r=a));if(d){e.splice(n--,1);var b=t();void 0!==b&&(c=b)}}return c},u.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,t){if(1&t&&(e=this(e)),8&t||"object"==typeof e&&e&&(4&t&&e.__esModule||16&t&&"function"==typeof e.then))return e;var a=Object.create(null);u.r(a);var n={};c=c||[null,f({}),f([]),f(f)];for(var r=2&t&&e;"object"==typeof r&&!~c.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach(function(c){n[c]=function(){return e[c]}});return n.default=function(){return e},u.d(a,n),a},u.d=function(e,c){for(var f in c)u.o(c,f)&&!u.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce(function(c,f){return u.f[f](e,c),c},[]))},u.u=function(e){return 7628===e?"static/chunks/7628-5331385702c5ed96.js":"static/chunks/"+(({1337:"libheif",3191:"Wallpaper (Hexells)",3257:"c858d960",4512:"d1c6887d",5183:"Wallpaper (Coastal Landscape)",6688:"Stable Diffusion",8375:"8ebce0ea",8705:"5af47772",9629:"Wallpaper (Stable Diffusion)",9986:"cccb6a7f"})[e]||e)+"."+({226:"3ac868390dfdac14",246:"ee2d0bcfbf79b24a",291:"ad83b474e245f6ff",361:"e7d201c97050ca4f",396:"530cce85e89e3a00",446:"f06cbaf5008c06b5",494:"ee0cc78a0185dd3f",746:"bb753b599b9572f5",798:"55a0c1908c5a6e56",897:"a1f3d57be9716577",1049:"7a65b39f65ddb137",1285:"183eb8ab354dcc59",1337:"13e2005128ef021d",1373:"d00be4516331b239",1551:"0088b81e4d7cc6e5",1600:"d96cd8f66475a526",1611:"cac9eef4614c9b86",1622:"0588bbf7b013ecdd",1855:"1e98dcb3b210ca17",1978:"32332702aa680f6d",2053:"f1d17885c7b1c944",2149:"f70db9c8f3c3076b",2177:"2b88112890bd8db2",2259:"80dbde48405fd3e0",2373:"c73580226452a14c",2463:"45ecc2ba091ca44c",2663:"55c03a572734163d",2717:"152f0954e7026db3",2814:"0476df4fa48ee293",2856:"dc4350bc01825a70",2918:"bb9f1e879031cae8",2970:"b45d7a0ce82e1b48",3007:"7f4fcefad4570404",3131:"4b5590e87b0601d6",3144:"077bc396e83209a7",3191:"f61cb44144088ab2",3257:"6bf6735fa54d822c",3301:"78d33a88d00cad8c",3342:"b0cef6f084ecc27f",3348:"c19e9aec4a021cdb",3454:"fc2522a103d82663",3456:"21e45c7f9749bc24",3524:"2c1fb1a0bf036f2e",3761:"966671db38f3af2a",3778:"de1aed5509f9d13f",3989:"6fbd8d59aa7a42d3",4275:"c4a2b94214aec476",4277:"32b69ff37eea76ed",4292:"6af29b08e81a70da",4322:"e8736be59f2a1115",4512:"31e08b5ee19f7410",4571:"70daee433a033b80",4714:"167fbbd264d57df1",4726:"d95c637c9e7df47e",4878:"8bb255fbe1c793d2",4894:"064bef8401857df0",4935:"0bc9123baaf6ee75",4957:"bfaef7411ffbff4c",4984:"2e6a7414f2627a04",4995:"b27cd0999f9a868a",5183:"a78d8c8e9e6995fd",5319:"f8b03bf638b71238",5361:"6d41a142af34416e",5504:"5a9c8ef2bbd580d5",5541:"c65171ec22f8de06",5704:"7a3ec3e89856f23a",5706:"f4e9b308d684edeb",5709:"10d372787a669431",5769:"db8ac9fe6d4f5199",6027:"5a129d8719ee2874",6102:"d14c63a0f19aabec",6173:"5ec6a3f0ac2ea08d",6551:"f555b4e80f3c97fc",6562:"f24f3ae218ed35f2",6688:"07053cbaac03dbae",7006:"30f9df88031efed8",7062:"2555c9af9bca5b95",7290:"646e119554dc0b95",7390:"bbd0f0f015f6e1f7",7436:"942eac8173cb7ebb",7545:"0ff8408427652532",7631:"ab0e867c40a88544",7640:"4122cd56da4e60bf",7644:"95007885cfcf9bb0",7673:"b08919ad40a4bee0",7707:"0c02f558b763a2a2",7856:"ec0bed70a05e82a2",7883:"119f3a53a21769a3",7890:"60696dcb6bb3fa59",7993:"13ca4c17611f1f04",8075:"49507fa1646f725d",8090:"79eaf6a5919cdbbe",8124:"502288776d672dd8",8257:"31df2905993c6fbd",8375:"ad3962bee027b83c",8530:"9315472fa378408f",8607:"a50fb6d147205cf1",8705:"b3b43999e67a6b07",8774:"e77c073bab3d2d66",8778:"dbbf48d5e434c681",9109:"97896fb647d30b29",9319:"7bcb0d39c70a5b2b",9320:"c481bd20942a0fe6",9469:"eb4a24826ea1a398",9506:"884b3a9accf57762",9519:"7448f26fe7e7064c",9530:"fa9fd6dedbf56d27",9628:"79984928611b7e37",9629:"ae046344314ff386",9648:"ea1de41d28685867",9762:"59221c3d7bc7c3f5",9872:"d15f132e39bee718",9986:"d7c6fb03cfe5b00f"})[e]+".js"},u.miniCssF=function(e){},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},t={},a="_N_E:",u.l=function(e,c,f,n){if(t[e]){t[e].push(c);return}if(void 0!==f)for(var r,d,o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var i=o[b];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==a+f){r=i;break}}r||(d=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,u.nc&&r.setAttribute("nonce",u.nc),r.setAttribute("data-webpack",a+f),r.src=u.tu(e)),t[e]=[c];var l=function(c,f){r.onerror=r.onload=null,clearTimeout(s);var a=t[e];if(delete t[e],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach(function(e){return e(f)}),c)return c(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),d&&document.head.appendChild(r)},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},u.U=function(e){var c=new URL(e,"x:/"),f={};for(var t in c)f[t]=c[t];for(var t in f.href=e,f.pathname=e.replace(/[?#].*/,""),f.origin=f.protocol="",f.toString=f.toJSON=function(){return e},f)Object.defineProperty(this,t,{enumerable:!0,configurable:!0,value:f[t]})},u.U.prototype=URL.prototype,u.tt=function(){return void 0===n&&(n={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(n=trustedTypes.createPolicy("nextjs#bundler",n))),n},u.tu=function(e){return u.tt().createScriptURL(e)},u.p="/_next/",u.b=document.baseURI||self.location.href,r={2272:0},u.f.j=function(e,c){var f=u.o(r,e)?r[e]:void 0;if(0!==f){if(f)c.push(f[2]);else if(2272!=e){var t=new Promise(function(c,t){f=r[e]=[c,t]});c.push(f[2]=t);var a=u.p+u.u(e),n=Error();u.l(a,function(c){if(u.o(r,e)&&(0!==(f=r[e])&&(r[e]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.src;n.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",n.name="ChunkLoadError",n.type=t,n.request=a,f[1](n)}},"chunk-"+e,e)}else r[e]=0}},u.O.j=function(e){return 0===r[e]},d=function(e,c){var f,t,a=c[0],n=c[1],d=c[2],o=0;if(a.some(function(e){return 0!==r[e]})){for(f in n)u.o(n,f)&&(u.m[f]=n[f]);if(d)var b=d(u)}for(e&&e(c);o<a.length;o++)t=a[o],u.o(r,t)&&r[t]&&r[t][0](),r[t]=0;return u.O(b)},(o=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(d.bind(null,0)),o.push=d.bind(null,o.push.bind(o)),u.nc=void 0}();