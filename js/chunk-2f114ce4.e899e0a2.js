(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f114ce4"],{"51d6":function(t,e,l){},"6cf9":function(t,e,l){"use strict";var i=l("51d6"),n=l.n(i);n.a},bac7:function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fold-container"},[i("div",{staticClass:"fold-wrapper"},[i("div",{staticClass:"fold-control"}),t.fileLists?i("div",{ref:"foldScroll",staticClass:"scroll-box"},[i("div",{staticClass:"scroll clearfix"},t._l(t.fileLists,function(e,n){return i("div",{key:n,staticClass:"fold-box"},[i("div",{staticClass:"file-img-box"},[e.Urllink?i("img",{staticClass:"file-img",attrs:{src:t.fileImg(e.Urllink)}}):i("img",{staticClass:"file-img",attrs:{src:l("d6aa")}})]),i("h3",{staticClass:"file-title"},[t._v(t._s(e.name))])])}),0)]):i("div",{staticClass:"no-file"},[i("span",{staticStyle:{"text-align":"center"}},[t._v("暂无文件")])])])])},n=[],c=(l("3c6b"),l("0857"),l("ecd2")),s={name:"dofineFiles",components:{},filter:{},props:{},data:function(){return{fileLists:[{name:"这是文件名1.xls",Urllink:"test.com/这是文件名.xls"},{name:"这是文件名2.xls",Urllink:"test.com/这是文件名.xls"},{name:"这是文件名3.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名4.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名5.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名6.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名7.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名8.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名9.docx",Urllink:"test.com/这是文件名.docx"},{name:"这是文件名9.jpg",Urllink:"test.com/这是文件名.jpg"},{name:"这是文件名9.gif",Urllink:"test.com/这是文件名.gif"},{name:"这是文件名9.pptx",Urllink:"test.com/这是文件名.pptx"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.ppt",Urllink:"test.com/这是文件名.ppt"},{name:"这是文件名9.zip",Urllink:"test.com/这是文件名.zip"},{name:"这是文件名9.rar",Urllink:"test.com/这是文件名.rar"},{name:"这是文件名9.7z",Urllink:"test.com/这是文件名.7z"},{name:"这是文件名9.zip",Urllink:"test.com/这是文件名.zip"},{name:"这是文件名9.rar",Urllink:"test.com/这是文件名.rar"},{name:"这是文件名9.7z",Urllink:"test.com/这是文件名.7z"}],theFileImg:{excel:l("b792"),word:l("3b84"),ppt:l("6358"),file:l("2a03"),txt:l("d83f")}}},computed:{},watch:{},created:function(){var t=this;this.$nextTick(function(){t.foldScroll=new c["a"](t.$refs.foldScroll,{click:!0,mouseWheel:!0})})},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{fileImg:function(t){var e=t.toString();return e.match(/\.xls$/g)?this.theFileImg.excel:e.match(/\.doc|\.docx$/g)?this.theFileImg.word:e.match(/\.ppt|\.ppts$/g)?this.theFileImg.ppt:this.theFileImg.file}}},o=s,a=(l("6cf9"),l("6691")),r=Object(a["a"])(o,i,n,!1,null,"d600f89c",null);e["default"]=r.exports}}]);