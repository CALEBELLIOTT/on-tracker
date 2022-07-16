import{_ as b,V as y,m as d,c as x,a as g,o as u,b as m,f as e,w as p,q as l,v as i,d as h,p as D,i as B,g as I}from"./vendor.3fe3d150.js";import{b as A,e as f,P as _,A as c,a as V,r as w}from"./index.c6a58341.js";const S={components:{VueGoogleAutocomplete:y},setup(){let n=d({}),t=d({}),r={};return{businessData:n,userData:t,account:x(()=>c.account),async createBusiness(){try{n.value.businessAccount=!0,n.value.address=r,console.log(n),await A.createBusiness(n.value),await f.createEmployee()}catch(s){_.toast(s.message),console.error(s)}},async editAccountInfo(){console.log(t.value),t.value.businessId=c.account.businessId;try{await V.editAccountInfo(t.value),await f.editEmployee(t.value,c.account.id),w.push({name:"Home"})}catch(s){_.toast(s.message,"error"),console.error(s)}},getAddressData(s){r=s,console.log(r)}}}},a=n=>(D("data-v-03fe3f0e"),n=n(),B(),n),k={key:0,class:"container-fluid"},U={class:"row d-flex justify-content-center form-row"},P=a(()=>e("div",{class:"col-12 d-flex flex-column align-items-center mt-5"},[e("h1",null,[I("Create A Business With "),e("span",{class:"text-primary"},"OnTracker")]),e("div",{class:"divider-line"})],-1)),N={class:"col-8"},j={class:"d-flex flex-column align-items-center"},C=a(()=>e("h3",{class:"text-center"},"Tell us about your business",-1)),T={class:"col-md-10 d-flex flex-column"},q={class:"inputBox d-flex my-2"},Y=a(()=>e("span",{for:""},"Name",-1)),E={class:"inputBox d-flex my-2"},L=a(()=>e("span",{for:""},"Cover Image",-1)),M={class:"inputBox d-flex my-2"},G=a(()=>e("span",{for:""},"Logo",-1)),H=a(()=>e("div",{class:"d-flex justify-content-end m-2"},[e("button",{type:"submit",class:"btn btn-outline-primary",title:"Add your Business "},[e("h3",{class:"m-2 my-0"},[e("i",{class:"mdi mdi-check"})])])],-1)),O={key:1,class:"container-fluid"},W={class:"row"},z={class:"col-12 d-flex flex-column justify-content-center align-items-center"},F=a(()=>e("h1",{class:"mt-5"},"Tell us about yourself",-1)),J=a(()=>e("div",{class:"divider-line"},null,-1)),K=a(()=>e("label",{for:"",class:"mt-2"},"Your Name",-1)),Q=a(()=>e("label",{for:"",class:"mt-2"},"Your Picture",-1)),R=a(()=>e("label",{for:"",class:"mt-2"},"Your Skills",-1)),X=a(()=>e("label",{for:"",class:"mt-2"},"Your Certifications",-1)),Z=a(()=>e("button",{type:"submit",class:"btn btn-outline-primary text-end my-4"},[e("i",{class:"mdi mdi-send"})],-1));function $(n,t,r,s,ee,se){const v=g("vue-google-autocomplete");return s.account.businessId?(u(),m("div",O,[e("div",W,[e("div",z,[F,J,e("form",{class:"mt-3",action:"",onSubmit:t[8]||(t[8]=p(o=>s.editAccountInfo(),["prevent"]))},[K,l(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.userData.name=o),type:"text",placeholder:"Name...",class:"form-control mb-2"},null,512),[[i,s.userData.name]]),Q,l(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.userData.picture=o),type:"text",placeholder:"Img Url...",class:"form-control mb-2"},null,512),[[i,s.userData.picture]]),R,l(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.userData.skills=o),type:"text",placeholder:"Skills...",class:"form-control mb-2"},null,512),[[i,s.userData.skills]]),X,l(e("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>s.userData.certifications=o),type:"text",placeholder:"Certifications...",class:"form-control mb-2"},null,512),[[i,s.userData.certifications]]),Z],32)])])])):(u(),m("div",k,[e("div",U,[P,e("div",N,[e("form",{class:"",onSubmit:t[3]||(t[3]=p((...o)=>s.createBusiness&&s.createBusiness(...o),["prevent"])),action:""},[e("div",j,[C,e("div",T,[e("div",q,[l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.businessData.name=o),required:"",type:"text",class:"border"},null,512),[[i,s.businessData.name]]),Y]),e("div",E,[l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.businessData.coverImg=o),required:"",type:"text",class:"border"},null,512),[[i,s.businessData.coverImg]]),L]),e("div",M,[l(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.businessData.logo=o),required:"",type:"text",class:"border",placeholder:""},null,512),[[i,s.businessData.logo]]),G]),h(v,{id:"map",classname:"form-control",placeholder:"Business Address",onPlacechanged:s.getAddressData},null,8,["onPlacechanged"])])]),H],32)])])]))}var ae=b(S,[["render",$],["__scopeId","data-v-03fe3f0e"]]);export{ae as default};
