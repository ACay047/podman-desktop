import{G as ee,o as te,p as ae,q as b,v as n,I as G,J as x,l as m,K as re,i as ne,r as k,e as se,L as de,a as p,b as ie,t as S,w as J,j as I,k as w,f as V,s as oe,x as le}from"./props-Bhco7X2I.js";import{s as be,a as K,F as pe}from"./fa-layers-text.svelte_svelte_type_style_lang-C3dHod3N.js";import{b as ve,s as L,t as _}from"./class-CNFtAqei.js";import{o as ye}from"./index-client-D4oa2Bs8.js";import{S as fe}from"./Spinner-BXwthnWH.js";function ue(d,t){var i;var l=(i=d.$$events)==null?void 0:i[t.type],u=ee(l)?l.slice():l==null?[]:[l];for(var j of u)j.call(this,t)}const M=d=>!!d&&typeof d=="object"&&"prefix"in d&&typeof d.prefix=="string"&&d.prefix.startsWith("fa");var ce=S("<span><!></span>"),ge=S('<div class="flex flex-row p-0 m-0 bg-transparent justify-center items-center space-x-[4px]"><!> <!></div>'),xe=S('<button type="button"><!></button>');function me(d,t){const l=be(t),u=te(t,["children","$$slots","$$events","$$legacy"]);ae(t,!1);let j=b(t,"title",8,void 0),i=b(t,"inProgress",8,!1),z=b(t,"disabled",8,!1),e=b(t,"type",8,"primary"),c=b(t,"icon",8,void 0),v=b(t,"selected",8,void 0),T=b(t,"padding",24,()=>"px-4 "+(e()==="tab"?"pb-1":e()==="secondary"?"py-[4px]":e()==="danger"?"py-[3px]":"py-[5px]")),B=J(void 0);ye(()=>{M(c())?n(B,"fa"):n(B,"unknown")});let a=J("");G(()=>(x(v()),x(e())),()=>{v()!==void 0&&e()!=="tab"&&console.error("property selected can be used with type=tab only")}),G(()=>(x(z()),x(i()),x(e()),m(a)),()=>{z()||i()?(e()==="primary"?n(a,"bg-[var(--pd-button-disabled)]"):e()==="secondary"?n(a,"border-[1px] border-[var(--pd-button-disabled)] bg-[var(--pd-button-disabled)]"):e()==="danger"&&n(a,"border-2 border-[var(--pd-button-danger-disabled-border)] text-[var(--pd-button-danger-disabled-text)] bg-[var(--pd-button-danger-disabled-bg)]"),e()!=="danger"&&n(a,m(a)+" text-[var(--pd-button-disabled-text)]")):e()==="primary"?n(a,"bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] border-none hover:bg-[var(--pd-button-primary-hover-bg)]"):e()==="secondary"?n(a,"border-[1px] border-[var(--pd-button-secondary)] text-[var(--pd-button-secondary)] hover:bg-[var(--pd-button-secondary-hover)] hover:border-[var(--pd-button-secondary-hover)] hover:text-[var(--pd-button-text)]"):e()==="danger"?n(a,"border-2 border-[var(--pd-button-danger-border)] bg-[var(--pd-button-danger-bg)] text-[var(--pd-button-danger-text)] hover:bg-[var(--pd-button-danger-hover-bg)] hover:text-[var(--pd-button-danger-hover-text)]"):e()==="tab"?n(a,"border-b-[3px] border-[var(--pd-button-tab-border)]"):n(a,"border-none text-[var(--pd-button-link-text)] hover:bg-[var(--pd-button-link-hover-bg)]"),e()!=="tab"&&n(a,m(a)+" rounded-[4px]")}),re(),ne();var r=xe(),W=I(r);{var C=o=>{var y=ge();_(y,"py-[3px]",!l.default);var h=I(y);{var E=s=>{fe(s,{size:"1em"})},H=s=>{var g=w(),F=V(g);{var Q=f=>{pe(f,{get icon(){return c()}})},R=f=>{var q=w(),U=V(q);{var X=P=>{var A=w(),Y=V(A);le(Y,c,(Z,$)=>{$(Z,{})}),p(P,A)};k(U,P=>{m(B)==="unknown"&&P(X)},!0)}p(f,q)};k(F,f=>{M(c())?f(Q):f(R,!1)},!0)}p(s,g)};k(h,s=>{i()?s(E):s(H,!1)})}var N=oe(h,2);{var O=s=>{var g=ce(),F=I(g);K(F,t,"default",{}),p(s,g)};k(N,s=>{l.default&&s(O)})}p(o,y)},D=o=>{var y=w(),h=V(y);K(h,t,"default",{}),p(o,y)};k(W,o=>{c()||i()?o(C):o(D,!1)})}se(()=>{ve(r,`relative ${T()??""} box-border whitespace-nowrap select-none transition-all ${m(a)??""} ${u.class??""??""}`),r.hidden=u.hidden,L(r,"title",j()),L(r,"aria-label",u["aria-label"]),r.disabled=z()||i(),_(r,"border-[var(--pd-button-tab-border-selected)]",e()==="tab"&&v()),_(r,"hover:border-[var(--pd-button-tab-hover-border)]",e()==="tab"&&!v()),_(r,"text-[var(--pd-button-tab-text-selected)]",e()==="tab"&&v()),_(r,"text-[var(--pd-button-tab-text)]",e()==="tab"&&!v())}),de("click",r,function(o){ue.call(this,t,o)}),p(d,r),ie()}me.__docgen={keywords:[],data:[{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"inProgress",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"primary",text:'"primary"'},{kind:"const",type:"string",value:"secondary",text:'"secondary"'},{kind:"const",type:"string",value:"danger",text:'"danger"'},{kind:"const",type:"string",value:"link",text:'"link"'},{kind:"const",type:"string",value:"tab",text:'"tab"'}],text:'"primary" | "secondary" | "danger" | "link" | "tab"'},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"padding",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"Button.svelte"};export{me as B,ue as b,M as i};
