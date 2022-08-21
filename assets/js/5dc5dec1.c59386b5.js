"use strict";(self.webpackChunkbqfun=self.webpackChunkbqfun||[]).push([[136],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)l=u[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(l),d=n,s=k["".concat(o,".").concat(d)]||k[d]||g[d]||u;return l?r.createElement(s,a(a({ref:t},c),{},{components:l})):r.createElement(s,a({ref:t},c))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=l.length,a=new Array(u);a[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<u;p++)a[p]=l[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}k.displayName="MDXCreateElement"},6420:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=l(7462),n=(l(7294),l(3905));const u={},a="BigQuery\u306b\u89e6\u3063\u3066\u307f\u3088\u3046",i={unversionedId:"quickstarts",id:"quickstarts",title:"BigQuery\u306b\u89e6\u3063\u3066\u307f\u3088\u3046",description:"BigQuery\u3092\u89e6\u3063\u305f\u3053\u3068\u306e\u306a\u3044\u4eba\u304c\u3001\u3069\u3093\u306a\u6642\u306b\u4f7f\u3046\u3079\u304d\u304b\u3092\u77e5\u308b\u305f\u3081\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/quickstarts.md",sourceDirName:".",slug:"/quickstarts",permalink:"/docs/quickstarts",draft:!1,editUrl:"https://github.com/bqfun/bqfun/docs/quickstarts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u5de5\u6e08\u307f\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf",permalink:"/docs/jpdata"}},o={},p=[{value:"BigQuery\u3068\u306f",id:"bigquery\u3068\u306f",level:2},{value:"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd",id:"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd",level:3},{value:"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd",id:"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd",level:3},{value:"\u3069\u3093\u306a\u6642\u306b\u4f7f\u3048\u308b\u306e\uff1f",id:"\u3069\u3093\u306a\u6642\u306b\u4f7f\u3048\u308b\u306e",level:2},{value:"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd",id:"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd-1",level:3},{value:"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd",id:"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd-1",level:3},{value:"BigQuery\u5168\u4f53\u3068\u3057\u3066\u306e\u6a5f\u80fd",id:"bigquery\u5168\u4f53\u3068\u3057\u3066\u306e\u6a5f\u80fd",level:3},{value:"\u7121\u6599\u3067\u8a66\u3057\u305f\u3044",id:"\u7121\u6599\u3067\u8a66\u3057\u305f\u3044",level:2},{value:"\u6599\u91d1",id:"\u6599\u91d1",level:2},{value:"\u5206\u6790\u6599\u91d1",id:"\u5206\u6790\u6599\u91d1",level:3},{value:"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1",id:"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1",level:4},{value:"\u5b9a\u984d\u6599\u91d1",id:"\u5b9a\u984d\u6599\u91d1",level:4},{value:"\u30b9\u30c8\u30ec\u30fc\u30b8\u6599\u91d1",id:"\u30b9\u30c8\u30ec\u30fc\u30b8\u6599\u91d1",level:3},{value:"\u4e00\u90e8\u306e\u6a5f\u80fd\u6599\u91d1",id:"\u4e00\u90e8\u306e\u6a5f\u80fd\u6599\u91d1",level:3},{value:"BigQuery\u5229\u7528\u306e\u30b9\u30c6\u30c3\u30d7",id:"bigquery\u5229\u7528\u306e\u30b9\u30c6\u30c3\u30d7",level:2}],c={toc:p};function g(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigquery\u306b\u89e6\u3063\u3066\u307f\u3088\u3046"},"BigQuery\u306b\u89e6\u3063\u3066\u307f\u3088\u3046"),(0,n.kt)("p",null,"BigQuery\u3092\u89e6\u3063\u305f\u3053\u3068\u306e\u306a\u3044\u4eba\u304c\u3001\u3069\u3093\u306a\u6642\u306b\u4f7f\u3046\u3079\u304d\u304b\u3092\u77e5\u308b\u305f\u3081\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"bigquery\u3068\u306f"},"BigQuery\u3068\u306f"),(0,n.kt)("p",null,"\u30c7\u30fc\u30bf\u5206\u6790\u7528\u306e\u8a08\u7b97\u6a5f\u517c\u3001\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3067\u3059\u3002Google Cloud\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd"},"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd"),(0,n.kt)("p",null,"\u300cSQL\u300d\u3068\u547c\u3070\u308c\u308b\u547d\u4ee4\u3092\u4e0e\u3048\u308b\u3053\u3068\u3067\u3001\u30c7\u30fc\u30bf\u96c6\u8a08\u3084\u6a5f\u68b0\u5b66\u7fd2\u306a\u3069\u306e\u624b\u7d9a\u304d\u3092\u9ad8\u901f\u306b\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/query-overview?hl=ja"},"BigQuery \u5206\u6790\u306e\u6982\u8981 | Google Cloud")),(0,n.kt)("h3",{id:"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd"},"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd"),(0,n.kt)("p",null,"BigQuery\u306e\u5916\u304b\u3089\u30c7\u30fc\u30bf\u3092\u5165\u308c\u305f\u308a\u3001BigQuery\u306e\u5916\u306b\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002\u5148\u8ff0\u306e\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd\u3067\u306f\u5b9f\u73fe\u304c\u96e3\u3057\u3044\u624b\u7d9a\u304d\u3092\u3001\u4ed6\u306e\u4ed5\u7d44\u307f\u3092\u4f7f\u3063\u3066\u67d4\u8edf\u306b\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/storage_overview?hl=ja"},"BigQuery \u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u6982\u8981 | Google Cloud")),(0,n.kt)("h2",{id:"\u3069\u3093\u306a\u6642\u306b\u4f7f\u3048\u308b\u306e"},"\u3069\u3093\u306a\u6642\u306b\u4f7f\u3048\u308b\u306e\uff1f"),(0,n.kt)("p",null,"\u30c7\u30fc\u30bf\u5206\u6790\u304c\u6c42\u3081\u3089\u308c\u308b\u5834\u5408\u306b\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\n",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/ja/products/bigquery"},"BigQuery | Google Cloud Blog"),"\u306b\u306f\u9867\u5ba2\u4e8b\u4f8b\u3092\u542b\u3080\u6d3b\u7528\u4f8b\u304c\u8f09\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u7c21\u5358\u306b\u307e\u3068\u3081\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd-1"},"\u8a08\u7b97\u6a5f\u3068\u3057\u3066\u306e\u6a5f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u3092\u7e70\u308a\u8fd4\u3057\u5206\u6790\u3057\u3066\u3001\u4eee\u8aac\u3092\u8abf\u67fb\u3057\u305f\u3044"),(0,n.kt)("li",{parentName:"ul"},"\u6a5f\u68b0\u5b66\u7fd2\u3092\u4f7f\u3063\u3066\u3001\u30e9\u30d9\u30eb\u4ed8\u3051\u3092\u81ea\u52d5\u5316\u3057\u305f\u3044"),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u5206\u6790\u306e\u6599\u91d1\u3084\u5f85\u3061\u6642\u9593\u3092\u6e1b\u3089\u3057\u305f\u3044")),(0,n.kt)("h3",{id:"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd-1"},"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066\u306e\u6a5f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u69cb\u9020\u5316\u30c7\u30fc\u30bf\u3084\u534a\u69cb\u9020\u5316\u30c7\u30fc\u30bf\u3092\u4fdd\u7ba1\u3057\u305f\u3044"),(0,n.kt)("li",{parentName:"ul"},"Google Cloud\u3092\u4f7f\u3063\u3066\u3044\u308b\u304b\u3089\u4f7f\u3044\u3084\u3059\u3044\u5834\u6240\u306b\u30c7\u30fc\u30bf\u3092\u7f6e\u3044\u3066\u304a\u304d\u305f\u3044"),(0,n.kt)("li",{parentName:"ul"},"\u5168\u4e16\u754c\u306e\u4eba\u306b\u30c7\u30fc\u30bf\u3092\u8ca9\u58f2\u3001\u5171\u6709\u3057\u305f\u3044")),(0,n.kt)("h3",{id:"bigquery\u5168\u4f53\u3068\u3057\u3066\u306e\u6a5f\u80fd"},"BigQuery\u5168\u4f53\u3068\u3057\u3066\u306e\u6a5f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u5206\u6790\u74b0\u5883\u306e\u4fdd\u5b88\u30b3\u30b9\u30c8\u3092\u6e1b\u3089\u3057\u305f\u3044")),(0,n.kt)("h2",{id:"\u7121\u6599\u3067\u8a66\u3057\u305f\u3044"},"\u7121\u6599\u3067\u8a66\u3057\u305f\u3044"),(0,n.kt)("p",null,"\u7121\u6599\uff06\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u4e0d\u8981\u3067\u8a66\u305b\u308bBigQuery\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u304c\u3042\u308a\u307e\u3059\u3002\u6708\u5f53\u305f\u308a\u306e\u5236\u9650\u306b\u304b\u304b\u308b\u3068\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u6b21\u306e\u6708\u304b\u3089\u307e\u305f\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/sandbox?hl=ja"},"BigQuery \u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u3092\u6709\u52b9\u306b\u3059\u308b | Google Cloud"),"\u3092\u53c2\u8003\u306b\u3001\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u74b0\u5883\u3067\u3001",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console?hl=ja"},"\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u4e00\u822c\u516c\u958b\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b | BigQuery | Google Cloud"),"\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"BigQuery\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8a08\u7b97\u6a5f\u3068\u3057\u3066",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u53c2\u7167\u91cf\u306f 1 TB/\u6708 \u307e\u3067"))),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u4fdd\u7ba1\u5eab\u3068\u3057\u3066",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30b9\u30c8\u30ec\u30fc\u30b8\u306f 10 GB/\u6708 \u307e\u3067"),(0,n.kt)("li",{parentName:"ul"},"60\u65e5\u3067\u81ea\u52d5\u524a\u9664"))),(0,n.kt)("li",{parentName:"ul"},"BigQuery\u5168\u4f53\u3068\u3057\u3066",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5229\u7528\u3068\u540c\u7b49\u306e\u5236\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u7121\u6599\u67a0\u306e\u306a\u3044\u6a5f\u80fd\u306e\u5236\u9650")))),(0,n.kt)("h2",{id:"\u6599\u91d1"},"\u6599\u91d1"),(0,n.kt)("p",null,"\u6599\u91d1\u306f\u3001\u300c\u5206\u6790\u6599\u91d1 + \u30b9\u30c8\u30ec\u30fc\u30b8\u6599\u91d1 + \u4e00\u90e8\u306e\u6a5f\u80fd\u6599\u91d1\u300d\u3067\u8a08\u7b97\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f2022-08-21\u5f53\u6642\u306e\u5185\u5bb9\u306b\u306a\u308a\u307e\u3059\u3002\u5229\u7528\u3059\u308b\u969b\u306b\u306f\u3001\u5fc5\u305a\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u6700\u65b0\u306e\u6599\u91d1\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/pricing?hl=ja"},"\u6599\u91d1 | BigQuery: \u30af\u30e9\u30a6\u30c9 \u30c7\u30fc\u30bf \u30a6\u30a7\u30a2\u30cf\u30a6\u30b9")),(0,n.kt)("h3",{id:"\u5206\u6790\u6599\u91d1"},"\u5206\u6790\u6599\u91d1"),(0,n.kt)("p",null,"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1\u304c\u6a19\u6e96\u3067\u3059\u3002\u4e00\u90e8\u307e\u305f\u306f\u5168\u90e8\u3092\u5b9a\u984d\u6599\u91d1\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1"},"\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1"),(0,n.kt)("p",null,"\u30af\u30a8\u30ea\u3067\u53c2\u7167\u3057\u305f\u30c7\u30fc\u30bf\u91cf\u3067\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u6bce\u67081TB\u307e\u3067\u7121\u6599\u67a0\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"$5 ~ $9 / TB\u3067\u3001\u5229\u7528\u3059\u308b\u8a08\u7b97\u6a5f\u306e\u5834\u6240\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002asia-northeast1\uff08\u6771\u4eac\uff09\u306f$6/TB\u3001US\uff08\u7c73\u56fd\u30de\u30eb\u30c1\u30ea\u30fc\u30b8\u30e7\u30f3\uff09\u306f$5/TB\u3067\u3059\u3002"),(0,n.kt)("h4",{id:"\u5b9a\u984d\u6599\u91d1"},"\u5b9a\u984d\u6599\u91d1"),(0,n.kt)("p",null,"\u300c\u30b9\u30ed\u30c3\u30c8\u300d\u3068\u547c\u3070\u308c\u308b\u8a08\u7b97\u6a5f\u306e\u6642\u9593\u5272\u308a\u5f53\u3066\u3092\u8cfc\u5165\u3057\u3066\u5229\u7528\u3057\u307e\u3059\u3002\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u6599\u91d1\u3068\u306f\u7570\u306a\u308a\u3001\u30af\u30a8\u30ea\u3067\u53c2\u7167\u3059\u308b\u30c7\u30fc\u30bf\u91cf\u306f\u7121\u95a2\u4fc2\u306e\u305f\u3081\u3001\u56fa\u5b9a\u6599\u91d1\u306b\u3057\u305f\u3044\u5834\u5408\u306b\u5411\u3044\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u30b9\u30c8\u30ec\u30fc\u30b8\u6599\u91d1"},"\u30b9\u30c8\u30ec\u30fc\u30b8\u6599\u91d1"),(0,n.kt)("p",null,"\u4fdd\u5b58\u3057\u3066\u3044\u308b\u30c7\u30fc\u30bf\u91cf\u3067\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u6bce\u670810GB\u307e\u3067\u7121\u6599\u67a0\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"2022-08-21\u73fe\u5728\u3001$20 ~ $33 / TB\u6708\u3067\u3001\u5229\u7528\u3059\u308b\u8a08\u7b97\u6a5f\u306e\u5834\u6240\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002asia-northeast1\uff08\u6771\u4eac\uff09\u306f$23/TB\u3001US\uff08\u7c73\u56fd\u30de\u30eb\u30c1\u30ea\u30fc\u30b8\u30e7\u30f3\uff09\u306f$20/TB\u3067\u3059\u300290 \u65e5\u9593\u5909\u66f4\u3055\u308c\u3066\u3044\u306a\u3044\u30c6\u30fc\u30d6\u30eb\u307e\u305f\u306f\u30c6\u30fc\u30d6\u30eb \u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u306f\u3001\u81ea\u52d5\u7684\u306b\u7d04 50% \u5024\u5f15\u304d\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u4e00\u90e8\u306e\u6a5f\u80fd\u6599\u91d1"},"\u4e00\u90e8\u306e\u6a5f\u80fd\u6599\u91d1"),(0,n.kt)("p",null,"\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u3001\u30c7\u30fc\u30bf\u62bd\u51fa\u306b\u6599\u91d1\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u4e00\u90e8\u7121\u6599\u67a0\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/pricing?hl=ja#data_ingestion_pricing"},"\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u306e\u6599\u91d1 | \u6599\u91d1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/pricing?hl=ja#data_extraction_pricing"},"\u30c7\u30fc\u30bf\u62bd\u51fa\u306e\u6599\u91d1 | \u6599\u91d1"))),(0,n.kt)("h2",{id:"bigquery\u5229\u7528\u306e\u30b9\u30c6\u30c3\u30d7"},"BigQuery\u5229\u7528\u306e\u30b9\u30c6\u30c3\u30d7"),(0,n.kt)("p",null,"BigQuery\u5229\u7528\u30b9\u30c6\u30c3\u30d7\u3092\u3001\u6a29\u9650\u306e\u5f31\u3044\u9806\u306b\u5206\u985e\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\u4e0a\u304b\u3089\u9806\u306b\u5b66\u3076\u3068\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"BigQuery\u306eWeb UI\u3092\u3055\u308f\u308b\uff08\u30c7\u30fc\u30bf\u95b2\u89a7\u8005\uff09"),(0,n.kt)("li",{parentName:"ol"},"BigQuery\u306e\u30af\u30a8\u30ea\u3092\u66f8\u3044\u3066\u3001\u30c7\u30fc\u30bf\u3092\u898b\u308b\uff08\u30b8\u30e7\u30d6\u30e6\u30fc\u30b6\u30fc\uff09"),(0,n.kt)("li",{parentName:"ol"},"BigQuery\u306b\u30c7\u30fc\u30bf\u3092\u5165\u308c\u3066\u3001\u4fdd\u5b88\u3059\u308b\uff08\u30c7\u30fc\u30bf\u30aa\u30fc\u30ca\u30fc\uff09"),(0,n.kt)("li",{parentName:"ol"},"BigQuery\u306e\u7ba1\u7406\u3092\u3059\u308b\uff08\u7ba1\u7406\u8005\uff09")))}g.isMDXComponent=!0}}]);