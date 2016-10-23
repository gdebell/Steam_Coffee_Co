(function() {

  'use strict';

  angular
    .module('CartApp.config', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'js/components/stock/stock.view.html',
        controller: 'CategoriesController',
        controllerAs: 'ctgy'
      })
      .when('/checkout', {
        templateUrl: 'js/components/checkout/checkout.view.html',
        controller: 'CartController',
        controllerAs: 'cartCtgy'
      })
      .when('/about', {
        templateUrl: 'js/components/info/about.view.html'
      })
      .otherwise('/');

    });
})();
