<template>
  <div class="app-container">
    <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}">
        <div class="title-container">
          <strong style="font-size: 36px">Company List</strong><br>
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="filter-container">
          <el-input v-model="listQuery.name" :maxLength="fmaxLength.compNameLength" placeholder="Name" style="width: 250px; margin-right: 10px" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-select v-model="listQuery.status" placeholder="Status" clearable class="filter-item" style="width: 130px; margin-right: 10px" @change="handleFilter">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
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
      <el-table-column align="center" label="No." width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Company name" align="left" prop="name" sortable="custom" :class-name="getSortClass('name')">
        <template slot-scope="{row}">
          <div class="link-type" @click="viewDetail(row)">
            <span>{{ row.name }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column width="300px" align="left" label="Location">
        <template slot-scope="{row}">
          <span>{{ row.location }}</span>
        </template>
      </el-table-column>

      <el-table-column width="240px" align="left" label="Email">
        <template slot-scope="{row}">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column width="160px" align="center" label="Phone Number">
        <template slot-scope="{row}">
          <span>{{ row.phoneNo }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="Tax Code">
        <template slot-scope="{row}">
          <span>{{ row.taxCode }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="120">
        <template slot-scope="{row}">
          <el-tag :type="row.verified | statusFilter">
            {{ row.verified ? 'Verified' : 'Unverified' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="150">
        <template slot-scope="scope">
          <router-link :to="'/account/company/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              <!-- Edit -->
            </el-button>
          </router-link>
          <!-- <router-link :to="'/account/edit/'+scope.row.id">
            <el-button v-if="scope.row.verified===false" type="success" size="small" icon="el-icon-check">
              Edit
            </el-button>
          </router-link> -->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Company Detail" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" label-position="left" label-width="70px" style="width: 90%; margin-left:50px;">
        <el-form-item label="Company name:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.name }}</span>
        </el-form-item>
        <el-form-item label="Location:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.location }}</span>
        </el-form-item>
        <el-form-item label="Email:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.email }}</span>
        </el-form-item>
        <el-form-item label="Phone Number:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.phoneNo }}</span>
        </el-form-item>
        <el-form-item label="Tax code:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.taxCode }}</span>
        </el-form-item>
        <el-form-item label="Description:" label-width="150px" style="margin-bottom: 0px;">
          <span v-html="temp.description" />
        </el-form-item>
        <!-- <el-form-item label="" label-width="120px" style="margin-bottom: 0px; max-height: 320px; overflow-y: scroll">
          <span v-html="temp.description" />
        </el-form-item> -->
        <el-form-item label="Status: " label-width="150px" style="margin-bottom: 0px">
          <el-tag :type="temp.verified | statusFilter">
            {{ temp.verified ? 'Verified' : 'Unverified' }}
          </el-tag>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Close
        </el-button>
        <el-button v-if="!temp.verified" type="success" :loading="listLoading" @click="handleVerifyCompany(temp.id)">
          Verify
        </el-button>
      </div>
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getCompanyList" />
  </div>
</template>

<script>
import { fetchCompanyListWithPagination } from '@/api/account'
import Pagination from '@/components/Pagination'
import { verifyCompany } from '../../api/account'
import { maxLength } from '../../store' // Secondary package based on el-pagination

export default {
  name: 'AccountList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        true: 'success',
        false: 'danger',
        null: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      fmaxLength: maxLength,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        name: '',
        status: '',
        role: '',
        sort: '+name'
      },
      sortNameTemp: 'ascending',
      statusOptions: ['Verified', 'Unverified'],
      temp: {
        id: undefined,
        name: '',
        location: 0,
        email: 0,
        phoneNo: '',
        taxCode: '',
        description: '',
        avatar: '',
        verified: ''
      },
      dialogFormVisible: false
    }
  },
  computed: {
    email() {
      return this.$store.state.user.username
    }
  },
  created() {
    this.getCompanyList()
  },
  methods: {
    getCompanyList() {
      this.listLoading = true
      fetchCompanyListWithPagination(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total
        this.listLoading = false
      })
    },
    viewDetail(company) {
      this.temp = Object.assign({}, company) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogFormVisible = true
    },
    handleVerifyCompany(id) {
      this.listLoading = true
      verifyCompany(id, this.email).then(response => {
        this.listLoading = false
        this.dialogFormVisible = false
        this.getCompanyList()
      })
    },
    sortChange(data) {
      var { prop, order } = data
      if (prop === 'name') {
        if (this.sortNameTemp === 'ascending') {
          this.sortNameTemp = 'descending'
        } else {
          this.sortNameTemp = 'ascending'
        }
        console.log(order, this.sortNameTemp)
        this.sortByName(this.sortNameTemp)
      }
    },
    sortByName(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+name'
      } else {
        this.listQuery.sort = '-name'
      }
      this.handleFilter()
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getCompanyList()
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
</style>
