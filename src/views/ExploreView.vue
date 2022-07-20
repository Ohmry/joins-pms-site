<template>
  <main>
    <AppNavigator />
    <section class="explore-view-container">
      <section class="explore-schedule-container">
        <article>
          <span>최근 열람한 프로젝트</span>
          <button @click="open">만들기</button>
        </article>
        <ul class="explore-schedule-list">
          <li v-for="(project, index) in recentProjects" :key="index">
            <font-awesome-icon icon="fa-solid fa-caret-right"></font-awesome-icon>
            <span>{{ project.title }}</span>
          </li>
        </ul>
        <button class="btn-more">더보기</button>
        <div class="divider"></div>
        <article>
          <span>내가 속한 그룹</span>
        </article>
        <ul class="explore-group-list">
          <li v-for="(group, index) in belongGroups" :key="index">
            <font-awesome-icon icon="fa-solid fa-caret-right"></font-awesome-icon>
            <span>{{ group.name }}</span>
          </li>
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
      recentProjects: [
        { title: '메가박스 포인트 부분 사용' },
        { title: '페이즈 금액권 기능 개발' },
        { title: '삼성페이 멤버십 연동' }
      ],
      belongGroups: [
        { name: '메가박스' },
        { name: '스크린개발팀' },
        { name: '운영파트' },
        { name: '모바일오더 프로젝트 그룹' }
      ]
    }
  },
  methods: {
    open: function (e) {
      this.$contextmenu(e)
    }
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

      svg {
        margin: 0 10px 0 0;
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
        background-color: var(--primary-color);
        color: white;
        font-weight: normal;
        font-size: 14px;
        padding: 0 15px;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
        }
        &:active {
          background-color: var(--secondary-color);
        }
      }
    }

    div.divider {
      width: 250px;
      padding: 20px 0 0 0;
      margin: 0 0 20px 0;
      border-bottom: 1px solid var(--foreground-color);
    }

    button.btn-more {
      margin: 15px 0 0 0;
      border: 0;
      color: #6E6E6E;
      background-color: transparent !important;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  section.explore-activity-container {
    flex: 1;
    background-color: var(--background-secondary-color);
    padding: 10px;
  }
}
</style>
