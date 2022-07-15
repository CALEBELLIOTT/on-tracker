<template>
  <div
    class="col-md-12 text-dark d-flex justify-content-between ps-2 pe-2 pt-3"
  >
    <div>
      <span>
        <img
          class="img-fluid profile-pic border border-primary border-2"
          :src="account.picture"
          alt=""
        />
      </span>
      <span
        class="ms-4"
        :id="`note${note.id}`"
        @blur="editNote(note.id)"
        contenteditable="true"
      >
        <b>{{ note.body }}</b>
      </span>
    </div>

    <span>
      <i
        class="mdi mdi-delete selectable"
        title="Delete Note"
        @click="deleteNote(note.id)"
      ></i>
    </span>

    <!-- Modal -->
  </div>
  <div class="border-bottom border-dark">
    <p class="ms-3 text-muted">{{ note.account?.name }}</p>
  </div>
</template>


<script>
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
import { computed, ref, watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState"
export default {
  props: { note: { type: Object, required: true } },
  setup(props) {
    return {
      async editNote(id) {
        try {
          const notes = document.getElementById('note' + props.note.id).innerText
          await notesService.editNote(id, notes)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async deleteNote(id) {
        try {
          await notesService.deleteNote(id)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-pic {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 5em;
  border-color: orange;
}
</style>