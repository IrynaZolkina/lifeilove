(this.webpackJsonptest03new=this.webpackJsonptest03new||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/eeernbg.74379ac2.png"},27:function(e,t,a){e.exports=a.p+"static/media/cart.ac2107c1.png"},29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(25),c=a.n(o),r=(a(34),a(13)),i=a(14),s=a(16),m=a(15),A=a(7),u=a(1),d=a(26),g=a.n(d),p=a(27),E=a.n(p),f=(a(35),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).handleScroll=function(){e.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e.state.scrollPos})},e.state={show:!0,scrollPos:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:this.state.show?"active":"hidden"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(A.b,{exact:!0,to:"/"}," ",l.a.createElement("img",{src:g.a,className:"App-logo1",alt:"logo"})," "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(A.b,{exact:!0,to:"/"}," ","HOME"," ")),l.a.createElement("li",null,l.a.createElement(A.b,{to:"/contact"}," PRODUCTS ")),l.a.createElement("li",null,l.a.createElement(A.b,{to:"/contact"}," HOW TO USE ")),l.a.createElement("li",null,l.a.createElement(A.b,{to:"/contact"}," ABOUT ")),l.a.createElement("li",null,l.a.createElement(A.b,{to:"/contact"}," SHIPPING ")),l.a.createElement("li",null,l.a.createElement(A.b,{to:"/contact"}," BLOG ")),l.a.createElement("li",null,l.a.createElement(A.b,{to:"/contact"}," CONTACTS "))),l.a.createElement("img",{src:E.a,className:"cart-navbar",alt:"logo"}))))}}]),a}(n.Component)),h=Object(u.f)(f),v=a(11),b=a.n(v);a(40),a(47);b.a.initializeApp({apiKey:"AIzaSyBP0tDtDJhPUqG-NRZgMNZnyQagsmFclkc",authDomain:"lifeilove-63924.firebaseapp.com",databaseURL:"https://lifeilove-63924.firebaseio.com",projectId:"lifeilove-63924",storageBucket:"lifeilove-63924.appspot.com",messagingSenderId:"286608892743",appId:"1:286608892743:web:ec73d0545e74fd5ca3e262"});b.a.firestore(),b.a.storage();var w=b.a,S=(a(44),function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"background-image-home",style:{backgroundImage:'url( "https://firebasestorage.googleapis.com/v0/b/lifeilove-63924.appspot.com/o/images%2FIMG_2325.jpg?alt=media&token=2aba4a08-3342-4953-8384-3997f49feb12")'}}))}),k=(a(45),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({files:e})},n.handleSave=function(){console.log("************");var e=n.state.files[0],t=w.storage().ref("".concat("images","/").concat(e.name)).put(e);t.on(w.storage.TaskEvent.STATE_CHANGED,(function(){t.snapshot.downloadURL}))},n.showImage=function(){var e=w.storage().ref();e.child("images/"+n.state.files[0].name);e.child("images/"+n.state.files[0].name).getDownloadURL().then((function(e){console.log(e),document.getElementById("new-img").src=e}))},n.state={files:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,"AAAAAAAAAAAAAA",l.a.createElement("div",null,"AAAAAAAAAAAAAA"),l.a.createElement("div",null,"AAAAAAAAAAAAAA"),l.a.createElement("div",null,"AAAAAAAAAAAAAA"),l.a.createElement("div",null,"AAAAAAAAAAAAAA"),l.a.createElement("div",null,"AAAAAAAAAAAAAA"),l.a.createElement("input",{type:"file",onChange:function(t){e.handleChange(t.target.files)}}),l.a.createElement("button",{onClick:this.handleSave},"Save"),l.a.createElement("button",{onClick:this.showImage},"Show Image"),l.a.createElement("img",{id:"new-img"}))}}]),a}(n.Component)),O=function(){return l.a.createElement("div",null)};var y=function(){return l.a.createElement(A.a,null,l.a.createElement("div",{className:"app-wrapper"},l.a.createElement(h,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:S}),l.a.createElement(u.a,{path:"/about",component:k}),l.a.createElement(u.a,{path:"/contact",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.61530e41.chunk.js.map