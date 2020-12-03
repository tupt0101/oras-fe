<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" width="200px">
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
          <router-link :to="'/job/edit/'+scope.row.id" style="margin-right: 10px">
            <el-tooltip content="Edit job" placement="top">
              <el-button v-if="scope.row.status!=='Published'" type="primary" size="small" icon="el-icon-edit">
                <!-- Edit -->
              </el-button>
            </el-tooltip>
          </router-link>
            <el-tooltip content="Publish job to recruitment platform" placement="top">
              <el-button v-if="scope.row.status==='Draft'" type="success" size="small" icon="el-icon-upload2" @click="handlePublishJob(scope.row.id)">
                <!-- Publish -->
              </el-button>
            </el-tooltip>
          <el-tooltip content="Close Job" placement="top">
            <el-button v-if="scope.row.status==='Published'" type="danger" size="small" icon="el-icon-circle-close" @click="handleCloseJob(scope.row.id)">
              <!-- Close -->
            </el-button>
          </el-tooltip>
        </template>
        <!-- <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button v-if="row.status!='Published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
            Publish
          </el-button>
          <el-button v-if="row.status!='Draft'" size="mini" @click="handleModifyStatus(row,'draft')">
            Draft
          </el-button>
          <el-button v-if="row.status!='Closed'" size="mini" type="danger" @click="handleDelete(row,$index)">
            Delete
          </el-button>
        </template> -->
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { fetchJobList, fetchJobByCreator } from '@/api/job'
import Pagination from '@/components/Pagination'
import { closeJob, publishJob } from '../../api/job' // Secondary package based on el-pagination

export default {
  name: 'ArticleList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
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
        limit: 20
      }
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
    this.getList()
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
      }).catch(() => {
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
      }).catch(() => {
        this.loading = false
      })
    },
    stripHtml(html) {
      const tmp = document.createElement('DIV')
      tmp.innerHTML = html
      return tmp.textContent || tmp.innerText || ''
    },
    getList() {
      this.listLoading = true
      if (this.accountRole === 'admin') {
        fetchJobList(this.listQuery).then(response => {
          this.list = response.data
          this.total = response.data.length
          this.listLoading = false
        })
      } else {
        fetchJobByCreator(this.accountId).then(response => {
          this.list = response.data
          // this.total = response.data
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
</style>
