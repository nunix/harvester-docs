"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},o=void 0,l={unversionedId:"install/iso-install",id:"version-v0.3/install/iso-install",title:"ISO Installation",description:"To get the Harvester ISO, download it from the Github releases.",source:"@site/versioned_docs/version-v0.3/install/iso-install.md",sourceDirName:"install",slug:"/install/iso-install",permalink:"/v0.3/install/iso-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/install/iso-install.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},sidebar:"tutorialSidebar",previous:{title:"Harvester Overview",permalink:"/v0.3/"},next:{title:"USB Installation",permalink:"/v0.3/install/usb-install"}},s={},c=[],p={toc:c};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get the Harvester ISO, download it from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases.")),(0,a.kt)("p",null,"During the installation you can either choose to form a new cluster, or join the node to an existing cluster."),(0,a.kt)("p",null,"Note: This ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/97ADieBX6bE"},"video")," shows a quick overview of the ISO installation."),(0,a.kt)("div",{class:"text-center"},(0,a.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/97ADieBX6bE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,a.kt)("inlineCode",{parentName:"li"},"Harvester Installer")," option.\n",(0,a.kt)("img",{alt:"iso-install.png",src:n(39069).Z,width:"1430",height:"791"})),(0,a.kt)("li",{parentName:"ol"},"Choose the installation mode by either creating a new Harvester cluster, or by joining an existing one."),(0,a.kt)("li",{parentName:"ol"},"Choose the installation device that Harvester will be formatted to."),(0,a.kt)("li",{parentName:"ol"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bonded NIC named ",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-mgmt"),", and the IP address can either be configured via DHCP or a static assigned a static one.\n",(0,a.kt)("img",{alt:"iso-installed.png",src:n(42114).Z,width:"422",height:"317"})),(0,a.kt)("li",{parentName:"ol"},"(Optional) Configure the DNS servers. Use commas as a delimiter."),(0,a.kt)("li",{parentName:"ol"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual IP")," which you can use to access the cluster or join the cluster to other nodes."),(0,a.kt)("li",{parentName:"ol"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster token"),". This token will be used for adding other nodes to the cluster."),(0,a.kt)("li",{parentName:"ol"},"Configure the login password of the host. The default SSH user is ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) Configure the NTP Servers of the node. This defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.suse.pool.ntp.org"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here. Otherwise, leave this blank."),(0,a.kt)("li",{parentName:"ol"},"(Optional) You can choose to import SSH keys from a remote URL server. Your GitHub public keys can be used with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/<username>.keys"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) If you need to customize the host with a cloud-init config, enter the HTTP URL here."),(0,a.kt)("li",{parentName:"ol"},"After confirming the installation options, Harvester will be installed to your host. The installation may take a few minutes to be complete."),(0,a.kt)("li",{parentName:"ol"},"Once the installation is complete, it will restart the host. After the restart, the Harvester console containing the management URL and status will be displayed. You can Use ",(0,a.kt)("inlineCode",{parentName:"li"},"F12")," to switch between the Harvester console and the Shell."),(0,a.kt)("li",{parentName:"ol"},"The default URL of the web interface is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your-virtual-ip"),".\n",(0,a.kt)("img",{alt:"iso-installed.png",src:n(4069).Z,width:"1580",height:"770"})),(0,a.kt)("li",{parentName:"ol"},"You will be prompted to set the password for the default ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")," user when logging in for the first time.\n",(0,a.kt)("img",{alt:"first-login.png",src:n(40482).Z,width:"2555",height:"1295"}))))}h.isMDXComponent=!0},40482:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},39069:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iso-install-2091728c1c52c4f9d5ec934cac509639.png"},4069:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iso-installed-343c1a408fde89500699144f7e2739b0.png"},42114:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);