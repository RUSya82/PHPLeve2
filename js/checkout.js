function checkoutAccordeon(){
    $('.view-info').each((index, item) => {
        $(item).on('click', () => {
            $('.checkout-info__article-hide').eq(index).slideToggle(300);
            $('.checkout-info__article-hide').eq(index).css('display', 'flex');
        });
    });
};