<template>
  <div class="board-view-container">
    <aside>
      <h4 class="title">내가 참여한 프로젝트</h4>
    </aside>
    <span class="horizontal-line" />
    <main>
      This is BoardView
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.board-view-container {
  display: flex;
  flex-direction: row;
}
.board-view-container > aside {
  width: 249px;
  height: calc(100vh - 70px);
  border-right: 1px solid $theme-primary-color;
  padding: 10px;
}
.board-view-container > aside > h4.title {
  margin: 0;
  padding: 0px 10px;
}
.board-view-container > main {
  flex: 1;
}
</style>
