/*! For license information please see main.71ade6d5.chunk.js.LICENSE.txt */
(this.webpackJsonpStraycatsCoinDashboard=this.webpackJsonpStraycatsCoinDashboard||[]).push([[0],{37:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(6),i=n(4),r=n.n(i),u=r.a.createContext(),s=function(e){var t=e.children,n=Object(i.useState)(!1),s=Object(a.a)(n,2),p=s[0],o=s[1];function d(){o(!p)}function y(){o(!1)}var l=Object(i.useMemo)((function(){return{isSidebarOpen:p,toggleSidebar:d,closeSidebar:y}}),[p]);return r.a.createElement(u.Provider,{value:l},t)}},46:function(e,t,n){"use strict";var a=n(4),i=n.n(a);t.a=function(){return i.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},54:function(e,t,n){e.exports=n(76)},63:function(e,t){},72:function(e,t){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(32),u=n.n(r),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var o=n(36),d=n(6),y=n(20),l=n(29),c=n(7),m=n(17);var f=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],u=Object(c.g)();return Object(a.useEffect)((function(){u.pathname.slice(1)?setTimeout((function(){return r("Navigated to ".concat(u.pathname.slice(1)," page."))}),500):r("")}),[u]),i.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},n)};function b(){b=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(k){s=function(e,t,n){return e[t]=n}}function p(e,t,n,a){var i=t&&t.prototype instanceof y?t:y,r=Object.create(i.prototype),u=new O(a||[]);return r._invoke=function(e,t,n){var a="suspendedStart";return function(i,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===i)throw r;return S()}for(n.method=i,n.arg=r;;){var u=n.delegate;if(u){var s=x(u,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var p=o(e,t,n);if("normal"===p.type){if(a=n.done?"completed":"suspendedYield",p.arg===d)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(a="completed",n.method="throw",n.arg=p.arg)}}}(e,n,u),r}function o(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=p;var d={};function y(){}function l(){}function c(){}var m={};s(m,i,(function(){return this}));var f=Object.getPrototypeOf,v=f&&f(f(j([])));v&&v!==t&&n.call(v,i)&&(m=v);var T=c.prototype=y.prototype=Object.create(m);function h(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;this._invoke=function(i,r){function u(){return new t((function(a,u){!function a(i,r,u,s){var p=o(e[i],e,r);if("throw"!==p.type){var d=p.arg,y=d.value;return y&&"object"==typeof y&&n.call(y,"__await")?t.resolve(y.__await).then((function(e){a("next",e,u,s)}),(function(e){a("throw",e,u,s)})):t.resolve(y).then((function(e){d.value=e,u(d)}),(function(e){return a("throw",e,u,s)}))}s(p.arg)}(i,r,a,u)}))}return a=a?a.then(u,u):u()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=o(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function g(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return l.prototype=c,s(T,"constructor",c),s(c,"constructor",l),l.displayName=s(c,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,s(e,u,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},h(w.prototype),s(w.prototype,r,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,i,r){void 0===r&&(r=Promise);var u=new w(p(t,n,a,i),r);return e.isGeneratorFunction(n)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},h(T),s(T,u,"Generator"),s(T,i,(function(){return this})),s(T,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return u.type="throw",u.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],u=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var s=n.call(r,"catchLoc"),p=n.call(r,"finallyLoc");if(s&&p){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var u=r?r.completion:{};return u.type=e,u.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var i=a.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var v,T=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,92))})),h=new m.a.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/"),w="0xae2c754971831deF39a9c9fc6c1ac811d704c7bF",x=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeMultipleAccountsFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!0,internalType:"bool",name:"earlyParticipant",type:"bool"},{indexed:!1,internalType:"uint256",name:"numberOfBuyers",type:"uint256"}],name:"FixedSaleBuy",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"participants",type:"address[]"}],name:"FixedSaleEarlyParticipantsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"newValue",type:"uint256"},{indexed:!0,internalType:"uint256",name:"oldValue",type:"uint256"}],name:"GasForProcessingUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newLiquidityWallet",type:"address"},{indexed:!0,internalType:"address",name:"oldLiquidityWallet",type:"address"}],name:"LiquidityWalletUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"iterations",type:"uint256"},{indexed:!1,internalType:"uint256",name:"claims",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lastProcessedIndex",type:"uint256"},{indexed:!0,internalType:"bool",name:"automatic",type:"bool"},{indexed:!1,internalType:"uint256",name:"gas",type:"uint256"},{indexed:!0,internalType:"address",name:"processor",type:"address"}],name:"ProcessedDividendTracker",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"SendDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"pair",type:"address"},{indexed:!0,internalType:"bool",name:"value",type:"bool"}],name:"SetAutomatedMarketMakerPair",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethReceived",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensIntoLiqudity",type:"uint256"}],name:"SwapAndLiquify",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldAddress",type:"address"}],name:"UpdateDividendTracker",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldAddress",type:"address"}],name:"UpdateUniswapV2Router",type:"event"},{inputs:[],name:"BNBRewardsFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"addFixedSaleEarlyParticipants",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"automatedMarketMakerPairs",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bounceFixedSaleWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"dividendTokenBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dividendTracker",outputs:[{internalType:"contract DividendTracker",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeMultipleAccountsFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"fixedSaleBuyers",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"fixedSaleEarlyParticipantBuysThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"fixedSaleEarlyParticipantDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"fixedSaleEarlyParticipants",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"fixedSaleStartTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"gasForProcessing",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountDividendsInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getAccountDividendsInfoAtIndex",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getClaimWait",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNumberOfDividendTokenHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalDividendsDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTradingIsEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromFees",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSellTransactionAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"numberOfFixedSaleBuys",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"gas",type:"uint256"}],name:"processDividendTracker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renouncloinwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"sellFeeIncreaseFactor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"pair",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"setAutomatedMarketMakerPair",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swapTokensAtAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tradingEnabledTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"claimWait",type:"uint256"}],name:"updateClaimWait",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"updateDividendTracker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newValue",type:"uint256"}],name:"updateGasForProcessing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newLiquidityWallet",type:"address"}],name:"updateLiquidityWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"updateUniswapV2Router",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdrawableDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],g=new m.a.Contract(w,x,h),M=new m.a.Contract("0xa623a9d546e382a50050c16d0ff1cb45a39e8b04",[{inputs:[{internalType:"uint256",name:"minBalance",type:"uint256"},{internalType:"address",name:"_rewardToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!0,internalType:"bool",name:"automatic",type:"bool"}],name:"Claim",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"newValue",type:"uint256"},{indexed:!0,internalType:"uint256",name:"oldValue",type:"uint256"}],name:"ClaimWaitUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"weiAmount",type:"uint256"}],name:"DividendWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"weiAmount",type:"uint256"}],name:"DividendsDistributed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"}],name:"ExcludeFromDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"accumulativeDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claimWait",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"distributeDividends",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"dividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"excludeFromDividends",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"excludedFromDividends",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getAccount",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"int256",name:"index",type:"int256"},{internalType:"int256",name:"iterationsUntilProcessed",type:"int256"},{internalType:"uint256",name:"withdrawableDividends",type:"uint256"},{internalType:"uint256",name:"totalDividends",type:"uint256"},{internalType:"uint256",name:"lastClaimTime",type:"uint256"},{internalType:"uint256",name:"nextClaimTime",type:"uint256"},{internalType:"uint256",name:"secondsUntilAutoClaimAvailable",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getAccountAtIndex",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNumberOfTokenHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastClaimTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minimumTokenBalanceForDividends",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"gas",type:"uint256"}],name:"process",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"account",type:"address"},{internalType:"bool",name:"automatic",type:"bool"}],name:"processAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address payable",name:"account",type:"address"},{internalType:"uint256",name:"newBalance",type:"uint256"}],name:"setBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"setLastProcessedIndex",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDividendsDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newClaimWait",type:"uint256"}],name:"updateClaimWait",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newMinimumBalance",type:"uint256"}],name:"updateMinimumTokenBalanceForDividends",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawDividend",outputs:[],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"withdrawableDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"withdrawnDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],h);function O(){return(O=Object(y.a)(b().mark((function e(){var t,n,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.prev=1,e.next=4,fetch("https://api.dexscreener.com/latest/dex/pairs/bsc/0x9901032f9b13a8d54378dcafca91f5c0ce17d429");case 4:return n=e.sent,e.next=7,n.json();case 7:void 0!==(a=e.sent).pair&&(t=a.pair.priceUsd),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function j(){return(j=Object(y.a)(b().mark((function e(){var t,n,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.prev=1,e.next=4,fetch("https://api.dexscreener.com/latest/dex/pairs/bsc/0x9901032f9b13a8d54378dcafca91f5c0ce17d429");case 4:return n=e.sent,e.next=7,n.json();case 7:void 0!==(a=e.sent).pair&&(t=a.pair.volume.h24),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function S(){return(S=Object(y.a)(b().mark((function e(){var t,n,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.prev=1,e.next=4,fetch("https://api.dexscreener.com/latest/dex/pairs/bsc/0x85faac652b707fdf6907ef726751087f9e0b6687");case 4:return n=e.sent,e.next=7,n.json();case 7:void 0!==(a=e.sent).pair&&(t=a.pair.priceUsd),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function k(){return E.apply(this,arguments)}function E(){return(E=Object(y.a)(b().mark((function e(){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=new m.a.providers.Web3Provider(window.ethereum,56),e.next=8;break;case 4:return e.prev=4,e.t0=e.catch(0),console.log("wrong chain"),e.abrupt("return",null);case 8:return e.next=10,t.send("eth_requestAccounts",[]);case 10:return e.abrupt("return",t.getSigner());case 11:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function A(){return F.apply(this,arguments)}function F(){return(F=Object(y.a)(b().mark((function e(){var t,n,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:return n=new m.a.Contract(w,x,t),e.next=8,t.getAddress();case 8:return a=e.sent,e.abrupt("return",[t,a,n]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(0),s=Object(d.a)(u,2),p=s[0],o=s[1],y=Object(a.useState)(0),b=Object(d.a)(y,2),w=b[0],x=b[1],k=Object(a.useState)(0),E=Object(d.a)(k,2),F=E[0],P=E[1],L=Object(a.useState)(0),D=Object(d.a)(L,2),I=D[0],_=D[1],W=Object(a.useState)(0),C=Object(d.a)(W,2),N=C[0],V=C[1],B=Object(a.useState)(0),U=Object(d.a)(B,2),R=U[0],G=U[1],q=Object(a.useState)(0),H=Object(d.a)(q,2),Y=H[0],J=H[1],z=Object(a.useState)(0),K=Object(d.a)(z,2),$=K[0],Q=K[1],X=Object(a.useState)(0),Z=Object(d.a)(X,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(0),ae=Object(d.a)(ne,2),ie=ae[0],re=ae[1],ue=Object(a.useState)(0),se=Object(d.a)(ue,2),pe=se[0],oe=se[1],de=Object(a.useState)(0),ye=Object(d.a)(de,2),le=ye[0],ce=ye[1],me=Object(a.useState)(0),fe=Object(d.a)(me,2),be=fe[0],ve=fe[1],Te=Object(a.useState)(0),he=Object(d.a)(Te,2),we=he[0],xe=he[1],ge=Object(a.useState)(!0),Me=Object(d.a)(ge,2),Oe=Me[0],je=Me[1],Se=Object(a.useState)(localStorage.getItem("address")||""),ke=Object(d.a)(Se,2),Ee=ke[0],Ae=ke[1],Fe=Object(a.useState)(localStorage.getItem("connected")||!1),Pe=Object(d.a)(Fe,2),Le=Pe[0],De=Pe[1];Object(a.useEffect)((function(){(function(){return O.apply(this,arguments)})().then(_),function(){return j.apply(this,arguments)}().then(V),function(){return S.apply(this,arguments)}().then(G)}),[]),Object(a.useEffect)((function(){m.a.utils.isAddress(Ee)?(localStorage.getItem("address")!==Ee&&localStorage.setItem("address",Ee),Ie(Ee),_e()):(te(0),P(0),oe(0),ce(0),ve(0),xe(0))}),[Ee,Oe]),Object(a.useEffect)((function(){g.getTotalDividendsDistributed().then((function(e){o((e/1e18).toFixed(8))})),g.getNumberOfDividendTokenHolders().then((function(e){x(e)}))}),[]);var Ie=function(){g.getNumberOfDividendTokenHolders().then((function(e){g.balanceOf(Ee).then((function(t){te((t/1e9).toFixed(0)),g.getAccountDividendsInfo(Ee).then((function(t){h.getBalance(Ee).then((function(n){P((n/1e18).toFixed(4)),oe(parseInt(t[4]._hex,16)-parseInt(t[3]._hex,16)),ce(1e3*parseInt(t[5]._hex,16)),ve((100-parseInt(t[2]._hex,16)/parseInt(e._hex,16)*100).toFixed(0)),xe((parseInt(t[3]._hex,16)/1e18).toFixed(8)),window.clearTimeout(v),v=window.setTimeout((function(){je(!Oe)}),9e3)}))}))})),g.balanceOf("0x000000000000000000000000000000000000dead").then((function(e){re((e/1e9).toFixed(0))}))}))},_e=function(){M.totalSupply().then((function(e){Q((e/1e9).toFixed(0))}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null,i.a.createElement(f,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",render:function(e){return i.a.createElement(T,Object.assign({},e,{scatsPrice:I,bnbPrice:R,address:Ee,setAddress:Ae,connected:Le,isConnected:De,holdings:ee,burned:ie,setHoldings:te,paid:pe,setPaid:oe,lastPaid:le,setLastPaid:ce,nextPayoutProgress:be,setNextPayoutProgress:ve,totalPaid:p,nextPayoutValue:we,setNextPayoutValue:xe,bnbHoldings:F,wallet:n,getWallet:A,setWallet:r,scatsVolume:N,totalDividendHolders:w,setSTRAYCATSCOINVolume:V,setSTRAYCATSCOINAmount:J,scatsAmount:Y,dividendTotalSupply:$}))}}))))},L=n(37),D=n(46);n(75);u.a.render(i.a.createElement(L.b,null,i.a.createElement(a.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement(o.Windmill,{usePreferences:!0,dark:!0},i.a.createElement(P,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!==a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}({onUpdate:function(e){e&&e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}})}},[[54,1,2]]]);
//# sourceMappingURL=main.71ade6d5.chunk.js.map