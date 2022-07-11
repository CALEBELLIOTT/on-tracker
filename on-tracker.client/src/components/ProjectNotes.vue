<template>
  <div class="col-md-12 text-dark d-flex justify-content-between ps-2 pe-2">
    <span
      :id="`note${note.id}`"
      @blur="editNote(note.id)"
      contenteditable="true"
    >
      <b>{{ note.body }}</b>
    </span>

    <span>
      <i class="mdi mdi-delete selectable" @click="deleteNote(note.id)"></i>
    </span>

    <!-- Modal -->
  </div>
  <div>
    <p class="ps-2 text-muted">{{ note.account?.name }}</p>
  </div>
</template>


<script>
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from "@vue/runtime-core"
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
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>