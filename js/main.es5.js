"use strict";

$(document).ready(function () {
  var product1 = new Product(123, 'Ноутбук', 45600);
  var product2 = new Product(124, 'Клавиатура', 1200);
  var product3 = new Product(125, 'Мышь для ПК', 600);
  var mycart = new Cart('getCart.json');
  $('.buyBtn').click(function (e) {
    mycart._addProduct(e.target);
  }); // $('#cart').on('click', '.del-btn', () => {});

  var feed = new Feedback('feedback.json');
});