<template>
  <main>
    <h1>일정관리서비스 사용자 로그인</h1>
    <section class="container">
      <span data-type="label">이메일주소</span>
      <input type="email" />
      <span data-type="label">비밀번호</span>
      <input type="password" />
      <butto>로그인</butto>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    open: function () {
      this.$alert({
        title: 'TEST',
        contents: 'TEST'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    align-self: center;
    color: var(--primary-color);
    font-size: 32px;
    padding: 0 0 30px 0;
  }
  section.container {
    align-self: center;
    span[data-type=label] {
      display: block;
    }
  }
}
</style>
