-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 25, 2024 at 02:07 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

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
(1, 1, 'We villagers are monkeys :0', 'admin', '2024-10-25', '13:45');

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
  MODIFY `messageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `servers`
--
ALTER TABLE `servers`
  MODIFY `serverId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
