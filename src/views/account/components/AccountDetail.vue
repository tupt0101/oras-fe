<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+ postForm.status">
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
            <div class="postInfo-container">
              <el-row>
                <el-col :span="12">
                  <el-form-item prop="fullname" label-width="130px" label="Full name:" class="postInfo-container-item">
                    <el-input
                      ref="fullname"
                      v-model="postForm.fullname"
                      style="width: 300px"
                      :placeholder="$t('register.fullname')"
                      name="fullname"
                      type="text"
                      :maxlength="fmaxLength.nameLength"
                      tabindex="1"
                      autocomplete="on"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                    <el-form-item prop="password" label-width="150px" label="Password:" class="postInfo-container-item">
                      <el-input
                        :key="passwordType"
                        ref="password"
                        v-model="postForm.password"
                        type="password"
                        :placeholder="$t('register.password')"
                        name="password"
                        tabindex="4"
                        autocomplete="on"
                        :maxlength="fmaxLength.passwordLength"
                        style="width: 300px"
                        @keyup.native="checkCapslock"
                        @blur="capsTooltip = false"
                      />
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item prop="email" label-width="130px" label="Email:" class="postInfo-container-item">
                    <el-input
                      ref="email"
                      v-model="postForm.email"
                      style="width: 300px"
                      :placeholder="$t('register.email')"
                      name="email"
                      type="text"
                      :maxlength="fmaxLength.emailLength"
                      tabindex="2"
                      autocomplete="on"
                      :readonly="isEdit"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                    <el-form-item prop="confirmPwd" label-width="150px" label="Confirm password:" class="postInfo-container-item">
                      <el-input
                        :key="passwordType"
                        ref="confirmPwd"
                        v-model="postForm.confirmPwd"
                        autocomplete="on"
                        type="password"
                        style="width: 300px"
                        tabindex="5"
                        placeholder="Please confirm your password"
                        :maxlength="fmaxLength.passwordLength"
                        @keyup.native="checkCapslock"
                        @blur="capsTooltip = false"
                      />
                    </el-form-item>
                  </el-tooltip></el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item prop="role" label-width="130px" label="Role:" class="postInfo-container-item">
                    <el-select v-model="postForm.role" tabindex="3" :remote-method="getRoleList" style="width: 300px" filterable default-first-option remote placeholder="Select a role">
                      <el-option v-for="(item,index) in roleListOptions" :key="item+index" :label="item" :value="item.toLowerCase()" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>

            <div v-if="postForm.role !== 'admin'" class="company-info">
              <h4 style="margin-left: 130px">COMPANY INFORMATION</h4>
              <el-row>
                <el-col :span="12">
                  <el-form-item prop="compName" label-width="130px" label="Company:" class="postInfo-container-item">
                    <el-input v-model="postForm.companyById.name" autocomplete="on" tabindex="6" style="width: 300px" :maxlength="fmaxLength.compNameLength" placeholder="Please enter the company name" />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item prop="compEmail" label-width="150px" label="Company email:" class="postInfo-container-item">
                    <el-input v-model="postForm.companyById.email" autocomplete="on" tabindex="9" type="text" :maxlength="fmaxLength.emailLength" style="width: 300px" placeholder="Please enter the company email" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item prop="taxCode" label-width="130px" label="Tax code:" class="postInfo-container-item">
                    <el-input v-model="postForm.companyById.taxCode" autocomplete="on" tabindex="7" style="width: 300px" type="text" :maxlength="fmaxLength.taxCodeLength" placeholder="Please enter the tax code" />
                  </el-form-item>

                </el-col>
                <el-col :span="12">
                  <el-form-item prop="compPhone" label-width="150px" label="Phone number:" class="postInfo-container-item">
                    <el-input v-model="postForm.companyById.phoneNo" autocomplete="on" tabindex="10" type="text" :maxlength="fmaxLength.phoneLength" autosize style="width: 300px" placeholder="Please enter the company phone number" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <el-form-item prop="location" label-width="130px" label="Location:" class="postInfo-container-item">
                    <el-input v-model="postForm.companyById.location" autocomplete="on" :maxlength="fmaxLength.locationLength" tabindex="8" style="width: 300px" placeholder="Please enter the company's location" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <el-form-item prop="description" label-width="130px" label="Description:">
                    <el-input v-model="postForm.companyById.description" :rows="1" tabindex="11" :maxlength="fmaxLength.compDesLength" autocomplete="on" type="textarea" class="article-textarea" autosize placeholder="Please enter the description" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
// import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
// import Warning from './Warning'
// import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
// import { getUserId } from '../../../utils/auth'

// @ la ref toi root folder do
import { createJob } from '../../../api/job'
import { createAccount, fetchAccount } from '../../../api/account'
import { validDigits, validEmail } from '../../../utils/validate'
import { maxLength } from '../../../store'
const defaultForm = {
  // content_short: '',
  source_uri: '',
  image_uri: '',
  display_time: undefined,
  id: undefined,
  // platforms: ['a-platform'],
  // comment_disabled: false,
  // importance: 0
  confirmPwd: '',
  method: '',
  fullname: '',
  email: '',
  password: '',
  role: 'User',
  avatar: 'https://paailajob.com/uploads/employer/profileImg/default.jpg',
  companyById: {
    name: '',
    email: '',
    taxCode: '',
    phoneNo: '',
    location: '',
    description: ''
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
    const validateFullName = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('The name can not be empty.'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter a valid email.'))
      } else {
        callback()
      }
    }
    const validateRole = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('The role can not be empty.'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (this.isEdit && (value.length > 0 && value.length < 6)) {
        callback(new Error('The password can not be less than 6 digits.'))
      } else if (!this.isEdit && value.length < 6) {
        callback(new Error('The password can not be less than 6 digits.'))
      } else {
        callback()
      }
    }
    const validateConfirmPwd = (rule, value, callback) => {
      if (!this.postForm.confirmPwd && !this.postForm.password) {
        this.postForm.confirmPwd = this.postForm.password
      }
      if (this.postForm.confirmPwd !== this.postForm.password) {
        callback(new Error('The confirmation password is invalid.'))
      } else {
        callback()
      }
    }
    const validatePhoneNo = (rule, value, callback) => {
      if (!validDigits(this.postForm.companyById.phoneNo)) {
        callback(new Error('The phone number only contains digits.'))
      } else {
        callback()
      }
    }
    const validateCompName = (rule, value, callback) => {
      if (this.postForm.companyById.name.length === 0) {
        callback(new Error('The company name can not be empty.'))
      } else {
        callback()
      }
    }
    const validateLocation = (rule, value, callback) => {
      if (this.postForm.companyById.location.length === 0) {
        callback(new Error('The location can not be empty.'))
      } else {
        callback()
      }
    }
    const validateCompEmail = (rule, value, callback) => {
      if (!validEmail(this.postForm.companyById.email)) {
        callback(new Error('Please enter a valid email.'))
      } else {
        callback()
      }
    }
    const validateTaxCode = (rule, value, callback) => {
      if (!validDigits(this.postForm.companyById.taxCode)) {
        callback(new Error('The tax code only contains digits.'))
      } else {
        callback()
      }
    }
    return {
      fmaxLength: maxLength,
      postForm: Object.assign({}, defaultForm),
      loading: false,
      roleListOptions: [],
      categoryListOptions: [],
      jobTypeListOptions: [],
      rules: {
        fullname: [{ required: true, trigger: 'blur', validator: validateFullName }],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirmPwd: [{ required: true, trigger: 'blur', validator: validateConfirmPwd }],
        role: [{ required: true, trigger: 'blur', validator: validateRole }],
        phoneNo: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        compName: [{ required: true, trigger: 'blur', validator: validateCompName }],
        location: [{ required: true, trigger: 'blur', validator: validateLocation }],
        compEmail: [{ required: true, trigger: 'blur', validator: validateCompEmail }],
        compPhone: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        taxCode: [{ required: true, trigger: 'blur', validator: validateTaxCode }]
      },
      passwordType: 'password',
      capsTooltip: false,
      tempRoute: {}
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
  mounted() {
    this.$refs.fullname.focus()
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    fetchData(id) {
      fetchAccount(id).then(response => {
        // auto fill data when edit
        this.postForm = response.data
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
          createAccount(this.postForm, this.method).then(response => {
            let infoMsg
            if (!this.isEdit) {
              infoMsg = 'Create account ' + this.postForm.data.email + ' successfully'
            } else {
              infoMsg = 'Update account ' + this.postForm.data.email + ' successfully'
            }
            this.$notify({
              title: 'Success',
              message: infoMsg,
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
    getRoleList(query) {
      this.roleListOptions = ['Admin', 'User'].map(v => v)
    },

    // create job
    createJob(data) {
      return new Promise((resolve, reject) => {
        createJob(data).then(response => {
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
