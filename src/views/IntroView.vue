<template>
  <main>
    <NavigatorComponent />
    <section class="container">
      This is IntroView.
      <button @click="callAPI">Click</button>
    </section>
  </main>
</template>

<script>
import NavigatorComponent from '@/components/NavigatorComponent.vue'
export default {
  components: {
    NavigatorComponent
  },
  methods: {
    callAPI: function () {
      this.$api
        .get('/api/test')
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }
  }
}
</script>

<style lang="scss" scoped>
section.container {
  padding: 10px;
}
</style>
