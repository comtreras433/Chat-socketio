(this.webpackJsonpchat_dev=this.webpackJsonpchat_dev||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(44),l=n.n(s),o=(n(52),n(46)),u=n(10),m=n(45),i=n.n(m),j=function(e){var t=e.mensajes;return r.a.createElement("ul",{className:"list-group"},t.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement("strong",null,"Mensaje:")," ",e)})))},f=n(3),b=function(e){var t,n=e.mensaje,a=e.setMensaje,c=e.enviarMensaje;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"mx-auto form-row"},r.a.createElement("input",(t={type:"text",className:"form-control col-sm",placeholder:"Escribe un mensaje"},Object(f.a)(t,"placeholder","Escribe un Algo...."),Object(f.a)(t,"name","mensaje"),Object(f.a)(t,"value",n),Object(f.a)(t,"onChange",(function(e){var t=e.target.value;return a(t)})),Object(f.a)(t,"onKeyPress",(function(e){return"Enter"===e.key?c(e):null})),t)),r.a.createElement("input",{type:"button",className:"btn btn-primary mx-2 ",value:"Enviar",onClick:function(e){return c(e)}})))};n(85),n(86),n(87);var v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],l=Object(c.useState)(""),m=Object(u.a)(l,2),f=m[0],v=m[1],E=Object(c.useState)(""),p=Object(u.a)(E,2);return p[0],p[1],Object(c.useEffect)((function(){(a=i()("http://localhost:5000/")).on("mensaje",(function(e){console.log(e),s((function(t){return[].concat(Object(o.a)(t),[e])}))}))}),[]),r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"container all"},r.a.createElement("div",{className:"chat"},r.a.createElement(j,{className:"hijos ",mensajes:n}),r.a.createElement(b,{className:"hijos",mensaje:f,setMensaje:v,enviarMensaje:function(e){e.preventDefault(),f&&a.emit("enviarMensaje",f),v("")}}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},47:function(e,t,n){e.exports=n(123)},52:function(e,t,n){},82:function(e,t){},85:function(e,t,n){},86:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.f4beda12.chunk.js.map