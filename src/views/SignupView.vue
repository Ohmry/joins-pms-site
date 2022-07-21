<template>
  <main>
    <section class="container">
      <h2>WORKUS</h2>
      <article>
          <input ref="inputEmail" type="email" placeholder="이메일 주소" v-model="user.email" />
      </article>
      <article>
          <input ref="inputPassword" type="password" placeholder="비밀번호" v-model="user.password" />
      </article>
      <article>
        <input ref="inputPasswordConfirm" type="password" placeholder="비밀번호 확인" v-model="user.passwordConfirm" @keyup.prevent="checkPasswordConfirm"/>
        <span data-type="caption" v-if="!form.equalsPassword">비밀번호가 올바르지 않습니다.</span>
      </article>
      <article>
          <input ref="inputName" type="text" placeholder="사용자 이름" v-model="user.name" />
      </article>
      <button @click="signup">등록</button>
      <a data-type="link" href="/">이미 계정을 갖고 계신가요?</a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'SigninView',
  data: () => {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirm: '',
        name: ''
      },
      form: {
        equalsPassword: true
      }
    }
  },
  methods: {
    validate: function () {
      const view = this

      if (this.user.email.length < 1) {
        this.$alert({
          contents: '이메일 주소를 입력해주세요',
          callback: () => { view.$refs.inputEmail.focus() }
        })
        return false
      }
      if (this.user.password.length < 1) {
        this.$alert({
          contents: '비밀번호를 입력해주세요.',
          callback: () => { view.$refs.inputPassword.focus() }
        })
        return false
      }
      if (this.user.passwordConfirm.length < 1) {
        this.$alert({
          contents: '비밀번호 확인란을 입력해주세요.',
          callback: () => { view.$refs.inputPasswordConfirm.focus() }
        })
        return false
      }
      if (!this.form.equalsPassword) {
        this.$alert({
          contents: '비밀번호와 비밀번호 확인의 값이 동일하지 않습니다.',
          callback: () => { view.$refs.inputPasswordConfirm.focus() }
        })
        return false
      }
      if (this.user.name.length < 1) {
        this.$alert({
          contents: '사용자 이름을 입력해주세요.',
          callback: () => { view.$refs.inputName.focus() }
        })
        return false
      }
      return true
    },
    signup: function () {
      if (this.validate() === false) return
      this.$api.post('/api/signup', JSON.stringify(this.user))
        .then(response => {
          this.$alert({
            title: '사용자 등록 완료',
            contents:
              '사용자 등록이 완료되었습니다. 로그인 화면으로 이동합니다.',
            callback: () => this.$router.replace('/')
          })
        })
        .catch(err => {
          this.$alert({
            title: '사용자 등록 오류 (' + err.code + ')',
            contents: err.message
          })
        })
    },
    checkPasswordConfirm: function () {
      if (this.user.passwordConfirm === '') {
        this.form.equalsPassword = true
        return
      }
      const view = this
      const equals = this.user.password === this.user.passwordConfirm
      setTimeout(() => { view.form.equalsPassword = equals }, 500)
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

  section.container {
    width: 450px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid #e9e9e9;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);

    h2 {
      background-color: var(--primary-color);
      color: var(--foreground-secondary-color);
      font-family: 'Yeongdo-Rg';
      font-size: 48px;
      margin: 0 0 20px 0;
      user-select: none;
      padding: 30px 20px 0 20px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    article {
      display: flex;
      flex-direction: column;
      height: 80px;

      input {
        margin: 20px 30px 10px 30px;
        height: 20px;
        line-height: 20px;
        padding: 10px 5px;
        border: 0;
        background-color: transparent;
        border-bottom: 1px solid var(--foreground-color);
        outline: 0;
      }

      span[data-type='caption'] {
        margin: 0 30px;
        font-size: 14px;
        color: var(--secondary-color);
      }
    }

    button {
      border: 0;
      margin: 50px 30px 10px 30px;
      background-color: var(--primary-color);
      color: var(--foreground-secondary-color);
      height: 50px;
      font-size: 18px;
      outline: none;

      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: var(--secondary-color);
      }
    }

    a[data-type='link'] {
      margin: 10px 30px;
    }
  }

  // h1 {
  //   color: var(--primary-color);
  //   padding: 30px 0 20px 0;
  // }
  // section.signup-logo {
  //   width: 380px;
  //   align-self: center;
  //   padding: 30px 0 20px 0;

  //   a.logo {
  //     font-size: 80px;
  //     text-align: center;
  //     color: var(--primary-color);
  //     &:active {
  //       color: var(--secondary-color);
  //     }
  //   }
  // }

  // section.signup-box {
  //     width: 380px;
  //     border: 1px solid var(--foreground-color);
  //     border-radius: 10px;
  //     background-color: white;
  //     align-self: center;
  //     text-align: center;
  //     padding: 40px 10px 20px 10px;
  //     user-select: none;

  //     section.label {
  //       font-size: 16px;
  //       text-align: left;
  //       padding: 10px 30px;
  //     }
  //     input {
  //       display: block;
  //       margin: 0px 30px;
  //       height: 25px;
  //       padding: 10px;
  //       outline: none;
  //       width: 298px;
  //       border: 1px solid var(--foreground-color);
  //       border-radius: 5px;
  //     }
  //     button.signup-button {
  //       display: block;
  //       width: 320px;
  //       font-size: 18px;
  //       border: 0;
  //       border-radius: 5px;
  //       margin: 20px 30px;
  //       padding: 15px 10px;
  //       background-color: var(--primary-color);
  //       color: white;
  //       &:hover {
  //         cursor: pointer;
  //       }
  //       &:active {
  //         background-color: var(--secondary-color);
  //       }
  //     }
  //     a {
  //       text-decoration: none;
  //       font-size: 14px;
  //       color: var(--font-link-color);
  //       &:hover {
  //         text-decoration: underline;
  //       }
  //     }
  // }
  // section.signin-box {
  //   padding: 10px;
  //   a {
  //     font-size: 14px;
  //     padding: 5px;
  //   }
  // }
}
</style>
