<template>
  <main v-if="visible">
    <section class="app-confirm-container">
      <h3>{{ title }}</h3>
      <article>
        {{ contents }}
      </article>
      <section class="btnbox">
        <button @click="onYes">{{ label.yes }}</button>
        <button @click="onNo">{{ label.no }}</button>
      </section>
    </section>
  </main>
</template>

<script>
import { AppConfirmEvents } from '../events'

export default {
  data: () => {
    return {
      title: '확인',
      contents: '이곳에 알림 메세지를 입력하세요.',
      label: {
        yes: '확인',
        no: '닫기'
      },
      visible: false,
      callback: undefined
    }
  },
  methods: {
    onOpen: function (params) {
      this.visible = true
      this.title = params.title
      this.contents = params.contents
      this.callback = params.callback
    },
    onYes: function () {
      this.visible = false
      this.callback(true)
    },
    onNo: function () {
      this.visible = false
      this.callback(false)
    }
  },
  mounted: function () {
    AppConfirmEvents.$on('open', this.onOpen)
    AppConfirmEvents.$on('close', () => this.onNo())
  }
}
</script>

<style lang="scss" scoped>
main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;

  section {
    height: fit-content;
    background-color: var(--background-color);
    align-self: center;
    padding: 20px 25px;

    &.app-confirm-container {
      min-width: 300px;
      border: 1px solid #6E6E6E;
      border-radius: 5px;
    }

    h3 {
      font-weight: normal;
      margin: 10px 0 0 0;
    }
    article {
      padding: 25px 0;
    }
    section.btnbox {
      width: fit-content;
      margin: 0 auto;
      padding: 0 20px;
      button {
        width: 100px;
        height: 40px;
        border: 0;
        background-color: var(--primary-color);
        color: white;
        cursor: pointer;
        &:active {
          background-color: var(--secondary-color);
        }
        &:first-child {
          margin: 0 10px 0 0;
        }
      }
    }
  }
}
</style>
