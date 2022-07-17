<template>
  <main>
    <AppNavigator />
    <section class="container">
      This is IntroView.
      <button @click="callAPI">Click</button>
    </section>
  </main>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  components: {
    AppNavigator
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
