<template>
  <v-container fluid>
    <section class="app-listview-title-container mx-3">
      <v-select :items="project.list" label="프로젝트를 선택해주세요." class="d-inline-block" outline style="width: 400px"></v-select>
      <v-btn icon>
        <font-awesome-icon icon="fa-solid fa-circle-plus" />
      </v-btn>
    </section>
    <v-data-table
      :headers="table.headers"
      :items="table.projects"
      :items-per-page="10">
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      project: {
        list: []
      },
      table: {
        headers: [
          { text: '업무', width: 300, align: 'start', sortable: false, value: 'title' },
          { text: '진행상태', width: 80, align: 'end', sortable: true, value: 'progress' },
          { text: '요청부서', width: 80, align: 'start', sortable: true, value: 'requestDept' },
          { text: '요청자', width: 80, align: 'center', sortable: false, value: 'requester' },
          { text: '담당자', width: 80, align: 'center', sortable: false, value: 'manager' },
          { text: '시작일자', width: 100, align: 'center', sortable: true, value: 'startDe' },
          { text: '종료일자', width: 100, align: 'center', sortable: true, value: 'endDe' }
        ],
        projects: [
          {
            title: '테스트',
            progress: '진행중',
            requestDept: 'IT솔루션팀',
            requester: '김다영D',
            manager: '김진우K',
            startDe: '20220622',
            endDe: '20220705'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.app-listview-title-container {
  color: $theme-primary-color;
}
.listview-button-container > .v-toolbar__content > .v-toolbar__items > button {
  margin-right: 10px;
  background-color: $theme-primary-color;
  color: white;
}
</style>
