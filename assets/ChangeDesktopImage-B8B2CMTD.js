import{d,ae as _,j as l,o as a,c as o,a as n,F as u,m as k,k as v,n as r,ar as I,as as h,at as f,_ as b}from"./index-8lyaWh5H.js";const y={class:"file-list-container"},C={class:"grid"},D=["onClick"],x=d({__name:"ChangeDesktopImage",props:{height:{type:Number,required:!0}},setup(g){const t=_(),m=l(()=>t.desktopImagesList),i=l(()=>t.desktopImage),p=e=>{t.setDesktopImage(e)},c=e=>new URL(Object.assign({"/src/assets/desktopImages/mountain.png":I,"/src/assets/desktopImages/mountain2.jpg":h,"/src/assets/desktopImages/mountain3.png":f})[`/src/assets/desktopImages/${e}`],import.meta.url).href;return(e,L)=>(a(),o("div",{class:"flex container",style:r(`height: ${g.height}px`)},[n("div",y,[n("div",C,[(a(!0),o(u,null,k(m.value,s=>(a(),o("div",{key:"desktop-image-"+s,class:v(["desktop-image-item",s===i.value?"selected-desktop-image-item":""]),onClick:S=>p(s),style:r({"background-image":"url("+c(s)+")"})},null,14,D))),128))])]),n("div",{class:"desktop-image-preview",style:r({"background-image":"url("+c(i.value)+")"})},null,4)],4))}}),B=b(x,[["__scopeId","data-v-19a89e2c"]]);export{B as default};