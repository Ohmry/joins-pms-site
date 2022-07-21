<template>
  <main>
    <section class="container">
      <section class="signin-form">
        <h2>WORKUS</h2>
        <input type="email" placeholder="이메일 주소" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </section>
      <section class="helpdesk">
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-caret-right"></font-awesome-icon>
            <button>사용자 등록</button>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-caret-right"></font-awesome-icon>
            <button>비밀번호 초기화</button>
          </li>
        </ul>
      </section>
    </section>
    <!-- <h1>일정관리서비스 사용자 로그인</h1>
    <section class="container">
      <input type="email" placeholder="이메일 주소"/>
      <input type="password" placeholder="비밀번호"/>
      <button>로그인</button>
    </section> -->
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

  section.container {
    width: 600px;
    height: 350px;
    display: flex;
    flex-direction: row;
    align-self: center;
    // background-color: var(--background-secondary-color);
    box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);

    section.signin-form {
      flex: 1;
      padding: 30px;
      h2 {
        color: var(--primary-color);
        font-family: 'Yeongdo-Rg';
        font-size: 48px;
        margin: 15px 0 0 0;
        user-select: none;
      }
      input {
        display: block;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid var(--foreground-color);
        padding: 15px 10px;
        margin-top: 10px;
        width: 300px;
      }
      button {
        background-color: var(--primary-color);
        color: white;
        outline: none;
        border: 0;
        font-size: 18px;
        width: 320px;
        padding: 15px 10px;
        margin: 0;
        margin-top: 40px;
        user-select: none;
      }
    }
    section.helpdesk {
      width: 200px;
      background-color: var(--primary-color);
      padding: 20px;
      user-select: none;

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        li {
          margin-bottom: 10px;
          svg {
            margin: 0 10px 0 0;
            color: var(--background-color);
          }
          button {
            border: 0;
            color: var(--background-color);
            background-color: transparent;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  // h1 {
  //   align-self: center;
  //   color: var(--primary-color);
  //   font-size: 32px;
  // }
  // section.container {
  //   align-self: center;
  //   span[data-type=label] {
  //     display: block;
  //     font-size: 18px;
  //     color: black;
  //     margin-top: 20px;
  //   }
  //   input {
  //     display: block;
  //     background-color: transparent;
  //     border: 0;
  //     border-bottom: 1px solid var(--primary-color);
  //     padding: 15px 10px;
  //     margin-top: 10px;
  //     width: 300px;
  //   }
  //   button {
  //     background-color: var(--primary-color);
  //     color: white;
  //     outline: none;
  //     border: 0;
  //     font-size: 18px;
  //     width: 320px;
  //     padding: 15px 10px;
  //     margin: 0;
  //     margin-top: 40px;
  //   }
  // }
}
</style>
