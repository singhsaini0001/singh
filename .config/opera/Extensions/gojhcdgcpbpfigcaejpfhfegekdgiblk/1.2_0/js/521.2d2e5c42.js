"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[521],{45510:function(e,t,a){a.d(t,{Z:function(){return o}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"wrapper"},[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.updateInput}}),a("span",{staticClass:"checkmark"})])},r=[],l=(a(57658),{name:"OperaCheckbox",model:{prop:"modelValue",event:"change"},props:{value:{type:[Object,String],default:void 0},modelValue:{type:[Array,Boolean],default:!1}},computed:{isChecked(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.value}},methods:{updateInput(e){const t=e.target.checked;if(this.modelValue instanceof Array){const e=[...this.modelValue];t?e.push(this.value):e.splice(e.indexOf(this.value),1),this.$emit("change",e)}else this.$emit("change",t)}}}),i=l,c=a(1001),n=(0,c.Z)(i,s,r,!1,null,"653c3784",null),o=n.exports},73521:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-grow flex flex-col justify-between"},[e.$store.getters.onboardingOngoing?e._e():s("top-bar",{attrs:{title:e.$t("general.backupPhrase"),"test-parent-name":"backup_reveal_warning_view"}}),s("div",{staticClass:"flex-grow mx-14 my-7 flex flex-col justify-between"},[s("div",{staticClass:"my-14 flex flex-col items-center"},[s("h1",{staticClass:"my-5 mx-4 font-bold leading-tight text-2xl"},[e._v(" "+e._s(e.$t("views.backupView.securePhrase"))+" ")]),s("img",{staticClass:"my-7",attrs:{src:a(64220),alt:""}}),s("p",{staticClass:"text-center text-dark-N77 my-5 mx-4"},[e._v(" "+e._s(e.$t("views.backupView.inTheNextStep",{phraseLength:e.backupPhrase.split(" ").length})+" "+e.$t("views.backupView.doNotSharePhrase"))+" ")])]),s("div",{staticClass:"flex-grow"}),s("div",{staticClass:"flex flex-col items-center"},[s("div",{staticClass:"flex my-5 items-center"},[s("opera-checkbox",{staticClass:"t-backup_reveal_warning_view-disclaimer mr-4 p-1",attrs:{"model-value":e.disclaimerAcknowledged},on:{change:e.change}}),s("p",{staticClass:"text-sm text-dark-N77"},[e._v(e._s(e.$t("views.backupView.disclaimer")))])],1),s("primary-button",{staticClass:"t-backup_reveal_warning_view-next my-4 w-full",attrs:{disabled:!e.disclaimerAcknowledged,title:e.$t("general.next")},on:{click:e.revealPhrase}})],1)])],1)},r=[],l=(a(57658),a(87307)),i=a(74293),c=a(45510),n=a(56258),o=a(25108),u={name:"BackupRevealWarning",components:{PrimaryButton:l.Z,TopBar:i.Z,OperaCheckbox:c.Z},data(){return{backupPhrase:"",disclaimerAcknowledged:!1}},async created(){await this.getSecretPhrase()},methods:{async getSecretPhrase(){try{this.backupPhrase=await this.$wallet.getSecretPhrase()}catch{this.$router.go(-1)}},async revealPhrase(){try{this.$router.push({name:"Backup",params:{backupPhrase:this.backupPhrase,onboarding:this.$store.getters.onboardingOngoing}}),n.Z.sendStatsEvent(n.Z.types.CLICK,"wt_setpwd_suc")}catch(e){o.error(e),n.Z.sendStatsEvent(n.Z.types.CLICK,"wt_setpwd_fail")}},change(e){this.disclaimerAcknowledged=e}}},h=u,d=a(1001),p=(0,d.Z)(h,s,r,!1,null,null,null),m=p.exports},64220:function(e,t,a){e.exports=a.p+"img/secure_backup_phrase.3ee781c0.svg"}}]);