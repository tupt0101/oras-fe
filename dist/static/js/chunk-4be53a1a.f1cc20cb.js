(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4be53a1a"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,n){var r=o(),s=t-r,l=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=l;var o=Math.easeInOutQuad(c,r,s,e);i(o),c<e?a(t):n&&"function"===typeof n&&n()};u()}},"4dc1":function(t,e,n){"use strict";var a=n("efbd"),i=n.n(a);i.a},5723:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"h",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return d})),n.d(e,"b",(function(){return p}));n("b0c0");var a=n("b775");function i(t){return Object(a["a"])({url:"/v1/account-management/accounts-paging?&name="+t.name+"&status="+t.status+"&role="+t.role+"&numOfElement="+t.limit+"&page="+t.page+"&sort="+t.sort,method:"get"})}function o(t){return Object(a["a"])({url:"/v1/account-management/account/"+t,method:"get"})}function r(t,e){return Object(a["a"])({url:"/v1/account-management/account",method:e,data:t})}function s(t){return Object(a["a"])({url:"/v1/account-management/update-account",method:"put",data:t})}function l(t){return Object(a["a"])({url:"/v1/account-management/change-password-account",method:"put",data:t})}function c(t){return Object(a["a"])({url:"/v1/company-management/companies-paging?name="+t.name+"&status="+t.status+"&numOfElement="+t.limit+"&page="+t.page+"&sort="+t.sort,method:"get"})}function u(t){return Object(a["a"])({url:"/v1/company-management/company/"+t,method:"get"})}function m(t){return Object(a["a"])({url:"/v1/company-management/company",method:"put",data:t})}function d(t,e){return Object(a["a"])({url:"/v1/company-management/company/verify?id="+t+"&email="+e,method:"put"})}function p(t){return Object(a["a"])({url:"/v1/company-management/check-company-name",method:"get",params:t})}},"8e71":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24},xl:{span:24}}},[n("div",{staticClass:"title-container"},[n("strong",{staticStyle:{"font-size":"36px"}},[t._v("Company List")]),n("br")])]),n("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"250px","margin-right":"10px"},attrs:{placeholder:"Name"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px","margin-right":"10px"},attrs:{placeholder:"Status",clearable:""},on:{change:t.handleFilter},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusOptions,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" Search ")]),n("router-link",{attrs:{to:"/job/create"}},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"}},[t._v(" New ")])],1)],1)])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{align:"center",label:"No.",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.$index+1+(t.listQuery.page-1)*t.listQuery.limit))])]}}])}),n("el-table-column",{attrs:{"min-width":"300px",label:"Company name",align:"left",prop:"name",sortable:"custom","class-name":t.getSortClass("name")},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",{staticClass:"link-type",on:{click:function(e){return t.viewDetail(a)}}},[n("span",[t._v(t._s(a.name))])])]}}])}),n("el-table-column",{attrs:{width:"300px",align:"left",label:"Location"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.location))])]}}])}),n("el-table-column",{attrs:{width:"240px",align:"left",label:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.email))])]}}])}),n("el-table-column",{attrs:{width:"160px",align:"center",label:"Phone Number"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.phoneNo))])]}}])}),n("el-table-column",{attrs:{width:"200px",align:"center",label:"Tax Code"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.taxCode))])]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-tag",{attrs:{type:t._f("statusFilter")(a.verified)}},[t._v(" "+t._s(a.verified?"Verified":"Unverified")+" ")])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Actions",width:"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/account/company/edit/"+t.row.id}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}})],1)]}}])})],1),n("el-dialog",{attrs:{title:"Company Detail",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"90%","margin-left":"50px"},attrs:{"label-position":"left","label-width":"70px"}},[n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Company name:","label-width":"150px"}},[n("span",[t._v(t._s(t.temp.name))])]),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Location:","label-width":"150px"}},[n("span",[t._v(t._s(t.temp.location))])]),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Email:","label-width":"150px"}},[n("span",[t._v(t._s(t.temp.email))])]),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Phone Number:","label-width":"150px"}},[n("span",[t._v(t._s(t.temp.phoneNo))])]),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Tax code:","label-width":"150px"}},[n("span",[t._v(t._s(t.temp.taxCode))])]),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Description:","label-width":"150px"}},[n("span",{domProps:{innerHTML:t._s(t.temp.description)}})]),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"Status: ","label-width":"150px"}},[n("el-tag",{attrs:{type:t._f("statusFilter")(t.temp.verified)}},[t._v(" "+t._s(t.temp.verified?"Verified":"Unverified")+" ")])],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" Close ")]),t.temp.verified?t._e():n("el-button",{attrs:{type:"success",loading:t.listLoading},on:{click:function(e){return t.handleVerifyCompany(t.temp.id)}}},[t._v(" Verify ")])],1)],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getCompanyList}})],1)},i=[],o=n("5723"),r=n("333d"),s={name:"AccountList",components:{Pagination:r["a"]},filters:{statusFilter:function(t){var e={true:"success",false:"danger",null:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,name:"",status:"",role:"",sort:"+name"},sortNameTemp:"ascending",statusOptions:["Verified","Unverified"],temp:{id:void 0,name:"",location:0,email:0,phoneNo:"",taxCode:"",description:"",avatar:"",verified:""},dialogFormVisible:!1}},computed:{email:function(){return this.$store.state.user.username}},created:function(){this.getCompanyList()},methods:{getCompanyList:function(){var t=this;this.listLoading=!0,Object(o["g"])(this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1}))},viewDetail:function(t){this.temp=Object.assign({},t),this.dialogFormVisible=!0},handleVerifyCompany:function(t){var e=this;this.listLoading=!0,Object(o["j"])(t,this.email).then((function(t){e.listLoading=!1,e.dialogFormVisible=!1,e.getCompanyList()}))},sortChange:function(t){var e=t.prop,n=t.order;"name"===e&&("ascending"===this.sortNameTemp?this.sortNameTemp="descending":this.sortNameTemp="ascending",console.log(n,this.sortNameTemp),this.sortByName(this.sortNameTemp))},sortByName:function(t){this.listQuery.sort="ascending"===t?"+name":"-name",this.handleFilter()},handleFilter:function(){this.listQuery.page=1,this.getCompanyList()},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},l=s,c=(n("4dc1"),n("2877")),u=Object(c["a"])(l,a,i,!1,null,"05899991",null);e["default"]=u.exports},efbd:function(t,e,n){}}]);