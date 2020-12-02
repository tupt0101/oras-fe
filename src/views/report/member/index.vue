<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row style="background:#fff;padding:0px 16px 16px 16px; margin-bottom:32px;">
      <candidate-status />
    </el-row>

    <el-row style="background:#fff;padding:0px 16px 16px 16px; margin-bottom:32px;">
      <time-to-hire />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TimeToHire from './components/TimeToHire'
import CandidateStatus from './components/CandidateStatus'
// import TransactionTable from './components/TransactionTable'

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
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TimeToHire,
    CandidateStatus
    // TransactionTable,
  },
  data() {
    return {
      lineChartData: lineChartData.totalJobs
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
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
