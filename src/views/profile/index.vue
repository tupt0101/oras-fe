<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Activity" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="Edit Account" name="account">
                <account :user="user" />
              </el-tab-pane>
              <el-tab-pane label="Edit Company" name="company">
                <company :company="company" />
              </el-tab-pane>
<!--              <el-tab-pane label="Change Password" name="changePassword">-->
<!--                <change-password />-->
<!--              </el-tab-pane>-->
              <el-tab-pane label="Billing" name="billing">
                <billing v-if="currPackage" :curr-package="currPackage" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Account from './components/Account'
import Company from './components/Company'
import ChangePassword from './components/ChangePassword'
import Billing from './components/Billing'

import { getCurrentPackage } from '@/api/package'
import { fetchAccountData } from '@/api/user'

export default {
  name: 'Profile',
  components: {
    UserCard,
    Activity,
    Account,
    Company,
    ChangePassword,
    Billing
  },
  data() {
    return {
      user: {},
      company: {},
      currPackage: {},
      activeTab: 'activity',
      account: null
    }
  },
  computed: {
    ...mapGetters([
      'fullname',
      'avatar',
      'roles',
      'username'
    ]),
    accountId() {
      return this.$store.state.user.accId
    }
  },
  created() {
    this.getAccountData()
    this.getPackage()
  },
  methods: {
    getAccountData() {
      fetchAccountData(this.accountId).then(response => {
        this.account = response.data
        this.user = {
          id: this.account.id,
          fullname: this.account.fullname,
          role: this.account.role,
          email: this.account.email,
          phoneNo: this.account.phoneNo,
          avatar: this.avatar
        }
        this.company = {
          id: this.account.companyId,
          name: this.account.companyById.name,
          email: this.account.companyById.email,
          phoneNo: this.account.companyById.phoneNo,
          location: this.account.companyById.location,
          taxCode: this.account.companyById.taxCode,
          description: this.account.companyById.description
        }
      })
    },
    getPackage() {
      getCurrentPackage(this.accountId)
        .then(response => {
          this.currPackage = response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
