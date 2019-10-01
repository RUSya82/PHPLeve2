<?php

/**
 * Class Product
 * абстрактный класс товара
 * $price - базовая цена для все товаров
 */
abstract class Product
{
    private $id;
    private $name;

    protected static $price = 100; // базовая цена товара

    const MY_PROFIT = 30; // прибыль от продажи в процентах

    /**
     * Product constructor.
     * @param $id
     * @param $name
     * @param $price
     */
    public function __construct($id, $name)
    {
        $this->id = $id;
        $this->name = $name;
    }
    // getters & setters
    public static function getPrice()
    {
        return self::$price;
    }

    public static function setPrice($price)
    {
        self::$price = $price;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     * абстрактный метод расчета цены в зависимости от условий задачи
     */
    abstract function getFinalPrice();

    /**
     * @return float|int
     * Метод расчета прибыли с учетом наценки
     */
    public function finalProfit(){
        return self::MY_PROFIT/100 * $this->getFinalPrice();
    }




}