"use strict";(self.webpackChunkbqfun=self.webpackChunkbqfun||[]).push([[469],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>g});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var p=r.createContext({}),i=function(t){var a=r.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):s(s({},a),t)),e},d=function(t){var a=i(t.components);return r.createElement(p.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=i(e),g=n,h=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return e?r.createElement(h,s(s({ref:a},d),{},{components:e})):r.createElement(h,s({ref:a},d))}));function g(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,s=new Array(o);s[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,s[1]=l;for(var i=2;i<o;i++)s[i]=e[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},9303:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=e(7462),n=(e(7294),e(3905));const o={},s="Prepper Open Data Bank",l={unversionedId:"podb",id:"podb",title:"Prepper Open Data Bank",description:"\u682a\u5f0f\u4f1a\u793e truestar \u304c\u62bd\u51fa\u3001\u52a0\u5de5\u3057\u305f\u30c7\u30fc\u30bf\u63d0\u4f9b\u30b5\u30fc\u30d3\u30b9 Prepper Open Data Bank \u306e Google BigQuery \u30af\u30ed\u30fc\u30f3\u3092 Analytics Hub \u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/podb.md",sourceDirName:".",slug:"/podb",permalink:"/docs/podb",draft:!1,editUrl:"https://github.com/bqfun/bqfun/docs/podb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u5de5\u6e08\u307f\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf",permalink:"/docs/jpdata"},next:{title:"BigQuery\u306b\u89e6\u3063\u3066\u307f\u3088\u3046",permalink:"/docs/quickstarts"}},p={},i=[{value:"\u30c7\u30fc\u30bf\u4e00\u89a7",id:"\u30c7\u30fc\u30bf\u4e00\u89a7",level:2},{value:"\u304a\u554f\u3044\u5408\u308f\u305b",id:"\u304a\u554f\u3044\u5408\u308f\u305b",level:2}],d={toc:i};function c(t){let{components:a,...e}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prepper-open-data-bank"},"Prepper Open Data Bank"),(0,n.kt)("p",null,"\u682a\u5f0f\u4f1a\u793e truestar \u304c\u62bd\u51fa\u3001\u52a0\u5de5\u3057\u305f\u30c7\u30fc\u30bf\u63d0\u4f9b\u30b5\u30fc\u30d3\u30b9 Prepper Open Data Bank \u306e Google BigQuery \u30af\u30ed\u30fc\u30f3\u3092 Analytics Hub \u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002\nGoogle Cloud \u5229\u7528\u8005\u306f\u3001\u81ea\u8eab\u306e BigQuery \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u30ea\u30f3\u30af\u3057\u3066\u3001\u81ea\u52d5\u66f4\u65b0\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30c7\u30fc\u30bf\u4e00\u89a7"},"\u30c7\u30fc\u30bf\u4e00\u89a7"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u540d\uff08\u8a73\u7d30\u30ea\u30f3\u30af\uff09"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,n.kt)("th",{parentName:"tr",align:null},"\u66f4\u65b0\u983b\u5ea6"),(0,n.kt)("th",{parentName:"tr",align:null},"Analytics Hub"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/pref-data"},"JAPANESE PREFECTURE DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u306e\u90fd\u9053\u5e9c\u770c\u30ec\u30d9\u30eb\u306e\u7d71\u8a08\u30fb\u7a7a\u9593\u30c7\u30fc\u30bf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_prefecture_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_prefecture_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/city-data"},"JAPANESE CITY DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u306e\u5e02\u533a\u753a\u6751\u30ec\u30d9\u30eb\u306e\u7d71\u8a08\u30fb\u7a7a\u9593\u30c7\u30fc\u30bf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_city_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_city_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/str-data"},"JAPANESE STREET DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u306e\u56fd\u52e2\u8abf\u67fb\u306e\u753a\u4e01\u76ee\uff08\u5c0f\u5730\u57df\uff09\u30ec\u30d9\u30eb\u306e\u7d71\u8a08\u30fb\u7a7a\u9593\u30c7\u30fc\u30bf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_street_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_street_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/mesh-data"},"JAPANESE MESH DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u5168\u56fd\u306e\u30e1\u30c3\u30b7\u30e5\u5225\u306e\u4eba\u6d41\u30c7\u30fc\u30bf\u3084\u5c06\u6765\u63a8\u8a08\u4eba\u53e3\u30c7\u30fc\u30bf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_mesh_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_mesh_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/sr-data"},"JAPANESE STATION AND RAILWAY DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u5168\u56fd\u306e\u9244\u9053\u306e\u8def\u7dda\u3084\u99c5\u306b\u3064\u3044\u3066\u3001\u30dd\u30a4\u30f3\u30c8\u53ca\u3073\u30dd\u30ea\u30e9\u30a4\u30f3\u30c7\u30fc\u30bf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_station_and_railway_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_station_and_railway_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/weather-data"},"JAPANESE WEATHER DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5168\u56fd\u306e\u5929\u6c17\u60c5\u5831"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_weather_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_weather_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/land-price-data"},"JAPANESE LAND PRICE DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u5168\u56fd\u306b\u304a\u3051\u308b\u3001\u6642\u7cfb\u5217\u306e\u5730\u4fa1\u60c5\u5831\u3068\u305d\u306e\u571f\u5730\u306e\u6700\u65b0\u306e\u5c5e\u6027\u60c5\u5831"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_land_price_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_land_price_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/medical-data"},"JAPANESE MEDICAL DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u5168\u56fd\u306e\u533b\u7642\u6a5f\u95a2\u306e\u4f4d\u7f6e\u60c5\u5831\u3068\u8a3a\u7642\u79d1\u76ee\u3084\u75c5\u5e8a\u6570\u306a\u3069\u306e\u5c5e\u6027\u60c5\u5831\u3084\u3001\u65e5\u672c\u306e\u533b\u7642\u570f\u306e\u60c5\u5831"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_medical_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_medical_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/corp-data"},"JAPANESE CORPORATE DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c\u56fd\u5185\u306e\u6cd5\u4eba\u60c5\u5831"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_corporate_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_corporate_data"},"asia-northeast1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://podb.truestar.co.jp/archives/cal-data"},"JAPANESE CALENDAR DATA")),(0,n.kt)("td",{parentName:"tr",align:null},"\u795d\u65e5\u3068\u632f\u66ff\u4f11\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bce\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/us/dataExchanges/podb__us/listings/japanese_calendar_data"},"US"),", ",(0,n.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/bigquery/analytics-hub/discovery/projects/jpdata/locations/asia-northeast1/dataExchanges/podb/listings/japanese_calendar_data"},"asia-northeast1"))))),(0,n.kt)("h2",{id:"\u304a\u554f\u3044\u5408\u308f\u305b"},"\u304a\u554f\u3044\u5408\u308f\u305b"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bqfun.jp/docs/#slack"},"BQ FUN Slack")," \u307e\u305f\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bqfun/jpdata/issues"},"GitHub Issues")," \u306b\u3066\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"))}c.isMDXComponent=!0}}]);