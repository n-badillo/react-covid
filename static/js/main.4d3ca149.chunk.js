(this["webpackJsonpreact-covid"]=this["webpackJsonpreact-covid"]||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),l=a.n(c),s=a(7),i=a.n(s),o=a(14),m=a(28),u=a(29),d=a(32),h=a(30),v=a(34),p=a.n(v),E=function(e){var t=e.data,r=t.Confirmed,c=(t.Active,t.Deaths),l=t.Recovered;return console.log(l),l?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-success text-white"},n.a.createElement("img",{src:a(35),alt:"",style:{height:"200px"}}),n.a.createElement("div",{className:"card-img-overlay"},n.a.createElement("br",null),n.a.createElement("center",null,n.a.createElement("h3",null,"Total Recovered"),n.a.createElement("h3",null,n.a.createElement(p.a,{start:0,end:l,duration:1.5,separator:","})))))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-dark text-white"},n.a.createElement("img",{src:a(35),alt:"",style:{height:"200px"}}),n.a.createElement("div",{className:"card-img-overlay"},n.a.createElement("br",null),n.a.createElement("center",null,n.a.createElement("h3",null,"Total Confirmed Cases"),n.a.createElement("h3",null,n.a.createElement(p.a,{start:0,end:r,duration:2,separator:","})))))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card bg-danger text-white"},n.a.createElement("img",{src:a(35),alt:"",style:{height:"200px"}}),n.a.createElement("div",{className:"card-img-overlay"},n.a.createElement("br",null),n.a.createElement("center",null,n.a.createElement("h3",null,"Total Deaths"),n.a.createElement("h3",null,n.a.createElement(p.a,{start:0,end:c,duration:2.5,separator:","})))))))):""},f=(a(77),a(46)),g=a.n(f),b="https://api.covid19api.com/total/country/united-states",y=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,r,n,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(b);case 3:return t=e.sent,console.log(t.data),a=t.data,r=a[a.length-1].Confirmed,n=a[a.length-1].Active,c=a[a.length-1].Deaths,l=a[a.length-1].Recovered,e.abrupt("return",{Confirmed:r,Active:n,Deaths:c,Recovered:l});case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),N=(a(74),a(195),a(47)),k=a(21),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(N.a,{bg:"primary",variant:"dark"},n.a.createElement(N.a.Brand,{href:"#home"},"Navbar"),n.a.createElement(k.a,{className:"mr-auto"},n.a.createElement(k.a.Link,{href:"#home"},"Home"),n.a.createElement(k.a.Link,{href:"#features"},"Features"),n.a.createElement(k.a.Link,{href:"#pricing"},"Pricing")))}}]),a}(r.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",null,n.a.createElement(x,null),n.a.createElement(E,{data:e}))}}]),a}(n.a.Component);l.a.render(n.a.createElement(w,null),document.getElementById("root"))},35:function(e,t,a){e.exports=a.p+"static/media/fadingheart.acf96eba.png"},78:function(e,t,a){e.exports=a(198)}},[[78,1,2]]]);
//# sourceMappingURL=main.4d3ca149.chunk.js.map