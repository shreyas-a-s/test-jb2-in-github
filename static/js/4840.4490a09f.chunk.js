"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4840],{14840:(e,r,n)=>{n.r(r),n.d(r,{default:()=>u});var o=n(66204),t=n(80846),a=n(31211),s=n(38684),i=n(80013),l=n(66159);const c=(0,s.ZL)()((e=>({root:{margin:e.spacing(2)},subtitle:{margin:e.spacing(1)}}))),u=(0,t.observer)((function({model:e}){const{classes:r}=c(),n=e?(0,a.getSession)(e):{version:""};return o.createElement("div",{className:r.root},o.createElement(i.Z,{variant:"h4",align:"center"},"JBrowse 2"),o.createElement(i.Z,{variant:"h6",align:"center",className:r.subtitle},n.version),o.createElement(i.Z,null,"Here are some resources to get help. Please report the version number above when asking questions. Thanks!"),o.createElement("ul",null,o.createElement("li",null,o.createElement(l.Z,{href:"https://github.com/GMOD/jbrowse-components/discussions",target:"_blank",rel:"noopener noreferrer"},"Question & answer forum")),o.createElement("li",null,o.createElement(l.Z,{href:"https://github.com/GMOD/jbrowse-components/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"Report a bug")),o.createElement("li",null,o.createElement(l.Z,{href:"https://jbrowse.org/jb2/docs/user_guide",target:"_blank",rel:"noopener noreferrer"},"User guide")),o.createElement("li",null,o.createElement(l.Z,{href:"https://jbrowse.org/jb2/docs/",target:"_blank",rel:"noopener noreferrer"},"Documentation"))))}))},66159:(e,r,n)=>{n.d(r,{Z:()=>k});var o=n(55559),t=n(30984),a=n(66204),s=n(56317),i=n(58029),l=n(40118),c=n(61125),u=n(57369),m=n(71948),p=n(81597),b=n(80013),d=n(29110),h=n(4860),g=n(73330);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=({theme:e,ownerState:r})=>{const n=(e=>Z[e]||e)(r.color),o=(0,h.DW)(e,`palette.${n}`,!1)||r.color,t=(0,h.DW)(e,`palette.${n}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,g.Fq)(o,.4)};var w=n(43188);const f=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],y=(0,c.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&r.button]}})((({theme:e,ownerState:r})=>(0,t.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,t.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:v({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${d.Z.focusVisible}`]:{outline:"auto"}}))),k=a.forwardRef((function(e,r){const n=(0,u.Z)({props:e,name:"MuiLink"}),{className:c,color:b="primary",component:h="a",onBlur:g,onFocus:v,TypographyClasses:k,underline:x="always",variant:E="inherit",sx:D}=n,j=(0,o.Z)(n,f),{isFocusVisibleRef:S,onBlur:C,onFocus:_,ref:M}=(0,m.Z)(),[A,F]=a.useState(!1),N=(0,p.Z)(r,M),R=(0,t.Z)({},n,{color:b,component:h,focusVisible:A,underline:x,variant:E}),T=(e=>{const{classes:r,component:n,focusVisible:o,underline:t}=e,a={root:["root",`underline${(0,l.Z)(t)}`,"button"===n&&"button",o&&"focusVisible"]};return(0,i.Z)(a,d.w,r)})(R);return(0,w.jsx)(y,(0,t.Z)({color:b,className:(0,s.Z)(T.root,c),classes:k,component:h,onBlur:e=>{C(e),!1===S.current&&F(!1),g&&g(e)},onFocus:e=>{_(e),!0===S.current&&F(!0),v&&v(e)},ref:N,ownerState:R,variant:E,sx:[...Object.keys(Z).includes(b)?[]:[{color:b}],...Array.isArray(D)?D:[D]]},j))}))},29110:(e,r,n)=>{n.d(r,{Z:()=>s,w:()=>a});var o=n(58109),t=n(95201);function a(e){return(0,t.Z)("MuiLink",e)}const s=(0,o.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=4840.4490a09f.chunk.js.map