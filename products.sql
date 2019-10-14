-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 12 2019 г., 20:23
-- Версия сервера: 5.6.41
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `les4`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `price` float NOT NULL,
  `image` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`) VALUES
(1, 'Rebox Zane', 250.25, '../img/item1.jpg'),
(2, 'Rebox Zane', 135, '../img/item2.jpg'),
(4, 'Rebox Zane', 135, '../img/item2.jpg'),
(5, 'Combo Zane', 120, '../img/item3.jpg'),
(6, 'Combo Zane', 120, '../img/item4.jpg'),
(7, 'Combo Zane', 135, '../img/item4.jpg'),
(8, 'Combo Zane', 120, '../img/item4.jpg'),
(9, 'Combo Zane', 135, '../img/item4.jpg'),
(10, 'Combo Zane', 55, '../img/item5.jpg'),
(11, 'ReboxZane', 66, '../img/item6.jpg'),
(12, 'Combo Zane', 55, '../img/item5.jpg'),
(13, 'ReboxZane', 66, '../img/item6.jpg'),
(14, 'Rembo Zane', 164, '../img/item7.jpg'),
(15, 'Rumba Zane', 460, '../img/item8.jpg'),
(16, 'Rembo Zane', 164, '../img/item7.jpg'),
(17, 'Rumba Zane', 460, '../img/item8.jpg'),
(18, 'Rebox Zanet', 250, '../img/item2.jpg'),
(19, 'Combo Zane', 76, '../img/item6.jpg'),
(20, 'Rebox Zanet', 250, '../img/item2.jpg'),
(21, 'Combo Zane', 76, '../img/item6.jpg'),
(22, 'Rebox Zane', 135, '../img/item2.jpg'),
(23, 'Combo Zane', 120, '../img/item4.jpg'),
(24, 'Combo Zane', 55, '../img/item5.jpg'),
(25, 'Combo Zane', 55, '../img/item5.jpg'),
(26, 'Combo Zane', 120, '../img/item3.jpg'),
(27, 'Rebox Zane', 135, '../img/item2.jpg'),
(28, 'Rembo Zane', 164, '../img/item7.jpg'),
(29, 'Rumba Zane', 460, '../img/item8.jpg'),
(30, 'ReboxZane', 66, '../img/item6.jpg'),
(31, 'Combo Zane', 120, '../img/item3.jpg'),
(32, 'Rebox Zane', 135, '../img/item2.jpg'),
(33, 'Rebox Zane', 250, '../img/item1.jpg'),
(34, 'Rumba Zane', 460, '../img/item8.jpg'),
(35, 'ReboxZane', 66, '../img/item6.jpg'),
(36, 'Rebox Zane', 250, '../img/item1.jpg'),
(37, 'Combo Zane', 120, '../img/item3.jpg'),
(38, 'Combo Zane', 120, '../img/item3.jpg'),
(39, 'Rebox Zane', 135, '../img/item2.jpg'),
(40, 'Rebox Zane', 250, '../img/item1.jpg'),
(41, 'ReboxZane', 66, '../img/item6.jpg'),
(42, 'ReboxZane', 66, '../img/item6.jpg'),
(43, 'Combo Zane', 55, '../img/item5.jpg'),
(44, 'Rebox Zane', 250, '../img/item1.jpg'),
(45, 'Combo Zane', 120, '../img/item4.jpg'),
(46, 'Rebox Zane', 135, '../img/item2.jpg'),
(47, 'ReboxZane', 66, '../img/item6.jpg'),
(48, 'Rebox Zane', 250, '../img/item1.jpg'),
(49, 'ReboxZane', 66, '../img/item6.jpg'),
(50, 'Combo Zane', 55, '../img/item5.jpg'),
(51, 'Rebox Zane', 250, '../img/item1.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
