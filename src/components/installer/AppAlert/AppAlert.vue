<template>
  <main v-if="visible">
    <section>
      <h3>{{ title }}</h3>
      <article>
        {{ contents }}
      </article>
      <button @click="onClose">닫기</button>
    </section>
  </main>
</template>

<script>
import { AppAlertEvents } from '../events'

export default {
  data: () => {
    return {
      title: '확인',
      contents: '이곳에 알림 메세지를 입력하세요.',
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
    onClose: function () {
      this.visible = false
      if (this.callback) {
        this.callback()
      }
    }
  },
  mounted: function () {
    AppAlertEvents.$on('open', this.onOpen)
    AppAlertEvents.$on('close', () => this.onClose())
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
    width: 300px;
    height: fit-content;
    background-color: var(--background-color);
    align-self: center;
    padding: 20px 25px;
    h3 {
      font-weight: normal;
      margin: 10px 0 0 0;
    }
    article {
      padding: 25px 0;
    }
    button {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 40px;
      border: 0;
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
      &:active {
        background-color: var(--secondary-color);
      }
    }
  }
}
</style>
