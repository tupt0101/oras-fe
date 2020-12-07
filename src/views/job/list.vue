<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" width="250px">
        <template slot-scope="{row}">
          <router-link :to="'/job/candidates/'+ row.id">
            <span class="link-type">{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="Job description" min-width="150px">
        <template slot-scope="{row}">
          <span style="white-space: nowrap">{{ stripHtml(row.description) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Deadline" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ (new Date(row.applyTo)).toLocaleString() }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Salary" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.currency }} {{ row.salaryFrom }} - {{ row.salaryTo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Vacancies" align="center" width="95px">
        <template slot-scope="{row}">
          <span>{{ row.vacancies }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="150px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <!-- alo YAnh -->
          <!-- sua router to: toi api thuc hien action crud -->
          <router-link :to="'/job/edit/'+scope.row.id">
            <el-tooltip content="Edit job" placement="top">
              <el-button v-if="scope.row.status==='Draft'" type="primary" size="small" icon="el-icon-edit">
                <!-- Edit -->
              </el-button>
            </el-tooltip>
          </router-link>
          <router-link :to="'/job/reopen/'+scope.row.id">
            <el-tooltip content="Reopen job" placement="top">
              <el-button v-if="scope.row.status==='Closed'" type="primary" size="small" icon="el-icon-copy-document">
                <!-- Edit -->
              </el-button>
            </el-tooltip>
          </router-link>
          <el-tooltip content="Publish job to recruitment platform" placement="top">
            <el-button v-if="scope.row.status==='Draft'" style="margin-left: 10px" type="success" size="small" icon="el-icon-upload2" @click="handlePublishJob(scope.row.id)">
              <!-- Publish -->
            </el-button>
          </el-tooltip>
          <el-tooltip content="Close Job" placement="top">
            <el-button v-if="scope.row.status==='Published'" type="danger" size="small" icon="el-icon-circle-close" @click="handleCloseJob(scope.row.id)">
              <!-- Close -->
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="showDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="hasError ? 'failed' : 'success'" /> {{ dialogTitle }}</span>
      <p class="message" v-html="message" />
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getJobList" />
  </div>
</template>

<script>
import { fetchJobListWithPagination, fetchJobByCreatorWithPagination, fetchJobList, fetchJobByCreator } from '@/api/job'
import Pagination from '@/components/Pagination'
import { closeJob, publishJob } from '../../api/job' // Secondary package based on el-pagination

export default {
  name: 'ArticleList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        Published: 'success',
        Draft: 'info',
        Closed: 'danger'
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
      message: '',
      showDialog: false,
      btnLoading: false,
      hasError: false,
      dialogTitle: ''
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
    this.getTotal()
    this.getJobList()
  },
  methods: {
    handlePublishJob(id) {
      publishJob(id).then(response => {
        this.$notify({
          title: 'Success',
          message: 'Publish the post successfully',
          type: 'success',
          duration: 2000
        })
        this.loading = false
        this.$router.go(0)
      }).catch(err => {
        this.dialogTitle = err.response.data.message
        this.hasError = true
        if (err.response.data.status === 402) {
          this.message = 'You have run out of job posts.<br>Please try to select and purchase other packages!'
        }
        this.showDialog = true
        this.loading = false
      })
    },
    handleCloseJob(id) {
      closeJob(id).then(response => {
        this.$notify({
          title: 'Success',
          message: 'Close the post successfully',
          type: 'success',
          duration: 2000
        })
        this.loading = false
        this.$router.go(0)
      }).catch(() => {
        this.loading = false
      })
    },
    stripHtml(html) {
      const tmp = document.createElement('DIV')
      tmp.innerHTML = html
      return tmp.textContent || tmp.innerText || ''
    },
    getTotal() {
      this.listLoading = true
      if (this.accountRole === 'admin') {
        fetchJobList().then(response => {
          this.total = response.data.length
          this.listLoading = false
        })
      } else {
        fetchJobByCreator(this.accountId).then(response => {
          this.total = response.data.length
          this.listLoading = false
        })
      }
    },
    getJobList() {
      this.listLoading = true
      if (this.accountRole === 'admin') {
        fetchJobListWithPagination(this.listQuery).then(response => {
          this.list = response.data
          this.listLoading = false
        })
      } else {
        fetchJobByCreatorWithPagination(this.accountId, this.listQuery).then(response => {
          this.list = response.data
          this.listLoading = false
        })
      }
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
