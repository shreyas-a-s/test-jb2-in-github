"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7667,4334],{78469:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var n=t(66204),a=t(29520),o=t(27513),i=t(43902),s=t(80846),l=t(38684),c=t(23155),d=t(36349),g=t(31211);const u=(0,l.ZL)()({content:{minWidth:600}}),h=(0,s.observer)((function({trackWarnings:e,handleClose:r}){const{classes:t}=u(),s=[];for(let r=0;r<e.length;r++){const t=e[r],n=(0,d.getConf)(t,"name");for(let e=0;e<t.displays[0].warnings.length;e++){const a=t.displays[0].warnings[e];s.push({name:n,...a,id:r+"_"+e})}}const l=[{field:"name"},{field:"message",width:(0,g.measureGridWidth)(s.map((e=>e.message)))},{field:"effect",width:(0,g.measureGridWidth)(s.map((e=>e.effect)))}];return n.createElement(i.Dialog,{open:!0,onClose:r,maxWidth:"xl",title:"Dotplot rendered with warnings"},n.createElement(a.Z,{className:t.content},n.createElement(o.Z,null,"Found warnings while rendering the dotplot. This is often due to out-of-bound features that may indicate the wrong assemblies are being used. Check that the query and target are configured correctly, and that the right assemblies are being compared."),n.createElement("div",{style:{height:600,width:"100%",overflow:"auto"}},n.createElement(c._$,{rows:s,columns:l,disableRowSelectionOnClick:!0,rowHeight:25,disableColumnMenu:!0}))))}))},6816:(e,r,t)=>{t.d(r,{d:()=>c});var n=t(66204),a=t(52682),o=t(76734),i=t(26074),s=t(43188);function l(e){return e.substring(2).toLowerCase()}function c(e){const{children:r,disableReactTree:t=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:g="onTouchEnd"}=e,u=n.useRef(!1),h=n.useRef(null),m=n.useRef(!1),v=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{m.current=!0}),0),()=>{m.current=!1})),[]);const f=(0,a.Z)(r.ref,h),p=(0,o.Z)((e=>{const r=v.current;v.current=!1;const n=(0,i.Z)(h.current);if(!m.current||!h.current||"clientX"in e&&function(e,r){return r.documentElement.clientWidth<e.clientX||r.documentElement.clientHeight<e.clientY}(e,n))return;if(u.current)return void(u.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(h.current)>-1:!n.documentElement.contains(e.target)||h.current.contains(e.target),a||!t&&r||d(e)})),b=e=>t=>{v.current=!0;const n=r.props[e];n&&n(t)},Z={ref:f};return!1!==g&&(Z[g]=b(g)),n.useEffect((()=>{if(!1!==g){const e=l(g),r=(0,i.Z)(h.current),t=()=>{u.current=!0};return r.addEventListener(e,p),r.addEventListener("touchmove",t),()=>{r.removeEventListener(e,p),r.removeEventListener("touchmove",t)}}}),[p,g]),!1!==c&&(Z[c]=b(c)),n.useEffect((()=>{if(!1!==c){const e=l(c),r=(0,i.Z)(h.current);return r.addEventListener(e,p),()=>{r.removeEventListener(e,p)}}}),[p,c]),(0,s.jsx)(n.Fragment,{children:n.cloneElement(r,Z)})}},38465:(e,r,t)=>{t.d(r,{Z:()=>b});var n=t(55559),a=t(30984),o=t(66204),i=t(56317),s=t(56325),l=t(58029),c=t(42142),d=t(61125),g=t(57369),u=t(40118),h=t(81469),m=t(43188);const v=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],f=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,r)=>r.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),p=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.badge,r[t.variant],r[`anchorOrigin${(0,u.Z)(t.anchorOrigin.vertical)}${(0,u.Z)(t.anchorOrigin.horizontal)}${(0,u.Z)(t.overlap)}`],"default"!==t.color&&r[`color${(0,u.Z)(t.color)}`],t.invisible&&r.invisible]}})((({theme:e,ownerState:r})=>(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==r.color&&{backgroundColor:(e.vars||e).palette[r.color].main,color:(e.vars||e).palette[r.color].contrastText},"dot"===r.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},r.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}))),b=o.forwardRef((function(e,r){var t,o,d,b,Z,w;const O=(0,g.Z)({props:e,name:"MuiBadge"}),{anchorOrigin:x={vertical:"top",horizontal:"right"},className:y,component:k,components:C={},componentsProps:S={},children:R,overlap:$="rectangular",color:P="default",invisible:E=!1,max:T=99,badgeContent:M,slots:z,slotProps:N,showZero:L=!1,variant:B="standard"}=O,W=(0,n.Z)(O,v),{badgeContent:D,invisible:j,max:I,displayValue:F}=function(e){const{badgeContent:r,invisible:t=!1,max:n=99,showZero:a=!1}=e,o=(0,s.Z)({badgeContent:r,max:n});let i=t;!1!==t||0!==r||a||(i=!0);const{badgeContent:l,max:c=n}=i?o:e;return{badgeContent:l,invisible:i,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}({max:T,invisible:E,badgeContent:M,showZero:L}),G=(0,s.Z)({anchorOrigin:x,color:P,overlap:$,variant:B,badgeContent:M}),_=j||null==D&&"dot"!==B,{color:H=P,overlap:V=$,anchorOrigin:A=x,variant:X=B}=_?G:O,q="dot"!==X?F:void 0,Y=(0,a.Z)({},O,{badgeContent:D,invisible:_,max:I,displayValue:q,showZero:L,anchorOrigin:A,color:H,overlap:V,variant:X}),J=(e=>{const{color:r,anchorOrigin:t,invisible:n,overlap:a,variant:o,classes:i={}}=e,s={root:["root"],badge:["badge",o,n&&"invisible",`anchorOrigin${(0,u.Z)(t.vertical)}${(0,u.Z)(t.horizontal)}`,`anchorOrigin${(0,u.Z)(t.vertical)}${(0,u.Z)(t.horizontal)}${(0,u.Z)(a)}`,`overlap${(0,u.Z)(a)}`,"default"!==r&&`color${(0,u.Z)(r)}`]};return(0,l.Z)(s,h.I,i)})(Y),K=null!=(t=null!=(o=null==z?void 0:z.root)?o:C.Root)?t:f,Q=null!=(d=null!=(b=null==z?void 0:z.badge)?b:C.Badge)?d:p,U=null!=(Z=null==N?void 0:N.root)?Z:S.root,ee=null!=(w=null==N?void 0:N.badge)?w:S.badge,re=(0,c.y)({elementType:K,externalSlotProps:U,externalForwardedProps:W,additionalProps:{ref:r,as:k},ownerState:Y,className:(0,i.Z)(null==U?void 0:U.className,J.root,y)}),te=(0,c.y)({elementType:Q,externalSlotProps:ee,ownerState:Y,className:(0,i.Z)(J.badge,null==ee?void 0:ee.className)});return(0,m.jsxs)(K,(0,a.Z)({},re,{children:[R,(0,m.jsx)(Q,(0,a.Z)({},te,{children:q}))]}))}))},81469:(e,r,t)=>{t.d(r,{I:()=>o,Z:()=>i});var n=t(58109),a=t(95201);function o(e){return(0,a.Z)("MuiBadge",e)}const i=(0,n.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},10126:(e,r,t)=>{t.d(r,{Z:()=>C});var n=t(55559),a=t(30984),o=t(66204),i=t(56317),s=t(58029),l=t(71580),c=t(40118),d=t(57369),g=t(61125),u=t(22489),h=t(43188);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let v,f,p,b,Z=e=>e;const w=(0,l.F4)(v||(v=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),O=(0,l.F4)(f||(f=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),x=(0,g.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(p||(p=Z`
      animation: ${0} 1.4s linear infinite;
    `),w))),y=(0,g.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),k=(0,g.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(b||(b=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),O))),C=o.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:g=!1,size:v=40,style:f,thickness:p=3.6,value:b=0,variant:Z="indeterminate"}=t,w=(0,n.Z)(t,m),O=(0,a.Z)({},t,{color:l,disableShrink:g,size:v,thickness:p,value:b,variant:Z}),C=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,o={root:["root",t,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,a&&"circleDisableShrink"]};return(0,s.Z)(o,u.C,r)})(O),S={},R={},$={};if("determinate"===Z){const e=2*Math.PI*((44-p)/2);S.strokeDasharray=e.toFixed(3),$["aria-valuenow"]=Math.round(b),S.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,h.jsx)(x,(0,a.Z)({className:(0,i.Z)(C.root,o),style:(0,a.Z)({width:v,height:v},R,f),ownerState:O,ref:r,role:"progressbar"},$,w,{children:(0,h.jsx)(y,{className:C.svg,ownerState:O,viewBox:"22 22 44 44",children:(0,h.jsx)(k,{className:C.circle,style:S,ownerState:O,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))}))},22489:(e,r,t)=>{t.d(r,{C:()=>o,Z:()=>i});var n=t(58109),a=t(95201);function o(e){return(0,a.Z)("MuiCircularProgress",e)}const i=(0,n.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},96987:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(55559),a=t(30984),o=t(66204),i=t(56317),s=t(58029),l=t(57369),c=t(61125),d=t(41666),g=t(43188);const u=["className","component","disableGutters","variant"],h=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((({theme:e,ownerState:r})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===r.variant&&{minHeight:48})),(({theme:e,ownerState:r})=>"regular"===r.variant&&e.mixins.toolbar)),m=o.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiToolbar"}),{className:o,component:c="div",disableGutters:m=!1,variant:v="regular"}=t,f=(0,n.Z)(t,u),p=(0,a.Z)({},t,{component:c,disableGutters:m,variant:v}),b=(e=>{const{classes:r,disableGutters:t,variant:n}=e,a={root:["root",!t&&"gutters",n]};return(0,s.Z)(a,d.N,r)})(p);return(0,g.jsx)(h,(0,a.Z)({as:c,className:(0,i.Z)(b.root,o),ref:r,ownerState:p},f))}))},41666:(e,r,t)=>{t.d(r,{N:()=>o,Z:()=>i});var n=t(58109),a=t(95201);function o(e){return(0,a.Z)("MuiToolbar",e)}const i=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=7667.1eba2fd2.chunk.js.map