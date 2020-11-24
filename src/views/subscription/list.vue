<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Package name" width="200px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
          <!-- <el-tag>{{ row.title }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="Description" min-width="150px">
        <template slot-scope="{row}">
          <span style="white-space: nowrap">{{ row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Number of posts" align="center" width="135px">
        <template slot-scope="{row}">
          <span>{{ row.numOfPosts }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Duration" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.duration }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Price" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.currency }} {{ row.price }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="Actions" width="120px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/subscription/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              <!-- Edit -->
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
// import { fetchJobList } from '@/api/job'
import Pagination from '@/components/Pagination'
import { fetchSubscriptionList } from '../../api/article' // Secondary package based on el-pagination

export default {
  name: 'PackageList',
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
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchSubscriptionList().then(response => {
        this.list = response.data
        this.total = response.data
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
