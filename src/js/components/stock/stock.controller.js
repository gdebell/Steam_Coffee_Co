(function() {
  'use strict';
  angular
    .module('CartApp.controller.stock', [])
    .controller('StockController', StockController);

  StockController.$inject = ['StockService'];

  function StockController (StockService) {
    /*jshint validthis: true */
    this.name = 'yo';
    this.productsArray = StockService.productsArray;
  }

})();
