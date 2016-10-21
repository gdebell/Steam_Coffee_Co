// sample angular code

(function() {

  'use strict';

  angular
    .module('CartApp', [
      'CartApp.service.stock',
      'CartApp.controller.stock',
      'CartApp.config.stock'
    ]);

})();
