"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4878],{64878:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var i=r(85893),a=r(1864),n=r(67294),o=r(88900),l=(e,t,r)=>{let{contextMenu:i}=(0,o.H)();return{backMenu:(0,n.useMemo)(()=>i?.(()=>e.filter((e,r)=>r<t).map((e,i)=>({action:()=>r(i-t),label:e})).reverse()),[i,e,r,t]),forwardMenu:(0,n.useMemo)(()=>i?.(()=>e.filter((e,r)=>r>t).map((e,t)=>({action:()=>r(t+1),label:e}))),[i,e,r,t])}},s=()=>{let{contextMenu:e}=(0,o.H)();return(0,n.useMemo)(()=>e?.(e=>[{action:()=>e?.target?.dispatchEvent(new MouseEvent("click",{bubbles:!0,ctrlKey:!0})),label:"Open in new window"}]),[e])},c=r(16728),d=r(27972),u=r(26550);let h="/Program Files/Browser/directory/icons",p={"FutureSplash File":"portal","HTML Document":"layout","Media Playlist File":"movie","Picture File":"image2","Shockwave Flash File":"portal",audio:"sound2",compressed:"compressed",emulator:"portal",executable:"binary",font:"a",image:"diskimg",jsdos:"compressed",marked:"layout",pdf:"layout",python:"p",tinymce:"layout",wapm:"binary"},f={...Object.fromEntries(Object.entries(c.Z).map(([e,{icon:t="",type:r=""}])=>[e,p[t||r]||"generic"])),".7z":"compressed",".gz":"compressed",".ini":"text",".js":"text",".json":"text",".pk3":"compressed",".rar":"compressed",".sh":"script",".tar":"tar",".tgz":"compressed",".txt":"text",".url":"link",".wsz":"compressed"},m={back:"PARENTDIR",folder:"DIR",image2:"IMG",movie:"VID",text:"TXT"},g=e=>{if(void 0===e)return" - ";let t=["","K","M","G","T"],r=Math.floor((e?Math.log(e):0)/Math.log(1024)),i=e/1024**(r=Math.min(r,t.length-1)),a=Number(i=i>=100?Math.round(i):Math.round(10*i)/10).toString();return a.length>3&&(a=Number(Math.round(i)).toString()),a+(0!==i&&i<10&&i%1==0?".0":"")+t[r]},b=e=>e?.toISOString().replace("T"," ").split(".")[0].slice(0,-3)||"",x=(e,t,{C:r,O:i},n)=>`
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Index of ${e}</title>
      <style>
        a:visited { color: #00e; }
        img { display: block; }
      </style>
    </head>
    <body>
      <h1>Index of ${e}</h1>
      <table>
        <tr>
          <th valign="top"><img decoding="async" src="${h}/blank.gif" alt="[ICO]" /></th>
          <th><a href="${t}?C=N;O=${r&&("N"!==r||"A"!==i)?"A":"D"}">Name</a></th><th><a href="${t}?C=M;O=${"M"===r&&"A"===i?"D":"A"}">Last modified</a></th>
          <th><a href="${t}?C=S;O=${"S"===r&&"A"===i?"D":"A"}">Size</a></th><th><a href="${t}?C=D;O=${"D"===r&&"A"===i?"D":"A"}">Description</a></th>
        </tr>
        <tr>
          <th colspan="5"><hr /></th>
        </tr>
        ${n.map(({alt:e,description:r,href:i,icon:n,modified:o,size:l})=>{let s=n||f[(0,d.RT)(i)]||"generic",c="back"===s,p=c||"folder"===s?"folder":"file",x=c?"Parent Directory":"/"===i?u.SP:(0,a.basename)(i);return`
              <tr>
                <td valign="top">
                  <a href="${t}${i}" type=${p}>
                    <img decoding="async" src="${h}/${s}.gif" alt="[${m[s]||e||"   "}]">
                  </a>
                </td>
                <td>
                  <a href="${t}${i}" type=${p}>${x}${"folder"===s?"/":""}</a>
                </td>
                <td align="right">${b(o)}</td>
                <td align="right">${g(l)}</td>
                <td>${r||"&nbsp;"}</td>
              </tr>`}).join("")}
          <tr><th colspan="5"><hr /></th></tr>
      </table>
    </body>
  </html>
`,w=(0,n.memo)(({direction:e})=>{let t=(0,n.useMemo)(()=>"right"===e?{transform:"scaleX(-1)"}:void 0,[e]);return(0,i.jsx)("svg",{style:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})}),v=(0,n.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})),$=(0,n.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})),y=r(964).ZP.div.withConfig({componentId:"sc-5cab7b41-0"})(["iframe{background-color:",";border:0;height:calc(100% - 42px - 37px);width:100%;}nav{background-color:rgb(87,87,87);display:flex;padding:4px 0;place-content:center;place-items:center;div{display:flex;justify-content:space-around;margin-right:2px;min-width:102px;padding-left:4px;width:142px;}button{border-radius:50%;display:flex;height:28px;place-content:center;place-items:center;transition:background 0.2s ease-in-out;width:28px;svg{fill:rgb(240,240,240);height:20px;width:20px;}&:hover{background-color:rgb(103,103,103);}&:active{background-color:rgb(110,110,110);}&:disabled{background-color:inherit;svg{fill:rgb(152,152,152);}}}&:not(:first-child){border-bottom:1px solid rgb(118,115,118);height:37px;justify-content:left;padding:0 8px;button{margin-bottom:4px;margin-right:8px;}}input{background-color:rgb(64,62,65);border-radius:18px;color:rgb(255,255,255);font-family:",";font-size:13px;height:34px;letter-spacing:0.2px;margin:0 6px;padding:0 13px;padding-bottom:2px;width:100%;&:focus{outline:2px solid rgb(168,199,250);}&::selection{background-color:rgb(0,74,119);}}}"],({$hasSrcDoc:e})=>e?"#fff":"initial",({theme:e})=>e.formats.systemFont);var k=r(48306),j=r(34772),S=r(59140),C=r(78743),M=r(28272),D=r(36459),T=r(54776),E=r(8597),R=r(91410),z=r(12691),F=({id:e})=>{let{icon:t,linkElement:r,url:o,processes:{[e]:c},open:h}=(0,C.z)(),{setForegroundId:p}=(0,z.k)(),{prependFileToTitle:f}=(0,j.Z)(e),{initialTitle:m="",url:g=""}=c||{},b=g||k.s6,{canGoBack:F,canGoForward:L,history:A,moveHistory:I,position:N}=(0,D.Z)(b,e),{exists:P,fs:O,stat:Z,readFile:K,readdir:B}=(0,S.o)(),G=(0,n.useRef)(null),H=(0,n.useRef)(null),[U,W]=(0,n.useState)(!1),[Y,_]=(0,n.useState)(""),V=e=>{I(e),G.current&&(G.current.value=A[N+e])},X=(0,n.useRef)(""),q=(e,t)=>{let r=!1;try{r=t.location?.pathname==="srcdoc"}catch{}r?(_(""),H.current?.setAttribute("src",e)):t.location?.replace(e)},Q=(0,n.useCallback)(t=>{G.current&&(G.current.value=t),o(e,t)},[o,e]),{backMenu:J,forwardMenu:ee}=l(A,N,I),et=s(),er=(0,n.useCallback)(async r=>{let{contentWindow:i}=H.current||{};if(i?.location){let n=[".htm",".html"].includes((0,d.RT)(r))&&await P(r);if(W(!0),n&&_((await K(r)).toString()),t(e,M.Z.Browser.icon),r.toLowerCase().startsWith(k.FY.url))q(`${window.location.origin}${k.FY.path}`,i),f(`${k.FY.url}/`);else if(!n){let n=await (0,d.Qv)(r);if(k.KM.has(n.host)||k.KM.has(r)){let e=decodeURI(n.pathname).replace(/\/$/,"")||"/",t=Object.fromEntries(new URLSearchParams(n.search.replace(";","&")).entries()),{O:r,C:o}=t,l=!r||"A"===r,s=k.Hi,c="404 Not Found";if(await P(e)&&(await Z(e)).isDirectory()){let r=(await Promise.all((await B(e)).map(async t=>{let r,i;let n=(0,a.join)(e,t);if((0,d.RT)(t)===u.zm)try{({comment:r,url:i}=(0,R.OE)(await K(n)))}catch{}let o=await Z(i&&await P(i)?i:n),l=o.isDirectory();return{description:r,href:l&&i?i:n,icon:l?"folder":void 0,modified:o.mtime,size:l||i?void 0:o.size}}))).sort((e,t)=>Number("folder"===t.icon)-Number("folder"===e.icon)).sort((e,t)=>{if("folder"===e.icon==("folder"===t.icon)){let r=(0,a.basename)(e.href),i=(0,a.basename)(t.href);return l?r<i?-1:1:r>i?-1:1}return 0}).sort((e,t)=>{if(!o||"N"===o)return 0;let r=r=>{let i=r(e),a=r(t);return i===a?0:l?i<a?-1:1:i>a?-1:1};return"S"===o?r(({size:e})=>e??0):"M"===o?r(({modified:e})=>e?.getTime()??0):"D"===o?r(({description:e})=>e??""):0}).sort((e,t)=>Number("folder"===t.icon)-Number("folder"===e.icon));H.current?.addEventListener("load",()=>{try{i.document.body.querySelectorAll("a").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault();let r=t.currentTarget,i="folder"===r.getAttribute("type"),{origin:a,pathname:n,search:o}=new URL(r.href);o?Q(`${a}${encodeURI(e)}${o}`):i?Q(r.href):O&&r.href&&R.Z7(O,decodeURI(n),d.RT(n),({pid:e,url:t})=>h(e||"OpenWith",{url:t}))})})}catch{}},u.K7),s=x(e,n.origin,t,"/"===e?r:[{href:(0,a.resolve)(e,".."),icon:"back"},...r]),c=`Index of ${e}`}_(s),f(c)}else{let a=n.href;if(q(a,i),a.startsWith(d.z8))f(`${r} - Google Search`);else{let{name:e=m}=k.hG?.find(({url:e})=>e===r)||{};f(e)}if(r.startsWith("ipfs://"))t(e,"/System/Icons/Favicons/ipfs.webp");else{let r=new Image,i=`${new URL(a).origin}${u.Yg}`;r.addEventListener("error",()=>{let{icon:r}=k.hG?.find(({url:e})=>e===a)||{};r&&t(e,r)},u.K7),r.addEventListener("load",()=>t(e,i),u.K7),r.src=i}}}}},[P,O,Q,e,m,h,f,K,B,t,Z]);return(0,n.useEffect)(()=>{c&&A[N]!==X.current&&(X.current=A[N],er(A[N]))},[A,N,c,er]),(0,n.useEffect)(()=>{H.current&&r(e,"peekElement",H.current)},[e,r]),(0,i.jsxs)(y,{$hasSrcDoc:!!Y,children:[(0,i.jsxs)("nav",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(T.Z,{disabled:!F,onClick:()=>V(-1),...(0,d.PS)("Click to go back"),...J,children:(0,i.jsx)(w,{direction:"left"})}),(0,i.jsx)(T.Z,{disabled:!L,onClick:()=>V(1),...(0,d.PS)("Click to go forward"),...ee,children:(0,i.jsx)(w,{direction:"right"})}),(0,i.jsx)(T.Z,{disabled:U,onClick:()=>er(A[N]),...(0,d.PS)("Reload this page"),children:U?(0,i.jsx)($,{}):(0,i.jsx)(v,{})})]}),(0,i.jsx)("input",{ref:G,defaultValue:b,enterKeyHint:"go",onFocusCapture:()=>G.current?.select(),onKeyDown:({key:t})=>{G.current&&"Enter"===t&&(o(e,G.current.value),X.current===G.current.value&&er(G.current.value),window.getSelection()?.removeAllRanges(),G.current.blur())},type:"text"})]}),(0,i.jsx)("nav",{children:k.hG.map(({name:e,icon:t,url:r})=>(0,i.jsx)(T.Z,{onClick:({ctrlKey:e})=>{e?h("Browser",{url:r}):Q(r)},...(0,d.PS)(`${e}
${r.replace(/^http:\/\//,"").replace(/\/$/,"")}`),...et,children:(0,i.jsx)(E.Z,{alt:e,imgSize:16,src:t})},e))}),(0,i.jsx)("iframe",{ref:H,onLoad:()=>{try{H.current?.contentWindow?.addEventListener("focus",()=>p(e))}catch{}U&&W(!1)},srcDoc:Y||void 0,title:e,...u.v0})]})}},34772:function(e,t,r){var i=r(67294),a=r(78743),n=r(28272),o=r(26550);t.Z=e=>{let{title:t}=(0,a.z)(),[r]=e.split(o.CC),{title:l}=n.Z[r]||{};return{appendFileToTitle:(0,i.useCallback)((r,i)=>{let a=r?` - ${r}${i?` ${o.xy}`:""}`:"";t(e,`${l}${a}`)},[e,l,t]),prependFileToTitle:(0,i.useCallback)((r,i,a)=>{let n=r?`${i?`${o.xy} `:""}${r}${a?" ":" - "}`:"";t(e,`${n}${l}`)},[e,l,t])}}},36459:function(e,t,r){var i=r(67294),a=r(78743);t.Z=(e,t)=>{let{url:r}=(0,a.z)(),[n,o]=(0,i.useState)(e),[l,s]=(0,i.useState)(()=>[e]),[c,d]=(0,i.useState)(0),u=(0,i.useCallback)(e=>{let i=c+e;d(i),o(l[i]),r(t,l[i])},[r,l,t,c]);return(0,i.useEffect)(()=>{e!==n&&(d(c+1),o(e),s([...l.slice(0,c+1),e]))},[n,l,c,e]),{canGoBack:c>0,canGoForward:c<l.length-1,currentUrl:n,history:l,moveHistory:u,position:c}}}}]);