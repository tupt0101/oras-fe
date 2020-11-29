<template>
  <div class="list">
    <el-row>
      <div class="heading">
        <h2>Find, contact, and hire high-quality candidates faster than ever.</h2>
        <p>Our subscription plans were built to fit your individual hiring needs. Bundle and save to take full advantage of some of the best AI out there, today.</p>
      </div>
    </el-row>
    <el-row :gutter="10">
      <el-col v-for="pack in list" :key="pack.id" :pack="pack" :span="6" :xs="6">
        <el-card>
          <div slot="header" class="clearfix" style="text-align: center">
            <span style="font-weight: 700; color: #5D677A;">{{ pack.name }}</span>
          </div>

          <div class="price-container">
            <div class="box-center">
              <div class="text-center">
                <span class="price">{{ pack.currency }}{{ pack.price }}</span>
                <span class="unit">/{{ pack.duration }}</span>
              </div>
              <div class="text-center">
                <p class="tag">ENTRY</p>
              </div>
            </div>
          </div>

          <div class="user-bio">
            <div class="user-education user-bio-section">
              <div class="user-bio-section-header">
                <!-- <svg-icon icon-class="list" /><span>Detail</span> -->
              </div>
              <div class="user-bio-section-body">
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> {{ pack.numOfPost }} Jobs per Month
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Publish Jobs via OpenJob platform
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Application Alerts
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Matches Candidate using AI
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Sort, Rank and Comment on Candidates
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> View Recruitment Report
                </div>
              </div>
            </div>

            <div class="text-center">
              <router-link :to="'/checkout/' + pack.id">
                <el-button type="primary" style="font-weight: 700; font-size: 16px; width: 150px;">Buy Now</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { fetchPackageList } from '@/api/package'

export default {
  data() {
    return {
      list: null,
      listLoading: false
    }
  },
  created() {
    this.getPackageList()
  },
  methods: {
    getPackageList() {
      this.listLoading = true
      fetchPackageList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
  margin-bottom: 100px;
}

.heading {
  h2 {
    color: #182642;
    line-height: 1.25;
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: 300;
  }

  p {
    color: #182642;
    line-height: 1.25;
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 200;
  }
}

.list {
  width: 1160px;
  margin: auto
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
  font-size: 0.95em;
  margin-bottom: 8px;
  font-weight: 500;
}

.price-container {
  .price {
    font-size: 2em;
    color: #182642;
    font-weight: 700;
  }

  .unit {
    margin-left: 6px;
    font-size: 0.75em;
    font-weight: 600;
  }
  .box-center {
    padding-top: 10px;
  }

  .tag {
    color: white;
    font-size: 0.6875rem;
    text-transform: uppercase;
    display: inline-block;
    padding: 2px 30px;
    border-radius: 10px;
    margin-bottom: 12px;
    background-color: #287ab9;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      margin-bottom: 10px;
      padding-bottom: 10px;
      font-weight: bold;
    }

    .user-bio-section-body {
      border-bottom: 1px solid #dfe6ec;
      margin-bottom: 10px;
      padding-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
