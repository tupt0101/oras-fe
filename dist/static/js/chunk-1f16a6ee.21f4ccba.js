(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f16a6ee"],{"3ce6":function(t,e,a){},"3f72":function(t,e,a){},"55ca":function(t,e,a){"use strict";var i=a("3f72"),n=a.n(i);n.a},"5e24":function(t,e,a){"use strict";var i=a("e3d9"),n=a.n(i);n.a},"5e65":function(t,e,a){},6724:function(t,e,a){"use strict";a("8d41");var i="@@wavesContext";function n(t,e){function a(a){var i=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=n.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),n.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=a:t[i]={removeHandle:a},a}var r={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},s=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;e["a"]=r},"6dcf":function(t,e,a){"use strict";var i=a("3ce6"),n=a.n(i);n.a},"71ff":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.currentRole,{tag:"component"})},n=[],r=(a("caad"),a("2532"),a("5530")),s=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("raddar-chart")],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("pie-chart")],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart")],1)])],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},d=[],u=a("313e"),h=a.n(u),p=a("ed08"),m={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(p["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var f={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;this.chart.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["expected","actual"]},series:[{name:"expected",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:e,animationDuration:2800,animationEasing:"cubicInOut"},{name:"actual",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},g=f,b=a("2877"),v=Object(b["a"])(g,c,d,!1,null,null,null),y=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},x=[];a("817d");var S=3e3,_={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales",max:1e4},{name:"Administration",max:2e4},{name:"Information Technology",max:2e4},{name:"Customer Support",max:2e4},{name:"Development",max:2e4},{name:"Marketing",max:2e4}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:S}]})}}},D=_,C=Object(b["a"])(D,w,x,!1,null,null,null),$=C.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},O=[];a("817d");var T={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Industries","Technology","Forex","Gold","Forecasts"]},series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}},A=T,L=Object(b["a"])(A,E,O,!1,null,null,null),k=L.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},z=[];a("817d");var F=6e3,R={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:F},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:F},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:F}]})}}},V=R,N=Object(b["a"])(V,j,z,!1,null,null,null),H=N.exports,B={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},q={name:"DashboardAdmin",components:{LineChart:y,RaddarChart:$,PieChart:k,BarChart:H},data:function(){return{lineChartData:B.newVisitis}},methods:{handleSetLineChartData:function(t){this.lineChartData=B[t]}}},I=q,J=(a("88fe"),Object(b["a"])(I,o,l,!1,null,"1e2627e2",null)),P=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),a("el-row",{staticStyle:{background:"#fff",padding:"0px 16px 16px 16px","margin-bottom":"32px"}},[a("candidate-status")],1),a("el-row",{staticStyle:{background:"#fff",padding:"0px 16px 16px 16px","margin-bottom":"32px"}},[a("time-to-hire")],1),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart")],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[t.jobByCate?a("job-by-category",{attrs:{"chart-data":t.jobByCate}}):t._e()],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[t.candidateByCate?a("candidate-by-category",{attrs:{"chart-data":t.candidateByCate}}):t._e()],1)])],1),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[t.avgSalaryData?a("average-salary",{attrs:{"chart-data":t.avgSalaryData}}):t._e()],1)],1)},M=[],Y=(a("4de4"),a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("totalJobs")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"job-search","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Total Jobs ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panelData&&t.panelData.totalJob,duration:2e3}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("openJobs")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"hiring","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Open Jobs ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panelData&&t.panelData.totalPublishJob,duration:2400}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("applications")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"cv","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Total Applications ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panelData&&t.panelData.totalCandidate,duration:2800}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("hired")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("svg-icon",{attrs:{"icon-class":"businessman","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" Hired ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panelData&&t.panelData.totalHiredCandidate,duration:3200}})],1)])])],1)}),G=[],X=a("ec1b"),K=a.n(X),Z=a("b775");function Q(t){return Object(Z["a"])({url:"/v1/job-management/job-statistic-by-creator-id/"+t,method:"get"})}function U(t){return Object(Z["a"])({url:"/v1/report-management/time-to-hire/"+t,method:"get"})}function tt(t){return Object(Z["a"])({url:"/v1/report-management/candidate-of-job/"+t,method:"get"})}function et(t){return Object(Z["a"])({url:"/v1/report-management/average-salary-by-category/"+t,method:"get"})}function at(t,e){return Object(Z["a"])({url:"/v1/report-management/average-salary-of-account-by-category/"+t+"/"+e,method:"get"})}function it(t){return Object(Z["a"])({url:"/v1/report-management/total-post-of-account-by-category/"+t,method:"get"})}function nt(t){return Object(Z["a"])({url:"/v1/report-management/total-application-of-account-by-category/"+t,method:"get"})}var rt={components:{CountTo:K.a},data:function(){return{panelData:null}},computed:{accountId:function(){return this.$store.state.user.accId}},created:function(){this.getPanelData()},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)},getPanelData:function(){var t=this;Q(this.accountId).then((function(e){t.panelData=e.data}))}}},st=rt,ot=(a("6dcf"),Object(b["a"])(st,Y,G,!1,null,"40220a9a",null)),lt=ot.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},dt=[],ut={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(p["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var ht={mixins:[ut],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,category:null,data:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.category,a=t.systemData,i=t.userData;this.chart.setOption({xAxis:{data:e,boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["system","user"]},series:[{name:"system",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"user",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:i,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},pt=ht,mt=Object(b["a"])(pt,ct,dt,!1,null,null,null),ft=mt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},bt=[];a("817d");var vt=6e3,yt={mixins:[ut],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:vt},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:vt},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:vt}]})}}},wt=yt,xt=Object(b["a"])(wt,gt,bt,!1,null,null,null),St=xt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h2",{staticClass:"title"},[t._v("Time To Hire")]),t.list?t._e():a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"No.",width:"80"}}),a("el-table-column",{attrs:{label:"Job Title",width:"300px"}}),a("el-table-column",{attrs:{label:"Hired Candidate","min-width":"300px"}}),a("el-table-column",{attrs:{label:"Apply date",width:"200px",align:"center"}}),a("el-table-column",{attrs:{label:"Hired date",width:"200px",align:"center"}}),a("el-table-column",{attrs:{label:"Time To Hire",width:"250px",align:"center"}})],1),t.list?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"No.",prop:"id",type:"index",align:"center",width:"80"}}),a("el-table-column",{attrs:{label:"Job Title",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.jobTitle))])]}}],null,!1,70106499)}),a("el-table-column",{attrs:{label:"Hired Candidate","min-width":"300px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.hiredCandidate.fullname)+" ("+t._s(i.hiredCandidate.email)+")")])]}}],null,!1,2178321087)}),a("el-table-column",{attrs:{label:"Apply Date",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(new Date(i.applyDate).toLocaleString()))])]}}],null,!1,714791301)}),a("el-table-column",{attrs:{label:"Hired Date",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(new Date(i.hiredDate).toLocaleString()))])]}}],null,!1,2414610243)}),a("el-table-column",{attrs:{label:"Time To Hire",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.timeToHired)+" days")])]}}],null,!1,1264631676)})],1):t._e()],1)},Dt=[],Ct=a("6724"),$t={name:"TimeToHire",directives:{waves:Ct["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!1}},computed:{accountId:function(){return this.$store.state.user.accId}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,U(this.accountId).then((function(e){t.list=e.data,t.listLoading=!1}))}}},Et=$t,Ot=(a("55ca"),Object(b["a"])(Et,_t,Dt,!1,null,"a94c894c",null)),Tt=Ot.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h2",{staticClass:"title"},[t._v("Candidate Status")]),t.list?t._e():a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"No.",width:"80"}}),a("el-table-column",{attrs:{label:"Job Title","min-width":"300px"}}),a("el-table-column",{attrs:{label:"Duration",width:"300px",align:"center"}}),a("el-table-column",{attrs:{label:"Total Applications",width:"200px"}}),a("el-table-column",{attrs:{label:"Hired",width:"200px",align:"center"}}),a("el-table-column",{attrs:{label:"Reject",width:"200px",align:"center"}})],1),t.list?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"No.",prop:"id",type:"index",align:"center",width:"80"}}),a("el-table-column",{attrs:{label:"Job Title","min-width":"300px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.job.title))])]}}],null,!1,2574787981)}),a("el-table-column",{attrs:{label:"Duration",width:"300px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(new Date(i.job.createDate).toLocaleDateString())+" - "+t._s(new Date(i.job.applyTo).toLocaleDateString()))])]}}],null,!1,2085516543)}),a("el-table-column",{attrs:{label:"Total Applications",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.totalApplication))])]}}],null,!1,264044220)}),a("el-table-column",{attrs:{label:"Hired",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.hired))])]}}],null,!1,857009206)}),a("el-table-column",{attrs:{label:"Reject",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.timeToHired||0))])]}}],null,!1,1343599912)})],1):t._e()],1)},Lt=[],kt={name:"TimeToHire",directives:{waves:Ct["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!1}},computed:{accountId:function(){return this.$store.state.user.accId}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,tt(this.accountId).then((function(e){t.list=e.data,t.listLoading=!1}))}}},jt=kt,zt=(a("e6ea"),Object(b["a"])(jt,At,Lt,!1,null,"7f09c948",null)),Ft=zt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},Vt=[];a("817d");var Nt={mixins:[ut],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){console.log(t.chartData),t.initChart(t.chartData)}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.category,a=t.userData;this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:e},series:[{name:"JOB POST BY CATEGORY",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:a,animationEasing:"cubicInOut",animationDuration:2600}]})}}},Ht=Nt,Bt=Object(b["a"])(Ht,Rt,Vt,!1,null,null,null),qt=Bt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},Jt=[];a("817d");var Pt={mixins:[ut],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){console.log(t.chartData),t.initChart(t.chartData)}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.category,a=t.userData;this.chart=h.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:e},series:[{name:"JOB POST BY CATEGORY",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:a,animationEasing:"cubicInOut",animationDuration:2600}]})}}},Wt=Pt,Mt=Object(b["a"])(Wt,It,Jt,!1,null,null,null),Yt=Mt.exports,Gt={totalJobs:{expectedData:[100,120,161,134,105,160,165,133,101,99,122,150],actualData:[120,82,91,154,162,140,145,161,134,105,160,165]},openJobs:{expectedData:[200,192,120,144,160,130,140,160,151,106,145,150],actualData:[180,160,151,106,145,150,130,144,160,130,140,160]},applications:{expectedData:[80,100,121,104,105,90,100,90,100,138,142,130],actualData:[120,90,100,138,142,130,130,100,121,104,105,90]},hired:{expectedData:[130,140,141,142,145,150,160,91,154,162,140,130],actualData:[120,82,91,154,162,140,130,130,140,141,142,145]}},Xt={name:"DashboardAdmin",components:{PanelGroup:lt,AverageSalary:ft,BarChart:St,TimeToHire:Tt,CandidateStatus:Ft,JobByCategory:qt,CandidateByCategory:Yt},data:function(){return{lineChartData:Gt.totalJobs,avgSalaryData:{category:[],systemData:[],userData:[]},jobByCate:{category:[],userData:[]},candidateByCate:{category:[],userData:[]}}},computed:{accountId:function(){return this.$store.state.user.accId},baseCurrency:function(){var t=this.$store.getters.language;return"vi"===t?"vnd":"usd"}},created:function(){this.getSalaryData(),this.getJobData(),this.getCandidateData()},methods:{handleSetLineChartData:function(t){this.lineChartData=Gt[t]},getSalaryData:function(){var t=this;et(this.baseCurrency).then((function(e){t.avgSalaryData.category=e.data.map((function(t){return t.category})),t.avgSalaryData.systemData=e.data.map((function(t){return t.averageSalary}))})),at(this.accountId,this.baseCurrency).then((function(e){t.avgSalaryData.userData=e.data.map((function(t){return t.averageSalary}))}))},getJobData:function(){var t=this;it(this.accountId).then((function(e){var a=e.data.filter((function(t){return t.numOfPost>0}));t.jobByCate.category=a.map((function(t){return t.category})),t.jobByCate.userData=a.map((function(t){return{value:t.numOfPost,name:t.category}}))}))},getCandidateData:function(){var t=this;nt(this.accountId).then((function(e){var a=e.data.filter((function(t){return t.numOfApplication>0}));t.candidateByCate.category=a.map((function(t){return t.category})),t.candidateByCate.userData=a.map((function(t){return{value:t.numOfApplication,name:t.category}}))}))}}},Kt=Xt,Zt=(a("5e24"),Object(b["a"])(Kt,W,M,!1,null,"631a4229",null)),Qt=Zt.exports,Ut={name:"Dashboard",components:{adminReport:P,memberReport:Qt},data:function(){return{currentRole:"adminReport"}},computed:Object(r["a"])({},Object(s["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="memberReport")}},te=Ut,ee=Object(b["a"])(te,i,n,!1,null,null,null);e["default"]=ee.exports},"817d":function(t,e,a){var i,n,r;(function(s,o){n=[e,a("313e")],i=o,r="function"===typeof i?i.apply(e,n):i,void 0===r||(t.exports=r)})(0,(function(t,e){var a=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(e){var i=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],n={color:i,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:i[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:i},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",n)}else a("ECharts is not Loaded")}))},"88fe":function(t,e,a){"use strict";var i=a("5e65"),n=a.n(i);n.a},"8d41":function(t,e,a){},"907d":function(t,e,a){},e3d9:function(t,e,a){},e6ea:function(t,e,a){"use strict";var i=a("907d"),n=a.n(i);n.a},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!r||!s);l++)o=n[l],e.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout((function(){t(e+a)}),a);return i=e+a,n},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,i){var n,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(n=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach((function(t){var e=i[t];l[t]=function(){return e}})),o.computed=l}return{esModule:n,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);