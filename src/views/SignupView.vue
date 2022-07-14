<template>
  <main>
    <router-link to="/">
      <font-awesome-icon icon="fa-solid fa-fan"></font-awesome-icon>
    </router-link>
    <section>
      <h3>사용자 등록</h3>
    </section>
    <section>
      <span>이메일</span>
      <input type="email" v-model="user.email" />
    </section>
    <section>
      <span>비밀번호</span>
      <input type="password" v-model="user.password" />
    </section>
    <section>
      <span>이름</span>
      <input type="name" v-model="user.name" />
    </section>
    <section class="btnbox">
      <button @click="test">등록</button>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
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
    test: function () {
      axios({
        method: 'post',
        url: '/api/test',
        baseURL: 'http://localhost:9091',
        data: JSON.stringify({ message: 'Hello World' }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => console.log(response)).catch(err => console.error(err))
    },
    signup: function () {
      axios({
        method: 'post',
        url: '/api/signup',
        baseURL: 'http://localhost:9091/',
        data: JSON.stringify(this.user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => console.log(response)).catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
