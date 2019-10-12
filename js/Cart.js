class Cart {
    constructor(source, container='#cart-content'){
        this.source = source;
        this.container = container;
        this.countGoods = 0; //Общее кол-во товаров в корзине
        this.amount = 0; // Общая сумма
        this.cartItems = []; //Все товары в корзине
        this._init(this.source);
    }
    _render(){
        $(this.container).empty();
        let $cartItemsDiv = $('<div/>', {
            id: 'cart-items-wrap'
        });
            let $totalPrice = $('<div/>', {
                class: 'cart-content__total'
            });
            $totalPrice.append(`<span>total</span><span class="cart-content__totalPrice"></span>`);
        $cartItemsDiv.appendTo($(this.container));
            $totalPrice.appendTo($(this.container));
            $(this.container).append('<a class="cart-content__btn" href="checkout.html">checkout</a>');
            $(this.container).append('<a class="cart-content__btn" href="shopping-card.html">go to card</a>');


    }
    _renderItem(product){
        let $container = $('<div/>', {
            class: 'cart-content-item',
            'data-product': product.id_product
        });
        let $link = $('<a/>', {
            href: "product.html"
        });
        // language=HTML
        $link.append($(`<img src="${product.image}" alt="${product.product_name}">`));
        $container.append($link);
        let $caption = $('<div/>', {
            class: 'item-caption'
        });
        $caption.append($(`<div class="item-caption__name">${product.product_name}</div>`));
        let $stars = $('<div/>', {
            class: 'item-caption__stars'
        });
        for(let i = 0; i < 5; i++){
            $stars.append($('<i class="fa fa-star"></i>'));
        }
        $caption.append($stars);
        let $priceItem = $('<div/>', {
            class: 'item-caption__price'
        });
        $priceItem.append($(`<span class="quantity">${product.quantity}</span>x <span class="price">$${product.price}</span>`));
        $caption.append($priceItem);
        $container.append($caption);
        // let $delBtn = $('<a/>', {
        //     class: 'content-item_delBtn',
        //     'data-id': product.id_product
        // });
        // $delBtn.append($('<i class="fa fa-times-circle fa-sm" ></i>'));
        let $delBtn = $(`<a href="#" class="content-item_delBtn" data-id="${product.id_product}"> <i class="fa fa-times-circle fa-sm" data-id="${product.id_product}"></i><a/>`);
        $container.append($delBtn);
        $delBtn.click((e) => {
            e.preventDefault();
            console.log($(e.target).data('id'));
           this._remove($(e.target).data('id'));
        });
        $('#cart-items-wrap').append($container);
    }
    _renderMain(){
        let container = $('#main-cart-wrap');
        //console.log(container);
        if(container.length){
            for(let item of this.cartItems){
                this._renderItemMain(item);
                //console.log(item);
            }
        };

    }
    _renderItemMain(product){
        //console.log(6546884698);
        let  cartWrap = $('<div/>',{
            class: "table-row",
            'data-product': product.id_product,
        });
        // language=HTML
        cartWrap.append($(`<div class="item-of-table">
            <a href="product.html"><img src="${product.image}" alt="${product.product_name}"></a>
            </div>`));
        let  itemOfTable = $('<div/>',{
            class: "item-of-table main-cart__caption",
        });
        itemOfTable.append($(`<h5>${product.product_name}</h5>`));
        itemOfTable.append($(`<p><span>Color:</span>Red</p><p><span>Size:</span>   Xll</p>`));
        cartWrap.append(itemOfTable);
        cartWrap.append($(`<div class="item-of-table main-cart__price">$${product.price}</div>`));
        itemOfTable = $('<div/>',{
            class: "item-of-table main-cart__quantity",
        });
        itemOfTable.append($(`<input type="number" data-id = "product.id_product" value="${product.quantity}" min="1" max="15" class="item-of-table_quantity">`));
        cartWrap.append(itemOfTable);
        cartWrap.append($(`<div class="item-of-table"> FREE</div>`));
        cartWrap.append($(`<div class="item-of-table main-cart__totalPrice"> $${product.quantity*product.price}</div>`));
        itemOfTable = $('<div/>', {
            class: "item-of-table",
        });
        let $delBtn = $(`<a href="#" class="main-cart__delBtn" data-id="${product.id_product}"> <i class="fa fa-times-circle fa-sm" data-id="${product.id_product}"></i><a/>`);
        // let delBtn = $('<a/>',{
        //     class: "main-cart__delBtn",
        //     'data-id': product.id_product
        // });
        // delBtn.append($(`<i class="fa fa-times-circle fa-sm" data-id="${product.id_product}" aria-hidden="true"></i>`));
        //itemOfTable.append($(`<a href="#" class="main-cart__delBtn">
            //<i class="fa fa-times-circle fa-sm" aria-hidden="true"></i></a>`));

        itemOfTable.append($delBtn);
        cartWrap.append(itemOfTable);

        $('#main-cart-wrap').append(cartWrap);
        $delBtn.click((e) => {
            e.preventDefault();
            this._remove($(e.target).data('id'));
            //this._renderItemMain();
            console.log(111);
        });
    }
    _renderSum(amount, countGoods){
        //$('.sum-amount').text(`Всего товаров в корзине: ${countGoods}`);
        $('.cart-content__totalPrice').text(`$${amount} `);
        $('#subtotal').text(`$${amount} `);
        $('#grandtotal').text(`$${amount} `);
    }
    _init(source){
        this._render();
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents){
                    this.cartItems.push(product);
                    this._renderItem(product);

                }
                this._renderMain();
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum(data.amount, data.countGoods);
            })

    }
    _updateCart(product){
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.quantity').text(product.quantity);
        $container.find('.item-of-table_quantity').val(product.quantity);
        //$container.find('.product-price').text(`${product.quantity*product.price} руб.`);
        //console.log($container.find('.main-cart__totalPrice'));
        $container.find('.main-cart__totalPrice').text(`$${product.quantity*product.price}`);
    }
    _addProduct(element){
        //console.log(this.cartItems);
        if(this.cartItems.length === 0)
            this._render();
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find) {
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
        } else {
            let product = {
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
    _remove(productId){
        //console.log(this.cartItems);
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find.quantity > 1) {
            find.quantity--;
            this._updateCart(find);
        } else {
            let $container = $(`div[data-product="${productId}"]`);
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            //console.log($container);
            $container.remove();

        }
        this.countGoods--;
        this.amount -= find.price;
        //console.log(this.countGoods);
        if(this.cartItems.length === 0){
            $(this.container).html('<span id="no-items">You card is empty &#x1f610; </span>');
        }
        this._renderSum(this.amount, this.countGoods);


        //let totalProduct = find.find('.main-cart__totalPrice');
        //console.log(totalProduct);

    }
    _clear(){
        this.cartItems = [];
        $(this.container).empty();
        $(this.container).html('<span id="no-items">You card is empty &#x1f610; </span>');
        $('#main-cart-wrap').empty();
    }
}
