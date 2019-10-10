<?php

$dir_big = __DIR__ . '/img/big';
$images_tmp = scandir(__DIR__ . '/img/small');//читаем директорию

$images = [];
foreach ($images_tmp as $value){
    if(substr($value, -3, 3) === 'jpg')//оставляем только картинки
        $images[] = $value;//составляем массив названий картинок
}

include __DIR__ . '/vendor/autoload.php';
try{
    $loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
    $twig = new \Twig\Environment($loader);
    echo $twig->render('template.twig', ['images' => $images]);

} catch (Exception $e){
    die ('ERROR: ' . $e->getMessage());
}
