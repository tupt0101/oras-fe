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

          <div class="price-container" style="height: 93px">
            <div class="box-center">
              <div class="text-center">
                <span v-if="pack.price > 0">
                  <span class="price">{{ pack.currency | currencyFilter }}{{ pack.price | toThousandFilter }}</span>
                  <!-- <span class="unit">/{{ pack.duration }}</span> -->
                  <span class="unit">/month</span>
                </span>
                <span v-if="pack.price === 0">
                  <span class="price">Trial<br>Package</span>
                </span>
              </div>
              <div class="text-center">
                <p v-if="pack.tag === 'ENTRY'" class="tag entry">{{ pack.tag }}</p>
                <p v-if="pack.tag === 'MOST POPULAR'" class="tag popular">{{ pack.tag }}</p>
                <p v-if="pack.tag === 'MOST SAVING'" class="tag saving">{{ pack.tag }}</p>
              </div>
            </div>
          </div>

          <div class="user-bio">
            <div class="user-education user-bio-section">
              <div class="user-bio-section-header">
                <!-- <svg-icon icon-class="list" /><span>Detail</span> -->
              </div>
              <div class="user-bio-section-body" style="height: 170px">
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> {{ pack.numOfPost }} Jobs per Month
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Publish Jobs via OpenJob platform
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Application Alerts
                </div>
                <div v-if="pack.price !== 0" class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Screen Resume using AI
                </div>
                <div class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> Sort and Comment on Candidates
                </div>
                <div v-if="pack.price !== 0" class="text-muted">
                  <i class="el-icon-check" style="color: green; font-weight: 700; font-size: 15px" /> View Recruitment Report
                </div>
              </div>
            </div>

            <div class="text-center">
              <div v-if="pack.price !== 0">
                <router-link :to="'/checkout/index/' + pack.id">
                  <el-button class="myBtn" type="primary">Buy Now</el-button>
                </router-link>
                <div class="package-note">*Billed monthly</div>
              </div>
              <div v-if="pack.price === 0">
                <el-button :loading="btnLoading" class="myBtn" type="success" @click="getStarterPackage">Get Free</el-button>
                <div class="package-note">*Only first-time member</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="showDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="hasError ? 'failed' : 'success'" /> {{ dialogTitle }}</span>
      <p class="message" v-html="message" />
    </el-dialog>

  </div>
</template>

<script>
import { fetchPackageList, getStarterPack } from '@/api/package'
import { fetchActivePackageList } from '../../../api/package'

export default {
  filters: {
    currencyFilter(currency) {
      const currencyMap = {
        VND: '₫',
        USD: '$',
        EUR: '€',
        SGD: 'S$',
        CNY: '¥',
        JPY: 'JP¥'
      }
      return currencyMap[currency]
    }
  },
  data() {
    return {
      list: null,
      listLoading: false,
      dialogTitle: '',
      message: '',
      showDialog: false,
      btnLoading: false,
      hasError: false
    }
  },
  computed: {
    accountId() {
      return this.$store.state.user.accId
    }
  },
  created() {
    this.getPackageList()
  },
  methods: {
    getPackageList() {
      this.listLoading = true
      fetchActivePackageList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    getStarterPackage() {
      this.btnLoading = true
      getStarterPack(this.accountId)
        .then(response => {
          this.dialogTitle = 'Register Successfully!'
          this.message = 'You can publish ' + response.data.numOfPost + ' free job post until the end of ' + (new Date(response.data.validTo)).toLocaleString('en-US', { dateStyle: 'long' })
          this.showDialog = true
          this.btnLoading = false
        })
        .catch(err => {
          this.dialogTitle = 'Something went wrong!'
          this.hasError = true
          if (err.response.data.status === 406) {
            this.message = 'This trial package is one-time use only.<br>Please try to select and purchase other packages!'
          }
          this.showDialog = true
          this.btnLoading = false
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
    font-size: 0.8rem;
    text-transform: uppercase;
    display: inline-block;
    padding: 4px 30px;
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .entry {
    background-color: #287ab9;
  }

  .popular {
    background-color: #85ce3f;
  }

  .saving {
    background-color: #FDB816;
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

.message {
  margin-left: 10px;
  font-size: 1.15em;
}

.myBtn {
  font-weight: 700;
  font-size: 16px;
  width: 150px;
}

.package-note {
  margin-top: 10px;
  font-size: 0.7rem;
}
</style>
