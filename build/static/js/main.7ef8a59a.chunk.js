(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{17:function(e,a,t){e.exports=t(49)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),s=(t(22),t(12)),i=t(13),o=t(16),m=t(15),d=(t(23),function(e){var a=e.users;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile for ".concat(t.first," ").concat(t.last),className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto: ".concat(c),target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(s.date)))})):r.a.createElement(r.a.Fragment,null))}),u=(t(24),function(e){var a=e.headings,t=e.users,n=e.handleSort;return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){var a=e.name,t=e.width;return r.a.createElement("th",{className:"col",key:a,style:{width:t},onClick:function(){n(a.toLowerCase())}},a,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(d,{users:t})))}),h=(t(25),function(e){var a=e.handleSearchChange;return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return a(e)}})))}),f=(t(26),function(e){var a=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",{className:"navbar-collapse row",id:"navbarNav"},r.a.createElement("h2",{className:"filter-title"},"Filter by Name: "),r.a.createElement(h,{handleSearchChange:a})))}),v=t(14),E=t.n(v),p=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")},g=(t(44),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"Date of Birth",width:"10%"}],e.handleSort=function(a){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var t=e.state.filteredUsers.sort((function(t,n){return"ascend"===e.state.order?void 0===t[a]?1:void 0===n[a]?-1:"name"===a?t[a].first.localeCompare(n[a].first):t[a]-n[a]:void 0===t[a]?1:void 0===n[a]?-1:"name"===a?n[a].first.localeCompare(t[a].first):n[a]-t[a]}));e.setState({filteredUsers:t})},e.handleSearchChange=function(a){var t=a.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p().then((function(a){e.setState({users:a.data.results,filteredUsers:a.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"data-area"},r.a.createElement(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})))}}]),t}(n.Component)),b=(t(45),function(){return r.a.createElement(g,null)}),N=(t(46),function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)}),w=(t(47),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header-title"},"Employee Directory"),r.a.createElement("p",{className:"header-subtitle"},"Click on name header to rearrange alphabetically or use the search box to narrow your results"))}),y=(t(48),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(w,null),r.a.createElement(b,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7ef8a59a.chunk.js.map