(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),o=(a(88),a(11)),i=a(70),l=a(13),s=a.n(l),u=a(30),m=a(26),p=a(37),d=a(31),f=a(32),b=a(28),h=(a(90),a(5)),v=a(12),_=a(71),g={map:"https://www.google.com/maps/d/embed?mid=1p9qMxxjO5xPpQX64KjiqyB2b1splxMRR&hl=ru&z=14",phoneMask:["+","7"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/],licenseMask:[/\d/,/\d/,/[\u0430-\u044f\u0410-\u042fa-zA-Z0-9]/,/[\u0430-\u044f\u0410-\u042fa-zA-Z0-9]/," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],datePipe:a.n(_)()("dd.mm.yyyy"),dateMask:[/\d/,/\d/,".",/\d/,/\d/,".",/\d/,/\d/,/\d/,/\d/],yearMask:[/\d/,/\d/,/\d/,/\d/],regNoMask:[/[\u0430-\u044f\u0410-\u042fa-zA-Z]/,/\d/,/\d/,/\d/,/[\u0430-\u044f\u0410-\u042fa-zA-Z]/,/[\u0430-\u044f\u0410-\u042fa-zA-Z]/," ",/\d/,/\d/,/\d/],vinMask:new Array(17).fill(/[0-9ABCDEFGHJKLMNPRSTUVWXYZabcdefghjklmnprstuvwxyz]/),stsMask:[/\d/,/\d/," ",/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],sheetUrl:"https://script.google.com/macros/s/AKfycbzqvtwrV9YhI2v835a571-S0FJiMYUuBpfovfCV6oRooEniIAKv/exec",viberUrl:"https://chatapi.viber.com/pa/post",viberToken:"49c89d39cd67d3c7-30d035d370be9de0-c4a52f4c8bf66181",towns:["\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a","\u041f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a","\u0421\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440","\u0412.\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u041b\u043e\u043c\u043e\u043d\u043e\u0441\u043e\u0432","\u041f\u0435\u0442\u0435\u0440\u0433\u043e\u0444","\u041a\u0440 \u0421\u0435\u043b\u043e","\u0418\u0440\u043a\u0443\u0442\u0441\u043a","\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a"]},E=a(72),O=a.n(E);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=new(function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"request",value:function(){var e=Object(m.a)(s.a.mark(function e(t,a,n){var r,c,o,i,l,u,m,p,d,f,b;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.body,c=n.form,o=n.query,i=n.headers,l=n.cors,u=void 0===l||l,m=a+(o?"?"+O.a.stringify(o):""),i=k({},i,{Accept:"application/json"}),console.log(i),e.next=6,fetch(m,{method:t,headers:i,mode:u?"cors":"no-cors",body:c||JSON.stringify(r)});case 6:if(200===(p=e.sent).status){e.next=19;break}return e.prev=8,e.next=11,p.json();case 11:f=e.sent,d=f.details,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),d=p.statusText;case 18:throw new Error(d);case 19:return e.prev=19,e.next=22,p.json();case 22:return b=e.sent,e.abrupt("return",b);case 26:return e.prev=26,e.t1=e.catch(19),e.abrupt("return",p);case 29:case"end":return e.stop()}},e,null,[[8,15],[19,26]])}));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}()),w=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,null,[{key:"callback",value:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(!0));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendProfile",value:function(){var e=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.request("GET",g.sheetUrl,{query:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),x=a(17),N=a(34),M=a.n(N),P=a(15),D=a(49),C=a.n(D),R=a(22),S=a.n(R),A=function(e){var t=e.children;return r.a.createElement("div",{className:S.a.suggest},t)},z=function(e){var t=e.type,a=e.name,c=e.value,o=e.placeholder,i=e.mask,l=e.pipe,s=e.onChange,u=e.error,m=e.validator,p=e.getSuggestions,d={className:c?S.a.input:[S.a.input,S.a.empty].join(" "),type:t,name:a,value:c,placeholder:o,onChange:function(e){return s(e.target.value,a)}},f=Object(n.useState)(),b=Object(x.a)(f,2),h=b[0],v=b[1];return Object(n.useEffect)(function(){p&&c&&p(c).then(v)},[c,p]),r.a.createElement("div",{className:[S.a.container,(m&&c?!m(c)&&u:u)&&S.a.error].join(" ")},i||l?l?r.a.createElement(C.a,Object.assign({},d,{mask:i,pipe:l})):r.a.createElement(C.a,Object.assign({},d,{mask:i})):r.a.createElement("input",d),c&&r.a.createElement("span",{className:S.a.hint},o),h&&r.a.createElement("div",{className:S.a.suggestions},h.map(function(e,t){return r.a.createElement(A,{key:t},e)})))},I=a(75),L=a.n(I),Z=function(e){var t=e.children,a=e.className;return r.a.createElement("button",{className:[L.a.container,a].join(" ")},t)},q=a(50),B=a.n(q);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var H,V,T,Y,U,J,K,W,X,Q={fio:"",phone:"",license:"",licenseDate:"",licenseDateExpire:"",carBrand:"",carModel:"",carColor:"",carYear:"",carRegNo:"",carVin:"",carSts:""},G=function(){var e=Object(P.b)()[0],t=Object(n.useState)(Q),a=Object(x.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)({}),l=Object(x.a)(i,2),s=l[0],m=l[1],p=function(e,t){t&&o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},c,Object(u.a)({},t,e)))};return r.a.createElement("form",{className:B.a.container,onSubmit:function(t){return function(t){var a=Object.keys(c).reduce(function(e,t){var a=c?c[t]:void 0;switch(t){case"fio":e.fio=!(a&&a.length>3);break;case"phone":e.phone=!(a&&M.a.isMobilePhone(a.replace(/\D/g,""),"ru-RU"));break;case"license":e.license=!(a&&a.match(/\d{2}[\u0430-\u044f\u0410-\u042fa-zA-Z0-9]{2} \d{6}/));break;case"licenseDate":e.licenseDate=!(a&&a.match(/\d{2}\.\d{2}\.\d{4}/));break;case"licenseDateExpire":e.licenseDateExpire=!(a&&a.match(/\d{2}\.\d{2}\.\d{4}/));break;case"carBrand":e.carBrand=!(a&&a.length>3);break;case"carModel":e.carModel=!(a&&a.length>3);break;case"carColor":e.carColor=!(a&&a.length>3);break;case"carYear":e.carYear=!(a&&a.match(/\d{4}/));break;case"carRegNo":e.carRegNo=!(a&&a.match(/[\u0430-\u044f\u0410-\u042fa-zA-Z]\d{3}[\u0430-\u044f\u0410-\u042fa-zA-Z]{2} \d{3}/));break;case"carVin":a=a&&a.replace("_",""),e.carVin=!(a&&17===a.length);break;case"carSts":a=a&&a.replace("_",""),e.carSts=!(a&&12===a.length)}return e},{});Object.keys(a).reduce(function(e,t){return e||!!a[t]},!1)?m(a):ce.sendProfile(c).then(function(t){!1!==t?(o(Q),re.setMessage({text:e("profile.success")})):re.setMessage({text:e("profile.error"),type:"ERROR"})}),t.preventDefault()}(t)}},r.a.createElement(z,{type:"text",placeholder:e("profile.fio"),name:"fio",value:c.fio,onChange:p,error:s.fio,validator:function(e){return!!e&&e.length>3}}),r.a.createElement(z,{type:"tel",placeholder:e("profile.phone"),name:"phone",value:c.phone,mask:g.phoneMask,onChange:p,error:s.phone,validator:function(e){return M.a.isMobilePhone(e.replace(/\D/g,""),"ru-RU")}}),r.a.createElement(z,{type:"text",placeholder:e("profile.license"),name:"license",value:c.license,mask:g.licenseMask,validator:function(e){return e.match(/\d{2}[\u0430-\u044f\u0410-\u042fa-zA-Z]{2} \d{6}/)},onChange:p,error:s.license}),r.a.createElement(z,{type:"text",placeholder:e("profile.licenseDate"),name:"licenseDate",value:c.licenseDate,mask:g.dateMask,validator:function(e){return e.match(/\d{2}\.\d{2}\.\d{4}/)},pipe:g.datePipe,onChange:p,error:s.licenseDate}),r.a.createElement(z,{type:"text",placeholder:e("profile.licenseDateExpire"),name:"licenseDateExpire",value:c.licenseDateExpire,validator:function(e){return e.match(/\d{2}\.\d{2}\.\d{4}/)},mask:g.dateMask,pipe:g.datePipe,onChange:p,error:s.licenseDateExpire}),r.a.createElement(z,{type:"text",placeholder:e("profile.carBrand"),name:"carBrand",value:c.carBrand,validator:function(e){return!!e&&e.length>3},onChange:p,error:s.carBrand}),r.a.createElement(z,{type:"text",placeholder:e("profile.carModel"),name:"carModel",validator:function(e){return!!e&&e.length>3},value:c.carModel,onChange:p,error:s.carModel}),r.a.createElement(z,{type:"text",placeholder:e("profile.carColor"),name:"carColor",validator:function(e){return!!e&&e.length>3},value:c.carColor,onChange:p,error:s.carColor}),r.a.createElement(z,{type:"text",placeholder:e("profile.carYear"),name:"carYear",mask:g.yearMask,validator:function(e){return e.match(/\d{4}/)},value:c.carYear,onChange:p,error:s.carYear}),r.a.createElement(z,{type:"text",placeholder:e("profile.carRegNo"),name:"carRegNo",mask:g.regNoMask,validator:function(e){return e.match(/[\u0430-\u044f\u0410-\u042fa-zA-Z]\d{3}[\u0430-\u044f\u0410-\u042fa-zA-Z]{2} \d{3}/)},value:c.carRegNo,onChange:p,error:s.carRegNo}),r.a.createElement(z,{type:"text",placeholder:e("profile.carVin"),name:"carVin",mask:g.vinMask,validator:function(e){return e.match(/[\u0430-\u044f\u0410-\u042fa-zA-Z]\d{3}[\u0430-\u044f\u0410-\u042fa-zA-Z]{2} \d{3}/)},value:c.carVin,onChange:p,error:s.carVin}),r.a.createElement(z,{type:"text",placeholder:e("profile.carSts"),name:"carSts",mask:g.stsMask,validator:function(e){return e.match(/[\u0430-\u044f\u0410-\u042fa-zA-Z]\d{3}[\u0430-\u044f\u0410-\u042fa-zA-Z]{2} \d{3}/)},value:c.carSts,onChange:p,error:s.carSts}),r.a.createElement(Z,{className:B.a.button},e("".concat(ce.sended?"profile.submit2":"profile.submit"))))};function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var te=Object.keys(Q).reduce(function(e,t){return e[t]="----",e},{}),ae=(H=h.b.bound,V=function(){function e(){Object(d.a)(this,e),Object(p.a)(this,"message",T,this),Object(p.a)(this,"messageType",Y,this),Object(p.a)(this,"loading",U,this),this.interval=null}return Object(f.a)(e,[{key:"setMessage",value:function(e){var t=this,a=e.text,n=e.type,r=void 0===n?"INFO":n,c=e.lifeTime;this.message=a,this.messageType=r,this.interval&&clearInterval(this.interval),a&&c&&(this.interval=setTimeout(function(){return t.setMessage({text:""})},c))}}]),e}(),T=Object(b.a)(V.prototype,"message",[h.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Y=Object(b.a)(V.prototype,"messageType",[h.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"INFO"}}),U=Object(b.a)(V.prototype,"loading",[h.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(b.a)(V.prototype,"setMessage",[H],Object.getOwnPropertyDescriptor(V.prototype,"setMessage"),V.prototype),V),ne=(J=h.b.bound,K=h.b.bound,W=function(){function e(){Object(d.a)(this,e),Object(p.a)(this,"sended",X,this)}return Object(f.a)(e,[{key:"callback",value:function(){var e=Object(m.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,re.loading=!0,e.prev=2,e.next=5,w.sendProfile(ee({timestamp:(new Date).toLocaleString()},te,{},t));case 5:return a=e.sent,e.prev=6,e.next=9,w.callback(t);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),console.error("viber bot",e.t0);case 14:this.sended=!0,e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),console.error(e.t1);case 20:return re.loading=!1,e.abrupt("return",a);case 22:case"end":return e.stop()}},e,this,[[2,17],[6,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"sendProfile",value:function(){var e=Object(m.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,re.loading=!0,e.prev=2,e.next=5,w.sendProfile(ee({timestamp:(new Date).toLocaleString()},t));case 5:a=e.sent,this.sended=!0,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return re.loading=!1,e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}()}]),e}(),X=Object(b.a)(W.prototype,"sended",[h.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(b.a)(W.prototype,"callback",[J],Object.getOwnPropertyDescriptor(W.prototype,"callback"),W.prototype),Object(b.a)(W.prototype,"sendProfile",[K],Object.getOwnPropertyDescriptor(W.prototype,"sendProfile"),W.prototype),W),re=new ae,ce=new ne,oe=Object(v.a)(),ie=a(40),le=a(41),se=a(52),ue=a.n(se),me=function(e){var t=e.loading;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:ue.a.wait},r.a.createElement(ie.a,{className:ue.a.icon,icon:le.b})))},pe=a(42),de=a.n(pe),fe=function(e){var t=e.text,a=e.messageType,n=void 0===a?"INFO":a,c=e.onClick;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:de.a.container},r.a.createElement("div",{onClick:c},r.a.createElement("div",{className:[de.a.message,de.a[n]].join(" ")},t))))},be=a(27),he=a(18),ve=a.n(he),_e=function(){var e=Object(P.b)()[0],t=Object(n.useState)(!1),a=Object(x.a)(t,2),c=a[0],o=a[1],i=Object(n.useRef)(null);Object(n.useEffect)(function(){return document.addEventListener("mousedown",l,!1),function(){return document.removeEventListener("mousedown",l,!1)}},[]);var l=function(e){i&&i.current&&i.current.contains(e.target)||o(!1)};return r.a.createElement("section",{className:ve.a.container},r.a.createElement("div",{className:ve.a.content},r.a.createElement("div",{className:ve.a.logo},e("header.logo")),r.a.createElement("div",{className:[ve.a.menu,c&&ve.a.open].join(" ")},r.a.createElement(be.HashLink,{to:"/",className:ve.a.menuItem},e("header.menu.0")),r.a.createElement(be.HashLink,{to:"/profile",className:ve.a.menuItem},e("header.menu.2")),r.a.createElement(be.HashLink,{to:"/#footer",className:ve.a.menuItem},e("header.menu.1"))),r.a.createElement("div",{className:ve.a.contacts},e("contacts.phone")),r.a.createElement("div",{className:ve.a.bars,onClick:function(e){return o(!c)},ref:i},r.a.createElement(ie.a,{icon:le.a}))))},ge=a(35),Ee=a.n(ge),Oe=function(){return r.a.createElement("iframe",{className:Ee.a.mapContainer,src:g.map,frameBorder:"0"})},ye=function(){var e=Object(P.b)()[0];return r.a.createElement("section",{className:Ee.a.container},r.a.createElement("div",{className:Ee.a.content},r.a.createElement("div",{className:Ee.a.contactsContainer},r.a.createElement("ul",{className:Ee.a.contacts},r.a.createElement("li",null,e("contacts.address")),r.a.createElement("li",null,e("contacts.phone")),r.a.createElement("li",null,e("contacts.viber")),r.a.createElement("li",null,e("contacts.email")))),r.a.createElement(Oe,null)),r.a.createElement("div",{id:"footer"}))},ke=a(55),je=a.n(ke),we=function(){var e=Object(P.b)()[0],t=Object(n.useState)(""),a=Object(x.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(x.a)(i,2),s=l[0],u=l[1],m=Object(n.useState)({}),p=Object(x.a)(m,2),d=p[0],f=p[1];return r.a.createElement("form",{className:je.a.container,onSubmit:function(t){return function(t){var a={fio:c,phone:s},n=Object.keys(a).reduce(function(e,t){var n=a[t];switch(t){case"fio":e.fio=!(n&&n.length>1);break;case"phone":e.phone=!(s&&M.a.isMobilePhone(s.replace(/\D/g,""),"ru-RU"))}return e},{});Object.keys(n).reduce(function(e,t){return e||!!n[t]},!1)||ce.callback(a).then(function(t){!1!==t?(re.setMessage({text:e("callback.success")}),o(""),u("")):re.setMessage({text:e("callback.error"),type:"ERROR"})}),f(n),t.preventDefault()}(t)}},r.a.createElement(z,{type:"text",placeholder:e("callback.fio"),name:"fio",value:c,onChange:function(e,t){return o(e)},error:d.fio,validator:function(e){return!!e&&e.length>1}}),r.a.createElement(z,{type:"tel",placeholder:e("callback.phone"),name:"phone",value:s,mask:g.phoneMask,onChange:function(e,t){return u(e)},error:d.phone,validator:function(e){return M.a.isMobilePhone(e.replace(/\D/g,""),"ru-RU")}}),r.a.createElement(Z,{className:je.a.button},e("".concat(ce.sended?"callback.submit2":"callback.submit"))))},xe=a(8),Ne=a.n(xe),Me=function(){var e=Object(P.b)()[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:Ne.a.section_1},r.a.createElement("div",{className:Ne.a.cover}),r.a.createElement("div",{className:Ne.a.container},r.a.createElement("div",{className:Ne.a.title,id:"callback"},r.a.createElement("h1",null,e("main.title")),r.a.createElement("p",null,e("main.description")," ",r.a.createElement(be.HashLink,{className:Ne.a.link,to:"/profile"},e("main.description_link")))),r.a.createElement(we,null))),r.a.createElement("section",{className:Ne.a.section_2},r.a.createElement("div",{className:Ne.a.container},r.a.createElement("h2",null,e("main.cells-title")),r.a.createElement("div",{className:Ne.a.cells},r.a.createElement("div",{className:Ne.a.cell},r.a.createElement("div",null,e("main.cells.0.title")),r.a.createElement("div",null,e("main.cells.0.description"))),r.a.createElement("div",{className:Ne.a.cell},r.a.createElement("div",null,e("main.cells.1.title")),r.a.createElement("div",null,e("main.cells.1.description"))),r.a.createElement("div",{className:Ne.a.cell},r.a.createElement("div",null,e("main.cells.2.title")),r.a.createElement("div",null,e("main.cells.2.description"))),r.a.createElement("div",{className:Ne.a.cell},r.a.createElement("div",null,e("main.cells.3.title")),r.a.createElement("div",null,e("main.cells.3.description")))),r.a.createElement(be.HashLink,{className:Ne.a.link,to:"/#callback"},e("main.cells-link")))),r.a.createElement("section",{className:Ne.a.section_3},r.a.createElement("div",{className:Ne.a.container},r.a.createElement("h2",null,e("main.request.title")),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("h3",null,e("main.request.steps.0.title")),r.a.createElement("div",null,e("main.request.steps.0.description"))),r.a.createElement("li",null,r.a.createElement("h3",null,e("main.request.steps.1.title")),r.a.createElement("div",null,e("main.request.steps.1.description"))),r.a.createElement("li",null,r.a.createElement("h3",null,e("main.request.steps.2.title")),r.a.createElement("div",null,e("main.request.steps.2.description")))),r.a.createElement("p",null))),r.a.createElement("section",{className:Ne.a.section_4},r.a.createElement("div",{className:Ne.a.container},r.a.createElement("h2",null,e("main.work.title")),r.a.createElement("p",null,e("main.work.description")),r.a.createElement(be.HashLink,{className:Ne.a.link,to:"/#callback"},e("main.work.link")))))},Pe=a(78),De=a.n(Pe),Ce=function(){return r.a.createElement("section",{className:De.a.container},r.a.createElement(G,null))},Re=a(79),Se=a.n(Re),Ae=Object(i.a)(function(){return r.a.createElement("div",{className:Se.a.container},r.a.createElement(me,{loading:re.loading}),r.a.createElement(fe,{text:re.message,messageType:re.messageType,onClick:function(){return re.setMessage({text:""})}}),r.a.createElement(o.e,{history:oe},r.a.createElement(_e,null),r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,path:"/",component:Me}),r.a.createElement(o.d,{exact:!0,path:"/lease",component:Me}),r.a.createElement(o.d,{exact:!0,path:"/profile",component:Ce})),r.a.createElement(ye,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ze=a(82),Ie=a(81),Le=(ze.a.use(P.a).init({lng:"ru",debug:!0,interpolation:{escapeValue:!1},resources:{ru:Ie}}),document.getElementById("root"));Le&&Le.hasChildNodes()?Object(c.hydrate)(r.a.createElement(Ae,null),Le):Object(c.render)(r.a.createElement(Ae,null),Le),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},18:function(e,t,a){e.exports={container:"Header_container__3AkQZ",content:"Header_content__3FCD2",logo:"Header_logo__3M212",contacts:"Header_contacts__2b-x0",menu:"Header_menu__XXbGe",menuItem:"Header_menuItem__StLsv",bars:"Header_bars__9n7Dp",open:"Header_open__Lw0hB"}},22:function(e,t,a){e.exports={container:"Input_container__hY9__",error:"Input_error__YH0Pg",hint:"Input_hint__340wm",input:"Input_input__2zxay",empty:"Input_empty__1ptmJ",hint2:"Input_hint2__Prb-K"}},35:function(e,t,a){e.exports={container:"Footer_container__bDY7L",content:"Footer_content__Xb6ju",contactsContainer:"Footer_contactsContainer__1wBv8",contacts:"Footer_contacts__1m-RD",mapContainer:"Footer_mapContainer__3bqKh"}},42:function(e,t,a){e.exports={container:"Message_container__1X4T8",transit:"Message_transit__2kI8l",message:"Message_message__2aJFA",WARN:"Message_WARN__2Xz7J",ERROR:"Message_ERROR__2fAML",INFO:"Message_INFO__1MHZ8"}},50:function(e,t,a){e.exports={container:"Profile_container__395Iy"}},52:function(e,t,a){e.exports={wait:"Loader_wait__1gjcO",displayTransition:"Loader_displayTransition__hcCpa",icon:"Loader_icon__33tZW",spin:"Loader_spin__3DUCB"}},55:function(e,t,a){e.exports={container:"Callback_container__1fbVF"}},75:function(e,t,a){e.exports={container:"Submit_container__1aRyH"}},78:function(e,t,a){e.exports={container:"Profile_container__2QkeK"}},79:function(e,t,a){e.exports={container:"App_container__LeDNW"}},8:function(e,t,a){e.exports={section:"Main_section__j4sdF",section_1:"Main_section_1__3o4Ei",section_2:"Main_section_2__12AYa",section_3:"Main_section_3__3RKXV",section_4:"Main_section_4__1jBg3",container:"Main_container__21q9B",cover:"Main_cover__3DF-Z",title:"Main_title__38mUb",link:"Main_link__1q0hQ",cells:"Main_cells__tOgqV",cell:"Main_cell__3mjpI"}},81:function(e){e.exports={translation:{main:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c \u042f\u043d\u0434\u0435\u043a\u0441.\u0422\u0430\u043a\u0441\u0438 \u0432 \u0433\u043e\u0440\u043e\u0434\u0430\u0445 \u0420\u043e\u0441\u0441\u0438\u0438",description:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043d\u0438\u0437\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430 \u0438 \u0431\u043e\u043d\u0443\u0441 500 \u0440\u0443\u0431\u043b\u0435\u0439 \u0437\u0430",description_link:"\u043e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e","cells-title":"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u0422\u0430\u043a\u0441\u0438 \u0432\u044b\u0433\u043e\u0434\u043d\u043e","cells-link":"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",cells:[{title:"\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a",description:"\u0412\u044b \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0435, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c."},{title:"\u041d\u0438\u0437\u043a\u0430\u044f \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f 3\u22125%",description:"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u0442\u0430\u043a\u0441\u043e\u043f\u0430\u0440\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043d\u0438\u0437\u043a\u0438\u0445 \u0432 \u0441\u0442\u0440\u0430\u043d\u0435"},{title:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b",description:"\u041c\u044b \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u0438 \u0431\u0435\u0437 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a \u0432\u044b\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u0434\u0435\u043d\u044c\u0433\u0438"},{title:"\u0412\u044b\u0431\u043e\u0440 \u0437\u0430 \u0432\u0430\u043c\u0438!",description:"\u041c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u043b\u0438\u0447\u043d\u043e\u043c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}],work:{title:"\u0423\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435 \u0432 \u042f\u043d\u0434\u0435\u043a\u0441. \u0422\u0430\u043a\u0441\u0438, \u043d\u043e \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u044f?",description:"\u041c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439, \u0441\u043c\u0435\u043d\u0438\u0432\u0448\u0438\u0445 \u043f\u0430\u0440\u043a",link:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043a"},request:{title:"\u0422\u0440\u0438 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0448\u0430\u0433\u0430, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c",steps:[{title:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443",description:"\u041d\u0430\u0448\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442 \u0432\u0430\u0441 \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435. \u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0432 \u0444\u043e\u0440\u043c\u0443 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438."},{title:"\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",description:"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","link-1":"\u042f\u043d\u0434\u0435\u043a\u0441.\u0422\u0430\u043a\u0441\u043e\u043c\u0435\u0442\u0440","link-2":"\u042f\u043d\u0434\u0435\u043a\u0441.\u041d\u0430\u0432\u0438\u0433\u0430\u0442\u043e\u0440"},{title:"\u041d\u0430\u0447\u0438\u043d\u0430\u0439\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",description:"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u042f\u043d\u0434\u0435\u043a\u0441. \u0422\u0430\u043a\u0441\u043e\u043c\u0435\u0442\u0440 \u0441\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. \u0412\u0430\u043c \u043f\u0440\u0438\u0434\u0435\u0442 \u0421\u041c\u0421-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u043f\u0430\u0440\u043e\u043b\u0435\u043c \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430. \u0415\u0441\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e, \u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430 \u043d\u0430\u0448\u0443 \u0433\u043e\u0440\u044f\u0447\u0443\u044e \u043b\u0438\u043d\u0438\u044e +7 (921) 857-12-10."}]}},header:{logo:"\u042f`ndex",menu:["\u0413\u043b\u0430\u0432\u043d\u0430\u044f","\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","\u041e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e"]},callback:{fio:"\u0418\u043c\u044f",phone:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",submit:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f",submit2:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0435\u0449\u0451...",success:"\u0412\u0430\u0448\u0430 \u0430\u043d\u043a\u0435\u0442\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430. \u041d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",error:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u043e \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."},profile:{fio:"\u0424\u0418\u041e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",phone:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",license:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435",licenseDate:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438",licenseDateExpire:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",carBrand:"\u041c\u0430\u0440\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",carModel:"\u041c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",carColor:"\u0426\u0432\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",carYear:"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430",carRegNo:"\u0413\u043e\u0441\u043d\u043e\u043c\u0435\u0440",carVin:"VIN",carSts:"\u0421\u0422\u0421",submit:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",submit2:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437...",success:"\u0412\u0430\u0448\u0430 \u0430\u043d\u043a\u0435\u0442\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430. \u041d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",error:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u043e \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."},contacts:{address:"\u0410\u0434\u0440\u0435\u0441: \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0411\u043e\u0433\u0430\u0442\u044b\u0440\u0441\u043a\u0438\u0439 \u043f\u0440. 14/2, \u043b\u0438\u0442\u0435\u0440\u0430 \u0410",phone:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: +7 (921) 857-12-10",viber:"Viber, Whatsapp: +7 (912) 143-34-00",email:"Email: mk-groupp1@yandex.ru"}}}},83:function(e,t,a){e.exports=a(173)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.07590cca.chunk.js.map