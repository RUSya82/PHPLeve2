"use strict";

function checkoutAccordeon() {
  $('.view-info').each(function (index, item) {
    $(item).on('click', function () {
      $('.checkout-info__article-hide').eq(index).slideToggle(300);
      $('.checkout-info__article-hide').eq(index).css('display', 'flex');
    });
  });
}

;