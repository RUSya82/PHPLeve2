"use strict";

function dropdownMenu() {
  var dropBtn = $(".dropdown");
  dropBtn.on('click', function (e) {
    $('.form-search__mbox-pos').slideToggle(200);
  });
  var cardBtn = $('#header__card-img');
  var cardContent = $('#cart-content');
  cardBtn.on('click', function (e) {
    e.preventDefault();
    cardContent.slideToggle(50);
    cardContent.css('display', 'flex');
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    if (!dropBtn.is(e.target) // если клик был не по нашему блоку
    && dropBtn.has(e.target).length === 0) {
      // и не по его дочерним элементам
      $('.form-search__mbox-pos').hide(); // скрываем его
    }

    if (!cardBtn.is(e.target) // если клик был не по нашему блоку
    && cardBtn.parent().has(e.target).length === 0) {
      // и не по его дочерним элементам
      cardContent.hide(); // скрываем его
    }
  });
}