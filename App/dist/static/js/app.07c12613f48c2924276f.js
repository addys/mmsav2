webpackJsonp([1],{"0pd7":function(t,e,s){"use strict";e.a={name:"List",data:function(){return{docs:[],moment:window.moment,loaded:!1}},created:function(){this.fetchFromServer()},methods:{fetchFromServer:function(){var t=new XMLHttpRequest,e=this;t.open("GET","../api/list"),t.onload=function(){var s=JSON.parse(t.responseText);e.docs=s,e.loaded=!0},t.send()}}}},"2b0D":function(t,e,s){"use strict";var a=s("mvHQ"),n=s.n(a);e.a={name:"Assessment",props:["company"],components:{},data:function(){return{assessment:{company:""},model:{id:"x",sections:[]},answers:[],loaded:!1}},created:function(){this.fetchFromServer()},methods:{fetchFromServer:function(){var t=new XMLHttpRequest,e=this;t.open("GET","../api/c/"+e.company),t.onload=function(){var s=JSON.parse(t.responseText);e.assessment=s,e.model=s.model,e.assessment.model=null,e.answers=s.Answers,e.loaded=!0},t.send()},sendToServer:function(){var t=new XMLHttpRequest,e=this;t.open("POST","../api/c/"+e.company,!0);var s=n()(e.assessment);t.send(s)},getAnswer:function(t){var e=this.answers.find(function(e){return e.id===t});return null!=e&&e.answer},saveAnswer:function(t,e){var s=!1;this.assessment.Answers.forEach(function(a){a.id.valueOf()===t.id.valueOf()&&(a.answer=e.number,s=!0,console.log(a.id+"="+e.number))}),s||this.assessment.Answers.push({id:t.id,answer:e.number})}}}},"44wx":function(t,e,s){e=t.exports=s("FZ+f")(void 0),e.push([t.i,"h1[data-v-4b484bbe],h2[data-v-4b484bbe]{font-weight:400;color:red}ul[data-v-4b484bbe]{list-style-type:none;padding:0}li[data-v-4b484bbe]{display:inline-block;margin:0 10px}a[data-v-4b484bbe]{color:#42b983}",""])},"7rJi":function(t,e,s){"use strict";function a(t){s("EUWA")}var n=s("2b0D"),o=s("QjbX"),i=s("VU/8"),r=a,d=i(n.a,o.a,r,"data-v-a7d6df86",null);e.a=d.exports},EUWA:function(t,e,s){var a=s("QD5M");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("4747bb53",a,!0)},GXU9:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("table",[s("tr",{attrs:{width:"100%"}},[t._m(0),t._v(" "),s("td",{attrs:{align:"right",width:"200"}},[t._v("\n        Hello "+t._s(t.username())+"\n        "),s("br"),t._v(" "),s("a",{attrs:{href:"/.auth/logout?post_logout_redirect_uri=/app/login"}},[t._v("Sign Out")])])])]),t._v(" "),s("router-view")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("img",{attrs:{src:"/app/static/logo.png",width:"33%"}})])}],o={render:a,staticRenderFns:n};e.a=o},M93x:function(t,e,s){"use strict";var a=s("xJD8"),n=s("GXU9"),o=s("VU/8"),i=o(a.a,n.a,null,null,null);e.a=i.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),o=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}}),a.a.use(s("mjDs"))},QD5M:function(t,e,s){e=t.exports=s("FZ+f")(void 0),e.push([t.i,'.Assessment[data-v-a7d6df86]{font-family:Segoe UI Light,Tahoma,Verdana,Arial,sans-serif;font-size:14pt;color:#444}.sectiontitle[data-v-a7d6df86]{font-family:Lucida Grande,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid #ddd;font-size:2.6em;margin-bottom:20pt}.question[data-v-a7d6df86]{font-size:1.6em;font-weight:700;margin-top:12pt}.option[data-v-a7d6df86]{font-size:1.2em;font-color:black}.box[data-v-a7d6df86]{background:#fafafa;margin:5 auto;padding:20px;text-align:left;border:1px solid #ddd;border-radius:5px;-webkit-box-shadow:#ddd 3px 3px 5px;box-shadow:3px 3px 5px #ddd}@-webkit-keyframes click-wave-data-v-a7d6df86{0%{height:30px;width:30px;opacity:.35;position:relative}to{height:100px;width:100px;margin-left:-40px;margin-top:-40px;opacity:0}}@keyframes click-wave-data-v-a7d6df86{0%{height:30px;width:30px;opacity:.35;position:relative}to{height:100px;width:100px;margin-left:-40px;margin-top:-40px;opacity:0}}.option-input[data-v-a7d6df86]{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;top:2px;right:0;bottom:0;left:0;height:25px;width:25px;-webkit-transition:all .15s ease-out 0s;transition:all .15s ease-out 0s;background:#cbd1d8;border:none;color:#fff;cursor:pointer;display:inline-block;margin-right:.5rem;outline:none;position:relative;z-index:1000}.option-input[data-v-a7d6df86]:hover{background:#9faab7}.option-input[data-v-a7d6df86]:checked{background:#006400}.option-input[data-v-a7d6df86]:checked:before{height:25px;width:25px;position:absolute;content:"\\2714";display:inline-block;font-size:20px;text-align:center;line-height:25px}.option-input[data-v-a7d6df86]:checked:after{-webkit-animation:click-wave-data-v-a7d6df86 .65s;animation:click-wave-data-v-a7d6df86 .65s;background:green;content:"";display:block;position:relative;z-index:100}.option-input.radio[data-v-a7d6df86],.option-input.radio[data-v-a7d6df86]:after{border-radius:50%}',""])},QS95:function(t,e,s){e=t.exports=s("FZ+f")(void 0),e.push([t.i,"#list-template[data-v-34d82259]{font-family:Segoe UI Light,Tahoma,Verdana,Arial,sans-serif;font-size:14pt;color:#444}.title[data-v-34d82259]{font-family:Lucida Grande,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid #ddd;font-size:2.2em}.header[data-v-34d82259]{font-size:1.6em;font-weight:700;margin-top:12pt}.text[data-v-34d82259]{font-size:1.2em;font-color:black}.box[data-v-34d82259]{background:#fafafa;margin:5 auto;padding:20px;text-align:left;border:1px solid #ddd;border-radius:5px;-webkit-box-shadow:#ddd 3px 3px 5px;box-shadow:3px 3px 5px #ddd}",""])},QjbX:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Assessment"},[t.loaded?t._e():s("div",{attrs:{width:"100%",align:"center"}},[s("img",{attrs:{src:"/App/static/loading.jpg",width:"300"}})]),t._v(" "),t._l(t.model.sections,function(e){return s("div",[s("table",{attrs:{width:"100%"}},[s("tr",[s("td",{attrs:{width:"10%"}}),t._v(" "),s("td",{staticClass:"box",attrs:{width:"80%"}},[s("div",{staticClass:"sectiontitle"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.questions,function(e){return s("div",[s("div",{staticClass:"question"},[t._v(t._s(e.id)+" "+t._s(e.title)+" :  "+t._s(e.subtitle))]),t._v(" "),s("table",[s("tr",t._l(e.options,function(a){return s("div",[s("td",{attrs:{width:"40"}},[s("label",[s("input",{staticClass:"option-input radio",attrs:{type:"radio",name:e.id},domProps:{checked:a.number==t.getAnswer(e.id),value:a.number},on:{change:function(s){t.saveAnswer(e,a),t.sendToServer()}}})])]),t._v(" "),s("td",{attrs:{valign:"top"}},[t._v("\n                "+t._s(a.number)+". "+t._s(a.text)+"\n              ")])])}))])])})],2),s("td",{attrs:{width:"10%"}})])]),t._v(" "),s("br"),s("br")])})],2)},n=[],o={render:a,staticRenderFns:n};e.a=o},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),o=s("7rJi"),i=s("tcnj"),r=s("xJsL");a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/app/",name:"Login",component:r.a},{path:"/app/Assessment/:company",name:"Assessment",component:o.a,props:!0},{path:"/app/list",name:"List",component:i.a},{path:"*",redirect:"/app/"}]})},iopL:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("a",{attrs:{href:"http://mmsa-v2.azurewebsites.net/.auth/login/facebook?post_login_redirect_uri=/app/login/"}},[t._v("FB")]),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"http://mmsa-v2.azurewebsites.net/.auth/login/google?post_login_redirect_uri=/app/login/"}},[t._v("GOOG")]),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"http://mmsa-v2.azurewebsites.net/.auth/login/microsoftaccount/callback?post_login_redirect_uri=/app/login/"}},[t._v("MSFT")])])}],o={render:a,staticRenderFns:n};e.a=o},"nKb+":function(t,e,s){"use strict";var a=s("mvHQ"),n=s.n(a);e.a={name:"login",created:function(){console.log("query = "+n()(this.$route.query)),console.log("path = "+n()(this.$route.path)),console.log("params = "+n()(this.$route.params)),console.log("route = "+n()(this.$route))}}},nw36:function(t,e,s){var a=s("44wx");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("7baebb71",a,!0)},tcnj:function(t,e,s){"use strict";function a(t){s("w6QB")}var n=s("0pd7"),o=s("wmR9"),i=s("VU/8"),r=a,d=i(n.a,o.a,r,"data-v-34d82259",null);e.a=d.exports},uslO:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(o)},a.resolve=n,t.exports=a,a.id="uslO"},w6QB:function(t,e,s){var a=s("QS95");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("02cbccf4",a,!0)},wmR9:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"list-template"}},[t.loaded?t._e():s("div",{attrs:{width:"100%",align:"center"}},[s("img",{attrs:{src:"/App/static/loading.jpg",width:"300"}})]),t._v(" "),t.loaded?s("div",[s("div",{staticClass:"title"},[t._v("Existing Assessments")]),t._v(" "),s("table",{staticClass:"box"},[t._m(0),t._v(" "),s("tbody",t._l(t.docs,function(e){return s("tr",[s("td",{staticClass:"text"},[s("router-link",{attrs:{to:{name:"Assessment",params:{company:e.company}}}},[t._v(t._s(e.company))])],1),t._v(" "),s("td",{staticClass:"text"},[t._v(t._s(t._f("moment")(e.timestamp,"DD-MM-YYYY")))])])}))]),t._v(" "),s("button",{on:{click:t.sendToServer}},[t._v("Create New")])]):t._e()])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"header",attrs:{width:"300"}},[t._v("Company Name")]),s("th",{staticClass:"header"},[t._v("Last Updated")])])])}],o={render:a,staticRenderFns:n};e.a=o},xJD8:function(t,e,s){"use strict";e.a={name:"app",methods:{username:function(){return localStorage.getItem("username")||"?"}}}},xJsL:function(t,e,s){"use strict";function a(t){s("nw36")}var n=s("nKb+"),o=s("iopL"),i=s("VU/8"),r=a,d=i(n.a,o.a,r,"data-v-4b484bbe",null);e.a=d.exports}},["NHnr"]);
//# sourceMappingURL=app.07c12613f48c2924276f.js.map