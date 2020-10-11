import React from 'react';

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18n.init({
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
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
