<template>
  <main>
    <NavigatorComponent />
    <section class="container">
      This is IntroView.
    </section>
  </main>
</template>

<script>
import NavigatorComponent from '@/components/NavigatorComponent.vue'
export default {
  components: {
    NavigatorComponent
  }
}
</script>

<style lang="scss" scoped>
section.container {
  padding: 10px;
}
</style>
