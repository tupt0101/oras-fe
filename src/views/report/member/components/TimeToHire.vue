<template>
  <div class="">

    <el-table v-if="!list" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="No." width="80" />
      <el-table-column label="Job Title" width="300px" />
      <el-table-column label="Hired Candidate" min-width="300px" />
      <el-table-column label="Apply date" width="200px" align="center" />
      <el-table-column label="Hired date" width="200px" align="center" />
      <el-table-column label="Time To Hire" width="250px" align="center" />
    </el-table>
    <el-table
      v-if="list"
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="No." prop="id" type="index" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <!-- <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="Job Title" width="300px">
        <template slot-scope="{row}">
          <span>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Hired Candidate" min-width="300px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.name }} ({{ row.email }})</span>
        </template>
      </el-table-column>
      <el-table-column label="Apply Date" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.applyDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Hired Date" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.hiredDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Time To Hire" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.hiredDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchHiredList } from '@/api/report'
import waves from '@/directive/waves' // waves directive

export default {
  name: 'TimeToHire',
  directives: { waves },
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
      // listLoading: true
      listLoading: false
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchHiredList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
