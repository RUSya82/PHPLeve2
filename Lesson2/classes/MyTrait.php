<?php


trait MyTrait
{
    private function __construct()
    {
    }
    private function __wakeup()
    {
        // TODO: Implement __wakeup() method.
    }
    private function __clone()
    {
        // TODO: Implement __clone() method.
    }

    private static $instance;

    public static function getInstance(){
        if(is_null(self::$instance)){
            self::$instance = new self();
        }
        return self::$instance;
    }
}