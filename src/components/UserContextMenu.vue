<template>
  <main v-if="isVisible">
    <article>
      <span data-type="name">이병훈</span>
      <span data-type="email">o.ohmry@gmail.com</span>
    </article>
    <div class="divider"></div>
    <button>내 정보</button>
    <button>내가 속한 그룹</button>
    <button>내가 속한 프로젝트</button>
    <div class="divider"></div>
    <button @click="signout">로그아웃</button>
  </main>
</template>

<script>
export default {
  props: ['visible'],
  computed: {
    isVisible: function () {
      return this.visible
    }
  },
  methods: {
    signout: function (e) {
      this.$emit('close')
      this.$confirm({
        title: '로그아웃',
        contents: '로그아웃 하시겠습니까?',
        callback: (result) => {
          if (result) {
            this.user = {}
            sessionStorage.removeItem('user')
            this.$router.replace('/')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  position: absolute;
  top: 55px;
  right: 5px;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  padding: 5px 0;
  width: 180px;

  article {
    padding: 15px;
    span {
      display: block;
    }
    span[data-type='name'] {
      font-size: 16px;
    }
    span[data-type='email'] {
      color: #6e6e6e;
      font-size: 12px;
      padding: 5px 0 0 0;
    }
  }

  div.divider {
    height: 1px;
    width: 90%;
    background-color: #bdbdbd;
    align-self: center;
    margin: 5px 0;
  }

  button {
    border: 0;
    background-color: transparent;
    padding: 10px 15px;
    text-align: left;
    &:hover {
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
    }
  }
}
</style>
