<template>
  <main>
    <h1>일정관리서비스 사용자 등록</h1>
    <section class="signup-box">
      <section class="label">
        이메일 주소
      </section>
      <input type="email" v-model="user.email" />
      <section class="label">
        비밀번호
      </section>
      <input type="password" v-model="user.password" />
      <section class="label">
        이름
      </section>
      <input type="text" v-model="user.name" maxlength="20" />
      <button class="signup-button" @click="signup">등록하기</button>
    </section>
    <section class="signin-box">
      <a href="/signin">이미 계정을 갖고 계신가요?</a>
    </section>
  </main>
</template>

<script>
export default {
  data: () => {
    return {
      user: {
        email: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    signup: function () {
      console.log(JSON.stringify(this.user))
      this.$axios({
        method: 'post',
        url: '/api/signup',
        baseURL: this.$apiUrl,
        data: JSON.stringify(this.user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.$alert({
          title: '사용자 등록 완료',
          contents: '사용자 등록이 완료되었습니다. 로그인 화면으로 이동합니다.'
        })
        this.$router.replace('/signin')
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;

  h1 {
    color: var(--primary-color);
    padding: 30px 0 20px 0;
  }
  section.signup-logo {
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

  section.signup-box {
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
      button.signup-button {
        display: block;
        width: 320px;
        font-size: 18px;
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
  section.signin-box {
    padding: 10px;
    a {
      font-size: 14px;
      padding: 5px;
    }
  }
}
</style>
