class FeedBack {
    constructor (source, container){
        this.source = source;
        this.container = $(container);//контейнер для отзывов
        this.feebBackCollection = [];//массив для отзывов
        this._init(this.source);
        this.containerItem = this.container.html();//шаблон html для отзыва
    }
    _init(jsonData){
        fetch(jsonData)
            .then(result => result.json())
            .then(data => {
                for(let itemData of data){
                    this.feebBackCollection.push(itemData);
                }
            })
            .then(() => this._render())
            .then(() => this._checkListeners())
            .then(() => {this.container.show()})
    }

    /**
     * Функция принимает объект с отзывом и шаблон html отзыва для заполнения
     * И вставляет в шаблон переменнные из объекта
     * @param item Объект отзыва
     * @param itemHTML Шаблон html
     * @returns {string | *} заполненный переменными из item шаблон
     * @private
     */
    _renderItem(item, itemHTML){
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
    _removeItem($element){
        let remElem = $element.closest('.feedback-item');
        remElem.remove();
    }

    /**
     * отрисовывает все элементы из массива объектов
     * @private
     */
    _render(){
        this.container.empty();
        for(let item of this.feebBackCollection){
            let elem = $(this._renderItem(item, this.containerItem));
            //console.log(elem);
            if(+item.moderated === 0)
                elem.addClass('noModer');
            this.container.append(elem);
        }

    }

    /**
     * устанавливает события на кнопки
     * @private
     */
    _checkListeners(){
        //на кнопку "скрыть/показать"
        $('.toggle-bth').click(e => {
            if($(e.target).hasClass('fa')){
                $(e.target).toggleClass('fa-angle-double-down');
                $(e.target).toggleClass('fa-angle-double-up');
            }else{
                $(e.target).find('.fa').toggleClass('fa-angle-double-down');
                $(e.target).find('.fa').toggleClass('fa-angle-double-up');
            }
            $(e.target).closest('.feedback-item').find('.text').slideToggle(500);
        });
        //на кнопку удалить
        $('.remove').click(e => {
            let removeID = +$(e.target).data('id');
            let findInd = this.feebBackCollection.findIndex(element => {
                return +element.id === removeID;
            });
            this.feebBackCollection.splice(findInd, 1);
            this._removeItem($(e.target));
        });
        //на кнопку одобрить
        $('.success').click(e => {
            let successID = +$(e.target).data('id');
            let findInd = this.feebBackCollection.findIndex(element => {
                return +element.id === successID;
            });
            this.feebBackCollection[findInd].moderated = "1";
            $(e.target).closest('.feedback-item').removeClass('noModer');
            $(e.target).remove();
        });
        //на форму
        $('#sbm').click(e => {
            e.preventDefault();
            this._addItem($('#name').val(), $('#header').val(), $('#content').val());
            $('#name').val('');
            $('#header').val('');
            $('#content').val('');
            //console.log(this.feebBackCollection);
        });

    }

    /**
     * Добавляет отзыв
     * @param nameItem
     * @param headerItem
     * @param contentItem
     * @private
     */
    _addItem(nameItem, headerItem, contentItem){
        let item = {
            id: String(this.feebBackCollection.length+1),
            moderated: "0",
            name: nameItem,
            header: headerItem,
            text: contentItem,
        }
        this.feebBackCollection.push(item);
        this._renderNewItem(item);
    }

    /**
     * отрисовывает новый отзыв и вешает события на кнопки
     * @param item
     * @private
     */
    _renderNewItem(item){

        let elem = $(this._renderItem(item, this.containerItem));
        //console.log(item);
        if(+item.moderated === 0)
            elem.addClass('noModer');
        this.container.append(elem);
        //this._checkListeners();
        //повесим слушателей событий
        let element = $('.feedback-item').last().children('.toggle-bth');
        element.click(e => {
            if($(e.target).hasClass('fa')){
                $(e.target).toggleClass('fa-angle-double-down');
                $(e.target).toggleClass('fa-angle-double-up');
            }else{
                $(e.target).find('.fa').toggleClass('fa-angle-double-down');
                $(e.target).find('.fa').toggleClass('fa-angle-double-up');
            }
            $(e.target).closest('.feedback-item').find('.text').slideToggle(500);
        });
        element = $('.feedback-item').last().children('.remove');
        element.click(e => {
            let removeID = +$(e.target).data('id');
            let findInd = this.feebBackCollection.findIndex(element => {
                return +element.id === removeID;
            });
            this.feebBackCollection.splice(findInd, 1);
            this._removeItem($(e.target));
        })
        element = $('.feedback-item').last().children('.success');
        element.click(e => {
            let successID = +$(e.target).data('id');
            let findInd = this.feebBackCollection.findIndex(element => {
                return +element.id === successID;
            });
            this.feebBackCollection[findInd].moderated = "1";
            $(e.target).closest('.feedback-item').removeClass('noModer');
            $(e.target).remove();
        });
    }
}