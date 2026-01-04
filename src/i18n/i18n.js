import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs/index.js'
import {I18N_KEY} from "@/common/const/constant";

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale:uni.getStorageSync(I18N_KEY)||'cn',
    messages,
})
export default i18n

/*
*  元素中使用:<div>{{$t('message.name')}}</div>
*  js中使用:this.$t('message.name')
*
* */