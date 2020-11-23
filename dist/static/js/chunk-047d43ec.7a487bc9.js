(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-047d43ec"],{4565:function(e,t,r){"use strict";var o=r("6bec"),a=r.n(o);a.a},"6bec":function(e,t,r){},c5cc:function(e,t,r){"use strict";var o=r("d0aa"),a=r.n(o);a.a},d0aa:function(e,t,r){},d5c2:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-container"},[r("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerRules,autocomplete:"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[e._v(" "+e._s(e.$t("register.title"))+" ")])]),r("el-form-item",{attrs:{prop:"fullname"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"user"}})],1),r("el-input",{ref:"fullname",attrs:{placeholder:e.$t("register.fullname"),name:"fulname",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.registerForm.fullname,callback:function(t){e.$set(e.registerForm,"fullname",t)},expression:"registerForm.fullname"}})],1),r("el-form-item",{attrs:{prop:"email"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"email"}})],1),r("el-input",{ref:"email",attrs:{placeholder:e.$t("register.email"),name:"email",type:"text",tabindex:"2",autocomplete:"on"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),r("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[r("el-form-item",{attrs:{prop:"password"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),r("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.$t("register.password"),name:"password",tabindex:"3",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:function(t){return e.checkCapslock(t)}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),r("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[r("el-form-item",{attrs:{prop:"confirmPwd"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),r("el-input",{key:e.confirmPwdType,ref:"confirmPwd",attrs:{type:"password",placeholder:e.$t("register.confirmPwd"),name:"confirmPwd",tabindex:"4",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:function(t){return e.checkCapslock(t)}},model:{value:e.registerForm.confirmPwd,callback:function(t){e.$set(e.registerForm,"confirmPwd",t)},expression:"registerForm.confirmPwd"}})],1)],1),r("el-form-item",{attrs:{prop:"phoneNo"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"phone"}})],1),r("el-input",{ref:"phoneNo",attrs:{placeholder:e.$t("register.phoneNo"),name:"phoneNo",type:"text",tabindex:"5",autocomplete:"on"},model:{value:e.registerForm.phoneNo,callback:function(t){e.$set(e.registerForm,"phoneNo",t)},expression:"registerForm.phoneNo"}})],1),r("br"),r("div",{staticStyle:{"margin-bottom":"10px"}},[r("span",{staticStyle:{color:"#aaa","font-size":"14px","margin-left":"15px"}},[e._v(" "+e._s(e.$t("register.info"))+" ")])]),r("el-form-item",{attrs:{prop:"compName"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"building"}})],1),r("el-input",{ref:"compName",attrs:{placeholder:e.$t("register.compName"),name:"compName",type:"text",tabindex:"6",autocomplete:"on"},model:{value:e.registerForm.compName,callback:function(t){e.$set(e.registerForm,"compName",t)},expression:"registerForm.compName"}})],1),r("el-form-item",{attrs:{prop:"location"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"pin"}})],1),r("el-input",{ref:"location",attrs:{placeholder:e.$t("register.location"),name:"location",type:"text",tabindex:"7",autocomplete:"on"},model:{value:e.registerForm.location,callback:function(t){e.$set(e.registerForm,"location",t)},expression:"registerForm.location"}})],1),r("el-form-item",{attrs:{prop:"compEmail"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"email"}})],1),r("el-input",{ref:"compEmail",attrs:{placeholder:e.$t("register.compEmail"),name:"compEmail",type:"text",tabindex:"8",autocomplete:"on"},model:{value:e.registerForm.compEmail,callback:function(t){e.$set(e.registerForm,"compEmail",t)},expression:"registerForm.compEmail"}})],1),r("el-form-item",{attrs:{prop:"compPhone"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"old-typical-phone"}})],1),r("el-input",{ref:"compPhone",attrs:{placeholder:e.$t("register.compPhone"),name:"compPhone",type:"text",tabindex:"9",autocomplete:"on"},model:{value:e.registerForm.compPhone,callback:function(t){e.$set(e.registerForm,"compPhone",t)},expression:"registerForm.compPhone"}})],1),r("el-form-item",{attrs:{prop:"taxCode"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"taxes"}})],1),r("el-input",{ref:"taxCode",attrs:{placeholder:e.$t("register.taxCode"),name:"taxCode",type:"text",tabindex:"10",autocomplete:"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSignup(t)}},model:{value:e.registerForm.taxCode,callback:function(t){e.$set(e.registerForm,"taxCode",t)},expression:"registerForm.taxCode"}})],1),r("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleSignup(t)}}},[e._v(" "+e._s(e.$t("register.regIn"))+" ")]),r("div",{staticStyle:{"text-align":"right"}},[r("router-link",{attrs:{to:"/login?redirect=%2Fdashboard"}},[r("p",{staticStyle:{"font-style":"italic",color:"rgb(91 104 111)"}},[e._v(" "+e._s(e.$t("register.login"))+" ")])])],1)],1)],1)},a=[],i=(r("13d5"),r("b64b"),r("61f7")),n={name:"Register",data:function(){var e=this,t=function(e,t,r){0===t.length?r(new Error("The name can not be empty.")):r()},r=function(e,t,r){Object(i["e"])(t)?r():r(new Error("Please enter a valid email."))},o=function(e,t,r){t.length<6?r(new Error("The password can not be less than 6 digits.")):r()},a=function(t,r,o){r!==e.registerForm.password?o(new Error("The confirmation password is invalid.")):o()},n=function(e,t,r){Object(i["d"])(t)?r():r(new Error("The phone number only contains digits."))},s=function(e,t,r){0===t.length?r(new Error("The company name can not be empty.")):r()},l=function(e,t,r){0===t.length?r(new Error("The location can not be empty.")):r()},c=function(e,t,r){Object(i["e"])(t)?r():r(new Error("Please enter a valid email."))},p=function(e,t,r){Object(i["d"])(t)?r():r(new Error("The tax code only contains digits."))};return{registerForm:{fullname:"",email:"",password:"",confirmPwd:"",phoneNo:"",compName:"",location:"",compEmail:"",compPhone:"",taxCode:""},registerRules:{fullname:[{required:!0,trigger:"blur",validator:t}],email:[{required:!0,trigger:"blur",validator:r}],password:[{required:!0,trigger:"blur",validator:o}],confirmPwd:[{required:!0,trigger:"blur",validator:a}],phoneNo:[{required:!0,trigger:"blur",validator:n}],compName:[{required:!0,trigger:"blur",validator:s}],location:[{required:!0,trigger:"blur",validator:l}],compEmail:[{required:!0,trigger:"blur",validator:c}],compPhone:[{required:!0,trigger:"blur",validator:n}],taxCode:[{required:!0,trigger:"blur",validator:p}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){this.$refs.fullname.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleSignup:function(){var e=this;this.$refs.registerForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/signup",e.registerForm).then((function(){e.$router.push({path:e.redirect||"/login",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,r){return"redirect"!==r&&(t[r]=e[r]),t}),{})}}},s=n,l=(r("4565"),r("c5cc"),r("2877")),c=Object(l["a"])(s,o,a,!1,null,"203a3370",null);t["default"]=c.exports}}]);