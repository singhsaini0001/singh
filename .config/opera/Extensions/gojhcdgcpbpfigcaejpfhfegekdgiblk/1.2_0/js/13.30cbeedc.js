"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[13],{45510:function(t,e,s){s.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"wrapper"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.isChecked,value:t.value},on:{change:t.updateInput}}),s("span",{staticClass:"checkmark"})])},i=[],a=(s(57658),{name:"OperaCheckbox",model:{prop:"modelValue",event:"change"},props:{value:{type:[Object,String],default:void 0},modelValue:{type:[Array,Boolean],default:!1}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.value}},methods:{updateInput(t){const e=t.target.checked;if(this.modelValue instanceof Array){const t=[...this.modelValue];e?t.push(this.value):t.splice(t.indexOf(this.value),1),this.$emit("change",t)}else this.$emit("change",e)}}}),o=a,r=s(1001),c=(0,r.Z)(o,n,i,!1,null,"653c3784",null),l=c.exports},11013:function(t,e,s){s.d(e,{Z:function(){return p}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.disabled?t._e():s("div",{staticClass:"t-token_item-click flex justify-between items-center px-6 py-3 mb-2 bg-dark-N16 border border-black border-opacity-10 rounded-lg cursor-pointer",on:{click:t.click}},[s("token-icon",{staticClass:"w-8 h-8",attrs:{chain:t.chain,address:t.address,"icon-uri":t.value.logoURI}}),s("div",{staticClass:"flex-1 mx-4"},[s("div",{staticClass:"font-bold tracking-wider"},[t._v(t._s(t.name))]),s("div",{staticClass:"flex items-center text-xs text-dark-N77"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.symbol))]),s("chain-badge",{attrs:{"background-color":"bg-input-bg",chain:t.chain}}),t.type&&t.type!==t.symbol?s("div",{staticClass:"inline-block bg-input-bg rounded-full px-2 py-0 ml-1"},[t._v(" "+t._s(t.type)+" ")]):t._e()],1)]),t.selectable?s("opera-checkbox",{ref:"checkbox",staticClass:"pointer-events-none",attrs:{"model-value":t.modelValue,value:t.value},on:{change:t.onChange}}):t._e()],1)},i=[],a=s(61627),o=s(45510),r=s(53106),c=s(56258),l={components:{ChainBadge:a.Z,OperaCheckbox:o.Z,TokenIcon:r.Z},model:{prop:"modelValue",event:"change"},props:{chain:{type:Object,default:void 0},address:{type:String,default:""},name:{type:String,default:""},symbol:{type:String,default:""},value:{type:[String,Object,Array],default:void 0},modelValue:{type:[String,Object,Array],default:void 0},selectable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},computed:{type(){const t=this.value.type??this.value.contract?.type;if(t)return!1}},methods:{click(){this.selectable?this.$refs.checkbox.$el.click():this.$emit("change",this.value)},onChange(t){const[e,s]=[this.$store.getters.getNetworkName(this.chain),this.symbol],n=this.getStatsEventName();c.Z.sendStatsEvent(c.Z.types.CLICK,n,{symbol:s,network:e}),this.$emit("change",t)},getStatsEventName(){if("WatchListSelect"===this.$route.name){const t=this.$refs.checkbox.isChecked?"selected":"unselected";return`wt_watch_coin_${t}`}return"ReceiveToken"===this.$route.name?"wt_receive_select":"wt_coin_selected"}}},u=l,d=s(1001),h=(0,d.Z)(u,n,i,!1,null,null,null),p=h.exports},61627:function(t,e,s){s.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.chainNameFriendly?s("div",{staticClass:"t-chain-badge flex space-x-1 text-dark-N77 rounded-full px-2 py-0.5 mr-2",class:[t.backgroundColor]},[t.chainLogo?s("img",{staticClass:"w-3.5 object-contain",attrs:{src:t.chainLogo,alt:""}}):t._e(),s("span",{staticClass:"t-chain-badge-name"},[t._v(t._s(t.chainNameFriendly))])]):t._e()},i=[],a=s(18454),o={name:"ChainBadge",props:{backgroundColor:{type:String,default:"bg-dark-N16"},chain:{type:Object,default:void 0}},computed:{chainLogo(){if(this.chain)return(0,a.Z)(this.chain).icon()},chainNameFriendly(){if(this.chain)return this.$store.getters.chainNameFriendly(this.chain)}}},r=o,c=s(1001),l=(0,c.Z)(r,n,i,!1,null,null,null),u=l.exports},94495:function(t,e,s){s.d(e,{Z:function(){return _}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full"},[t.value?s("div",{staticClass:"t-asset_selector-show_dialog flex bg-input-bg rounded-full cursor-pointer",on:{click:t.showDialog}},[s("token-icon",{staticClass:"w-10 h-8 my-5 mx-4",attrs:{chain:t.chain,address:t.address}}),s("div",{staticClass:"flex items-center justify-between w-full"},[s("div",{staticClass:"tracking-wider truncate"},[s("div",{staticClass:"font-bold text-lg"},[t._v(t._s(t.name))]),s("div",{staticClass:"flex items-center font-bold text-sm text-grey-A flex"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.symbol))]),s("chain-badge",{attrs:{chain:t.chain}})],1)]),s("i",{staticClass:"w-6 m-4 icon-chevron_down text-dark-N60"})])],1):t._e(),s("asset-selector-dialog",{ref:"dialog",attrs:{options:t.options,value:t.value,"still-loading-count":t.stillLoadingCount}})],1)},i=[],a=s(20144),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"bg-background fixed top-0 bottom-0 left-0 right-0 z-10"},[s("div",{staticClass:"flex flex-col h-full"},[s("top-bar",{attrs:{title:t.$t("general.selectAssets"),"emit-back":!0,"test-parent-name":"asset_selector_dialog"},on:{back:function(e){return t.close()}}}),s("div",{staticClass:"px-4"},[s("opera-input",{staticClass:"t-token_dialog-query",attrs:{value:t.search,"prepend-icon":"icon-search text-brand-primary text-opacity-40",type:"search",placeholder:t.$t("general.search")},on:{input:t.updateSearch}})],1),s("div",{staticClass:"px-4 pb-4 overflow-y-scroll h-full",on:{scroll:t.onScroll}},[t._l(t.tokenList,(function(e,n){return s("div",{key:n},[s("token-item",{staticClass:"my-3",attrs:{chain:e.chain,address:"contract"in e?e.contract.contract:e.address,name:"contract"in e?e.contract.name:e.name,symbol:"contract"in e?e.contract.symbol:e.symbol,value:e,selectable:!1},on:{change:t.itemClicked}})],1)})),t._l(t.stillLoadingCount,(function(t){return s("div",{key:"loading-"+t,staticClass:"t-token_loading_item flex justify-between items-center px-6 py-3 mb-2 bg-dark-N16 border border-black border-opacity-10 rounded-lg mt-3 cursor-wait",style:{opacity:1/t}},[s("div",{staticClass:"h-10"},[s("lottie-component",{staticClass:"h-10",attrs:{src:"loader_tx.json"}})],1)])}))],2)],1)])},r=[],c=s(71671),l=s(932),u=s(11013),d=s(74293);const h=20;var p=a.Z.extend({name:"AssetSelectorDialog",components:{LottieComponent:c.Z,OperaInput:l.Z,TokenItem:u.Z,TopBar:d.Z},props:{options:{type:Array,default:void 0},stillLoadingCount:{type:Number,default:0},value:{type:Object,default:void 0}},data(){return{callback:null,loading:!1,pageSize:h,search:"",showing:!1}},computed:{tokens(){return this.options},tokenList(){const t=this.tokens;return this.search?t.filter((t=>("contract"in t?t.contract.name:t.name).toLowerCase().includes(this.search.toLowerCase()))).slice(0,this.pageSize):t.slice(0,this.pageSize)}},methods:{close(){this.value?this.showing=!1:this.$router.go(-1)},async itemClicked(t){this.loading=!0,this.callback(t),this.showing=!1,this.loading=!1},onScroll(t){const e=t.target,s=e.scrollTop+e.clientHeight>=e.scrollHeight-e.clientHeight;s&&(this.pageSize+h<this.tokens.length?this.pageSize+=h:this.pageSize=this.tokens.length-1)},show(t){this.callback=t,this.showing=!0},updateSearch(t){this.search=t}}}),m=p,y=s(1001),b=(0,y.Z)(m,o,r,!1,null,null,null),g=b.exports,f=s(61627),k=s(53106),v=a.Z.extend({components:{AssetSelectorDialog:g,ChainBadge:f.Z,TokenIcon:k.Z},props:{options:{type:Array,default:void 0},value:{type:Object,default:void 0},stillLoadingCount:{type:Number,default:0}},data(){return{dialog:!1}},computed:{address(){return"contract"in this.token?this.token.contract.contract:this.token.address},chain(){return this.token.chain},name(){return"contract"in this.token?this.token.contract.name:this.token.name},symbol(){return"contract"in this.token?this.token.contract.symbol:this.token.symbol},token(){return this.value??this.$store.getters.matchingNativeToken("",this.chain)}},methods:{showDialog(){this.$refs.dialog.show((t=>{this.$emit("input",t)}))}}}),w=v,C=(0,y.Z)(w,n,i,!1,null,null,null),_=C.exports},21013:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col tracking-wide"},[s("top-bar",{attrs:{title:t.$t("general.buy"),"test-parent-name":"buy_view"}}),s("div",{staticClass:"mt-5 mx-14"},[s("div",{staticClass:"text-white mb-8"},[t._v(t._s(t.$t("views.buyView.buyDescription")))]),s("div",{staticClass:"text-lg text-grey-D mb-4"},[t._v(t._s(t.$t("general.asset")))]),s("div",{staticClass:"flex justify-center items-center mb-12"},[s("asset-selector",{attrs:{options:t.buyableTokens},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),s("div",{staticClass:"text-lg text-grey-D mb-4"},[t._v(t._s(t.$t("general.serviceProvider")))]),t._l(t.promos.filter((function(t){return!t.hidden})),(function(e){return s("li",{key:e.key,staticClass:"list-none py-6 px-8 bg-dark-N16 rounded-md mb-8",class:e.addClass},[s("img",{staticClass:"mr-6 -ml-2",attrs:{src:e.icon}}),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"font-semibold tracking-wider mt-4"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"tracking-normal font-light mt-2 text-dark-N77"},[s("i18n",{attrs:{path:"views.buyView.buyWithDescription",tag:"span"},scopedSlots:t._u([{key:"platform",fn:function(){return[s("span",[t._v(t._s(e.platform))])]},proxy:!0},{key:"here",fn:function(){return[s("a",{staticClass:"underline",attrs:{target:"_blank",rel:"noopener noreferrer",href:e.infoLink}},[t._v(" "+t._s(t.$t("general.here").toLocaleLowerCase(t.$i18n.locale))+" ")])]},proxy:!0}],null,!0)})],1),s("div",{staticClass:"flex flex-center mt-6"},[s("div",{staticClass:"flex-1"}),s("div",{staticClass:"t-buy_view-click",on:{click:function(s){return t.clickItem(e)}}},[s("primary-button",{staticClass:"t-buy_view-action flex-1 whitespace-nowrap",attrs:{title:e.action}})],1),s("div",{staticClass:"flex-1"})]),e.supportLink?s("div",{staticClass:"text-center text-xs font-semibold underline text-dark-N77 mt-2"},[s("a",{staticClass:"t-buy_view-contact",attrs:{target:"_blank",rel:"noopener noreferrer",href:e.supportLink}},[t._v(" "+t._s(t.$t("general.support"))+" ")])]):t._e()])])}))],2)],1)},i=[],a=s(94495),o=s(87307),r=s(74293),c=s(56258),l={components:{AssetSelector:a.Z,PrimaryButton:o.Z,TopBar:r.Z},data(){return{token:this.setDefaultBuyableToken()}},computed:{address(){return this.$store.getters.accountsByCoinType[this.coinType]},buyableTokens(){return this.$store.getters.buyableTokens},chain(){return this.token.chain},coinType(){return this.token.chain.coinType},isBinanceBuyable(){return this.$store.getters.isBinanceBuyable(this.token)},isMoonPayBuyable(){return this.$store.getters.isMoonpayBuyable(this.token)},name(){return this.token.contract.name},promos(){const t=this.receivingAddress,e=this.$store.getters.productBuy,{symbol:n,symbolAliases:i}=this.token.contract;return[{action:this.$t("views.buyView.buyWithContinue",{platform:"Wyre"}),hidden:!0,icon:s(97061),infoLink:"",key:"wyre",platform:"Wyre",title:this.$t("views.buyView.buyWithTitle",{symbol:n,platform:"Wyre"})},{action:this.$t("views.buyView.buyWithContinue",{platform:"Binance Connect"}),hidden:!this.isBinanceBuyable,icon:s(80818),infoLink:"https://www.binancecnt.com/en/contact-us",key:"binancecnt",link:`https://redirects.satoshi.opera-api.com/binance-connect?cryptoAddress=${t}&symbol_network=${i.binanceConnect}`,platform:"Binance Connect",stats:"wt_buy_binancecnt",supportLink:"https://www.binancecnt.com/en/contact-us",title:this.$t("views.buyView.buyWithTitle",{symbol:n,platform:"Binance Connect"})},{action:this.$t("views.buyView.buyWithContinue",{platform:"MoonPay"}),hidden:!this.isMoonPayBuyable,icon:s(82820),infoLink:"https://support.moonpay.com/hc/",key:"moonpay",link:`https://satoshi.opera-api.com/v4/redirects/moonpay?currencyCode=${i.moonPay}&walletAddress=${t}&product=${e}`,platform:"MoonPay",stats:"wt_buy_moonpay",supportLink:"https://support.moonpay.com/hc/en-gb/requests/new",title:this.$t("views.buyView.buyWithTitle",{symbol:n,platform:"MoonPay"})},{action:this.$t("views.buyView.buyWithContinue",{platform:"Ramp"}),hidden:!0,icon:s(82702),infoLink:"https://support.ramp.network",key:"ramp",link:`https://buy.ramp.network/?swapAsset=${n}&userAddress=${t}&hostApiKey=hq84sto6z2nry34dwhvoh76yxpzspggyjzavzuoe`,platform:"Ramp",stats:"wt_buy_ramp",supportLink:"https://support.ramp.network",title:this.$t("views.buyView.buyWithTitle",{symbol:n,platform:"Ramp"})}]},receivingAddress(){return this.$store.getters.receivingAddress},statsPayload(){return{coin:this.token.contract.symbol,network:this.$store.getters.getNetworkName(this.chain)}}},watch:{token(){this.$store.dispatch("getReceivingAddress",this.chain)}},mounted(){c.Z.sendStatsEvent(c.Z.types.IMPRESSION,"wt_buy_entered",this.statsPayload),this.$store.dispatch("getReceivingAddress",this.chain)},methods:{clickItem(t){t.stats&&c.Z.sendStatsEvent(c.Z.types.CLICK,t.stats,this.statsPayload);const e=t.link;window.open(e)},setDefaultBuyableToken(){return this.$store.getters.getBuyableToken(this.$route.params?.token)}}},u=l,d=s(1001),h=(0,d.Z)(u,n,i,!1,null,null,null),p=h.exports},80818:function(t,e,s){t.exports=s.p+"img/binancecnt.f04ec441.svg"},82820:function(t,e,s){t.exports=s.p+"img/moonpay.6b4c9c2a.svg"},82702:function(t,e,s){t.exports=s.p+"img/ramp.26a0a8eb.svg"},97061:function(t,e,s){t.exports=s.p+"img/wyre.72783911.svg"}}]);