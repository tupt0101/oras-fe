<template>
  <div class="app-container">
    <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="title-container">
          <strong style="font-size: 36px">{{ list[0].jobByJobId.title }}</strong><br>
          <div style="padding: 10px 0px">
            <!-- <strong>{{ list[0].companyById.name }}</strong> -->
            <strong>Company name</strong>
            <span style="margin-left: 30px">Apply to: {{ list[0].jobByJobId.applyTo | parseTime('{y}-{m}-{d}') }}</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="filter-container" style="float: right">
          <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-select v-model="listQuery.importance" placeholder="Imp" clearable style="width: 90px" class="filter-item">
            <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
          </el-select>
          <el-select v-model="listQuery.type" placeholder="Type" clearable class="filter-item" style="width: 130px">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
          </el-select>
          <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
            <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>
          <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
            Search
          </el-button>

          <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
            Export
          </el-button> -->
          <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
            Add
          </el-button>
          <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
            reviewer
          </el-checkbox> -->

          <el-button v-waves class="filter-item" type="success" @click="rankCV">
            Rank CV
          </el-button>

        </div>
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Full name" min-width="150px">
        <template slot-scope="{row}">
          <span style="white-space: nowrap">{{ row.candidateByCandidateId.fullname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Email" align="center" width="240px">
        <template slot-scope="{row}">
          <span>{{ row.candidateByCandidateId.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Phone number" align="center" width="160px">
        <template slot-scope="{row}">
          <span>{{ row.candidateByCandidateId.phoneNo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Apply date" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.applyDate | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Source" width="180px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.source }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Resume" width="90px" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="small" icon="el-icon-paperclip" @click="openCV(row.cv)">
            <!-- Edit -->
          </el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Matching Rank" width="180px">
        <template slot-scope="{row}">
          <span>{{ row.score }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { fetchCandidateList, fetchApplicationFromRP, rankCV } from '@/api/candidate'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'CandidateList',
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
      },
      jobId: ''
    }
  },
  created() {
    this.jobId = this.$route.params && this.$route.params.id
    this.getApplications(this.jobId)
  },
  methods: {
    openCV(link) {
      window.open(link, '_blank')
    },
    getApplications() {
      this.listLoading = true
      fetchApplicationFromRP(this.jobId).then(response => {
        // this.list = response
        fetchCandidateList(this.jobId).then(response => {
          this.list = response.data
          // debugger
          this.total = response.data
          this.listLoading = false
        })
        // this.listLoading = false
      })
    },
    rankCV() {
      this.listLoading = true
      rankCV(this.jobId).then(response => {
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
.title-containe {
  padding-bottom: 10px;
}
</style>
