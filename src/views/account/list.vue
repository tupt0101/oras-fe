<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column> -->

      <el-table-column min-width="300px" label="Full name" align="left">
        <template slot-scope="{row}">
          <router-link :to="'/account/edit/'+row.id" class="link-type">
            <span>{{ row.fullname }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column width="300px" align="left" label="Email">
        <template slot-scope="{row}">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="Phone Number">
        <template slot-scope="{row}">
          <span>{{ row.phoneNo }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Role">
        <template slot-scope="{row}">
          <span>{{ row.role }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="150">
        <template slot-scope="{row}">
          <el-tag :type="row.active | statusFilter">
            {{ row.active ? 'Active' : 'Inactive' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="180">
        <template slot-scope="scope">
          <router-link :to="'/account/edit/'+scope.row.id">
            <el-tooltip content="Edit account" placement="top" style="margin-right: 10px">
              <el-button type="primary" size="small" icon="el-icon-edit">
                <!-- Edit -->
              </el-button>
            </el-tooltip>
          </router-link>
          <el-tooltip content="Deactivate account" placement="top">
            <el-button v-if="scope.row.active" type="danger" size="small" icon="el-icon-remove-outline" @click="handleDeactivateAccount(scope.row.id)">
            <!-- Deactivate account -->
            </el-button>
          </el-tooltip>
          <el-tooltip content="Activate account" placement="top">
            <el-button v-if="!scope.row.active" type="success" size="small" icon="el-icon-circle-check" @click="handleActivateAccount(scope.row.id)">
            <!-- Activate account -->
            </el-button>
          </el-tooltip>
          <el-tooltip content="Reset password" placement="top" style="margin-right: 0px">
            <el-button type="info" size="small" icon="el-icon-refresh-left" @click="handleResetPassword(scope.row.email)">
            <!-- Reset password -->
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="showDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="hasError ? 'failed' : 'success'" /> {{ dialogTitle }}</span>
      <p class="message" v-html="message" />
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getAccountList" />
  </div>
</template>

<script>
import { fetchAccountList, fetchAccountListWithPagination } from '@/api/account'
import { resetPassword, activateAccount, deactivateAccount } from '@/api/user'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'AccountList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        true: 'success',
        false: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      dialogTitle: '',
      message: '',
      showDialog: false,
      hasError: false
    }
  },
  created() {
    this.getTotal()
    this.getAccountList()
  },
  methods: {
    getTotal() {
      this.listLoading = true
      fetchAccountList().then(response => {
        this.total = response.data.length
        this.listLoading = false
      })
    },
    getAccountList() {
      this.listLoading = true
      fetchAccountListWithPagination(this.listQuery).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    handleResetPassword(email) {
      resetPassword(email)
        .then(response => {
          this.dialogTitle = 'Reset Password Successfully!'
          this.message = 'The password of account <i>' + email + '</i><br> has been reset.'
          this.showDialog = true
          this.loading = false
        })
        .catch(err => {
          this.dialogTitle = 'Something went wrong!'
          this.hasError = true
          if (err.response.data.status === 400) {
            this.message = 'The email you entered is not registered in our system.<br>Please try again!'
          }
          this.showDialog = true
          this.loading = false
        })
    },
    handleDeactivateAccount(id) {
      deactivateAccount(id)
        .then(response => {
          this.dialogTitle = 'Reset Password Successfully!'
          this.message = 'The account with id: <i>' + id + '</i><br> has been deactivated.'
          this.showDialog = true
          this.loading = false
        })
        .catch(err => {
          this.dialogTitle = 'Something went wrong!'
          this.hasError = true
          if (err.response.data.status === 400) {
            this.message = 'The email you entered is not registered in our system.<br>Please try again!'
          }
          this.showDialog = true
          this.loading = false
        })
    },
    handleActivateAccount(id) {
      activateAccount(id)
        .then(response => {
          this.dialogTitle = 'Reset Password Successfully!'
          this.message = 'The account with id: <i>' + id + '</i><br> has been activated.'
          this.showDialog = true
          this.loading = false
        })
        .catch(err => {
          this.dialogTitle = 'Something went wrong!'
          this.hasError = true
          if (err.response.data.status === 400) {
            this.message = 'The email you entered is not registered in our system.<br>Please try again!'
          }
          this.showDialog = true
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}

.message {
  margin-left: 10px;
  font-size: 1.15em;
}
</style>
