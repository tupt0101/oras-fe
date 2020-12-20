<template>
  <div>
    <el-dropdown trigger="click">
      <div class="icon">
        <svg-icon class-name="noti-icon" :icon-class="notiList ? 'notification_new' : 'notification'" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <span v-for="(item, index) of notiList" :key="index" @click="updateNotification(item.id)">
          <router-link :to="item.type ==='Apply' ? '/job/candidates/' + item.targetId : '/account/company'">
            <el-dropdown-item class="dd-item">
              {{ item.type === 'Apply' ? 'Your job id ' + item.targetId + ' has new applications.' : 'There are some new register.' }}
            </el-dropdown-item>
          </router-link>
        </span>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getNewNotification, setAsReadNotification } from '@/api/notification'

export default {
  data() {
    return {
      notiList: null,
      timer: ''
    }
  },
  computed: {
    accountId() {
      return this.$store.state.user.accId
    },
    accountRole() {
      return this.$store.state.user.roles[0]
    }
  },
  created() {
    console.log('notification created')
    this.fetchNotification()
    this.timer = setInterval(this.fetchNotification, 30000)
  },
  beforeDestroy() {
    console.log('clear timer')
    clearInterval(this.timer)
  },
  methods: {
    fetchNotification() {
      getNewNotification(this.accountId, this.accountRole).then(response => {
        console.log('get notification at ' + new Date())
        this.notiList = response.data
      })
    },
    updateNotification(id) {
      setAsReadNotification(id).then(response => {
        console.log(response)
        this.fetchNotification()
      })
    }
  }
}
</script>

<style scoped>
.noti-icon {
  cursor: pointer;
  font-size: 20px;
  vertical-align: middle;
}
.dd-item {
  width: 250px;
}
</style>
