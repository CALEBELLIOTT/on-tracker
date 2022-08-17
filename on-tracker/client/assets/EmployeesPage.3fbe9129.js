import{e as v,p as m,A as a}from"./index.ec5cf3ae.js";import{_ as b,J as g,c,a as n,o as t,b as o,d as i,f as e,t as l,h as d,F as _,k as f,g as x,l as A,K as E}from"./vendor.3fe3d150.js";const j={setup(){return g(async()=>{await v.getAllEmployees(),await m.getAllProjects(),await m.getBusinessProjects(a.activeBusiness.id)}),{employees:c(()=>a.employees),business:c(()=>a.activeBusiness),account:c(()=>a.account)}}},k={class:"container-fluid"},w={class:"row"},B={class:"col-12"},V={class:"d-flex flex-column align-items-center mt-5"},C={class:"m-0"},M={class:"text-primary"},N=x(" Employees"),S={key:0,class:"text-muted m-0"},P={key:1,class:"text-muted mt-0"},F=e("div",{class:"divider-line"},null,-1),D={key:0,class:"row"},J=E('<div class="col-12"><div class="mt-5"><h3>Assign an employee to a project</h3><p class="text-muted m-0">Using our assign to project tool, you can assign your employees to a project your business has created.</p><p class="">Click the button below to get started</p><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#teamMemberModal"> Assign to Project </button></div></div>',1),K=[J],L={class:"row"},T={class:"col-md-6"},U={class:"mt-5 d-flex flex-column align-items-center"},q=e("h3",null,"Employees",-1),z={class:"col-md-6"},G={class:"mt-5 d-flex flex-column align-items-center"};function H(I,O,Q,s,R,W){const u=n("navbar"),p=n("EmployeeCard"),y=n("ActiveEmployee"),h=n("EmployeeModal");return t(),o(_,null,[i(u),e("div",k,[e("div",w,[e("div",B,[e("div",V,[e("h1",C,[e("span",M,l(s.business.name)+"'s",1),N]),s.account.businessAccount?d("",!0):(t(),o("p",S,"View information about "+l(s.business.name)+"'s employees.",1)),s.account.businessAccount?(t(),o("p",P,"View and manage information about "+l(s.business.name)+"'s employees.",1)):d("",!0),F])])]),s.account.businessAccount?(t(),o("div",D,K)):d("",!0),e("div",L,[e("div",T,[e("div",U,[q,(t(!0),o(_,null,f(s.employees,r=>(t(),A(p,{key:r.id,employee:r},null,8,["employee"]))),128))])]),e("div",z,[e("div",G,[i(y)])])])]),i(h)],64)}var Z=b(j,[["render",H]]);export{Z as default};