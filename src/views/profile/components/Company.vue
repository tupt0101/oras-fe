<template>
  <el-row :gutter="20">
    <el-form>
      <el-col :lg="12">
        <el-form-item label="Name">
      <el-input v-model="company.name" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Email">
          <el-input v-model.trim="company.email" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Phone number">
          <el-input v-model.trim="company.phoneNo" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Location">
      <el-input v-model="company.location" />
        </el-form-item>
      </el-col>
      <el-col :lg="12">
        <el-form-item label="Tax code">
          <el-input v-model.trim="company.taxCode" />
        </el-form-item>
      </el-col>
      <el-col :lg="24">
        <el-form-item label="Description">
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
  methods: {
    submit() {
      updateCompany(this.company).then(response => {
        this.$message({
          message: 'Company information has been updated successfully',
          type: 'success',
          duration: 5 * 1000
        })
      }).catch(err => {
        this.$message({
          message: err.response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
        console.log(err)
      })
    }
  }
}
</script>
