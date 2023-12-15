import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fotokiosk7.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk7.title'),
          children: [{
            link: 'i-i-s-fotokiosk7-отправ-на-почту-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-отправ-на-почту-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-отправ-на-почту-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-fotokiosk7-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-клиент-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-fotokiosk7-сделать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-сделать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-сделать-фото-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-fotokiosk7-печать-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-печать-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-печать-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-fotokiosk7-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk7.i-i-s-fotokiosk7-оплата-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})