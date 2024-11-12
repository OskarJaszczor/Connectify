-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 12, 2024 at 08:58 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projektnode`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `channels`
--

CREATE TABLE `channels` (
  `channelId` int(11) NOT NULL,
  `serverId` int(11) NOT NULL,
  `channelName` varchar(30) NOT NULL,
  `channelChar` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`channelId`, `serverId`, `channelName`, `channelChar`) VALUES
(1, 1, 'Villager Channel', '@'),
(2, 1, 'Golem Channel', '#'),
(3, 2, 'Zombie Channel', '!'),
(4, 2, 'Creeper Channel', '&');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `messages`
--

CREATE TABLE `messages` (
  `messageId` int(11) NOT NULL,
  `channelId` int(11) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `hour` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`messageId`, `channelId`, `content`, `author`, `date`, `hour`) VALUES
(1, 1, 'We villagers are monkeys :0', 'admin', '2024-10-25', '13:45'),
(2, 1, 'asdasdas', 'User1', '0000-00-00', '09:03:21'),
(3, 1, 'asdasdas', 'User1', '0000-00-00', '09:03:21'),
(4, 1, 'asdasdas', 'User1', '0000-00-00', '09:03:21'),
(5, 1, 'asdasdas', 'User1', '0000-00-00', '09:03:22'),
(6, 2, 'asdasdasasdasd', 'User1', '0000-00-00', '09:03:30'),
(7, 2, 'asdasdasasdasd', 'User1', '0000-00-00', '09:03:30'),
(8, 1, 'asdasd', 'User1', '0000-00-00', '09:04:13'),
(9, 1, 'asdasd', 'User1', '0000-00-00', '09:04:14'),
(10, 1, 'asdasd', 'User1', '0000-00-00', '09:04:14'),
(11, 1, 'asdasd', 'User1', '0000-00-00', '09:04:14'),
(12, 1, 'asdasd', 'User1', '0000-00-00', '09:04:14'),
(13, 1, 'asdasd', 'User1', '0000-00-00', '09:04:14'),
(14, 0, 'asdas', 'User1', '0000-00-00', '09:04:30'),
(15, 0, 'asdas', 'User1', '0000-00-00', '09:04:30'),
(16, 0, 'asdas', 'User1', '0000-00-00', '09:04:31'),
(17, 0, 'asdas', 'User1', '0000-00-00', '09:04:31'),
(18, 0, 'asdas', 'User1', '0000-00-00', '09:04:32'),
(19, 0, 'asdas', 'User1', '0000-00-00', '09:04:32'),
(20, 1, 'ASD', 'User1', '0000-00-00', '09:06:18'),
(21, 1, 'ASD', 'User1', '0000-00-00', '09:06:19'),
(22, 1, 'ASD', 'User1', '0000-00-00', '09:06:20'),
(23, 1, 'ASD', 'User1', '0000-00-00', '09:06:21'),
(24, 1, 'ASD', 'User1', '0000-00-00', '09:06:21'),
(25, 1, 'sad', 'User1', '0000-00-00', '09:12:56'),
(26, 1, 'sad', 'User1', '0000-00-00', '09:12:57'),
(27, 1, 'sad', 'User1', '0000-00-00', '09:12:58'),
(28, 1, 'sad', 'User1', '0000-00-00', '09:12:58'),
(29, 1, 'sad', 'User1', '0000-00-00', '09:12:59'),
(30, 1, 'd', 'User1', '0000-00-00', '09:13:46'),
(31, 1, 'd', 'User1', '0000-00-00', '09:13:46'),
(32, 1, 'd', 'User1', '0000-00-00', '09:13:46'),
(33, 1, 'sd', 'User1', '0000-00-00', '09:14:22'),
(34, 1, 'sd', 'User1', '0000-00-00', '09:14:23'),
(35, 1, 'asd', 'User1', '0000-00-00', '09:14:51'),
(36, 1, 'asd', 'User1', '0000-00-00', '09:14:52'),
(37, 1, 'asd', 'User1', '0000-00-00', '09:15:38'),
(38, 1, 'sd', 'User1', '0000-00-00', '09:16:19'),
(39, 1, 'sdsd', 'User1', '0000-00-00', '09:16:25'),
(40, 1, 'd', 'User1', '0000-00-00', '09:16:32'),
(41, 1, 'sd', 'User1', '0000-00-00', '09:16:51'),
(42, 1, 'sd', 'User1', '0000-00-00', '09:17:05'),
(43, 1, 'sd', 'User1', '0000-00-00', '09:17:18'),
(44, 1, 'sd', 'User1', '0000-00-00', '09:17:18'),
(45, 1, 'sd', 'User1', '0000-00-00', '09:17:19'),
(46, 1, 'sd', 'User1', '0000-00-00', '09:17:19'),
(47, 1, 'sd', 'User1', '0000-00-00', '09:17:20'),
(48, 0, 'asd', 'User1', '0000-00-00', '09:19:22'),
(49, 0, 'asd', 'User1', '0000-00-00', '09:19:22'),
(50, 0, 'asd', 'User1', '0000-00-00', '09:19:23'),
(51, 0, 'asd', 'User1', '0000-00-00', '09:19:23'),
(52, 0, 'asd', 'User1', '0000-00-00', '09:19:24'),
(53, 0, 'asd', 'User1', '0000-00-00', '09:19:24'),
(54, 2, 'd', 'User1', '0000-00-00', '09:39:55'),
(55, 2, 'd', 'User1', '0000-00-00', '09:39:56'),
(56, 2, 'd', 'User1', '0000-00-00', '09:39:56'),
(57, 2, 'd', 'User1', '0000-00-00', '09:39:57'),
(58, 2, 'd', 'User1', '0000-00-00', '09:39:57'),
(59, 2, 'd', 'User1', '0000-00-00', '09:39:58'),
(60, 0, 'asd', 'User1', '0000-00-00', '09:40:48'),
(61, 0, 'asd', 'User1', '0000-00-00', '09:40:49'),
(62, 0, 'asd', 'User1', '0000-00-00', '09:40:49'),
(63, 0, 'asd', 'User1', '0000-00-00', '09:40:50'),
(64, 0, 'asd', 'User1', '0000-00-00', '09:40:51'),
(65, 0, 'asd', 'User1', '0000-00-00', '09:40:51');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `servers`
--

CREATE TABLE `servers` (
  `serverId` int(11) NOT NULL,
  `serverName` varchar(30) NOT NULL,
  `serverImg` text NOT NULL,
  `users` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `servers`
--

INSERT INTO `servers` (`serverId`, `serverName`, `serverImg`, `users`) VALUES
(1, 'Minecraft Server', '/img/firstlogo.jfif', '1,2,3'),
(2, 'League Server', '/img/secondlogo.jfif', '1,2');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `avatar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `login`, `password`, `avatar`) VALUES
(1, 'popopo', 'kalabanga', '123', 'xd.png'),
(2, 'klocki', 'makapaka', '1234', 'xdd.png');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`channelId`);

--
-- Indeksy dla tabeli `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`messageId`);

--
-- Indeksy dla tabeli `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`serverId`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `channels`
--
ALTER TABLE `channels`
  MODIFY `channelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `messageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `servers`
--
ALTER TABLE `servers`
  MODIFY `serverId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
