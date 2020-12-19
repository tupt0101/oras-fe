<template>
  <div>
    <div>
      <el-form v-if="currPackage.id">
        <h3>Your current package</h3>
        <el-form-item label="Package name:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ currPackage.packageById && currPackage.packageById.name }}</span>
        </el-form-item>
        <el-form-item label="Remaining post:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ currPackage && currPackage.numOfPost }}</span>
        </el-form-item>
        <el-form-item label="Expiry date:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ currPackage && (new Date(currPackage.validTo)).toLocaleString("en-US", {dateStyle: "long", timeStyle: "medium"}) }}</span>
        </el-form-item>
        <el-button type="danger" @click="cancelCurrentPackage">Cancel package</el-button>
      </el-form>
      <p v-if="!currPackage.id" style="font-size: 1.1em"><i>You have not bought any package.</i></p>
    </div>
    <div>
      <h3>Payment history</h3>
      <el-timeline>
        <el-timeline-item v-for="(item,index) of listPackage" :key="index" :timestamp="(new Date(item.purchaseById.purchaseDate)).toLocaleString('en-GB')" placement="top">
          <el-card>
            <h3>{{ item.packageById.name }}</h3>
            <p style="font-style: italic">Expired at {{ (new Date(item.validTo)).toLocaleString('en-GB') }}</p>
            <p style="font-style: italic">Number of remaining posts was {{ item.numOfPost }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
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
    },
    listPackage: {
      type: Array,
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
        .then(() => {
          this.$router.push({ name: 'Profile' })
          this.$message({
            message: 'Your package has been canceled successfully',
            type: 'success',
            duration: 2.5 * 1000
          })
          this.$router.go(0)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
