<?php

/**
 * Class WeightProduct
 * Класс весового продукта, добавлена переменная веса
 * $weight - вес продукта, учитывается при расчёте стоимости
 */
class WeightProduct extends Product
{
    private $weight = 0;
    protected static $price = 10;
    /**
     * WeightProduct constructor.
     * @param int $weight
     * цена расчитывается в зависимости от базовой цены
     */
    public function __construct($id, $name, $weight)
    {
        parent::__construct($id, $name);
        $this->setWeight($weight);
        //self::$price = parent::$price * $this->getWeight();//цена расчитывается в зависимости килограммов
    }

    public function getFinalPrice(){
        return parent::$price * $this->getWeight();
    }

    public function getWeight()
    {
        return $this->weight;
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }


}