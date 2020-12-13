<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+ postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          Save
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <h4 style="margin-left: 130px">COMPANY INFORMATION</h4>
            <el-row>
              <el-col :span="12">
                <el-form-item prop="compName" label-width="130px" label="Company:" class="postInfo-container-item">
                  <el-input v-model="postForm.name" :maxlength="fmaxLength.compNameLength" autocomplete="on" tabindex="6" style="width: 300px" placeholder="Please enter the company name" />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item prop="compEmail" label-width="150px" label="Company email:" class="postInfo-container-item">
                  <el-input v-model="postForm.email" autocomplete="on" tabindex="9" type="text" :maxlength="fmaxLength.emailLength" style="width: 300px" placeholder="Please enter the company email" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item prop="taxCode" label-width="130px" label="Tax code:" class="postInfo-container-item">
                  <el-input v-model="postForm.taxCode" autocomplete="on" tabindex="7" style="width: 300px" type="text" :maxlength="fmaxLength.taxCodeLength" placeholder="Please enter the tax code" />
                </el-form-item>

              </el-col>
              <el-col :span="12">
                <el-form-item prop="compPhone" label-width="150px" label="Phone number:" class="postInfo-container-item">
                  <el-input v-model="postForm.phoneNo" autocomplete="on" tabindex="10" type="text" :maxlength="fmaxLength.phoneLength" autosize style="width: 300px" placeholder="Please enter the company phone number" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <el-form-item prop="location" label-width="130px" label="Location:" class="postInfo-container-item">
                  <el-input v-model="postForm.location" :maxlength="fmaxLength.locationLength" autocomplete="on" tabindex="8" style="width: 300px" placeholder="Please enter the company's location" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <el-form-item prop="description" label-width="130px" label="Description:">
                  <el-input v-model="postForm.description" :rows="1" :maxlength="fmaxLength.compDesLength" tabindex="11" autocomplete="on" type="textarea" class="article-textarea" autosize placeholder="Please enter the description" />
                </el-form-item>
              </el-col>
            </el-row>
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
import { checkCompanyName, fetchCompany, updateCompany } from '../../../api/account'
import { validDigits, validEmail } from '../../../utils/validate'
import { maxLength } from '../../../store'
const defaultForm = {
  // content_short: '',
  source_uri: '',
  image_uri: '',
  display_time: undefined,
  id: undefined,
  name: '',
  email: '',
  taxCode: '',
  phoneNo: '',
  location: '',
  description: ''
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
    const validatePhoneNo = (rule, value, callback) => {
      if (!validDigits(this.postForm.phoneNo)) {
        callback(new Error('The phone number only contains digits.'))
      } else {
        callback()
      }
    }
    const validateCompName = (rule, value, callback) => {
      if (this.postForm.name.length === 0) {
        callback(new Error('The company name can not be empty.'))
      } else {
        const data = { 'id': this.company.id, 'name': this.company.name }
        checkCompanyName(data).then(() => {
          callback()
        })
          .catch(() => {
            callback(new Error('This company name already exist.'))
          })
      }
    }
    const validateLocation = (rule, value, callback) => {
      if (this.postForm.location.length === 0) {
        callback(new Error('The location can not be empty.'))
      } else {
        callback()
      }
    }
    const validateCompEmail = (rule, value, callback) => {
      if (!validEmail(this.postForm.email)) {
        callback(new Error('Please enter a valid email.'))
      } else {
        callback()
      }
    }
    const validateTaxCode = (rule, value, callback) => {
      if (!validDigits(this.postForm.taxCode)) {
        callback(new Error('The tax code only contains digits.'))
      } else {
        callback()
      }
    }
    return {
      fmaxLength: maxLength,
      postForm: Object.assign({}, defaultForm),
      loading: false,
      rules: {
        phoneNo: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        compName: [{ required: true, trigger: 'blur', validator: validateCompName }],
        location: [{ required: true, trigger: 'blur', validator: validateLocation }],
        compEmail: [{ required: true, trigger: 'blur', validator: validateCompEmail }],
        compPhone: [{ required: true, trigger: 'blur', validator: validatePhoneNo }],
        taxCode: [{ required: true, trigger: 'blur', validator: validateTaxCode }]
      },
      tempRoute: {}
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.fetchData(id)
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  mounted() {
    this.$refs.name.focus()
  },
  methods: {
    fetchData(id) {
      fetchCompany(id).then(response => {
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
      const title = 'Edit Company'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Edit Company'
      document.title = `${title} - ${this.postForm.id}`
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          updateCompany(this.postForm).then(response => {
            this.$notify({
              title: 'Success',
              message: 'Update company successfully',
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
