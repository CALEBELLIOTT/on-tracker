<template>
  <vue-horizontal responsive class="container-fluid">
    <section
      class="col-12 bg-light p-4"
      v-for="item in items"
      :key="item.title"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>
  </vue-horizontal>
</template>


<script>
import VueHorizontal from "vue-horizontal";
export default {
  components: { VueHorizontal },
  setup() {
    return {
      items: [...Array(20).keys()].map((i) => {
        return { title: `Item ${i}`, content: `🚀 Content ${i}` };
      }),

    }
  }
}
</script>


<style lang="scss" scoped>
</style>