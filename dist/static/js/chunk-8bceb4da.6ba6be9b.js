(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bceb4da"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var s=i(),l=t-s,r=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=r;var i=Math.easeInOutQuad(c,s,l,e);o(i),c<e?n(t):a&&"function"===typeof a&&a()};d()}},"1f50":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24},xl:{span:24}}},[a("div",{staticClass:"title-container"},[a("strong",{staticStyle:{"font-size":"36px"}},[t._v(t._s(t.job&&t.job.title))]),a("br"),a("div",{staticStyle:{padding:"10px 0px"}},[a("strong",[t._v(t._s(t.job&&t.job.accountByCreatorId.companyById.name))]),a("span",{staticStyle:{"margin-left":"30px"}},[t._v(t._s(t.$t("job.published"))+": "+t._s(t.job&&new Date(t.job.createDate).toLocaleString("en-GB")))]),a("span",{staticStyle:{"margin-left":"30px"}},[t._v(t._s(t.$t("job.deadline"))+": "+t._s(t.job&&new Date(t.job.applyTo).toLocaleString("en-GB")))])])])]),a("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"250px","margin-right":"10px"},attrs:{placeholder:t.$t("job.plName"),maxlength:t.fmaxLength.nameLength},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px","margin-right":"10px"},attrs:{placeholder:t.$t("job.status"),clearable:""},on:{change:t.handleFilter},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" "+t._s(t.$t("btn.search"))+" ")]),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v(" "+t._s(t.$t("btn.export"))+" ")])],1)]),a("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[a("div",{staticClass:"filter-container",staticStyle:{float:"right"}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.refresh}},[t._v(" "+t._s(t.$t("job.get"))+" ")]),a("el-button",{staticClass:"filter-item",attrs:{type:"warning"},on:{click:t.rankCV}},[t._v(" "+t._s(t.$t("job.rank"))+" ")])],1)])],1),t.list?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"index",align:"center",label:t.$t("job.no"),width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.$index+1+(t.listQuery.page-1)*t.listQuery.limit))])]}}],null,!1,3920837368)}),a("el-table-column",{attrs:{label:t.$t("job.fullname"),prop:"fullname",sortable:"custom","min-width":"150px","class-name":t.getSortClass("fullname")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("div",{staticClass:"link-type",on:{click:function(e){return t.viewDetail(n)}}},[a("span",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(n.candidateByCandidateId.fullname))])])]}}],null,!1,2751408154)}),a("el-table-column",{attrs:{label:t.$t("job.email"),align:"center",width:"240px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.candidateByCandidateId.email))])]}}],null,!1,210178128)}),a("el-table-column",{attrs:{label:t.$t("job.phoneNo"),align:"center",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.candidateByCandidateId.phoneNo))])]}}],null,!1,737022113)}),a("el-table-column",{attrs:{label:t.$t("job.applyDate"),prop:"applyDate",sortable:"custom",width:"200px",align:"center","class-name":t.getSortClass("applyDate")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(new Date(n.applyDate).toLocaleString("en-GB")))])]}}],null,!1,459126150)}),a("el-table-column",{attrs:{label:t.$t("job.source"),width:"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.source))])]}}],null,!1,2991406777)}),a("el-table-column",{attrs:{label:t.$t("job.status"),"class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(n.status)}},[t._v(" "+t._s(n.status)+" ")])]}}],null,!1,664667523)}),a("el-table-column",{attrs:{align:"center",label:t.$t("job.resume"),width:"90px","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-tooltip",{attrs:{content:"View resume",placement:"top"}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-paperclip"},on:{click:function(e){return t.openCV(n.cv)}}})],1)]}}],null,!1,4014554615)}),a("el-table-column",{attrs:{align:"center",label:t.$t("job.match"),prop:"matchingRate",sortable:"custom",width:"180px","class-name":t.getSortClass("matchingRate")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.matchingRate)+"%")])]}}],null,!1,1114086555)}),a("el-table-column",{attrs:{align:"center",label:t.$t("job.actions"),width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{content:t.$t("job.ttHire"),placement:"top"}},["Hired"!==e.row.status?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check"},on:{click:function(a){return t.handleHireCandidate(e.row.id)}}}):t._e()],1)]}}],null,!1,594824305)})],1):t._e(),a("el-dialog",{attrs:{title:"Candidate Detail",visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"90%","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:t.$t("job.fullname")+":","label-width":"150px"}},[a("span",[t._v(t._s(t.temp.candidateByCandidateId.fullname))])]),a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:t.$t("job.email")+":","label-width":"150px"}},[a("span",[t._v(t._s(t.temp.candidateByCandidateId.email))])]),a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:t.$t("job.phoneNo")+":","label-width":"150px"}},[a("span",[t._v(t._s(t.temp.candidateByCandidateId.phoneNo))])]),a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:t.$t("job.address")+":","label-width":"150px"}},[a("span",[t._v(t._s(t.temp.candidateByCandidateId.address))])]),a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:t.$t("job.status")+":","label-width":"150px"}},[a("el-tag",{attrs:{type:t._f("statusFilter")(t.temp.status)}},[t._v(" "+t._s(t.temp.status)+" ")])],1),a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:t.$t("job.comment")+":","label-width":"150px"}},[a("el-input",{attrs:{type:"textarea",rows:5,"max-length":t.fmaxLength.cmtLength},model:{value:t.temp.comment,callback:function(e){t.$set(t.temp,"comment",e)},expression:"temp.comment"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" "+t._s(t.$t("btn.close"))+" ")]),a("el-button",{attrs:{loading:t.listLoading,type:"success"},on:{click:function(e){return t.handleComment(t.temp)}}},[t._v(" "+t._s(t.$t("btn.saveComment"))+" ")])],1)],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getApplications}})],1)},o=[],i=(a("d81d"),a("d3b7"),a("ac1f"),a("5319"),a("b0c0"),a("b775")),s=a("bc3a"),l=a.n(s);function r(t){return Object(i["a"])({url:"/v1/job-application-management/job-applications-by-job-id/"+t,method:"get"})}function c(t,e){return Object(i["a"])({url:"/v1/job-application-management/job-applications-by-job-id?jobId="+t+"&name="+e.name+"&numOfElement="+e.limit+"&page="+e.page+"&sort="+e.sort+"&status="+e.status,method:"get"})}function d(t){return Object(i["a"])({url:"/v1/job-application-management/job-applications-openjob/"+t,method:"get"})}var u=l.a.create({baseURL:"https://oras-api.herokuapp.com/",withCredentials:!0,timeout:18e7});function m(t,e){return u.request({url:"/v1/job-application-management/job-application-rank-cv?jobId="+t+"&name="+e.name+"&numOfElement="+e.limit+"&page="+e.page+"&sort="+e.sort+"&status="+e.status,method:"post"})}function p(t){return Object(i["a"])({url:"/v1/job-application-management/job-application",method:"put",data:t})}function b(t){return Object(i["a"])({url:"/v1/job-application-management/job-application/hire/"+t,method:"put"})}var h=a("76fe"),f=a("333d"),g=a("4360"),y={name:"CandidateList",components:{Pagination:f["a"]},filters:{statusFilter:function(t){var e={Hired:"success",Applied:"primary",Reject:"danger"};return e[t]}},data:function(){return{fmaxLength:g["b"],job:null,list:null,totalList:null,total:0,listLoading:!1,downloadLoading:!1,listQuery:{page:1,limit:10,name:"",status:"",sort:"-matchingRate"},sortNameTemp:"descending",sortDateTemp:"descending",sortRateTemp:"descending",statusOptions:["Applied","Hired","Rejected"],jobId:"",temp:{id:void 0,candidateId:"",matchingRate:0,cv:0,applyDate:"",hiredDate:"",source:"",status:"",comment:"",jobId:void 0,candidateByCandidateId:{id:void 0,fullname:"",emaill:"",address:"",phoneNo:""},jobByJobId:null},dialogFormVisible:!1}},created:function(){this.jobId=this.$route.params&&this.$route.params.id,this.fetchAll(this.jobId),this.fetchData(this.jobId),this.getApplications(this.jobId)},methods:{fetchAll:function(t){var e=this;r(t).then((function(t){e.totalList=t.data})).catch((function(t){console.log(t)}))},fetchData:function(t){var e=this;Object(h["d"])(t).then((function(t){e.job=t.data})).catch((function(t){console.log(t)}))},openCV:function(t){window.open(t,"_blank")},getApplications:function(){var t=this;this.listLoading=!0,c(this.jobId,this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1})).catch((function(e){t.listLoading=!1,console.log(e)}))},refresh:function(){var t=this;this.listLoading=!0,d(this.jobId).then((function(){c(t.jobId,t.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1}))})).catch((function(e){t.listLoading=!1,console.log(e)}))},rankCV:function(){var t=this;this.listLoading=!0,m(this.jobId,this.listQuery).then((function(e){t.list=e.data.data,t.listLoading=!1})).catch((function(e){t.listLoading=!1,console.log(e)}))},viewDetail:function(t){this.temp=Object.assign({},t),this.dialogFormVisible=!0},handleComment:function(t){var e=this;console.log("comment",t);var a=t.applyDate,n=t.candidateId,o=t.comment,i=t.cv,s=t.hiredDate,l=t.id,r=t.jobId,c=t.matchingRate,d=t.source,u=t.status,m={applyDate:a,candidateId:n,comment:o,cv:i,hiredDate:s,id:l,jobId:r,matchingRate:c,source:d,status:u};this.listLoading=!0,p(m).then((function(){e.$message({message:"The comment has been saved.",type:"success"}),e.listLoading=!1,e.dialogFormVisible=!1,e.getApplications()})).catch((function(t){console.log(t),e.$message({message:"The comment can not be saved.",type:"fail"}),e.listLoading=!1}))},handleHireCandidate:function(t){var e=this;this.listLoading=!0,b(t).then((function(t){e.listLoading=!1,e.getApplications()})).catch((function(t){console.log(t),e.$message({message:"The candidate can not be hired.",type:"fail"}),e.listLoading=!1}))},sortChange:function(t){var e=t.prop,a=t.order;"fullname"===e?("ascending"===this.sortNameTemp?this.sortNameTemp="descending":this.sortNameTemp="ascending",console.log(a,this.sortNameTemp),this.sortByName(this.sortNameTemp)):"applyDate"===e?("ascending"===this.sortDateTemp?this.sortDateTemp="descending":this.sortDateTemp="ascending",console.log(a,this.sortDateTemp),this.sortByDate(this.sortDateTemp)):"matchingRate"===e&&("ascending"===this.sortRateTemp?this.sortRateTemp="descending":this.sortRateTemp="ascending",console.log(a,this.sortRateTemp),this.sortByRate(this.sortRateTemp))},sortByName:function(t){console.log("sortByName"),this.listQuery.sort="ascending"===t?"+candidateByCandidateId.fullname":"-candidateByCandidateId.fullname",this.handleFilter()},sortByDate:function(t){console.log("sortByDate"),this.listQuery.sort="ascending"===t?"+applyDate":"-applyDate",this.handleFilter()},sortByRate:function(t){console.log("sortByRate"),this.listQuery.sort="ascending"===t?"+matchingRate":"-matchingRate",this.handleFilter()},handleFilter:function(){this.listQuery.page=1,this.getApplications()},getSortClass:function(t){var e=this.listQuery.sort;return"fullname"===t&&(t="candidateByCandidateId.fullname"),e==="+".concat(t)?"ascending":"descending"},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-489b8c18"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(e){var a=["Id","Full name","Email","Phone number","Address","Apply Date","Source","Status","Resume","Matching Rate","Comment"],n=["id","fullname","email","phoneNo","address","applyDate","source","status","cv","matchingRate","comment"],o=t.totalList,i=t.formatJson(n,o),s=(new Date).toLocaleString("en-GB");e.export_json_to_excel({header:a,data:i,filename:"applications-of-"+t.job.title.toLowerCase().replace(" ","-")+"-"+s.replace("/","").replace(", ","").replace(":",""),autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"applyDate"===t?new Date(e[t]).toLocaleString("en-GB"):"fullname"===t||"email"===t||"phoneNo"===t||"address"===t?e["candidateByCandidateId"][t]:e[t]}))}))}}},v=y,j=(a("b348"),a("2877")),w=Object(j["a"])(v,n,o,!1,null,"86891306",null);e["default"]=w.exports},"76fe":function(t,e,a){"use strict";a.d(e,"g",(function(){return o})),a.d(e,"f",(function(){return i})),a.d(e,"e",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return r})),a.d(e,"h",(function(){return c})),a.d(e,"a",(function(){return d})),a.d(e,"c",(function(){return u}));var n=a("b775");function o(t){return Object(n["a"])({url:"/v1/job-management/open-job-by-creator-id/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/v1/job-management/jobs-paging?&title="+t.title+"&currency="+t.currency+"&numOfElement="+t.limit+"&page="+t.page+"&sort="+t.sort+"&status="+t.status,method:"get"})}function s(t,e){return Object(n["a"])({url:"/v1/job-management/job-by-creator-id?id="+t+"&title="+e.title+"&currency="+e.currency+"&numOfElement="+e.limit+"&page="+e.page+"&sort="+e.sort+"&status="+e.status,method:"get"})}function l(t){return Object(n["a"])({url:"/v1/job-management/job/"+t,method:"get"})}function r(t,e){return Object(n["a"])({url:"/v1/job-management/job",method:e,data:t})}function c(t){return Object(n["a"])({url:"/v1/job-management/job/"+t+"/publish",method:"put"})}function d(t){return Object(n["a"])({url:"/v1/job-management/job/"+t+"/close",method:"put"})}function u(){return Object(n["a"])({url:"/v1/job-management/categories",method:"get"})}},b348:function(t,e,a){"use strict";var n=a("d491"),o=a.n(n);o.a},d491:function(t,e,a){}}]);