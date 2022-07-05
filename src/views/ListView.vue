<template>
  <v-container fluid>
    <ViewTitle
        title="목록보기"
        description="등록된 업무를 목록형태로 조회합니다."
      />
    <v-toolbar flat class="listview-button-container mt-3" height="32">
      <v-toolbar-items>
        <v-btn depressed>추가</v-btn>
        <v-btn depressed>수정</v-btn>
        <v-btn depressed>삭제</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.listview-button-container > .v-toolbar__content > .v-toolbar__items > button {
  margin-right: 10px;
  background-color: $theme-primary-color;
  color: white;
}
</style>
