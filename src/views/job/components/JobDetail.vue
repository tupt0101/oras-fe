<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+ postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          Publish
        </el-button>
        <el-button v-loading="loading" type="warning" @click="draftForm">
          Save
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <!-- <Warning /> -->

          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="postForm.title" :maxlength="100" name="name" required>
                Title
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="6">
                  <el-form-item label-width="70px" label="Deadline:" class="postInfo-container-item" prop="applyTo">
                    <el-date-picker v-model="postForm.applyTo" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="Choose date and time" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label-width="120px" label="Vacancies:" class="postInfo-container-item">
                    <el-input-number v-model="postForm.vacancies" placeholder="1" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="120px" label="Job Type:" class="postInfo-container-item" prop="jobType">
                    <el-select v-model="postForm.jobType" :remote-method="getJobTypeList" filterable default-first-option remote placeholder="">
                      <el-option v-for="(item,index) in jobTypeListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="80px" label="Category:" class="postInfo-container-item" prop="category">
                    <el-select v-model="postForm.category" :remote-method="getCategoryList" filterable remote placeholder="" prop="category">
                      <el-option v-for="(item,index) in categoryListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label-width="110px" label="Salary hidden:" class="postInfo-container-item" prop="salaryHidden">
                    <el-checkbox v-model="postForm.salaryHidden" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label-width="120px" label="Salary from:" class="postInfo-container-item" prop="salaryFrom">
                    <el-input-number v-model="postForm.salaryFrom" placeholder="00.00" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="120px" label="Salary to:" class="postInfo-container-item" prop="salaryTo">
                    <el-input-number v-model="postForm.salaryTo" placeholder="00.00" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="80px" label="Currency:" class="postInfo-container-item" prop="currency">
                    <el-select v-model="postForm.currency" :remote-method="getCurrencyList" filterable default-first-option remote placeholder="">
                      <el-option v-for="(item,index) in currencyListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item label-width="121px" label="Job description:" />
        <el-form-item prop="description" style="margin-bottom: 30px;">
          <Tinymce ref="editor" v-model="postForm.description" :height="400" />
        </el-form-item>
      </div>
    </el-form>

    <el-dialog :visible.sync="showDialog" width="33%">
      <span slot="title"><svg-icon class-name="size-icon" :icon-class="hasError ? 'failed' : 'success'" /> {{ dialogTitle }}</span>
      <p class="message" v-html="message" />
    </el-dialog>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
// import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
import { getAccountId } from '../../../utils/auth'
import { createJob, fetchCategory, publishJob, fetchJob } from '@/api/job'
import { uppercaseFirst } from '../../../filters'
import { validDigits } from '../../../utils/validate'

const defaultForm = {
  method: '',
  display_time: undefined,
  id: undefined,
  // platforms: ['a-platform'],
  // comment_disabled: false,
  // importance: 0
  data: {
    status: 'Draft',
    title: '',
    description: '',
    applyTo: '',
    applyFrom: new Date().toISOString(),
    salaryFrom: '',
    salaryTo: '',
    salaryHidden: false,
    currency: '',
    vacancies: 1,
    jobType: '',
    category: '',
    talentPoolId: 1,
    createDate: new Date().toISOString(),
    creatorId: getAccountId()
  }
}

export default {
  name: 'JobDetail',
  components: {
    Tinymce,
    MDinput,
    // Upload,
    Sticky
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    isReopen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      let item = rule.field
      if (item === 'applyTo') {
        item = 'deadline'
      }
      if (value === '') {
        callback(new Error(uppercaseFirst(item) + ' is required'))
      } else {
        callback()
      }
    }
    const validateTitle = (rule, value, callback) => {
      const item = rule.field
      if (value === '') {
        callback(new Error(uppercaseFirst(item) + ' is required'))
      } else if (validDigits(value)) {
        callback(new Error(uppercaseFirst(item) + ' must not be a digit'))
      } else {
        callback()
      }
    }
    const validateCurrency = (rule, value, callback) => {
      const item = rule.field
      if (value === '') {
        callback(new Error(uppercaseFirst(item) + ' is required'))
      } else if (this.postForm.currency) {
        console.log(this.postForm.currency)
        console.log(this.postForm.err)
        let isWrong = false
        if (this.postForm.salaryFrom > this.postForm.salaryTo) {
          isWrong = true
        }
        switch (this.postForm.currency) {
          case 'VND':
            if (this.postForm.salaryFrom < 1000000 || this.postForm.salaryTo > 1000000000) {
              isWrong = true
            }
            break
          case 'USD':
            // https://countryeconomy.com/national-minimum-wage/usa
            // https://www.investopedia.com/personal-finance/top-highest-paying-jobs/
            if (this.postForm.salaryFrom < 1200 || this.postForm.salaryTo > 25000) {
              isWrong = true
            }
            break
          case 'SGD':
            // Salaries in Singapore range from 2,140 SGD per month (minimum salary) to 37,700 SGD per month (maximum average salary, actual maximum is higher).
            // http://www.salaryexplorer.com/salary-survey.php?loc=196&loctype=1#:~:text=Salaries%20in%20Singapore%20range%20from,%2C%20actual%20maximum%20is%20higher).
            if (this.postForm.salaryFrom < 2100 || this.postForm.salaryTo > 40000) {
              isWrong = true
            }
            break
          case 'EUR':
            // Minimum wages in the EU Member States ranged from €312 to €2 142 per month in July 2020.
            // https://ec.europa.eu/eurostat/statistics-explained/index.php/Minimum_wage_statistics#:~:text=Minimum%20wages%20in%20the%20EU,per%20month%20in%20July%202020.
            if (this.postForm.salaryFrom < 300 || this.postForm.salaryTo > 20000) {
              isWrong = true
            }
            break
          case 'JPY':
            // Salaries in Japan range from 130,000 JPY per month (minimum salary) to 2,300,000 JPY per month (maximum average salary, actual maximum is higher).
            // http://www.salaryexplorer.com/salary-survey.php?loc=107&loctype=1#:~:text=Salaries%20in%20Japan%20range%20from,%2C%20actual%20maximum%20is%20higher).
            if (this.postForm.salaryFrom < 130000 || this.postForm.salaryTo > 2300000) {
              isWrong = true
            }
            break
          case 'CNY':
            // The minimum wage in China is set locally; ranges from RMB1,120 ($161.07) per month, or RMB10. 60 ($1.52) per hour in Liaoning; to RMB2,420 ($348.02) per month, or RMB21.
            // https://en.wikipedia.org/wiki/List_of_minimum_wages_by_country#:~:text=The%20minimum%20wage%20in%20China,)%20per%20month%2C%20or%20RMB21.
            // Salaries in China range from 7,410 CNY per month (minimum salary) to 131,000 CNY per month (maximum average salary, actual maximum is higher).
            // http://www.salaryexplorer.com/salary-survey.php?loc=44&loctype=1#:~:text=Salaries%20in%20China%20range%20from,%2C%20actual%20maximum%20is%20higher).
            if (this.postForm.salaryFrom < 1100 || this.postForm.salaryTo > 131000) {
              isWrong = true
              break
            }
        }
        if (isWrong) {
          this.$message({
            message: 'Salary range is not reasonable',
            type: 'error'
          })
          // callback(new Error('Salary range is not reasonable'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    return {
      postForm: Object.assign({}, defaultForm.data),
      loading: false,
      currencyListOptions: [],
      categoryListOptions: [],
      jobTypeListOptions: [],
      rules: {
        title: [{ validator: validateTitle }],
        applyTo: [{ validator: validateRequire }],
        jobType: [{ validator: validateRequire }],
        category: [{ validator: validateRequire }],
        salaryFrom: [{ validator: validateCurrency, trigger: 'blur' }],
        salaryTo: [{ validator: validateCurrency, trigger: 'blur' }],
        currency: [{ validator: validateCurrency, trigger: 'blur' }],
        description: [{ validator: validateRequire }]
      },
      tempRoute: {},
      message: '',
      showDialog: false,
      btnLoading: false,
      hasError: false,
      dialogTitle: ''
    }
  },
  computed: {
    displayTime: {
      // set and get is useful when the data
      // returned by the back end api is different from the front end
      // back end return => "2013-06-25 06:59:25"
      // front end need timestamp => 1372114765000
      get() {
        return (+new Date(this.postForm.display_time))
      },
      set(val) {
        this.postForm.display_time = new Date(val)
      }
    },
    accountId() {
      return this.$store.state.user.accId
    }
  },
  created() {
    this.getCategoryList('')
    this.getJobTypeList('')
    this.getCurrencyList('')
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
      this.method = 'put'
    } else {
      this.method = 'post'
    }
    if (this.isReopen) {
      this.method = 'post'
    }
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    fetchData(id) {
      fetchJob(id).then(response => {
        // auto fill data when edit
        this.postForm = response.data
        delete this.postForm.accountByCreatorId
        delete this.postForm.talentPoolByTalentPoolId
        if (this.isReopen) {
          delete this.postForm.id
          this.postForm.status = 'Draft'
        }

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = 'Edit Job'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Edit Job'
      document.title = `${title} - ${this.postForm.id}`
    },
    submitForm() {
      if (this.postForm.description.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: 'Please fill in the required title and contents',
          type: 'warning'
        })
        return
      }
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.applyFrom = new Date().toISOString()
          this.postForm.applyTo = new Date(this.postForm.applyTo + 'Z').toISOString()
          createJob(this.postForm, this.method).then(response => {
            this.postForm.id = response.data.id
            publishJob(this.postForm.id).then(response => {
              this.$notify({
                title: 'Success',
                message: 'Published the post successfully',
                type: 'success',
                duration: 2000
              })
            }).catch(err => {
              this.dialogTitle = err.response.data.message
              this.hasError = true
              if (err.response.data.status === 402) {
                this.message = 'You have run out of job posts.<br>Please try to select and purchase other packages!'
              }
              this.showDialog = true
              this.loading = false
            })
            this.loading = false
            this.$router.back()
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    draftForm() {
      if (this.postForm.description.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: 'Please fill in the required title and contents',
          type: 'warning'
        })
        return
      }
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.postForm.applyFrom = new Date().toISOString()
          this.postForm.applyTo = new Date(this.postForm.applyTo + 'Z').toISOString()
          this.loading = true
          createJob(this.postForm, this.method).then(response => {
            this.$notify({
              title: 'Success',
              message: 'Save the post successfully',
              type: 'success',
              duration: 2000
            })
            this.loading = false
            if (this.isReopen) {
              this.$router.push('/job/edit/' + response.data.id)
            } else {
              this.fetchData(response.data.id)
            }
          })
            .catch(error => {
              this.$message({
                message: error.response.data.message,
                type: 'warning'
              })
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getCategoryList(query) {
      fetchCategory().then(response => {
        if (!response.data) return
        const filterList = response.data.filter(item => {
          const lowerCase = item.name.toLowerCase()
          return !(query && lowerCase.indexOf(query.toLowerCase()) < 0)
        })
        this.categoryListOptions = filterList.map(v => v.name)
      })
    },
    getCurrencyList(query) {
      const CurrencyList = [{ 'name': 'VND' }, { 'name': 'USD' }, { 'name': 'SGD' }, { 'name': 'EUR' }, { 'name': 'JPY' }, { 'name': 'CNY' }]
      const filterList = CurrencyList.filter(item => {
        const lowerCase = item.name.toLowerCase()
        return !(query && lowerCase.indexOf(query.toLowerCase()) < 0)
      })
      this.currencyListOptions = filterList.map(v => v.name)
    },
    getJobTypeList(query) {
      const JobTypeList = [{ 'name': 'Full-time' }, { 'name': 'Part-time' }]
      const filterList = JobTypeList.filter(item => {
        const lowerCase = item.name.toLowerCase()
        return !(query && lowerCase.indexOf(query.toLowerCase()) < 0)
      })
      this.jobTypeListOptions = filterList.map(v => v.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}

.message {
  margin-left: 10px;
  font-size: 1.15em;
}

</style>
