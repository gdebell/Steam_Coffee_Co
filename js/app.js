// sample angular code

(function() {

  'use strict';

  angular
    .module('CartApp', [
      'ngRoute',
      'CartApp.config',
      'CartApp.service.stock',
      'CartApp.controller.stock',
      'CartApp.config.stock',
      'CartApp.components.checkout'
    ]);

})();
