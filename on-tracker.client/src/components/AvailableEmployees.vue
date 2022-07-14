<template>
  <div class="col-12 elevated border rounded d-flex justify-content-around p-2">
    <span
      ><img
        class="small-profile-img"
        src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
        alt=""
    /></span>
    <span class="d-flex align-items-center mt-2">
      <h2 class="text-white">
        <b
          ><em>{{ employee.account.name }}</em></b
        >
      </h2>
    </span>
    <span>
      <button
        class="btn btn-primary mt-2 text-center"
        @click="createTeamMember"
      >
        Assign
      </button>
    </span>
  </div>
</template>


<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { teamMemberService } from '../services/TeamMembersService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  props: { employee: { type: Object, required: true } },

  setup(props) {
    const route = useRoute()
    return {
      route,
      activeProject: computed(() => AppState.activeProject),
      async createTeamMember() {
        try {
          let data = {
            employeeId: props.employee.id,
            projectId: route.params.id
          }
          await teamMemberService.createTeamMember(data)
          logger.log()
        } catch (error) {
          Pop.toast(error.message)
          logger.log(error)
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
.small-profile-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50em;
}
</style>