(function() {
  'use strict';
  angular
    .module('CartApp.controller.stock', [])
    .controller('StockController', StockController)
    .controller('CategoriesController', CategoriesController);

  StockController.$inject = ['StockService'];

  function StockController (StockService) {
    /*jshint validthis: true */
    this.productsArray = StockService.productsArray;
  }

  function CategoriesController (StockService) {
    var itemList = StockService.productsArray;
    let categoryList = [];
    let matchName = [];

    itemList.forEach(function(item) {
        for (var i = 0; i < item.categories.length; i++) {
          if (categoryList.indexOf(item.categories[i]) === -1) {
            categoryList.push(item.categories[i]);
          }
        }
      });
    this.categoriesArray = categoryList;

    this.getItem = function (search) {
        itemList.forEach(function(singleProduct, $rootScope) {
          var itemListCat = singleProduct.categories;
          itemListCat.forEach(function(itemInList) {
            if (itemInList === search) {
              matchName.push(singleProduct.name);
            }
          });
        });
        //console.log(matchName);
        this.matchArray = matchName;
      };
  }
})();
