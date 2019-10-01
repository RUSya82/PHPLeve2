<?php

/**
 * Class DigitalProduct
 * Цифровой товар
 * protected static $price - цена товара
 */
class DigitalProduct extends Product
{

    //цена в два раза меньше базовой
    public function getFinalPrice(){
        return parent::$price / 2;
    }
}