<?php


class DB
{
    private static $instance;
    private $connection = null;
    private $PDOString = "mysql:host=localhost;dbname=lesson5;charset=utf8";
    private $user = 'root';
    private $pass = '';

    public static function getInstance(){
        if(is_null(static::$instance)){
            return new static();
        }else{
            return static::$instance;
        }
    }
    private function __construct(){}
    private function __clone(){}
    private function __wakeup(){}

    public function getConnection(){
        if(is_null($this->connection)){
            $this->connection =  new \PDO($this->PDOString, $this->user, $this->pass);
            return $this->connection;
        }
        else{
            return $this->connection;
        }
    }


}