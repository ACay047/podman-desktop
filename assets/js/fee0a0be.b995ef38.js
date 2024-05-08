"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81580],{97294:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=i(24246),c=i(71670);const r={},o="Interface: ContainerEngineInfo",d={id:"interfaces/ContainerEngineInfo",title:"Interface: ContainerEngineInfo",description:"Resources information about a container engine",source:"@site/api/interfaces/ContainerEngineInfo.md",sourceDirName:"interfaces",slug:"/interfaces/ContainerEngineInfo",permalink:"/api/interfaces/ContainerEngineInfo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"ContainerCreateResult",permalink:"/api/interfaces/ContainerCreateResult"},next:{title:"ContainerInfo",permalink:"/api/interfaces/ContainerInfo"}},t={},a=[{value:"Properties",id:"properties",level:2},{value:"cpuIdle?",id:"cpuidle",level:3},{value:"Source",id:"source",level:4},{value:"cpus?",id:"cpus",level:3},{value:"Source",id:"source-1",level:4},{value:"diskSize?",id:"disksize",level:3},{value:"Source",id:"source-2",level:4},{value:"diskUsed?",id:"diskused",level:3},{value:"Source",id:"source-3",level:4},{value:"engineId",id:"engineid",level:3},{value:"Source",id:"source-4",level:4},{value:"engineName",id:"enginename",level:3},{value:"Source",id:"source-5",level:4},{value:"engineType",id:"enginetype",level:3},{value:"Source",id:"source-6",level:4},{value:"memory?",id:"memory",level:3},{value:"Source",id:"source-7",level:4},{value:"memoryUsed?",id:"memoryused",level:3},{value:"Source",id:"source-8",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interface-containerengineinfo",children:"Interface: ContainerEngineInfo"}),"\n",(0,s.jsx)(n.p,{children:"Resources information about a container engine"}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"cpuidle",children:"cpuIdle?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpuIdle"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Percentage of idle CPUs (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3096",children:"packages/extension-api/src/extension-api.d.ts:3096"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpus",children:"cpus?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpus"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"number of CPUs available for the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3092",children:"packages/extension-api/src/extension-api.d.ts:3092"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"disksize",children:"diskSize?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"diskSize"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of disk space available for the container engine (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3108",children:"packages/extension-api/src/extension-api.d.ts:3108"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"diskused",children:"diskUsed?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"diskUsed"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of disk space used by the container engine (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3112",children:"packages/extension-api/src/extension-api.d.ts:3112"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"engineId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"unique id identifying the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3080",children:"packages/extension-api/src/extension-api.d.ts:3080"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"enginename",children:"engineName"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"engineName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"name of the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3084",children:"packages/extension-api/src/extension-api.d.ts:3084"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"enginetype",children:"engineType"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"engineType"}),": ",(0,s.jsx)(n.code,{children:'"docker"'})," | ",(0,s.jsx)(n.code,{children:'"podman"'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"engine type, either 'podman' or 'docker'"}),"\n",(0,s.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3088",children:"packages/extension-api/src/extension-api.d.ts:3088"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"memory"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of memory available for the container engine"}),"\n",(0,s.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3100",children:"packages/extension-api/src/extension-api.d.ts:3100"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"memoryused",children:"memoryUsed?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"memoryUsed"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quantity of memory used by the container engine (for Podman engines only)"}),"\n",(0,s.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ACay047/podman-desktop/blob/6176054e1fb79e4f6d8f650f2323bc3cb27ff57c/packages/extension-api/src/extension-api.d.ts#L3104",children:"packages/extension-api/src/extension-api.d.ts:3104"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(27378);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);