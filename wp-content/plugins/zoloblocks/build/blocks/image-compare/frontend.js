(()=>{"use strict";var e={5338:(e,t,r)=>{var n=r(5795);t.H=n.createRoot,n.hydrateRoot},1020:(e,t,r)=>{var n=r(1609),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,s={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:a.current}}t.jsx=s,t.jsxs=s},4848:(e,t,r)=>{e.exports=r(1020)},1609:e=>{e.exports=window.React},5795:e=>{e.exports=window.ReactDOM}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var n=r(1609),o=r(5338),i=r(4848),a=(0,n.forwardRef)((({transition:e,...t},r)=>{let n={position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:e?`clip-path ${e}`:void 0,userSelect:"none",willChange:"clip-path, transition",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"};return(0,i.jsx)("div",{...t,style:n,"data-rcs":"clip-item",ref:r})}));a.displayName="ContainerClip";var l=(0,n.forwardRef)((({children:e,disabled:t,portrait:r,position:n,transition:o},a)=>{let l={position:"absolute",top:0,width:r?"100%":void 0,height:r?void 0:"100%",background:"none",border:0,padding:0,pointerEvents:"all",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",outline:0,transform:r?"translate3d(0, -50% ,0)":"translate3d(-50%, 0, 0)",transition:o?`${r?"top":"left"} ${o}`:void 0};return(0,i.jsx)("button",{ref:a,"aria-label":"Drag to move or focus and use arrow keys","aria-orientation":r?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n,"data-rcs":"handle-container",disabled:t,role:"slider",style:l,children:e})}));l.displayName="ThisHandleContainer";var s,c=({flip:e})=>(0,i.jsx)("div",{className:"__rcs-handle-arrow",style:{width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0}}),d=({className:e="__rcs-handle-root",disabled:t,buttonStyle:r,linesStyle:n,portrait:o,style:a,...l})=>{let s={display:"flex",flexDirection:o?"row":"column",placeItems:"center",height:"100%",cursor:t?"not-allowed":o?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...a},d={flexGrow:1,height:o?2:"100%",width:o?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...n},u={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:o?"rotate(90deg)":void 0,...r};return(0,i.jsxs)("div",{...l,className:e,style:s,children:[(0,i.jsx)("div",{className:"__rcs-handle-line",style:d}),(0,i.jsxs)("div",{className:"__rcs-handle-button",style:u,children:[(0,i.jsx)(c,{}),(0,i.jsx)(c,{flip:!0})]}),(0,i.jsx)("div",{className:"__rcs-handle-line",style:d})]})},u=((s=u||{}).ARROW_LEFT="ArrowLeft",s.ARROW_RIGHT="ArrowRight",s.ARROW_UP="ArrowUp",s.ARROW_DOWN="ArrowDown",s),p=(e,t,r,o)=>{let i=(0,n.useRef)();(0,n.useEffect)((()=>{i.current=t}),[t]),(0,n.useEffect)((()=>{if(!r||!r.addEventListener)return;let t=e=>i.current&&i.current(e);return r.addEventListener(e,t,o),()=>{r.removeEventListener(e,t,o)}}),[e,r,o])},f=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?n.useLayoutEffect:n.useEffect,h={capture:!1,passive:!0},b={capture:!0,passive:!1},m=e=>{e.preventDefault(),e.currentTarget.focus()},v=(0,n.forwardRef)((({boundsPadding:e=0,browsingContext:t=globalThis,changePositionOnHover:r=!1,disabled:o=!1,handle:s,itemOne:c,itemTwo:v,keyboardIncrement:g="5%",onlyHandleDraggable:w=!1,onPositionChange:y,portrait:x=!1,position:R=50,style:E,transition:_,...k},S)=>{let C=(0,n.useRef)(null),O=(0,n.useRef)(null),L=(0,n.useRef)(null),j=(0,n.useRef)(R),[N,P]=(0,n.useState)(!1),[A,z]=(0,n.useState)(!0),D=(0,n.useRef)(!1),[H,M]=(0,n.useState)(),W=(e=>{let t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e})),t.current})(R),U=(0,n.useCallback)((function({x:r,y:n,isOffset:o}){let i=C.current,a=L.current,l=O.current,{width:s,height:c,left:d,top:u}=i.getBoundingClientRect();if(0===s||0===c)return;let p=x?o?n-u-t.scrollY:n:o?r-d-t.scrollX:r,f=Math.min(Math.max(p/(x?c:s)*100,0),100),h=x?c/(i.offsetHeight||1):s/(i.offsetWidth||1),b=e*h/(x?c:s)*100,m=Math.min(Math.max(f,b*h),100-b*h);j.current=f,a.setAttribute("aria-valuenow",`${Math.round(j.current)}`),a.style.top=x?`${m}%`:"0",a.style.left=x?"0":`${m}%`,l.style.clipPath=x?`inset(${m}% 0 0 0)`:`inset(0 0 0 ${m}%)`,y&&y(j.current)}),[e,y,x,t]);(0,n.useEffect)((()=>{let{width:e,height:t}=C.current.getBoundingClientRect(),r=R===W?j.current:R;U({x:e/100*r,y:t/100*r})}),[e,R,x,W,U]);let $=(0,n.useCallback)((e=>{e.preventDefault(),!o&&0===e.button&&(U({isOffset:!0,x:e.pageX,y:e.pageY}),P(!0),z(!0))}),[o,U]),T=(0,n.useCallback)((function(e){U({isOffset:!0,x:e.pageX,y:e.pageY}),z(!1)}),[U]),B=(0,n.useCallback)((()=>{P(!1),z(!0)}),[]),F=(0,n.useCallback)((({width:e,height:t})=>{let{width:r,height:n}=C.current.getBoundingClientRect();U({x:e/100*j.current*r/e,y:t/100*j.current*n/t})}),[U]),I=(0,n.useCallback)((e=>{if(!Object.values(u).includes(e.key))return;e.preventDefault(),z(!0);let{top:t,left:r}=L.current.getBoundingClientRect(),{width:n,height:o}=C.current.getBoundingClientRect(),i="string"==typeof g?parseFloat(g):g/n*100,a=x?"ArrowLeft"===e.key||"ArrowDown"===e.key:"ArrowRight"===e.key||"ArrowUp"===e.key,l=Math.min(Math.max(a?j.current+i:j.current-i,0),100);U({x:x?r:n*l/100,y:x?o*l/100:t})}),[g,x,U]);(0,n.useEffect)((()=>{M(w?L.current:C.current)}),[w]),(0,n.useEffect)((()=>{let e=C.current,t=()=>{N||B()};return r&&(e.addEventListener("pointermove",T,h),e.addEventListener("pointerleave",t,h)),()=>{e.removeEventListener("pointermove",T),e.removeEventListener("pointerleave",t)}}),[r,T,B,N]),(0,n.useEffect)((()=>(N&&!D.current&&(t.addEventListener("pointermove",T,h),t.addEventListener("pointerup",B,h),D.current=!0),()=>{D.current&&(t.removeEventListener("pointermove",T),t.removeEventListener("pointerup",B),D.current=!1)})),[T,B,N,t]),(0,n.useImperativeHandle)(S,(()=>({rootContainer:C.current,handleContainer:L.current,setPosition(e){let{width:t,height:r}=C.current.getBoundingClientRect();U({x:t/100*e,y:r/100*e})}})),[U]),((e,t)=>{let r=(0,n.useRef)(),o=(0,n.useCallback)((()=>{e.current&&r.current&&r.current.observe(e.current)}),[e]);f((()=>(r.current=new ResizeObserver((([e])=>t(e.contentRect))),o(),()=>{r.current&&r.current.disconnect()})),[t,o])})(C,F),p("keydown",I,L.current,b),p("click",m,L.current,b),p("pointerdown",$,H,b);let Y=s||(0,i.jsx)(d,{disabled:o,portrait:x}),J=A?_:void 0,X={position:"relative",display:"flex",overflow:"hidden",cursor:N?x?"ns-resize":"ew-resize":void 0,touchAction:"none",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...E};return(0,i.jsxs)("div",{...k,ref:C,style:X,"data-rcs":"root",children:[c,(0,i.jsx)(a,{ref:O,transition:J,children:v}),(0,i.jsx)(l,{disabled:o,portrait:x,position:Math.round(j.current),ref:L,transition:J,children:Y})]})}));v.displayName="ReactCompareSlider";var g=(0,n.forwardRef)((({style:e,...t},r)=>{let n=(({boxSizing:e="border-box",objectFit:t="cover",objectPosition:r="center center",...n}={})=>({display:"block",width:"100%",height:"100%",maxWidth:"100%",boxSizing:e,objectFit:t,objectPosition:r,...n}))(e);return(0,i.jsx)("img",{ref:r,...t,style:n,"data-rcs":"image"})}));g.displayName="ReactCompareSliderImage",document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".wp-block-zolo-image-compare");e.length&&e.forEach((e=>{const t=e.querySelector(".beaf-slider"),r=JSON.parse(t.dataset.comparisonoptions),i=JSON.parse(t.dataset.beforeimage),a=JSON.parse(t.dataset.afterimage);(0,o.H)(e).render((0,n.createElement)(v,{changePositionOnHover:r?.slideOnHover,portrait:"vertical_direction"===r?.slidePositon,disabled:r?.disableslide,position:r?.initialPosition,onlyHandleDraggable:r?.handleDraggable,itemOne:(0,n.createElement)("div",{className:"image-item-One"},r?.showLabels&&r?.beforeLabel&&(0,n.createElement)("div",{className:`compare-slider-label compare-slider-label-left ${"horizontal_direction"===r?.slidePositon?r?.HorizontalPosition:r?.labelPositons}`},r?.beforeLabel),(0,n.createElement)(g,{src:i&&i?.url,alt:i?.alt})),itemTwo:(0,n.createElement)("div",{className:"image-item-two"},r?.showLabels&&r?.afterLabel&&(0,n.createElement)("div",{className:`compare-slider-label compare-slider-label-right ${"horizontal_direction"===r?.slidePositon?r?.HorizontalPosition:r?.labelPositons}`},r?.afterLabel),(0,n.createElement)(g,{src:a&&a?.url,alt:a?.alt}))}))}))}))})();