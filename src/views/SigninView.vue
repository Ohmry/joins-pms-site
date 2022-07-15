<template>
  <main>
    <section class="signin-box">
      <router-link class="logo" to="/">
        <font-awesome-icon icon="fa-solid fa-fan"></font-awesome-icon>
      </router-link>
      <section class="label">
        이메일 주소
      </section>
      <input type="email" v-model="user.email" />
      <section class="label">
        비밀번호
      </section>
      <input type="email" v-model="user.email" />
      <button @click="signin">로그인</button>
    </section>
    <!--
    <router-link class="logo" to="/">
      <font-awesome-icon icon="fa-solid fa-fan"></font-awesome-icon>
    </router-link>
    <section>
      <h4>이메일</h4>
      <input type="email" v-model="user.email" />
    </section>
    <section>
      <h4>비밀번호</h4>
      <input type="password" v-model="user.password" />
    </section>
    <section class="btnbox">
      <button class="signin" @click="signin">로그인</button>
    </section>
    -->
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
      this.$axios({
        method: 'post',
        url: '/api/signin',
        baseURL: this.$apiUrl,
        data: JSON.stringify(this.user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data)
      }).catch(err => {
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
  justify-content: center;
  height: 100vh;

  section.signin-box {
      width: 380px;
      height: 560px;
      border: 1px solid var(--secondary-color);
      border-radius: 10px;
      background-color: var(--secondary-color);
      align-self: center;
      text-align: center;
      padding: 30px 10px 0px 10px;

      a.logo {
        font-size: 120px;
        color: white;
        svg {
          animation: sigin-spin-logo 36s infinite;
          animation-timing-function: linear;
        }
      }
      section.label {
        font-size: 18px;
        text-align: left;
        color: white;
        font-weight: bold;
        padding: 10px 50px;
      }
      input {
        display: block;
        margin: 0px 50px;
        padding: 5px;
        outline: none;
        width: 266px;
      }
      button {
        width: 266px;
        border: 1px solid var(--secondary-color);
        border-radius: 5px;
        padding: 10px 20px;
        margin: 10px;
      }
  }
}
@keyframes sigin-spin-logo {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/*
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
*/
</style>
