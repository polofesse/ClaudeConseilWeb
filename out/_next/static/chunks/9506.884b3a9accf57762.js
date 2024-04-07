"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9506],{49506:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(85893),a=r(964),i=r(67294);let l=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m30.297 7.297 1.406 1.406L16 24.406.297 8.703l1.406-1.406L16 21.594z"})})),o=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30.547 23.953 16 9.422 1.453 23.953.047 22.547 16 6.578l15.953 15.969z"})}));var s=r(8897),c=r(26550);let d=(0,a.ZP)(s.m.section).withConfig({componentId:"sc-4d9ef4c3-0"})(["backdrop-filter:",";background-color:",";border:",";border-bottom:0;border-right:0;bottom:",'px;position:absolute;right:0;z-index:10000;table{padding:4px 10px 19px;white-space:nowrap;td{color:#fff;display:inline-table;height:40px;line-height:32px;margin:0 1px;text-align:center;width:46px;&.prev,&.next{color:rgb(125,125,125);}}thead{font-size:12px;td[colspan]{display:table-cell;padding:0;div{display:flex;font-size:15px;padding:0 16px 0 12px;place-content:space-between;header{color:rgb(223,223,223);&:hover{color:#fff;}&:active{color:rgb(165,156,156);}}}}td:not([colspan]){height:auto;margin-top:-1px;}nav{display:flex;flex-direction:row;gap:32px;padding-top:2px;button{fill:rgb(223,223,223);&:hover{fill:#fff;}&:active{fill:rgb(165,156,156);}svg{width:16px;}}}}tbody.curr td.today{background-color:rgb(0,120,215);color:#fff;position:relative;&::after,&::before{content:"";position:absolute;}&::after{inset:0;}&::before{border:2px solid #000;inset:2px;}&:hover{&::after{border:2px solid rgb(102,174,231);}}&:active{&::after{border:2px solid rgb(153,201,239);}}}}'],({theme:e})=>`blur(${e.sizes.taskbar.blur})`,({theme:e})=>e.colors.taskbar.background,({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`,c.bK),p=[[1,"curr"],[2,"curr"],[3,"curr"],[4,"curr"],[5,"curr"],[6,"curr"],[7,"curr"]],h=e=>{let t=e.getDate(),r=e.getMonth(),n=e.getFullYear(),a=new Date(n,r,1).getDay(),i=p.slice(0,7-a),l=[...Array.from({length:7-i.length}).map((e,t)=>[new Date(n,r,-t).getDate(),"prev"]).reverse(),...i],o=Array.from({length:new Date(n,r+1,0).getDate()}).map((e,t)=>new Date(n,r,t+1).getDate()).slice(l[l.length-1][0]).map(e=>[e,"curr"]),s=[...l,...o].reduce((e,r,n)=>{n%7==0&&e.push([]);let[a,i]=r;return e[e.length-1].push("curr"===i&&a===t?[a,"today"]:r),e},[]),c=s[s.length-1],d=Array.from({length:7-c.length}).map((e,t)=>[new Date(n,r+1,t+1).getDate(),"next"]);if(c.push(...d),s.length<6){let[e]=c[c.length-1];return[...s,e>6?p.map(([e])=>[e,"next"]):Array.from({length:7}).map((t,r)=>[r+1+e,"next"]),...4===s.length?[p.map(([e])=>[e+7,"next"])]:[]]}return s};var g=r(86313),u=r(54776),x=r(27972),f=r(72941),b=r(19014);let m=["Su","Mo","Tu","We","Th","Fr","Sa"];var v=(0,i.memo)(({toggleCalendar:e})=>{let[t,r]=(0,i.useState)(()=>new Date),[s,p]=(0,i.useState)(()=>h(t)),v=(0,i.useMemo)(()=>new Date,[]),w=(0,i.useMemo)(()=>t.getMonth()===v.getMonth()&&t.getFullYear()===v.getFullYear(),[t,v]),j=e=>{let n=new Date(t),a=n.getMonth()+e;n.setDate(1),n.setMonth(a),(12===a?0:-1===a?11:a)===v.getMonth()&&n.setDate(v.getDate()),r(n),p(h(n))},D=(0,i.useRef)(null),{sizes:{calendar:{maxHeight:M}}}=(0,a.Fg)(),y=(0,g.Z)(M,!1),k=(0,b._)();return(0,i.useEffect)(()=>{D.current?.addEventListener("blur",({relatedTarget:t})=>{if(t instanceof HTMLElement){if(D.current?.contains(t)){D.current?.focus(c.eS);return}let e=document.querySelector("main>nav [role=timer]");if(e instanceof HTMLDivElement&&(e===t||e.contains(t)))return}e(!1)}),D.current?.focus(c.eS)},[e]),s&&(0,n.jsx)(d,{ref:D,"aria-label":"Calendar",onContextMenu:x.nK,...y,...c.LL,children:(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:m.length,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("header",{children:`${t.toLocaleString("default",{month:"long"})}, ${t.getFullYear()}`}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(u.Z,{onClick:()=>j(-1),children:(0,n.jsx)(o,{})}),(0,n.jsx)(u.Z,{onClick:()=>j(1),children:(0,n.jsx)(l,{})})]})]})})}),(0,n.jsx)("tr",{children:m.map(e=>(0,n.jsx)("td",{children:e},e))})]}),(0,n.jsx)("tbody",{className:w?"curr":void 0,children:s?.map(e=>n.jsx("tr",{children:e.map(([e,t])=>n.jsx("td",{ref:e=>{k&&"today"!==t&&f.G(e,!0,2,!0)},className:t,children:e},`${e}${t}`))},e.toString()))})]})})})},86313:function(e,t,r){var n=r(26550),a=r(27972);t.Z=(e,t=!0,r=.5,i=.75)=>{let l=Math.min(e,(0,a.sI)()-n.bK);return{animate:"active",exit:{height:`${l*i}px`,transition:{duration:n.Nb.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:n.Nb.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${l}px`,paddingTop:0},initial:{height:`${l*i}px`,paddingTop:t?`${l*r}px`:0}}}}}}]);