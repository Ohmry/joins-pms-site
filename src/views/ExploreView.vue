<template>
  <main>
    <AppNavigator />
    <section class="explore-view-container">
      <section class="explore-schedule-container">
        <article>
          <span>최근 방문한 일정</span>
          <button>새 일정</button>
        </article>
        <ul class="explore-schedule-list">
          <li>일정 1</li>
          <li>일정 2</li>
          <li>일정 3</li>
          <li>일정 4</li>
        </ul>
        <div class="divider"></div>
        <article>
          <span>내가 속한 그룹</span>
        </article>
        <ul class="explore-group-list">
          <li>그룹 1</li>
          <li>그룹 2</li>
          <li>그룹 3</li>
          <li>그룹 4</li>
        </ul>
      </section>
      <section class="explore-activity-container">
        Activity
      </section>
    </section>
  </main>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'

export default {
  components: {
    AppNavigator
  },
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
section.explore-view-container {
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 50px);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0 0 10px;
    li {
      margin: 10px 0 0 0;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  section.explore-schedule-container {
    width: 250px;
    padding: 20px 20px 0 20px;
    border-right: 1px solid var(--secondary-color);

    article {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 35px;
      line-height: 35px;

      span {
        font-weight: bold;
        color: var(--secondary-color);
      }

      button {
        border: 0;
        background-color: var(--secondary-color);
        color: white;
        font-weight: normal;
        font-size: 14px;
        padding: 0 15px;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
        }
        &:active {
          background-color: var(--primary-color);
        }
      }
    }

    div.divider {
      width: 250px;
      padding: 20px 0 0 0;
      margin: 0 0 20px 0;
      border-bottom: 1px solid var(--foreground-color);
    }
  }
  section.explore-activity-container {
    flex: 1;
    background-color: var(--background-secondary-color);
    padding: 10px;
  }
}
</style>
