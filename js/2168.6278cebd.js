"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[2168],{99008:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var l=a(73396),i=a(87139),s=a(44870),n=a(49242),o=a(67401),u=a(29746),c=a(67695),r=a(7103);const d=(e,t=2)=>{if(!+e)return"0 Bytes";const a=1024,l=t<0?0:t,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(a));return`${parseFloat((e/Math.pow(a,s)).toFixed(l))} ${i[s]}`};var v=a(55280),p=a(95636);const h=e=>((0,l.dD)("data-v-059d6510"),e=e(),(0,l.Cn)(),e),f={key:0,class:"flex-align-center table-header"},m=h((()=>(0,l._)("div",{style:{width:"400px"}},"Name",-1))),w=h((()=>(0,l._)("div",{style:{width:"170px"}},"Date modified",-1))),g=h((()=>(0,l._)("div",{style:{width:"100px"}},"Size",-1))),y=[m,w,g],_=["onDblclick","onMousedown","onContextmenu"],k=["onKeyup","onBlur"],D={key:1,class:"file-text-preview"},x={class:"flex",style:{width:"400px"}},S={key:0},C=["onKeyup","onBlur"],B={key:1,style:{width:"290px"},class:"file-text one-line-ellipsis noselect"},F={key:0,class:"prop-field",style:{width:"170px"}},b={key:1,class:"prop-field",style:{width:"100px"}},L={key:1,class:"footer flex"},I={class:"items-count"},H={style:{"margin-right":"15px"}};var P=(0,l.aZ)({props:{itemsList:{type:Array,required:!0},isFocused:Boolean,canRename:Boolean,keyEventsActive:{type:Boolean,default:!0},canChangeViewType:{type:Boolean,default:!0},showProperties:{type:Boolean,default:!1},height:{type:Number}},emits:["onDoubleClick","onRightClick","renameFileHandler","onItemMouseDown","onSelectedItemsChange"],setup(e,{emit:t}){const a=e,h=(0,c.H)(),m=(0,p.F)(),w=(0,s.iH)("list"),g=(0,s.iH)([]),P=(0,s.iH)(!1),A=(0,s.iH)(""),z=(0,s.iH)(null),Z=(0,s.iH)(null),M=(0,s.iH)(200),U=(0,s.iH)([]),T=(0,l.Fl)((()=>m.timeFormat)),R=(0,l.Fl)((()=>m.dateFormat));(0,l.YP)((()=>g.value),(async function(){t("onSelectedItemsChange",g.value)}));const q=()=>{console.log("DRag start")},E=async()=>{const e=[];for(const t of a.itemsList){const l=a.showProperties?await(0,r.WG)(t):void 0;e.push({path:t,properties:l})}U.value=e};(0,l.m0)((async()=>{a.itemsList&&await E()}));const N=e=>{const t=h.filePathsToCut;return!!t.includes(e)},W=async e=>{t("onItemMouseDown",e),g.value.includes(e)&&1===g.value.length?!P.value&&a.canRename&&(A.value=(0,o.Bc)(e),setTimeout((async()=>{P.value=!P.value}),600)):(g.value=[e],P.value=!1)},K=async e=>{P.value||t("onDoubleClick",e)},V=(e,a)=>{t("onRightClick",{event:e,filePath:a})},$=e=>{t("renameFileHandler",{newName:(0,o.bn)(e)+"/"+A.value,oldName:e})},j=()=>{g.value=[],P.value=!1},O=e=>{if(a.isFocused&&g.value.length>0&&a.itemsList&&a.keyEventsActive)if("ArrowDown"===e.code){const e=a.itemsList.findIndex((e=>e===g.value[g.value.length-1]));-1!==e&&a.itemsList.length>e+1&&(g.value=[a.itemsList[e+1]])}else if("ArrowUp"===e.code){const e=a.itemsList.findIndex((e=>e===g.value[g.value.length-1]));e>0&&(g.value=[a.itemsList[e-1]])}};return(0,l.bv)((async()=>{a.keyEventsActive&&window.addEventListener("keydown",O),await E()})),(0,l.Ah)((()=>{window.removeEventListener("keydown",O)})),(t,a)=>((0,l.wg)(),(0,l.iD)("div",{style:(0,i.j5)(e.height?`height:${e.height}px`:""),class:(0,i.C_)(["container",{"grid-container":"preview"===w.value}]),onMousedown:j},[(0,l._)("span",{class:"input-placeholder",ref_key:"fileNameToChangeSpanRef",ref:Z},(0,i.zw)((0,s.SU)(o.Bc)(A.value)),513),"list"===w.value&&e.showProperties?((0,l.wg)(),(0,l.iD)("div",f,y)):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(U.value,(t=>((0,l.wg)(),(0,l.iD)("div",{class:(0,i.C_)({"cut-item":N(t.path)}),draggable:"true",key:`item-${t.path}`,onDblclick:e=>K(t.path),onDragstart:q,onMousedown:(0,n.iM)((e=>W(t.path)),["stop"]),onContextmenu:(0,n.iM)((e=>V(e,t.path)),["right"])},["preview"===w.value?((0,l.wg)(),(0,l.iD)("div",{key:0,draggable:"true",onDragstart:q},[(0,l.Wm)(u.Z,{selected:g.value.includes(t.path),height:60,filePath:t.path},null,8,["selected","filePath"]),(0,l._)("div",{class:(0,i.C_)([g.value.includes(t.path)?"file-text-preview-selected":"","file-text-preview"])},[g.value.includes(t.path)&&P.value&&e.canRename?(0,l.wy)(((0,l.wg)(),(0,l.iD)("textarea",{key:0,ref_for:!0,ref_key:"fileNameInputRef",ref:z,onKeyup:(0,n.D2)((e=>$(t.path)),["enter"]),onBlur:e=>$(t.path),rows:"2",class:"no-outline file-text-preview","onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e)},null,40,k)),[[n.nr,A.value]]):((0,l.wg)(),(0,l.iD)("div",D,(0,i.zw)((0,s.SU)(o.Bc)(t.path)),1))],2)],32)):(0,l.kq)("",!0),"list"===w.value?((0,l.wg)(),(0,l.iD)("div",{key:1,class:(0,i.C_)(["flex-align-center list-folder-item",{"selected-item":g.value.includes(t.path)}]),draggable:"true"},[(0,l._)("div",x,[(0,l.Wm)(u.Z,{class:"file-icon",noStyle:!0,height:18,filePath:t.path},null,8,["filePath"]),g.value.includes(t.path)&&P.value&&e.canRename?((0,l.wg)(),(0,l.iD)("span",S,[(0,l.wy)((0,l._)("input",{ref_for:!0,ref_key:"fileNameInputRef",ref:z,class:"file-text no-outline","onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e),onKeyup:[(0,n.D2)((e=>$(t.path)),["enter"]),a[2]||(a[2]=(0,n.D2)((e=>P.value=!1),["esc"]))],onBlur:e=>$(t.path),type:"text",style:(0,i.j5)(`width:${M.value}px`)},null,44,C),[[n.nr,A.value]])])):((0,l.wg)(),(0,l.iD)("div",B,(0,i.zw)((0,s.SU)(o.Bc)(t.path)),1))]),e.showProperties&&t.properties?((0,l.wg)(),(0,l.iD)("div",F,(0,i.zw)((0,s.SU)(v.Am)(t.properties.ctime,(0,s.SU)(R)))+" "+(0,i.zw)((0,s.SU)(v.rx)(t.properties.ctime,(0,s.SU)(T))),1)):(0,l.kq)("",!0),e.showProperties&&t.properties?((0,l.wg)(),(0,l.iD)("div",b,(0,i.zw)((0,s.SU)(d)(t.properties.size)),1)):(0,l.kq)("",!0)],2)):(0,l.kq)("",!0)],42,_)))),128)),e.canChangeViewType?((0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",I,(0,i.zw)(e.itemsList.length)+" item"+(0,i.zw)(e.itemsList.length>1?"s":""),1),(0,l._)("div",H,[(0,l._)("span",{class:(0,i.C_)(["mdi mdi-format-list-bulleted preview-icon",{"preview-icon-selected":"list"===w.value}]),onClick:a[3]||(a[3]=e=>w.value="list")},null,2),(0,l._)("span",{class:(0,i.C_)(["mdi mdi-card-outline preview-icon",{"preview-icon-selected":"preview"===w.value}]),onClick:a[4]||(a[4]=e=>w.value="preview")},null,2)])])):(0,l.kq)("",!0)],38))}}),A=a(40089);const z=(0,A.Z)(P,[["__scopeId","data-v-059d6510"]]);var Z=z},19050:function(e,t,a){a.d(t,{Z:function(){return w}});var l=a(73396),i=a(87139);const s=e=>((0,l.dD)("data-v-2cccc3b0"),e=e(),(0,l.Cn)(),e),n=s((()=>(0,l._)("div",{class:"title-text"},"Favourites",-1))),o=["onClick"],u={class:"medium-font"},c=s((()=>(0,l._)("div",{class:"title-text"},"Cloud",-1))),r=s((()=>(0,l._)("div",{class:"favourite-item"},[(0,l._)("span",{class:(0,i.C_)("mdi mdi-cloud mdi-18 favourite-icon")}),(0,l._)("span",{class:"medium-font"},"Share folder ")],-1)));function d(e,t,a,s,d,v){return e.favouritesPathList?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"left-panel",style:(0,i.j5)(e.height?`height:${e.height-2}px`:"")},[n,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.favouritesPathList,(t=>((0,l.wg)(),(0,l.iD)("div",{class:(0,i.C_)(["favourite-item",e.pathSelected===t.path?"favourite-item-selected":""]),key:"favourite-"+t,onClick:a=>e.clickFavouriteHandler(t.path)},[(0,l._)("span",{class:(0,i.C_)(`mdi ${t.mdiIcon}  favourite-icon`)},null,2),(0,l._)("span",u,(0,i.zw)(e.getFileNameFromPath(t.path)),1)],10,o)))),128)),c,r],4)):(0,l.kq)("",!0)}var v=a(67401),p=a(95636),h=(0,l.aZ)({props:{pathSelected:{type:String,default:""},height:{type:Number,required:!1}},components:{},emits:["onFavouriteSelect"],setup(e,t){const a=(0,p.F)(),i=(0,l.Fl)((()=>a.favouritesPathListAndIcon)),s=e=>{t.emit("onFavouriteSelect",e)};return{favouritesPathList:i,getFileNameFromPath:v.Bc,clickFavouriteHandler:s}}}),f=a(40089);const m=(0,f.Z)(h,[["render",d],["__scopeId","data-v-2cccc3b0"]]);var w=m},62168:function(e,t,a){a.d(t,{Z:function(){return H}});var l=a(73396),i=a(87139),s=a(44870),n=a(46596),o=a(30998),u=a(81681),c=a(99008),r=a(19050),d=a(15083),v=a(7103),p=a(67401);const h=e=>((0,l.dD)("data-v-973fd3ac"),e=e(),(0,l.Cn)(),e),f={style:{color:"white"}},m={class:"flex"},w={class:"right-panel"},g={class:"input-list"},y={key:0,class:"input"},_=h((()=>(0,l._)("div",{class:"label"},"Save as:",-1))),k={class:"input"},D={class:"label"},x={class:"selected-folder flex"},S=["src"],C={class:"path-and-files-container"},B={class:"buttons-container"},F=(0,l.Uk)("Cancel");var b=(0,l.aZ)({props:{to:String,showSaveAsInput:{type:Boolean,default:!0},inputLabelText:{type:String,default:"Destination"},actionButtonText:{type:String,default:"Save"}},emits:["closeDialog","onFolderSelected"],setup(e,{emit:t}){const h=e,b=(0,s.iH)(""),L=(0,s.iH)([]),I=(0,s.iH)(d.Ll),H=(0,l.Fl)((()=>(0,p.Bc)(I.value))),P=async(e,t)=>{Z(e,t),await(0,v.zj)(e)?I.value=e:b.value=(0,p.Bc)(e)},A=e=>e.map((e=>e.path)),z=(e,t)=>{if(-1===t)return[];const a=[...e];return e.length>t&&a.splice(t+1),a},Z=async(e,t)=>{const a=z(L.value,t),l=await(0,v.bE)(e,!0),i=[];for(const n of l){const e=await(0,v.zj)(n);i.push({path:n,isFolder:e})}const s={path:e,files:i};a.push(s),L.value=a},M=()=>{t("closeDialog")},U=()=>{if((h.showSaveAsInput&&b.value||!h.showSaveAsInput)&&I.value){console.log("PATH TO EMIT",I.value);let e=I.value;h.showSaveAsInput&&(e+="/"+b.value),t("onFolderSelected",e)}else console.log("SHOW ERRO")};return(0,l.bv)((async()=>{Z(d.Ll,0)})),(t,d)=>((0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(o.Z,{to:e.to,noPadding:!0},{default:(0,l.w5)((()=>[(0,l._)("div",m,[(0,l.Wm)(r.Z,{pathSelected:L.value[0]?L.value[0].path:"",onOnFavouriteSelect:d[0]||(d[0]=e=>P(e,-1))},null,8,["pathSelected"]),(0,l._)("div",w,[(0,l._)("div",null,[(0,l._)("div",g,[e.showSaveAsInput?((0,l.wg)(),(0,l.iD)("div",y,[_,(0,l.Wm)(n.Z,{placeholder:"Save as",modelValue:b.value,"onUpdate:modelValue":d[1]||(d[1]=e=>b.value=e)},null,8,["modelValue"])])):(0,l.kq)("",!0),(0,l._)("div",k,[(0,l._)("div",D,(0,i.zw)(e.inputLabelText)+":",1),(0,l._)("div",x,[(0,l._)("img",{height:"18",src:a(60525),alt:""},null,8,S),(0,l._)("p",null,(0,i.zw)((0,s.SU)(H)),1)])])]),(0,l._)("div",C,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(L.value,((t,a)=>((0,l.wg)(),(0,l.iD)("div",{key:"path-files-"+t.path,class:"path-item",style:(0,i.j5)(` height: ${e.showSaveAsInput?400:450}px;`)},[(0,l.Wm)(c["default"],{itemsList:A(t.files),canRename:!1,isFocused:!0,canChangeViewType:!1,keyEventsActive:!1,onOnItemMouseDown:e=>P(e,a)},null,8,["itemsList","onOnItemMouseDown"])],4)))),128))])]),(0,l._)("div",B,[(0,l.Wm)(u.Z,{neutralColor:"",onClick:M},{default:(0,l.w5)((()=>[F])),_:1}),(0,l.Wm)(u.Z,{class:"save-button",onClick:U},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.actionButtonText),1)])),_:1})])])])])),_:1},8,["to"])]))}}),L=a(40089);const I=(0,L.Z)(b,[["__scopeId","data-v-973fd3ac"]]);var H=I}}]);
//# sourceMappingURL=2168.6278cebd.js.map