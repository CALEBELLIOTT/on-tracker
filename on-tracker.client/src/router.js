import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authSettled
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: loadPage('ProjectDetailsPage')
  },
  {
    path: '/employeeLogin',
    name: 'EmployeeLogin',
    component: loadPage('EmployeeLoginPage')
  },
  {
    path: '/employeePage',
    name: 'EmployeesPage',
    component: loadPage('EmployeesPage'),
    beforeEnter: authGuard
  },
  {
    path: '/experimental',
    name: 'ExperimentPage',
    component: loadPage('ExperimentPage')
  },
  {
    path: '/businessLogin',
    name: 'BusinessLogin',
    component: loadPage('BusinessLoginPage')
  },
  {
    path: '/firstTimeLogin',
    name: 'FirstTimeLogin',
    component: loadPage('FirstTimeLoginPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/createProject',
    name: 'CreateProject',
    component: loadPage('CreateProjectPage'),
    beforeEnter: authGuard
  },

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
