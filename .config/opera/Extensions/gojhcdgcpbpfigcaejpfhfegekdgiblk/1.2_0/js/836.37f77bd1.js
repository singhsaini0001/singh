"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[836],{45510:function(e,t,s){s.d(t,{Z:function(){return o}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"wrapper"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.updateInput}}),s("span",{staticClass:"checkmark"})])},n=[],l=(s(57658),{name:"OperaCheckbox",model:{prop:"modelValue",event:"change"},props:{value:{type:[Object,String],default:void 0},modelValue:{type:[Array,Boolean],default:!1}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.value}},methods:{updateInput(e){const t=e.target.checked;if(this.modelValue instanceof Array){const e=[...this.modelValue];t?e.push(this.value):e.splice(e.indexOf(this.value),1),this.$emit("change",e)}else this.$emit("change",t)}}}),c=l,i=s(1001),r=(0,i.Z)(c,a,n,!1,null,"653c3784",null),o=r.exports},11013:function(e,t,s){s.d(t,{Z:function(){return p}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.disabled?e._e():s("div",{staticClass:"t-token_item-click flex justify-between items-center px-6 py-3 mb-2 bg-dark-N16 border border-black border-opacity-10 rounded-lg cursor-pointer",on:{click:e.click}},[s("token-icon",{staticClass:"w-8 h-8",attrs:{chain:e.chain,address:e.address,"icon-uri":e.value.logoURI}}),s("div",{staticClass:"flex-1 mx-4"},[s("div",{staticClass:"font-bold tracking-wider"},[e._v(e._s(e.name))]),s("div",{staticClass:"flex items-center text-xs text-dark-N77"},[s("span",{staticClass:"mr-2"},[e._v(e._s(e.symbol))]),s("chain-badge",{attrs:{"background-color":"bg-input-bg",chain:e.chain}}),e.type&&e.type!==e.symbol?s("div",{staticClass:"inline-block bg-input-bg rounded-full px-2 py-0 ml-1"},[e._v(" "+e._s(e.type)+" ")]):e._e()],1)]),e.selectable?s("opera-checkbox",{ref:"checkbox",staticClass:"pointer-events-none",attrs:{"model-value":e.modelValue,value:e.value},on:{change:e.onChange}}):e._e()],1)},n=[],l=s(61627),c=s(45510),i=s(53106),r=s(56258),o={components:{ChainBadge:l.Z,OperaCheckbox:c.Z,TokenIcon:i.Z},model:{prop:"modelValue",event:"change"},props:{chain:{type:Object,default:void 0},address:{type:String,default:""},name:{type:String,default:""},symbol:{type:String,default:""},value:{type:[String,Object,Array],default:void 0},modelValue:{type:[String,Object,Array],default:void 0},selectable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},computed:{type(){const e=this.value.type??this.value.contract?.type;if(e)return!1}},methods:{click(){this.selectable?this.$refs.checkbox.$el.click():this.$emit("change",this.value)},onChange(e){const[t,s]=[this.$store.getters.getNetworkName(this.chain),this.symbol],a=this.getStatsEventName();r.Z.sendStatsEvent(r.Z.types.CLICK,a,{symbol:s,network:t}),this.$emit("change",e)},getStatsEventName(){if("WatchListSelect"===this.$route.name){const e=this.$refs.checkbox.isChecked?"selected":"unselected";return`wt_watch_coin_${e}`}return"ReceiveToken"===this.$route.name?"wt_receive_select":"wt_coin_selected"}}},d=o,u=s(1001),h=(0,u.Z)(d,a,n,!1,null,null,null),p=h.exports},61627:function(e,t,s){s.d(t,{Z:function(){return d}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.chainNameFriendly?s("div",{staticClass:"t-chain-badge flex space-x-1 text-dark-N77 rounded-full px-2 py-0.5 mr-2",class:[e.backgroundColor]},[e.chainLogo?s("img",{staticClass:"w-3.5 object-contain",attrs:{src:e.chainLogo,alt:""}}):e._e(),s("span",{staticClass:"t-chain-badge-name"},[e._v(e._s(e.chainNameFriendly))])]):e._e()},n=[],l=s(18454),c={name:"ChainBadge",props:{backgroundColor:{type:String,default:"bg-dark-N16"},chain:{type:Object,default:void 0}},computed:{chainLogo(){if(this.chain)return(0,l.Z)(this.chain).icon()},chainNameFriendly(){if(this.chain)return this.$store.getters.chainNameFriendly(this.chain)}}},i=c,r=s(1001),o=(0,r.Z)(i,a,n,!1,null,null,null),d=o.exports},25836:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pb-20"},[s("top-bar",{attrs:{title:e.$t("general.selectAssets"),"test-parent-name":"watch_list_select"}}),s("div",{staticClass:"px-4 py-4"},[s("opera-input",{staticClass:"mb-6",attrs:{round:!0,"prepend-icon":"icon-search text-brand-primary text-opacity-40",placeholder:e.$t("general.search")},on:{focus:function(t){return e.searchFocus()}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),s("div",[e.filteredAssets.length?e._e():s("div",{staticClass:"text-black text-opacity-60 text-center"},[e._v(" "+e._s(e.$t("general.noResults"))+" ")]),e._l(e.filteredAssets,(function(t){return s("token-item",{key:e.tokenKey(t),class:"t-watch_list_select-"+e.tokenKey(t),attrs:{chain:t.chain,address:t.address,name:t.name,value:e.tokenKey(t),symbol:t.symbol},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}))],2)],1)],1)},n=[],l=s(932),c=s(56258),i=s(11013),r=s(74293),o={components:{OperaInput:l.Z,TopBar:r.Z,TokenItem:i.Z},data(){return{query:"",selected:[]}},computed:{tokens(){return this.$store.getters.watchlistTokens},filteredAssets(){let e;const t=this.query.toLowerCase();return this.query?(c.Z.sendStatsEvent(c.Z.types.CLICK,"wt_watch_search_term",{keyword:this.query}),e=this.tokens.filter((e=>e.name.toLowerCase().includes(t)||e.symbol.toLowerCase().includes(t)))):e=this.tokens,e},selectedTokens(){return this.selected.map((e=>this.tokens.find((t=>this.tokenKey(t)===e))))},storedWatchlist(){return this.$store.getters.watchlist}},watch:{selectedTokens(e){this.$store.commit("SET_WATCHLIST",e)}},mounted(){c.Z.sendStatsEvent(c.Z.types.CLICK,"wt_watch_edit"),this.selected=this.storedWatchlist.map((e=>this.tokenKey(e)))},methods:{tokenKey(e){return`${e.symbol}${e.platform?`_${e.platform}`:""}`},searchFocus(){c.Z.sendStatsEvent(c.Z.types.CLICK,"wt_watch_search")}}},d=o,u=s(1001),h=(0,u.Z)(d,a,n,!1,null,null,null),p=h.exports}}]);