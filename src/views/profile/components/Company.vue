<template>
  <el-row :gutter="20">
    <el-form ref="infoForm" :model="infoForm" :rules="rules">
      <el-col :lg="12">
        <el-form-item label="Name" prop="compName">
          <el-input v-model="company.name" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Email" prop="compEmail">
          <el-input v-model.trim="company.email" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Phone number" prop="compPhone">
          <el-input v-model.trim="company.phoneNo" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Location" prop="location">
          <el-input v-model="company.location" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Tax code" prop="taxCode">
          <el-input v-model.trim="company.taxCode" />
        </el-form-item>
      </el-col>
      <el-col :lg="24">
        <el-form-item label="Description" prop="description">
          <el-input v-model="company.description" />
        </el-form-item>
      </el-col>
      <el-col :lg="24">
        <el-form-item>
          <el-button type="primary" @click="submit">Update</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </el-row>
</template>

<script>
import { updateCompany } from '../../../api/account'
import { validDigits, validEmail } from '../../../utils/validate'

export default {
  props: {
    company: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          phoneNo: '',
          location: '',
          taxCode: '',
          description: ''
        }
      }
    }
  },
  data() {
    const validatePhoneNo = (rule, value, callback) => {
      if (!validDigits(this.company.phoneNo)) {
        callback(new Error('The phone number only contains digits.'))
      } else {
        callback()
      }
    }
    const validateCompName = (rule, value, callback) => {
      if (this.company.name.length === 0) {
        callback(new Error('The company name can not be empty.'))
      } else {
        callback()
      }
    }
    const validateLocation = (rule, value, callback) => {
      if (this.company.location.length === 0) {
        callback(new Error('The location can not be empty.'))
      } else {
        callback()
      }
    }
    const validateCompEmail = (rule, value, callback) => {
      if (!validEmail(this.company.email)) {
        callback(new Error('Please enter a valid email.'))
      } else {
        callback()
      }
    }
    const validateTaxCode = (rule, value, callback) => {
      if (!validDigits(this.company.taxCode)) {
        callback(new Error('The tax code only contains digits.'))
      } else {
        callback()
      }
    }
    const validateDescription = (rule, value, callback) => {
      if (this.company.description.length === 0) {
        callback(new Error('The description can not be empty.'))
      } else {
        callback()
      }
    }
    return {
      infoForm: Object.assign({}, this.company),
      rules: {
        compName: [{ required: true, trigger: 'blur', validator: validateCompName }],
        location: [{ required: true, trigger: 'blur', validator: validateLocation }],
        compEmail: [{ required: true, trigger: 'blur', validator: validateCompEmail }],
        compPhone: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        taxCode: [{ required: true, trigger: 'blur', validator: validateTaxCode }],
        description: [{ required: true, trigger: 'blur', validator: validateDescription }]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.infoForm.validate(valid => {
        if (valid) {
          updateCompany(this.company).then(response => {
            this.$message({
              message: 'Company information has been updated successfully',
              type: 'success',
              duration: 5 * 1000
            })
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
    }
  }
}
</script>
