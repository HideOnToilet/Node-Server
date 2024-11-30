-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2024 at 10:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wish`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `uID` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `isSell` int(11) DEFAULT NULL,
  `isAdmin` int(11) DEFAULT NULL,
  `isDeliver` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`uID`, `user`, `pass`, `isSell`, `isAdmin`, `isDeliver`) VALUES
(1, 'admin', '123', 1, 1, 0),
(2, 'Anjolie', 'SNZ6HE', 0, 0, 0),
(3, 'Ferris', 'RXH3XJ', 0, 1, 0),
(4, 'Katell', 'HWV8ZN', 0, 0, 0),
(5, 'Zahi', 'NPX7OF', 0, 1, 0),
(6, 'Rihana', 'PON5XE', 1, 0, 0),
(7, 'Brian', 'HVZ5QT', 1, 0, 0),
(8, 'Kaylin', 'CFV4UH', 0, 0, 0),
(9, 'Xena', 'VCN4FJ', 1, 0, 0),
(10, 'Axel', 'PIZ7RL', 0, 1, 0),
(11, 'tuan', '123', 1, 0, 0),
(12, 'nam', '123', 0, 0, 1),
(13, 'deliver', '123', 0, 0, 1),
(14, 'hoang', '123', 0, 0, 0),
(15, 'minh', '123', 0, 0, 0),
(16, 'Nguyen', '123', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `ID` int(5) NOT NULL,
  `uID` int(5) NOT NULL,
  `pID` varchar(5) NOT NULL DEFAULT '',
  `amount` varchar(50) NOT NULL DEFAULT '',
  `name` varchar(100) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(250) NOT NULL,
  `price` varchar(20) NOT NULL,
  `status` varchar(250) NOT NULL,
  `size` varchar(50) NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT current_timestamp(),
  `customerStatus` varchar(50) DEFAULT NULL,
  `deliverID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `buy`
--

INSERT INTO `buy` (`ID`, `uID`, `pID`, `amount`, `name`, `phone`, `address`, `price`, `status`, `size`, `orderDate`, `customerStatus`, `deliverID`) VALUES
(69, 12, '1,2,2', '1,3,5', 'Nam Pham', '12312312', '155555', '1166.0', 'Hoàn thành', '36.0,36.0,43.0', '2024-10-04 10:37:31', 'Đã nhận hàng', NULL),
(71, 12, '5,7', '1,1', 'HAHAHA', '4462211512', '155555', '352.0', 'Hoàn thành', '36.0,36.0', '2024-10-04 11:10:50', 'Đã nhận hàng', NULL),
(72, 12, '11,16', '1,1', 'MY', '4462211512', 'CanTho', '385.0', 'Hoàn thành', '36.0,36.0', '2024-10-04 11:19:31', 'Đã nhận hàng', NULL),
(73, 12, '7', '1', 'MY', '4462211512', 'CanTho', '187.0', 'Đang giao hàng', '36.0', '2024-10-04 11:20:20', 'Chưa nhận ', NULL),
(74, 12, '3,18', '1,3', 'MY', '4462211512', 'Tra Ving', '803.0', 'Hoàn trả đơn', '36.0,38.0', '2024-10-07 09:58:27', 'Chưa nhận', 13),
(75, 12, '2', '1', 'cvcs', '1237124', 'csc', '132.0', 'Hoàn thành', '36.0', '2024-10-08 12:56:44', 'Chưa nhận', 13),
(76, 14, '1', '1', 'Tran huy hoang', '12345', 'CanTho', '110.0', 'Hoàn thành', '36.0', '2024-10-14 13:41:00', 'Chưa nhận', NULL),
(77, 12, '2', '1', 'Tran huy hoang', '12345', 'CanTho', '132.0', 'Hoàn thành', '36.0', '2024-10-14 13:58:01', 'Chưa nhận', 12),
(78, 14, '6', '1', 'Ko Nam', '4462211512', 'CanTho', '176.0', 'Hoàn thành', '36.0', '2024-10-14 14:01:02', 'Đã nhận hàng', 13),
(79, 14, '7', '1', 'Tráº§n ThiC A', '123456789', 'CanTho', '187.0', 'Hoàn thành', '36.0', '2024-10-14 20:36:59', 'Không nhận hàng', 13),
(80, 14, '2', '1', 'Tráº§n ThiC A', '123456789', 'CanTho', '132.0', 'Hoàn thành', '36.0', '2024-10-14 21:04:44', 'Không nhận hàng', 13),
(81, 14, '7', '1', 'Nam Pham', '12312312', 'Ã¢ss', '187.0', 'Hoàn thành', '36.0', '2024-10-14 22:26:20', 'Chưa nhận', 12),
(82, 14, '6', '1', 'Nguyen Van C', '12312312', 'CanTho', '176.0', 'Hoàn thành', '36.0', '2024-10-15 08:15:48', 'Chưa nhận', 13),
(83, 14, '2', '1', 'Nguyen Van C', '12312312', 'Tra Ving', '132.0', 'Hoàn thành', '36.0', '2024-10-21 13:48:15', 'Chưa nhận', 13),
(84, 14, '2', '1', 'hoàng', '123123', 'cần thơ', '132.0', 'Hoàn trả đơn', '36.0', '2024-10-21 13:51:46', 'Chưa nhận', 13),
(85, 14, '6', '1', 'hoàng', '123123', 'Cần thơ', '176.0', 'Hoàn thành', '36.0', '2024-10-21 15:15:00', 'Không nhận hàng', 12),
(86, 14, '2', '1', 'Ko Nam', '4462211512', 'CanTho', '132.0', 'Trả đơn', '36.0', '2024-10-21 15:16:06', 'Không nhận hàng', 12),
(87, 14, '6', '1', 'David coper phiu', '4462211512', 'vxxx', '176.0', 'Trả đơn', '36.0', '2024-10-21 15:18:30', 'Chưa nhận', 12),
(97, 15, '1', '1', 'Huỳnh Trương Nam', '4462211512', 'CanTho', '110.0', 'Đã nhận lại hàng', '36.0', '2024-11-05 10:05:41', 'Chưa nhận', 13),
(99, 15, '1', '1', 'Trần ThiC A', '123456789', 'CanTho', '110.0', 'Đã đặt', '36.0', '2024-11-05 22:04:28', 'Chưa nhận', NULL),
(100, 15, '5', '3', 'Huỳnh Trương Nam', '4462211512', 'Tra Ving', '495.0', 'Đã nhận lại hàng', '36.0', '2024-11-16 14:54:12', 'Chưa nhận', 12),
(101, 16, '2,1', '1,3', 'Huỳnh Trương Nam', '4462211512', 'Trà VINH', '462.0', 'Đã nhận lại hàng', '36.0,36.0', '2024-11-16 16:00:09', 'Không nhận hàng', 12);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `AccountID` int(11) DEFAULT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `Amount` int(11) DEFAULT NULL,
  `Size` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`AccountID`, `ProductID`, `Amount`, `Size`) VALUES
(2, 3, 3, NULL),
(3, 2, 1, NULL),
(4, 5, 1, NULL),
(14, 1, 1, '36.0');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cid` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cid`, `cname`) VALUES
(1, 'GIÀY ADIDAS'),
(2, 'GIÀY NIKE'),
(3, 'GIÀY BITI\'S'),
(4, 'GIÀY CONVERSE'),
(5, 'GIÀY VANS'),
(6, 'GIÀY PUMA');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `price` decimal(10,4) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `cateID` int(11) DEFAULT NULL,
  `sell_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `price`, `title`, `description`, `cateID`, `sell_ID`) VALUES
(1, 'Giày thể thao đẹp 123', 'https://canary.contestimg.wish.com/api/webimage/5f5ad3f3706bf3003d7acbd3-normal.jpg?cache_buster=10f7d3b88daf4019fa9d8be157793111', 100.0000, 'Giày thể thao nam Adidas Enerergy Falcon EE9844', 'Giày thể thao Adidas Advantage Clean sử dụng chất liệu cao cấp, thoáng khí cả mặt trong và mặt ngoài giúp bạn luôn dễ chịu và thoải mái dù mang trong thời gian dài. Giày Adidas VS Advantage có bộ đế êm ái giúp người đi tận hưởng cảm giác thoải mái cho cả ngày dài vận động. Thời trang vốn là sự quay vòng, và thiết kế đơn giản, cổ điển đại diện cho xu hướng thời trang hoài cổ đang quay trở lại và được giới trẻ đón nhận nồng nhiệt hơn bao giờ hết. Không giống như những loại giày thể thao thông thường, mẫu giày adidas Advantage có kiểu dáng \"thon thả\" hơn, khiến cho đôi chân không bị trở nên lạc lõng so với đôi giày thể thao vốn bị \"mang tiếng\" là thô kệch, không đẹp mắt. Thêm nữa, đế của loại giày này được thiết kế theo kiểu đế xuồng 3cm vừa tạo tính đàn hồi cho từng bước đi mà cũng \"tiện tay\" giúp cho người đi \"ăn gian\" chiều cao khá đáng kể. Và tất nhiên, điểm cộng tuyệt vời nhất chính là sự phối hợp tuyệt vời từ kiểu dáng đến màu sắc của các nhà thiết kế tài hoa đã làm cho đôi giày phù hợp với mọi giới tính, mọi lứa tuổi, mix được với rất nhiều phong cách khác nhau', 1, 1),
(2, 'Giày chạy bộ', 'https://canary.contestimg.wish.com/api/webimage/5d5bd678d55c843e49fe3077-normal.jpg?cache_buster=ddfc80fb52c6bd85a67c68ceb94a91d7', 120.0000, 'Giày Adidas Nova Run EE9266', 'Giày thể thao Adidas Advantage Clean sử dụng chất liệu cao cấp, thoáng khí cả mặt trong và mặt ngoài giúp bạn luôn dễ chịu và thoải mái dù mang trong thời gian dài. Giày Adidas VS Advantage có bộ đế êm ái giúp người đi tận hưởng cảm giác thoải mái cho cả ngày dài vận động. Thời trang vốn là sự quay vòng, và thiết kế đơn giản, cổ điển đại diện cho xu hướng thời trang hoài cổ đang quay trở lại và được giới trẻ đón nhận nồng nhiệt hơn bao giờ hết.', 1, 6),
(3, 'Giày du lịch', 'https://canary.contestimg.wish.com/api/webimage/5da6e559dcf2d00d2fbc707c-normal.jpg?cache_buster=d9139cea7e503395b907432f89e292d6', 130.0000, 'Dép đúc thể thao nam Adidas Adilette Boost Slides Đen - EH2256', 'Giày thể thao Adidas Advantage Clean sử dụng chất liệu cao cấp, thoáng khí cả mặt trong và mặt ngoài giúp bạn luôn dễ chịu và thoải mái dù mang trong thời gian dài. Giày Adidas VS Advantage có bộ đế êm ái giúp người đi tận hưởng cảm giác thoải mái cho cả ngày dài vận động. Thời trang vốn là sự quay vòng, và thiết kế đơn giản, cổ điển đại diện cho xu hướng thời trang hoài cổ đang quay trở lại và được giới trẻ đón nhận nồng nhiệt hơn bao giờ hết.', 1, 7),
(5, 'Giày adidas 2B', 'https://th.bing.com/th/id/OIP.BwC-Yfh2G65wMtmMHa6LSQHaHa?rs=1&pid=ImgDetMain', 150.0000, 'Giày đá bóng nam chính hãng Adidas Predator 18.4 FXG DB2007', 'Giày thể thao Adidas Advantage Clean sử dụng chất liệu cao cấp, thoáng khí cả mặt trong và mặt ngoài giúp bạn luôn dễ chịu và thoải mái dù mang trong thời gian dài. Giày Adidas VS Advantage có bộ đế êm ái giúp người đi tận hưởng cảm giác thoải mái cho cả ngày dài vận động.', 2, 6),
(6, 'Giày adidas 2C', 'https://myshoes.vn/image/cache/catalog/2022/adidas2/28.10/giay-adidas-hoops-2-nam-trang-03-1000x1000.jpg', 160.0000, 'Giày đá bóng nam chính hãng Adidas Copa Tango 18.3 TF DB2410', 'Giày thể thao Adidas Advantage Clean sử dụng chất liệu cao cấp, thoáng khí cả mặt trong và mặt ngoài giúp bạn luôn dễ chịu và thoải mái dù mang trong thời gian dài. Giày Adidas VS Advantage có bộ đế êm ái giúp người đi tận hưởng cảm giác thoải mái cho cả ngày dài vận động.', 1, 7),
(7, 'Giày adidas 2D', 'https://th.bing.com/th/id/OIP.oVrrHC0IcygJnFTyK0tquwHaHa?rs=1&pid=ImgDetMain', 170.0000, 'Giày đá bóng nam chính hãng Adidas X TANGO 18.4 TF DB2479', 'Giày thể thao Adidas Advantage Clean sử dụng chất liệu cao cấp, thoáng khí cả mặt trong và mặt ngoài giúp bạn luôn dễ chịu và thoải mái dù mang trong thời gian dài.', 2, 14),
(8, 'New Men\'s Running Shoes', 'https://canary.contestimg.wish.com/api/webimage/5c4a05a08b26e56dcf17a643-normal.jpg?cache_buster=6d01b751858e14e68932bb234cdc44c1', 150.0000, 'Comfortable Sports Shoes Men Athletic Outdoor Cushioning Sneakers for Walking&Jogging (EUR Size 39-48)', 'New Men\'s Running Shoes Comfortable Sports Shoes Men Athletic Outdoor Cushioning Sneakers for Walking&Jogging (EUR Size 39-48). Suitable for running and casual wear.', 1, 1),
(9, 'Giày Vansssss', 'https://cf.shopee.vn/file/3e7fd8b6218b482ac741e97a8b4dff1d', 150.0000, 'Giày vans old school', 'mắc vãi', 5, 15),
(11, 'giày bitits hunter', 'https://product.hstatic.net/200000255701/product/02800den__5__fb6f5367106342348f60cd7b9b70dee6_1024x1024_c1a0421479b44aa7adf0d95260c7c4de_master.jpg', 150.0000, 'ssss', 'ssss', 3, 1),
(12, 'Air Jordan 1 Low ', 'https://myshoes.vn/image/cache/catalog/2023/nike/nk06/giay-air-jordan-1-low-nam-den-xanh-01-1000x1000.jpg', 120.0000, 'ssss', 'sssss', 2, 1),
(15, 'Giày Puma', 'https://th.bing.com/th/id/OIP.r-w8aWiwpvacKwdADM2tCAHaHa?rs=1&pid=ImgDetMain', 150.0000, 'xấu mắc', 'mệt', 1, 1),
(16, 'Giày Converse', 'https://th.bing.com/th/id/OIP.ywlxJbVg6Lm8lU2Gv0aamwHaHa?rs=1&pid=ImgDetMain', 200.0000, 'đẹp', 'nên mua', 4, 1),
(17, 'Giày Converse', 'https://th.bing.com/th/id/R.3895300a1ccb622c9e8dd0ce187f24bc?rik=xJbBFSI92Tq4gA&pid=ImgRaw&r=0', 200.0000, 'giày nữ', 'đáng mua nha', 4, 1),
(18, 'Giày Converse', 'https://s3-media0.fl.yelpcdn.com/bphoto/nolW3US2K-m5ObblnrpOeg/l.jpg', 200.0000, 'ádasdas', 'ádasda', 4, 1),
(20, 'adidas TAEKWONDO W', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2bff7577b34435e974ee7d13c6dd565_9366/adidas_TAEKWONDO_W_trang_JQ4774_01_standard.jpg', 24000.0000, 'adidas TAEKWONDO W', 'adidas TAEKWONDO W', 1, 1),
(21, 'Adidas JAPAN H W', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d9469c5dda2494e8e4baa751ff89a24_9366/JAPAN_H_W_mau_xanh_la_JP9933_01_standard.jpg', 25000.0000, 'Adidas JAPAN H W', 'Adidas JAPAN H W', 1, 1),
(22, 'Giày Japan', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/49fc285e73154cbb92c266cb2a4f3443_9366/Giay_Japan_DJo_IG4507_01_standard.jpg', 3600.0000, 'Adidas Pigskin', 'Adidas Pigskin', 1, 1),
(23, 'Giày ADIZERO ADIOS PRO 3', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d97e80435f9442c885c4d7321c05876b_9366/Giay_ADIZERO_ADIOS_PRO_3_DJen_IG6439_HM1.jpg', 46000.0000, 'Giày ADIZERO ADIOS PRO 3', 'Giày ADIZERO ADIOS PRO 3', 1, 1),
(24, 'Giày Bóng Rổ Anthony Edwards 1 Low', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf6b93ec26ac4d32bb5f1440cb320269_9366/Giay_Bong_Ro_Anthony_Edwards_1_Low_mau_xanh_la_JI4065_01_00_standard.jpg', 64000.0000, 'Giày Bóng Rổ Anthony Edwards 1 Low', 'Giày Bóng Rổ Anthony Edwards 1 Low', 1, 1),
(25, 'Dép adilette Flow', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7bf7bceec37944589ffe4316342fb4e7_9366/Dep_adilette_Flow_DJen_IF4134_01_standard.jpg', 900.0000, 'Dép adilette Flow', 'Dép adilette Flow', 1, 1),
(26, 'Giày SL 72 RS', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/19a4261ba0874bf8b58192f1fa5c7cc8_9366/Giay_SL_72_RS_Be_IH8020_01_standard.jpg', 9000.0000, 'Giày SL 72 RS', 'Giày SL 72 RS', 1, 1),
(27, 'Nike Dunk Low', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/50577739-15d9-4141-bbd5-794b36bfbf7e/NIKE+DUNK+LOW+GS.png', 8500.0000, 'Older Kids\' Shoes', 'The Nike Dunk Low is an easy score for your wardrobe. Thoughtfully made from durable synthetic leather for classic comfort and style, these kicks honour a hardwood icon with a design you can easily rock from PE to the park and everywhere in between.\r\n\r\n\r\nColour Shown: Black/White/University Red/Midnight Navy\r\nStyle: HJ9202-001\r\nCountry/Region of Origin: Vietnam\r\nView Product Details', 2, 1),
(28, 'Nike Air Force 1 \'07', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png', 6000.0000, 'Men\'s Shoes', 'The radiance lives on in the Nike Air Force 1 \'07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.\r\n\r\n\r\nColour Shown: White/White\r\n', 2, 1),
(29, 'Nike Cortez', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/261ab690-4818-419a-a2a0-3790064904e8/NIKE+KIDS+CORTEZ+%28GS%29.png', 3600.0000, 'Older Kids\' Shoes', 'From athletics superstar to fashion phenom, the Cortez pairs retro appeal with modern comfort. We\'ve updated the shape to give you extra room in the toe box and above your foot. Plus, a sponge-soft midsole and see-saw detailing on the outsole deliver the heritage vibes you know and love.\r\n\r\n\r\nColour Shown: White/Black\r\nStyle: DM0950-108\r\nCountry/Region of Origin: Indonesia', 2, 1),
(30, 'Nike P-6000', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1bceaf-21bc-44b5-853b-33eac3c34e2b/WMNS+NIKE+P-6000.png', 7600.0000, 'Shoes', 'A mash-up of past Pegasus sneakers, the P-6000 takes early-2000s running to modern heights. Featuring airy mesh and sporty lines, it\'s the perfect mix of head-turning looks and breathable comfort. Plus, its foam cushioning adds a lifted, athletics-inspired stance and unbelievable cushioning.\r\n\r\n\r\nColour Shown: Metallic Summit White/Pure Platinum/Wolf Grey/White\r\nStyle: FV6603-101', 2, 1),
(31, 'Nike Air Max Plus 3', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91886090-edd6-4468-b59b-fca498da0a0d/NIKE+AIR+MAX+PLUS+III.png', 9800.0000, 'Men\'s Shoes', 'Taking the best from past generations, this Air Max Plus 3 honours its heritage with subtle nods to its predecessors. The cushioning foam and Max Air units put tried-and-tested bounce and comfort in your step. Futuristic design lines and slight pops of colour bring these kicks into the present day with eye-catching style.\r\n\r\n\r\nColour Shown: Black/Racer Blue/White/Metallic Silver\r\nStyle: HF4294-001', 2, 1),
(32, 'Nike Calm', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/97100404-f5d7-42f3-a0e4-fd9f3c459124/NIKE+CALM+MULE.png', 760.0000, 'Men\'s Mules', 'Enjoy a calm, comfortable experience—wherever your day off takes you. Made from soft yet responsive foam, these lightweight mules are easy to style and easy to pack. While the water-friendly design makes them ideal for the beach or pool, the minimalist look is elevated enough to wear around the city. Plus, a removable heel strap adjusts for the perfect fit. Time to slide in and check out.\r\n\r\n\r\nColour Shown: Light Smoke Grey/Light Smoke Grey\r\nStyle: FD5131-002', 2, 1),
(33, 'Nike Court Vision Low Next Nature', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c799d84b-c69a-4937-8efc-cb9b655064a1/NIKE+COURT+VISION+LO+NN+ESS.png', 4600.0000, 'Men\'s Shoes', 'In love with the classic look of \'80s basketball but have a thing for the fast-paced culture of today\'s game? Meet the Court Vision Low. It features a smooth upper inspired by old-school sneakers, and a classic cupsole featured on some of the most iconic silhouettes of the past.\r\n\r\n\r\nColour Shown: White/University Gold\r\nStyle: HF1744-100\r\nCountry/Region of Origin: India', 2, 1),
(34, 'Nike Air Max 90 Premium', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+AIR+MAX+90+PRM.png', 4200.0000, 'Men\'s Shoes', 'Nothing as fly, nothing as comfortable, nothing as proven. The Air Max 90 stays true to its original running roots with the iconic Waffle sole and stitched overlays. Plus, visible cushioning adds comfort to the journey. Lace up and feel the legacy.\r\n\r\n\r\nColour Shown: Phantom/Vintage Green/Black/Burgundy Crush\r\nStyle: FV6059-001\r\nCountry/Region of Origin: Vietnam', 2, 1),
(35, 'Nike Air Max Plus Drift', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e89d8eb1-9b4c-4956-ace1-d4df7a5dc3c3/W+AIR+MAX+PLUS+DRIFT.png', 12345.0000, 'Women\'s Shoes', 'Let your attitude have the edge in the Air Max Plus. Flame-like caging adds heat to the streets while airy mesh keeps you cool. It gives you a tuned Nike Air experience that offers premium stability and unbelievable cushioning.\r\n\r\n\r\nColour Shown: Summit White/Metallic Silver/Black\r\nStyle: FV4081-102\r\nCountry/Region of Origin: Indonesia', 2, 1),
(36, 'Giày Thể Thao Nữ Biti’s Hunter X Dune', 'https://product.hstatic.net/1000230642/product/hsw004204doo2_341abd5e49814f6cb81da04042ca68e1.jpg', 463.0000, 'Giày Thể Thao Nữ Biti’s Hunter X Dune - 4 Nguyên Tố: LỬA HSW004204DOO', 'Trước hàng loạt thiết kế giày thể thao hiện đại, trẻ trung thì sản phẩm giày thể thao nữ Biti’s Hunter X Dune - 4 nguyên tố: LỬA HSW004204 gây ấn tượng mạnh với sự năng động pha chút cá tính cho các bạn nữ đam mê thời trang sành điệu.  Đôi giày là sự kết hợp hoàn hảo cho những cô nàng thích sneaker, kiểu dáng nhẹ nhàng pha chút nghệ thuật nhưng độc đáo và mới lại. Từ thiết kế đến chất liệu đảm bảo mang đến cho bạn sự hài lòng.', 3, 1),
(37, 'Giày Thể Thao Nữ Biti’s Hunter Street - đế Bào Midnight 2K23 DSWH11000', 'https://product.hstatic.net/1000230642/product/dsmh11000trg__2__a181f80beef34a169096434343b58e63_d4e5f476122e4c898f0c0601a0cfe487.jpg', 780.0000, 'Giày Thể Thao Nữ Biti’s Hunter Street - đế Bào Midnight 2K23 DSWH11000\r\n', 'Đế bào Midnight 2K23 DSWH11000', 3, 1),
(38, 'Giày Thể Thao Nữ Biti’s Hunter Street HSW003900', 'https://product.hstatic.net/1000230642/product/hsw003900hog__2__daf920cf6ff94e01a8ed634fe09b9831_49ba1ff8d13b46d89e3402b4f6ffd861.jpg', 260.0000, 'Giày Thể Thao Nữ Biti’s Hunter Street HSW003900', 'Giày Thể Thao Nữ Biti’s Hunter Street HSW003900', 3, 1),
(39, 'Giày Thể Thao Nữ Hunter X - Dune OTP Real White edition HSW001201', 'https://product.hstatic.net/1000230642/product/hsm001201trg__2__8c1c9ff5d66446318373675267358b37.jpg', 999.0000, 'Giày Thể Thao Nữ Hunter X - Dune OTP Real White edition HSW001201\r\n', 'Giày Thể Thao Nữ Hunter X - Dune OTP Real White edition HSW001201\r\n', 3, 1),
(40, 'Giày Thể Thao Nữ Hunter X - X-NITE 22 Collection DSWH10500', 'https://product.hstatic.net/1000230642/product/dswh10500xam__2__c96dae77ca9d4e908f130cf46e60faf0.jpg', 780.0000, 'Giày Thể Thao Nữ Hunter X - X-NITE 22 Collection DSWH10500', 'Giày Thể Thao Nữ Hunter X - X-NITE 22 Collection DSWH10500', 3, 1),
(41, 'Giày Thông Dụng Eva Phun Nam Biti\'s E-Flow BSM002900', 'https://product.hstatic.net/1000230642/product/bsm002900kem__2__8f8db281406c43d8af550c144b6d132c_5b3901d5ac2b46e08b1c7b65bba0f707.jpg', 60.0000, 'Giày Thông Dụng Eva Phun Nam Biti\'s E-Flow BSM002900', 'Giày Thông Dụng Eva Phun Nam Biti\'s E-Flow BSM002900', 3, 1),
(42, 'Giày Thể Thao Nam Biti\'s DSM074500', 'https://product.hstatic.net/1000230642/product/giay-the-thao-nam-biti-s-dsm074500den-den-ld35m-color-den_976e670e055f496390b8ed30328f88b0.jpg', 460.0000, 'Giày Thể Thao Nam Biti\'s DSM074500', 'Giày Thể Thao Nam Biti\'s DSM074500', 3, 1),
(43, 'Giày Thể Thao Cao Cấp Nam DSMH10201', 'https://product.hstatic.net/1000230642/product/giay-the-thao-cao-cap-nam-dsmh10201xam-xam-6ce0f-color-xam_1fc063e9de274d12895bb8d445aa228d.jpg', 360.0000, 'Giày Thể Thao Cao Cấp Nam DSMH10201', 'Giày Thể Thao Cao Cấp Nam DSMH10201', 3, 1),
(44, 'VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-1.png', 260.0000, 'VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE', 'VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE', 5, 1),
(45, 'VANS SLIP-ON CLASSIC TRUE WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-slip-on-classic-true-white-vn000eyew00-1.jpg', 160.0000, 'VANS SLIP-ON CLASSIC TRUE WHITE', 'VANS SLIP-ON CLASSIC TRUE WHITE', 5, 1),
(46, 'VANS OLD SKOOL CLASSIC NAVY/WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-classic-navy-white-vn000d3hnvy-1.jpg', 960.0000, 'VANS OLD SKOOL CLASSIC NAVY/WHITE', 'VANS OLD SKOOL CLASSIC NAVY/WHITE', 5, 1),
(47, 'VANS SK8-HI CLASSIC NAVY/WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/van-sk8-hi-classic-navywhite-vn000d5invy-1.jpg', 860.0000, 'VANS SK8-HI CLASSIC NAVY/WHITE', 'VANS SK8-HI CLASSIC NAVY/WHITE', 5, 1),
(48, 'VANS AUTHENTIC CLASSIC BLACK/WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png', 560.0000, 'VANS AUTHENTIC CLASSIC BLACK/WHITE', 'VANS AUTHENTIC CLASSIC BLACK/WHITE', 5, 1),
(49, 'VANS CLASSIC SK8-HI BLACK/WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg', 3260.0000, 'VANS CLASSIC SK8-HI BLACK/WHITE', 'VANS CLASSIC SK8-HI BLACK/WHITE', 5, 1),
(50, 'VANS AUTHENTIC CLASSIC BLACK/BLACK', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-authentic-classic-black-black-vn000ee3bka-1.jpg', 420.0000, 'VANS AUTHENTIC CLASSIC BLACK/BLACK', 'VANS AUTHENTIC CLASSIC BLACK/BLACK', 5, 1),
(51, 'VANS X NATIONAL GEOGRAPHIC PHOTO ARK OLD SKOOL', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-x-national-geographic-photo-ark-old-skool-vn0a4u3bwk6-1.jpg?v=1600871348930', 1650.0000, 'VANS X NATIONAL GEOGRAPHIC PHOTO ARK OLD SKOOL', 'VANS X NATIONAL GEOGRAPHIC PHOTO ARK OLD SKOOL', 5, 1),
(52, 'VANS X NATIONAL GEOGRAPHIC AUTHENTIC OCEAN/TRUE WHITE', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-viet-nam-vans-x-national-geographic-authentic-ocean-true-white-1.jpg?v=1600875902050', 550.0000, 'VANS X NATIONAL GEOGRAPHIC AUTHENTIC OCEAN/TRUE WHITE', 'VANS X NATIONAL GEOGRAPHIC AUTHENTIC OCEAN/TRUE WHITE', 5, 1),
(53, 'VANS ANAHEIM FACTORY ERA 95 DX HOFFMAN FABRICS', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-anaheim-factory-era-95-dx-hoffman-fabrics-vn0a2rr11ut-1.jpg?v=1601796796143', 220.0000, 'VANS ANAHEIM FACTORY ERA 95 DX HOFFMAN FABRICS', 'VANS ANAHEIM FACTORY ERA 95 DX HOFFMAN FABRICS', 5, 1),
(54, 'VANS ERA PACKING TAPE BLACK', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-era-packing-tape-black-vn0a4u39wz4-1.jpg?v=1606205712177', 2260.0000, 'VANS ERA PACKING TAPE BLACK', 'VANS ERA PACKING TAPE BLACK', 5, 1),
(55, 'Giày Converse Chuck Taylor All Star Star Studded', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a07907c-1.jpg', 1600.0000, 'Giày Converse Chuck Taylor All Star Star Studded', 'Giày Converse Chuck Taylor All Star Star Studded', 4, 1),
(56, 'Giày Converse Lugged 2.0 Platform Denim', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a03809c-1.jpg', 1600.0000, 'Giày Converse Lugged 2.0 Platform Denim', 'Giày Converse Lugged 2.0 Platform Denim', 4, 1),
(57, 'Giày Converse Chuck 70 Crafted Patchwork', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a04509c-6.jpg', 2200.0000, 'Giày Converse Chuck 70 Crafted Patchwork', 'Giày Converse Chuck 70 Crafted Patchwork', 4, 1),
(58, 'Giày Converse Chuck 70 Vitality Green', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a04587c-11.jpg', 3360.0000, 'Giày Converse Chuck 70 Vitality Green', 'Giày Converse Chuck 70 Vitality Green', 4, 1),
(59, 'Giày Converse Chuck 70 AT-CX Colorblock', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a04970c-1.jpg', 4500.0000, 'Giày Converse Chuck 70 AT-CX Colorblock', 'Giày Converse Chuck 70 AT-CX Colorblock', 4, 1),
(60, 'Giày Converse Chuck 70 Club House', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a05681c-13.jpg', 1650.0000, 'Giày Converse Chuck 70 Club House', 'Giày Converse Chuck 70 Club House', 4, 1),
(61, 'Giày Converse One Star Pro Denim', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a04148c-5.jpg', 8900.0000, 'Giày Converse One Star Pro Denim', 'Giày Converse One Star Pro Denim', 4, 1),
(62, 'Giày Converse Chuck Taylor All Star Cruise', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a06142c-9.jpg', 7200.0000, 'Giày Converse Chuck Taylor All Star Cruise', 'Giày Converse Chuck Taylor All Star Cruise', 4, 1),
(63, 'Giày Converse Chuck 70 At Cx Counter Climate', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a03274c-1.jpg', 4220.0000, 'Giày Converse Chuck 70 At Cx Counter Climate', 'Giày Converse Chuck 70 At Cx Counter Climate', 4, 1),
(64, 'Giày sneakers unisex cổ thấp Puma x One Piece', 'https://product.hstatic.net/1000284478/product/01_396525_1_db089bdb0c7d43698a446d957e9b21df.jpg', 2900.0000, 'Giày sneakers unisex cổ thấp Puma x One Piece', 'Giày sneakers unisex cổ thấp Puma x One Piece', 6, 1),
(65, 'Giày chạy bộ nữ Softride Enzo Evo', 'https://product.hstatic.net/1000284478/product/22_378068_1_2fce100dd8ac4f53b96a3d0b6058d937.jpg', 1890.0000, 'Giày chạy bộ nữ Softride Enzo Evo', 'Giày chạy bộ nữ Softride Enzo Evo', 6, 1),
(66, 'Giày sneakers nữ cổ thấp Palermo Clobber Dresscode', 'https://product.hstatic.net/1000284478/product/01_398150_1_807bd60556fd47ea97f9e0188ece8d00.jpg', 7860.0000, 'Giày sneakers nữ cổ thấp Palermo Clobber Dresscode', 'Giày sneakers nữ cổ thấp Palermo Clobber Dresscode', 6, 1),
(67, 'Giày sneakers unisex cổ thấp Caven 2.0', 'https://product.hstatic.net/1000284478/product/35_392290_1_e2addab309364ecebc1a9ef42e667f03.jpg', 3560.0000, 'Giày sneakers unisex cổ thấp Caven 2.0', 'Giày sneakers unisex cổ thấp Caven 2.0', 6, 1),
(68, 'Giày chạy bộ unisex Softride Enzo Evo', 'https://product.hstatic.net/1000284478/product/02_377875_1_78bf1a64a6854b69b367ca24b127f0cd.jpg', 4560.0000, 'Giày chạy bộ unisex Softride Enzo Evo', 'Giày chạy bộ unisex Softride Enzo Evo', 6, 1),
(69, 'Giày sneakers unisex cổ thấp Palermo Supertifo', 'https://product.hstatic.net/1000284478/product/02_398182_1_6b68dc73d9e24766a72178f597cf31e5.jpg', 8900.0000, 'Giày sneakers unisex cổ thấp Palermo Supertifo', 'Giày sneakers unisex cổ thấp Palermo Supertifo', 6, 1),
(70, 'Giày sneakers nữ cổ thấp Pulsar Wedge Nostalgic', 'https://product.hstatic.net/1000284478/product/01_400972_1_74ec0888f3c14d2eb99696350b0989f4.jpg', 9900.0000, 'Giày sneakers nữ cổ thấp Pulsar Wedge Nostalgic', 'Giày sneakers nữ cổ thấp Pulsar Wedge Nostalgic', 6, 1),
(71, 'Giày sneakers unisex cổ thấp Suede XL Denim', 'https://product.hstatic.net/1000284478/product/01_398397_1_46fcbe3648fb40b19990e6c87e935b6b.jpg', 6920.0000, 'Giày sneakers unisex cổ thấp Suede XL Denim', 'Giày sneakers unisex cổ thấp Suede XL Denim', 6, 1),
(72, 'Giày sneakers unisex cổ thấp RS X Playstation', 'https://product.hstatic.net/1000284478/product/02_396311_1_a385c07e10c04b8890ac05dbce7f820a.jpg', 1190.0000, 'Giày sneakers unisex cổ thấp RS X Playstation', 'Giày sneakers unisex cổ thấp RS X Playstation', 6, 1),
(73, 'Giày Golf Đinh Liền MC Z-Traxion Rolling Links', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5faf317b573d4194b34ed3b7b487548a_9366/Giay_Golf_DJinh_Lien_MC_Z-Traxion_Rolling_Links_DJen_IF1699_HM1.jpg', 1985.0000, 'Giày Golf Đinh Liền MC Z-Traxion Rolling Links', 'Giày Golf Đinh Liền MC Z-Traxion Rolling Links', 1, 1),
(74, 'Giày Đá Bóng Firm Ground Predator League', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b79119a68d1a4e448321643d8ff8d541_9366/Giay_DJa_Bong_Firm_Ground_Predator_League_Xam_IF6349_22_model.jpg', 4980.0000, 'Giày Đá Bóng Firm Ground Predator League', 'Giày Đá Bóng Firm Ground Predator League', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`uID`);

--
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `AccountID` (`AccountID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `uID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `buy`
--
ALTER TABLE `buy`
  MODIFY `ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`AccountID`) REFERENCES `account` (`uID`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
