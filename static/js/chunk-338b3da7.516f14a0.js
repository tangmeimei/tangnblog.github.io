(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-338b3da7"],{"131e":function(t,e,a){},"49bb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.queryClientListData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"客户简称"}},[a("el-input",{staticClass:"inpWidth",attrs:{clearable:"",placeholder:"客户简称"},model:{value:t.queryClientListData.contractOrg.clientSimpleName,callback:function(e){t.$set(t.queryClientListData.contractOrg,"clientSimpleName",e)},expression:"queryClientListData.contractOrg.clientSimpleName"}})],1),a("el-form-item",{attrs:{label:"所属交付组织"}},[a("el-cascader",{staticClass:"inpWidth",attrs:{options:t.relationList,props:{expandTrigger:"hover"},clearable:"",placeholder:"请选择"},model:{value:t.orgIdArr1,callback:function(e){t.orgIdArr1=e},expression:"orgIdArr1"}})],1),a("el-form-item",{attrs:{label:"授权日期"}},[a("el-date-picker",{staticClass:"inpWidth",attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"daterange",placeholder:"请选择","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}})],1),a("el-form-item",{attrs:{label:"被授权组织"}},[a("el-cascader",{staticClass:"inpWidth",attrs:{options:t.relationList,props:{expandTrigger:"hover"},clearable:"",placeholder:"请选择"},model:{value:t.orgIdArr2,callback:function(e){t.orgIdArr2=e},expression:"orgIdArr2"}})],1),a("el-form-item",{attrs:{label:"授权范围"}},[a("el-select",{staticClass:"inpWidth",attrs:{clearable:""},model:{value:t.queryClientListData.contractOrg.scope,callback:function(e){t.$set(t.queryClientListData.contractOrg,"scope",e)},expression:"queryClientListData.contractOrg.scope"}},t._l(t.yesOrNoContract,(function(t){return a("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"授权城市"}},[a("el-select",{staticClass:"inpWidth",attrs:{filterable:"",clearable:"",placeholder:"请选择"},model:{value:t.queryClientListData.contractOrg.citys,callback:function(e){t.$set(t.queryClientListData.contractOrg,"citys",e)},expression:"queryClientListData.contractOrg.citys"}},t._l(t.cityListData,(function(t){return a("el-option",{key:t.regionId,attrs:{label:t.regionName,value:t.regionName}})})),1)],1),a("el-form-item",{attrs:{label:"授权状态"}},[a("el-select",{staticClass:"inpWidth",attrs:{clearable:""},model:{value:t.queryClientListData.contractOrg.status,callback:function(e){t.$set(t.queryClientListData.contractOrg,"status",e)},expression:"queryClientListData.contractOrg.status"}},t._l(t.sqztTypeList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})})),1)],1),a("div",{staticClass:"right-btn"},[a("el-button",{staticClass:"but-91",on:{click:t.exportExcel}},[t._v("导出")]),a("el-button",{staticClass:"but-91",on:{click:t.emptyBtn}},[t._v("重置")]),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"client.contract.list",expression:"'client.contract.list'"}],staticClass:"but-91",on:{click:t.queryList}},[t._v("查询")])],1)],1),a("div",{staticClass:"tableContent"},[a("el-table",{ref:"tableRef",staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.listData,height:"530px",size:"medium",id:"out-table","header-cell-style":{background:"#fff",textAlign:"center",color:"#333"}},on:{"sort-change":t.onSortChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center",index:t.indexMethod}}),a("el-table-column",{attrs:{label:"客户简称",width:"190"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("zm-tooltip",{attrs:{content:t.row.contractOrg.clientSimpleName,refName:"supplierName"}})]}}])}),a("el-table-column",{attrs:{label:"交付所属组织",sortable:"custom",prop:"deliverOrgName",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.deliverOrgCn))])]}}])}),a("el-table-column",{attrs:{label:"被授权的合同",width:"190",align:"left"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("zm-tooltip",{attrs:{content:t.row.contractOrg.contractName,refName:"supplierName"}})]}}])}),a("el-table-column",{attrs:{label:"被授权组织",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.contractOrg.orgCn))])]}}])}),a("el-table-column",{attrs:{label:"授权开始日期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.handleTime(e.row.contractOrg.validStartDate)))])]}}])}),a("el-table-column",{attrs:{label:"授权终止日期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.handleTime(e.row.contractOrg.validEndDate)))])]}}])}),a("el-table-column",{attrs:{label:"授权范围",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s("TRUE"==e.row.contractOrg.scope?"合同":"仅合同报价"))])]}}])}),a("el-table-column",{attrs:{label:"授权城市",width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("zm-tooltip",{attrs:{content:t.row.contractOrg.citys||"--",refName:"supplierName"}})]}}])}),a("el-table-column",{attrs:{label:"取消授权原因",width:"110",align:"left"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("zm-tooltip",{attrs:{content:t.row.contractOrg.remark||"--",refName:"supplierName"}})]}}])})],1)],1),a("div",{staticClass:"pagination-min"},[a("el-pagination",{attrs:{"current-page":t.pagePa.pageIndex,"page-sizes":[15,30,50],"page-size":t.pagePa.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pagePa.rowCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pagePa,"pageIndex",e)},"update:current-page":function(e){return t.$set(t.pagePa,"pageIndex",e)},"update:pageSize":function(e){return t.$set(t.pagePa,"pageSize",e)},"update:page-size":function(e){return t.$set(t.pagePa,"pageSize",e)}}})],1)],1)},r=[],i=(a("159b"),a("a15b"),a("ac1f"),a("1276"),a("d3b7"),a("25f0"),a("fb6a"),a("a434"),a("8952")),s=a("99f2"),o=a("a417"),l=a("f6b0"),c=a("ed08"),u=a("e55b"),d=(a("5f98"),a("4360")),p=a("21a6"),f=a.n(p),h=a("1146"),g=a.n(h),b=d["a"].state.baseData.orgTreeData[0].children,m={name:"contractEmpower",components:{zmTooltip:i["a"],zmMessage:s["a"]},computed:{sqztTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_SQZT}},props:{},data:function(){return{listData:[],relationList:[],cityListData:[],yesOrNoContract:[{text:"合同",value:"TRUE"},{text:"仅合同报价",value:"FALSE"}],queryClientListData:{contractOrg:{citys:"",clientCompanyId:"",clientCompanyName:"",clientOrgRelationId:"",contractContentType:"",contractEndDate:"",contractId:"",contractName:"",contractStartDate:"",isCity:"",orgCn:"",orgId:"",relationId:"",remark:"",scope:"",status:"",validEndDate:"",validStartDate:""},deliverOrgId:"",displayVos:[]},searchData:"",orgIdArr1:"",orgIdArr2:"",pagePa:{pageIndex:1,pageSize:15,rowCount:0}}},activated:function(){var t=this;this.$nextTick((function(){t.$refs.tableRef.doLayout()}))},created:function(){this.baseList(),this.queryOrgListData()},methods:{getOrgName:function(t){if(!t)return"--";var e=Object(u["c"])(t),a=[];return e.forEach((function(t){a.push(Object(c["m"])(b,t,"orgId","orgName"))})),a.shift(),a=a.join("/"),a},handleTime:function(t){return t?t.split("T")[0]:"--"},queryOrgListData:function(){var t=this;Object(o["z"])({}).then((function(e){if(e){var a=e[0].children;t.relationList=t.deleteChildren(a)}})),Object(o["B"])({regionLevel:2}).then((function(e){t.cityListData=e}))},deleteChildren:function(t){for(var e=t,a=e.length;a--;a>0)e[a].children&&(e[a].children.length?(e[a].value=e[a].orgId,e[a].label=e[a].orgName,this.deleteChildren(e[a].children)):(e[a].value=e[a].orgId,e[a].label=e[a].orgName,delete e[a].children));return t},indexMethod:function(t){return this.pagePa.pageSize*this.pagePa.pageIndex+t-this.pagePa.pageSize+1},baseList:function(){var t=this;this.orgIdArr1&&(this.queryClientListData.deliverOrgId=this.orgIdArr1.slice(-1).toString());this.orgIdArr2&&(this.queryClientListData.contractOrg.orgId=this.orgIdArr2.slice(-1).toString()),this.searchData&&(this.queryClientListData.contractOrg.validStartDate=this.searchData[0],this.queryClientListData.contractOrg.validEndDate=this.searchData[1]),Object(l["s"])({input:this.queryClientListData,nextToken:"",pageEnd:0,pageIndex:this.pagePa.pageIndex,pageSize:this.pagePa.pageSize,pageStart:0}).then((function(e){t.pagePa.pageIndex=e.pageIndex,t.pagePa.rowCount=e.rowCount,t.listData=e.result}))},emptyBtn:function(){this.pagePa.pageIndex=1,this.orgIdArr=[],this.queryClientListData={contractOrg:{citys:"",clientCompanyId:"",clientCompanyName:"",clientOrgRelationId:"",contractContentType:"",contractEndDate:"",contractId:"",contractName:"",contractStartDate:"",isCity:"",orgCn:"",orgId:"",relationId:"",remark:"",scope:"",status:"",validEndDate:"",validStartDate:""},deliverOrgId:"",displayVos:[]},this.searchData="",this.orgIdArr1="",this.orgIdArr2="",this.baseList()},onSortChange:function(t){var e=this;this.sortData=[];var a="";a="ascending"===t.order?"asc":"desc";var n={display:a,field:t.prop};0===this.sortData.length?this.sortData.push(n):this.sortData.forEach((function(t,a){if(t.field===n.field){if(t.display===n.display)return void e.sortData.splice(a,1);e.sortData.splice(a,1),e.sortData.push(n)}else e.sortData.push(n)})),this.queryClientListData.displayVos=this.sortData,this.baseList()},queryList:function(){this.baseList()},handleSizeChange:function(t){this.pagePa.pageSize=t,this.baseList()},handleCurrentChange:function(t){this.pagePa.pageIndex=t,this.baseList()},exportExcel:function(){var t=g.a.utils.table_to_book(document.querySelector("#out-table")),e=g.a.write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{f.a.saveAs(new Blob([e],{type:"application/octet-stream"}),"sheetjs.xlsx")}catch(a){"undefined"!==typeof console&&console.log(a,e)}return e}}},y=m,C=(a("959a"),a("2877")),v=Object(C["a"])(y,n,r,!1,null,"00def724",null);e["default"]=v.exports},6:function(t,e){},"6f4d":function(t,e,a){"use strict";a("131e")},7:function(t,e){},8:function(t,e){},"959a":function(t,e,a){"use strict";a("c476")},"99f2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messagebox"},[a("el-dialog",{attrs:{title:t.content.subTitle,visible:t.isShowMessage,width:"24%","close-on-click-modal":!1},on:{close:t.handleCancel}},[a("div",{staticClass:"titles"},[a("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"26px","margin-right":"10px",color:"#fe9400"}}),a("span",[t._v(t._s(t.content.mainTitle))])]),a("div",{staticClass:"content"},[t._v(" "+t._s(t.content.contentText)+" ")]),t.messageBtn?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleCancel}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.onClick}},[t._v("确 定")])],1):a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleCancel}},[t._v("确 定")])],1)])],1)},r=[],i={name:"textMessage",props:{isShowMessage:{type:Boolean,default:!1},messageBtn:{type:Boolean,default:!0},content:{type:Object,default:function(){return{}}}},data:function(){return{dialogVisible:!1}},methods:{onClick:function(){this.$emit("click")},handleCancel:function(){this.$emit("update:isShowMessage",!1)}}},s=i,o=(a("6f4d"),a("2877")),l=Object(o["a"])(s,n,r,!1,null,"79a40cff",null);e["a"]=l.exports},c476:function(t,e,a){},e55b:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return c}));a("7db0"),a("99af"),a("fb6a"),a("159b");var n=a("ed08"),r=a("4360"),i=r["a"].state.baseData.orgTreeData,s=r["a"].state.baseData.jobTreeDate;function o(t,e){var a=[],n=function e(n,r){for(var i=0;i<n.length;i++){var s=n[i];if(s.value===r){a.push(s.extra1),a.push(r),e(t,s.parentId);break}s.children&&e(s.children,r)}};return n(t,e),a}function l(t){if(t){var e="",a=s.find((function(e){return e.value===t[0]})),n=a.children.find((function(e){return e.value===t[1]}));return e=n.extra2,e}}function c(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=d(t,i),r=p(Object(n["a"])(i));if(a){if(a.parentId){var s=u(a.parentId,r).reverse().concat([a.orgId]);return e?s:s.slice(1,s.length+1)}return[a.orgId]}}function u(t,e){var a=[];function n(t,e){e.forEach((function(r){t===r.orgId&&t===r.orgId&&(a.push(r.orgId),n(r.parentId,e))}))}return n(t,e),a}function d(t,e){var a=null;function n(e){e.forEach((function(e){if(t===e.orgId)return a=e;e.children&&e.children.length>0&&n(e.children)}))}return n(e),a}function p(t){var e=[];Object(n["a"])(t);function a(t){t.forEach((function(t){e.push(t),t.children&&t.children.length>0&&(a(t.children),delete t.children)}))}return a(t),e}},f6b0:function(t,e,a){"use strict";a.d(e,"l",(function(){return r})),a.d(e,"k",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return o})),a.d(e,"m",(function(){return l})),a.d(e,"n",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"o",(function(){return d})),a.d(e,"p",(function(){return p})),a.d(e,"d",(function(){return f})),a.d(e,"w",(function(){return h})),a.d(e,"e",(function(){return g})),a.d(e,"t",(function(){return b})),a.d(e,"c",(function(){return m})),a.d(e,"h",(function(){return y})),a.d(e,"f",(function(){return C})),a.d(e,"s",(function(){return v})),a.d(e,"r",(function(){return O})),a.d(e,"v",(function(){return D})),a.d(e,"x",(function(){return I})),a.d(e,"j",(function(){return L})),a.d(e,"u",(function(){return x})),a.d(e,"q",(function(){return S}));var n=a("b775");function r(t){return Object(n["a"])({url:"/business/client/queryClientCompanyList",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/business/client/queryClientCompanyInfo",method:"post",params:t})}function s(t){return Object(n["a"])({url:"/business/client/saveOrUpdateClientCompany",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/business/client/removeClientCompany",method:"post",params:t})}function l(t){return Object(n["a"])({url:"/business/contract/queryContractListByClientId",method:"post",params:t})}function c(t){return Object(n["a"])({url:"/business/contract/queryContractCompanyListByClientId",method:"post",params:t})}function u(t){return Object(n["a"])({url:"/business/client/checkReClientCompanyInfo",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/business/client/queryClientCompanyWorkplaceListByClientCompanyId",method:"post",params:t})}function p(t){return Object(n["a"])({url:"/business/scope/queryClientOrgList",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/business/scope/createClientOrg",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/business/scope/updateClientOrg",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/business/scope/createContractOrg",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/business/scope/queryContractOrgListById",method:"post",params:t})}function m(t){return Object(n["a"])({url:"/business/scope/closeClientOrg",method:"post",params:t})}function y(t){return Object(n["a"])({url:"/business/scope/deleteContractOrg",method:"post",params:t})}function C(t){return Object(n["a"])({url:"/business/scope/deleteClientOrg",method:"post",params:t})}function v(t){return Object(n["a"])({url:"/business/scope/queryContractOrgList",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/business/clientlevel/queryClientTwoLevelList",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/business/clientlevel/save",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/business/clientlevel/update",method:"post",data:t})}function L(t){return Object(n["a"])({url:"/business/clientlevel/detail",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/business/clientlevel/remove",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/business/clientlevel/queryClientTwoLevelBySelect",method:"post",data:t})}}}]);