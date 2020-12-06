<template>
  <div>
    <div v-if="currPackage">
      <h3>Your current package</h3>
      <el-form>
        <el-form-item label="Package name:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ currPackage.packageById && currPackage.packageById.name }}</span>
        </el-form-item>
        <el-form-item label="Post remain:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ currPackage && currPackage.numOfPost }}</span>
        </el-form-item>
        <el-form-item label="Expired date:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ currPackage && (new Date(currPackage.validTo)).toLocaleString("en-US", {dateStyle: "long", timeStyle: "medium"}) }}</span>
        </el-form-item>
        <el-button type="danger" @click="cancelCurrentPackage">Cancel Package</el-button>
      </el-form>
    </div>
    <div v-if="!currPackage">
      <h3>You have not bought any packages.</h3>
    </div>
  </div>
</template>

<script>
import { cancelPackage } from '@/api/package'

export default {
  props: {
    currPackage: {
      type: Object,
      required: true
    }
  },
  computed: {
    accountId() {
      return this.$store.state.user.accId
    }
  },
  methods: {
    cancelCurrentPackage() {
      cancelPackage(this.accountId)
        .then(response => {
          this.$router.push({ name: 'Profile' })
          this.$message({
            message: 'Your package has been canceled successfully',
            type: 'success',
            duration: 2.5 * 1000
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
