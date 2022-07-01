<template>
  <div class="col-md-12 bg-grey text-dark">
    <div>
      <b>{{ note.body }}</b>
    </div>
  </div>
</template>


<script>
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
export default {
  props: { note: { type: Object, required: true } },
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
</style>