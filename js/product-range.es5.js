"use strict";

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 5,
    max: 1000000,
    values: [75, 500000],
    slide: function slide(event, ui) {
      $('#min-price').text("$" + $("#slider-range").slider("values", 0));
      $('#max-price').text("$" + $("#slider-range").slider("values", 1));
    }
  });
  $('#min-price').text("$" + $("#slider-range").slider("values", 0));
  $('#max-price').text("$" + $("#slider-range").slider("values", 1));
});