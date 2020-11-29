<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+ postForm.data.status">
        <CommentDropdown v-model="postForm.comment_disabled" />
        <PlatformDropdown v-model="postForm.platforms" />
        <SourceUrlDropdown v-model="postForm.source_uri" />
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          Publish
        </el-button>
        <el-button v-loading="loading" type="warning" @click="draftForm">
          Draft
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <!-- <Warning /> -->

          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="postForm.data.title" :maxlength="100" name="name" required>
                Title
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="6">
                  <el-form-item label-width="70px" label="Deadline:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.data.applyTo" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="Choose date and time" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label-width="120px" label="Vacancies:" class="postInfo-container-item">
                    <el-input-number v-model="postForm.data.vacancies" placeholder="00.00" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="120px" label="Job Type:" class="postInfo-container-item" prop="jobType">
                    <el-select v-model="postForm.data.jobType" :remote-method="getJobTypeList" filterable default-first-option remote placeholder="">
                      <el-option v-for="(item,index) in jobTypeListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="80px" label="Category:" class="postInfo-container-item">
                    <el-select v-model="postForm.data.categoryId" :remote-method="getCategoryList" filterable default-first-option remote placeholder="">
                      <el-option v-for="(item,index) in categoryListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label-width="110px" label="Salary hidden:" class="postInfo-container-item">
                    <el-checkbox v-model="postForm.data.salaryHidden" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label-width="120px" label="Salary from:" class="postInfo-container-item">
                    <el-input-number v-model="postForm.data.salaryFrom" placeholder="00.00" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="120px" label="Salary to:" class="postInfo-container-item">
                    <el-input-number v-model="postForm.data.salaryTo" placeholder="00.00" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="80px" label="Currency:" class="postInfo-container-item">
                    <el-select v-model="postForm.data.currency" :remote-method="getCurrencyList" filterable default-first-option remote placeholder="">
                      <el-option v-for="(item,index) in currencyListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item label-width="121px" label="Job description:">
          <!--          <el-input v-model="postForm.data.description" :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please enter the description" />-->
          <!--          <span v-show="contentShortLength" class="word-counter">{{ contentShortLength }}words</span>-->
        </el-form-item>
        <el-form-item prop="description" style="margin-bottom: 30px;">
          <Tinymce ref="editor" v-model="postForm.data.description" :height="400" />
        </el-form-item>

        <!-- <el-form-item prop="image_uri" style="margin-bottom: 30px;">
          <Upload v-model="postForm.image_uri" />
        </el-form-item> -->
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
// import Upload from '@/components/Upload/SingleImage3'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import { validURL } from '@/utils/validate'
import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
import { getAccountId } from '../../../utils/auth'
import { createJob, fetchCategory, publishJob, fetchJob } from '@/api/job'

const defaultForm = {
  method: '',
  source_uri: '',
  image_uri: '',
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
    // applyFrom: '',
    applyFrom: new Date().toISOString(),
    salaryFrom: '',
    salaryTo: '',
    salaryHidden: false,
    currency: '',
    vacancies: 0,
    jobType: '',
    categoryId: '',
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
    Sticky, CommentDropdown, PlatformDropdown, SourceUrlDropdown },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + ' is required',
          type: 'error'
        })
        callback(new Error(rule.field + ' is required'))
      } else {
        callback()
      }
    }
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback()
        } else {
          this.$message({
            message: '外链url填写不正确',
            type: 'error'
          })
          callback(new Error('外链url填写不正确'))
        }
      } else {
        callback()
      }
    }
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      currencyListOptions: [],
      categoryListOptions: [],
      jobTypeListOptions: [],
      rules: {
        // image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
      },
      tempRoute: {}
    }
  },
  computed: {
    // contentShortLength() {
    //   return this.postForm.data.description.length
    // },
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
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
      this.method = 'put'
    } else {
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
        this.postForm.data = response.data
        delete this.postForm.data.accountByCreatorId
        delete this.postForm.data.talentPoolByTalentPoolId

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = 'Edit Article'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Edit Article'
      document.title = `${title} - ${this.postForm.id}`
    },
    submitForm() {
      if (this.postForm.data.description.length === 0 || this.postForm.data.title.length === 0) {
        this.$message({
          message: 'Please fill in the required title and contents',
          type: 'warning'
        })
        return
      }
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.data.status = 'Published'
          this.postForm.data.applyFrom = new Date().toISOString()
          createJob(this.postForm.data, this.method).then(response => {
            this.postForm.id = response.data.id
            publishJob(this.postForm.id).then(response => {
              this.$notify({
                title: 'Success',
                message: 'Published the post successfully',
                type: 'success',
                duration: 2000
              })
            }).catch(() => {
              this.loading = false
            })
            this.loading = false
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
      if (this.postForm.data.description.length === 0 || this.postForm.data.title.length === 0) {
        this.$message({
          message: 'Please fill in the required title and contents',
          type: 'warning'
        })
        return
      }
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.data.status = 'Draft'
          createJob(this.postForm.data, this.method).then(response => {
            this.$notify({
              title: 'Success',
              message: 'Save the post successfully',
              type: 'success',
              duration: 2000
            })
            this.loading = false
            this.postForm.id = response.data.id
          })
            .catch(() => {
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
      const CurrencyList = [{ 'name': 'VND' }, { 'name': 'USD' }, { 'name': 'SGD' }, { 'name': 'JPY' }, { 'name': 'CNY' }]
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
</style>
