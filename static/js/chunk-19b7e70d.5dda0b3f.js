(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b7e70d"],{"08b5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer-container"},[n("div",{staticClass:"search-wrap"},[n("zm-Search",{ref:"search",attrs:{inputList:t.inputConfig,btnConfig:t.btnConfig},on:{reset:t.resetTable,search:t.searchIdle,employRemote:t.employRemote,clientRemote:t.clientRemote,exportAddEmploy:t.exportAddEmploy}})],1),n("div",{staticClass:"tableContent"},[n("zm-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"tableRef",staticStyle:{width:"100%"},attrs:{"header-cell-style":{"text-align":"center"},tableData:t.tableData,columns:t.columnsList,height:"542px",currentPage:t.pageData.pageIndex,pageSize:t.pageData.pageSize,total:t.pageData.pageCount,sizeList:t.sizeList},on:{viewFn:t.viewFn,handleCurrentChange:t.handleCurrentChange,sortChange:t.sortChange,handleSizeChange:t.handleSizeChange}})],1)])},o=[],a=n("1da1"),u=n("5530"),i=(n("96cf"),n("ac1f"),n("841c"),n("159b"),n("a434"),n("d81d"),n("99af"),n("8cc7")),c=n("a937"),s=(n("ed08"),n("5f98")),l=function(t){var e=t.$store.state.baseData.baseDataOptionList.IT_EMTY,n=t.$store.state.baseData.jobTreeDate;return[{type:"cascader-input",bind_key:"orgId",label:"所属部门",optionList:t.$store.state.baseData.orgTreeData[0].children,span:6,checkStrictly:!0,propLabel:"orgName",propValue:"orgId"},{type:"date-input",span:6,label:"入职年月",bind_key:"employEnterDate",datePickerType:"month",placeholder:"选择月",formatShow:"yyyy-MM",valueFormat:"yyyy-MM",notClear:"clear",notEdit:"no"},{type:"select-input",bind_key:"employType",label:"员工类型",span:6,optionList:e},{type:"cascader-input",bind_key:"employJob",label:"公司岗位",span:6,optionList:n,checkStrictly:!0,propLabel:"text",propValue:"value"},{type:"text-input",bind_key:"employKeyword",label:"工号/姓名",placeholder:"工号或姓名",span:6},{type:"remote-loading-input",bind_key:"employClientId",label:"所属客户",span:6,optionList:t.clientOptions,loading:t.clientLoading,remoteMethod:"clientRemote"}]},p=function(t){return{span:24,customList:[{customBtnText:"导出",changeFn:"exportAddEmploy",role:"employ.new.export",loading:t.exportLoading}],leftBtnHidden:!Object(s["a"])("employ.new.list")}},d=function(t){return[{label:"序号",type:"index",fixed:"left",width:"50px",kind:"render",render:function(e,n){var r=n.$index+1,o=(t.pageData.pageIndex-1)*t.pageData.pageSize;return e("span",r+o)}},{label:"入职年月",prop:"employEnterYear",align:"left",fixed:"left",minWidth:100},{label:"工号",prop:"employNo",align:"left",fixed:"left",minWidth:100},{label:"姓名",prop:"employName",sortable:"custom",align:"left",fixed:"left",minWidth:100},{label:"员工类型",prop:"employType",align:"left",sortable:"custom",minWidth:120},{label:"所属部门",prop:"orgName",sortable:"custom",minWidth:150,align:"left"},{label:"公司岗位",prop:"companyJob",minWidth:120,sortable:"custom"},{label:"公司岗位级别",prop:"companyJobLevel",minWidth:130,sortable:"custom"},{label:"入职日期",prop:"employEnterDate",align:"left",minWidth:100},{label:"员工状态",prop:"employState",minWidth:80,align:"left"},{label:"所属客户",prop:"clientCompanyName",sortable:"custom",minWidth:150,align:"left"},{label:"结算岗位",prop:"saleJob",align:"left",sortable:"custom",minWidth:100},{label:"结算级别",prop:"saleLevel",align:"left",sortable:"custom",minWidth:100},{label:"对应交付",prop:"companyDeliver",align:"left",minWidth:150},{label:"对应招聘",prop:"companyRecruit",align:"left",minWidth:150},{label:"操作",fixed:"right",width:"120px",kind:"formatBtn",firstBtn:{text:"详情",role:"employ.new.info",fn:"viewFn"}}]},m=n("dc27"),f=n("f6b0"),y=n("a417"),h=(n("61f7"),n("2f62")),b={name:"employAddList",components:{zmTable:i["a"],zmSearch:c["a"]},data:function(){return{tableData:[],optionList:[],pageData:{pageIndex:1,pageSize:15,pageCount:0},sortData:[],searchData:{},sizeList:[15,30,50],employOptions:[],employLoading:!1,clientOptions:[],clientLoading:!1,tableLoading:!1,exportLoading:!1}},computed:{columnsList:function(){return d(this)},inputConfig:function(){return l(this)},btnConfig:function(){return p(this)}},mounted:function(){this.getEmployAddList(),console.log("search组件：",this.$refs.search),this.$set(this.$refs.search.searchData,"employEnterDate",new Date)},activated:function(){var t=this;this.$nextTick((function(){t.$refs.tableRef.doLayoutTable()}))},methods:Object(u["a"])(Object(u["a"])({},Object(h["d"])("entryCfmSalary",["CHANGE_EDIT_PROCESS_STATUS","CHANGE_LIST_PAGE_STAUTS"])),{},{getEmployAddList:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t||{},o={input:r},e.tableLoading=!0,a=Object.assign({},e.pageData,o),a.input.displays=e.sortData,n.next=7,Object(m["B"])(a);case 7:u=n.sent,e.pageData.pageIndex=u.pageIndex,e.pageData.pageCount=u.rowCount,e.tableData=u.result,e.tableLoading=!1;case 12:case"end":return n.stop()}}),n)})))()},addIdle:function(){this.$router.push("/hr/idleAdd")},searchIdle:function(t){var e=JSON.parse(JSON.stringify(t));console.log("请求查询的参数对象：",e),e.orgId&&e.orgId.length?e.orgId=e.orgId[e.orgId.length-1]:delete e.orgId,e.employJob&&e.employJob.length?e.employJob=e.employJob[e.employJob.length-1]:delete e.employJob,e.employEnterDate?(e.employEnterDate=new Date(e.employEnterDate),this.pageData.pageIndex=1,this.searchData=e,this.getEmployAddList(e)):this.$message.warning("请选择查询日期！")},handleSizeChange:function(t){this.pageData.pageIndex=1,this.pageData.pageSize=t,this.getEmployAddList(this.searchData)},resetTable:function(){this.pageData.pageIndex=1,this.$set(this.$refs.search.searchData,"employEnterDate",new Date),this.searchData={},this.getEmployAddList(this.searchData)},handleCurrentChange:function(t){this.pageData.pageIndex=t,this.getEmployAddList(this.searchData)},sortChange:function(t){var e=this;if(this.sortData=[],t.order){var n="";n="ascending"===t.order?"asc":"desc";var r={display:n,field:t.prop};0===this.sortData.length?this.sortData.push(r):this.sortData.forEach((function(t,n){if(t.field===r.field){if(t.display===r.display)return void e.sortData.splice(n,1);e.sortData.splice(n,1),e.sortData.push(r)}else e.sortData.push(r)})),this.getEmployAddList(this.searchData)}else this.getEmployAddList(this.searchData)},employRemote:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("拿到的数据：",t),e.employLoading=!0,n.prev=2,n.next=5,Object(y["L"])({keyword:t});case 5:r=n.sent,console.log("查询用户结果",r),e.employOptions=Array.isArray(r)&&r.map((function(t){var e={};return e=Object.assign(e,t,t.userInfo),Object(u["a"])({text:"[".concat(t.userInfo.loginName,"] ").concat(t.userInfo.userName),value:t.userInfo.userId},e)})),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](2);case 12:return n.prev=12,e.employLoading=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,10,12,15]])})))()},clientRemote:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("拿到的数据：",t),e.clientLoading=!0,n.prev=2,n.next=5,Object(f["l"])({input:{keyword:t,clientType:"IT_CLTP_001"}});case 5:r=n.sent,console.log("查询所属客户",r),e.clientOptions=Array.isArray(r.result)&&r.result.map((function(t){return{text:"".concat(t.clientCompany.clientCompanyName),value:t.clientCompany.clientCompanyId}})),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](2);case 12:return n.prev=12,e.clientLoading=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,10,12,15]])})))()},viewFn:function(t){this.$router.push({path:"/hr/detailsStaff/".concat(t.employId),query:{employPidNo:t.employPidNo}})},exportAddEmploy:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={displays:t.sortData,input:t.searchData},console.log("查询参数：",n),t.exportLoading=!0,e.prev=3,e.next=6,Object(m["i"])(n);case 6:o=e.sent,console.log("请求导出转新增员工结果：",o),"200"===o.code&&(r=o.msg,a="https://www.tobowork.com//api/tobosoft-toms/commons/exportfile/download?delete=false&fileName="+r,u=document.createElement("a"),u.setAttribute("download",r),u.href=a,document.body.appendChild(u),u.click(),u.remove()),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](3);case 13:return e.prev=13,t.exportLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,11,13,16]])})))()}})},g=b,O=(n("27a5"),n("2877")),v=Object(O["a"])(g,r,o,!1,null,"f1ad4d38",null);e["default"]=v.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"27a5":function(t,e,n){"use strict";n("f79f")},"841c":function(t,e,n){"use strict";var r=n("d784"),o=n("825a"),a=n("1d80"),u=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=o(t),c=String(this),s=a.lastIndex;u(s,0)||(a.lastIndex=0);var l=i(a,c);return u(a.lastIndex,s)||(a.lastIndex=s),null===l?-1:l.index}]}))},dc27:function(t,e,n){"use strict";n.d(e,"t",(function(){return o})),n.d(e,"R",(function(){return a})),n.d(e,"db",(function(){return u})),n.d(e,"E",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"x",(function(){return s})),n.d(e,"J",(function(){return l})),n.d(e,"K",(function(){return p})),n.d(e,"G",(function(){return d})),n.d(e,"cb",(function(){return m})),n.d(e,"P",(function(){return f})),n.d(e,"bb",(function(){return y})),n.d(e,"N",(function(){return h})),n.d(e,"eb",(function(){return b})),n.d(e,"hb",(function(){return g})),n.d(e,"ab",(function(){return O})),n.d(e,"gb",(function(){return v})),n.d(e,"H",(function(){return j})),n.d(e,"I",(function(){return C})),n.d(e,"F",(function(){return E})),n.d(e,"L",(function(){return L})),n.d(e,"O",(function(){return x})),n.d(e,"fb",(function(){return D})),n.d(e,"jb",(function(){return w})),n.d(e,"w",(function(){return I})),n.d(e,"C",(function(){return q})),n.d(e,"s",(function(){return k})),n.d(e,"U",(function(){return S})),n.d(e,"V",(function(){return A})),n.d(e,"M",(function(){return T})),n.d(e,"v",(function(){return R})),n.d(e,"ib",(function(){return F})),n.d(e,"p",(function(){return N})),n.d(e,"h",(function(){return B})),n.d(e,"W",(function(){return W})),n.d(e,"g",(function(){return _})),n.d(e,"n",(function(){return z})),n.d(e,"X",(function(){return J})),n.d(e,"B",(function(){return $})),n.d(e,"Q",(function(){return P})),n.d(e,"D",(function(){return U})),n.d(e,"l",(function(){return M})),n.d(e,"i",(function(){return H})),n.d(e,"m",(function(){return G})),n.d(e,"y",(function(){return V})),n.d(e,"A",(function(){return Y})),n.d(e,"z",(function(){return K})),n.d(e,"S",(function(){return Z})),n.d(e,"c",(function(){return Q})),n.d(e,"e",(function(){return X})),n.d(e,"b",(function(){return tt})),n.d(e,"d",(function(){return et})),n.d(e,"j",(function(){return nt})),n.d(e,"f",(function(){return rt})),n.d(e,"Z",(function(){return ot})),n.d(e,"T",(function(){return at})),n.d(e,"q",(function(){return ut})),n.d(e,"Y",(function(){return it})),n.d(e,"r",(function(){return ct})),n.d(e,"o",(function(){return st})),n.d(e,"u",(function(){return lt})),n.d(e,"k",(function(){return pt}));var r=n("b775");function o(t){return Object(r["a"])({url:"/employ/attr/queryEmployAttrList",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/employ/archives/queryEmployList",method:"post",params:t})}function u(t){return Object(r["a"])({url:"/employ/attr/saveOrUpdateEmployAttr",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/employ/attr/queryEmployAttr",method:"post",params:t})}function c(t){return Object(r["a"])({url:"/employ/attr/addOrCancelAttr",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/employ/attr/queryEmployAttrHistory",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/employ/free/queryEmployFreeList",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/employ/free/queryEmployFreePoolList",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/employ/free/queryEmployFree",method:"post",params:t})}function m(t){return Object(r["a"])({url:"/employ/archives/saveOrUpdateEmploy",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/employ/archives/queryEmployInfoList",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/employ/archives/removeEmployInfo",method:"post",params:t})}function h(t){return Object(r["a"])({url:"/employ/archives/queryEmployInfoDetail",method:"post",params:t})}function b(t){return Object(r["a"])({url:"/employ/free/saveOrUpdateEmployFree",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/employ/free/updateEmployFreeEntry",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/employ/free/removeEmployFree",method:"post",params:t})}function v(t){return Object(r["a"])({url:"/employ/free/updateCancelEmployFree",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/employ/free/queryEmployFreeDetail",method:"post",params:t})}function C(t){return Object(r["a"])({url:"/employ/free/queryEmployFreeHistory",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/employ/archives/queryEmployFormalList",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/employ/archives/queryEmployHistoryList",method:"post",params:t})}function x(t){return Object(r["a"])({url:"/employ/archives/queryEmployInfo",method:"post",params:t})}function D(t){return Object(r["a"])({url:"/employ/archives/updateBatchFormal",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/employ/archives/updateFormalDelay",method:"post",data:t})}function I(){return Object(r["a"])({url:"/employ/archives/queryAppointCount",method:"post"})}function q(t){return Object(r["a"])({url:"/employ/archives/queryEmployBaseDetail?employId=".concat(t.employId),method:"post"})}function k(t){return Object(r["a"])({url:"/employ/archives/getEmployBaseDetail",method:"post",params:t})}function S(t){return Object(r["a"])({url:"/employ/archives/queryEmployWorkCount",method:"post",params:t})}function A(t){return Object(r["a"])({url:"/employ/archives/queryLastEmployChangeRecord",method:"post",params:t})}function T(t){return Object(r["a"])({url:"/employ/archives/queryEmployInfoContractPage",method:"post",data:t})}function R(t){return Object(r["a"])({url:"/employ/archives/operateEmployInfoContract",method:"post",data:t})}function F(t){return Object(r["a"])({url:"/employ/archives/updateEmployInfoContract",method:"post",data:t})}function N(t){return Object(r["a"])({url:"/employ/archives/exportEmployInfoContract",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/employ/archives/checkSpecialDate",method:"post",data:t})}function W(t){return Object(r["a"])({url:"/employ/free/queryNewEmployFreeDetail",method:"post",params:t})}function _(t){return Object(r["a"])({url:"/employ/archives/checkFlow",method:"post",params:t})}function z(t){return Object(r["a"])({url:"/employ/archives/exportEmploy",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/system/org/queryOrgMoney?employType=".concat(t.employType),method:"post"})}function $(t){return Object(r["a"])({url:"/employ/activity/getNewEmployList",method:"post",data:t})}function P(t){return Object(r["a"])({url:"/employ/activity/getReductionEmployList",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/employ/activity/getPositiveEmployList",method:"post",data:t})}function M(t){return Object(r["a"])({url:"/employ/activity/exportPositiveEmployExcel",method:"post",data:t})}function H(t){return Object(r["a"])({url:"/employ/activity/exportNewEmployExcel",method:"post",data:t})}function G(t){return Object(r["a"])({url:"/employ/activity/exportReductionEmployExcel",method:"post",data:t})}function V(t){return Object(r["a"])({url:"/business/client/queryClientCompanySelectListByLike",method:"post",params:t})}function Y(t){return Object(r["a"])({url:"/business/contract/queryContractSelectByOrgIdANDClientCompanyIdOnEmploy",method:"post",params:t})}function K(t){return Object(r["a"])({url:"/business/client/queryClientCompanyWorkplaceListByLike",method:"post",params:t})}function Z(t){return Object(r["a"])({url:"/employ/activity/getaddOrLeaveEmployList",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/employ/two/updChangeLeave",method:"post",data:t})}function X(t){return Object(r["a"])({url:"/employ/two/updChangeEmployType",method:"post",data:t})}function tt(t){return Object(r["a"])({url:"/employ/two/updChangeZhuanOrg",method:"post",data:t})}function et(t){return Object(r["a"])({url:"/employ/two/updChangeTiaoGang",method:"post",data:t})}function nt(t){return Object(r["a"])({url:"/employ/two/exportUnFormalEmployChangeFinanceList",method:"post",data:t})}function rt(t){return Object(r["a"])({url:"/employ/two/getTwoDetail",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/system/user/queryUserSelectListByCondition",method:"post",params:t})}function at(t){return Object(r["a"])({url:"/employ/archives/queryEmployRosterList",method:"post",data:t})}function ut(t){return Object(r["a"])({url:"/employ/archives/exportEmployRoster",method:"post",data:t})}function it(t){return Object(r["a"])({url:"/employ/archives/queryRosterList",method:"post",data:t})}function ct(t){return Object(r["a"])({url:"/employ/archives/exportRoster",method:"post",data:t})}function st(t){return Object(r["a"])({url:"/employ/free/exportEmployFree",method:"post",data:t})}function lt(t){return Object(r["a"])({url:"/employ/rosterrealtime/getLastContrastInfo",method:"get",data:t})}function pt(t){return Object(r["a"])({url:"/employ/rosterrealtime/exportContrastExcel",method:"get",data:t})}},f6b0:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"k",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return i})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"o",(function(){return p})),n.d(e,"p",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"w",(function(){return f})),n.d(e,"e",(function(){return y})),n.d(e,"t",(function(){return h})),n.d(e,"c",(function(){return b})),n.d(e,"h",(function(){return g})),n.d(e,"f",(function(){return O})),n.d(e,"s",(function(){return v})),n.d(e,"r",(function(){return j})),n.d(e,"v",(function(){return C})),n.d(e,"x",(function(){return E})),n.d(e,"j",(function(){return L})),n.d(e,"u",(function(){return x})),n.d(e,"q",(function(){return D}));var r=n("b775");function o(t){return Object(r["a"])({url:"/business/client/queryClientCompanyList",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/business/client/queryClientCompanyInfo",method:"post",params:t})}function u(t){return Object(r["a"])({url:"/business/client/saveOrUpdateClientCompany",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/business/client/removeClientCompany",method:"post",params:t})}function c(t){return Object(r["a"])({url:"/business/contract/queryContractListByClientId",method:"post",params:t})}function s(t){return Object(r["a"])({url:"/business/contract/queryContractCompanyListByClientId",method:"post",params:t})}function l(t){return Object(r["a"])({url:"/business/client/checkReClientCompanyInfo",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/business/client/queryClientCompanyWorkplaceListByClientCompanyId",method:"post",params:t})}function d(t){return Object(r["a"])({url:"/business/scope/queryClientOrgList",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/business/scope/createClientOrg",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/business/scope/updateClientOrg",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/business/scope/createContractOrg",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/business/scope/queryContractOrgListById",method:"post",params:t})}function b(t){return Object(r["a"])({url:"/business/scope/closeClientOrg",method:"post",params:t})}function g(t){return Object(r["a"])({url:"/business/scope/deleteContractOrg",method:"post",params:t})}function O(t){return Object(r["a"])({url:"/business/scope/deleteClientOrg",method:"post",params:t})}function v(t){return Object(r["a"])({url:"/business/scope/queryContractOrgList",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/business/clientlevel/queryClientTwoLevelList",method:"post",data:t})}function C(t){return Object(r["a"])({url:"/business/clientlevel/save",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/business/clientlevel/update",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/business/clientlevel/detail",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/business/clientlevel/remove",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/business/clientlevel/queryClientTwoLevelBySelect",method:"post",data:t})}},f79f:function(t,e,n){}}]);