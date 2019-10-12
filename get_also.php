<?php
/**
 * Скрипт ответа на AJAX - запрос на вывод ещё некоторого количества товаров,
 * количество зависит он того, сколько товаров на странице хочет видеть пользователь
 */
//подключаем файлы БД и автозагрузки TWIG
include 'connect.php';
include __DIR__ . '/vendor/autoload.php';

//получаем POST параметры - сколько товаров на странице и текущая страница (если AJAX запросы уже производились)
$sort = $_POST['type-of-sort']?:9;      // по умолчанию 9 товаров на странице
$page = $_POST['page']?:1;              // по умолчанию текущая страница №1
$begin = $sort * $page;                 //начинаем с первого невыведенного элемента
$end =  $sort;
$sql = "SELECT * FROM products LIMIT :begin, :end";
$result = $pdo->prepare($sql);

// используем bindValue для привязки параметров
$result->bindValue(':begin', $begin, PDO::PARAM_INT);
$result->bindValue(':end', $end, PDO::PARAM_INT);
$result->execute();
$res1 = $result->fetchAll();
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
$twig = new \Twig\Environment($loader);

//результаты запроса  в виде ассоциативного массива подгружаем в TWIG-шаблон и записываем в переменную,
// которую отдаём как результат AJAX - запроса
try{
    $loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
    $twig = new \Twig\Environment($loader);
    $data =  $twig->render('item.twig', ['result' => $res1]);

} catch (Exception $e){
    die ('ERROR: ' . $e->getMessage());
}
echo $data;
?>


