(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f63831"],{"03f0":function(t,e,a){},"330c":function(t,e,a){"use strict";a("03f0")},f6ac:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer-container"},[a("div",{staticClass:"search-wrap"},[a("zm-Search",{attrs:{inputList:t.inputList,btnConfig:t.btnConfig},on:{addCustomer:t.addContract,search:t.search,reset:t.reset}})],1),a("div",{staticClass:"tableContent"},[a("zm-table",{ref:"tableRef",staticStyle:{width:"100%"},attrs:{tableData:t.tableData,columns:t.columns,currentPage:t.pageData.pageIndex,pageSize:t.pageData.pageSize,total:t.pageData.pageCount,height:"550px",sizeList:t.sizeList},on:{sortChange:t.sortChange,editFn:t.editFn,viewFn:t.viewFn,deleteFn:t.deleteFn,createFn:t.createFn,relateFn:t.relateFn,cancelFn:t.quotePrice,handleCurrentChange:t.handleCurrentChange,handleSizeChange:t.handleSizeChange,exportQuotePrice:t.exportQuotePrice}})],1),a("zm-modal",{attrs:{title:t.modalTitle,openModal:t.openModal,width:"40%",height:"768px"},on:{"update:openModal":function(e){t.openModal=e},"update:open-modal":function(e){t.openModal=e}}},[a("div",{staticClass:"contractModal",attrs:{slot:"content"},slot:"content"},[1===t.showModalFlag?a("div",{staticClass:"modalContent"},[a("div",{staticClass:"tip",staticStyle:{"text-align":"center","margin-bottom":"10px",color:"#66666","font-weight":"bold"}},[a("span",[t._v("注意：")]),a("span",[t._v("关联后将冻结虚拟合同，请核实无误后再提交！")])]),a("zm-form",{ref:"relateForm",attrs:{formData:t.relateFormData,formConfig:t.relateFormConfig,rules:t.relateRules,labelWidth:"140px"}})],1):t._e(),2===t.showModalFlag?a("div",{staticClass:"modalContent"},[a("zm-form",{ref:"cancelForm",attrs:{formData:t.cancelFormData,formConfig:t.cancelFormConfig,rules:t.cancelRules,labelWidth:"140px"}})],1):t._e(),a("div",{staticClass:"footer"},[a("el-button",{on:{click:t.closeModal}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)])]),a("zm-modal",{staticClass:"quoteModal",attrs:{title:"查看合同附件",width:"60%",openModal:t.contractFileModal},on:{"update:openModal":function(e){t.contractFileModal=e},"update:open-modal":function(e){t.contractFileModal=e}}},[a("div",{staticClass:"contractFile",attrs:{slot:"content"},slot:"content"},[t._v(" 合同附件 "),a("zm-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{tableData:t.contractFileList,columns:t.contractFileColumn,border:"",isShowPagenation:!1,currentPage:t.filePageData.pageIndex,pageSize:t.filePageData.pageSize,total:t.filePageData.pageCount,height:"550px",sizeList:t.fileSizeList}})],1)]),a("zm-modal",{staticClass:"quoteModal",attrs:{title:t.contractTitle+"-报价设置",openModal:t.isOpenQuoteModal},on:{"update:openModal":function(e){t.isOpenQuoteModal=e},"update:open-modal":function(e){t.isOpenQuoteModal=e}}},[a("quote-price",{key:t.key,attrs:{slot:"content",curContractId:t.curContractId,contractType:t.contractTitle,isQuote:t.isQuote,contractMoney:t.contractMoney},on:{closeQuotePricePage:t.closeQuotePricePage},slot:"content"})],1)],1)},r=[],o=a("1da1"),i=a("5530"),c=a("ade3"),l=(a("96cf"),a("d81d"),a("fb6a"),a("159b"),a("a434"),a("8cc7")),s=a("a937"),p=a("069c"),d=(a("b64b"),a("a9e3"),a("ed08")),u=a("5f98"),h=a("4360"),f=h["a"].state.baseData.baseDataOptionList.IT_CTCT,m=h["a"].state.baseData.baseDataOptionList.IT_CTST,b=(h["a"].state.baseData.baseDataOptionList.IT_FILE,h["a"].state.baseData.baseDataOptionList.IT_CTFT),g=function(t){return[{type:"text-input",bind_key:"keyword",label:"合同查询",labelWidth:"94px",placeholder:"合同名称/编号/客户名称",span:6},{type:"select-input",bind_key:"contractContentType",labelWidth:"105px",label:"合同类型",optionList:f,span:6},{type:"select-input",labelWidth:"105px",bind_key:"relateStatus",label:"关联状态",span:6,optionList:[{text:"已关联",value:"1"},{text:"未关联",value:"2"}]},{type:"select-input",bind_key:"contractStatus",labelWidth:"105px",label:"执行状态",span:6,optionList:m}]},C={span:24,customList:[{role:"contract.virtual.add",customBtnText:"新增",changeFn:"addCustomer"}]},x=function(t){return[{label:"序号",kind:"render",fixed:"left",width:"50px",render:function(e,a){return e("span",t.indexMethod(a.$index))}},Object(c["a"])({label:"客户简称",prop:"clientSimpleName",sortable:!0,minWidth:"120px",align:"left"},"align","left"),{label:"合同类型",prop:"contractType",minWidth:"120px",align:"left",kind:"render",render:function(t,e){var a=Object(d["k"])(f,e.row.contractContentType);return t("span",{},a)}},{label:"合同名称",kind:"render",align:"left",prop:"contractName",minWidth:"180px",render:function(e,a){return e("span",{class:{clickHover:!0},style:{color:"#078BFD",cursor:"pointer",fontSize:"14px"},on:{click:function(){var e=Object(u["a"])("contract.virtual.info");e&&(t.$router.push({path:"/contract/detailVCtrct",query:{id:a.row.contractId}}),t.CHANGE_VC_DETAIL_STATUS(!0))}}},a.row.contractName)}},{label:"合同开始日期",prop:"startDate",kind:"render",render:function(t,e){var a=e.row.startDate||"",n=a.slice(0,a.indexOf("T"));return t("span",n)},minWidth:"160px",sortable:!0},{label:"合同结束日期",prop:"endDate",sortable:!0,kind:"render",render:function(t,e){var a=e.row.endDate||"",n=a.slice(0,a.indexOf("T"));return t("span",n)},minWidth:"160px"},{label:"合同附件",prop:"htTotalCount",kind:"render",render:function(e,a){var n=a.row.fileCount+"份";return e("span",{class:{clickHover:!0},style:{color:"#078BFD",cursor:"pointer",fontSize:"14px"},on:{click:function(){var e=Object(u["a"])("contract.virtual.info");e&&t.openFileModal(a.row.contractId)}}},n)}},{label:"执行状态",prop:"contractStatus",minWidth:"120px",kind:"render",render:function(t,e){var a=Object(d["k"])(m,e.row.contractStatus);return t("span",a)}},{label:"虚拟合同编号",prop:"contractId",minWidth:"200px"},{label:"正式合同档案编号",prop:"otherContractId",align:"center",minWidth:"200px",kind:"render",render:function(e,a){return e("span",{class:{clickHover:!0},style:{color:"#078BFD",cursor:"pointer",fontSzie:"14px"},on:{click:function(){var e=Object(u["a"])("contract.virtual.info");e&&t.$router.push({path:"/contract/detailContract",query:{id:a.row.otherContractId}})}}},a.row.otherContractId)}},{label:"操作",fixed:"right",width:"120px",kind:"formatBtn",firstBtn:{text:"详情",role:"contract.virtual.info",fn:"viewFn"},moreBtnRoles:"contract.virtual.edit,contract.virtual.price,contract.virtual.delete,contract.virtual.createFormal,contract.virtual.relation,contract.virtual.price.export",btnList:[{text:"编辑",fn:"editFn",role:"contract.virtual.edit",isDisabled:function(t){return!!(t.contractPriceScope&&Object.keys(t.contractPriceScope).length>0)||!!t.recordId}},{text:"报价",fn:"cancelFn",role:"contract.virtual.price",textFn:function(t){return Number(t.priceCount)>0?"已报价":"报价"},isDisabled:function(t){return!!(t.contractPriceScope&&Object.keys(t.contractPriceScope).length>0)||!!t.recordId}},{text:"导出报价",fn:"exportQuotePrice",role:"contract.virtual.price.export",isDisabled:function(t){return!!(t.contractPriceScope&&Object.keys(t.contractPriceScope).length>0)||!!t.recordId}},{text:"转为正式合同",fn:"createFn",role:"contract.virtual.createFormal",isDisabled:function(t){return!!(t.contractPriceScope&&Object.keys(t.contractPriceScope).length>0)||!!t.recordId}},{text:"关联正式合同",fn:"relateFn",role:"contract.virtual.relation",isDisabled:function(t){return!!(t.contractPriceScope&&Object.keys(t.contractPriceScope).length>0)||!!t.recordId}},{text:"删除",fn:"deleteFn",role:"contract.virtual.delete",isDisabled:function(t){return!!(t.contractPriceScope&&Object.keys(t.contractPriceScope).length>0)||!!t.recordId}}]}]},v={contractId:{required:!0,message:"请选择正式合同",trigger:"change"}},y=function(t){return[{span:24,list:[{type:"text",label:"关联单号",prop:"companySiteUrl",placeholder:"无需输入系统填写",disabled:!0},{type:"select",label:"客户名称",prop:"kehu",optionList:[{text:"哈哈",value:1}],disabled:!0},{type:"select",label:"虚拟合同",prop:"xuni",optionList:[{text:"哈哈",value:1}],disabled:!0},{type:"select",label:"正式合同",prop:"zhengshi",optionList:[{text:"哈哈",value:1}],disabled:!0},{type:"select",label:"解除关联原因",prop:"jiechu",optionList:[{text:"哈哈",value:1}]},{type:"date",label:"解除关联时间",prop:"jiechu"},{type:"textarea",prop:"beizhu",label:"备注"}]}]},w={operatingArea:{required:!0,message:"请选择公司的运营地址",trigger:"change"},operatingAddress:{required:!0,message:"请输入详细的公司的地址",trigger:"change"}},D=function(t){return[{label:"序号",type:"index",fixed:"left"},{label:"合同名称",kind:"render",prop:"contractName",minWidth:"220px",render:function(e,a){return e("span",{class:{clickHover:!0},style:{color:"#078BFD",cursor:"pointer",fontSize:"14px"},on:{click:function(){t.$router.push({path:"/customer/detailCustomer",query:{id:a.row.clientCompanyId}})}}},a.row.clientCompanyName)}},{label:"虚拟合同编号",prop:"clientGroupName",sortable:!0,minWidth:"140px"},{label:"正式合同编号111",prop:"clientSimpleName",minWidth:"120px"},{label:"关联单号",prop:"operatingArea",minWidth:"120px"},{label:"合同类型",prop:"industryType",minWidth:"120px",kind:"render",render:function(t,e){return t("span",{},1)}},{label:"客户简称",prop:"financeType",sortable:!0,minWidth:"120px",kind:"render",render:function(t,e){return t("span",{},1)}},{label:"合同开始日期",prop:"htZxzCount",minWidth:"140px",sortable:!0},{label:"合同结束日期",prop:"htTotalCount",sortable:!0,minWidth:"140px"},{label:"合同附件",prop:"htTotalCount",sortable:!0,minWidth:"140px",render:function(e,a){return e("span",{class:{clickHover:!0},style:{color:"#078BFD",cursor:"pointer",fontSize:"14px"},on:{click:function(){t.$router.push({path:"/customer/detailCustomer",query:{id:a.row.clientCompanyId}})}}},a.row.clientCompanyName)}},{label:"执行状态",prop:"htTotalCount",minWidth:"120px",render:function(e,a){return e("span",{style:{color:"rgb(13, 166, 246)",cursor:"pointer"},on:{click:function(){t.$router.push({path:"/customer/detailCustomer",query:{id:a.row.clientCompanyId}})}}},a.row.clientCompanyName)}},{label:"操作",fixed:"right",minWidth:"160px",kind:"virtualBtn",viewFn:"viewFn",changeFn:{edit:"editFn",delete:"deleteFn",create:"createFn",relate:"relateFn"}}]},F=function(t){return[{label:"合同附件类型",prop:"contractFileType",kind:"render",render:function(t,e){var a=Object(d["k"])(b,e.row.contractFileType);return t("span",a)}},{label:"适用公司",prop:"relationNames"},{label:"文件名",prop:"fileName"},{label:"大小",prop:"fileSize",width:"120px",kind:"render",render:function(t,e){return t("div",e.row.fileSize+"kb")}},{label:"上传时间",prop:"uploadTime",kind:"render",render:function(t,e){var a=e.row.uploadTime||"",n=a.slice(0,a.indexOf("T"));return t("span",n)}},{label:"上传人",prop:"createorName",width:"120px"},{label:"操作",kind:"render",render:function(e,a){return e("div",[e("span",{class:{clickHover:!0},style:{color:"rgb(13, 166, 246)",cursor:"pointer",marginRight:"10px"},on:{click:function(){t.viewContract(a)}}},"预览"),e("span",{class:{clickHover:!0},style:{color:"rgb(13, 166, 246)",cursor:"pointer"},on:{click:function(){t.downloadContract(a)}}},"下载")])}}]},k=a("35ad"),T=a("bf3e"),I=a("c91b"),S=a("2f62"),O={name:"VirtualContract",components:{zmTable:l["a"],zmSearch:s["a"],zmModal:T["a"],zmForm:I["a"],quotePrice:p["a"]},data:function(){var t,e=g(this),a=x(this),n=y(this),r=D(this),o=F(this);return t={inputList:e,btnConfig:C,tableData:[],columns:a,pageData:{pageIndex:1,pageSize:15,pageCount:0},sizeList:[15,30,50],modalTitle:"默认标题",openModal:!1,showModalFlag:"",relateRules:v,relateFormConfig:[],relateFormData:{},cancelRules:w,cancelFormConfig:n,cancelFormData:{},contractColumns:r,contractTableData:[],contractFileList:[],contractFileModal:!1,sortData:[],contractFileColumn:o,filePageData:{pageIndex:1,pageSize:10,pageCount:0},fileSizeList:[10,20,30],contractTitle:"",key:0,isOpenQuoteModal:!1,curContractId:""},Object(c["a"])(t,"contractTitle",""),Object(c["a"])(t,"isQuote",""),Object(c["a"])(t,"contractMoney",""),t},computed:Object(i["a"])({},Object(S["e"])("listCacheFlag",["isReloadVC"])),beforeRouteEnter:function(t,e,a){a((function(t){console.log(t.isReloadVC,"是否是新增或是编辑页面"),t.isReloadVC&&(t.pageData.pageIndex=1,t.getContractList(),t.CHANGE_VC_STATUS(!1))}))},activated:function(){var t=this;this.$nextTick((function(){t.$refs.tableRef.doLayoutTable()}))},mounted:function(){this.getContractList(),this.relateFormConfig=this.initRelateConfig()},methods:Object(i["a"])(Object(i["a"])({},Object(S["d"])("listCacheFlag",["CHANGE_VC_STATUS","CHANGE_VC_DETAIL_STATUS"])),{},{indexMethod:function(t){return this.pageData.pageSize*this.pageData.pageIndex+t-this.pageData.pageSize+1},getContractList:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t||{},n.startDate&&(n.contractOverDate=n.startDate[1],n.startDate=n.startDate[0]),n.contractType="IT_CTTP_002",r={input:n},o=Object.assign({},e.pageData,r),o.input.displays=e.sortData,a.next=8,Object(k["f"])(o);case 8:c=a.sent,e.pageData.pageCount=c.rowCount,e.tableData=c.result&&c.result.map((function(t){return Object(i["a"])(Object(i["a"])({},t.contract),t)}));case 11:case"end":return a.stop()}}),a)})))()},addContract:function(t){this.$router.push("/contract/addVCtrct")},search:function(t){this.pageData.pageIndex=1,this.searchCacheData=t,this.getContractList(t)},handleSizeChange:function(t){this.pageData.pageIndex=1,this.pageData.pageSize=t,this.getContractList(this.searchCacheData)},editFn:function(t){this.$router.push({path:"/contract/editVCtrct",query:{id:t.contractId}})},viewFn:function(t){this.CHANGE_VC_DETAIL_STATUS(!0),this.$router.push({path:"/contract/detailVCtrct",query:{id:t.contractId}})},reset:function(){this.pageData.pageIndex=1,this.getContractList()},deleteFn:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(k["b"])({contractId:t.contractId});case 2:a.sent,e.$message.success("操作成功"),e.getContractList();case 5:case"end":return a.stop()}}),a)}))))},openFileModal:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.contractFileModal=!0,a.next=3,Object(k["e"])({contractId:t});case 3:n=a.sent,e.contractFileList=n[0]&&n.map((function(t){return Object(i["a"])(Object(i["a"])({},t.contractFile),{},{item:t})})),console.log("this.contractFileList",e.contractFileList);case 6:case"end":return a.stop()}}),a)})))()},relateFn:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.showModalFlag=1,e.openModal=!0,e.modalTitle="关联正式合同",e.relateFormData.virtualContractId=t.contractId,e.relateFormData.clientCompanyId=t.clientCompanyId,e.relateFormData.recordType="关联",e.relateFormData.clientCompanyName=t.clientCompanyName||"--",a.next=9,Object(k["j"])({contractType:"IT_CTTP_001",clientCompanyId:t.clientCompanyId,otherContractId:"未关联"});case 9:n=a.sent,r=Array.isArray(n)&&n.map((function(t){var e=t.startDate?t.startDate.slice(0,t.startDate.indexOf("T")):"--",a=t.endDate?t.endDate.slice(0,t.endDate.indexOf("T")):"--";return{text:t.contractName+"/"+e+" - "+a,value:t.contractId}})),e.relateFormConfig=e.initRelateConfig(r);case 12:case"end":return a.stop()}}),a)})))()},quotePrice:function(t){var e=this.$store.state.baseData.baseDataOptionList.IT_CTCT;this.contractMoney=t.contract.contractPrice||"",this.isQuote=t.priceCount,this.contractTitle=Object(d["k"])(e,t.contractContentType),this.isOpenQuoteModal=!0,this.curContractId=t.contractId,this.key++},closeQuotePricePage:function(){this.getContractList(),this.isOpenQuoteModal=!1},createFn:function(t){var e=t.contractId;this.$router.push({path:"/contract/addContract",query:{fromVirtualData:e}})},handleCurrentChange:function(t){this.pageData.pageIndex=t,this.getContractList(this.searchCacheData)},submitForm:function(){var t=this;this.$refs.relateForm.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,Object(k["x"])(t.relateFormData);case 3:e.sent,t.$message.success("关联成功"),t.openModal=!1,t.getContractList(t.searchData);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},closeModal:function(){this.relateFormData={},this.openModal=!1},sortChange:function(t){var e=this,a="";a="ascending"===t.order?"asc":"desc";var n={display:a,field:t.prop};0===this.sortData.length?this.sortData.push(n):this.sortData.forEach((function(t,a){if(t.field===n.field){if(t.display===n.display)return void e.sortData.splice(a,1);e.sortData.splice(a,1),e.sortData.push(n)}else e.sortData.push(n)})),this.getContractList(this.searchCacheData)},initRelateConfig:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{span:24,list:[{type:"text",label:"关联单号",prop:"companySiteUrl",placeholder:"无需输入系统填写",disabled:!0},{type:"text",label:"客户名称",prop:"clientCompanyName",disabled:!0},{type:"text",label:"虚拟合同",prop:"virtualContractId",disabled:!0},{type:"select",label:"正式合同",prop:"contractId",optionList:t},{type:"textarea",prop:"recordRemark",minRows:4,label:"备注"}]}]},viewContract:function(t){var e=t.row.fileId,a="https://www.tobowork.com//api/tobosoft-toms/cos/file/view/"+e;window.open(a)},downloadContract:function(t){var e=t.row.fileId,a="https://www.tobowork.com//api/tobosoft-toms/cos/file/download/"+e,n=document.createElement("a");n.setAttribute("download",t.row.fileName),n.href=a,document.body.appendChild(n),n.click(),n.remove()},exportQuotePrice:function(t){var e=t.contractId,a="https://www.tobowork.com//api/tobosoft-toms/excel/download/contractPrice/"+e,n=document.createElement("a");n.setAttribute("download","2222"),n.href=a,document.body.appendChild(n),n.click(),n.remove()}})},L=O,M=(a("330c"),a("2877")),j=Object(M["a"])(L,n,r,!1,null,"482f5c95",null);e["default"]=j.exports}}]);