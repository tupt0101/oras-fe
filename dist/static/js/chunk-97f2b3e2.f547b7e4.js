(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97f2b3e2"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,n){var r=i(),l=t-r,u=20,s=0;e="undefined"===typeof e?500:e;var c=function t(){s+=u;var i=Math.easeInOutQuad(s,r,l,e);o(i),s<e?a(t):n&&"function"===typeof n&&n()};c()}},2001:function(t,e,n){},5723:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var a=n("bc3a"),o=n.n(a),i=n("5f87"),r=o.a.create({baseURL:"https://oras-api.herokuapp.com/",withCredentials:!0,timeout:3e4}),l={Authorization:"Bearer "+Object(i["b"])()};function u(){return r.request({url:"/v1/account-management/accounts",method:"get",headers:l})}function s(){return r.request({url:"/v1/company-management/companies",method:"get",headers:l})}},b224:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),n("el-table-column",{attrs:{"min-width":"300px",label:"Full name",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("router-link",{staticClass:"link-type",attrs:{to:"/account/edit/"+a.id}},[n("span",[t._v(t._s(a.fullname))])])]}}])}),n("el-table-column",{attrs:{width:"300px",align:"left",label:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.email))])]}}])}),n("el-table-column",{attrs:{width:"200px",align:"center",label:"Phone Number"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.phoneNo))])]}}])}),n("el-table-column",{attrs:{width:"120px",align:"center",label:"Role"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.role))])]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-tag",{attrs:{type:t._f("statusFilter")(a.active)}},[t._v(" "+t._s(a.active?"active":"deactive")+" ")])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Actions",width:"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/account/edit/"+t.row.id}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}})],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},o=[],i=n("5723"),r=n("333d"),l={name:"AccountList",components:{Pagination:r["a"]},filters:{statusFilter:function(t){var e={true:"success",false:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i["a"])().then((function(e){t.list=e.data,t.listLoading=!1}))}}},u=l,s=(n("f988"),n("2877")),c=Object(s["a"])(u,a,o,!1,null,"2ef0f282",null);e["default"]=c.exports},f988:function(t,e,n){"use strict";var a=n("2001"),o=n.n(a);o.a}}]);