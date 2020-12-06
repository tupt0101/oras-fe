<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
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
            <span>{{ row.name }}</span>
          </router-link>
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

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getCompanyList" />
  </div>
</template>

<script>
import { fetchCompanyList, fetchCompanyListWithPagination } from '@/api/account'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

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
      }
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
