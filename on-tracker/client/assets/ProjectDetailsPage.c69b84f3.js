import{_ as E,j as S,m as B,u as D,s as R,J as I,c as m,a as c,o as s,b as n,d,f as t,h as _,D as V,F as u,k as g,w as O,q as z,v as F,p as q,i as H,l as J}from"./vendor.3fe3d150.js";import{A as r,p as b,n as h,t as j,e as L,l as p,P as y}from"./index.43dc70bf.js";const U={components:{VueHorizontal:S},setup(){let i=B({});const o=D();function v(){let e=!0;r.projectTasks.forEach(f=>{f.isCompleted||(e=!1),e&&(r.activeProjectComplete=!0)})}return R(()=>{r.projectTasks,v()}),I(async()=>{try{await b.getAllProjects(),await b.getProjectById(o.params.id),await h.getNotes(o.params.id),await j.getBusinessTeamMembers(),await j.getProjectTeamMembers(o.params.id),await L.getAvailableEmployees()}catch(e){p.log(e),y.toast(e.message,"error")}}),{noteData:i,employees:m(()=>r.employees),project:m(()=>r.activeProject),notes:m(()=>r.projectNotes),teamMembers:m(()=>r.activeProjectTeamMembers),account:m(()=>r.account),activeProjectComplete:m(()=>r.activeProjectComplete),async createNote(){try{i.value.projectId=o.params.id,await h.createNote(i.value)}catch(e){p.error(e),y.toast(e.message,"error")}},async completeProject(){try{await b.completeProject(o.params.id)}catch(e){p.log(e)}},async cancelProject(){try{await b.cancelProject(o.params.id)}catch(e){p.log(e)}}}}},l=i=>(q("data-v-7376eb98"),i=i(),H(),i),G={class:"container-fluid"},K=l(()=>t("nav",null,[t("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active p-2 ms-3",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#project-page",type:"button",role:"tab","aria-controls":"project","aria-selected":"true"}," Project Page ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link p-2",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#notes",type:"button",role:"tab","aria-controls":"notes","aria-selected":"false"}," Project Notes ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link p-2",id:"messages-tab","data-bs-toggle":"tab","data-bs-target":"#edit-project",type:"button",role:"tab","aria-controls":"messages","aria-selected":"false"}," Edit Project ")])])],-1)),Q={class:"col-12 d-flex justify-content-around d-md-none mt-2"},W=l(()=>t("div",{class:""},[t("button",{class:"btn btn-primary mobile-button",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},[t("b",null,"Tasks")])],-1)),X={key:0,class:""},Y=l(()=>t("button",{class:"btn btn-primary mobile-button",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#availableEmployees","aria-controls":"offcanvasRight"},[t("i",{class:"mdi mdi-account-multiple-plus-outline fs-5"})],-1)),Z=[Y],$=l(()=>t("div",{class:"mt-3 me-0 d-none d-md-block"},[t("button",{class:"btn btn-primary cool-button",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},[t("b",null,"T")])],-1)),tt={key:0,class:"d-none d-md-block"},et=l(()=>t("button",{class:"btn btn-primary cool-button2",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#availableEmployees","aria-controls":"offcanvasRight"},[t("i",{class:"mdi mdi-account-multiple-plus-outline fs-5 px-2"})],-1)),ot=[et],at={class:"tab-content"},st={class:"tab-pane active",id:"project-page",role:"tabpanel","aria-labelledby":"project-tab"},ct={class:"mt-2 mb-3 mx-5 d-none d-md-block"},nt={class:"row"},rt={class:"col-md-12 d-flex justify-content-center"},lt={class:"d-md-none mt-3"},it=l(()=>t("div",{class:"text-dark text-center pt-5"},[t("h2",null,[t("b",null,"TeamMembers")])],-1)),dt={class:"row pt-4 py-5"},mt=["title","src"],bt={class:"tab-pane",id:"notes",role:"tabpanel","aria-labelledby":"notes-tab"},pt=l(()=>t("div",{class:"row mb-0 pt-3"},[t("div",{class:"col-md-10 mx-auto text-center text-dark rounded"},[t("h1",{class:"text-center border-bottom border-5 border-white"},[t("b",null,[t("em",null,"Notes")])])])],-1)),_t={class:"row justify-content-center"},ut={class:"col-md-10 m-2 elevation-4 rounded pt-2 border-2 border border-primary"},vt={class:"notes-section"},ft={key:0,class:"notes-section d-flex justify-content-center align-items-center"},gt=l(()=>t("h6",{class:"text-muted"},"Add a note to your project!",-1)),ht=[gt],jt={key:1,class:"notes-section"},yt={class:"row"},Pt={class:""},kt={class:"col-md-9 mx-auto d-flex pt-2"},wt=l(()=>t("div",null,[t("button",{class:"btn btn-dark text-light rounded ms-5",type:"submit"}," Submit ")],-1)),xt={class:"tab-pane",id:"edit-project",role:"tabpanel","aria-labelledby":"edit-tab"};function Ct(i,o,v,e,f,At){const P=c("navbar"),k=c("AvailableEmployeesOffCanvas"),w=c("TaskOffCanvas"),x=c("ActiveProject"),C=c("ProjectProgressBar"),A=c("ActiveProjectMobile"),N=c("vue-horizontal"),M=c("ProjectNotes"),T=c("EditProject");return s(),n(u,null,[d(P),t("div",G,[K,t("div",Q,[W,e.account.businessAccount?(s(),n("div",X,Z)):_("",!0)]),$,e.account.businessAccount?(s(),n("div",tt,ot)):_("",!0),d(k),d(w),t("div",at,[t("div",st,[t("div",ct,[d(x),d(C),t("div",nt,[t("div",rt,[e.activeProjectComplete?(s(),n("button",{key:0,class:"btn btn-primary my-3",onClick:o[0]||(o[0]=(...a)=>e.completeProject&&e.completeProject(...a))},"Complete Project")):_("",!0),t("button",{class:"btn btn-danger m-3",onClick:o[1]||(o[1]=(...a)=>e.cancelProject&&e.cancelProject(...a))},"Cancel Project")])])]),t("div",lt,[d(A)]),it,t("div",dt,[t("div",null,[d(N,{class:"col-12 bg-white elevation-2 rounded border-primary p-5"},{default:V(()=>[(s(!0),n(u,null,g(e.teamMembers,a=>(s(),n("span",{key:a.id,class:""},[t("img",{title:a.employee.account.name,class:"img-fluid profile-img",alt:"",src:a.employee.account.picture},null,8,mt)]))),128))]),_:1})])])]),t("div",bt,[pt,t("div",_t,[t("div",ut,[t("div",vt,[e.notes.length==0?(s(),n("div",ft,ht)):(s(),n("div",jt,[(s(!0),n(u,null,g(e.notes,a=>(s(),J(M,{key:a.id,note:a},null,8,["note"]))),128))]))])])]),t("div",yt,[t("div",Pt,[t("form",{onSubmit:o[3]||(o[3]=O((...a)=>e.createNote&&e.createNote(...a),["prevent"]))},[t("div",kt,[z(t("textarea",{class:"form-control",placeholder:"Add a note...",name:"",id:"",cols:"80",rows:"1","onUpdate:modelValue":o[2]||(o[2]=a=>e.noteData.body=a)},null,512),[[F,e.noteData.body]]),wt])],32)])])]),t("div",xt,[d(T)])])])],64)}var Tt=E(U,[["render",Ct],["__scopeId","data-v-7376eb98"]]);export{Tt as default};
