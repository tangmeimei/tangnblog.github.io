(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-713c28ec"],{"2b6d":function(t,s,a){"use strict";a.d(s,"l",(function(){return i})),a.d(s,"k",(function(){return l})),a.d(s,"o",(function(){return n})),a.d(s,"p",(function(){return o})),a.d(s,"q",(function(){return c})),a.d(s,"r",(function(){return r})),a.d(s,"m",(function(){return v})),a.d(s,"a",(function(){return m})),a.d(s,"t",(function(){return d})),a.d(s,"i",(function(){return C})),a.d(s,"c",(function(){return u})),a.d(s,"b",(function(){return b})),a.d(s,"n",(function(){return p})),a.d(s,"d",(function(){return _})),a.d(s,"e",(function(){return w})),a.d(s,"f",(function(){return x})),a.d(s,"s",(function(){return f})),a.d(s,"j",(function(){return y})),a.d(s,"g",(function(){return h})),a.d(s,"h",(function(){return L}));a("99af");var e=a("b775");function i(t){return Object(e["a"])({url:"/business/vmclient/queryVmClientList",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/business/vmclient/queryVmClientInfo",method:"post",params:t})}function n(t){return Object(e["a"])({url:"/business/vmclient/removeVmClientCompany",method:"post",params:t})}function o(t){return Object(e["a"])({url:"/business/vmclient/removeVmClientTail",method:"post",params:t})}function c(t){return Object(e["a"])({url:"/business/vmclient/saveOrUpdateVmClient",method:"post",data:t})}function r(t){return Object(e["a"])({url:"/business/vmclient/saveOrUpdateVmClientTail",method:"post",data:t})}function v(t){return Object(e["a"])({url:"/business/vmclient/queryVmClientTailList",method:"post",data:t})}function m(t){return Object(e["a"])({url:"/business/vmclient/clientFlow",method:"post",params:t})}function d(t){return Object(e["a"])({url:"/business/vmclient/updateNewsStatus",method:"post",params:t})}function C(t){return Object(e["a"])({url:"/business/vmclient/newsFlow",method:"post",params:t})}function u(t){return Object(e["a"])({url:"/business/vmclient/exportVmClientList",method:"post",data:t})}function b(t){return Object(e["a"])({url:"/commons/exportfile/download",method:"get",params:t})}function p(t){return Object(e["a"])({url:"/business/vmclient/queryVmClientUsers",method:"post",data:t})}function _(t){return Object(e["a"])({url:"/commons/tianyancha/getBaseInfoV2",method:"post",data:t})}function w(t){return Object(e["a"])({url:"/commons/tianyancha/getCompanyLawSuit",method:"post",data:t})}function x(t){return Object(e["a"])({url:"/commons/tianyancha/getCompanyProfile",method:"post",data:t})}function f(t){return Object(e["a"])({url:"/commons/tianyancha/searchCompany",method:"post",data:t})}function y(t){return Object(e["a"])({url:"/business/client/queryClientCompanySelectListByOrgId",method:"post",data:t})}function h(t){return Object(e["a"])({url:"/business/contract/getContractPrice?cityCn=".concat(t.cityCn,"&contractId=").concat(t.contractId,"&jobCn=").concat(t.jobCn,"&jobLevel=").concat(t.jobLevel),method:"post"})}function L(t){return Object(e["a"])({url:"/business/contract/queryContractPriceDimension?contractId=".concat(t.contractId),method:"post"})}},"4d31":function(t,s,a){"use strict";a("5939")},5939:function(t,s,a){},f47a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"table-min"},[a("div",{staticClass:"item-section"},[t._m(0),a("div",{staticClass:"item-table"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("准客户全称：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.clientCompanyName)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("统一信用编码：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(t.vmClientCompany.creditCode))])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("注册资金（万元）：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.registerMoney)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("成立日期：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.registerDate?t.vmClientCompany.registerDate.split("T")[0]:"--")+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("所属集团名称：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.clientGroupName||"--")+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("企业网址：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.companySiteUrl||"--")+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("企业类型：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.companyNatureTypeList,t.vmClientCompany.companyNature))+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("所属行业：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.industryTypeList,t.vmClientCompany.industryType))+"-"+t._s(t.getqueryLabelById(t.industrySubTypeList,t.vmClientCompany.industrySubType))+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("企业所在地：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.registerAddress)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("是否属于风险类客户：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.isRiskTypeList,t.vmClientCompany.isRisk))+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box item-textarea"},[a("div",{staticClass:"label"},[t._v("客户简介：")]),a("div",{staticClass:"item-box-txt"},[a("div",{domProps:{innerHTML:t._s(t.vmClientCompany.clientCompanyRemark)}})])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box item-textarea"},[a("div",{staticClass:"label"},[t._v("业务范围：")]),a("div",{staticClass:"item-box-txt"},[a("p",[t._v(t._s(t.vmClientCompany.businessScope))])])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("客户不良诉讼记录：")]),a("div",{staticClass:"item-box-txt"},[a("p",[t._v(t._s(t.vmClientCompany.badLawsuitRecord))])])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("内部反馈不良记录：")]),a("div",{staticClass:"item-box-txt"},[a("p",[t._v(t._s(t.vmClientCompany.badFeedbackRecord))])])])])],1)],1)]),a("div",{staticClass:"item-section"},[t._m(1),a("div",{staticClass:"item-table"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("商机描述：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.newsDetail)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("商机来源：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.newsSourceTypeList,t.vmClientCompanyNews.newsSource))+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("商机赢率%：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.newsWinRate)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("客户决策链：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.clientDecision)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("预计可合作人数：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.cooperateCount)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("预计可合作金额（万元）：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.cooperatePrice)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("年度采购节点：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.purchaseNode)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("下次采购时间：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.nextPurchaseTime?t.formateDateMonth(t.vmClientCompanyNews.nextPurchaseTime):"--")+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("服务需求地域：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.demandAddress)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box item-textarea"},[a("div",{staticClass:"label"},[t._v("客户情况分析：")]),a("div",{staticClass:"item-box-txt"},[a("div",{domProps:{innerHTML:t._s(t.vmClientCompanyNews.clientAnalysis)}})])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box item-textarea"},[a("div",{staticClass:"label"},[t._v("商机分析：")]),a("div",{staticClass:"item-box-txt"},[a("div",{domProps:{innerHTML:t._s(t.vmClientCompanyNews.newsAnalysis)}})])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box item-textarea"},[a("div",{staticClass:"label"},[t._v("竞争对手分析：")]),a("div",{staticClass:"item-box-txt"},[a("div",{domProps:{innerHTML:t._s(t.vmClientCompanyNews.enemyAnalysis)}})])])])],1)],1)]),a("div",{staticClass:"item-section"},[t._m(2),t._l(t.vmClientCompanyContactList,(function(s,e){return a("div",{key:e,staticClass:"item-table"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("姓名：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactName))])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("所属部门/岗位：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactOrg))])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("办公电话：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactTel||"--"))])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("手机号码：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactPhone))])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("微信号：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactWeixin||"--"))])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("邮箱：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactEmail||"--"))])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("联系人特征：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(s.contactRemark||"--"))])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("关系描述：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(s.contactRelationRemark||"--")+" ")])])])],1)],1)}))],2),a("div",{staticClass:"item-section"},[t._m(3),a("div",{staticClass:"item-table"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("申请人：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.applicantUserInfo.applicantUserName||"--")+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("是否为团队客户：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.applicantIsTeamTypeList,t.vmClientCompany.applicantIsTeam))+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("所属部门：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.applicantUserInfo.applicantUserOrgName||"--")+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("申请时间：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.mdeCreatedDate?t.formateDate(t.vmClientCompany.mdeCreatedDate):"--")+" ")])])])],1)],1)]),t.currentType?a("div",[a("div",{staticClass:"item-section"},[t._m(6),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("客户名称：")]),a("div",{staticClass:"value-box"},[t._v(" "+t._s(t.vmClientCompany.clientCompanyName)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("此客户档案共有：")]),a("div",{staticClass:"value-box"},[t._v(t._s(t.clientFlowNum)+"个")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核状态：")]),"doc.audit"==t.pagetag?a("div",{staticClass:"value-box"},[a("el-select",{staticStyle:{width:"100%"},model:{value:t.clientFlowListData.flowStatus,callback:function(s){t.$set(t.clientFlowListData,"flowStatus",s)},expression:"clientFlowListData.flowStatus"}},t._l(t.vmClientStatus,(function(t){return a("el-option",{key:t.dataId,attrs:{label:t.text,clearable:"",value:t.value,disabled:t.disabled}})})),1)],1):a("div",{staticClass:"value-box"},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"IT_VCAS_002"==t.clientFlowListData.flowStatus},model:{value:t.clientFlowListData.flowStatus,callback:function(s){t.$set(t.clientFlowListData,"flowStatus",s)},expression:"clientFlowListData.flowStatus"}},t._l(t.vmClientStatus,(function(t){return a("el-option",{key:t.dataId,attrs:{label:t.text,clearable:"",value:t.value,disabled:t.disabled}})})),1)],1)])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核人：")]),a("div",{staticClass:"value-box"},[t._v(" "+t._s(t.applicantUserInfo.clientFlowUserName)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核意见：")]),"doc.audit"==t.pagetag?a("div",{staticClass:"value-box"},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:t.clientFlowListData.flowRemark,callback:function(s){t.$set(t.clientFlowListData,"flowRemark",s)},expression:"clientFlowListData.flowRemark"}})],1):a("div",{staticClass:"value-box"},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",disabled:"IT_VCAS_002"==t.clientFlowListData.flowStatus},model:{value:t.clientFlowListData.flowRemark,callback:function(s){t.$set(t.clientFlowListData,"flowRemark",s)},expression:"clientFlowListData.flowRemark"}})],1)])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核时间：")]),a("div",{staticClass:"value-box"},["doc.audit"!=t.pagetag?a("span",[t._v(t._s(t.vmClientCompany.clientFlowDate?t.formateDate(t.vmClientCompany.clientFlowDate):"--"))]):t._e()])])])],1)],1),"IT_VCAS_002"==t.vmClientCompany.clientFlowStatus?a("div",{staticClass:"item-section"},[t._m(7),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("客户名称：")]),a("div",{staticClass:"value-box"},[t._v(" "+t._s(t.vmClientCompany.clientCompanyName)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("此客户资源池共有：")]),a("div",{staticClass:"value-box"},[t._v(t._s(t.newsClienNum)+"个")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核状态：")]),a("div",{staticClass:"value-box"},[a("el-select",{staticStyle:{width:"100%"},model:{value:t.newsFlowListData.flowStatus,callback:function(s){t.$set(t.newsFlowListData,"flowStatus",s)},expression:"newsFlowListData.flowStatus"}},t._l(t.vmClientStatus,(function(t){return a("el-option",{key:t.dataId,attrs:{label:t.text,clearable:"",value:t.value,disabled:t.disabled}})})),1)],1)])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核人：")]),a("div",{staticClass:"value-box"},[t._v(" "+t._s(t.applicantUserInfo.newsFlowUserName)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核意见：")]),a("div",{staticClass:"value-box"},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:t.newsFlowListData.flowRemark,callback:function(s){t.$set(t.newsFlowListData,"flowRemark",s)},expression:"newsFlowListData.flowRemark"}})],1)])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"col-item"},[a("div",{staticClass:"label"},[t._v("审核时间：")]),a("div",{staticClass:"value-box"},[t._v(" "+t._s(t.vmClientCompanyNews.newsFlowDate?t.formateDate(t.vmClientCompanyNews.newsFlowDate):"--")+" ")])])])],1)],1):t._e()]):a("div",[a("div",{staticClass:"item-section"},[t._m(4),a("div",{staticClass:"item-table"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("客户名称：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.clientCompanyName)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("此客户档案共有：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(t.clientFlowNum)+"个")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("建档状态：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.vmClientStatus,t.vmClientCompany.clientFlowStatus))+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("审核人：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.applicantUserInfo.clientFlowUserName)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("审核意见：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.clientFlowRemark)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("审核时间：")]),"IT_VCAS_002"==t.clientFlowListData.flowStatus?a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.clientFlowDate?t.formateDate(t.vmClientCompany.clientFlowDate):"--")+" ")]):t._e()])])],1)],1)]),a("div",{staticClass:"item-section"},[t._m(5),a("div",{staticClass:"item-table"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("客户名称：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompany.clientCompanyName)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("此客户资源池共有：")]),a("div",{staticClass:"item-box-txt"},[t._v(t._s(t.newsClienNum)+"个")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("商机状态：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.getqueryLabelById(t.vmClientStatus,t.vmClientCompanyNews.newsFlowStatus))+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("审核人：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.applicantUserInfo.newsFlowUserName)+" ")])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("审核意见：")]),a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.newsFlowRemark)+" ")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"label"},[t._v("审核时间：")]),"IT_VCAS_001"!=t.newsFlowListData.flowStatus?a("div",{staticClass:"item-box-txt"},[t._v(" "+t._s(t.vmClientCompanyNews.newsFlowDate?t.formateDate(t.vmClientCompanyNews.newsFlowDate):"--")+" ")]):t._e()])])],1)],1)])])]),a("div",{staticClass:"submitForm"},[a("div",{staticClass:"close",on:{click:t.closePage}},[t._v("关闭")]),t.currentType?a("div",{staticClass:"submit",on:{click:function(s){return t.submitForm()}}},[t._v("提交")]):t._e()])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("准客户信息")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("商机信息")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("联系人")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("申请人信息")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("建档审核")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("商机审核")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("建档审核")]),a("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item-title"},[a("span",[t._v("商机审核")]),a("div",{staticClass:"line"})])}],l=a("b85c"),n=a("2b6d"),o=a("ed08"),c=a("953d"),r=(a("a753"),a("8096"),a("14e1"),{components:{quillEditor:c["quillEditor"]},name:"addGroup",data:function(){return{pagetag:"",vmClientCompany:{},vmClientCompanyNews:{},vmClientCompanyContactList:[],userInfo:{},applicantUserInfo:{},clientCompanyId:"",currentType:0,from:"",clientFlowListData:{clientCompanyId:"",flowRemark:"",flowStatus:""},newsFlowListData:{newsId:"",flowRemark:"",flowStatus:""},currentflowStatus:"",currentTextLength:0,editorHeight:"height:140px;",clientFlowNum:0,newsClienNum:0,currentCreditCode:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}]]}}}},computed:{companyNatureTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_CPNT},industryTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_IDST},industrySubTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_IDSB},isRiskTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_FXKH},newsSourceTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_NSOC},cooperateModeTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IT_COPM},applicantIsTeamTypeList:function(){return this.$store.state.baseData.baseDataOptionList.IS_TEAM}},created:function(){this.getDataList(),this.regionOptions=Object(o["i"])("cityTree");var t,s=this.$store.state.baseData.baseDataOptionList.IT_VCAS,a=Object(l["a"])(s);try{for(a.s();!(t=a.n()).done;){var e=t.value;1==e.value&&(e.disabled=!0)}}catch(i){a.e(i)}finally{a.f()}this.vmClientStatus=s,this.pagetag=this.$route.query.tag},methods:{getqueryLabelById:function(t,s){return Object(o["k"])(t,s)},getDataList:function(){var t=this,s=this.$route.query.id||"";this.clientCompanyId=s;var a=this.$route.query.from;this.currentType="audit"==a?1:0,Object(n["k"])({clientCompanyId:s}).then((function(s){t.applicantUserInfo=s,t.vmClientCompany=s.vmClientCompany,t.vmClientCompanyNews=s.vmClientCompanyNews,t.vmClientCompanyContactList=s.vmClientCompanyContactList,t.clientFlowListData.clientCompanyId=t.vmClientCompany.clientCompanyId,t.clientFlowListData.flowStatus=t.vmClientCompany.clientFlowStatus,t.newsFlowListData.flowStatus=t.vmClientCompanyNews.newsFlowStatus,t.clientFlowListData.flowRemark=t.vmClientCompany.clientFlowRemark||"",t.newsFlowListData.flowRemark=t.vmClientCompanyNews.newsFlowRemark||"",t.currentflowStatus=t.vmClientCompany.clientFlowStatus,t.newsFlowListData.newsId=t.vmClientCompanyNews.newsId,t.currentCreditCode=t.vmClientCompany.creditCode,Object(n["l"])({input:{creditCode:t.currentCreditCode,clientAuditStatus:"2",notEqualNewsAuditStatus:"2"}}).then((function(s){console.log(s),t.clientFlowNum=s.result.length})),Object(n["l"])({input:{creditCode:t.currentCreditCode,clientAuditStatus:"2",newsAuditStatus:"2"}}).then((function(s){t.newsClienNum=s.result.length}))})),this.userInfo=this.$store.state.user.userInfo},submitForm:function(){var t=this;"IT_VCAS_002"==this.currentflowStatus?"IT_VCAS_003"==this.newsFlowListData.flowStatus&&""==this.newsFlowListData.flowRemark?this.$message({showClose:!0,message:"请填写审核意见",type:"error"}):Object(n["i"])(this.newsFlowListData).then((function(s){var a=t.$route;t.$store.dispatch("tagsView/delView",a).then((function(s){s.visitedViews;t.$router.push("/business/customerProfile")})),"该客户已存在跟进中或已签约记录"==s.msg?t.$message({message:s.msg,type:"warning"}):t.$message({message:s.msg,type:"success"})})):"IT_VCAS_003"==this.clientFlowListData.flowStatus&&""==this.clientFlowListData.flowRemark?this.$message({showClose:!0,message:"请填写审核意见",type:"error"}):Object(n["a"])(this.clientFlowListData).then((function(s){var a=t.$route;t.$store.dispatch("tagsView/delView",a).then((function(s){s.visitedViews;t.$router.push("/business/customerProfile")})),t.$message({message:"操作成功！",type:"success"})}))},formateDate:function(t){function s(t){return t<10?"0"+t:t}var a=new Date(t),e=a.getFullYear()+"-"+s(a.getMonth()+1)+"-"+s(a.getDate())+" "+s(a.getHours())+":"+s(a.getMinutes())+":"+s(a.getSeconds());return e},formateDateMonth:function(t){function s(t){return t<10?"0"+t:t}var a=new Date(t),e=a.getFullYear()+"-"+s(a.getMonth()+1);return e},closePage:function(){var t=this,s=this.$route,a=this.$route.query.from;this.$store.dispatch("tagsView/delView",s).then((function(s){s.visitedViews;"resource"==a?t.$router.push("/business/customerResources"):("profile"==a||"audit"==a)&&t.$router.push("/business/customerProfile")}))},onEditorChange:function(t){this.currentTextLength=t.quill.getLength()-1,t.quill.deleteText(500,1),""===this.content?this.TiLength=0:this.TiLength=t.quill.getLength()-1}}}),v=r,m=(a("4d31"),a("2877")),d=Object(m["a"])(v,e,i,!1,null,"5f0b4020",null);s["default"]=d.exports}}]);