(function() {
  'use strict';

  angular
    .module('CartApp.components.checkout', [])
    .controller('CartController', CartController);

  CartController.$inject = ['CartService'];

  function CartController (CartService) {

    this.addToOrder = function (order) {
      //console.log('In contoroller', order);
      this.userCart = CartService.fillCart(order);
      console.log('Access to data in controller', this.userCart);
      console.log(this.userCart[0].cartName);
    };
  }

})();
