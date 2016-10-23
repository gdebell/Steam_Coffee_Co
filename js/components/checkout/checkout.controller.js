(function() {
  'use strict';

  angular
    .module('CartApp.components.checkout', [])
    .controller('CartController', CartController);

  CartController.$inject = ['CartService'];

  function CartController (CartService) {
    let shoppingBag = [];

    this.addToOrder = function (order) {
      //console.log('In contoroller', order);
      shoppingBag.push(order);
      CartService.fillCart(shoppingBag);
    };
  }

})();
