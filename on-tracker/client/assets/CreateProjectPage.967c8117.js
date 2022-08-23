import{_ as g,V as f,m,c as h,n as D,a as u,o as P,b as y,d as _,f as e,w as I,q as l,v as n,t as x,F as S,K as V,p as w,i as N}from"./vendor.3fe3d150.js";import{A as v,p as q,P as A,l as U}from"./index.ad397e30.js";const C={components:{VueGoogleAutocomplete:f},setup(){let s=m({jobSiteImgs:[]}),o=m(""),d={},t=h(()=>v.activeBusiness.value);const i=D();return{jobImg:o,projectData:s,async createProject(){s.value.location=d,s.value.businessId=v.activeBusiness.id;try{const r=await q.createProject(s.value);i.push({name:"Project",params:{id:r.id}})}catch(r){A.toast(r.message),U.log(r)}},addImg(){s.value.jobSiteImgs.push(o.value),o.value=""},getAddressData(r){d=r,console.log(t),console.log(d)}}}},c=s=>(w("data-v-0b99c8a7"),s=s(),N(),s),k={class:"container-fluid"},B={class:"row"},T=V('<div class="col-12 mt-5 text-center" data-v-0b99c8a7><h1 class="" data-v-0b99c8a7> Create A Project With <span class="text-primary" data-v-0b99c8a7>OnTracker</span></h1><p class="text-muted" data-v-0b99c8a7> Using OnTracker, you can track a projects progress, location, and manage employees - all from an easy to use interface. </p></div><div class="divider-line" data-v-0b99c8a7></div>',2),F={class:"col-12 mt-2"},J={class:"row"},M={class:"col-md-6 p-2"},O=c(()=>e("label",{for:""},"Project Name",-1)),E={class:"col-md-6 p-2"},G=c(()=>e("label",{for:""},"Project Cover Image",-1)),K={class:"col-md-6 p-2"},L=c(()=>e("label",{for:""},"Project Location",-1)),Q={class:"col-md-6 p-2"},R={for:""},W={class:"input-group"},z={class:"col-md-6 p-2"},H=c(()=>e("label",{for:""},"Quoted Price",-1)),X={class:"col-md-6 p-2"},Y=c(()=>e("label",{for:""},"Due Date",-1)),Z={class:"col-12 p-2"},$=c(()=>e("label",{for:""},"Project Description",-1)),ee=c(()=>e("div",{class:"col-12 d-flex justify-content-between"},[e("button",{type:"button",class:"btn btn-secondary"},"Close"),e("button",{type:"submit",class:"btn btn-success"},"Submit")],-1));function oe(s,o,d,t,i,r){var p;const b=u("Navbar"),j=u("vue-google-autocomplete");return P(),y(S,null,[_(b),e("div",k,[e("div",B,[T,e("div",F,[e("form",{onSubmit:o[7]||(o[7]=I((...a)=>t.createProject&&t.createProject(...a),["prevent"]))},[e("div",J,[e("div",M,[O,l(e("input",{required:"",type:"text",class:"form-control",placeholder:"Name...","onUpdate:modelValue":o[0]||(o[0]=a=>t.projectData.projectName=a)},null,512),[[n,t.projectData.projectName]])]),e("div",E,[G,l(e("input",{required:"",type:"text",class:"form-control",placeholder:"Url...","onUpdate:modelValue":o[1]||(o[1]=a=>t.projectData.coverImg=a)},null,512),[[n,t.projectData.coverImg]])]),e("div",K,[L,_(j,{id:"project",classname:"form-control",placeholder:"Project Address",onPlacechanged:t.getAddressData},null,8,["onPlacechanged"])]),e("div",Q,[e("label",R,"Jobsite Images x"+x((p=t.projectData.jobSiteImgs)==null?void 0:p.length),1),e("div",W,[l(e("input",{type:"text",class:"form-control",placeholder:"Jobsite Images...","onUpdate:modelValue":o[2]||(o[2]=a=>t.jobImg=a)},null,512),[[n,t.jobImg]]),e("button",{onClick:o[3]||(o[3]=(...a)=>t.addImg&&t.addImg(...a)),class:"btn btn-outline-primary",type:"button"}," + ")])]),e("div",z,[H,l(e("input",{required:"",type:"number",min:"1",placeholder:"1",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=a=>t.projectData.quotePrice=a)},null,512),[[n,t.projectData.quotePrice]])]),e("div",X,[Y,l(e("input",{required:"",type:"date",placeholder:"",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=a=>t.projectData.dueDate=a)},null,512),[[n,t.projectData.dueDate]])]),e("div",Z,[$,l(e("textarea",{required:"",name:"",id:"",cols:"30",rows:"5",placeholder:"Description...",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=a=>t.projectData.description=a)},null,512),[[n,t.projectData.description]])]),ee])],32)])])])],64)}var se=g(C,[["render",oe],["__scopeId","data-v-0b99c8a7"]]);export{se as default};
