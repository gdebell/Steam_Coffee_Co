(function () {
  'use strict';

  angular
    .module('CartApp.service.stock', [])
    .service('StockService', StockService)
    .service('CartService', CartService);

  function CartService () {
    let shoppingCartArray = [];
    let array;

    this.fillCart = (info) => {
      if (info.quantity === undefined) {
        info.quantity = 1;
      }

      shoppingCartArray.push({
        cartId: info.coffee.id,
        cartName: info.coffee.name,
        cartIngredients: info.coffee.ingredients,
        cartCaffeineScale: info.coffee.caffeineScale,
        cartPrice: info.coffee.price,
        cartInStock: info.coffee.inStock,
        cartRating: info.coffee.rating,
        cartImageUrl: info.coffee.imageUrl,
        cartCategories: info.coffee.categories,
        cartQuantity: info.quantity,
        cartSubtotal: (info.quantity * info.coffee.price)
      });
      console.log('log # 2 ORDER', shoppingCartArray);
      return shoppingCartArray;
    };

    this.returnCart = function () {
      return shoppingCartArray;
    };
  }

  function StockService() {
    this.productsArray = [
        {
          id: 5,
          name: 'Latte',
          ingredients: 'Milk, Brewed Expresso, Water',
          caffeineScale: 150,
          price: 3.75,
          inStock: false,
          rating: 3,
          imageUrl: 'http://globalassets.starbucks.com/assets/bb7009e9bbe4448c8480fa2cf3d2bbd8.jpg',
          categories: ['Iced', 'Hot']
        },
        {
          id: '55c8ee82152165d244b98300',
          name: 'Caramel Macchiato',
          ingredients: 'Milk, Brewed Expresso, Vanilla Syrup, Caramel Sauce, Water, Cream',
          caffeineScale: 175,
          price: 4.50,
          inStock: true,
          rating: 5,
          imageUrl: 'http://globalassets.starbucks.com/assets/72337f2d35f44d1daeb0c28d96026ef8.jpg',
          categories: ['Iced', 'Hot', 'Vanilla', 'Caramel']
        },
        {
          id: '55c8ee82152165d244b98300',
          name: 'Pumpkin Spice Latte',
          ingredients: 'Milk, Brewed Expresso, Water, Pumpkin Spice Sauce, Whip Cream, Cinnamon, Ginger, Nutmeg, Clove',
          caffeineScale: 150,
          price: 4.75,
          inStock: true,
          rating: 4,
          imageUrl: 'http://globalassets.starbucks.com/assets/2bbf214e23d846b18452befd26b975df.jpg',
          categories: ['Iced', 'Hot', 'Whip Cream', 'Pumpkin']
        },
        {
          id: '55c8ee82152165d244b98300',
          name: 'Chai Crème Frappuccino',
          ingredients: 'Milk, Brewed Expresso, Ice, Cream Frappuccino Syrup, Chai Tea Concentrate, Ginger, Whip Cream, Cinnamon, Water',
          caffeineScale: 40,
          price: 4.00,
          inStock: true,
          rating: 3,
          imageUrl: 'http://globalassets.starbucks.com/assets/f8b88e6bef7741acbc75a7c2422f59b9.jpg',
          categories: ['Iced', 'Chai', 'Cinnamon']
        }
      ];
  }
})();
