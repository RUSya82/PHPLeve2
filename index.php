<?php
    include 'connect.php';
    include __DIR__ . '/vendor/autoload.php';

    $items = $_GET['type-of-sort']?:9; // по сколько продуктов на странице выводим
    $sql = 'SELECT * from products LIMIT ?';
    $result = $pdo->prepare($sql);  //подготавливаем запро

    //при использовании LIMIT приходится использовать bendValue  с PDO::PARAM_INT, иначе в запрос вставляется строка а не число
    $result->bindValue(1, $items, PDO::PARAM_INT);
    //выполняем запрос
    $result->execute();
    //выводим все данные в массив
    $res = $result->fetchAll();
    //подключаем шаблон и выводим туда данные
    try{
        $loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
        $twig = new \Twig\Environment($loader);
        echo $twig->render('index.twig', ['result' => $res, 'items' => $items]);

    } catch (Exception $e){
        die ('ERROR: ' . $e->getMessage());
    }
