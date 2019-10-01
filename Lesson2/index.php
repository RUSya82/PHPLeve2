<?php
function __autoload($className){
    include "classes/$className.php";
}

$digitalProduct = new DigitalProduct(2,'Phone');
echo "Digital Product:<br>Final price: " . $digitalProduct->getFinalPrice() . " | Profit: " . $digitalProduct->finalProfit();
echo '<br>';
$physicalProduct = new PhysicalProduct(2,'Phone');
echo "Physical Product:<br>Final price: " . $physicalProduct->getFinalPrice() . " | Profit: " . $physicalProduct->finalProfit();
echo '<br>';
$weightProduct = new WeightProduct(2,'Phone', 26);
echo "Weight Product:<br>Final price: " . $weightProduct->getFinalPrice() . " | Profit: " . $weightProduct->finalProfit();
echo '<br>';