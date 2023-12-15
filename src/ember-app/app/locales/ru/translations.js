import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk7',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk7',
          title: 'Fotokiosk7'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
