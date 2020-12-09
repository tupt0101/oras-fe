<template>
  <div class="app-container">
    <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="title-container">
          <strong style="font-size: 36px">{{ job && job.title }}</strong><br>
          <div style="padding: 10px 0px">
            <strong>{{ job && job.accountByCreatorId.companyById.name }}</strong>
            <!-- <strong>Company name</strong> -->
            <!-- <span style="margin-left: 30px">Posted: {{ job.createDate | parseTime('{y}-{m}-{d}') }}</span>
            <span style="margin-left: 30px">Deadline: {{ job.applyTo | parseTime('{y}-{m}-{d}') }}</span> -->
            <span style="margin-left: 30px">Posted: {{ job && (new Date(job.createDate)).toLocaleString() }}</span>
            <span style="margin-left: 30px">Deadline: {{ job && (new Date(job.applyTo)).toLocaleString() }}</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="filter-container" style="float: right">
          <!-- <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
          </el-button> -->

          <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
            Export
          </el-button> -->
          <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
            Add
          </el-button>
          <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
            reviewer
          </el-checkbox> -->

          <el-button class="filter-item" type="primary" @click="refresh">
            Get applications
          </el-button>
          <el-button class="filter-item" type="success" @click="rankCV">
            Rank CV
          </el-button>

        </div>
      </el-col>
    </el-row>

    <el-table v-if="!list" v-loading="listLoading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="No." width="80" />
      <el-table-column label="Full name" min-width="150px" />
      <el-table-column label="Email" align="center" width="240px" />
      <el-table-column label="Phone number" align="center" width="160px" />
      <el-table-column label="Apply date" width="200px" align="center" />
      <el-table-column label="Source" width="180px" align="center" />
      <el-table-column label="Status" class-name="status-col" width="100" />
      <el-table-column align="center" label="Resume" width="90px" class-name="small-padding fixed-width" />
      <el-table-column align="center" label="Matching Rank" width="180px" />
    </el-table>
    <el-table v-if="list" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column type="index" align="center" label="No." width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 + (listQuery.page - 1)*listQuery.limit }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Full name" min-width="150px">
        <template slot-scope="{row}">
          <div class="link-type" @click="viewDetail(row)">
            <span style="white-space: nowrap">{{ row.candidateByCandidateId.fullname }}</span>
          </div>
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
          <!-- <span>{{ row.applyDate | parseTime('{y}-{m}-{d}') }}</span> -->
          <span>{{ (new Date(row.applyDate)).toLocaleString() }}</span>
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
          <span>{{ row.matchingRate }}%</span>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Candidate Detail" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="70px" style="width: 90%; margin-left:50px;">
        <el-form-item label="Full name:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.candidateByCandidateId.fullname }}</span>
        </el-form-item>
        <el-form-item label="Email:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.candidateByCandidateId.email }}</span>
        </el-form-item>
        <el-form-item label="Phone number:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.candidateByCandidateId.phoneNo }}</span>
        </el-form-item>
        <el-form-item label="Address:" label-width="150px" style="margin-bottom: 0px">
          <span>{{ temp.candidateByCandidateId.address }}</span>
        </el-form-item>
        <el-form-item label="Status: " label-width="150px" style="margin-bottom: 0px">
          <el-tag :type="temp.status | statusFilter">
            {{ temp.status }}
          </el-tag>
        </el-form-item>
        <el-form-item label="Comment:" label-width="150px" style="margin-bottom: 0px;">
          <el-input v-model="temp.comment" type="textarea" :rows="5" />
        </el-form-item>
        <!-- <el-form-item label="" label-width="120px" style="margin-bottom: 0px; max-height: 320px; overflow-y: scroll">
          <span v-html="temp.description" />
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleComment(temp)">
          Save &amp; Close
        </el-button>
        <el-button v-if="!(temp.status === 'Hired')" type="success" @click="handleHireCandidate(temp)">
          Hire
        </el-button>
      </div>
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getApplications" />
  </div>
</template>

<script>
import { fetchCandidateList, fetchApplicationFromRP, rankCV, fetchTotalCandidate } from '@/api/candidate'
import { fetchJob } from '@/api/job'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'CandidateList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        Hired: 'success',
        Applied: 'primary',
        Reject: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      job: null,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      jobId: '',
      temp: {
        id: undefined,
        candidateId: '',
        matchingRate: 0,
        cv: 0,
        applyDate: '',
        hiredDate: '',
        source: '',
        status: '',
        comment: '',
        jobId: undefined,
        candidateByCandidateId: {
          id: undefined,
          fullname: '',
          emaill: '',
          address: '',
          phoneNo: ''
        },
        jobByJobId: null
      },
      dialogFormVisible: false
    }
  },
  created() {
    this.jobId = this.$route.params && this.$route.params.id
    this.fetchData(this.jobId)
    this.getTotal(this.jobId)
    this.getApplications(this.jobId)
  },
  methods: {
    fetchData(id) {
      fetchJob(id).then(response => {
        // auto fill data when edit
        this.job = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    openCV(link) {
      window.open(link, '_blank')
    },
    getTotal() {
      fetchTotalCandidate(this.jobId).then(response => {
        this.total = response.data.length
      })
    },
    getApplications() {
      this.listLoading = true
      fetchCandidateList(this.jobId, this.listQuery).then(response => {
        this.list = response.data
        this.listLoading = false
      }).catch(err => {
        this.listLoading = false
        console.log(err)
      })
    },
    refresh() {
      this.listLoading = true
      fetchApplicationFromRP(this.jobId).then(response => {
        // this.list = response
        fetchCandidateList(this.jobId, this.listQuery).then(response => {
          this.list = response.data
          this.listLoading = false
        })
        this.getTotal(this.jobId)
      }).catch(err => {
        this.listLoading = false
        console.log(err)
      })
    },
    rankCV() {
      this.listLoading = true
      rankCV(this.jobId, this.listQuery).then(response => {
        this.list = response.data
        // this.list.sort(function(a, b) { return (b - a) })
        this.listLoading = false
      }).catch(err => {
        this.listLoading = false
        console.log(err)
      })
    },
    viewDetail(candidate) {
      this.temp = Object.assign({}, candidate) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogFormVisible = true
    },
    handleComment(ja) {
      console.log('comment', ja)
    },
    handleHireCandidate(ja) {
      console.log('hire ', ja)
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
.title-container {
  padding-bottom: 10px;
}
</style>
