<?php
//1. Придумать класс, который описывает любую сущность из предметной области интернет-магазинов:
// продукт, ценник, посылка и т.п.
//2. Описать свойства класса из п.1 (состояние).
//3. Описать поведение класса из п.1 (методы).
//4. Придумать наследников класса из п.1. Чем они будут отличаться?

/**
 * Class Product
 * protected $id - id
*  protected $name - наименование
*  protected $price - цена
 */
class Product{
    protected $id;
    protected $name;
    protected $price;

    public function __construct($id, $name, $price){
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
    }

    public function getId(){
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }
    public function getName(){
        return $this->name;
    }
    public function setName($name){
        $this->name = $name;
    }
    public function getPrice(){
        return $this->price;
    }
    public function setPrice($price){
        $this->price = $price;
    }
}

/**
 * Class Computer
 * $cpuSpeed - частота процессора
 * $ramVol - Объём оперативной памяти
 * $hddVol - Объем HDD
 */
class Computer extends Product{
    private $cpuSpeed;
    private $ramVol;
    private $hddVol;

    public function getCpuSpeed(){
        return $this->cpuSpeed;
    }

    public function setCpuSpeed($cpuSpeed){
        $this->cpuSpeed = $cpuSpeed;
    }

    public function getRamVol(){
        return $this->ramVol;
    }

    public function setRamVol($ramVol){
        $this->ramVol = $ramVol;
    }

    public function getHddVol(){
        return $this->hddVol;
    }

    public function setHddVol($hddVol){
        $this->hddVol = $hddVol;
    }
    public function __construct($id, $name , $price , $cpuSpeed , $ramVol ,$hddVol){
        parent::__construct($id, $name, $price);
        $this->cpuSpeed = $cpuSpeed;
        $this->ramVol = $ramVol;
        $this->hddVol = $hddVol;
    }
}

/**
 * Class Monitor
 * $size  - диагональ
 * $resolution - разрешение
 */
class Monitor extends Product {
    private $size;
    private $resolution;

    public function __construct($id, $name, $price, $size, $resolution)
    {
        parent::__construct($id, $name, $price);
        $this->size = $size;
        $this->resolution = $resolution;
    }

    public function getSize(){
        return $this->size;
    }

    public function setSize($size){
        $this->size = $size;
    }

    public function getResolution(){
        return $this->resolution;
    }

    public function setResolution($resolution){
        $this->resolution = $resolution;
    }

}