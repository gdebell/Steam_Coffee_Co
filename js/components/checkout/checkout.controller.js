(function() {
  'use strict';

  angular
    .module('CartApp.components.checkout', [])
    .controller('CartController', CartController);

  CartController.$inject = ['$scope', 'CartService'];

  function CartController ($scope, CartService) {
      this.order =  CartService.returnCart();
      console.log(this.order);
    };

})();
