<template>
  <main>
    <AppNavigator />
    This is ExploreView.
    <button @click="getUserInfo">Click</button>
  </main>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  components: {
    AppNavigator
  },
  methods: {
    getUserInfo: function () {
      const userId = localStorage.getItem('userId')
      this.$api
        .get('/api/user/' + userId)
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }
  }
}
</script>
