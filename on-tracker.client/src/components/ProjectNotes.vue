<template>
  <div class="col-md-12 text-dark d-flex justify-content-between ps-2 pe-2">
    <span>
      <b>{{ note.body }}</b>
    </span>
    <!-- Button trigger modal -->
    <span>
      <i
        class="mdi mdi-pencil-outline selectable"
        data-bs-toggle="modal"
        :data-bs-target="'#modelId' + note.id"
      ></i>
      <i class="mdi mdi-delete selectable" @click="deleteNote"></i>
    </span>
    <!-- Modal -->
  </div>
  <div>
    <p class="ps-2 text-muted">{{ note.account.name }}</p>
  </div>
  <form>
    <div
      class="modal fade"
      :id="'modelId' + note.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Note</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              class="form-control"
              type="text"
              v-model="editNoteData.body"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              class="btn btn-primary"
              @click="editNote"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>


<script>
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from "@vue/runtime-core"
export default {
  props: { note: { type: Object, required: true } },
  setup(props) {
    const editNoteData = ref({})
    watchEffect(() => {
      editNoteData.value = props.note
    });
    return {
      editNoteData,
      async editNote() {
        try {
          await notesService.editNote(editNoteData.value)
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