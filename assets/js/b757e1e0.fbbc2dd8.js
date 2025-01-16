"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86219],{80963:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"podman/gpu","title":"GPU container access","description":"GPU passthrough utilization within Windows, macOS and Linux","source":"@site/docs/podman/gpu.md","sourceDirName":"podman","slug":"/podman/gpu","permalink":"/docs/podman/gpu","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/podman/gpu.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"title":"GPU container access","description":"GPU passthrough utilization within Windows, macOS and Linux"},"sidebar":"mySidebar","previous":{"title":"Creating a Podman machine","permalink":"/docs/podman/creating-a-podman-machine"},"next":{"title":"Native Apple Rosetta translation layer (macOS)","permalink":"/docs/podman/rosetta"}}');var r=i(62540),a=i(43023),s=i(65457),l=i(97265);const o={sidebar_position:20,title:"GPU container access",description:"GPU passthrough utilization within Windows, macOS and Linux"},c="GPU container access",d={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Version mismatch",id:"version-mismatch",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Procedure",id:"procedure-1",level:4},{value:"Verification",id:"verification-1",level:4},{value:"Additional resources",id:"additional-resources-1",level:4},{value:"Prerequisites",id:"prerequisites-2",level:4},{value:"Procedure",id:"procedure-2",level:4},{value:"Verification",id:"verification-2",level:4},{value:"Additional resources",id:"additional-resources-2",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gpu-container-access",children:"GPU container access"})}),"\n",(0,r.jsx)(n.p,{children:"Leveraging GPU capabilities within a Podman container provides a powerful and efficient method for running GPU-accelerated workloads. Below are instructions on how to get started setting up your OS to utilize the GPU."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"win",label:"Windows",className:"markdown",children:[(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NVIDIA Graphics Card (Pascal or later)"}),"\n",(0,r.jsx)(n.li,{children:"WSL2 (Hyper-V is not supported)"}),"\n"]}),(0,r.jsx)(n.h4,{id:"procedure",children:"Procedure"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://www.nvidia.com/Download/index.aspx",children:"most up-to-date NVIDIA GPU Driver"})," will support WSL 2. You are not required to download anything else on your host machine for your NVIDIA card."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/installation/windows-install",children:"Verify that WSL2 was installed when installing Podman Desktop."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/podman/creating-a-podman-machine",children:"Create your Podman Machine."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install NVIDIA Container Toolkit onto the Podman Machine:"}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"Podman Machine requires the NVIDIA Container Toolkit to be installed."}),(0,r.jsxs)(n.p,{children:["This can be installed by following the ",(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installing-with-yum-or-dnf",children:"official NVIDIA guide"})," or running the steps below:"]}),(0,r.jsx)(n.p,{children:"SSH into the Podman Machine:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ podman machine ssh\n"})}),(0,r.jsxs)(n.p,{children:["Run the following commands ",(0,r.jsx)(n.strong,{children:"on the Podman Machine, not the host system"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ curl -s -L https://nvidia.github.io/libnvidia-container/stable/rpm/nvidia-container-toolkit.repo | \\\n tee /etc/yum.repos.d/nvidia-container-toolkit.repo && \\\n yum install -y nvidia-container-toolkit && \\\n nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml && \\\n nvidia-ctk cdi list\n"})}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"A configuration change might occur when you create or remove Multi-Instance GPU (MIG) devices, or upgrade the Compute Unified Device Architecture (CUDA) driver. In such cases, you must generate a new Container Device Interface (CDI) specification."})}),(0,r.jsx)(n.h4,{id:"verification",children:"Verification"}),(0,r.jsxs)(n.p,{children:["To verify that containers created can access the GPU, you can use ",(0,r.jsx)(n.code,{children:"nvidia-smi"})," from within a container with NVIDIA drivers installed."]}),(0,r.jsx)(n.p,{children:"Run the following official NVIDIA container on your host machine:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ podman run --rm --device nvidia.com/gpu=all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n"})}),(0,r.jsx)(n.p,{children:"Example output:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"PS C:\\Users\\admin>  podman run --rm --device nvidia.com/gpu=all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\nFri Aug 16 18:58:14 2024\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 545.36                 Driver Version: 546.33       CUDA Version: 12.3     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  NVIDIA GeForce RTX 3060        On  | 00000000:07:00.0  On |                  N/A |\n|  0%   34C    P8              20W / 170W |    886MiB / 12288MiB |      1%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|    0   N/A  N/A        33      G   /Xwayland                                 N/A      |\n+---------------------------------------------------------------------------------------+\n"})}),(0,r.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),(0,r.jsx)(n.h4,{id:"version-mismatch",children:"Version mismatch"}),(0,r.jsx)(n.p,{children:"You might encounter the following error inside the containers:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"# nvidia-smi\nFailed to initialize NVML: N/A\n"})}),(0,r.jsx)(n.p,{children:"This problem is related to a mismatch between the Container Device Interface (CDI) and the installed version."}),(0,r.jsx)(n.p,{children:"To fix this problem, generate a new CDI specification by running the following inside the Podman machine:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml\n"})}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"You might need to restart your Podman machine."})}),(0,r.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installing-with-yum-or-dnf",children:"NVIDIA Container Toolkit Installation"})}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"macOS",label:"macOS (Silicon)",className:"markdown",children:[(0,r.jsx)(n.h4,{id:"prerequisites-1",children:"Prerequisites"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"macOS Silicon (M1 or later)"}),"\n"]}),(0,r.jsx)(n.h4,{id:"procedure-1",children:"Procedure"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important to note"}),' that using the "Metal" GPU on macOS utilizes specialized software to achieve this. Specifically a ',(0,r.jsx)(n.strong,{children:"virtualized GPU"})," from within the Podman Machine that provides translation support from ",(0,r.jsx)(n.a,{href:"https://www.vulkan.org/",children:"Vulkan"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/KhronosGroup/MoltenVK",children:"MoltenVK"})," calls to MSL (Metal Shading Language), Apples GPU."]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a Podman Machine that uses ",(0,r.jsx)(n.code,{children:"libkrun"}),":"]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"libkrun",src:i(74839).A+"",width:"1050",height:"700"})}),(0,r.jsx)(n.h4,{id:"verification-1",children:"Verification"}),(0,r.jsxs)(n.p,{children:["Using the GPU functionality requires a specialized Containerfile containing a ",(0,r.jsx)(n.a,{href:"https://copr.fedorainfracloud.org/coprs/slp/mesa-krunkit/",children:"patched MESA driver"}),"."]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create the following Containerfile:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",children:"FROM fedora:40\nUSER 0\n\n# Install the patched mesa-krunkit drivers\nRUN dnf -y install dnf-plugins-core && \\\n    dnf -y copr enable slp/mesa-krunkit && \\\n    dnf -y install mesa-vulkan-drivers vulkan-loader-devel vulkan-headers vulkan-tools vulkan-loader && \\\n    dnf clean all\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Build the image:"}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"build_libkrun_image",src:i(64238).A+"",width:"1050",height:"700"})}),(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Verify you can see the GPU by running a test container:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'$  podman run --rm -it --device /dev/dri --name gpu-info quay.io/slopezpa/fedora-vgpu vulkaninfo | grep "GPU"\n'})}),(0,r.jsx)(n.p,{children:"Example output:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'$  podman run --rm -it --device /dev/dri --name gpu-info quay.io/slopezpa/fedora-vgpu vulkaninfo | grep "GPU"\n  GPU id = 0 (Virtio-GPU Venus (Apple M1 Pro))\n  GPU id = 1 (llvmpipe (LLVM 17.0.6, 128 bits))\nGPU0:\n deviceType        = PHYSICAL_DEVICE_TYPE_INTEGRATED_GPU\n deviceName        = Virtio-GPU Venus (Apple M1 Pro)\nGPU1:\n'})}),(0,r.jsx)(n.h4,{id:"additional-resources-1",children:"Additional resources"}),(0,r.jsxs)(n.p,{children:["Important note that the virtualized GPU (Virtio-GPU Venus (Apple M1 Pro)) only supports vulkan compute shaders, not rendering / draw. For more information on the available GPU features, see ",(0,r.jsx)(n.code,{children:"vulkaninfo"})," from within the container."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://sinrega.org/2024-03-06-enabling-containers-gpu-macos/",children:"Enabling containers to access the GPU on macOS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/containers/libkrun",children:"libkrun"})}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"linux",label:"Linux",className:"markdown",children:[(0,r.jsx)(n.h4,{id:"prerequisites-2",children:"Prerequisites"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NVIDIA Graphics Card (Pascal or later)"}),"\n"]}),(0,r.jsx)(n.h4,{id:"procedure-2",children:"Procedure"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install the latest NVIDIA GPU Driver for your OS."}),"\n",(0,r.jsxs)(n.li,{children:["Follow the instructions on ",(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:"installing the NVIDIA Container Toolkit"})," in relation to your Linux distribution."]}),"\n",(0,r.jsx)(n.li,{children:"Generate the CDI Specification file for Podman:"}),"\n"]}),(0,r.jsx)(n.p,{children:"This file is saved either to /etc/cdi or /var/run/cdi on your Linux distribution and is used for Podman to detect your GPU(s)."}),(0,r.jsx)(n.p,{children:"Generate the CDI file:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml\n"})}),(0,r.jsx)(n.p,{children:"Check the list of generated devices:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ nvidia-ctk cdi list\n"})}),(0,r.jsxs)(n.p,{children:["More information as well as troubleshooting tips can be found ",(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html",children:"on the official NVIDIA CDI guide"}),"."]}),(0,r.jsx)(n.h4,{id:"verification-2",children:"Verification"}),(0,r.jsxs)(n.p,{children:["To verify that containers created can access the GPU, you can use ",(0,r.jsx)(n.code,{children:"nvidia-smi"})," from within a container with NVIDIA drivers installed."]}),(0,r.jsx)(n.p,{children:"Run the following official NVIDIA container on your host machine:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ podman run --rm --device nvidia.com/gpu=all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n"})}),(0,r.jsx)(n.h4,{id:"additional-resources-2",children:"Additional resources"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html",children:"NVIDIA CDI guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installing-with-yum-or-dnf",children:"NVIDIA Container Toolkit installation"})}),"\n"]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97265:(e,n,i)=>{i.d(n,{A:()=>s});i(63696);var t=i(11750);const r={tabItem:"tabItem_wHwb"};var a=i(62540);function s(e){let{children:n,hidden:i,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:i,children:n})}},65457:(e,n,i)=>{i.d(n,{A:()=>P});var t=i(63696),r=i(11750),a=i(93707),s=i(49519),l=i(83604),o=i(95196),c=i(76229),d=i(88030);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,a=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:i,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:r}),x=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,a]),tabValues:a}}var v=i(95200);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=i(62540);function j(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,i=o.indexOf(n),r=l[i].value;r!==t&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:a}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function I(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function P(e){const n=(0,v.A)();return(0,g.jsx)(I,{...e,children:u(e.children)},String(n))}},64238:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/build_image-1b5bd1a6506009cced1a375950f2f426.png"},74839:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/libkrun-3c7d3f1b0caf980c3e2aa82289c2ee01.png"},43023:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(63696);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);