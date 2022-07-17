<template>
  <main>
    <AppNavigator />
    <section class="container">
      This is IntroView.
      <button @click="open">Click</button>
    </section>
  </main>
</template>

<script>
import { AppNavigator } from '@/components'
export default {
  components: {
    AppNavigator
  },
  methods: {
    open: function () {
      this.$alert({
        title: 'TEST',
        contents: 'TEST'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section.container {
  padding: 10px;
}
</style>
