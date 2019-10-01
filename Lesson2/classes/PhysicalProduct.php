<?php

/**
 * Class PhysicalProduct
 * Штучный товар
 */
class PhysicalProduct extends Product
{

    /**
     * @return mixed
     * метод расчета цены в зависимости от условий задачи
     */
    public function getFinalPrice(){
        return parent::$price;
    }
}