!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(t){return e[t]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function i(){}var r=n(3);i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var d=n(0),g=n.n(d),y=(n(1),function(e){return g.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},g.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},g.a.createElement("g",{fill:"#000",fillRule:"evenodd"},g.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),g.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),g.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),g.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),g.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}),b=function(e){return g.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)},h=function(e,t,n,o,i){var r=e.getElementsByTagName(t)[0],a=r,c=r;(c=e.createElement(t)).id=n,c.src=o,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onload=i},m=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?a(e):t}(this,r(e).call(this,t))).signIn=n.signIn.bind(a(n)),n.enableButton=n.enableButton.bind(a(n)),n.onMountCallback=n.onMountCallback.bind(a(n)),n.state={disabled:!0,hovered:!1,active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(e,d.Component),t=e,(n=[{key:"componentDidMount",value:function(){h(document,"script","google-login",this.props.jsSrc,this.onMountCallback)}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){};var e=document.getElementById("google-login");e.parentNode.removeChild(e)}},{key:"onMountCallback",value:function(){var e=this;console.log("ON MOUNT CALLBACK");var t=this.props,n=t.autoLoad,o=t.isSignedIn,i=t.onFailure,r={client_id:t.clientId,cookie_policy:t.cookiePolicy,login_hint:t.loginHint,hosted_domain:t.hostedDomain,fetch_basic_profile:t.fetchBasicProfile,discoveryDocs:t.discoveryDocs,ux_mode:t.uxMode,redirect_uri:t.redirectUri,scope:t.scope,access_type:t.accessType};"code"===t.responseType&&(r.access_type="offline"),console.log("@@@@: GoogleLogin -> onMountCallback -> window.gapi",window.gapi),console.log("@@@@: GoogleLogin -> onMountCallback -> typeof(window.gapi.load) !== function","function"!=typeof window.gapi.load),window.gapi&&"function"==typeof window.gapi.load?window.gapi.load("auth2",function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(r).then(function(t){o&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())},function(e){return i(e)}),n&&e.signIn()}):setTimeout(function(){this.onMountCallback()},500)}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,i=o.onSuccess,r=o.onFailure,a=o.responseType,c={prompt:o.prompt};(0,o.onRequest)(),console.log("@@@@: GoogleLogin -> signIn -> responseType",a),"code"===a?n.grantOfflineAccess(c).then(function(e){return i(e)},function(e){return r(e)}):(n.signIn(c).then(function(e){return t.handleSigninSuccess(e)},function(e){return r(e)}),console.log("@@@@: GoogleLogin -> signIn -> options",c)),console.log("done with signIn")}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},console.log("calling onSuccess"),this.props.onSuccess(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,i=t.className,r=t.disabledStyle,a=t.buttonText,c=t.children,s=t.render,u=t.theme,l=t.icon,f=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signIn,disabled:f});var p={backgroundColor:"dark"===u?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},d={cursor:"pointer",backgroundColor:"dark"===u?"#3367D6":"#eee",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",opacity:1},h=f?Object.assign({},p,r):e.state.active?Object.assign({},p,d):e.state.hovered?Object.assign({},p,{cursor:"pointer",opacity:.9}):p;return g.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signIn,style:h,type:o,disabled:f,className:i},[l&&g.a.createElement(y,{key:1,active:this.state.active}),g.a.createElement(b,{icon:l,key:2},c||a)])}}])&&i(t.prototype,n),e;var t,n}();m.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){},jsSrc:"https://apis.google.com/js/api.js"};var v=m,S=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?f(e):t}(this,l(e).call(this,t))).signOut=n.signOut.bind(f(n)),n.enableButton=n.enableButton.bind(f(n)),n.state={disabled:!0,hovered:!1,active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(e,d.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.onFailure,o=t.isSignedIn,i=t.clientId,r=t.cookiePolicy,a=t.loginHint,c=t.hostedDomain,s=t.fetchBasicProfile,u=t.discoveryDocs,l=t.uxMode,f=t.redirectUri,p=t.scope,d=t.accessType;h(document,"script","google-login",t.jsSrc,function(){var t={client_id:i,cookie_policy:r,login_hint:a,hosted_domain:c,fetch_basic_profile:s,discoveryDocs:u,ux_mode:l,redirect_uri:f,scope:p,access_type:d};window.gapi.load("auth2",function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){o&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())},function(e){return n(e)})})})}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){};try{var e=document.getElementById("google-login");e.parentNode.removeChild(e)}catch(e){}}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signOut",value:function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(e.disconnect().then(this.props.onLogoutSuccess))}}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,i=t.className,r=t.disabledStyle,a=t.buttonText,c=t.children,s=t.render,u=t.theme,l=t.icon,f=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signOut,disabled:f});var p={backgroundColor:"dark"===u?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},d={cursor:"pointer",backgroundColor:"dark"===u?"#3367D6":"#eee",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",opacity:1},h=f?Object.assign({},p,r):e.state.active?Object.assign({},p,d):e.state.hovered?Object.assign({},p,{cursor:"pointer",opacity:.9}):p;return g.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signOut,style:h,type:o,disabled:f,className:i},[l&&g.a.createElement(y,{key:1,active:this.state.active}),g.a.createElement(b,{icon:l,key:2},c||a)])}}])&&u(t.prototype,n),e;var t,n}();S.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var w=S;n.d(t,"default",function(){return v}),n.d(t,"GoogleLogin",function(){return v}),n.d(t,"GoogleLogout",function(){return w})}])});