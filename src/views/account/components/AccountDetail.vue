<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+ postForm.data.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          Save
        </el-button>
        <!-- <el-button v-loading="loading" type="warning" @click="draftForm">
          Draft
        </el-button> -->
      </sticky>

      <div class="createPost-main-container">
        <el-row>

          <el-col :span="24">
            <!-- <el-form-item style="margin-bottom: 40px;" prop="name">
              <MDinput v-model="postForm.data.title" :maxlength="100" name="name" required>
                Package name
              </MDinput>
            </el-form-item> -->

            <div class="postInfo-container">
              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="130px" label="Full name:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.fullname" style="width: 300px" placeholder="Please enter the fullname" />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="150px" label="Password:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.password" type="password" style="width: 300px" placeholder="Please enter the password" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="130px" label="Email:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.email" style="width: 300px" placeholder="Please enter the email" />
                  </el-form-item>

                </el-col>
                <el-col :span="12">
                  <el-form-item label-width="150px" label="Confirm password:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.confirmPwd" type="password" style="width: 300px" placeholder="Please confirm your password" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="130px" label="Role:" class="postInfo-container-item">
                    <el-select v-model="postForm.data.role" :remote-method="getRoleList" style="width: 300px" filterable default-first-option remote placeholder="Select a role">
                      <el-option v-for="(item,index) in roleListOptions" :key="item+index" :label="item" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>

            <div v-if="postForm.data.role != 'admin'" class="company-info">
              <h4 style="margin-left: 130px">COMPANY INFORMATION</h4>
              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="130px" label="Company name:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.compName" style="width: 300px" placeholder="Please enter the company name" />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="150px" label="Company email:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.compEmail" type="password" style="width: 300px" placeholder="Please enter the company email" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="130px" label="Tax code:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.taxCode" style="width: 300px" placeholder="Please enter the tax code" />
                  </el-form-item>

                </el-col>
                <el-col :span="12">
                  <el-form-item label-width="150px" label="Phone number:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.compPhone" type="password" autosize style="width: 300px" placeholder="Please enter the company phone number" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <el-form-item label-width="130px" label="Location:" class="postInfo-container-item">
                    <el-input v-model="postForm.data.location" style="width: 300px" placeholder="Please enter the tax code" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <!-- <el-form-item label-width="95px" label="Description:">
          <el-input v-model="postForm.data.description" :rows="1" type="textarea" class="article-textarea" autosize placeholder="Please enter the description" />
          <span v-show="contentShortLength" class="word-counter">{{ contentShortLength }}words</span>
        </el-form-item> -->
      </div>
    </el-form>
  </div>
</template>

<script>
// import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import { validURL } from '@/utils/validate'
import { fetchArticle } from '@/api/article'
import { searchUser } from '@/api/remote-search'
// import Warning from './Warning'
// import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
// import { getUserId } from '../../../utils/auth'

// @ la ref toi root folder do
import { createJob } from '../../../api/job'

const defaultForm = {
  // content_short: '',
  source_uri: '',
  image_uri: '',
  display_time: undefined,
  id: undefined,
  // platforms: ['a-platform'],
  // comment_disabled: false,
  // importance: 0
  data: {
    fullname: '',
    email: '',
    password: '',
    role: '',
    compName: '',
    compEmail: '',
    compPhone: '',
    taxCode: '',
    location: ''
  }
}

export default {
  name: 'JobDetail',
  components: {
    // MDinput,
    Sticky
  },
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
      roleListOptions: [],
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
    contentShortLength() {
      return this.postForm.data.description.length
    },
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
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    }

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    fetchData(id) {
      fetchArticle(id).then(response => {
        // auto fill data when edit
        this.postForm = response.data

        // just for test
        this.postForm.data.title += `   Article Id:${this.postForm.id}`
        this.postForm.content_short += `   Article Id:${this.postForm.id}`

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
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.data.status = 'Published'
          createJob(this.postForm.data).then(response => {
            this.$notify({
              title: 'Success',
              message: 'Published the post successfully',
              type: 'success',
              duration: 2000
            })
            this.loading = false
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
    draftForm() {
      if (this.postForm.data.description.length === 0 || this.postForm.data.title.length === 0) {
        this.$message({
          message: 'Please fill in the required title and contents',
          type: 'warning'
        })
        return
      }
      this.postForm.data.status = 'Draft'
      this.$store.dispatch()
    },
    getRoleList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return
        // anhhy
        // this.userListOptions = response.data.items.map(v => v.name)
        this.roleListOptions = ['admin', 'user']
      })
    },
    getCategoryList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return
        // anhhy
        // this.userListOptions = response.data.items.map(v => v.name)
        this.categoryListOptions = [{ 'id': 1, 'name': 'aaa' }, { 'id': 2, 'name': 'bbb' }, { 'id': 3, 'name': 'ccc' }]
      })
    },
    getJobTypeList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return
        // anhhy
        // this.userListOptions = response.data.items.map(v => v.name)
        this.jobTypeListOptions = ['Full-time', 'Part-time']
      })
    },

    // create job
    createJob(data) {
      return new Promise((resolve, reject) => {
        createJob(data).then(response => {
          debugger
          this.$message({
            message: 'Saved successfully',
            type: 'success',
            showClose: true,
            duration: 1000
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
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
