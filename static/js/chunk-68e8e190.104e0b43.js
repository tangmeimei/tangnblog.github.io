(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68e8e190"],{"6f62":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toms-container"},[a("div",{staticClass:"toms-add-navBar"},[t._l(t.navList,(function(e){return[a("div",{key:e.navId,class:{current:t.navFlag===e.navId},on:{click:function(a){return t.navChange(e.navId)}}},[t._v(" "+t._s(e.name)+" ")])]}))],2),a("div",{staticClass:"toms-detail-contentWrap"},[a("basic-details",{attrs:{basicData:t.basicData}}),a("company-contract",{attrs:{companyData:t.companyData,laborData:t.laborData}}),"B65055CD8F6B000"!==t.$store.state.app.roleData.defaultRole?a("recruit-detail",{attrs:{recruitData:t.recruitData}}):t._e(),"B65055CD8F6B000"!==t.$store.state.app.roleData.defaultRole?a("fml-ctc-edu-tra-wrk",{attrs:{workExeList:t.workExeList,trainingList:t.trainingList,educationList:t.educationList,familyList:t.familyList,emergencyCtctList:t.emergencyCtctList}}):t._e(),a("client-idle-file",{attrs:{isShowClientAndIdle:t.isShowClientAndIdle,employStatusData:t.employStatusData,clientData:t.clientData,idleData:t.idleData,affixData:t.affixData}}),"B65055CD8F6B000"!==t.$store.state.app.roleData.defaultRole?a("table-info",{attrs:{processInfoData:t.processInfoList,idleHistoryData:t.idleHistoryList,changeInfoData:t.changeInfoList,onJobHistoryData:t.onJobHistoryList}}):t._e()],1)])},r=[],o=a("1da1"),i=(a("96cf"),a("d81d"),a("159b"),a("2009")),s=a("8c87"),c=a("6882"),l=a("5547"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"detailsContent"},[t._m(0),a("zm-table",{staticStyle:{width:"100%"},attrs:{border:"",tableData:t.idleHistoryData,columns:t.idleColumns,isShowPagenation:!1}})],1),a("div",{staticClass:"detailsContent"},[t._m(1),a("zm-table",{staticStyle:{width:"100%"},attrs:{border:"",tableData:t.changeInfoData,columns:t.changeInfoColumns,isShowPagenation:!1}})],1),a("div",{staticClass:"detailsContent"},[t._m(2),a("zm-table",{staticStyle:{width:"100%"},attrs:{border:"",tableData:t.onJobHistoryData,columns:t.onWorkColumns,isShowPagenation:!1}})],1)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title",attrs:{id:"nav13"}},[a("span",[t._v("闲置历史")]),a("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title",attrs:{id:"nav14"}},[a("span",[t._v("信息变更历史")]),a("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title",attrs:{id:"nav15"}},[a("span",[t._v("在职历史")]),a("div",{staticClass:"line"})])}],m=a("8cc7"),p=a("ed08"),f=function(t){return[{label:"序号",type:"index",fixed:"left",width:"50px"},{label:"流程主题",prop:"clientGroupName",minWidth:"300px"},{label:"流程名称",prop:"clientGroupName",sortable:"custom"},{label:"当前状态",prop:"clientSimpleName",kind:"render",minWidth:"200px",render:function(t,e){return t("span","已完成")}},{label:"发起人",prop:"clientGroupName",sortable:"custom",minWidth:"140px"},{label:"更新日期",prop:"operatingArea",sortable:"custom",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.time,"datetime");return t("span",a)}}]},v=function(t){return[{label:"序号",type:"index",fixed:"left",width:"50px"},{label:"客户方",prop:"clientCompanyId"},{label:"闲置开始日期",prop:"freeStartDate",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.freeStartDate,"date");return t("span",a)}},{label:"闲置结束日期",prop:"freeEndDate",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.freeEndDate,"date");return t("span",a)}},{label:"闲置天数",prop:"day",sortable:"custom",minWidth:"140px"},{label:"是否公开",prop:"isPublic",sortable:"custom"},{label:"闲置状态",prop:"freeStatusCn",sortable:"custom",minWidth:"140px"},{label:"更新日期",prop:"mdeUpdatedDate",minWidth:"140px",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.mdeUpdatedDate,"datetime");return t("span",a)}}]},b=function(t){return[{label:"序号",type:"index",fixed:"left",width:"50px"},{label:"变更类型",prop:"changeTypeCN"},{label:"所属客户方",prop:"ownerCst"},{label:"变更原因",prop:"changeCause"},{label:"对应交付",prop:"ownerHandUser"},{label:"生效日期",prop:"mdeUpdatedDate",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.mdeUpdatedDate,"date");return t("span",a)}}]},h=function(t){return[{label:"序号",type:"index",fixed:"left",width:"50px"},{label:"工号/姓名",prop:"employName"},{label:"归属部门",prop:"orgId"},{label:"公司岗位",prop:"companyJob"},{label:"入职日期",prop:"contractStartTime",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.contractStartTime,"date");return t("span",a)}},{label:"离职日期",prop:"contractLeaveTime",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.contractLeaveTime,"date");return t("span",a)}},{label:"转正日期",prop:"contractFormalTime",kind:"render",render:function(t,e){var a=Object(p["d"])(e.row.contractFormalTime,"date");return t("span",a)}},{label:"对应交付",prop:"companyDeliver",minWidth:"140px"}]},y={name:"TableInfo",components:{zmTable:m["a"]},props:{processInfoData:{type:Array,default:function(){return[]}},idleHistoryData:{type:Array,default:function(){return[]}},changeInfoData:{type:Array,default:function(){return[]}},onJobHistoryData:{type:Array,default:function(){return[]}}},data:function(){return{processColumns:f(this),idleColumns:v(this),changeInfoColumns:b(this),onWorkColumns:h(this)}},mounted:function(){},methods:{}},D=y,I=a("2877"),C=Object(I["a"])(D,d,u,!1,null,"0020b598",null),w=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"detailsContent"},[a("div",{staticClass:"title",attrs:{id:t.navName+"3"}},[a("span",[t._v("招聘人信息")]),a("div",{staticClass:"line"})]),a("div",{staticClass:"detailsItem"},[a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("渠道类型")]),a("div",{staticClass:"value"},[t._v(t._s(t.recruitData.channelType||"--"))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("渠道名称/推荐人")]),a("div",{staticClass:"value"},[t._v(t._s(t.recruitData.channelName||"--"))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("所属组织")]),a("div",{staticClass:"value"},[t._v(t._s(t.recruitData.recruitOrgid||"--"))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("对应招聘")]),a("div",{staticClass:"value"},[t._v(t._s(t.recruitData.companyRecruit||"--"))])])])])])},g=[],L={name:"Recruit",props:{recruitData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}}},data:function(){return{}},watch:{},computed:{},mounted:function(){},methods:{}},O=L,j=Object(I["a"])(O,k,g,!1,null,"425893e3",null),x=j.exports,N=a("dc27"),_=[{name:"基本信息",navId:0},{name:"公司信息",navId:1},{name:"劳动合同",navId:2},{name:"招聘人信息",navId:3},{name:"家庭成员",navId:4},{name:"紧急联系人",navId:5},{name:"教育经历",navId:6},{name:"培训经历",navId:7},{name:"工作经历",navId:8},{name:"客户方信息",navId:9},{name:"员工状态信息",navId:10},{name:"闲置信息",navId:11},{name:"附件信息",navId:12},{name:"闲置历史",navId:13},{name:"信息变更历史",navId:14},{name:"在职历史",navId:15}],S=[{name:"基本信息",navId:0},{name:"公司信息",navId:1},{name:"劳动合同",navId:2},{name:"招聘人信息",navId:3},{name:"家庭成员",navId:4},{name:"紧急联系人",navId:5},{name:"教育经历",navId:6},{name:"培训经历",navId:7},{name:"工作经历",navId:8},{name:"员工状态信息",navId:10},{name:"附件信息",navId:12},{name:"闲置历史",navId:13},{name:"信息变更历史",navId:14},{name:"在职历史",navId:15}],E=[{name:"基本信息",navId:0},{name:"公司信息",navId:1},{name:"客户方信息",navId:9},{name:"员工状态信息",navId:10},{name:"闲置信息",navId:11}],T=[{name:"基本信息",navId:0},{name:"公司信息",navId:1},{name:"员工状态信息",navId:10}],H=a("d14b"),F={name:"DetailStaffFile",components:{basicDetails:i["a"],companyContract:s["a"],fmlCtcEduTraWrk:c["a"],clientIdleFile:l["a"],tableInfo:w,recruitDetail:x},data:function(){return{navFlag:0,basicData:{},companyData:{},laborData:{},recruitData:{},familyList:[{formData:{}},{formData:{}}],emergencyCtctList:[{formData:{}},{formData:{}}],educationList:[{formData:{}}],trainingList:[{formData:{}}],workExeList:[{formData:{}}],clientData:{},idleData:{},affixData:{},employId:null,processInfoList:[],idleHistoryList:[],changeInfoList:[],onJobHistoryList:[],employStatusData:{},isShowClientAndIdle:!1}},watch:{"basicData.employType":{deep:!0,immediate:!0,handler:function(t){this.isShowClientAndIdle="一线员工-TM"===t||"一线员工-FP"===t}}},computed:{navList:function(){var t="B65055CD8F6B000"===this.$store.state.app.roleData.defaultRole;return this.isShowClientAndIdle?t?E:_:t?T:S}},mounted:function(){this.employId=this.$route.params.employId,this.employPidNo=this.$route.query.employPidNo,this.getDetail(),this.getFreeHistory(),this.getEmployHistoryList(),this.getInfoChangeList(this.employId)},methods:{getInfoChangeList:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={employId:t,taskFlowConfig:{flowName:"员工信息变更流程（SSC）",version:1}},a.next=3,Object(H["m"])(n);case 3:r=a.sent,e.changeInfoList=r||[],e.changeInfoList.map((function(t,e){return t.ownerCst=t.newClientIdCN,t.ownerHandUser=t.newHandUserCN,t.newClientIdCN&&""!=t.newClientIdCN||(t.ownerCst=t.oldClientIdCN),t.newHandUserCN&&""!=t.newHandUserCN||(t.ownerHandUser=t.oldHandUserCN),t}));case 6:case"end":return a.stop()}}),a)})))()},navChange:function(t){this.navFlag=t;var e=document.querySelector("#nav".concat(t));e&&e.scrollIntoView()},getDetail:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i,s,c,l,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={employId:t.employId},e.next=3,Object(N["N"])(a);case 3:n=e.sent,r=n.employInfo,o=n.employMemberList,i=n.employContactList,s=n.employEduList,c=n.employTrainList,l=n.employJobList,d=n.employFree,u=n.employAppendocVo,t.basicData=r,t.companyData=r,t.laborData=r,t.clientData=r,t.recruitData=r,t.idleData=d||{},t.affixData=u||{},t.employStatusData=r,o.forEach((function(e,a){t.familyList[a].formData=e})),i.forEach((function(e,a){t.emergencyCtctList[a].formData=e})),s.forEach((function(e,a){void 0===t.educationList[a]&&(t.educationList[a]={}),t.educationList[a].formData=e})),c.forEach((function(e,a){void 0===t.trainingList[a]&&(t.trainingList[a]={}),t.trainingList[a].formData=e})),l.forEach((function(e,a){void 0===t.workExeList[a]&&(t.workExeList[a]={}),t.workExeList[a].formData=e}));case 25:case"end":return e.stop()}}),e)})))()},getEmployHistoryList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={employPidNo:t.employPidNo},e.next=3,Object(N["L"])(a);case 3:n=e.sent,t.onJobHistoryList=n;case 5:case"end":return e.stop()}}),e)})))()},getFreeHistory:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={employId:t.employId},e.next=3,Object(N["I"])(a);case 3:n=e.sent,t.idleHistoryList=n;case 5:case"end":return e.stop()}}),e)})))()}}},R=F,q=Object(I["a"])(R,n,r,!1,null,"f78bace8",null);e["default"]=q.exports},d14b:function(t,e,a){"use strict";a.d(e,"g",(function(){return r})),a.d(e,"i",(function(){return o})),a.d(e,"j",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"s",(function(){return c})),a.d(e,"p",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"v",(function(){return u})),a.d(e,"t",(function(){return m})),a.d(e,"f",(function(){return p})),a.d(e,"u",(function(){return f})),a.d(e,"c",(function(){return v})),a.d(e,"r",(function(){return b})),a.d(e,"q",(function(){return h})),a.d(e,"k",(function(){return y})),a.d(e,"m",(function(){return D})),a.d(e,"b",(function(){return I})),a.d(e,"o",(function(){return C})),a.d(e,"n",(function(){return w})),a.d(e,"h",(function(){return k})),a.d(e,"l",(function(){return g})),a.d(e,"a",(function(){return L}));a("99af");var n=a("b775");function r(){return Object(n["a"])({url:"/task/initFlow",method:"post"})}function o(t){return Object(n["a"])({url:"/task/start",method:"post",params:t})}function i(t){return Object(n["a"])({url:"/task/readyCommit?orgId=".concat(t.orgId,"&city=").concat(t.city),method:"post",data:t.taskDTO})}function s(t){return Object(n["a"])({url:"/task/commit",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/task/queryTasksPage",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/task/queryTaskDetail",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/task/queryRecordList",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/task/breakTask",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/task/readTask",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/task/queryCanBackNodeList",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/task/saveTask",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/task/removeTask",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/task/queryTaskUppriceSelectList?empName=".concat(t.empName,"&flowName=").concat(t.flowName,"&phoneNo=").concat(t.phoneNo),method:"post",data:t})}function h(t){return Object(n["a"])({url:"/task/queryTaskSelect",method:"post",params:t})}function y(t){return Object(n["a"])({url:"/task/queryEmployFlowPage",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/task/queryEmployTaskRecord",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/task/checkEmployUppriceGT6Month?empName=".concat(t.empName,"&flowName=").concat(t.flowName,"&phoneNo=").concat(t.phoneNo),method:"post",data:t})}function C(t){return Object(n["a"])({url:"/salary/queryNewSalaryInfo?employNum=".concat(t.employNum),method:"post",data:t})}function w(t){return Object(n["a"])({url:"/task/queryLeaveSelectList",method:"post",params:t})}function k(t){return Object(n["a"])({url:"/protectRule/getProtectRult",method:"post",params:t})}function g(t){return Object(n["a"])({url:"/employ/archives/queryEmployOfferDetail",method:"post",params:t})}function L(t){return Object(n["a"])({url:"/task/cancelTask",method:"post",data:t})}}}]);