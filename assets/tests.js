'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s fotokiosk7 клиент l');

  (0, _qunit.test)('testing i-i-s-fotokiosk7-клиент-l', function (assert) {
    var _this = this;

    visit('/i-i-s-fotokiosk7-клиент-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s fotokiosk7 оплата l');

  (0, _qunit.test)('testing i-i-s-fotokiosk7-оплата-l', function (assert) {
    var _this = this;

    visit('/i-i-s-fotokiosk7-оплата-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s fotokiosk7 отправ на почту l');

  (0, _qunit.test)('testing i-i-s-fotokiosk7-отправ-на-почту-l', function (assert) {
    var _this = this;

    visit('/i-i-s-fotokiosk7-отправ-на-почту-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s fotokiosk7 печать l');

  (0, _qunit.test)('testing i-i-s-fotokiosk7-печать-l', function (assert) {
    var _this = this;

    visit('/i-i-s-fotokiosk7-печать-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s fotokiosk7 сделать фото l');

  (0, _qunit.test)('testing i-i-s-fotokiosk7-сделать-фото-l', function (assert) {
    var _this = this;

    visit('/i-i-s-fotokiosk7-сделать-фото-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-fotokiosk7-\u0432\u0438\u0434-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-fotokiosk7-\u0432\u0438\u0434-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-fotokiosk7-\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-fotokiosk7-\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-fotokiosk7-\u0432\u0438\u0434-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-fotokiosk7-\u0432\u0438\u0434-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-fotokiosk7-\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-fotokiosk7-\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-клиент-e', 'Unit | Controller | i-i-s-fotokiosk7-клиент-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-клиент-l', 'Unit | Controller | i-i-s-fotokiosk7-клиент-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-оплата-e', 'Unit | Controller | i-i-s-fotokiosk7-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-оплата-l', 'Unit | Controller | i-i-s-fotokiosk7-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-отправ-на-почту-e', 'Unit | Controller | i-i-s-fotokiosk7-отправ-на-почту-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-отправ-на-почту-l', 'Unit | Controller | i-i-s-fotokiosk7-отправ-на-почту-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-печать-e', 'Unit | Controller | i-i-s-fotokiosk7-печать-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-печать-l', 'Unit | Controller | i-i-s-fotokiosk7-печать-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-сделать-фото-e', 'Unit | Controller | i-i-s-fotokiosk7-сделать-фото-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-fotokiosk7-сделать-фото-l', 'Unit | Controller | i-i-s-fotokiosk7-сделать-фото-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-доп-настройки', 'Unit | Model | i-i-s-fotokiosk7-доп-настройки', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-клиент', 'Unit | Model | i-i-s-fotokiosk7-клиент', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-оплата', 'Unit | Model | i-i-s-fotokiosk7-оплата', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-отправ-на-почту', 'Unit | Model | i-i-s-fotokiosk7-отправ-на-почту', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-печать', 'Unit | Model | i-i-s-fotokiosk7-печать', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-сделать-фото', 'Unit | Model | i-i-s-fotokiosk7-сделать-фото', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-клиент-e', 'Unit | Route | i-i-s-fotokiosk7-клиент-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-клиент-l', 'Unit | Route | i-i-s-fotokiosk7-клиент-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-оплата-e', 'Unit | Route | i-i-s-fotokiosk7-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-оплата-l', 'Unit | Route | i-i-s-fotokiosk7-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-отправ-на-почту-e', 'Unit | Route | i-i-s-fotokiosk7-отправ-на-почту-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-отправ-на-почту-l', 'Unit | Route | i-i-s-fotokiosk7-отправ-на-почту-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-печать-e', 'Unit | Route | i-i-s-fotokiosk7-печать-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-печать-l', 'Unit | Route | i-i-s-fotokiosk7-печать-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-сделать-фото-e', 'Unit | Route | i-i-s-fotokiosk7-сделать-фото-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-fotokiosk7-сделать-фото-l', 'Unit | Route | i-i-s-fotokiosk7-сделать-фото-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-fotokiosk7-\u0434\u043E\u043F-\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-доп-настройки', 'Unit | Serializer | i-i-s-fotokiosk7-доп-настройки', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-fotokiosk7-доп-настройки', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-fotokiosk7-вид-оплаты', 'transform:i-i-s-fotokiosk7-категория', 'model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-fotokiosk7-\u043A\u043B\u0438\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-клиент', 'Unit | Serializer | i-i-s-fotokiosk7-клиент', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-fotokiosk7-клиент', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-fotokiosk7-вид-оплаты', 'transform:i-i-s-fotokiosk7-категория', 'model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-fotokiosk7-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-оплата', 'Unit | Serializer | i-i-s-fotokiosk7-оплата', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-fotokiosk7-оплата', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-fotokiosk7-вид-оплаты', 'transform:i-i-s-fotokiosk7-категория', 'model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-fotokiosk7-\u043E\u0442\u043F\u0440\u0430\u0432-\u043D\u0430-\u043F\u043E\u0447\u0442\u0443-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-отправ-на-почту', 'Unit | Serializer | i-i-s-fotokiosk7-отправ-на-почту', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-fotokiosk7-отправ-на-почту', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-fotokiosk7-вид-оплаты', 'transform:i-i-s-fotokiosk7-категория', 'model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-fotokiosk7-\u043F\u0435\u0447\u0430\u0442\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-печать', 'Unit | Serializer | i-i-s-fotokiosk7-печать', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-fotokiosk7-печать', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-fotokiosk7-вид-оплаты', 'transform:i-i-s-fotokiosk7-категория', 'model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-fotokiosk7-\u0441\u0434\u0435\u043B\u0430\u0442\u044C-\u0444\u043E\u0442\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-fotokiosk7-сделать-фото', 'Unit | Serializer | i-i-s-fotokiosk7-сделать-фото', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-fotokiosk7-сделать-фото', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-fotokiosk7-вид-оплаты', 'transform:i-i-s-fotokiosk7-категория', 'model:i-i-s-fotokiosk7-доп-настройки', 'model:i-i-s-fotokiosk7-клиент', 'model:i-i-s-fotokiosk7-оплата', 'model:i-i-s-fotokiosk7-отправ-на-почту', 'model:i-i-s-fotokiosk7-печать', 'model:i-i-s-fotokiosk7-сделать-фото', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
