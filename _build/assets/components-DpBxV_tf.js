import{x as K,a as y,g as oe,y as q,z as T,e as _,n as ie,o as G,A as ce,B as le,u as ue,C as fe,F as he,b as de,m as H,G as pe,i as me,j as ge,r as ve,t as ye}from"./web-Bar9rDn8.js";function we(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,a){if(n)return!(n=!1);const o={to:s,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of e)i.listener({...o,from:i.location,retry:l=>{l&&(n=!0),i.navigate(s,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}let W;function J(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),W=window.history.state._depth}J();function Ue(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function ze(e,t){let n=!1;return()=>{const r=W;J();const s=r==null?null:W-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const Pe=/^(?:[a-z0-9]+:)?\/\//i,Re=/^\/+|(\/)\/+$/g,xe="http://sr";function R(e,t=!1){const n=e.replace(Re,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function B(e,t,n){if(Pe.test(t))return;const r=R(e),s=n&&R(n);let a="";return!s||t.startsWith("/")?a=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+s:a=s,(a||"/")+R(t,!a)}function Ce(e,t){if(e==null)throw new Error(t);return e}function be(e,t){return R(e).replace(/\/*(\*.*)?$/g,"")+R(t)}function X(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function Ae(e,t,n){const[r,s]=e.split("/*",2),a=r.split("/").filter(Boolean),o=a.length;return i=>{const l=i.split("/").filter(Boolean),h=l.length-o;if(h<0||h>0&&s===void 0&&!t)return null;const f={path:o?"":"/",params:{}},m=p=>n===void 0?void 0:n[p];for(let p=0;p<o;p++){const d=a[p],v=d[0]===":",w=v?l[p]:l[p].toLowerCase(),b=v?d.slice(1):d.toLowerCase();if(v&&$(w,m(b)))f.params[b]=w;else if(v||!$(w,b))return null;f.path+=`/${w}`}if(s){const p=h?l.slice(-h).join("/"):"";if($(p,m(s)))f.params[s]=p;else return null}return f}}function $(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Le(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,a)=>s+(a.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Q(e){const t=new Map,n=oe();return new Proxy({},{get(r,s){return t.has(s)||K(n,()=>t.set(s,y(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function V(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return V(r).reduce((a,o)=>[...a,...s.map(i=>i+o)],[])}const Ee=100,Se=T(),Y=T(),D=()=>Ce(q(Se),"<A> and 'use' router primitives can be only used inside a Route."),Oe=()=>q(Y)||D().base,_e=e=>{const t=Oe();return y(()=>t.resolvePath(e()))},Be=e=>{const t=D();return y(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Fe=()=>D().location;function je(e,t=""){const{component:n,preload:r,load:s,children:a,info:o}=e,i=!a||Array.isArray(a)&&!a.length,l={key:e,component:n,preload:r||s,info:o};return Z(e.path).reduce((h,f)=>{for(const m of V(f)){const p=be(t,m);let d=i?p:p.split("/*",1)[0];d=d.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),h.push({...l,originalPath:f,pattern:d,matcher:Ae(d,!i,e.matchFilters)})}return h},[])}function $e(e,t=0){return{routes:e,score:Le(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const a=e[s],o=a.matcher(n);if(!o)return null;r.unshift({...o,route:a})}return r}}}function Z(e){return Array.isArray(e)?e:[e]}function Ie(e,t="",n=[],r=[]){const s=Z(e);for(let a=0,o=s.length;a<o;a++){const i=s[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=je(i,t);for(const h of l){n.push(h);const f=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!f)Ie(i.children,h.pattern,n,r);else{const m=$e([...n],r.length);r.push(m)}n.pop()}}}return n.length?r:r.sort((a,o)=>o.score-a.score)}function I(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function We(e,t,n){const r=new URL(xe),s=y(f=>{const m=e();try{return new URL(m,r)}catch{return console.error(`Invalid path ${m}`),f}},r,{equals:(f,m)=>f.href===m.href}),a=y(()=>s().pathname),o=y(()=>s().search,!0),i=y(()=>s().hash),l=()=>"",h=G(o,()=>X(s()));return{get pathname(){return a()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:n?n(h):Q(h)}}let P;function Ne(){return P}function ke(e){}function He(e,t,n,r={}){const{signal:[s,a],utils:o={}}=e,i=o.parsePath||(c=>c),l=o.renderPath||(c=>c),h=o.beforeLeave||we(),f=B("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!s().value&&a({value:f,replace:!0,scroll:!1});const[m,p]=_(!1);let d;const v=(c,u)=>{u.value===w()&&u.state===L()||(d===void 0&&p(!0),P=c,d=u,ce(()=>{d===u&&(b(d.value),ee(d.state),he(),M[1](g=>g.filter(x=>x.pending)))}).finally(()=>{d===u&&le(()=>{P=void 0,c==="navigate"&&se(d),p(!1),d=void 0})}))},[w,b]=_(s().value),[L,ee]=_(s().state),E=We(w,L,o.queryWrapper),S=[],M=_([]),U=y(()=>typeof r.transformUrl=="function"?I(t(),r.transformUrl(E.pathname)):I(t(),E.pathname)),z=()=>{const c=U(),u={};for(let g=0;g<c.length;g++)Object.assign(u,c[g].params);return u},te=o.paramsWrapper?o.paramsWrapper(z,t):Q(z),N={pattern:f,path:()=>f,outlet:()=>null,resolvePath(c){return B(f,c)}};return ie(G(s,c=>v("native",c),{defer:!0})),{base:N,location:E,params:te,isRouting:m,renderPath:l,parsePath:i,navigatorFactory:re,matches:U,beforeLeave:h,preloadRoute:ae,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:M};function ne(c,u,g){ue(()=>{if(typeof u=="number"){u&&(o.go?o.go(u):console.warn("Router integration does not support relative routing"));return}const x=!u||u[0]==="?",{replace:F,resolve:C,scroll:j,state:A}={replace:!1,resolve:!x,scroll:!0,...g},O=C?c.resolvePath(u):B(x&&E.pathname||"",u);if(O===void 0)throw new Error(`Path '${u}' is not a routable path`);if(S.length>=Ee)throw new Error("Too many redirects");const k=w();(O!==k||A!==L())&&(fe||h.confirm(O,g)&&(S.push({value:k,replace:F,scroll:j,state:L()}),v("navigate",{value:O,state:A})))})}function re(c){return c=c||q(Y)||N,(u,g)=>ne(c,u,g)}function se(c){const u=S[0];u&&(a({...c,replace:u.replace,scroll:u.scroll}),S.length=0)}function ae(c,u){const g=I(t(),c.pathname),x=P;P="preload";for(let F in g){const{route:C,params:j}=g[F];C.component&&C.component.preload&&C.component.preload();const{preload:A}=C;u&&A&&K(n(),()=>A({params:j,location:{pathname:c.pathname,search:c.search,hash:c.hash,query:X(c),state:null,key:""},intent:"preload"}))}P=x}}function Ke(e,t,n,r){const{base:s,location:a,params:o}=e,{pattern:i,component:l,preload:h}=r().route,f=y(()=>r().path);l&&l.preload&&l.preload();const m=h?h({params:o,location:a,intent:P||"initial"}):void 0;return{parent:t,pattern:i,path:f,outlet:()=>l?de(l,{params:o,location:a,data:m,get children(){return n()}}):n(),resolvePath(d){return B(s.path(),d,f())}}}var qe=ye("<a>");function Te(e){e=H({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=pe(e,["href","state","class","activeClass","inactiveClass","end"]),n=_e(()=>e.href),r=Be(n),s=Fe(),a=y(()=>{const o=n();if(o===void 0)return[!1,!1];const i=R(o.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(R(s.pathname).toLowerCase());return[e.end?i===l:l.startsWith(i+"/")||l===i,i===l]});return(()=>{var o=me(qe);return ge(o,H(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!a()[0],[e.activeClass]:a()[0],...t.classList}},link:"",get"aria-current"(){return a()[1]?"page":void 0}}),!1,!1),ve(),o})()}export{Te as A,Se as R,He as a,Y as b,Ie as c,Ke as d,J as e,we as f,Ne as g,Ue as k,xe as m,ze as n,ke as s,Fe as u};
