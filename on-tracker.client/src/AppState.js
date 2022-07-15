import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  projects: [],
  allBusinesses: [],
  activeBusiness: {},
  activeProject: {},
  projectNotes: [],
  activeEmployee: {},
  projectTasks: [],
  employees: [],
  activeBusinessProjects: [],
  projectCompletion: 0,
  teamMembers: [],
  activeProjectTeamMembers: [],
  activeProjectAvailableEmployees: [],
  teamMemberAccount: [],
  accountEmployee: {}
})
