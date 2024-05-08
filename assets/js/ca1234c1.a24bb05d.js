"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77401],{33160:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=o(24246),t=o(71670);const i={},s="Interface: TelemetryLoggerOptions",c={id:"interfaces/TelemetryLoggerOptions",title:"Interface: TelemetryLoggerOptions",description:"Options for creating a TelemetryLogger",source:"@site/api/interfaces/TelemetryLoggerOptions.md",sourceDirName:"interfaces",slug:"/interfaces/TelemetryLoggerOptions",permalink:"/api/interfaces/TelemetryLoggerOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"TelemetryLogger",permalink:"/api/interfaces/TelemetryLogger"},next:{title:"TelemetrySender",permalink:"/api/interfaces/TelemetrySender"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"additionalCommonProperties?",id:"additionalcommonproperties",level:3},{value:"Source",id:"source",level:4},{value:"ignoreBuiltInCommonProperties?",id:"ignorebuiltincommonproperties",level:3},{value:"Source",id:"source-1",level:4},{value:"ignoreUnhandledErrors?",id:"ignoreunhandlederrors",level:3},{value:"Source",id:"source-2",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interface-telemetryloggeroptions",children:"Interface: TelemetryLoggerOptions"}),"\n",(0,r.jsxs)(n.p,{children:["Options for creating a ",(0,r.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:"TelemetryLogger"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"additionalcommonproperties",children:"additionalCommonProperties?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"additionalCommonProperties"}),": ",(0,r.jsx)(n.code,{children:"Record"}),"<",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Any additional common properties which should be injected into the data object."}),"\n",(0,r.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3978",children:"packages/extension-api/src/extension-api.d.ts:3978"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ignorebuiltincommonproperties",children:"ignoreBuiltInCommonProperties?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"ignoreBuiltInCommonProperties"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether or not you want to avoid having the built-in common properties such as os, extension name, etc injected into the data object.\nDefaults to ",(0,r.jsx)(n.code,{children:"false"})," if not defined."]}),"\n",(0,r.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3966",children:"packages/extension-api/src/extension-api.d.ts:3966"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ignoreunhandlederrors",children:"ignoreUnhandledErrors?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"ignoreUnhandledErrors"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether or not unhandled errors on the extension host caused by your extension should be logged to your sender.\nDefaults to ",(0,r.jsx)(n.code,{children:"false"})," if not defined."]}),"\n",(0,r.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3972",children:"packages/extension-api/src/extension-api.d.ts:3972"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var r=o(27378);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);