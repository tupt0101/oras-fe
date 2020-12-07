<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Account name" min-width="200px" align="left">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.accountById.fullname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Company" width="250px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.accountById.companyById.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Package" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.packageById.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Purchase ID" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.purchaseId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Purchase date" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.purchaseById && new Date(row.purchaseById.purchaseDate).toLocaleString() }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Valid to" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ new Date(row.validTo).toLocaleString() }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.expired | statusFilter">
            {{ row.expired ? 'expired' : 'valid' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="150px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/purchase/detail/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-s-order">
              <!-- View purchase detail -->
            </el-button>
          </router-link>
        </template>
        <!-- <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button v-if="row.status!='open'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
            Publish
          </el-button>
          <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
            Draft
          </el-button>
          <el-button v-if="row.status!='closed'" size="mini" type="danger" @click="handleDelete(row,$index)">
            Delete
          </el-button>
        </template> -->
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
// import { fetchJobList } from '@/api/job'
import Pagination from '@/components/Pagination'
import { fetchAccountPackage, fetchAccountPackageWithPagination } from '@/api/package' // Secondary package based on el-pagination

export default {
  name: 'PackageList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        false: 'success',
        true: 'danger'
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
    this.getList()
  },
  methods: {
    getTotal() {
      this.listLoading = true
      fetchAccountPackage().then(response => {
        this.total = response.data.length
        this.listLoading = false
      })
    },
    getList() {
      this.listLoading = true
      fetchAccountPackageWithPagination(this.listQuery).then(response => {
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
