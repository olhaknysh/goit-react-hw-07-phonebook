(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(15),o=n.n(a),u=n(9),i=n(12),s=n.n(i),b=n(19),l=n(14),j=n.n(l),f=n(4),d=Object(f.b)("contacts/fetchContactsRequest"),O=Object(f.b)("contacts/fetchContactsSuccess"),m=Object(f.b)("contacts/fetchContactsFailure"),p=Object(f.b)("contacts/addContactsRequest"),h=Object(f.b)("contacts/addContactsSuccess"),x=Object(f.b)("contacts/addContactsFailure"),g=Object(f.b)("contacts/deleteContactsRequest"),v=Object(f.b)("contacts/deleteContactsSuccess"),C=Object(f.b)("contacts/deleteContactsFailure");j.a.defaults.baseURL="http://localhost:4040";var y,N,k,w=function(){return function(){var t=Object(b.a)(s.a.mark((function t(e){var n,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d()),t.prev=1,t.next=4,j.a.get("/contacts");case 4:n=t.sent,c=n.data,e(O(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(m(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},F=function(t){return function(){var e=Object(b.a)(s.a.mark((function e(n){var c,r,a,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.name,r=t.number,a={name:c,number:r},n(p()),e.prev=3,e.next=6,j.a.post("/contacts",a);case 6:o=e.sent,u=o.data,n(h(u)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n(x(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(b.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g()),e.prev=1,e.next=4,j.a.delete("/contacts/".concat(t));case 4:e.sent&&n(v(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(C(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},L=n(16),A=function(t){return t.items.contacts},D=function(t){return t.filter},q={getContacts:A,getIsLoading:function(t){return t.items.loading},getError:function(t){return t.items.error},getFilter:D,getVisibleContacts:Object(L.a)([A,D],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},z=n(10),B=n(1),R=Object(z.a)({contact:{display:"flex",justifyContent:"flex-end",marginBottom:5},button:{marginLeft:10}}),E=function(t){var e=t.id,n=t.name,c=t.number,r=t.onDelete,a=R();return Object(B.jsxs)("li",{className:a.contact,children:[Object(B.jsxs)("p",{children:[n," : ",c]}),Object(B.jsx)("button",{className:a.button,type:"button",onClick:function(){return r(e)},children:"X"})]})},I=Object(u.b)((function(t){return{contacts:q.getContacts(t)}}),(function(t){return{onDelete:function(e){return t(S(e))}}}))(E),J=function(t){var e=t.contacts,n=t.fetchContacts;return Object(c.useEffect)((function(){n()}),[]),Object(B.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(B.jsx)(I,{id:e,name:n,number:c},e)}))})},Z=Object(u.b)((function(t){return{contacts:q.getVisibleContacts(t),filter:q.getFilter(t)}}),(function(t){return{fetchContacts:function(){return t(w())}}}))(J),M=n(3),P=n(23),T=n(18),V=Object(z.a)({form:{display:"flex",flexDirection:"column"},label:{marginBottom:10},labelName:{marginRight:8},loader:{position:"absolute"},error:{position:"fixed",bottom:20,color:"red",fontSize:"26px"}}),U={name:"",number:""},X=function(t){var e=t.contacts,n=t.loading,r=t.error,a=t.onSubmit,o=Object(c.useState)(U),u=Object(T.a)(o,2),i=u[0],s=u[1],b=i.name,l=i.number,j=V(),f=function(t){s((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(M.a)({},t.target.name,t.target.value))}))},d=function(t){var n=!!e.find((function(e){return e.name===t}));return n&&alert("".concat(t," is already in contacts.")),n};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("form",{className:j.form,onSubmit:function(t){t.preventDefault(),d(b)||a({name:b,number:l}),s(U)},children:[Object(B.jsxs)("label",{className:j.label,children:[Object(B.jsx)("span",{className:j.labelName,children:"Name"}),Object(B.jsx)("input",{value:b,onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(B.jsxs)("label",{className:j.label,children:[Object(B.jsx)("span",{className:j.labelName,children:"Phone"}),Object(B.jsx)("input",{value:l,onChange:f,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(B.jsx)("button",{type:"submit",children:"Add contact"})]}),n&&Object(B.jsx)("p",{className:j.loader,children:"Loading..."}),r&&Object(B.jsx)("p",{className:j.error,children:r})]})},$=Object(u.b)((function(t){return{contacts:q.getContacts(t),loading:q.getIsLoading(t),error:q.getError(t)}}),(function(t){return{onSubmit:function(e){return t(F(e))}}}))(X),G=Object(f.b)("filter/setFilter"),H=Object(z.a)({filter:{display:"flex",flexDirection:"column"},label:{marginBottom:10}}),K=Object(u.b)((function(t){return{filter:t.filter}}),(function(t){return{onFilterChange:function(e){return t(G(e))}}}))((function(t){var e=t.onFilterChange,n=Object(c.useState)(""),r=Object(T.a)(n,2),a=r[0],o=r[1],u=H();return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("label",{className:u.filter,children:[Object(B.jsx)("span",{className:u.label,children:"Find contacts by name"}),Object(B.jsx)("input",{value:a,onChange:function(t){var n=t.target.value;e(n),o(n)},type:"text"})]})})})),Q=Object(z.a)({container:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:40}}),W=function(t){var e=t.children,n=Q();return Object(B.jsx)("div",{className:n.container,children:e})},Y=function(){return Object(B.jsxs)(W,{children:[Object(B.jsx)("h1",{children:"Phonebook"}),Object(B.jsx)($,{}),Object(B.jsx)("h2",{children:"Contacts"}),Object(B.jsx)(K,{}),Object(B.jsx)(Z,{})]})},_=n(33),tt=n(8),et=Object(f.c)([],(y={},Object(M.a)(y,O,(function(t,e){return e.payload})),Object(M.a)(y,h,(function(t,e){var n=e.payload;return[].concat(Object(_.a)(t),[n])})),Object(M.a)(y,v,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),y)),nt=Object(f.c)(!1,(N={},Object(M.a)(N,d,(function(){return!0})),Object(M.a)(N,O,(function(){return!1})),Object(M.a)(N,m,(function(){return!1})),Object(M.a)(N,p,(function(){return!0})),Object(M.a)(N,h,(function(){return!1})),Object(M.a)(N,x,(function(){return!1})),Object(M.a)(N,g,(function(){return!0})),Object(M.a)(N,v,(function(){return!1})),Object(M.a)(N,C,(function(){return!1})),N)),ct=Object(f.c)("",(k={},Object(M.a)(k,m,(function(t,e){return e.payload})),Object(M.a)(k,x,(function(t,e){return e.payload})),Object(M.a)(k,C,(function(t,e){return e.payload})),Object(M.a)(k,O,(function(){return""})),Object(M.a)(k,h,(function(){return""})),Object(M.a)(k,v,(function(){return""})),k)),rt=Object(tt.b)({contacts:et,loading:nt,error:ct}),at=Object(f.c)("",Object(M.a)({},G,(function(t,e){return e.payload}))),ot=Object(f.a)({reducer:{items:rt,filter:at},devTools:!1});n(64);o.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(u.a,{store:ot,children:Object(B.jsx)(Y,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b496decf.chunk.js.map