"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart =
/*#__PURE__*/
function () {
  function Cart(source) {
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#cart-content';

    _classCallCheck(this, Cart);

    this.source = source;
    this.container = container;
    this.countGoods = 0; //Общее кол-во товаров в корзине

    this.amount = 0; // Общая сумма

    this.cartItems = []; //Все товары в корзине

    this._init(this.source);
  }

  _createClass(Cart, [{
    key: "_render",
    value: function _render() {
      $(this.container).empty();
      var $cartItemsDiv = $('<div/>', {
        id: 'cart-items-wrap'
      });
      var $totalPrice = $('<div/>', {
        class: 'cart-content__total'
      });
      $totalPrice.append("<span>total</span><span class=\"cart-content__totalPrice\"></span>");
      $cartItemsDiv.appendTo($(this.container));
      $totalPrice.appendTo($(this.container));
      $(this.container).append('<a class="cart-content__btn" href="checkout.html">checkout</a>');
      $(this.container).append('<a class="cart-content__btn" href="shopping-card.html">go to card</a>');
    }
  }, {
    key: "_renderItem",
    value: function _renderItem(product) {
      var _this = this;

      var $container = $('<div/>', {
        class: 'cart-content-item',
        'data-product': product.id_product
      });
      var $link = $('<a/>', {
        href: "product.html"
      }); // language=HTML

      $link.append($("<img src=\"".concat(product.image, "\" alt=\"").concat(product.product_name, "\">")));
      $container.append($link);
      var $caption = $('<div/>', {
        class: 'item-caption'
      });
      $caption.append($("<div class=\"item-caption__name\">".concat(product.product_name, "</div>")));
      var $stars = $('<div/>', {
        class: 'item-caption__stars'
      });

      for (var i = 0; i < 5; i++) {
        $stars.append($('<i class="fa fa-star"></i>'));
      }

      $caption.append($stars);
      var $priceItem = $('<div/>', {
        class: 'item-caption__price'
      });
      $priceItem.append($("<span class=\"quantity\">".concat(product.quantity, "</span>x <span class=\"price\">$").concat(product.price, "</span>")));
      $caption.append($priceItem);
      $container.append($caption); // let $delBtn = $('<a/>', {
      //     class: 'content-item_delBtn',
      //     'data-id': product.id_product
      // });
      // $delBtn.append($('<i class="fa fa-times-circle fa-sm" ></i>'));

      var $delBtn = $("<a href=\"#\" class=\"content-item_delBtn\" data-id=\"".concat(product.id_product, "\"> <i class=\"fa fa-times-circle fa-sm\" data-id=\"").concat(product.id_product, "\"></i><a/>"));
      $container.append($delBtn);
      $delBtn.click(function (e) {
        e.preventDefault();
        console.log($(e.target).data('id'));

        _this._remove($(e.target).data('id'));
      });
      $('#cart-items-wrap').append($container);
    }
  }, {
    key: "_renderMain",
    value: function _renderMain() {
      var container = $('#main-cart-wrap'); //console.log(container);

      if (container.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.cartItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            this._renderItemMain(item); //console.log(item);

          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      ;
    }
  }, {
    key: "_renderItemMain",
    value: function _renderItemMain(product) {
      var _this2 = this;

      //console.log(6546884698);
      var cartWrap = $('<div/>', {
        class: "table-row",
        'data-product': product.id_product
      }); // language=HTML

      cartWrap.append($("<div class=\"item-of-table\">\n            <a href=\"index.php\"><img src=\"".concat(product.image, "\" alt=\"").concat(product.product_name, "\"></a>\n            </div>")));
      var itemOfTable = $('<div/>', {
        class: "item-of-table main-cart__caption"
      });
      itemOfTable.append($("<h5>".concat(product.product_name, "</h5>")));
      itemOfTable.append($("<p><span>Color:</span>Red</p><p><span>Size:</span>   Xll</p>"));
      cartWrap.append(itemOfTable);
      cartWrap.append($("<div class=\"item-of-table main-cart__price\">$".concat(product.price, "</div>")));
      itemOfTable = $('<div/>', {
        class: "item-of-table main-cart__quantity"
      });
      itemOfTable.append($("<input type=\"number\" data-id = \"product.id_product\" value=\"".concat(product.quantity, "\" min=\"1\" max=\"15\" class=\"item-of-table_quantity\">")));
      cartWrap.append(itemOfTable);
      cartWrap.append($("<div class=\"item-of-table\"> FREE</div>"));
      cartWrap.append($("<div class=\"item-of-table main-cart__totalPrice\"> $".concat(product.quantity * product.price, "</div>")));
      itemOfTable = $('<div/>', {
        class: "item-of-table"
      });
      var $delBtn = $("<a href=\"#\" class=\"main-cart__delBtn\" data-id=\"".concat(product.id_product, "\"> <i class=\"fa fa-times-circle fa-sm\" data-id=\"").concat(product.id_product, "\"></i><a/>")); // let delBtn = $('<a/>',{
      //     class: "main-cart__delBtn",
      //     'data-id': product.id_product
      // });
      // delBtn.append($(`<i class="fa fa-times-circle fa-sm" data-id="${product.id_product}" aria-hidden="true"></i>`));
      //itemOfTable.append($(`<a href="#" class="main-cart__delBtn">
      //<i class="fa fa-times-circle fa-sm" aria-hidden="true"></i></a>`));

      itemOfTable.append($delBtn);
      cartWrap.append(itemOfTable);
      $('#main-cart-wrap').append(cartWrap);
      $delBtn.click(function (e) {
        e.preventDefault();

        _this2._remove($(e.target).data('id')); //this._renderItemMain();


        console.log(111);
      });
    }
  }, {
    key: "_renderSum",
    value: function _renderSum(amount, countGoods) {
      //$('.sum-amount').text(`Всего товаров в корзине: ${countGoods}`);
      $('.cart-content__totalPrice').text("$".concat(amount, " "));
      $('#subtotal').text("$".concat(amount, " "));
      $('#grandtotal').text("$".concat(amount, " "));
    }
  }, {
    key: "_init",
    value: function _init(source) {
      var _this3 = this;

      this._render();

      fetch(source).then(function (result) {
        return result.json();
      }).then(function (data) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data.contents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var product = _step2.value;

            _this3.cartItems.push(product);

            _this3._renderItem(product);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        _this3._renderMain();

        _this3.countGoods = data.countGoods;
        _this3.amount = data.amount;

        _this3._renderSum(data.amount, data.countGoods);
      });
    }
  }, {
    key: "_updateCart",
    value: function _updateCart(product) {
      var $container = $("div[data-product=\"".concat(product.id_product, "\"]"));
      $container.find('.quantity').text(product.quantity);
      $container.find('.item-of-table_quantity').val(product.quantity); //$container.find('.product-price').text(`${product.quantity*product.price} руб.`);
      //console.log($container.find('.main-cart__totalPrice'));

      $container.find('.main-cart__totalPrice').text("$".concat(product.quantity * product.price));
    }
  }, {
    key: "_addProduct",
    value: function _addProduct(element) {
      //console.log(this.cartItems);
      if (this.cartItems.length === 0) this._render();
      var productId = +$(element).data('id');
      var find = this.cartItems.find(function (product) {
        return product.id_product === productId;
      });

      if (find) {
        find.quantity++;
        this.countGoods++;
        this.amount += find.price;

        this._updateCart(find);
      } else {
        var product = {
          id_product: productId,
          price: +$(element).data('price'),
          product_name: $(element).data('name'),
          image: $(element).data('image'),
          quantity: 1
        };
        this.cartItems.push(product);
        this.amount += product.price;
        this.countGoods += product.quantity;

        this._renderItem(product);
      }

      this._renderSum(this.amount, this.countGoods);
    }
  }, {
    key: "_remove",
    value: function _remove(productId) {
      //console.log(this.cartItems);
      var find = this.cartItems.find(function (product) {
        return product.id_product === productId;
      });

      if (find.quantity > 1) {
        find.quantity--;

        this._updateCart(find);
      } else {
        var $container = $("div[data-product=\"".concat(productId, "\"]"));
        this.cartItems.splice(this.cartItems.indexOf(find), 1); //console.log($container);

        $container.remove();
      }

      this.countGoods--;
      this.amount -= find.price; //console.log(this.countGoods);

      if (this.cartItems.length === 0) {
        $(this.container).html('<span id="no-items">You card is empty &#x1f610; </span>');
      }

      this._renderSum(this.amount, this.countGoods); //let totalProduct = find.find('.main-cart__totalPrice');
      //console.log(totalProduct);

    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.cartItems = [];
      $(this.container).empty();
      $(this.container).html('<span id="no-items">You card is empty &#x1f610; </span>');
      $('#main-cart-wrap').empty();
    }
  }]);

  return Cart;
}();