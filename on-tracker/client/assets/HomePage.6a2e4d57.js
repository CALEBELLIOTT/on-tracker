import{_ as v,j,J as k,s as M,c as i,a as m,o,b as c,l as _,h as a,f as e,g as b,t as h,F as d,k as y,d as A,p as C,i as P}from"./vendor.3fe3d150.js";import{M as B,A as n,t as S,p as T,l as N,P as w}from"./index.0a999110.js";const I={components:{VueHorizontal:j,MapComponent:B},setup(){return k(async()=>{var s;((s=n.account)==null?void 0:s.businessId)&&await S.getBusinessTeamMembers()}),M(async()=>{try{await T.getAllProjects()}catch(s){N.log(s),w.toast(s.message,"error")}}),{account:i(()=>n.account),projects:i(()=>n.activeBusinessProjects.sort((s,u)=>s.dueDate.localeCompare(u.dueDate))),business:i(()=>n.activeBusiness),teamMember:i(()=>n.teamMembers),accountTeamMember:i(()=>n.teamMemberAccount)}}},l=s=>(C("data-v-4b76f6e6"),s=s(),P(),s),V={key:2,class:"container-fluid"},D={class:"row justify-content-around"},H={class:"d-none d-md-block col-md-12 mb-5 my-5"},L={class:"d-flex align-items-center justify-content-center"},E={class:"text-center text-md-start me-2 my-0"},F=l(()=>e("span",{class:"text-primary"},"OnTracker",-1)),U=l(()=>e("span",{class:"sup"},"\xAE",-1)),z=["src"],J=l(()=>e("p",{class:"text-muted text-center"}," A space for your company and employees to collaborate, coordinate, and tackle challenges. ",-1)),O=l(()=>e("div",{class:"divider-line"},null,-1)),q={class:"col-md-3 d-flex flex-column align-items-center my-3"},G=l(()=>e("h3",{class:"text-center"},[e("span",{class:"text-primary border-bottom border-primary mb-0"},"Tracked"),b(" projects ")],-1)),K={class:"projects-container"},Q={class:"d-flex flex-column align-items-center"},R={key:0,class:"text-primary text-center"},W={key:1,class:"text-primary p-2 text-center"},X={class:"col-md-8 ms-3 me-3 mt-3 map-component"},Y={class:"mt-3 text-muted"};function Z(s,u,$,t,ee,te){const g=m("Navbar"),f=m("UserLogin"),p=m("Project"),x=m("MapComponent");return o(),c(d,null,[t.account.id?(o(),_(g,{key:0})):a("",!0),t.account.id?a("",!0):(o(),_(f,{key:1})),t.account.id?(o(),c("div",V,[e("div",D,[e("div",H,[e("div",L,[e("h1",E,[F,b(" for "+h(t.business.name),1),U]),e("img",{src:t.business.logo,class:"img-fluid business-logo",alt:""},null,8,z)]),J,O]),e("div",q,[G,e("div",K,[e("div",Q,[t.account.businessAccount&&t.projects.length==0?(o(),c("p",R," Create a project to get started ")):a("",!0),!t.account.businessAccount&&t.accountTeamMember.length==0?(o(),c("p",W," Contact an administrator to be assigned to a project ")):a("",!0)]),(o(!0),c(d,null,y(t.accountTeamMember,r=>(o(),c(d,{key:r.id},[t.account.businessAccount?a("",!0):(o(),_(p,{key:0,project:r.project,class:"mx-5"},null,8,["project"]))],64))),128)),(o(!0),c(d,null,y(t.projects,r=>(o(),c(d,{key:r.id},[t.account.businessAccount?(o(),_(p,{key:0,project:r,class:"mx-5"},null,8,["project"])):a("",!0)],64))),128))])]),e("div",X,[e("b",Y,h(t.business.name)+" project locations",1),A(x)])])])):a("",!0)],64)}var ce=v(I,[["render",Z],["__scopeId","data-v-4b76f6e6"]]);export{ce as default};
