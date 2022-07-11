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
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
main > section {
  align-self: center;
}
main > section > h4 {
  display: inline-block;
  width: 80px;
  margin: 5px;
  padding: 0 10px 0 0;
  text-align: right;
}
.logo {
  text-align: center;
  font-size: 50px;
  color: white;
}
</style>
