<template>
  <div>
    <el-table v-loading="listLoading" :data="list" style="width: 100%;padding-top: 15px;">
      <el-table-column label="Package name" min-width="200">
        <template slot-scope="scope">
          {{ scope.row.packageById.name }} Package
        </template>
      </el-table-column>
      <el-table-column label="Number of Posts" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.packageById.numOfPost }}
        </template>
      </el-table-column>
      <el-table-column label="Amount" width="195" align="center">
        <template slot-scope="scope">
          USD {{ scope.row.purchaseById && scope.row.purchaseById.amount | toThousandFilter }}
        </template>
      </el-table-column>
      <el-table-column label="Purchase Date" width="195" align="center">
        <template slot-scope="scope">
          {{ scope.row.purchaseById && new Date(scope.row.purchaseById.purchaseDate).toLocaleString('en-GB') }}
        </template>
      </el-table-column>
      <el-table-column label="Valid to" width="195" align="center">
        <template slot-scope="scope">
          {{ new Date(scope.row.validTo).toLocaleString('en-GB') }}
        </template>
      </el-table-column>
      <el-table-column label="Status" width="100" align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.expired | statusFilter">
            {{ row.expired ? 'Expired' : 'Valid' }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { fetchAccountPackageWithPagination } from '@/api/package'

export default {
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
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchAccountPackageWithPagination(this.listQuery).then(response => {
        // this.list = response.data.items.slice(0, 8)
        this.list = response.data.data
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
