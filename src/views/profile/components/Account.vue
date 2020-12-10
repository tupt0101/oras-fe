<template>
  <div>
    <el-form>
      <el-form-item label="Email:">
        <el-input v-model.trim="user.email" readonly="readonly" style="border: 0 none;" />
      </el-form-item>
    </el-form>
    <el-checkbox v-model="checkChangeInfo">I want to change my information</el-checkbox>
    <el-form ref="infoForm" :model="infoForm" :rules="rules" :hide-required-asterisk="!checkChangeInfo">
      <el-form-item label="Name" prop="fullname">
        <el-input v-model="user.fullname" :readonly="!checkChangeInfo" />
      </el-form-item>
      <el-form-item label="Phone number" prop="phoneNo">
        <el-input v-model.trim="user.phoneNo" :readonly="!checkChangeInfo" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="!checkChangeInfo" @click="submit">Update</el-button>
      </el-form-item>
    </el-form>
    <el-checkbox v-model="checkChangePwd">I want to change password</el-checkbox>
    <el-form v-if="checkChangePwd" ref="passwordData" :model="passwordData" :rules="rules">
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item label="Current password" prop="curPassword">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="passwordData.currentPassword"
            type="password"
            placeholder="Enter your current password"
            name="password"
            maxlength="20"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
          />
        </el-form-item>
      </el-tooltip>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item label="New password" prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="passwordData.newPassword"
            type="password"
            placeholder="Enter new password"
            name="password"
            maxlength="20"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
          />
        </el-form-item>
      </el-tooltip>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item label="Confirm password" prop="confirmPwd">
          <el-input
            :key="passwordType"
            ref="confirmPwd"
            v-model="confirmPwd"
            type="password"
            placeholder="Confirm your new password"
            maxlength="20"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
          />
        </el-form-item>
      </el-tooltip>
      <el-form-item>
        <el-button type="primary" @click="changePassword">Change password</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { changePassword, updateAccount } from '../../../api/account'
import { validDigits } from '../../../utils/validate'
import { getAccountId } from '../../../utils/auth'

export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          phoneNo: '',
          fullname: '',
          email: ''
        }
      }
    }
  },
  data() {
    const validateCurPassword = (rule, value, callback) => {
      if (this.passwordData.currentPassword.length < 6) {
        callback(new Error('The current password can not be less than 6 digits.'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (this.passwordData.newPassword.length < 6) {
        callback(new Error('The password can not be less than 6 digits.'))
      } else {
        callback()
      }
    }
    const validateConfirmPwd = (rule, value, callback) => {
      if (!this.confirmPwd && !this.passwordData.newPassword.length) {
        this.confirmPwd = this.passwordData.newPassword
      }
      if (this.confirmPwd !== this.passwordData.newPassword) {
        callback(new Error('The confirmation password is not matched.'))
      } else {
        callback()
      }
    }
    const validatePhoneNo = (rule, value, callback) => {
      if (!validDigits(this.user.phoneNo)) {
        callback(new Error('The phone number only contains digits.'))
      } else {
        callback()
      }
    }
    const validateFullName = (rule, value, callback) => {
      if (this.user.fullname.length === 0) {
        callback(new Error('The name can not be empty.'))
      } else {
        callback()
      }
    }
    return {
      checkChangeInfo: false,
      checkChangePwd: false,
      passwordData: {
        accountId: getAccountId(),
        currentPassword: '',
        newPassword: ''
      },
      confirmPwd: '',
      infoForm: Object.assign({}, this.user),
      rules: {
        fullname: [{ required: true, trigger: 'blur', validator: validateFullName }],
        phoneNo: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        curPassword: [{ required: true, trigger: 'blur', validator: validateCurPassword }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmPwd: [{ required: true, trigger: 'blur', validator: validateConfirmPwd }]
      },
      passwordType: 'password',
      capsTooltip: false
    }
  },
  methods: {
    submit() {
      this.$refs.infoForm.validate(valid => {
        if (valid) {
          updateAccount(this.user).then(() => {
            this.$message({
              message: 'User information has been updated successfully',
              type: 'success',
              duration: 5 * 1000
            })
            this.$router.go(0)
          }).catch(err => {
            this.$message({
              message: 'Unexpected error occurs',
              type: 'error',
              duration: 5 * 1000
            })
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    changePassword() {
      this.$refs.passwordData.validate(valid => {
        if (valid) {
          changePassword(this.passwordData).then(response => {
            this.$message({
              message: 'Password has been updated successfully',
              type: 'success',
              duration: 5 * 1000
            })
            this.$router.go(0)
          }).catch(err => {
            this.$message({
              message: err.response.data.message,
              type: 'error',
              duration: 5 * 1000
            })
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    }
  }
}
</script>
