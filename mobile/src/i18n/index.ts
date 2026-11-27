import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './locales/en.json';
import es from './locales/es.json';

import {
  getSavedLanguage,
  saveLanguage,
} from './languageStorage';

import type { SupportedLanguage } from './languageStorage';

function getDeviceLanguage(): SupportedLanguage {
  const deviceLanguage = getLocales()[0]?.languageCode;

  return deviceLanguage === 'es' ? 'es' : 'en';
}

export async function initializeI18n(): Promise<void> {
  let language = getDeviceLanguage();

  try {
    const savedLanguage = await getSavedLanguage();

    if (savedLanguage) {
      language = savedLanguage;
    }
  } catch (error) {
    console.warn('Could not load saved language:', error);
  }

  await i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: language,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export async function changeAppLanguage(
  language: SupportedLanguage
): Promise<void> {
  await i18n.changeLanguage(language);
  await saveLanguage(language);
}

export default i18n;
