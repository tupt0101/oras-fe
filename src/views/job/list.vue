<template>
  <div class="app-container">
    <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}">
        <div class="title-container">
          <strong style="font-size: 36px">Job List</strong><br>
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="filter-container">
          <el-input v-model="listQuery.title" placeholder="Title" style="width: 250px; margin-right: 10px" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-select v-model="listQuery.status" placeholder="Status" clearable class="filter-item" style="width: 130px; margin-right: 10px" @change="handleFilter">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
          <el-select v-model="listQuery.currency" placeholder="Currency" clearable class="filter-item" style="width: 130px; margin-right: 10px" @change="handleFilter">
            <el-option v-for="item in currencyOptions" :key="item" :label="item" :value="item" />
          </el-select>
          <el-button class="filter-item" type="primary" icon="el-icon-search" style="margin-right: 10px" @click="handleFilter">
            Search
          </el-button>
          <router-link :to="'/job/create'">
            <el-button class="filter-item" type="primary" icon="el-icon-edit">
              New
            </el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%" @sort-change="sortChange">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" width="250px">
        <template slot-scope="{row}">
          <router-link :to="'/job/candidates/' + row.id">
            <span class="link-type">{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="Job description" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" style="white-space: nowrap; color: #606266" @click="viewDetail(row)">{{ stripHtml(row.description) }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="Applications" prop="application" sortable="custom" width="130px" align="center" :class-name="getSortClass('application')">
        <template slot-scope="{row}">
          <router-link :to="'/job/candidates/' + row.id">
            <span>{{ row.totalApplication }} candidates</span>
          </router-link>
        </template>
      </el-table-column> -->
      <el-table-column label="Published" prop="publishDate" sortable="custom" width="120px" align="center" :class-name="getSortClass('publishDate')">
        <template slot-scope="{row}">
          <span>{{ row.applyFrom && (new Date(row.applyFrom)).toLocaleDateString('en-GB') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Deadline" prop="deadline" sortable="custom" width="120px" align="center" :class-name="getSortClass('deadline')">
        <template slot-scope="{row}">
          <span>{{ (new Date(row.applyTo)).toLocaleDateString('en-GB') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Salary" width="220px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.currency | currencyFilter }} {{ row.salaryFrom | toThousandFilter }} - {{ row.salaryTo | toThousandFilter }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="Vacancies" align="center" width="90px">
        <template slot-scope="{row}">
          <span>{{ row.vacancies }}</span>
        </template>
      </el-table-column> -->
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
            <el-button v-if="scope.row.status==='Draft'" :loading="btnLoading" style="margin-left: 10px" type="success" size="small" icon="el-icon-upload2" @click="handlePublishJob(scope.row.id)">
              <!-- Publish -->
            </el-button>
          </el-tooltip>
          <el-tooltip content="Close Job" placement="top">
            <el-button v-if="scope.row.status==='Published'" type="danger" size="small" icon="el-icon-circle-close" @click="confirmDialog = true; rowId = scope.row.id">
              <!-- Close -->
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Job Detail" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" label-position="left" label-width="70px" style="width: 90%; margin-left:50px;">
        <el-form-item label="Title:" prop="title" label-width="100px" style="margin-bottom: 0px">
          <span>{{ temp.title }}</span>
        </el-form-item>
        <el-form-item label="Salary:" prop="salary" label-width="100px" style="margin-bottom: 0px">
          <span>{{ temp.currency | currencyFilter }} {{ temp.salaryFrom | toThousandFilter }} - {{ temp.salaryTo | toThousandFilter }}</span>
        </el-form-item>
        <el-form-item label="Vacancies:" prop="vacancies" label-width="100px" style="margin-bottom: 0px">
          <span>{{ temp.vacancies }}</span>
        </el-form-item>
        <el-form-item label="Created:" prop="created" label-width="100px" style="margin-bottom: 0px">
          <span>{{ (new Date(temp.createDate)).toLocaleString('en-GB') }}</span>
        </el-form-item>
        <el-form-item label="Published:" prop="published" label-width="100px" style="margin-bottom: 0px">
          <span>{{ (new Date(temp.applyFrom)).toLocaleString('en-GB') }}</span>
        </el-form-item>
        <el-form-item label="Deadline:" prop="deadline" label-width="100px" style="margin-bottom: 0px">
          <span>{{ (new Date(temp.applyTo)).toLocaleString('en-GB') }}</span>
        </el-form-item>
        <el-form-item label="Description:" prop="description" label-width="100px" style="margin-bottom: 0px;">
          <!-- <span v-html="temp.description" /> -->
        </el-form-item>
        <el-form-item label="" prop="description" label-width="100px" style="margin-bottom: 0px; max-height: 320px; overflow-y: scroll">
          <span v-html="temp.description" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">
          Close
        </el-button> -->
        <!-- <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button> -->
      </div>
    </el-dialog>

    <el-dialog :visible.sync="showDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="hasError ? 'failed' : 'success'" /> {{ dialogTitle }}</span>
      <p class="message" v-html="message" />
    </el-dialog>

    <el-dialog :visible.sync="confirmDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="'warning'" /> Confirmation</span>
      <p class="message">Do you really want to close this job?</p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="confirmDialog = false">
          Cancel
        </el-button>
        <el-button type="danger" :loading="btnLoading" @click="handleCloseJob(rowId)">
          Confirm
        </el-button>
      </div>
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
    },
    currencyFilter(currency) {
      const currencyMap = {
        VND: '₫',
        USD: '$',
        EUR: '€',
        SGD: 'S$',
        CNY: '¥',
        JPY: 'JP¥'
      }
      return currencyMap[currency]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        title: '',
        status: '',
        currency: '',
        sort: '-applyFrom'
        // sort: '-matchingRate'
      },
      sortPublishTemp: 'descending',
      sortDeadlineTemp: 'descending',
      statusOptions: ['Draft', 'Published', 'Closed'],
      currencyOptions: ['VND', 'USD', 'SGD', 'EUR', 'JPY', 'CNY'],
      message: '',
      showDialog: false,
      rowId: undefined,
      confirmDialog: false,
      btnLoading: false,
      hasError: false,
      dialogTitle: '',
      temp: {
        id: undefined,
        title: '',
        salary: 0,
        vacancies: 0,
        created: '',
        published: '',
        deadline: '',
        description: '',
        status: 'published'
      },
      dialogFormVisible: false
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
      this.btnLoading = true
      publishJob(id).then(response => {
        this.$notify({
          title: 'Success',
          message: 'Publish the post successfully',
          type: 'success',
          duration: 2000
        })
        this.btnLoading = false
        this.getJobList()
      }).catch(err => {
        this.dialogTitle = err.response.data.message
        this.hasError = true
        if (err.response.data.status === 402) {
          this.message = 'You have run out of job posts.<br>Please try to select and purchase other packages!'
        }
        this.showDialog = true
        this.btnLoading = false
      })
    },
    handleCloseJob(id) {
      this.btnLoading = true
      closeJob(id).then(response => {
        this.$notify({
          title: 'Success',
          message: 'Close the post successfully',
          type: 'success',
          duration: 2000
        })
        this.confirmDialog = false
        this.btnLoading = false
        this.getJobList()
      }).catch(() => {
        this.btnLoading = false
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
    },
    viewDetail(job) {
      this.temp = Object.assign({}, job) // copy obj
      this.dialogFormVisible = true
    },
    sortChange(data) {
      var { prop, order } = data
      if (prop === 'publishDate') {
        if (this.sortPublishTemp === 'ascending') {
          this.sortPublishTemp = 'descending'
        } else {
          this.sortPublishTemp = 'ascending'
        }
        console.log(order, this.sortPublishTemp)
        this.sortByPublish(this.sortPublishTemp)
      } else if (prop === 'deadline') {
        if (this.sortDeadlineTemp === 'ascending') {
          this.sortDeadlineTemp = 'descending'
        } else {
          this.sortDeadlineTemp = 'ascending'
        }
        console.log(order, this.sortDeadlineTemp)
        this.sortByDeadline(this.sortDeadlineTemp)
      }
    },
    sortByPublish(order) {
      console.log('sortByPublish')
      if (order === 'ascending') {
        this.listQuery.sort = '+applyFrom'
      } else {
        this.listQuery.sort = '-applyFrom'
      }
      this.handleFilter()
    },
    sortByDeadline(order) {
      console.log('sortByDeadline')
      if (order === 'ascending') {
        this.listQuery.sort = '+applyTo'
      } else {
        this.listQuery.sort = '-applyTo'
      }
      this.handleFilter()
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getJobList()
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
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
.title-container {
  padding-bottom: 10px;
}
</style>
