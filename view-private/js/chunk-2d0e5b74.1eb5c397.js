(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5b74"],{9656:function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{title:t.title,visible:t.wafRuleVisible,width:"40%","close-on-click-modal":!1},on:{"update:visible":function(e){t.wafRuleVisible=e}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title||"编辑"===t.title,expression:"title ==='添加' || title ==='编辑'  "}],staticClass:"modal-body col-sm-12"},[o("el-row",{attrs:{gutter:80}},[o("el-col",{attrs:{span:24}},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("域名："),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容",disabled:t.editRule},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}})],1),o("el-col",{staticClass:"custom-col",attrs:{span:24}},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("源站协议：\n\t\t\t\t"),o("el-radio",{attrs:{label:"http"},model:{value:t.proxy_protocol,callback:function(e){t.proxy_protocol=e},expression:"proxy_protocol"}},[t._v("HTTP")]),o("el-radio",{attrs:{label:"https"},model:{value:t.proxy_protocol,callback:function(e){t.proxy_protocol=e},expression:"proxy_protocol"}},[t._v("HTTPS")])],1),o("el-col",{staticClass:"custom-col",attrs:{span:24}},[o("div",{staticStyle:{float:"left"}},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("协议：\n\t\t\t\t")]),o("div",{staticStyle:{float:"left","margin-left":"20px"},on:{click:function(e){t.protocolShow=!0,t.port=80}}},[o("el-radio",{attrs:{label:"http"},model:{value:t.protocol,callback:function(e){t.protocol=e},expression:"protocol"}},[t._v("HTTP")])],1),o("div",{staticStyle:{float:"left","margin-left":"20px"},on:{click:function(e){t.protocolShow=!1,t.port=443}}},[o("el-radio",{attrs:{label:"https"},model:{value:t.protocol,callback:function(e){t.protocol=e},expression:"protocol"}},[t._v("HTTPS")])],1),t.protocolShow?o("el-col",{staticClass:"custom-col"},[o("el-checkbox",{model:{value:t.isRewrite_https,callback:function(e){t.isRewrite_https=e},expression:"isRewrite_https"}},[t._v("开启HTTP强制跳转")])],1):o("el-col",[o("el-col",{staticClass:"custom-col"},[o("el-select",{attrs:{placeholder:"请选择证书名称"},model:{value:t.certs_key,callback:function(e){t.certs_key=e},expression:"certs_key"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),o("el-col",[o("el-checkbox",{attrs:{disabled:""},model:{value:t.isHttp2,callback:function(e){t.isHttp2=e},expression:"isHttp2"}},[t._v("开启HTTP2")])],1)],1)],1),o("el-col",{staticClass:"custom-col",attrs:{span:24}},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("监听端口：\n\t\t\t\t"),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容",disabled:!0},model:{value:t.port,callback:function(e){t.port=e},expression:"port"}})],1),o("el-col",{staticClass:"custom-col",attrs:{span:24}},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("回源设置：\n\t\t\t\t"),o("el-radio",{attrs:{label:"cname_ip"},model:{value:t.cname,callback:function(e){t.cname=e},expression:"cname"}},[t._v("回源IP")]),o("el-radio",{attrs:{label:"cname_host",disabled:""},model:{value:t.cname,callback:function(e){t.cname=e},expression:"cname"}},[t._v("回源到域名")]),o("el-col",{staticClass:"custom-col"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ips,expression:"ips"}],staticStyle:{width:"100%"},attrs:{rows:"10"},domProps:{value:t.ips},on:{input:function(e){e.target.composing||(t.ips=e.target.value)}}})])],1),o("el-col",{directives:[{name:"show",rawName:"v-show",value:t.advanceShow,expression:"advanceShow"}],staticClass:"custom-col"},[o("el-button",{staticStyle:{float:"right"},attrs:{plain:"",size:"mini"},on:{click:t.advanceEdit}},[t._v("高级编辑")])],1)],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"高级编辑"===t.title,expression:"title ==='高级编辑'"}],staticClass:"modal-body col-sm-12"},[o("el-row",{attrs:{gutter:80}},[o("el-col",{attrs:{span:24}},[t._v("\n\t\t\t\t域名："),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容",disabled:t.editRule},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}}),t._v("\n\t\t\t\t协议："),o("label",[t._v(t._s(t.protocol))])],1),o("el-col",{staticClass:"custom-col"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.advance,expression:"advance"}],staticStyle:{width:"100%"},attrs:{rows:"20"},domProps:{value:t.advance},on:{input:function(e){e.target.composing||(t.advance=e.target.value)}}})])],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.wafRuleVisible=!1}}},[t._v("取 消")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title,expression:"title === '添加' "}],attrs:{type:"primary"},on:{click:t.addData}},[t._v("添加")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:"编辑"===t.title,expression:"title === '编辑' "}],attrs:{type:"primary"},on:{click:t.editData}},[t._v("保存")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:"高级编辑"===t.title,expression:"title === '高级编辑' "}],attrs:{type:"primary"},on:{click:t.editData}},[t._v("保存")])],1)])},a=[],s=function(){return o.e("chunk-24bbae2e").then(o.bind(null,"0882"))},i={data:function(){return{wafRuleVisible:!1,title:"",protocolShow:!0,host:"",editRule:!1,protocol:"http",proxy_protocol:"http",port:80,cname:"cname_ip",isRewrite_https:!1,ips:"",ssl_certificate:"",ssl_certificate_key:"",ssl_client_certificate:"",ssl_verify_client:!1,isHttp2:!0,advance:"",advanceShow:!0,options:[],certs_key:""}},created:function(){},methods:{addData:function(){this.$emit("diagAdd")},editData:function(){this.$emit("diagEdit")},advanceEdit:function(){var t,e;t={host:this.host,protocol:this.protocol,file:!0},e=this.secReq(this.api.domainManage1+"/get","post",t),"ok"==e.code?this.advance=this.b64Decode(e.msg):this.$notify({type:"warning",title:"提示",message:e.msg,duration:1500,position:"bottom-right"}),this.title="高级编辑"}},components:{WafDivider:s},watch:{$route:function(t,e){}}},c=i,r=o("2877"),n=Object(r["a"])(c,l,a,!1,null,"62dfdcae",null);e["default"]=n.exports}}]);