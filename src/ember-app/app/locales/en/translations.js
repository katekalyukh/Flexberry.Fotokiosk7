import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokiosk7КлиентLForm from './forms/i-i-s-fotokiosk7-клиент-l';
import IISFotokiosk7ОплатаLForm from './forms/i-i-s-fotokiosk7-оплата-l';
import IISFotokiosk7ОтправНаПочтуLForm from './forms/i-i-s-fotokiosk7-отправ-на-почту-l';
import IISFotokiosk7ПечатьLForm from './forms/i-i-s-fotokiosk7-печать-l';
import IISFotokiosk7СделатьФотоLForm from './forms/i-i-s-fotokiosk7-сделать-фото-l';
import IISFotokiosk7КлиентEForm from './forms/i-i-s-fotokiosk7-клиент-e';
import IISFotokiosk7ОплатаEForm from './forms/i-i-s-fotokiosk7-оплата-e';
import IISFotokiosk7ОтправНаПочтуEForm from './forms/i-i-s-fotokiosk7-отправ-на-почту-e';
import IISFotokiosk7ПечатьEForm from './forms/i-i-s-fotokiosk7-печать-e';
import IISFotokiosk7СделатьФотоEForm from './forms/i-i-s-fotokiosk7-сделать-фото-e';
import IISFotokiosk7ДопНастройкиModel from './models/i-i-s-fotokiosk7-доп-настройки';
import IISFotokiosk7КлиентModel from './models/i-i-s-fotokiosk7-клиент';
import IISFotokiosk7ОплатаModel from './models/i-i-s-fotokiosk7-оплата';
import IISFotokiosk7ОтправНаПочтуModel from './models/i-i-s-fotokiosk7-отправ-на-почту';
import IISFotokiosk7ПечатьModel from './models/i-i-s-fotokiosk7-печать';
import IISFotokiosk7СделатьФотоModel from './models/i-i-s-fotokiosk7-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk7-доп-настройки': IISFotokiosk7ДопНастройкиModel,
    'i-i-s-fotokiosk7-клиент': IISFotokiosk7КлиентModel,
    'i-i-s-fotokiosk7-оплата': IISFotokiosk7ОплатаModel,
    'i-i-s-fotokiosk7-отправ-на-почту': IISFotokiosk7ОтправНаПочтуModel,
    'i-i-s-fotokiosk7-печать': IISFotokiosk7ПечатьModel,
    'i-i-s-fotokiosk7-сделать-фото': IISFotokiosk7СделатьФотоModel
  },

  'application-name': 'Fotokiosk7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fotokiosk7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk7',
          title: 'Fotokiosk7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        fotokiosk7: {
          caption: 'Fotokiosk7',
          title: 'Fotokiosk7',
          'i-i-s-fotokiosk7-отправ-на-почту-l': {
            caption: 'Отправ на почту',
            title: ''
          },
          'i-i-s-fotokiosk7-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk7-сделать-фото-l': {
            caption: 'Сделать фото',
            title: ''
          },
          'i-i-s-fotokiosk7-печать-l': {
            caption: 'Печать',
            title: ''
          },
          'i-i-s-fotokiosk7-оплата-l': {
            caption: 'Оплата',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fotokiosk7-клиент-l': IISFotokiosk7КлиентLForm,
    'i-i-s-fotokiosk7-оплата-l': IISFotokiosk7ОплатаLForm,
    'i-i-s-fotokiosk7-отправ-на-почту-l': IISFotokiosk7ОтправНаПочтуLForm,
    'i-i-s-fotokiosk7-печать-l': IISFotokiosk7ПечатьLForm,
    'i-i-s-fotokiosk7-сделать-фото-l': IISFotokiosk7СделатьФотоLForm,
    'i-i-s-fotokiosk7-клиент-e': IISFotokiosk7КлиентEForm,
    'i-i-s-fotokiosk7-оплата-e': IISFotokiosk7ОплатаEForm,
    'i-i-s-fotokiosk7-отправ-на-почту-e': IISFotokiosk7ОтправНаПочтуEForm,
    'i-i-s-fotokiosk7-печать-e': IISFotokiosk7ПечатьEForm,
    'i-i-s-fotokiosk7-сделать-фото-e': IISFotokiosk7СделатьФотоEForm
  },

});

export default translations;
