import { createI18n } from 'vue-i18n';

 const i18n = createI18n({
    locale: "en",
    messages: {
        en: {
            message: {
                language: "English",
                greeting: "Hello !"
            }
        }
    }
})

export default i18n