<template>
  <div class="col-md-12 text-dark d-flex justify-content-between ps-2 pe-2">
    <span>
      <b>{{ note.body }}</b>
    </span>
    <span>
      <i
        class="p-1 mdi mdi-pencil-outline selectable"
        data-bs-toggle="modal"
        data-bs-target="#modelId"
      ></i>
      <i class="p-1 mdi mdi-delete selectable" @click="deleteNote"></i>
    </span>
  </div>
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="modelId"
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
          <input class="form-control" type="text" v-model="editNoteData.body" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
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