"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7377],{91777:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var o=i(24246),r=i(71670);const a={sidebar_position:4,title:"Emulating Docker CLI with Podman",description:"Emulation Docker CLI with Podman can make it easier to migrate from Docker to Podman, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers"],tags:["migrating-from-docker"]},s="Emulating Docker CLI with Podman",t={id:"migrating-from-docker/emulating-docker-cli-with-podman",title:"Emulating Docker CLI with Podman",description:"Emulation Docker CLI with Podman can make it easier to migrate from Docker to Podman, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",source:"@site/docs/migrating-from-docker/emulating-docker-cli-with-podman.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/emulating-docker-cli-with-podman",permalink:"/docs/migrating-from-docker/emulating-docker-cli-with-podman",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/emulating-docker-cli-with-podman.md",tags:[{label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Emulating Docker CLI with Podman",description:"Emulation Docker CLI with Podman can make it easier to migrate from Docker to Podman, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers"],tags:["migrating-from-docker"]},sidebar:"mySidebar",previous:{title:"Using `podman-mac-helper` on macOS",permalink:"/docs/migrating-from-docker/using-podman-mac-helper"},next:{title:"Verifying your tools are using Podman",permalink:"/docs/migrating-from-docker/verifying-your-tools-are-using-podman"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Linux / macOS",id:"linux--macos",level:3},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Windows",id:"windows",level:3},{value:"Procedure",id:"procedure-1",level:4},{value:"Verification",id:"verification-1",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"emulating-docker-cli-with-podman",children:"Emulating Docker CLI with Podman"}),"\n",(0,o.jsx)(n.p,{children:"Consider emulating Docker CLI with Podman to migrate transparently to Podman."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Continue using familiar Docker commands."}),"\n",(0,o.jsx)(n.li,{children:"Take advantage of the benefits of Podman on macOS."}),"\n",(0,o.jsxs)(n.li,{children:["Your tools, such as ",(0,o.jsx)(n.a,{href:"https://maven.apache.org/",children:"Maven"})," or ",(0,o.jsx)(n.a,{href:"https://www.testcontainers.org/",children:"Testcontainers"}),", communicate with Podman without reconfiguration."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Podman"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"linux--macos",children:"Linux / macOS"}),"\n",(0,o.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"/usr/local/bin/docker"})," script:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'#!/usr/bin/sh\n[ -e /etc/containers/nodocker ] || \\\necho "Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg." >&2\nexec podman "$@"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["(Optional) Create an empty ",(0,o.jsx)(n.code,{children:"/etc/containers/nodocker"})," file to avoid the ",(0,o.jsx)(n.code,{children:"Emulate Docker CLI using podman."})," message when running the script."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"# touch /etc/containers/nodocker\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Make the script executable:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"# chmod +x /usr/local/bin/docker\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"docker"})," script to run commands.\nExample:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ docker run -it docker.io/hello-world\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsx)(n.h4,{id:"procedure-1",children:"Procedure"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"C:\\Program Files\\docker\\bin\\docker.bat"})," script:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-batch",children:"@echo off\necho Emulate Docker CLI using podman. <- remove this line to avoid the  `Emulate Docker CLI using podman.` message when running the script.\npodman %*\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add C:\\Program Files\\docker\\bin to the SYSTEM/USER environment variable PATH"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Close all cmd and powershell instances."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"verification-1",children:"Verification"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"docker"})," script to run commands.\nExample:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-PowerShell",children:"$ docker run -it docker.io/hello-world\n"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>s});var o=i(27378);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);