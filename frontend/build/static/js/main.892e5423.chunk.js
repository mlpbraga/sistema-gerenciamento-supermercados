(this["webpackJsonpprojeto-bd-front"]=this["webpackJsonpprojeto-bd-front"]||[]).push([[0],{34:function(e,a,t){e.exports=t(71)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},60:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),s=t.n(o),i=(t(39),t(25)),c=t(5),l=t(6),u="@airbnb-Token",m=function(e){localStorage.setItem(u,e)},d=(t(40),function(){return r.a.createElement("header",{id:"main-header"},"ERP para Redes de Supermercados")}),p=(t(41),function(){return r.a.createElement("footer",{id:"main-footer"},r.a.createElement("div",{className:"footer-text"},r.a.createElement("p",null,"Sistema de Planejamento de Recursos Empresariais para Redes de Supermercados criado na disciplina de Banco de Dados de 2019/02"),r.a.createElement("p",null,"Desenvolvedores: Caio Balbi (coob@icomp.ufam.edu.br), Luiz Alexndre (lass@icomp.ufam.edu.br), Maria Lu\xedsa (mlpb@icomp.ufam.edu.br)")))}),f=t(8),h=t.n(f),E=t(10),v=t(26),b=t(27),_=t(32),g=t(28),w=t(33),S=t(29),j={apiEndpoint:"http://tcc-api-elb-1124838076.us-east-2.elb.amazonaws.com",sexismConcept:'Aqui, consideramos sexismo o discurso que se dirige a pessoas do g\xeanero feminino com a inten\xe7\xe3o de ofender, diminuir, oprimir ou agredir. S\xe3o exemplos de coment\xe1rios sexistas as seguintes frases: "Deveria sair da internet e ir pra cozinha.", "Ela s\xf3 ganhou o pr\xeamio porque \xe9 mulher.", "Essa vagabunda n\xe3o devia falar nada."'}.apiEndpoint,x=t.n(S).a.create({baseURL:j});x.interceptors.request.use(function(){var e=Object(E.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem(u))&&(a.headers.Authorization="Bearer ".concat(t)),e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());var N=x,k=(t(60),function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(_.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:""},t.handleSignIn=function(){var e=Object(E.a)(h.a.mark((function e(a){var n,r,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=t.state,r=n.email,o=n.password,r&&o){e.next=6;break}t.setState({error:"Preencha e-mail e senha para continuar!"}),e.next=17;break;case 6:return e.prev=6,e.next=9,N.post("/auth",{email:r,password:o});case 9:s=e.sent,m(s.data.token),t.props.history.push("/home"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),t.setState({error:"Houve um problema com o login, verifique suas credenciais. T.T"});case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(a){return e.apply(this,arguments)}}(),t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"siginin-container"},r.a.createElement("form",{onSubmit:this.handleSignIn},this.state.error&&r.a.createElement("p",{className:"error-box"},this.state.error),r.a.createElement("div",{className:"signin-input"},r.a.createElement("label",null,"Email  "),r.a.createElement("input",{type:"email",placeholder:"Endere\xe7o de e-mail",onChange:function(a){return e.setState({email:a.target.value})}})),r.a.createElement("div",{className:"signin-input"},r.a.createElement("label",null,"Senha  "),r.a.createElement("input",{type:"password",placeholder:"Senha",onChange:function(a){return e.setState({password:a.target.value})}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Entrar"))))}}]),a}(n.Component)),O=Object(c.f)(k),y=(t(66),function(){return r.a.createElement("div",{className:"loading"})}),q=(t(67),Object(c.f)((function(){return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"about"},r.a.createElement("p",null,"Esse sistema foi desenvolvido para que redes de supermercados possam gerenciar a compra e a venda de seus produtos, entrada e sa\xedda de seus funcion\xe1rios gerenciar sua rede de supermercados com tranquilidade."),r.a.createElement("p",null,"Para entrar no sistema, cadastre insira seu login e senha no espa\xe7o abaixo, caso ainda n\xe3o tenha um usu\xe1rio cadastrado, entre em contato com o seu administrador.")),r.a.createElement("div",{className:"options"},r.a.createElement(O,null)))}))),I=(t(68),Object(c.f)((function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement(y,null))}))),A=(t(69),Object(c.f)((function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"about"},r.a.createElement("p",null,"Esse sistema foi desenvolvido para que redes de supermercados possam gerenciar a compra e a venda de seus produtos, entrada e sa\xedda de seus funcion\xe1rios gerenciar sua rede de supermercados com tranquilidade."),r.a.createElement("p",null,"Para entrar no sistema, cadastre insira seu login e senha no espa\xe7o abaixo, caso ainda n\xe3o tenha um usu\xe1rio cadastrado, entre em contato com o seu administrador.")),r.a.createElement("div",{className:"options"},r.a.createElement(I,null)))}))),B=(t(70),function(e){var a=e.component,t=Object(i.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},t,{render:function(e){return console.log("_________________________________________"),console.log(localStorage.getItem(u)),null!==localStorage.getItem(u)?r.a.createElement(a,e):r.a.createElement(c.a,{to:{pathname:"/home",state:{from:e.location}}})}}))});var C=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(B,{path:"/home",component:A}),r.a.createElement(c.b,{path:"/",component:q}),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.892e5423.chunk.js.map