<?php
//файл с коннектом к БД
session_start();
$options = [
    'driver' => 'mysql',
    'host'=>'localhost',
    'database' => 'les4',
    'user'=>'root',
    'password'=> '',
    'charset'=>'utf8'
];
function getPDOString($options){

    return sprintf("%s:host=%s;dbname=%s;charset=%s",
        $options['driver'],
        $options['host'],
        $options['database'],
        $options['charset']
        );
}

try{
        $pdo = new PDO(getPDOString($options), $options['user'], $options['password'],[PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
}
catch (PDOException $e){
        echo "Do not connect to db";
}

