"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[760],{7256:function(e,a,l){l.d(a,{q:function(){return H}});var s=l(54506),o=l(88763),n=l(94760),t=l(46942),r=l.n(t),i=l(71710),c=l.n(i),d=l(47009),p=l.n(d),u=l(4213),m=l(71052),g=l(35413),v=l(2047),f=l(25013),w=l(53581),y=l(46256),h=l(20719),b=l(3322),x=l(3823),C=l(86868);var k={name:"1a50hjl",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;color:var(--spectrum-global-color-gray-800);text-decoration:underline;cursor:pointer;&:hover{color:var(--spectrum-global-color-gray-900);}"},Y={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},N={name:"wwrf8h",styles:"display:flex;flex-direction:column;gap:8px;width:80%"},D={name:"1swkvfk",styles:"padding:0;font-family:'adobe-clean';border:none;background:transparent;margin-left:10px;cursor:pointer;text-decoration:underline;color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},S={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},z={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},A={name:"ti75j2",styles:"margin:0"},j={name:"a29rn1",styles:"display:flex;text-align:center;align-items:center;gap:10px"},P={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},L={name:"1xg43bt",styles:"display:flex;gap:20px;align-items:baseline"},B={name:"6apepd",styles:"display:flex;flex-direction:column;gap:48px"};const H=e=>{var a,l;let{formData:t,response:i,handleRestart:d}=e;const{getCredentialData:M,selectedOrganization:I}=(0,o.useContext)(x.A),$=M,{0:_,1:R}=(0,o.useState)(),{0:T,1:E}=(0,o.useState)(""),F={},O={label:"products",productList:[]};null==$||null===(a=$[H])||void 0===a||a.children.forEach((e=>{let{type:a,props:l}=e;var o,n;(F[a]=l,l.children&&a===h.s)&&(F[a]=l,null==l||null===(o=l.children)||void 0===o||o.forEach((e=>{let{type:a,props:l}=e;F[a]=l})));a===v.tZ&&null!=l&&l.children&&(n=O.productList).push.apply(n,(0,s.A)([].concat(l.children).map((e=>{let{props:{label:a,icon:l}}=e;return{label:a,icon:l}}))))}));const U=null==O?void 0:O.productList;(0,o.useEffect)((()=>{t.Downloads&&q(`/console/api/organizations/${null==I?void 0:I.id}/projects/${i.projectId}/workspaces/${i.workspaceId}/download`,t.Download,t.zipUrl)}),[]);const Z=null==$?void 0:$[H],q=async function(e,a,l){void 0===a&&(a="download"),R(!0);try{var s,o,n,t,r;const i=await p().getBinaryContent(l),d=new Uint8Array(i).buffer,m=new(c());await m.loadAsync(d);const g={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===(s=window.adobeIMS)||void 0===s||null===(o=s.getTokenFromStorage())||void 0===o?void 0:o.token),"x-api-key":null===(n=window)||void 0===n||null===(t=n.adobeIMS)||void 0===t||null===(r=t.adobeIdData)||void 0===r?void 0:r.client_id}},v=await fetch(e,g);if(200===v.status){const e=await v.json();m.file("credential.json",JSON.stringify(e));const l=await m.generateAsync({type:"blob"});(0,u.saveAs)(l,`${a}.zip`)}else console.error("Failed to fetch additional data. Response status:",v.status)}catch(i){console.error("An error occurred:",i)}finally{R(!1)}};return(0,n.Y)("div",{className:r()(null==Z?void 0:Z.className),css:B},(0,n.Y)("div",{className:r()(null==Z?void 0:Z.className),css:(0,n.AH)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width: ",m.jd,") and (max-width: ",m.cp,"){padding:0;width:100%;}","")},(0,n.Y)("div",{css:L},(null==Z?void 0:Z.title)&&(0,n.Y)("h2",{className:"spectrum-Heading spectrum-Heading--sizeL",css:P},null==Z?void 0:Z.title),_&&(0,n.Y)("div",{css:j},(0,n.Y)("div",{className:"spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--small"},(0,n.Y)("div",{className:"spectrum-ProgressCircle-track"}),(0,n.Y)("div",{className:"spectrum-ProgressCircle-fills"},(0,n.Y)("div",{className:"spectrum-ProgressCircle-fillMask1"},(0,n.Y)("div",{className:"spectrum-ProgressCircle-fillSubMask1"},(0,n.Y)("div",{className:"spectrum-ProgressCircle-fill"}))),(0,n.Y)("div",{className:"spectrum-ProgressCircle-fillMask2"},(0,n.Y)("div",{className:"spectrum-ProgressCircle-fillSubMask2"},(0,n.Y)("div",{className:"spectrum-ProgressCircle-fill"}))))),(0,n.Y)("p",{css:A},"Downloading..."))),t.Downloads&&(null==Z?void 0:Z.paragraph)&&(0,n.Y)("p",{className:"spectrum-Body spectrum-Body--sizeL",css:z},null==Z?void 0:Z.paragraph),t.Downloads&&(0,n.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:S},"Download not working?",(0,n.Y)("button",{css:D,onClick:()=>q(`/console/api/organizations/${null==I?void 0:I.id}/projects/${i.projectId}/workspaces/${i.workspaceId}/download`,t.Download,t.zipUrl),"data-cy":"restart-download"},"Restart download"))),(0,n.Y)("div",{css:(0,n.AH)("display:flex;gap:35px;@media screen and (min-width: ",m.jd,") and (max-width: ",m.cp,"){flex-direction:column;padding-left:0;}","")},(0,n.Y)("div",{css:(0,n.AH)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width: ",m.jd,") and (max-width: ",m.cp,"){width:100%;}","")},(0,n.Y)(C.g,{credentialName:t.CredentialName,productList:U,ProductComponent:v.tZ,AccessTokenComponent:w.m,DevConsoleLinkComponent:y.x,ClientDetailsComponent:h.s,allowedOriginsDetails:t.AllowedOrigins,organizationName:I,response:i,nextButtonLink:null==Z?void 0:Z.nextStepsHref,nextButtonLabel:null==Z?void 0:Z.nextStepsLabel,devConsoleLink:null==Z?void 0:Z.devConsoleDirection,developerConsoleManage:null==Z?void 0:Z.developerConsoleManage,myCredentialFields:F,collapse:null==Z?void 0:Z.isCollapsable}),(0,n.Y)("div",{css:N},(0,n.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:Y},"Need another credential"),(0,n.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS"},(0,n.Y)("button",{onClick:d,css:k,"data-cy":"Restart-new-credential"},"Restart and create a new credential")))),null!=Z&&Z.children?(0,n.Y)(b.T,{sideContent:null===(l=F[f.D])||void 0===l?void 0:l.children,SideComp:f.D}):null),T&&(0,n.Y)(g.y,{variant:"success",message:"Copied to clipboard",disable:1e3,customDisableFunction:E}))}}}]);
//# sourceMappingURL=862bb76f-1240bf4219c478c89a69.js.map