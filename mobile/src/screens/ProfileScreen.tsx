import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { changeAppLanguage } from '../i18n';
import type { SupportedLanguage } from '../i18n/languageStorage';

export default function ProfileScreen() {
  const { t, i18n } = useTranslation();

  const languages: {
    code: SupportedLanguage;
    label: string;
  }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
  ];

  const handleLanguageChange = async (
    language: SupportedLanguage
  ) => {
    try {
      await changeAppLanguage(language);
    } catch (error) {
      console.error('Language change error:', error);

      Alert.alert(
        t('common.error'),
        t('settings.languageError')
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t('screens.profile')}
      </Text>

      <Text style={styles.sectionTitle}>
        {t('settings.title')}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          {t('settings.language')}
        </Text>

        <Text style={styles.description}>
          {t('settings.selectLanguage')}
        </Text>

        {languages.map((language) => {
          const isSelected =
            i18n.resolvedLanguage === language.code;

          return (
            <Pressable
              key={language.code}
              accessibilityRole="radio"
              accessibilityState={{ checked: isSelected }}
              style={[
                styles.languageOption,
                isSelected && styles.selectedOption,
              ]}
              onPress={() =>
                handleLanguageChange(language.code)
              }
            >
              <Text style={styles.languageText}>
                {language.label}
              </Text>

              <Ionicons
                name={
                  isSelected
                    ? 'checkmark-circle'
                    : 'ellipse-outline'
                }
                size={24}
                color={isSelected ? '#171717' : '#737373'}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#737373',
    marginBottom: 20,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 8,
  },
  selectedOption: {
    borderColor: '#171717',
  },
  languageText: {
    fontSize: 16,
  },
});
