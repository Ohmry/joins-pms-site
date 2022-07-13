<template>
  <main>
    <router-link class="logo" to="/">
      <font-awesome-icon icon="fa-solid fa-fan"></font-awesome-icon>
    </router-link>
    <section>
      <h4>이메일</h4>
      <input type="text" />
    </section>
    <section>
      <h4>비밀번호</h4>
      <input type="text" />
    </section>
    <section class="btnbox">
      <button class="signin">로그인</button>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  section {
    align-self: center;

    h4 {
      display: inline-block;
      width: 70px;
      margin: 5px 0;
      padding: 0 10px 0 0;
      text-align: right;
    }
    input[type=text] {
      width: 212px;
    }
  }
}
.logo {
  text-align: center;
  font-size: 50px;
  color: var(--primary-color);
}

section.btnbox {
  padding: 15px 0 0 0;
  button.signin {
    width: 300px;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 10px 0;
    color: white;
    cursor: pointer;

    &:active {
      background-color: green;
    }
  }
}
</style>
