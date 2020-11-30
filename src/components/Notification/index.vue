<template>
  <div>
    <el-dropdown trigger="click">
      <div class="icon">
        <svg-icon class-name="noti-icon" icon-class="notification" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/profile/index">
          <el-dropdown-item>Profile</el-dropdown-item>
        </router-link>
        <router-link to="/">
          <el-dropdown-item>Dashboard</el-dropdown-item>
        </router-link>
        <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
          <el-dropdown-item>Github</el-dropdown-item>
        </a>
        <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
          <el-dropdown-item>Docs</el-dropdown-item>
        </a>
        <el-dropdown-item divided @click.native="logout">
          <span style="display:block;">Log Out</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style scoped>
.noti-icon {
  cursor: pointer;
  font-size: 20px;
  vertical-align: middle;
}
</style>
