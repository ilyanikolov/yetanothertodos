<template>
  <div class="auth-view">

    <div v-if="login" class="auth sign-in">
      <div class="auth-heading">
        <div class="auth-heading__name"><h2>Sign in</h2></div>
      </div>
      <div class="auth-contents">

        <div class="field">
          <div class="field-icon">
            <i class="material-icons">email</i>
          </div>
          <input type="text" class="field-input" v-model="signin.email" placeholder="Email">
        </div>

        <div class="field">
          <div class="field-icon">
            <i class="material-icons">lock</i>
          </div>
          <input type="password" class="field-input" v-model="signin.password" placeholder="Password">
        </div>

      </div>
      <div class="auth-actions">
        <button class="button">Sign in</button>

        <div class="additional">
          No account? <span @click="login = !login" class="additional-action">Sign up</span>
        </div>
      </div>
    </div>

    <div v-else class="auth sign-up">

      <div class="auth-heading">
        <div class="auth-heading__name"><h2>Sign up</h2></div>
      </div>
      <div class="auth-contents">

        <div class="field">
          <div class="field-icon">
            <i class="material-icons">person</i>
          </div>
          <input type="text" class="field-input" v-model="signup.fullname" placeholder="Full name">
        </div>

        <div class="field">
          <div class="field-icon">
            <i class="material-icons">email</i>
          </div>
          <input type="text" class="field-input" v-model="signup.email" placeholder="Email">
        </div>

        <div class="field">
          <div class="field-icon">
            <i class="material-icons">lock</i>
          </div>
          <input type="password" class="field-input" v-model="signup.password" placeholder="Password">
        </div>

      </div>
      <div class="auth-actions">
        <button class="button">Sign up</button>

        <div class="additional">
          Has account? <span @click="login = !login" class="additional-action">Sign in</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: true,
      signin: {
        email: '',
        password: '',
      },
      signup: {
        fullname: '',
        email: '',
        password: '',
      },
    };
  },
}
</script>

<style lang="scss">
.auth-view {
  height: 100%;
  background-color: #f8f8fa;

  display: flex;
  justify-content: center;
  align-items: center;
}
.auth {
  width: 100%;
  max-width: 400px;
  padding: 20px 30px;

  &-heading {
    position: relative;
    // padding-bottom: 20px;
    margin-bottom: 40px;

    &:before {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%,0);

      content: "";
      display: block;
      width: 40px;
      height: 20px;
      border: 1px solid #f1f2f6;
      background-color: #f8f8fa;

    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #f1f2f6;
    }

    &__name {
      text-align: center;
      margin-bottom: 30px;
    }
  }

  .field {
    position: relative;
    width: 100%;
    min-height: 50px;

    padding-bottom: 20px;
    margin-bottom: 20px;

    cursor: pointer;

    &:not(:last-child) {
    }

    &-icon {
      position: absolute;
      height: 50px;
      width: 50px;

      right: 0;
      opacity: .5;

      // color: #cfcfcf;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-input {
      display: block;
      text-transform: uppercase;
      // background-color: transparent;
      border: none;
      height: 50px;
      width: 100%;

      background-color: #f1f2f6;

      font: inherit;
      color: inherit;

      padding: 0 50px 0 15px;

      transition: all .1s ease-in-out;

      &:focus {
        outline: 1px solid #3c6dec;
        // background-color: #fff;
        // box-shadow: 0 5px 5px -3px rgba(#000, .15);
      }
    }
  }

  .additional {
    margin-top: 30px;
    text-align: center;

    &-action {
      font-weight: 500;
      color: #3c6dec;
      cursor: pointer;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 15px;
    border: none;
    cursor: pointer;

    height: 50px;
    width: 100%;

    font: inherit;

    text-transform: uppercase;

    color: #fff;
    // background-color: #00de85;
    background-color: #3c6dec;
  }
}
</style>
