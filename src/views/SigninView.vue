<template>
  <main>
    <section class="signin-logo">
      <router-link class="logo" to="/">
        <font-awesome-icon icon="fa-solid fa-fan"></font-awesome-icon>
      </router-link>
    </section>
    <section class="signin-box">
      <section class="label">이메일 주소</section>
      <input type="email" v-model="user.email" />
      <section class="label">비밀번호</section>
      <input type="password" v-model="user.password" @keypress.enter="signin" />
      <button class="signin-button" @click="signin">로그인</button>
      <a href="/user/reset">비밀번호를 잊어버리셨나요?</a>
    </section>
    <section class="signup-box">
      <a href="/signup">새로운 계정</a><span>을 만들고 싶으신가요?</span>
    </section>
  </main>
</template>

<script>
export default {
  data: () => {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin: function () {
      this.$api
        .post('api/signin', JSON.stringify(this.user))
        .then((response) => {
          sessionStorage.setItem('user', JSON.stringify({
            id: response.data.id,
            email: response.data.email,
            name: response.data.name,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken
          }))
          this.$router.replace('/explore')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  text-align: center;
  // justify-content: center;
  height: 100vh;

  section.signin-logo {
    width: 380px;
    align-self: center;
    padding: 30px 0 20px 0;

    a.logo {
      font-size: 80px;
      text-align: center;
      color: var(--primary-color);
      &:active {
        color: var(--secondary-color);
      }
    }
  }
  section.signin-box {
    width: 380px;
    border: 1px solid var(--foreground-color);
    border-radius: 10px;
    background-color: white;
    align-self: center;
    text-align: center;
    padding: 40px 10px 20px 10px;
    user-select: none;

    section.label {
      font-size: 16px;
      text-align: left;
      padding: 10px 30px;
    }
    input {
      display: block;
      margin: 0px 30px;
      height: 25px;
      padding: 10px;
      outline: none;
      width: 298px;
      border: 1px solid var(--foreground-color);
      border-radius: 5px;
    }
    button.signin-button {
      display: block;
      width: 320px;
      border: 0;
      border-radius: 5px;
      margin: 20px 30px;
      padding: 15px 10px;
      background-color: var(--primary-color);
      color: white;
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: var(--secondary-color);
      }
    }
    a {
      text-decoration: none;
      font-size: 14px;
      color: var(--font-link-color);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  section.signup-box {
    padding: 10px;
    font-size: 14px;
    a {
      padding: 5px 0px;
    }
  }
}
</style>
