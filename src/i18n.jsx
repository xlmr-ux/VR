// i18n.js
import i18n, { t } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import amTranslation from './locales/am.json';
import omTranslation from './locales/om.json';
import tiTranslation from './locales/ti.json';
import soTranslation from './locales/so.json';
// Import translations for other languages as needed

i18n
  .use(initReactI18next) // Initialize i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      am: {
        translation: amTranslation,
      },
      om: {
        translation: omTranslation,
      },
        ti: {
            translation: tiTranslation,
        },
        so: {
            translation: soTranslation,
        },
      // Add resources for other languages here
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
