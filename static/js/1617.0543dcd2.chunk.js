"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1617],{31617:(e,t,n)=>{n.d(t,{Z:()=>Z});var o=n(55559),r=n(30984),i=n(66204),a=(n(5356),n(56317)),s=n(58029),d=n(61125),l=n(57369),u=n(92704),c=n(86636),p=n(86032),h=n(24842),g=n(7081),m=n(43188);const b=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],f=(0,d.ZP)(c.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${g.Z.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${g.Z.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${g.Z.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,r.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${g.Z.expanded}`]:{margin:"16px 0"}}))),Z=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiAccordion"}),{children:d,className:c,defaultExpanded:Z=!1,disabled:x=!1,disableGutters:w=!1,expanded:y,onChange:v,square:R=!1,TransitionComponent:E=u.Z,TransitionProps:C}=n,S=(0,o.Z)(n,b),[T,$]=(0,h.Z)({controlled:y,default:Z,name:"Accordion",state:"expanded"}),k=i.useCallback((e=>{$(!T),v&&v(e,!T)}),[T,v,$]),[z,...M]=i.Children.toArray(d),j=i.useMemo((()=>({expanded:T,disabled:x,disableGutters:w,toggle:k})),[T,x,w,k]),A=(0,r.Z)({},n,{square:R,disabled:x,disableGutters:w,expanded:T}),N=(e=>{const{classes:t,square:n,expanded:o,disabled:r,disableGutters:i}=e,a={root:["root",!n&&"rounded",o&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]};return(0,s.Z)(a,g.k,t)})(A);return(0,m.jsxs)(f,(0,r.Z)({className:(0,a.Z)(N.root,c),ref:t,ownerState:A,square:R},S,{children:[(0,m.jsx)(p.Z.Provider,{value:j,children:z}),(0,m.jsx)(E,(0,r.Z)({in:T,timeout:"auto"},C,{children:(0,m.jsx)("div",{"aria-labelledby":z.props.id,id:z.props["aria-controls"],role:"region",className:N.region,children:M})}))]}))}))},86032:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(66204).createContext({})},7081:(e,t,n)=>{n.d(t,{Z:()=>a,k:()=>i});var o=n(58109),r=n(95201);function i(e){return(0,r.Z)("MuiAccordion",e)}const a=(0,o.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"])},92704:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(55559),r=n(30984),i=n(66204),a=n(56317),s=n(44628),d=n(58029),l=n(61125),u=n(57369),c=n(14262),p=n(79143),h=n(92368),g=n(81597),m=n(7109),b=n(43188);const f=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Z=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,r.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),x=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,r.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,r.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),y=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCollapse"}),{addEndListener:l,children:y,className:v,collapsedSize:R="0px",component:E,easing:C,in:S,onEnter:T,onEntered:$,onEntering:k,onExit:z,onExited:M,onExiting:j,orientation:A="vertical",style:N,timeout:P=c.x9.standard,TransitionComponent:q=s.ZP}=n,G=(0,o.Z)(n,f),B=(0,r.Z)({},n,{orientation:A,collapsedSize:R}),D=(e=>{const{orientation:t,classes:n}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,d.Z)(o,m.d,n)})(B),I=(0,h.Z)(),L=i.useRef(),H=i.useRef(null),W=i.useRef(),_="number"==typeof R?`${R}px`:R,F="horizontal"===A,J=F?"width":"height";i.useEffect((()=>()=>{clearTimeout(L.current)}),[]);const K=i.useRef(null),O=(0,g.Z)(t,K),Q=e=>t=>{if(e){const n=K.current;void 0===t?e(n):e(n,t)}},U=()=>H.current?H.current[F?"clientWidth":"clientHeight"]:0,V=Q(((e,t)=>{H.current&&F&&(H.current.style.position="absolute"),e.style[J]=_,T&&T(e,t)})),X=Q(((e,t)=>{const n=U();H.current&&F&&(H.current.style.position="");const{duration:o,easing:r}=(0,p.C)({style:N,timeout:P,easing:C},{mode:"enter"});if("auto"===P){const t=I.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,W.current=t}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[J]=`${n}px`,e.style.transitionTimingFunction=r,k&&k(e,t)})),Y=Q(((e,t)=>{e.style[J]="auto",$&&$(e,t)})),ee=Q((e=>{e.style[J]=`${U()}px`,z&&z(e)})),te=Q(M),ne=Q((e=>{const t=U(),{duration:n,easing:o}=(0,p.C)({style:N,timeout:P,easing:C},{mode:"exit"});if("auto"===P){const n=I.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,W.current=n}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[J]=_,e.style.transitionTimingFunction=o,j&&j(e)}));return(0,b.jsx)(q,(0,r.Z)({in:S,onEnter:V,onEntered:Y,onEntering:X,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===P&&(L.current=setTimeout(e,W.current||0)),l&&l(K.current,e)},nodeRef:K,timeout:"auto"===P?null:P},G,{children:(e,t)=>(0,b.jsx)(Z,(0,r.Z)({as:E,className:(0,a.Z)(D.root,v,{entered:D.entered,exited:!S&&"0px"===_&&D.hidden}[e]),style:(0,r.Z)({[F?"minWidth":"minHeight"]:_},N),ownerState:(0,r.Z)({},B,{state:e}),ref:O},t,{children:(0,b.jsx)(x,{ownerState:(0,r.Z)({},B,{state:e}),className:D.wrapper,ref:H,children:(0,b.jsx)(w,{ownerState:(0,r.Z)({},B,{state:e}),className:D.wrapperInner,children:y})})}))}))}));y.muiSupportAuto=!0;const v=y},7109:(e,t,n)=>{n.d(t,{Z:()=>a,d:()=>i});var o=n(58109),r=n(95201);function i(e){return(0,r.Z)("MuiCollapse",e)}const a=(0,o.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"])}}]);
//# sourceMappingURL=1617.0543dcd2.chunk.js.map