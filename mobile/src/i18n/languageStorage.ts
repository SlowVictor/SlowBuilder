import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = '@slowbuilder/language';

export type SupportedLanguage = 'en' | 'es';

export async function getSavedLanguage(): Promise<SupportedLanguage | null> {
  const language = await AsyncStorage.getItem(LANGUAGE_KEY);

  if (language === 'en' || language === 'es') {
    return language;
  }

  return null;
}

export async function saveLanguage(
  language: SupportedLanguage
): Promise<void> {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
}
