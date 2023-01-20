import { createI18n } from 'vue-i18n';
import languageZhCn from '../lang/zh-cn.js';
import languageEn from '../lang/en.js';
import languageJp from '../lang/jp.js'
import Cookies from "js-cookie";

const messages =  {
    zh: {
        ...languageZhCn,
    },
    en: {
        ...languageEn,
    },
    jp: {
        ...languageJp,
    }
}

const i18n = createI18n({
    locale: Cookies.get('language') || 'zh',
    messages,
})

export default i18n