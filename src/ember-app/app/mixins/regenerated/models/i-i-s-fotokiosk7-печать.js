import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  размер: DS.attr('string'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk7-сделать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  размер: {
    descriptionKey: 'models.i-i-s-fotokiosk7-печать.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk7-печать.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьE', 'i-i-s-fotokiosk7-печать', {
    сделатьФото: belongsTo('i-i-s-fotokiosk7-сделать-фото', 'Сделанное фото', {
      категорФото: attr('Сделанное фото', { index: 0 }),
      колВоФото: attr('Количество фото', { index: 2, hidden: true })
    }, { index: -1, hidden: true }),
    размер: attr('Размер фото', { index: 1 })
  });

  modelClass.defineProjection('ПечатьL', 'i-i-s-fotokiosk7-печать', {
    сделатьФото: belongsTo('i-i-s-fotokiosk7-сделать-фото', 'Сделанное фото', {
      категорФото: attr('Сделанное фото', { index: 0 }),
      колВоФото: attr('Количество фото', { index: 2 })
    }, { index: -1, hidden: true }),
    размер: attr('Размер фото', { index: 1 })
  });
};
