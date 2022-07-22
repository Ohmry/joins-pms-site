<template>
  <section class="container">
    <header>
      <h1>WORKUS</h1>
    </header>
    <main>
      <section class="signin-form">
        <div class="slide-wrap">
          <ul>
            <li :class="{ 'activate-form': isStandard }">
              <button @click="changeToStandard">일반 사용자</button>
            </li>
            <li :class="{ 'activate-form': isLdap }">
              <button @click="changeToLdap">그룹웨어 사용자</button>
            </li>
          </ul>
          <div :style="form.selector.style"></div>
        </div>
        <transition name="slide-fade">
          <article v-if="isStandard" class="standard-signin">
            <input type="email" placeholder="이메일 주소" />
            <input type="password" placeholder="비밀번호" />
          </article>
        </transition>
        <transition name="slide-fade">
          <article v-if="isLdap" class="ldap-signin">
            <input type="email" placeholder="그룹웨어 계정" />
            <input type="password" placeholder="비밀번호" />
          </article>
        </transition>
        <button class="btn-signin">로그인</button>
        <a class="link-signup" href="/signup">계정이 없으신가요?</a>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: 'SigninView',
  data: () => {
    return {
      signin: {
        type: 'standard'
      },
      form: {
        selector: {
          style: {
            width: '200px',
            height: '50px',
            // 'background-color': 'var(--primary-color)',
            'background-color': 'var(--background-color)',
            transition: '0.5s',
            'margin-left': '0px',
            position: 'absolute',
            'z-index': 0
          }
        }
      }
    }
  },
  computed: {
    isStandard: function () {
      return this.signin.type === 'standard'
    },
    isLdap: function () {
      return this.signin.type === 'ldap'
    }
  },
  methods: {
    changeToStandard: function (e) {
      this.form.selector.style['margin-left'] = '0px'
      this.signin.type = 'standard'
    },
    changeToLdap: function (e) {
      this.form.selector.style['margin-left'] = '200px'
      this.signin.type = 'ldap'
    }
  }
}
</script>

<style lang="scss" scoped>
section.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;

  header {
    text-align: center;
    user-select: none;
    h1 {
      color: var(--primary-color);
      font-family: 'Yeongdo-Rg';
      font-size: 52px;
      margin: 0;
    }
  }

  main {
    height: 330px;
    align-self: center;
    border: 1px solid #CDCDCD;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);

    section.signin-form {
      width: 400px;
      div.slide-wrap {
        width: 400px;
        height: 50px;
        background-color: var(--primary-color);
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          position: absolute;
          z-index: 1;
          user-select: none;
          background-color: transparent;
          li {
            width: 200px;
            height: 50px;
            text-align: center;
            background-color: transparent;
            &.activate-form {
              button {
                color: var(--primary-color);
              }
            }
            button {
              border: 0;
              width: 200px;
              height: 50px;
              background-color: transparent;
              color: white;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
      button.btn-signin {
        position: absolute;
        margin: 170px 30px 0 30px;
        height: 50px;
        width: 340px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        background-color: var(--primary-color);
        color: white;
        user-select: none;

        &:hover {
          cursor: pointer;
        }
        &:active {
          background-color: var(--secondary-color);
        }
      }
      a.link-signup {
        position: absolute;
        margin: 230px 0 0 35px;
        font-size: 16px;
      }
    }

    article.standard-signin,
    article.ldap-signin {
      position: absolute;
      width: 340px;
      padding: 20px 30px 10px 30px;

      input {
        border: 0;
        width: 320px;
        background-color: transparent;
        display: block;
        font-size: 16px;
        border-bottom: 1px solid #6B6B6B;
        padding: 10px;
        margin-top: 20px;
        outline: 0;
        user-select: none;
      }
    }
  }

  .slide-fade-enter,
  .slide-fade-leave {
    transition: all .1s ease;
  }
  .slide-fade-leave-active,
  .slide-fade-enter-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
  .slide-fade-leave,
  .slide-fade-enter-to {
    opacity: 1;
  }
}
</style>
