import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, es, de } from './locales';

const options = {
    debug: true,

    resources: {
        en: {
            common: en.en,
        },
        es: {
            common: es['es-ES'],
        },
        de: {
            common: de['de-DE'],
        },
    },

    fallbackLng: 'en',

    ns: ['common'],

    defaultNS: 'common',

    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
    },
};

i18n
    .use(LanguageDetector)
    .init(options);

export default i18n;
