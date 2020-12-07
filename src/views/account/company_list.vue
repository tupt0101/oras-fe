<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="No." width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Company name" align="left">
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
            {{ row.verified ? 'verified' : 'unverified' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="150">
        <template slot-scope="scope">
          <router-link :to="'/account/edit/'+scope.row.id">
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
            {{ temp.verified ? 'verified' : 'unverified' }}
          </el-tag>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Close
        </el-button>
        <el-button v-if="!temp.verified" type="success" @click="handleVerifyCompany(temp.id)">
          Verify
        </el-button>
      </div>
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getCompanyList" />
  </div>
</template>

<script>
import { fetchCompanyList, fetchCompanyListWithPagination } from '@/api/account'
import Pagination from '@/components/Pagination'
import { verifyCompany } from '../../api/account' // Secondary package based on el-pagination

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
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
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
  created() {
    this.getTotal()
    this.getCompanyList()
  },
  methods: {
    getTotal() {
      this.listLoading = true
      fetchCompanyList().then(response => {
        this.total = response.data.length
        this.listLoading = false
      })
    },
    getCompanyList() {
      this.listLoading = true
      fetchCompanyListWithPagination(this.listQuery).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    viewDetail(company) {
      this.temp = Object.assign({}, company) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogFormVisible = true
    },
    handleVerifyCompany(id) {
      verifyCompany(id).then(response => {
        this.getCompanyList()
        this.dialogFormVisible = false
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
</style>
