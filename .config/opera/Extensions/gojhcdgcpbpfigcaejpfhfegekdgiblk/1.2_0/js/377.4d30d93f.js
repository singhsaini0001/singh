"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[377],{79377:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col p-4"},[n("div",{staticClass:"flex flex-col items-center justify-center px-6 flex-grow"},[n("lottie-component",{staticClass:"my-4 w-20 h-20",attrs:{src:"pending_transaction.json"}}),n("div",{staticClass:"text-xl mb-4"},[t._v(t._s(t.$t("general.transactionPending")))]),n("light-button",{staticClass:"t-transaction_complete-status",attrs:{loading:!!t.timer,title:t.$t("general.viewStatus")},on:{click:t.viewStatus}})],1),n("primary-button",{staticClass:"t-transaction_complete-close w-full mt-8",attrs:{title:t.$t("general.done")},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}})],1)},l=[],i=(n(57658),n(20144)),s=n(87307),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"t-light_button-click flex items-center justify-between text-sm font-bold px-2 py-1 bg-opacity-10 rounded text-brand-primary",class:[{"bg-brand-primary":t.background},{"opacity-40 cursor-not-allowed":t.disabled&&!t.loading},{"opacity-60 cursor-wait":t.loading}],on:{click:function(e){!t.disabled&&!t.loading&&t.$emit("click")}}},[n("span",[t._v(t._s(t.title))]),t.loading?n("spinning-loader",{staticClass:"-mt-6 ml-1.5 w-4"}):t._e()],1)},r=[],c=n(93272),u={components:{SpinningLoader:c.Z},props:{background:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},title:{type:String,default:""}}},d=u,p=n(1001),h=(0,p.Z)(d,o,r,!1,null,null,null),m=h.exports,f=n(71671),g=n(35210),b=i.Z.extend({components:{PrimaryButton:s.Z,LightButton:m,LottieComponent:f.Z},props:{token:{type:Object,default:void 0},txHash:{type:String,default:""}},data(){return{delay:{bitcoin:5e3,near:0},timer:null}},computed:{chain(){return this.token.chain},txStatusUrl(){return this.$store.getters.transactionDetailsUrl(this.txHash,this.chain)}},mounted(){this.checkIfIsTxStatusUrlAvailable()},methods:{checkIfIsTxStatusUrlAvailable(){(0,g.cA)(this.chain)||(this.timer=window.setTimeout((()=>{this.timer=null}),this.delay[this.chain.name]??5e3))},close(){this.$router.push({name:"Overview"})},viewStatus(){this.$platform.openNewTab(this.txStatusUrl)}}}),x=b,y=(0,p.Z)(x,a,l,!1,null,null,null),w=y.exports}}]);