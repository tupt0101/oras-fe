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
import Billing from './components/Billing'

import { getCurrentPackage } from '@/api/package'

export default {
  name: 'Profile',
  components: {
    UserCard,
    Activity,
    Account,
    Company,
    Billing
  },
  data() {
    return {
      user: {},
      company: {},
      currPackage: {},
      activeTab: 'activity'
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
    this.getUser()
    this.getPackage()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.fullname,
        role: this.roles.join(' | '),
        email: this.email,
        avatar: this.avatar
      }
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
