(this["webpackJsonpstreaming-service"]=this["webpackJsonpstreaming-service"]||[]).push([[0],{132:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBQYGGRbH00NjAAAEMUlEQVRYw+3Xz4uVVRgH8M/73necGUwUf4ARJJZTOahjoknZLCSSWmQ7w35slKIgyo2Bf0CI0sKk2lQQarmISnOTLewnYuQImZCmC5HK0kQUcWbufd/3tLjvXOfOvXfGa7MJ+p7Nfc8953me7/PjPOfwP8YiEtd/Tp7YCJkwudaWJJI6M2fp+bcMmlk73QJLLbfYMuf0ykXVf29eQTOxM91jiaWWWWQqCCLD7nNWLIekDbFZTWyPPiv06TGjmPvbV+ZZLBV0Wujs+KY38+0cD3vZewYMCsXIBEc94m7TMNVbgopgSyvTI4lSndjZVnnJ+465WhN73ud2uiQoC8p2mGokPfsMCPai1Cg+LkRH5lptk92OG66JDTKpLabrFKHXYUEuF5z3hNhCT9nsa8FJpcb4xrjDJh/6ybWa0N8csNkuQa4iuGBDYUSEFwzKDMqVXajtueobM8YqiNHvsiAXCk8OWFDjtd7Fmr2H3KvHelt94lptxzVHvGOjB8xs5ns6nRQMq8jkxbZjVtasneGAoCItglsdV/zgXS96yKxR8pIbx0WVRklmle9ldaEJIsE2eyyzUo8F7hJErrrgVwMGHHeulrwtE3JEwRoH5fUHlRxxbTaI/OlHJ5xy3iCm6NYlRpDKiuqNdTns3EgtK1Lq0TrqIyNXrvtOpQ1rxo6K4LmRSkjGcKlHQPCBKzoNmmqjkgxnfSqRuGSFx1TkOh1yVLfIZevcO9ZxJaxpYFDNmedrRbOnsO53vcXcfGeKctsnKeaeNix4pr6WmymoZtL64t8uBwvxZ8wvNt/voiAV7K5JebVQ+GyjixrdE9npO8tlhm23RkWHsi1Y4bq5dpmtosNx2yzS5Yq13mieVa1cNDjqd1YEcLhhbmhU4DO5dHwGefUcB1OkBZtQnO+RREWEXCSSo0Mo1mUScX3TbFQQ19VCTJMVrZBMNJWLDTiiexSLG4iKxG2F2KAl+sdjkEl85nVJQbk9JFIb9dcb10iq1JyqzHQll0yhKb+qgoY20+jPHGnDyAV3OmqtsgqyJmvSZqpbB6wRFfPst888qbhZS2wemHYQZJ50wmti2ZjuPSkKYiWpbtsc0z9RJ7gVBZCIpHp9a7fIhFe39hUEuVjslP1y41eGiW92Y5HLJYZstd3Q6J41OQoyscQXXnFaqWg+E6AdFwUlf1jncWck8naDPPHDIfKmXh8riaQt1jeEvLEnR+hoasppm5R0Scc+k2qy0maTIxgs+CzBcIvThmwcxwQsLX5fr7c7Esx20ixBZK/DbWcXpPpsEAvKFjkz8gSpooQdgqEmd6N2RmZI8JFadG94PrjNlx6US+W3+PqMJGK/WO2vxhqJMM3brtfuy7cyhu02Z5ThdZZWm/jt+nTf0ms3Uvazc2Kh1f7oZk/5cVCa6KVffVeGtqNQveyHlgn+n8U//gIg3u/rQ9gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDUtMDZUMDY6MjU6MjItMDc6MDDhE+IEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA1LTA2VDA2OjI1OjIyLTA3OjAwkE5auAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="},159:function(e,t,a){e.exports=a(347)},164:function(e,t,a){},165:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),i=a.n(l),s=(a(164),a(136)),o=a.n(s),c=(a(165),a(26)),m=a.n(c),p=a(134),d=a.n(p),u=a(135),h=a.n(u),g=a(24),y=a.n(g),E=a(14),v=a.n(E),A=a(354),I=a(16);const f=e=>({type:"SHOW_CART_DLG",payload:e}),C=e=>({type:"SET_CHECKEDOUT_ITEMS",payload:e});var b=a(132),O=a.n(b);var S={_isAuthenticated:!1,authenticate(e,t,a){this._isAuthenticated=!0,setTimeout(()=>a({name:e}),100)},signout(e){this._isAuthenticated=!1,setTimeout(e,100)}};const w=[{id:1,name:"Annual Premium Plan",category:"Annual Plans",price:35.99,description:"",popular:!0},{id:2,name:"Annual Basic Plan",category:"Annual Plans",price:26.99,description:"",popular:!0},{id:3,name:"Rent",category:"One-time",price:1.99,popular:!1},{id:4,name:"Own",category:"One-time",price:9.99,description:"",popular:!1},{id:5,name:"Monthly Premium Plan",category:"Monthly Plans",price:39.99,description:"",popular:!1},{id:6,name:"Monthly Basic Plan",category:"Monthly Plans",price:29.99,description:"",popular:!1}],x=[{name:"Annual Plans",icon:"group"},{name:"Monthly Plans",icon:"watch"},{name:"One-time",icon:"menu_book"}],T=[{name:"Home page",url:"/",icon:"home",id:0},{name:"Payment categories",id:1,children:x.map((e,t)=>({name:e.name,id:t,url:"/?category="+e.name,icon:e.icon}))}];var k=a(137),M=a.n(k),P=a(34),j=a.n(P),D=a(47),Q=a.n(D),L=a(62),R=a.n(L),U=a(63),N=a.n(U);const _=x.map(e=>r.a.createElement(j.a,{key:e.name,value:e.name},e.name));class V extends n.Component{constructor(...e){super(...e),this.state={searchTerm:"",anchorEl:null,categoryFilterValue:x[0].name}}render(){let e=this.state.anchorEl;return r.a.createElement(R.a,{position:"static",style:{backgroundColor:"#FAFAFB",padding:10}},r.a.createElement(N.a,null,r.a.createElement("div",{className:"left-part"},r.a.createElement(m.a,{onClick:()=>{this.props.dispatch({type:"TOGGLE_MENU",payload:null})}},r.a.createElement(d.a,{size:"medium"})),r.a.createElement("img",{src:O.a,alt:"Logo",style:{marginLeft:10}}),r.a.createElement(y.a,{label:"Search plans",value:this.state.searchTerm,onChange:e=>{this.setState({searchTerm:e.target.value})},style:{marginLeft:30,width:250,marginBottom:15}}),r.a.createElement(Q.a,{style:{maxWidth:200,marginLeft:20},value:this.state.categoryFilterValue,MenuProps:{style:{maxHeight:500}},onChange:e=>{this.setState({categoryFilterValue:e.target.value})}},_),r.a.createElement(v.a,{style:{marginLeft:20},variant:"outlined",color:"primary",onClick:()=>{this.props.history.push("/?category="+this.state.categoryFilterValue+"&term="+this.state.searchTerm)}}," ","Search")),r.a.createElement("div",{className:"right-part"},r.a.createElement(m.a,{"aria-label":"Cart",onClick:()=>{this.props.dispatch(f(!0))}},r.a.createElement(h.a,{badgeContent:this.props.nrOfItemsInCard,color:"primary"},r.a.createElement(o.a,null))),r.a.createElement(M.a,{anchorEl:e,open:Boolean(e),onClose:()=>{this.setState({anchorEl:null})}},r.a.createElement(j.a,{onClick:()=>{this.setState({anchorEl:null}),this.props.history.push("/order")}},"Checkout page"),r.a.createElement(j.a,{onClick:()=>{S.signout(()=>{this.props.dispatch({type:"LOGOUT"}),this.props.history.push("/")}),this.setState({anchorEl:null})}},"Logout")))))}}var F=Object(A.a)(Object(I.b)(e=>({nrOfItemsInCard:e.cartItems.length,loggedInUser:e.loggedInUser}))(V)),G=a(20),W=a(38),q=a.n(W),H=a(67),J=a(139),B=a.n(J),K=a(140),Y=a.n(K),Z=a(143),z=a.n(Z),X=a(142),$=a.n(X),ee=a(141),te=a.n(ee);class ae extends n.Component{render(){return r.a.createElement(B.a,{style:{width:200,height:150,margin:10,display:"inline-block"}},r.a.createElement(Y.a,{onClick:()=>{this.props.history.push("/details/"+this.props.item.id)}},r.a.createElement(te.a,{style:{height:10}}),r.a.createElement($.a,{style:{height:50}},r.a.createElement("div",{style:{marginLeft:5,fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},this.props.item.name),r.a.createElement("div",{style:{margin:5}},"Price: $",this.props.item.price,this.props.item.name.includes("Plan")?" / month ":"",this.props.item.name.includes("Annual")?"($".concat(12*this.props.item.price," / year)"):""),r.a.createElement("div",{style:{color:"#1a9349",fontWeight:"bold",margin:5}},this.props.item.popular&&"Popular"))),r.a.createElement(z.a,{style:{display:"flex",alignItems:"center",height:45}},r.a.createElement(v.a,{size:"small",style:{marginRight:60},href:"https://uchicago.co1.qualtrics.com/jfe/preview/SV_earR12pcrrsed8h?Q_SurveyVersionID=current&Q_CHL=preview"}," ","Purchase")))}}var ne=Object(A.a)(Object(I.b)()(ae)),re=a(69),le=a.n(re),ie=a(28),se=a.n(ie);var oe=new class{getItemUsingID(e){return new Promise((t,a)=>{setTimeout(()=>{let a=w.filter(t=>t.id===parseInt(e,10));t(0===a.length?null:a[0])},500)})}sortByPrice(e,t){if("lh"!==t&&"hl"!==t)return e;let a=[...e];return"lh"===t?a.sort((e,t)=>e.price-t.price):a.sort((e,t)=>t.price-e.price),a}searchItems({category:e="popular",term:t="",sortValue:a="lh",itemsPerPage:n=10,usePriceFilter:r="false",minPrice:l=0,maxPrice:i=1e3,page:s=1}){return r="true"===r&&!0,new Promise((o,c)=>{setTimeout(()=>{let c=w.filter(a=>(!r||!(a.price<l||a.price>i))&&("popular"===e?a.popular:("All categories"===e||e===a.category)&&!(t&&!a.name.toLowerCase().includes(t.toLowerCase())))),m=c.length;c=this.sortByPrice(c,a),c=c.slice((s-1)*n,s*n),o({data:c,totalLength:m})},500)})}},ce=a(145),me=a.n(ce),pe=a(146),de=a.n(pe),ue=a(144),he=a.n(ue),ge=a(147),ye=a.n(ge),Ee=a(46),ve=a.n(Ee);var Ae=Object(A.a)(e=>{let t=e.parsedQS,a=parseInt(t.itemsPerPage)||10,n=parseInt(t.page)||1,l=Math.ceil(e.totalItemsCount/a);return e.totalItemsCount?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(m.a,{size:"small",color:"primary",disabled:1===n,onClick:()=>{e.updateQueryString({page:1})},style:{marginRight:10}},r.a.createElement(he.a,null)),r.a.createElement(m.a,{size:"small",color:"primary",disabled:1===n,onClick:()=>{e.updateQueryString({page:n-1})},style:{marginRight:10}},r.a.createElement(me.a,null)),r.a.createElement(ve.a,{variant:"body1"},"Page ",n," of ",l),r.a.createElement(m.a,{size:"small",color:"primary",disabled:n>=l,onClick:()=>{e.updateQueryString({page:n+1})},style:{marginLeft:10,marginRight:10}},r.a.createElement(de.a,null)),r.a.createElement(m.a,{size:"small",color:"primary",disabled:n>=l,onClick:()=>{e.updateQueryString({page:l})},style:{marginRight:10}},r.a.createElement(ye.a,null))):null}),Ie=a(88),fe=a.n(Ie),Ce=a(68),be=a.n(Ce),Oe=a(148),Se=a.n(Oe);class we extends n.Component{constructor(...e){super(...e),this.state={lastOpenedStatus:!1}}static getDerivedStateFromProps(e,t){return!0===e.open&&!1===t.lastOpenedStatus?{min:e.min,max:e.max,lastOpenedStatus:!0}:{lastOpenedStatus:e.open}}render(){let e=this.state,t=e.min,a=e.max;return r.a.createElement("div",null,r.a.createElement(be.a,{open:this.props.open,onClose:()=>{this.props.onClose()}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(Se.a,null,"Enter price range"),r.a.createElement("div",{style:{display:"flex",padding:20}},r.a.createElement(y.a,{value:t,type:"number",style:{width:70},placeholder:"Min",label:"Min",onChange:e=>{let t=parseInt(e.target.value,10);Number.isNaN(t)||t<0||t>1e5||this.setState({min:t})}}),r.a.createElement(y.a,{value:a,type:"number",style:{width:70,marginLeft:20},placeholder:"Max",label:"Max",onChange:e=>{let t=parseInt(e.target.value,10);Number.isNaN(t)||t<0||t>1e5||this.setState({max:t})}})),r.a.createElement("div",{style:{display:"flex",padding:20}},r.a.createElement(v.a,{variant:"outlined",color:"primary",style:{width:50},onClick:()=>{this.props.onSave(t,a)}},"OK"),r.a.createElement(v.a,{color:"primary",variant:"outlined",style:{width:50,marginLeft:5},onClick:()=>{this.props.onClose()}},"Cancel")))))}}var xe=we,Te=a(149),ke=a.n(Te),Me=a(150),Pe=a.n(Me);class je extends n.Component{constructor(...e){super(...e),this.state={openPriceDialog:!1}}render(){let e=this.props,t=e.parsedQS,a=e.totalItemsCount,n=e.updateQueryString,l="true"===t.usePriceFilter,i=t.minPrice||0,s=t.maxPrice||1e3,o=t.sortValue||"lh",c=t.term,m=t.category,p=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{fontSize:12,color:"gray",marginTop:5}},a+" result"+(1===a?" ":"s ")+(c?"for ":"")),c&&r.a.createElement("span",{style:{fontWeight:"bold",fontSize:12,color:"gray",marginTop:5}},c)),d=r.a.createElement("div",{style:{fontSize:14,padding:14}},(e=>void 0===e||"Annual Plans"===e?"Annual plans allow for unlimited video streaming all year, at a 10% discount over monthly plans. The premium plan is ad-free, while the basic version contains ads.":"Monthly Plans"===e?"Monthly plans allow for unlimited video streaming on a monthly basis. The premium plan is ad-free, while the basic version contains ads.":"One-time"===e?"One-time payment methods allow you to purchase one video at a time. Owning a video will allow you to watch it whenever you want, whereas renting is for a 2 week period.":void 0)(m));return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:10,display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{flex:1,fontSize:24}},r.a.createElement("div",null,m||"Popular Plans"),p),r.a.createElement(ke.a,{control:r.a.createElement(Pe.a,{color:"primary",checked:l,onChange:e=>{n({usePriceFilter:e.target.checked,page:1})}}),label:"Filter by price"}),l&&r.a.createElement(fe.a,{title:"Click to change range",disableFocusListener:!0},r.a.createElement(v.a,{variant:"outlined",style:{marginRight:20},onClick:()=>{this.setState({openPriceDialog:!0})}},i+"$ - "+s+"$")),r.a.createElement(Q.a,{value:o,onChange:e=>{n({sortValue:e.target.value})}},r.a.createElement(j.a,{value:"lh"},"Sort by price: low to high"),r.a.createElement(j.a,{value:"hl"},"Sort by price: high to low"))),r.a.createElement(xe,{open:this.state.openPriceDialog,min:i,max:s,onSave:(e,t)=>{this.setState({openPriceDialog:!1}),n({minPrice:e,maxPrice:t,page:1})},onClose:()=>this.setState({openPriceDialog:!1})}),d)}}var De=Object(A.a)(je);class Qe extends n.Component{constructor(e){super(e),this.state={loading:!1,totalItemsCount:null,items:[]},this.updateQueryString=this.updateQueryString.bind(this)}fetchData(){var e=this;return Object(H.a)(q.a.mark((function t(){var a,n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),a=se.a.parse(e.props.location.search),t.next=4,oe.searchItems(a);case 4:n=t.sent,e.setState({items:n.data,loading:!1,totalItemsCount:n.totalLength});case 6:case"end":return t.stop()}}),t)})))()}componentDidMount(){this.fetchData()}updateQueryString(e){let t=se.a.parse(this.props.location.search),a=Object(G.a)({},t,{},e);this.props.history.push("/?"+se.a.stringify(a))}componentDidUpdate(e,t,a){((e,t)=>{if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let a in e)if(e[a]!==t[a])return!1;return!0})(se.a.parse(this.props.location.search),se.a.parse(e.location.search))||this.fetchData()}render(){let e=se.a.parse(this.props.location.search);return this.state.loading?r.a.createElement(le.a,{className:"circular"}):r.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},r.a.createElement(De,{parsedQS:e,updateQueryString:this.updateQueryString,totalItemsCount:this.state.totalItemsCount}),r.a.createElement("div",{style:{flex:1}},this.state.items.map(e=>r.a.createElement(ne,{key:e.id,item:e}))),r.a.createElement(Ae,{parsedQS:e,updateQueryString:this.updateQueryString,totalItemsCount:this.state.totalItemsCount}))}}var Le=Qe,Re=a(355),Ue=a(151),Ne=a(351),_e=a(152),Ve=a.n(_e),Fe=a(153),Ge=a.n(Fe),We=a(87),qe=a.n(We),He=a(61),Je=a.n(He),Be=a(92),Ke=a.n(Be),Ye=a(154),Ze=a.n(Ye);class ze extends n.Component{constructor(e){super(e),this.state={expandedMenuItems:{1:!0},dataForTheMenu:T},this.renderMenu=this.renderMenu.bind(this)}isMenuItemActive(e,t){if("/"===t.pathname&&t.search){let a=se.a.parse(t.search);return e.name===a.category}return e.url===t.pathname}renderMenu(e){return r.a.createElement(qe.a,null,e.map((e,t)=>e.children?r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(Je.a,{button:!0,dense:!0,onClick:()=>{this.setState(t=>({expandedMenuItems:Object(G.a)({},t.expandedMenuItems,{[e.id]:!t.expandedMenuItems[e.id]})}))}},r.a.createElement(Ke.a,{primary:e.name}),this.state.expandedMenuItems[e.id]?r.a.createElement(Ve.a,null):r.a.createElement(Ge.a,null)),r.a.createElement(Ze.a,{in:this.state.expandedMenuItems[e.id],timeout:"auto",unmountOnExit:!0},this.renderMenu(e.children))):r.a.createElement(Ne.a,{to:e.url,exact:!0,isActive:(t,a)=>this.isMenuItemActive(e,a),style:{textDecoration:"none",color:"rgb(32, 32, 34)"},key:e.id,activeStyle:{color:"#4282ad",fontWeight:"bold"}},r.a.createElement(Je.a,{dense:!0,button:!0},r.a.createElement(Ke.a,{disableTypography:!0,primary:r.a.createElement("div",{style:{color:"inherit"}},e.name)})))))}render(){return this.props.showMenu?r.a.createElement("div",{style:{backgroundColor:"#FAFAFB",minWidth:250}},this.renderMenu(this.state.dataForTheMenu)):null}}var Xe=Object(A.a)(Object(I.b)(e=>({showMenu:e.showMenu}))(ze)),$e=a(70),et=a.n($e),tt=a(72),at=a.n(tt),nt=a(18),rt=a.n(nt),lt=a(71),it=a.n(lt),st=a(33),ot=a.n(st),ct=a(91);var mt=e=>{let t=e.item;return r.a.createElement(ot.a,null,r.a.createElement(rt.a,null,r.a.createElement(ct.a,{to:"/details/".concat(t.id)},r.a.createElement("div",{onClick:()=>{e.dispatch(f(!1))}},t.name))),r.a.createElement(rt.a,null,t.price),r.a.createElement(rt.a,null,r.a.createElement(y.a,{type:"number",style:{width:40},value:t.quantity,onChange:a=>{let n=parseInt(a.target.value,10);n<0||e.dispatch({type:"UPDATE_CART_ITEM_QUANTITY",payload:{id:t.id,quantity:n}})}})),r.a.createElement(rt.a,null,r.a.createElement(v.a,{color:"secondary",onClick:()=>{e.dispatch({type:"DELETE_CART_ITEM",payload:t.id})}},"Delete")))},pt=a(155),dt=a.n(pt);class ut extends n.Component{render(){let e=this.props.items.reduce((e,t)=>e+t.price*t.quantity,0);return r.a.createElement("div",null,r.a.createElement(be.a,{open:this.props.open,onClose:()=>{this.props.dispatch(f(!1))}},r.a.createElement(R.a,{position:"static",style:{backgroundColor:"#3863aa"}},r.a.createElement(N.a,null,r.a.createElement(dt.a,{fontSize:"large",style:{color:"white",marginRight:20}}),"Shopping Cart")),r.a.createElement("div",{style:{maxHeight:400,padding:10,overflow:"auto"}},r.a.createElement(et.a,null,r.a.createElement(it.a,null,r.a.createElement(ot.a,null,r.a.createElement(rt.a,null,"Item name"),r.a.createElement(rt.a,null,"Price"),r.a.createElement(rt.a,null,"Quantity"),r.a.createElement(rt.a,null,"Action"))),r.a.createElement(at.a,null,this.props.items.map((e,t)=>r.a.createElement(mt,Object.assign({item:e,key:e.id},this.props)))))),r.a.createElement("div",{style:{display:"flex",padding:20,alignItems:"center"}},r.a.createElement("div",{style:{flex:1}}," ","Total Price: ",e," $"),r.a.createElement(v.a,{variant:"outlined",color:"primary",disabled:0===e,onClick:()=>{this.props.dispatch(f(!1)),this.props.dispatch(C(this.props.items)),this.props.history.push("/order")}},"Checkout"))))}}var ht=Object(A.a)(Object(I.b)(e=>({open:e.showCartDialog,items:e.cartItems}))(ut));class gt extends n.Component{constructor(e){super(e),this.isCompMounted=!1,this.state={relatedItems:[],quantity:1,item:null,itemLoading:!1}}fetchProductAndRelatedItems(e){var t=this;return Object(H.a)(q.a.mark((function a(){var n,r;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({itemLoading:!0}),a.next=3,oe.getItemUsingID(e);case 3:return n=a.sent,a.next=6,oe.searchItems({category:n.category});case 6:r=a.sent,t.isCompMounted&&t.setState({item:n,quantity:1,relatedItems:r.data.filter(e=>e.id!==n.id),itemLoading:!1});case 8:case"end":return a.stop()}}),a)})))()}componentDidUpdate(e,t,a){this.props.match.params.id!==e.match.params.id&&this.fetchProductAndRelatedItems(this.props.match.params.id)}componentDidMount(){this.isCompMounted=!0,this.fetchProductAndRelatedItems(this.props.match.params.id)}componentWillUnmount(){this.isCompMounted=!1}render(){return this.state.itemLoading?r.a.createElement(le.a,{className:"circular"}):this.state.item?r.a.createElement("div",{style:{margin:200}},r.a.createElement(v.a,{href:"https://uchicago.co1.qualtrics.com/jfe/preview/SV_earR12pcrrsed8h?Q_SurveyVersionID=current&Q_CHL=preview"},"Back to study")):null}}var yt=Object(I.b)()(gt);class Et extends n.Component{render(){let e=this.props.checkedOutItems.reduce((e,t)=>e+t.price*t.quantity,0);return r.a.createElement("div",{style:{padding:10}},r.a.createElement("div",{style:{fontSize:24,marginTop:10}},"Order summary"),r.a.createElement(et.a,null,r.a.createElement(it.a,null,r.a.createElement(ot.a,null,r.a.createElement(rt.a,null,"Item name"),r.a.createElement(rt.a,null,"Price"),r.a.createElement(rt.a,null,"Quantity"))),r.a.createElement(at.a,null,this.props.checkedOutItems.map((e,t)=>r.a.createElement(ot.a,{key:e.id},r.a.createElement(rt.a,null,e.name),r.a.createElement(rt.a,null,e.price),r.a.createElement(rt.a,null,e.quantity))))),r.a.createElement("div",{style:{color:"#504F5A",marginLeft:5,marginTop:50,fontSize:22}},"Total price: ",e," $"),r.a.createElement(v.a,{color:"primary",variant:"outlined",disabled:0===e,onClick:()=>{console.log("purchased")},style:{margin:5,marginTop:30}},"Purchase"),r.a.createElement(v.a,{color:"secondary",variant:"outlined",disabled:0===e,onClick:()=>{this.props.dispatch(C([]))},style:{margin:5,marginTop:30}},"Discard"))}}var vt=Object(A.a)(Object(I.b)(e=>({checkedOutItems:e.checkedOutItems}))(Et)),At=a(353),It=a(89),ft=a.n(It),Ct=a(156),bt=a.n(Ct);class Ot extends n.Component{constructor(...e){super(...e),this.state={userName:"",pass:"",redirectToReferrer:!1}}render(){const e=(this.props.location.state||{from:{pathname:"/"}}).from;return!0===this.state.redirectToReferrer?r.a.createElement(At.a,{to:e}):r.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{height:300,width:200,padding:30,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement(ft.a,{style:{marginBottom:10}},r.a.createElement(bt.a,null)),r.a.createElement("div",{style:{marginBottom:20,fontSize:24,textAlign:"center"}}," ","Log in"," "),r.a.createElement(y.a,{value:this.state.userName,placeholder:"User name",onChange:e=>{this.setState({userName:e.target.value})}}),r.a.createElement(y.a,{value:this.state.pass,type:"password",placeholder:"Password",onChange:e=>{this.setState({pass:e.target.value})}}),r.a.createElement(v.a,{style:{marginTop:20,width:200},variant:"outlined",color:"primary",onClick:()=>{S.authenticate(this.state.userName,this.state.pass,e=>{e?(this.props.dispatch((e=>({type:"SET_LOGGED_IN_USER",payload:e}))({name:e.name})),this.setState(()=>({redirectToReferrer:!0}))):this.setState({wrongCred:!0})})}},"Log in"),this.state.wrongCred&&r.a.createElement("div",{style:{color:"red"}},"Wrong username and/or password")))}}var St=Object(A.a)(Object(I.b)()(Ot)),wt=a(157);var xt=Object(I.b)(e=>({loggedInUser:e.loggedInUser}))(e=>{let t=e.component,a=Object(wt.a)(e,["component"]);return r.a.createElement(Ue.a,Object.assign({},a,{render:e=>a.loggedInUser?r.a.createElement(t,e):r.a.createElement(At.a,{to:{pathname:"/login",state:{from:e.location}}})}))});class Tt extends n.Component{render(){return r.a.createElement("div",{className:"app"},r.a.createElement(F,null),r.a.createElement("div",{className:"app-body"},r.a.createElement(Xe,null),r.a.createElement("div",{className:"content"},r.a.createElement(ht,null),r.a.createElement(Re.a,null,r.a.createElement(Ue.a,{path:"/",exact:!0,component:Le}),r.a.createElement(Ue.a,{path:"/details/:id",component:yt}),r.a.createElement(Ue.a,{path:"/login",component:St}),r.a.createElement(xt,{path:"/order",component:vt}),r.a.createElement(Ue.a,{component:()=>r.a.createElement("div",{style:{padding:20}},"Page not found")})))))}}var kt=Tt,Mt=a(352),Pt=a(60);const jt={cartItems:[],showCartDialog:!1,showMenu:!0,checkedOutItems:[],loggedInUser:null};var Dt=(e=jt,t)=>{switch(t.type){case"ADD_ITEM_IN_CART":{let a=e.cartItems.findIndex(e=>e.id===t.payload.id);if(-1!==a){let n=[...e.cartItems];return n[a]=Object(G.a)({},n[a],{quantity:e.cartItems[a].quantity+t.payload.quantity}),Object(G.a)({},e,{cartItems:n})}return Object(G.a)({},e,{cartItems:e.cartItems.concat(t.payload)})}case"SHOW_CART_DLG":return Object(G.a)({},e,{showCartDialog:t.payload});case"DELETE_CART_ITEM":return Object(G.a)({},e,{cartItems:e.cartItems.filter(e=>e.id!==t.payload)});case"TOGGLE_MENU":return Object(G.a)({},e,{showMenu:!e.showMenu});case"SET_LOGGED_IN_USER":return Object(G.a)({},e,{loggedInUser:t.payload});case"LOGOUT":return Object(G.a)({},e,{loggedInUser:null,checkedOutItems:[]});case"SET_CHECKEDOUT_ITEMS":return Object(G.a)({},e,{checkedOutItems:t.payload});case"UPDATE_CART_ITEM_QUANTITY":{let a=e.cartItems.findIndex(e=>e.id===t.payload.id);if(-1!==a){let n=[...e.cartItems];return n[a]=Object(G.a)({},n[a],{quantity:t.payload.quantity}),Object(G.a)({},e,{cartItems:n})}return e}default:return e}};var Qt=Object(Pt.b)(Dt);let Lt=r.a.createElement(I.a,{store:Qt},r.a.createElement(Mt.a,null,r.a.createElement(kt,null)));window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__=!0,i.a.render(Lt,document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.86a67401.chunk.js.map