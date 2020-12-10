<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
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
        $ {{ scope.row.purchaseById && scope.row.purchaseById.amount | toThousandFilter }}
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
</template>

<script>
import { fetchTransactionOfAccount } from '@/api/report'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        false: 'success',
        true: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  computed: {
    accountId() {
      return this.$store.state.user.accId
    }
  },
  created() {
    this.fetchTransactionData()
  },
  methods: {
    fetchTransactionData() {
      fetchTransactionOfAccount(this.accountId).then(response => {
        // this.list = response.data.items.slice(0, 8)
        this.list = response.data
      })
    }
  }
}
</script>
