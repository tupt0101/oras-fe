<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <!-- <h1 class="title">ORAS</h1> -->
        <h3 class="title">
          {{ $t('register.title') }}
        </h3>
        <!-- <lang-select class="set-language" /> -->
      </div>

      <el-form-item prop="fullname">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="fullname"
          v-model="registerForm.fullname"
          :placeholder="$t('register.fullname')"
          name="fulname"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input
          ref="email"
          v-model="registerForm.email"
          :placeholder="$t('register.email')"
          name="email"
          type="text"
          tabindex="2"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="registerForm.password"
            :type="passwordType"
            :placeholder="$t('register.password')"
            name="password"
            tabindex="3"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="confirmPwd">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="confirmPwdType"
            ref="confirmPwd"
            v-model="registerForm.confirmPwd"
            type="password"
            :placeholder="$t('register.confirmPwd')"
            name="confirmPwd"
            tabindex="4"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
          />
        </el-form-item>
      </el-tooltip>

      <el-form-item prop="phoneNo">
        <span class="svg-container">
          <svg-icon icon-class="phone" />
        </span>
        <el-input
          ref="phoneNo"
          v-model="registerForm.phoneNo"
          :placeholder="$t('register.phoneNo')"
          name="phoneNo"
          type="text"
          tabindex="5"
          autocomplete="on"
        />
      </el-form-item>
      <br>
      <div style="margin-bottom: 10px">
        <span style="color: #aaa; font-size: 14px; margin-left: 15px">
          {{ $t('register.info') }}
        </span>
      </div>

      <el-form-item prop="compName">
        <span class="svg-container">
          <svg-icon icon-class="building" />
        </span>
        <el-input
          ref="compName"
          v-model="registerForm.compName"
          :placeholder="$t('register.compName')"
          name="compName"
          type="text"
          tabindex="6"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="location">
        <span class="svg-container">
          <svg-icon icon-class="pin" />
        </span>
        <el-input
          ref="location"
          v-model="registerForm.location"
          :placeholder="$t('register.location')"
          name="location"
          type="text"
          tabindex="7"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="compMail">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input
          ref="compMail"
          v-model="registerForm.compMail"
          :placeholder="$t('register.compMail')"
          name="compMail"
          type="text"
          tabindex="8"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="compPhone">
        <span class="svg-container">
          <svg-icon icon-class="old-typical-phone" />
        </span>
        <el-input
          ref="compPhone"
          v-model="registerForm.compPhone"
          :placeholder="$t('register.compPhone')"
          name="compPhone"
          type="text"
          tabindex="9"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="taxCode">
        <span class="svg-container">
          <svg-icon icon-class="taxes" />
        </span>
        <el-input
          ref="taxCode"
          v-model="registerForm.taxCode"
          :placeholder="$t('register.taxCode')"
          name="taxCode"
          type="text"
          tabindex="10"
          autocomplete="on"
          @keyup.enter.native="handleSignup"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleSignup">
        {{ $t('register.regIn') }}
      </el-button>

      <div style="text-align: right">
        <router-link to="/login?redirect=%2Fdashboard">
          <p style="font-style: italic; color: rgb(91 104 111)">
            {{ $t('register.login') }}
          </p>
        </router-link>
      </div>
    </el-form>

  </div>
</template>

<script>
import { validDigits, validEmail } from '@/utils/validate'
// import LangSelect from '@/components/LangSelect'

export default {
  name: 'Register',
  // components: { LangSelect },
  data() {
    const validateFullName = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('The name can not be empty'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter a valid email'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    const validateConfirmPwd = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error('The confirmation password is invalid'))
      } else {
        callback()
      }
    }
    const validatePhoneNo = (rule, value, callback) => {
      if (!validDigits(value)) {
        callback(new Error('The phone number only contains digits.'))
      } else {
        callback()
      }
    }
    const validateCompName = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('The company name can not be empty'))
      } else {
        callback()
      }
    }
    const validateLocation = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('The location can not be empty'))
      } else {
        callback()
      }
    }
    const validateCompMail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter a valid email'))
      } else {
        callback()
      }
    }
    const validateTaxCode = (rule, value, callback) => {
      if (!validDigits(value)) {
        callback(new Error('The tax code only contains digits.'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        fullname: '',
        email: '',
        password: '',
        confirmPwd: '',
        phoneNo: '',
        compName: '',
        location: '',
        compMail: '',
        compPhone: '',
        taxCode: ''
      },
      registerRules: {
        fullname: [{ required: true, trigger: 'blur', validator: validateFullName }],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmPwd: [{ required: true, trigger: 'blur', validator: validateConfirmPwd }],
        phoneNo: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        compName: [{ required: true, trigger: 'blur', validator: validateCompName }],
        location: [{ required: true, trigger: 'blur', validator: validateLocation }],
        compMail: [{ required: true, trigger: 'blur', validator: validateCompMail }],
        compPhone: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        taxCode: [{ required: true, trigger: 'blur', validator: validateTaxCode }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
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
    // if (this.registerForm.username === '') {
    //   this.$refs.username.focus()
    // } else if (this.registerForm.password === '') {
    //   this.$refs.password.focus()
    // }
    this.$refs.fullname.focus()
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleSignup() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          // this.$router.push({ path: '/' })
          this.$store.dispatch('user/signup', this.registerForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/login', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
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

$bg:#283443;
$light_gray:#fff;
$dark_gray:#889aa4;
$cursor: #fff;
$black: #000000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.register-container {
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
      color: $black;
      height: 47px;
      // caret-color: $cursor;
      caret-color: $black;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    // border: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid $dark_gray;
    // background: rgba(0, 0, 0, 0.1);
    background: #ffffff;
    border-radius: 0px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$black: #000000;

.register-container {
  min-height: 100%;
  width: 100%;
  height: 100%;
  // background-color: $bg;
  background-image: url('../../assets/custom-theme/image/login-bg.jpeg');
  overflow: hidden;
  display:flex;
	flex-direction:column;

  .register-form {
    position: relative;
    width: 596px;
    max-width: 100%;
    padding: 160px 68px;
    margin: 0 auto;
    overflow: scroll;
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
</style>
