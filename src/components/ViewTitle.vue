<template>
  <v-card flat>
    <v-card-text class="view-title-container py-1">
      <span class="text-h6 title">{{ title }}</span>
      <span v-if="description" class="ml-3">{{ description }}</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>

<style lang="scss" scoped>
.view-title-container {
  align-items: baseline;
}
.title {
  color: $theme-primary-color;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
