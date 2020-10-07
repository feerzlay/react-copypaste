import React from 'react';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        errors: {
          required: 'Cannot be empty',
          minLength: 'Must be at least {{minLength}} characters long',
          maxLength: 'Must be at most {{maxLength}} characters long',
          wrongUsername: 'Wrong username',
          wrongPassword: 'Wrong password'
        }
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export const ApplicationI18N: React.FC = ({ children }) => {
  // TODO: Add I18nextProvider for SSR support.
  return <>{children}</>;
};
