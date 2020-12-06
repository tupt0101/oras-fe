<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          {{ $t('resetPw.title') }}
        </h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          :placeholder="$t('resetPw.username')"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleResetPassword">
        {{ $t('resetPw.resetBtn') }}
      </el-button>

      <div style="text-align: right; margin-bottom: 20px">
        <router-link to="/login?redirect=%2Fdashboard">
          <p style="font-style: italic; color: rgb(91 104 111)">
            {{ $t('resetPw.login') }}
          </p>
        </router-link>
      </div>

      <div style="text-align: right">
        <router-link to="/signup">
          <p style="font-style: italic; color: rgb(91 104 111)">
            {{ $t('resetPw.signup') }}
          </p>
        </router-link>
      </div>
    </el-form>

    <el-dialog :visible.sync="showDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="hasError ? 'failed' : 'success'" /> {{ dialogTitle }}</span>
      <p class="message" v-html="message" />
    </el-dialog>
  </div>
</template>

<script>
import { validEmail } from '@/utils/validate'
import { resetPassword } from '@/api/user'

export default {
  name: 'ResetPassword',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }]
      },
      loading: false,
      redirect: undefined,
      otherQuery: {},
      dialogTitle: '',
      message: '',
      showDialog: false,
      hasError: false
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    // if (this.loginForm.username === '') {
    //   this.$refs.username.focus()
    // } else if (this.loginForm.password === '') {
    //   this.$refs.password.focus()
    // }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    handleResetPassword() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          resetPassword(this.loginForm.username)
            .then(response => {
              this.dialogTitle = 'Reset Password Successfully!'
              this.message = 'We have sent you a new password at <i>' + this.loginForm.username + '</i>.<br>Please use that password to log in.'
              this.showDialog = true
              this.loading = false
            })
            .catch(err => {
              this.dialogTitle = 'Something went wrong!'
              this.hasError = true
              if (err.response.data.status === 400) {
                this.message = 'The email you entered is not registered in our system.<br>Please try again!'
              }
              this.showDialog = true
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$dark_gray:#889aa4;
$cursor: #fff;
$black: #000000;

@supports (-webkit-mask: none) and (not (cater-color: $black)) {
  .login-container .el-input input {
    color: black;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      color: $black !important;
      height: 47px;
      // caret-color: $cursor;
      caret-color: $black;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: black !important;
      }
    }
  }

  .el-form-item {
    // border: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid $dark_gray;
    // background: rgba(0, 0, 0, 0.1);
    background: #ffffff;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$black: #000000;

.login-container {
  min-height: 100%;
  width: 100%;
  height: 100%;
  // background-color: $bg;
  background-image: url('../../assets/custom-theme/image/login-bg.jpeg');
  overflow: hidden;
  display:flex;
	flex-direction:column;

  .login-form {
    position: relative;
    width: 596px;
    max-width: 100%;
    padding: 160px 68px;
    margin: 0 auto;
    overflow: hidden;
    height: 100%;
    background-color: white;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      // color: $light_gray;
      color: $black;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .set-language {
    color: #000;
    position: absolute;
    top: 3px;
    font-size: 24px;
    right: 0px;
    cursor: pointer;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}

.message {
  margin-left: 10px;
  font-size: 1.15em;
}
</style>
