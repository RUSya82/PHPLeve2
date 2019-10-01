<?php

/**
 * Class DigitalProduct
 * Цифровой товар
 * protected static $price - цена товара
 */
class DigitalProduct extends Product
{


    public function getFinalPrice(){
        return parent::$price / 2;
    }
}