<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:0px 16px 16px 16px; margin-bottom:32px;">
      <candidate-status />
    </el-row>

    <el-row style="background:#fff;padding:0px 16px 16px 16px; margin-bottom:32px;">
      <time-to-hire />
    </el-row>

    <el-row :gutter="32">
      <!-- <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col> -->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <job-by-category v-if="jobByCate" :chart-data="jobByCate" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <candidate-by-category v-if="candidateByCate" :chart-data="candidateByCate" />
        </div>
      </el-col>
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <!-- <line-chart :chart-data="lineChartData" /> -->
      <average-salary v-if="avgSalaryData" :chart-data="avgSalaryData" />
    </el-row>

  </div>
</template>

<script>
// import TransactionTable from './components/TransactionTable'
import PanelGroup from './components/PanelGroup'
// import LineChart from './components/LineChart'
import AverageSalary from './components/AvgSalary'
// import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TimeToHire from './components/TimeToHire'
import CandidateStatus from './components/CandidateStatus'
import JobByCategory from './components/JobByCategory'
import CandidateByCategory from './components/CandidateByCategory'

import {
  fetchAverageSalary,
  fetchAverageSalaryOfAccount,
  fetchJobByCategoryOfAccount,
  fetchCandidateByCategoryOfAccount
} from '@/api/report'

const lineChartData = {
  totalJobs: {
    expectedData: [100, 120, 161, 134, 105, 160, 165, 133, 101, 99, 122, 150],
    actualData: [120, 82, 91, 154, 162, 140, 145, 161, 134, 105, 160, 165]
  },
  openJobs: {
    expectedData: [200, 192, 120, 144, 160, 130, 140, 160, 151, 106, 145, 150],
    actualData: [180, 160, 151, 106, 145, 150, 130, 144, 160, 130, 140, 160]
  },
  applications: {
    expectedData: [80, 100, 121, 104, 105, 90, 100, 90, 100, 138, 142, 130],
    actualData: [120, 90, 100, 138, 142, 130, 130, 100, 121, 104, 105, 90]
  },
  hired: {
    expectedData: [130, 140, 141, 142, 145, 150, 160, 91, 154, 162, 140, 130],
    actualData: [120, 82, 91, 154, 162, 140, 130, 130, 140, 141, 142, 145]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // TransactionTable,
    PanelGroup,
    // LineChart,
    AverageSalary,
    // RaddarChart,
    // PieChart,
    BarChart,
    TimeToHire,
    CandidateStatus,
    JobByCategory,
    CandidateByCategory
  },
  data() {
    return {
      lineChartData: lineChartData.totalJobs,
      avgSalaryData: {
        category: [],
        systemData: [],
        userData: []
      },
      jobByCate: {
        category: [],
        userData: []
      },
      candidateByCate: {
        category: [],
        userData: []
      }
    }
  },
  computed: {
    accountId() {
      return this.$store.state.user.accId
    },
    baseCurrency() {
      const lang = this.$store.getters.language
      return lang === 'vi' ? 'vnd' : 'usd'
    }
  },
  created() {
    this.getSalaryData()
    this.getJobData()
    this.getCandidateData()
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    getSalaryData() {
      fetchAverageSalary(this.baseCurrency).then(response => {
        this.avgSalaryData.category = response.data.map(cat => cat.category)
        this.avgSalaryData.systemData = response.data.map(cat => cat.averageSalary)
      })
      fetchAverageSalaryOfAccount(this.accountId, this.baseCurrency).then(response => {
        this.avgSalaryData.userData = response.data.map(cat => cat.averageSalary)
      })
    },
    // async getJobData() {
    //   const response = await fetch(
    //     `/v1/report-management/total-application-of-account-by-category/${this.accountId}`,
    //     {
    //       method: 'get'
    //     })

    //   const filteredData = await response.data.filter(item => item.numOfPost > 0)
    //   this.jobByCate.category = filteredData.map(item => item.category)
    //   this.jobByCate.userData = filteredData.map(item => ({ value: item.numOfPost, name: item.category }))
    // },
    getJobData() {
      fetchJobByCategoryOfAccount(this.accountId).then(response => {
        const filteredData = response.data.filter(item => item.numOfPost > 0)
        this.jobByCate.category = filteredData.map(item => item.category)
        this.jobByCate.userData = filteredData.map(item => ({ value: item.numOfPost, name: item.category }))
      })
    },
    getCandidateData() {
      fetchCandidateByCategoryOfAccount(this.accountId).then(response => {
        const filteredData = response.data.filter(item => item.numOfApplication > 0)
        this.candidateByCate.category = filteredData.map(item => item.category)
        this.candidateByCate.userData = filteredData.map(item => ({ value: item.numOfApplication, name: item.category }))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
