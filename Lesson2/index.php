<?php
function __autoload($className){
    include "classes/$className.php";
}
//цифровой продукт
$digitalProduct = new DigitalProduct(2,'Phone');
echo "Digital Product:<br>Final price: " . $digitalProduct->getFinalPrice() . " | Profit: " . $digitalProduct->finalProfit();
echo '<br>';
//штукчный товар
$physicalProduct = new PhysicalProduct(2,'Phone');
echo "Physical Product:<br>Final price: " . $physicalProduct->getFinalPrice() . " | Profit: " . $physicalProduct->finalProfit();
echo '<br>';
//весовой товар
$weightProduct = new WeightProduct(2,'Phone', 26);
echo "Weight Product:<br>Final price: " . $weightProduct->getFinalPrice() . " | Profit: " . $weightProduct->finalProfit();
echo '<br>';

//--------------------------------------- Задание №2 -----------------------------------------

class MySingletone{
    use MyTrait;    //трейт синглтона

    public $a;   //переменная для теста

    public function writeMyClass(){
        var_dump(self::$instance);
        echo '<br>';
    }
}

$firstObj = MySingletone::getInstance();
$secondObj = MySingletone::getInstance();
$firstObj->a = 12;
$secondObj->a = 39;
//строки ниже выводят 39 и 39, т.к. $firstObj и $secondObj ссылаются на один и тот же объект, id объекттов тоже одинаковые
$firstObj->writeMyClass();  //39
$secondObj->writeMyClass(); //39