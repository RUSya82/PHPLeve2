"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FeedBack =
/*#__PURE__*/
function () {
  function FeedBack(source, container) {
    _classCallCheck(this, FeedBack);

    this.source = source;
    this.container = $(container); //контейнер для отзывов

    this.feebBackCollection = []; //массив для отзывов

    this._init(this.source);

    this.containerItem = this.container.html(); //шаблон html для отзыва
  }

  _createClass(FeedBack, [{
    key: "_init",
    value: function _init(jsonData) {
      var _this = this;

      fetch(jsonData).then(function (result) {
        return result.json();
      }).then(function (data) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var itemData = _step.value;

            _this.feebBackCollection.push(itemData);
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
      }).then(function () {
        return _this._render();
      }).then(function () {
        return _this._checkListeners();
      }).then(function () {
        _this.container.show();
      });
    }
    /**
     * Функция принимает объект с отзывом и шаблон html отзыва для заполнения
     * И вставляет в шаблон переменнные из объекта
     * @param item Объект отзыва
     * @param itemHTML Шаблон html
     * @returns {string | *} заполненный переменными из item шаблон
     * @private
     */

  }, {
    key: "_renderItem",
    value: function _renderItem(item, itemHTML) {
      //вставляем в плейсхолдеры нужные переменные
      itemHTML = itemHTML.replace(/\{feedbackId}/g, item.id);
      itemHTML = itemHTML.replace(/\{feedbackName\}/, item.name);
      itemHTML = itemHTML.replace(/\{feedbackHeader\}/, item.header);
      itemHTML = itemHTML.replace(/\{feedbackText\}/, item.text);
      return itemHTML;
    }
    /**
     * удаляет элемент
     * @param $element
     * @private
     */

  }, {
    key: "_removeItem",
    value: function _removeItem($element) {
      var remElem = $element.closest('.feedback-item');
      remElem.remove();
    }
    /**
     * отрисовывает все элементы из массива объектов
     * @private
     */

  }, {
    key: "_render",
    value: function _render() {
      this.container.empty();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.feebBackCollection[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          var elem = $(this._renderItem(item, this.containerItem)); //console.log(elem);

          if (+item.moderated === 0) elem.addClass('noModer');
          this.container.append(elem);
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
    }
    /**
     * устанавливает события на кнопки
     * @private
     */

  }, {
    key: "_checkListeners",
    value: function _checkListeners() {
      var _this2 = this;

      //на кнопку "скрыть/показать"
      $('.toggle-bth').click(function (e) {
        if ($(e.target).hasClass('fa')) {
          $(e.target).toggleClass('fa-angle-double-down');
          $(e.target).toggleClass('fa-angle-double-up');
        } else {
          $(e.target).find('.fa').toggleClass('fa-angle-double-down');
          $(e.target).find('.fa').toggleClass('fa-angle-double-up');
        }

        $(e.target).closest('.feedback-item').find('.text').slideToggle(500);
      }); //на кнопку удалить

      $('.remove').click(function (e) {
        var removeID = +$(e.target).data('id');

        var findInd = _this2.feebBackCollection.findIndex(function (element) {
          return +element.id === removeID;
        });

        _this2.feebBackCollection.splice(findInd, 1);

        _this2._removeItem($(e.target));
      }); //на кнопку одобрить

      $('.success').click(function (e) {
        var successID = +$(e.target).data('id');

        var findInd = _this2.feebBackCollection.findIndex(function (element) {
          return +element.id === successID;
        });

        _this2.feebBackCollection[findInd].moderated = "1";
        $(e.target).closest('.feedback-item').removeClass('noModer');
        $(e.target).remove();
      }); //на форму

      $('#sbm').click(function (e) {
        e.preventDefault();

        _this2._addItem($('#name').val(), $('#header').val(), $('#content').val());

        $('#name').val('');
        $('#header').val('');
        $('#content').val(''); //console.log(this.feebBackCollection);
      });
    }
    /**
     * Добавляет отзыв
     * @param nameItem
     * @param headerItem
     * @param contentItem
     * @private
     */

  }, {
    key: "_addItem",
    value: function _addItem(nameItem, headerItem, contentItem) {
      var item = {
        id: String(this.feebBackCollection.length + 1),
        moderated: "0",
        name: nameItem,
        header: headerItem,
        text: contentItem
      };
      this.feebBackCollection.push(item);

      this._renderNewItem(item);
    }
    /**
     * отрисовывает новый отзыв и вешает события на кнопки
     * @param item
     * @private
     */

  }, {
    key: "_renderNewItem",
    value: function _renderNewItem(item) {
      var _this3 = this;

      var elem = $(this._renderItem(item, this.containerItem)); //console.log(item);

      if (+item.moderated === 0) elem.addClass('noModer');
      this.container.append(elem); //this._checkListeners();
      //повесим слушателей событий

      var element = $('.feedback-item').last().children('.toggle-bth');
      element.click(function (e) {
        if ($(e.target).hasClass('fa')) {
          $(e.target).toggleClass('fa-angle-double-down');
          $(e.target).toggleClass('fa-angle-double-up');
        } else {
          $(e.target).find('.fa').toggleClass('fa-angle-double-down');
          $(e.target).find('.fa').toggleClass('fa-angle-double-up');
        }

        $(e.target).closest('.feedback-item').find('.text').slideToggle(500);
      });
      element = $('.feedback-item').last().children('.remove');
      element.click(function (e) {
        var removeID = +$(e.target).data('id');

        var findInd = _this3.feebBackCollection.findIndex(function (element) {
          return +element.id === removeID;
        });

        _this3.feebBackCollection.splice(findInd, 1);

        _this3._removeItem($(e.target));
      });
      element = $('.feedback-item').last().children('.success');
      element.click(function (e) {
        var successID = +$(e.target).data('id');

        var findInd = _this3.feebBackCollection.findIndex(function (element) {
          return +element.id === successID;
        });

        _this3.feebBackCollection[findInd].moderated = "1";
        $(e.target).closest('.feedback-item').removeClass('noModer');
        $(e.target).remove();
      });
    }
  }]);

  return FeedBack;
}();