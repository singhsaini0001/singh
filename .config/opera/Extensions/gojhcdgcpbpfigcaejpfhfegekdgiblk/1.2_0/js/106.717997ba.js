"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[106],{45510:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"wrapper"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.isChecked,value:t.value},on:{change:t.updateInput}}),s("span",{staticClass:"checkmark"})])},i=[],n=(s(57658),{name:"OperaCheckbox",model:{prop:"modelValue",event:"change"},props:{value:{type:[Object,String],default:void 0},modelValue:{type:[Array,Boolean],default:!1}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.value}},methods:{updateInput(t){const e=t.target.checked;if(this.modelValue instanceof Array){const t=[...this.modelValue];e?t.push(this.value):t.splice(t.indexOf(this.value),1),this.$emit("change",t)}else this.$emit("change",e)}}}),o=n,l=s(1001),r=(0,l.Z)(o,a,i,!1,null,"653c3784",null),c=r.exports},11013:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.disabled?t._e():s("div",{staticClass:"t-token_item-click flex justify-between items-center px-6 py-3 mb-2 bg-dark-N16 border border-black border-opacity-10 rounded-lg cursor-pointer",on:{click:t.click}},[s("token-icon",{staticClass:"w-8 h-8",attrs:{chain:t.chain,address:t.address,"icon-uri":t.value.logoURI}}),s("div",{staticClass:"flex-1 mx-4"},[s("div",{staticClass:"font-bold tracking-wider"},[t._v(t._s(t.name))]),s("div",{staticClass:"flex items-center text-xs text-dark-N77"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.symbol))]),s("chain-badge",{attrs:{"background-color":"bg-input-bg",chain:t.chain}}),t.type&&t.type!==t.symbol?s("div",{staticClass:"inline-block bg-input-bg rounded-full px-2 py-0 ml-1"},[t._v(" "+t._s(t.type)+" ")]):t._e()],1)]),t.selectable?s("opera-checkbox",{ref:"checkbox",staticClass:"pointer-events-none",attrs:{"model-value":t.modelValue,value:t.value},on:{change:t.onChange}}):t._e()],1)},i=[],n=s(61627),o=s(45510),l=s(53106),r=s(56258),c={components:{ChainBadge:n.Z,OperaCheckbox:o.Z,TokenIcon:l.Z},model:{prop:"modelValue",event:"change"},props:{chain:{type:Object,default:void 0},address:{type:String,default:""},name:{type:String,default:""},symbol:{type:String,default:""},value:{type:[String,Object,Array],default:void 0},modelValue:{type:[String,Object,Array],default:void 0},selectable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},computed:{type(){const t=this.value.type??this.value.contract?.type;if(t)return!1}},methods:{click(){this.selectable?this.$refs.checkbox.$el.click():this.$emit("change",this.value)},onChange(t){const[e,s]=[this.$store.getters.getNetworkName(this.chain),this.symbol],a=this.getStatsEventName();r.Z.sendStatsEvent(r.Z.types.CLICK,a,{symbol:s,network:e}),this.$emit("change",t)},getStatsEventName(){if("WatchListSelect"===this.$route.name){const t=this.$refs.checkbox.isChecked?"selected":"unselected";return`wt_watch_coin_${t}`}return"ReceiveToken"===this.$route.name?"wt_receive_select":"wt_coin_selected"}}},d=c,h=s(1001),u=(0,h.Z)(d,a,i,!1,null,null,null),p=u.exports},61627:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.chainNameFriendly?s("div",{staticClass:"t-chain-badge flex space-x-1 text-dark-N77 rounded-full px-2 py-0.5 mr-2",class:[t.backgroundColor]},[t.chainLogo?s("img",{staticClass:"w-3.5 object-contain",attrs:{src:t.chainLogo,alt:""}}):t._e(),s("span",{staticClass:"t-chain-badge-name"},[t._v(t._s(t.chainNameFriendly))])]):t._e()},i=[],n=s(18454),o={name:"ChainBadge",props:{backgroundColor:{type:String,default:"bg-dark-N16"},chain:{type:Object,default:void 0}},computed:{chainLogo(){if(this.chain)return(0,n.Z)(this.chain).icon()},chainNameFriendly(){if(this.chain)return this.$store.getters.chainNameFriendly(this.chain)}}},l=o,r=s(1001),c=(0,r.Z)(l,a,i,!1,null,null,null),d=c.exports},94495:function(t,e,s){s.d(e,{Z:function(){return _}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full"},[t.value?s("div",{staticClass:"t-asset_selector-show_dialog flex bg-input-bg rounded-full cursor-pointer",on:{click:t.showDialog}},[s("token-icon",{staticClass:"w-10 h-8 my-5 mx-4",attrs:{chain:t.chain,address:t.address}}),s("div",{staticClass:"flex items-center justify-between w-full"},[s("div",{staticClass:"tracking-wider truncate"},[s("div",{staticClass:"font-bold text-lg"},[t._v(t._s(t.name))]),s("div",{staticClass:"flex items-center font-bold text-sm text-grey-A flex"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.symbol))]),s("chain-badge",{attrs:{chain:t.chain}})],1)]),s("i",{staticClass:"w-6 m-4 icon-chevron_down text-dark-N60"})])],1):t._e(),s("asset-selector-dialog",{ref:"dialog",attrs:{options:t.options,value:t.value,"still-loading-count":t.stillLoadingCount}})],1)},i=[],n=s(20144),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"bg-background fixed top-0 bottom-0 left-0 right-0 z-10"},[s("div",{staticClass:"flex flex-col h-full"},[s("top-bar",{attrs:{title:t.$t("general.selectAssets"),"emit-back":!0,"test-parent-name":"asset_selector_dialog"},on:{back:function(e){return t.close()}}}),s("div",{staticClass:"px-4"},[s("opera-input",{staticClass:"t-token_dialog-query",attrs:{value:t.search,"prepend-icon":"icon-search text-brand-primary text-opacity-40",type:"search",placeholder:t.$t("general.search")},on:{input:t.updateSearch}})],1),s("div",{staticClass:"px-4 pb-4 overflow-y-scroll h-full",on:{scroll:t.onScroll}},[t._l(t.tokenList,(function(e,a){return s("div",{key:a},[s("token-item",{staticClass:"my-3",attrs:{chain:e.chain,address:"contract"in e?e.contract.contract:e.address,name:"contract"in e?e.contract.name:e.name,symbol:"contract"in e?e.contract.symbol:e.symbol,value:e,selectable:!1},on:{change:t.itemClicked}})],1)})),t._l(t.stillLoadingCount,(function(t){return s("div",{key:"loading-"+t,staticClass:"t-token_loading_item flex justify-between items-center px-6 py-3 mb-2 bg-dark-N16 border border-black border-opacity-10 rounded-lg mt-3 cursor-wait",style:{opacity:1/t}},[s("div",{staticClass:"h-10"},[s("lottie-component",{staticClass:"h-10",attrs:{src:"loader_tx.json"}})],1)])}))],2)],1)])},l=[],r=s(71671),c=s(932),d=s(11013),h=s(74293);const u=20;var p=n.Z.extend({name:"AssetSelectorDialog",components:{LottieComponent:r.Z,OperaInput:c.Z,TokenItem:d.Z,TopBar:h.Z},props:{options:{type:Array,default:void 0},stillLoadingCount:{type:Number,default:0},value:{type:Object,default:void 0}},data(){return{callback:null,loading:!1,pageSize:u,search:"",showing:!1}},computed:{tokens(){return this.options},tokenList(){const t=this.tokens;return this.search?t.filter((t=>("contract"in t?t.contract.name:t.name).toLowerCase().includes(this.search.toLowerCase()))).slice(0,this.pageSize):t.slice(0,this.pageSize)}},methods:{close(){this.value?this.showing=!1:this.$router.go(-1)},async itemClicked(t){this.loading=!0,this.callback(t),this.showing=!1,this.loading=!1},onScroll(t){const e=t.target,s=e.scrollTop+e.clientHeight>=e.scrollHeight-e.clientHeight;s&&(this.pageSize+u<this.tokens.length?this.pageSize+=u:this.pageSize=this.tokens.length-1)},show(t){this.callback=t,this.showing=!0},updateSearch(t){this.search=t}}}),m=p,g=s(1001),v=(0,g.Z)(m,o,l,!1,null,null,null),k=v.exports,f=s(61627),y=s(53106),b=n.Z.extend({components:{AssetSelectorDialog:k,ChainBadge:f.Z,TokenIcon:y.Z},props:{options:{type:Array,default:void 0},value:{type:Object,default:void 0},stillLoadingCount:{type:Number,default:0}},data(){return{dialog:!1}},computed:{address(){return"contract"in this.token?this.token.contract.contract:this.token.address},chain(){return this.token.chain},name(){return"contract"in this.token?this.token.contract.name:this.token.name},symbol(){return"contract"in this.token?this.token.contract.symbol:this.token.symbol},token(){return this.value??this.$store.getters.matchingNativeToken("",this.chain)}},methods:{showDialog(){this.$refs.dialog.show((t=>{this.$emit("input",t)}))}}}),w=b,C=(0,g.Z)(w,a,i,!1,null,null,null),_=C.exports},82106:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col tracking-wide"},[s("top-bar",{attrs:{title:t.$t("general.sell"),"test-parent-name":"sell_view"}}),s("div",{staticClass:"mt-5 mx-14"},[s("div",{staticClass:"text-white mb-8"},[t._v(t._s(t.$t("views.sellView.sellDescription")))]),s("div",{staticClass:"text-lg text-grey-D mb-4"},[t._v(t._s(t.$t("general.sell")))]),s("div",{staticClass:"flex justify-center items-center mb-12"},[s("asset-selector",{attrs:{options:t.sellableTokens},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),s("div",{staticClass:"text-lg text-grey-D mb-4"},[t._v(t._s(t.$t("general.serviceProvider")))]),t._l(t.promos.filter((function(t){return!t.hidden})),(function(e){return s("li",{key:e.key,staticClass:"list-none py-6 px-8 bg-dark-N16 rounded-md mb-8",class:e.addClass},[s("img",{staticClass:"mr-6 -ml-2",attrs:{src:e.icon}}),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"font-semibold tracking-wider mt-4"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"tracking-normal font-light mt-2 text-dark-N77"},[s("i18n",{attrs:{path:"views.sellView.sellWithDescription",tag:"span"},scopedSlots:t._u([{key:"platform",fn:function(){return[s("span",[t._v(t._s(e.platform))])]},proxy:!0}],null,!0)})],1),s("div",{staticClass:"flex flex-center mt-6"},[s("div",{staticClass:"flex-1"}),s("div",{class:"t-sell_view-click_"+e.key,on:{click:function(s){return t.clickItem(e)}}},[s("primary-button",{staticClass:"flex-1",class:"t-sell_view-button_"+e.key,attrs:{title:e.action}})],1),s("div",{staticClass:"flex-1"})]),e.supportLink?s("div",{staticClass:"text-center text-xs font-semibold underline text-dark-N77 mt-2"},[s("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.supportLink}},[t._v(" "+t._s(t.$t("general.support"))+" ")])]):t._e()])])}))],2)],1)},i=[],n=s(94495),o=s(87307),l=s(74293),r=s(56258),c={components:{AssetSelector:n.Z,PrimaryButton:o.Z,TopBar:l.Z},data(){return{token:this.$route.params?.token??this.$store.getters.sellableTokens[0]}},computed:{address(){return this.$store.getters.accountsByCoinType[this.coinType]},chain(){return this.token.chain},coinType(){return this.token.chain.coinType},name(){return this.token.contract.name},promos(){const t=this.receivingAddress,e=this.$store.getters.productSell,a=this.symbol;return[{key:"wyre",platform:"Wyre",hidden:!0,icon:s(97061),title:this.$t("views.sellView.sellWithTitle",{symbol:a,platform:"Wyre"}),action:this.$t("views.sellView.sellWithContinue",{platform:"Wyre"}),link:"https://www.sendwyre.com/",infoLink:""},{key:"moonpay",platform:"MoonPay",icon:s(82820),title:this.$t("views.sellView.sellWithTitle",{symbol:a,platform:"MoonPay"}),action:this.$t("views.sellView.sellWithContinue",{platform:"MoonPay"}),link:`https://satoshi.opera-api.com/v4/redirects/moonpay-sell?currencyCode=${a}&refundWalletAddress=${t}&product=${e}`,infoLink:"https://support.moonpay.com/hc/",supportLink:"https://support.moonpay.com/hc/en-gb/requests/new",stats:"wt_sell_moonpay"},{key:"ramp",platform:"Ramp",hidden:!0,icon:s(82702),title:this.$t("views.sellView.sellWithTitle",{symbol:a,platform:"Ramp"}),action:this.$t("views.sellView.sellWithContinue",{platform:"Ramp"}),link:`https://sell.ramp.network/?swapAsset=${a}&userAddress=${t}&hostApiKey=hq84sto6z2nry34dwhvoh76yxpzspggyjzavzuoe`,infoLink:"https://support.ramp.network",supportLink:"https://support.ramp.network",stats:"wt_sell_ramp"}]},receivingAddress(){return this.$store.getters.receivingAddress},sellableTokens(){return this.$store.getters.sellableTokens},statsPayload(){return{coin:this.symbol,network:this.$store.getters.getNetworkName(this.chain)}},symbol(){return this.token.contract.symbol}},watch:{token(){this.$store.dispatch("getReceivingAddress",this.chain)}},mounted(){r.Z.sendStatsEvent(r.Z.types.IMPRESSION,"wt_sell_entered",this.statsPayload),this.$store.dispatch("getReceivingAddress",this.chain)},methods:{clickItem(t){t.stats&&r.Z.sendStatsEvent(r.Z.types.CLICK,t.stats,this.statsPayload);const e=t.link;window.open(e)}}},d=c,h=s(1001),u=(0,h.Z)(d,a,i,!1,null,null,null),p=u.exports},82820:function(t,e,s){t.exports=s.p+"img/moonpay.6b4c9c2a.svg"},82702:function(t,e,s){t.exports=s.p+"img/ramp.26a0a8eb.svg"},97061:function(t,e,s){t.exports=s.p+"img/wyre.72783911.svg"}}]);