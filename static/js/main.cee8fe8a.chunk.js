(this.webpackJsonpsplit_calculator=this.webpackJsonpsplit_calculator||[]).push([[0],{32:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var o=c(0),a=c.n(o),n=c(17),b=c.n(n),r=(c(32),c(19)),i=c(4),l=c(8),j=c(2),s=c(1),O=Object(j.a)({margin:Object(s.a)(24),display:"flex",flexFlow:"column",justifyContent:"center",alignItems:"center"}),d=Object(j.a)({marginTop:Object(s.a)(54),display:"flex",flexDirection:"column",alignItems:"center"}),u=Object(j.a)({fontSize:Object(s.a)(88),color:"#424242",fontWeight:800,marginBottom:Object(s.a)(16),fontFamily:"Lexend"}),f=Object(j.a)({fontSize:Object(s.a)(24),color:"#C4C4C4",fontFamily:"Roboto",fontWeight:400}),g=(Object(j.a)({backgroundColor:"#FFFFFF",borderRadius:Object(s.a)(4),margin:"".concat(Object(s.a)(20)," auto"),height:"100%",padding:Object(s.a)(24),width:Object(s.a)(630)}),Object(j.a)({fontSize:Object(s.a)(17),color:"#424242",fontFamily:"Roboto",fontWeight:500,marginBottom:Object(s.a)(16)}),Object(j.a)({display:"flex",flexDirection:"row",alignItems:"center"}),Object(j.a)({height:Object(s.a)(42),borderRadius:Object(s.a)(4),border:"".concat(Object(s.a)(1)," solid #ebebeb"),paddingLeft:Object(s.a)(16),width:"100%",marginRight:Object(s.a)(24),fontSize:Object(s.a)(17),"::placeholder":{color:"#ebebeb"}}),Object(j.a)({height:Object(s.a)(38),width:Object(s.a)(42),borderRadius:"100%",backgroundColor:"#484ED9",borderColor:"transparent",color:"#ffffff",fontSize:Object(s.a)(24),fontWeight:600}),Object(j.a)({listStyleType:"none",padding:Object(s.a)(0),margin:Object(s.a)(0)}),Object(j.a)({fontSize:Object(s.a)(17),color:"#424242",fontWeight:500,margin:"0 auto ".concat(Object(s.a)(8)),display:"flex",justifyContent:"space-between",backgroundColor:"#FFFFFF",borderRadius:Object(s.a)(4),height:"100%",padding:Object(s.a)(24),width:Object(s.a)(630)}),Object(j.a)({fontSize:Object(s.a)(17),color:"#424242",fontWeight:300,textDecoration:"none",":hover":{color:"#484ED9",fontWeight:500}}),Object(j.a)({fontSize:Object(s.a)(15),color:"#ebebeb",fontWeight:300,textDecoration:"none",backgroundColor:"transparent",border:"none",":hover":{color:"red"}}),c(11)),h=c(26),p=c(15),m=Object(p.b)({name:"allLists",initialState:{lists:[]},reducers:{addList:function(t,e){t.lists=[].concat(Object(h.a)(t.lists),[e.payload])},removeList:function(t,e){t.lists=t.lists.filter((function(t){return t.id!==e.payload}))},addParticipant:function(t,e){var c=t.lists.findIndex((function(t){return t.id===e.payload.id}));t.lists[c]=e.payload,t.lists=Object(h.a)(t.lists)}}}),F=m.actions,v=F.addList,C=F.removeList,y=F.addParticipant,x=m.reducer,S=Object(g.b)({listsReducers:x}),k=Object(l.b)(),R=S,w=Object(j.a)({listStyleType:"none",padding:Object(s.a)(0),margin:Object(s.a)(0)}),z=Object(j.a)({fontSize:Object(s.a)(17),color:"#424242",fontWeight:500,margin:"0 auto ".concat(Object(s.a)(8)),display:"flex",justifyContent:"space-between",backgroundColor:"#FFFFFF",borderRadius:Object(s.a)(4),height:"100%",padding:Object(s.a)(24),width:Object(s.a)(630)}),W=Object(j.a)({backgroundColor:"transparent",border:"none",fontSize:Object(s.a)(17),color:"#424242",fontWeight:300,textDecoration:"none",":hover":{color:"#484ED9",fontWeight:500}}),D=Object(j.a)({fontSize:Object(s.a)(15),color:"#ebebeb",fontWeight:300,textDecoration:"none",backgroundColor:"transparent",border:"none",":hover":{color:"red"}}),L=function(t){var e=Object(i.f)(),c=(Object(l.c)(),t.name),a=t.amount,n=t.participants,b=t.id;return Object(j.b)(o.Fragment,null,Object(j.b)("button",{css:W,type:"button",onClick:function(){e.push("/".concat(c,"/").concat(b))}},c),Object(j.b)("div",null,a),Object(j.b)("div",null,n.length))},B=function(t){return t.listsReducers.lists};console.log("selectLists");var E=function(){var t=Object(l.c)(),e=k(B);console.log("lists",e);return Object(j.b)(o.Fragment,null,Object(j.b)("ul",{css:w},e.map((function(e){return Object(j.b)("li",{css:z,key:e.name},Object(j.b)(L,e),Object(j.b)("button",{css:D,onClick:function(c){return o=e.id,void t(C(o));var o},type:"button"},"Supprimer"))}))))},I=c(21),P=Object(j.a)({backgroundColor:"#FFFFFF",borderRadius:Object(s.a)(4),margin:"".concat(Object(s.a)(20)," auto"),height:"100%",padding:Object(s.a)(24),width:Object(s.a)(630)}),T=Object(j.a)({fontSize:Object(s.a)(17),color:"#424242",fontFamily:"Roboto",fontWeight:500,marginBottom:Object(s.a)(16)}),J=Object(j.a)({display:"flex",flexDirection:"row",alignItems:"center"}),M=Object(j.a)({height:Object(s.a)(42),borderRadius:Object(s.a)(4),border:"".concat(Object(s.a)(1)," solid #ebebeb"),paddingLeft:Object(s.a)(16),width:"100%",marginRight:Object(s.a)(24),fontSize:Object(s.a)(17),"::placeholder":{color:"#ebebeb"}}),_=Object(j.a)({height:Object(s.a)(38),width:Object(s.a)(42),borderRadius:"100%",backgroundColor:"#484ED9",borderColor:"transparent",color:"#ffffff",fontSize:Object(s.a)(24),fontWeight:600}),G=function(){var t=Object(l.c)(),e=k(B).length,c=Object(o.useState)(""),a=Object(I.a)(c,2),n=a[0],b=a[1];console.log("length",e);return Object(j.b)(o.Fragment,null,Object(j.b)("div",{css:P},Object(j.b)("div",{css:T},"Create a bill resume to split "),Object(j.b)("div",{css:J},Object(j.b)("input",{"aria-label":"add-list",value:n,onChange:function(t){return b(t.target.value)},css:M,placeholder:"List name"}),Object(j.b)("button",{css:_,onClick:function(){b(""),t(v({id:Math.floor(100*Math.random()),name:n,amount:0,participants:[],isSelected:!1}))},type:"button"},"+"))))},N=function(){return Object(j.b)(o.Fragment,null,Object(j.b)("section",{css:O},Object(j.b)("div",{css:u},"Split Calculator"),Object(j.b)("div",{css:f},"Good accounts make good friends")),Object(j.b)("section",{css:d},Object(j.b)(G,null),Object(j.b)(E,null)))},q=c(27),A=Object(j.a)({padding:Object(s.a)(16),backgroundColor:"#FFF",borderRadius:Object(s.a)(4)}),H=Object(j.a)({height:Object(s.a)(42),borderRadius:Object(s.a)(4),border:"".concat(Object(s.a)(1)," solid #ebebeb"),paddingLeft:Object(s.a)(16),width:"100%",marginRight:Object(s.a)(24),fontSize:Object(s.a)(17),"::placeholder":{color:"#ebebeb"}}),K=Object(j.a)({fontSize:Object(s.a)(88),color:"#424242",fontWeight:800,marginBottom:Object(s.a)(16),fontFamily:"Lexend"}),Q=Object(j.a)({fontSize:Object(s.a)(15),color:"#424242",fontWeight:300,textDecoration:"none",backgroundColor:"transparent",border:"none",":hover":{color:"#484ED9"}}),U=Object(j.a)({height:Object(s.a)(38),width:Object(s.a)(42),borderRadius:"100%",backgroundColor:"#484ED9",borderColor:"transparent",color:"#ffffff",fontSize:Object(s.a)(24),fontWeight:600}),V=function(){var t,e=Object(i.f)(),c=Object(l.c)(),a=Object(i.g)().id,n=Object(o.useState)(""),b=Object(I.a)(n,2),r=b[0],s=b[1],O=(t=Number(a),console.log("useCurrent func"),k(B).find((function(e){return e.id===t})));if(console.log("currentList",O),!O)return null;var d=O.participants,u=O.name;console.log("participant from current",d);var f=d.join(", ");return Object(j.b)(o.Fragment,null,Object(j.b)("div",{css:K},u),Object(j.b)("button",{css:Q,type:"button",onClick:function(t){return e.goBack()}},"Back"),Object(j.b)("section",null,Object(j.b)("div",{css:A},Object(j.b)("input",{"aria-label":"add-participants",value:r,onChange:function(t){return s(t.target.value)},css:H,placeholder:"Participant"}),Object(j.b)("button",{css:U,onClick:function(){s(""),c(y(Object(q.a)(Object(q.a)({},O),{},{participants:d.concat([r])})))},type:"button"},"+"))),f)},X=c(9),Y=function(t){var e=t.store;return Object(X.jsx)(l.a,{store:e,children:Object(X.jsx)(r.a,{children:Object(X.jsx)(a.a.Fragment,{children:Object(X.jsxs)(i.c,{children:[Object(X.jsx)(i.a,{exact:!0,path:"/",children:Object(X.jsx)(N,{})}),Object(X.jsx)(i.a,{path:"/:name/:id",children:Object(X.jsx)(V,{})})]})})})})};var Z=Object(p.a)({reducer:R,middleware:Object(p.c)()});b.a.render(Object(X.jsx)(Y,{store:Z}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cee8fe8a.chunk.js.map