<template>
  <div class="board-view-container">
    <aside>
      <section class="board-view-aside-title">
        <h4 class="title">내가 참여한 프로젝트</h4>
        <button>추가</button>
      </section>
      <section class="board-view-aside-list">
        <ul>
          <li>새로운 프로젝트</li>
          <li>또 다른 프로젝트</li>
          <li>새롭게 시작한 프로젝트</li>
        </ul>
      </section>
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
  width: 269px;
  height: calc(100vh - 90px);
  border-right: 1px solid $theme-primary-color;
  padding: 20px 15px;
  background-color: white;
}
.board-view-container > aside > h4.title {
  margin: 0;
  padding: 0;
}
.board-view-container > aside > input.list-search-bar {
  width: 240px;
}
.board-view-container > aside > section.board-view-aside-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.board-view-container > aside > section.board-view-aside-title > h4 {
  margin: 0;
}
.board-view-container > aside > section.board-view-aside-title > h4,
.board-view-container > aside > section.board-view-aside-title > button {
  display: inline-block;
}
.board-view-container > main {
  flex: 1;
  padding: 10px;
  background-color: #EFEFEF;
}
</style>
