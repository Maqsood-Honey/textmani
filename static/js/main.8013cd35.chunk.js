(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(6),r=t.n(o),c=(t(16),t(3)),s=t(4),i=function(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.AppName),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/about"},"About"))),l.a.createElement("div",{onClick:function(){return e.pallet("primary")},className:"bg-primary rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{onClick:function(){return e.pallet("danger")},className:"bg-danger rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{onClick:function(){return e.pallet("success")},className:"bg-success rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{onClick:function(){return e.pallet("warning")},className:"bg-warning rounded mx-2",style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search"))))))},m=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type),role:"alert"},function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.msg)))},d=(t(18),function(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1],s=function(){var e=o.split(/[ ]+/);console.log(e),r(e.join(" "))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control mt-3",value:o,id:"myBox",rows:"10",autoFocus:!0,onChange:function(e){r(e.target.value)}})),l.a.createElement("button",{type:"button",onClick:function(){r(o.toUpperCase()),e.showAlert("converted to upper Case","danger")},className:"btn btn-primary rotate-hor-center"},"Convert to Upper Case"),l.a.createElement("button",{type:"button",onClick:function(){r(o.toLowerCase()),e.showAlert("converted to Upper Case","primary")},className:"btn btn-primary mx-2 rotate-hor-center"},"Convert to lower Case"),l.a.createElement("button",{type:"button",onClick:function(){r(" ")},className:"btn btn-primary mx-2 rotate-hor-center"},"Cleat Text"),l.a.createElement("button",{type:"button",onClick:function(){var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),document.getSelection().removeAllRanges(),e.showAlert("Copied","primary")},className:"btn btn-primary mx-2 rotate-hor-center"},"Copy Text"),l.a.createElement("button",{type:"button",onClick:s,className:"btn btn-primary mx-2 rotate-hor-center"},"Remove Spaces"),l.a.createElement("button",{type:"button",onClick:s,className:"btn btn-primary mx-2 rotate-hor-center"}," Rotate"),l.a.createElement("h2",{className:"mt-3"},"Your Text Summary"),l.a.createElement("p",null,"You enterered ",o.length," character and ",o.split(/\s+/).filter(function(e){return 0!==e.length}).length," wrords. "),l.a.createElement("p",null,"Apporoxmatley time to read this is ",.008*o.length," Minutes."),l.a.createElement("h1",null,"Preview"),l.a.createElement("p",null,o))}),u=t(0),p=function(){return l.a.createElement("div",{className:"accordion",id:"accordionPanelsStayOpenExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne"},"Accordion Item #1")),l.a.createElement("div",{id:"panelsStayOpen-collapseOne",className:"accordion-collapse collapse show"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseTwo"},"Accordion Item #2")),l.a.createElement("div",{id:"panelsStayOpen-collapseTwo",className:"accordion-collapse collapse"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseThree","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseThree"},"Accordion Item #3")),l.a.createElement("div",{id:"panelsStayOpen-collapseThree",className:"accordion-collapse collapse"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))},h=(t(20),function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],o=a[1],r=function(e,a){o({msg:e,type:a}),setTimeout(function(){o(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(i,{AppName:"TextUtils",pallet:function(e){document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-warning"),document.body.classList.add("bg-"+e)}}),l.a.createElement(m,{alert:t}),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",element:l.a.createElement(d,{showAlert:r})}),l.a.createElement(u.a,{path:"/home",element:l.a.createElement(d,{showAlert:r})}),l.a.createElement(u.a,{path:"/about",element:l.a.createElement(p,null)}))))});r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.Fragment,null," ",l.a.createElement("div",{className:"container my-3"},l.a.createElement(h,null))))},7:function(e,a,t){e.exports=t(22)}},[[7,2,1]]]);
//# sourceMappingURL=main.8013cd35.chunk.js.map