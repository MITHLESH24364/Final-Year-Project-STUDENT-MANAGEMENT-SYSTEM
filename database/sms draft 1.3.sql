-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 04:04 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sms`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `date` date NOT NULL,
  `id` bigint(20) NOT NULL,
  `absent` varchar(255) DEFAULT NULL,
  `late` varchar(255) DEFAULT NULL,
  `present` varchar(255) DEFAULT NULL,
  `sid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `year` int(11) NOT NULL,
  `id` bigint(20) NOT NULL,
  `sid` varchar(255) NOT NULL,
  `term` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` bigint(20) NOT NULL,
  `staff_id` bigint(20) DEFAULT NULL,
  `student_account_id` bigint(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `staff_id`, `student_account_id`, `password`, `role`, `user_id`, `username`) VALUES
(1, 1, NULL, '$2a$10$KtPMlb3A6024ePM5v8MM0umTs/8mA2Pjn6XLk/srLTaizxOBXxAsa', 'ADMIN', 'STF001', 'mithlesh_singh'),
(2, NULL, 1, '$2a$10$7Y276Ujn/iFiG2UPlrfIgOLOGrsY./qGc0bOVt2Hd8x2BB3JNprvi', 'STUDENT', 'STD001', 'mks_singh'),
(10, 13, NULL, '$2a$10$KG7e6LPjQPMbOf9J/glEaucg5iYZmD7HSTP9KW9oDBteRhlOltuEm', 'TEACHER', '13', 'mithleshsingh');

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `english` float DEFAULT NULL,
  `math` float DEFAULT NULL,
  `nepali` float DEFAULT NULL,
  `opt_accountancy` float DEFAULT NULL,
  `opt_computer` float DEFAULT NULL,
  `opt_english` float DEFAULT NULL,
  `opt_math` float DEFAULT NULL,
  `opt_science` float DEFAULT NULL,
  `science` float DEFAULT NULL,
  `social` float DEFAULT NULL,
  `student_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `id` bigint(20) NOT NULL,
  `term` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` bigint(20) NOT NULL,
  `block_head` varchar(255) DEFAULT NULL,
  `class_teacher` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) NOT NULL,
  `staff_id` varchar(255) NOT NULL,
  `blood_group` enum('AB_MINUS','AB_PLUS','A_MINUS','A_PLUS','B_MINUS','B_PLUS','O_MINUS','O_PLUS') DEFAULT NULL,
  `gender` enum('FEMALE','MALE','OTHER') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `block_head`, `class_teacher`, `date_of_birth`, `department`, `email`, `fullname`, `image`, `location`, `phone_number`, `staff_id`, `blood_group`, `gender`) VALUES
(1, 'Block J', '10th Grade', '2001-05-07', 'Science', 'singhmithlesh095@gmail.com', 'Mithlesh Singh', 'mithlesh_singh.png', 'Sarlahi', '9817622227', 'STF001', 'B_PLUS', 'MALE'),
(13, '10', '10', '2222-01-01', 'Nepali', 'singhmithlesh095@gmail.com', 'Amit Kumar Singh', '', 'lalitpur', '9817622227', 'STD013', 'A_PLUS', 'MALE');

-- --------------------------------------------------------

--
-- Table structure for table `students_detail`
--

CREATE TABLE `students_detail` (
  `account_id` bigint(20) NOT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `parent_name` varchar(255) DEFAULT NULL,
  `parent_no` varchar(255) DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `roll_no` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `student_class` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students_detail`
--

INSERT INTO `students_detail` (`account_id`, `blood_group`, `date_of_birth`, `email`, `fullname`, `gender`, `image`, `location`, `number`, `parent_name`, `parent_no`, `religion`, `roll_no`, `section`, `student_class`) VALUES
(1, 'B+', '2001-05-07T00:00:00.000Z', 'singhmithlesh095@gmail.com', 'Mithlesh Kumar Singh', 'Male', 'mks.png', 'Lalitpur', NULL, 'Ram Krishna Singh', '9867028164', 'Christian', '1', 'A', '10'),
(2, 'A+', '2015-01-01T00:00:00.000Z', 'arya.sharma1@example.com', 'Arya Sharma', 'Male', 'arya1.jpg', 'Kathmandu', NULL, 'Ramesh Sharma', '9742528656', 'Hindu', '1', 'A', '1'),
(3, 'B+', '2015-02-02', 'sita.gurung1@example.com', 'Sita Gurung', 'Female', 'sita1.jpg', 'Lalitpur', '9800000002', 'Kumar Gurung', '9800001002', 'Hindu', '2', 'A', '1'),
(4, 'O+', '2015-03-03', 'binod.thapa1@example.com', 'Binod Thapa', 'Male', 'binod1.jpg', 'Bhaktapur', '9800000003', 'Shyam Thapa', '9800001003', 'Hindu', '3', 'A', '1'),
(5, 'AB-', '2015-04-04', 'mira.basnet1@example.com', 'Mira Basnet', 'Female', 'mira1.jpg', 'Pokhara', '9800000004', 'Hari Basnet', '9800001004', 'Christian', '4', 'A', '1'),
(6, 'A-', '2015-05-05', 'suresh.tamang1@example.com', 'Suresh Tamang', 'Male', 'suresh1.jpg', 'Kathmandu', '9800000005', 'Nabin Tamang', '9800001005', 'Buddhist', '5', 'A', '1'),
(7, 'B-', '2015-06-06', 'anita.rai1@example.com', 'Anita Rai', 'Female', 'anita1.jpg', 'Lalitpur', '9800000006', 'Bikash Rai', '9800001006', 'Muslim', '6', 'A', '1'),
(8, 'O-', '2015-07-07', 'rohit.shrestha1@example.com', 'Rohit Shrestha', 'Male', 'rohit1.jpg', 'Bhaktapur', '9800000007', 'Manoj Shrestha', '9800001007', 'Hindu', '7', 'A', '1'),
(9, 'AB+', '2015-08-08', 'sabina.khadka1@example.com', 'Sabina Khadka', 'Female', 'sabina1.jpg', 'Pokhara', '9800000008', 'Dinesh Khadka', '9800001008', 'Christian', '8', 'A', '1'),
(10, 'A+', '2015-09-09', 'ravi.karki1@example.com', 'Ravi Karki', 'Male', 'ravi1.jpg', 'Kathmandu', '9800000009', 'Govinda Karki', '9800001009', 'Buddhist', '9', 'A', '1'),
(11, 'B+', '2015-10-10', 'nisha.magar1@example.com', 'Nisha Magar', 'Female', 'nisha1.jpg', 'Lalitpur', '9800000010', 'Surya Magar', '9800001010', 'Hindu', '10', 'A', '1'),
(12, 'A+', '2015-01-01', 'raj.sharma2@example.com', 'Raj Sharma', 'Male', 'raj2.jpg', 'Kathmandu', '9800001001', 'Ramesh Sharma', '9800011001', 'Hindu', '1', 'B', '1'),
(13, 'B+', '2015-02-02', 'kriti.gurung2@example.com', 'Kriti Gurung', 'Female', 'kriti2.jpg', 'Lalitpur', '9800001002', 'Kumar Gurung', '9800011002', 'Hindu', '2', 'B', '1'),
(14, 'O+', '2015-03-03', 'suman.thapa2@example.com', 'Suman Thapa', 'Male', 'suman2.jpg', 'Bhaktapur', '9800001003', 'Shyam Thapa', '9800011003', 'Hindu', '3', 'B', '1'),
(15, 'AB-', '2015-04-04', 'meena.basnet2@example.com', 'Meena Basnet', 'Female', 'meena2.jpg', 'Pokhara', '9800001004', 'Hari Basnet', '9800011004', 'Christian', '4', 'B', '1'),
(16, 'A-', '2015-05-05', 'bishal.tamang2@example.com', 'Bishal Tamang', 'Male', 'bishal2.jpg', 'Kathmandu', '9800001005', 'Nabin Tamang', '9800011005', 'Buddhist', '5', 'B', '1'),
(17, 'B-', '2015-06-06', 'anjali.rai2@example.com', 'Anjali Rai', 'Female', 'anjali2.jpg', 'Lalitpur', '9800001006', 'Bikash Rai', '9800011006', 'Muslim', '6', 'B', '1'),
(18, 'O-', '2015-07-07', 'sachin.shrestha2@example.com', 'Sachin Shrestha', 'Male', 'sachin2.jpg', 'Bhaktapur', '9800001007', 'Manoj Shrestha', '9800011007', 'Hindu', '7', 'B', '1'),
(19, 'AB+', '2015-08-08', 'priya.khadka2@example.com', 'Priya Khadka', 'Female', 'priya2.jpg', 'Pokhara', '9800001008', 'Dinesh Khadka', '9800011008', 'Christian', '8', 'B', '1'),
(20, 'A+', '2015-09-09', 'amit.karki2@example.com', 'Amit Karki', 'Male', 'amit2.jpg', 'Kathmandu', '9800001009', 'Govinda Karki', '9800011009', 'Buddhist', '9', 'B', '1'),
(21, 'B+', '2015-10-10', 'richa.magar2@example.com', 'Richa Magar', 'Female', 'richa2.jpg', 'Lalitpur', '9800001010', 'Surya Magar', '9800011010', 'Hindu', '10', 'B', '1'),
(22, 'O+', '2015-01-15', 'manish.sharma3@example.com', 'Manish Sharma', 'Male', 'manish3.jpg', 'Kathmandu', '9800002001', 'Ganesh Sharma', '9800021001', 'Hindu', '1', 'C', '1'),
(23, 'AB+', '2015-02-16', 'priya.gurung3@example.com', 'Priya Gurung', 'Female', 'priya3.jpg', 'Lalitpur', '9800002002', 'Krishna Gurung', '9800021002', 'Hindu', '2', 'C', '1'),
(24, 'B-', '2015-03-17', 'akash.thapa3@example.com', 'Akash Thapa', 'Male', 'akash3.jpg', 'Bhaktapur', '9800002003', 'Lal Thapa', '9800021003', 'Hindu', '3', 'C', '1'),
(25, 'A-', '2015-04-18', 'megha.basnet3@example.com', 'Megha Basnet', 'Female', 'megha3.jpg', 'Pokhara', '9800002004', 'Santosh Basnet', '9800021004', 'Christian', '4', 'C', '1'),
(26, 'B+', '2015-05-19', 'sanjay.tamang3@example.com', 'Sanjay Tamang', 'Male', 'sanjay3.jpg', 'Kathmandu', '9800002005', 'Prem Tamang', '9800021005', 'Buddhist', '5', 'C', '1'),
(27, 'A+', '2015-06-20', 'nikita.rai3@example.com', 'Nikita Rai', 'Female', 'nikita3.jpg', 'Lalitpur', '9800002006', 'Prakash Rai', '9800021006', 'Muslim', '6', 'C', '1'),
(28, 'O-', '2015-07-21', 'karan.shrestha3@example.com', 'Karan Shrestha', 'Male', 'karan3.jpg', 'Bhaktapur', '9800002007', 'Rajendra Shrestha', '9800021007', 'Hindu', '7', 'C', '1'),
(29, 'AB-', '2015-08-22', 'madhavi.khadka3@example.com', 'Madhavi Khadka', 'Female', 'madhavi3.jpg', 'Pokhara', '9800002008', 'Arjun Khadka', '9800021008', 'Christian', '8', 'C', '1'),
(30, 'A+', '2015-09-23', 'vijay.karki3@example.com', 'Vijay Karki', 'Male', 'vijay3.jpg', 'Kathmandu', '9800002009', 'Suman Karki', '9800021009', 'Buddhist', '9', 'C', '1'),
(31, 'B+', '2015-10-24', 'shweta.magar3@example.com', 'Shweta Magar', 'Female', 'shweta3.jpg', 'Lalitpur', '9800002010', 'Raju Magar', '9800021010', 'Hindu', '10', 'C', '1'),
(32, 'A+', '2015-01-25', 'ramesh.sharma4@example.com', 'Ramesh Sharma', 'Male', 'ramesh4.jpg', 'Kathmandu', '9800003001', 'Narayan Sharma', '9800031001', 'Hindu', '1', 'D', '1'),
(33, 'B+', '2015-02-26', 'deepa.gurung4@example.com', 'Deepa Gurung', 'Female', 'deepa4.jpg', 'Lalitpur', '9800003002', 'Sunil Gurung', '9800031002', 'Hindu', '2', 'D', '1'),
(34, 'O+', '2015-03-27', 'rahul.thapa4@example.com', 'Rahul Thapa', 'Male', 'rahul4.jpg', 'Bhaktapur', '9800003003', 'Madan Thapa', '9800031003', 'Hindu', '3', 'D', '1'),
(35, 'AB-', '2015-04-28', 'rekha.basnet4@example.com', 'Rekha Basnet', 'Female', 'rekha4.jpg', 'Pokhara', '9800003004', 'Rajan Basnet', '9800031004', 'Christian', '4', 'D', '1'),
(36, 'A-', '2015-05-29', 'sunil.tamang4@example.com', 'Sunil Tamang', 'Male', 'sunil4.jpg', 'Kathmandu', '9800003005', 'Binod Tamang', '9800031005', 'Buddhist', '5', 'D', '1'),
(37, 'B-', '2015-06-30', 'neha.rai4@example.com', 'Neha Rai', 'Female', 'neha4.jpg', 'Lalitpur', '9800003006', 'Saroj Rai', '9800031006', 'Muslim', '5', 'D', '1'),
(38, 'B+', '2016-03-05', 'isha.sharma@example.com', 'Isha Sharma', 'Female', 'path/to/image', 'Kathmandu', '9812345600', 'Raj Sharma', '9812345678', 'Hindu', '1', 'A', '2'),
(39, 'O+', '2016-07-15', 'aman.bhandari@example.com', 'Aman Bhandari', 'Male', 'path/to/image', 'Lalitpur', '9812345601', 'Puja Bhandari', '9812345679', 'Hindu', '2', 'A', '2'),
(40, 'A-', '2016-01-12', 'neha.dahal@example.com', 'Neha Dahal', 'Female', 'path/to/image', 'Bhaktapur', '9812345602', 'Sujan Dahal', '9812345680', 'Hindu', '3', 'A', '2'),
(41, 'AB+', '2016-06-30', 'rohan.kharel@example.com', 'Rohan Kharel', 'Male', 'path/to/image', 'Kathmandu', '9812345603', 'Rita Kharel', '9812345681', 'Hindu', '4', 'A', '2'),
(42, 'B-', '2016-04-25', 'kritika.thapa@example.com', 'Kritika Thapa', 'Female', 'path/to/image', 'Lalitpur', '9812345604', 'Mohan Thapa', '9812345682', 'Hindu', '5', 'A', '2'),
(43, 'O+', '2016-10-18', 'sushant.magar@example.com', 'Sushant Magar', 'Male', 'path/to/image', 'Bhaktapur', '9812345605', 'Gita Magar', '9812345683', 'Hindu', '6', 'A', '2'),
(44, 'A+', '2016-11-10', 'riya.shrestha@example.com', 'Riya Shrestha', 'Female', 'path/to/image', 'Kathmandu', '9812345606', 'Ramesh Shrestha', '9812345684', 'Hindu', '7', 'A', '2'),
(45, 'B+', '2016-08-20', 'pratik.poudel@example.com', 'Pratik Poudel', 'Male', 'path/to/image', 'Lalitpur', '9812345607', 'Meera Poudel', '9812345685', 'Hindu', '8', 'A', '2'),
(46, 'O-', '2016-09-22', 'sakshi.rana@example.com', 'Sakshi Rana', 'Female', 'path/to/image', 'Bhaktapur', '9812345608', 'Suman Rana', '9812345686', 'Hindu', '9', 'A', '2'),
(47, 'AB-', '2016-12-05', 'arjun.rai@example.com', 'Arjun Rai', 'Male', 'path/to/image', 'Kathmandu', '9812345609', 'Rita Rai', '9812345687', 'Hindu', '10', 'A', '2'),
(48, 'B+', '2016-02-15', 'anuja.singh@example.com', 'Anuja Singh', 'Female', 'path/to/image', 'Kathmandu', '9812345610', 'Rajan Singh', '9812345688', 'Hindu', '1', 'B', '2'),
(49, 'O+', '2016-04-12', 'manoj.basnet@example.com', 'Manoj Basnet', 'Male', 'path/to/image', 'Lalitpur', '9812345611', 'Sarita Basnet', '9812345689', 'Hindu', '2', 'B', '2'),
(50, 'A-', '2016-05-20', 'priyanka.khadka@example.com', 'Priyanka Khadka', 'Female', 'path/to/image', 'Bhaktapur', '9812345612', 'Sudip Khadka', '9812345690', 'Hindu', '3', 'B', '2'),
(51, 'AB+', '2016-03-10', 'sagar.lama@example.com', 'Sagar Lama', 'Male', 'path/to/image', 'Kathmandu', '9812345613', 'Geeta Lama', '9812345691', 'Hindu', '4', 'B', '2'),
(52, 'B-', '2016-08-25', 'megha.tamang@example.com', 'Megha Tamang', 'Female', 'path/to/image', 'Lalitpur', '9812345614', 'Kiran Tamang', '9812345692', 'Hindu', '5', 'B', '2'),
(53, 'O+', '2016-10-01', 'kishor.gurung@example.com', 'Kishor Gurung', 'Male', 'path/to/image', 'Bhaktapur', '9812345615', 'Rita Gurung', '9812345693', 'Hindu', '6', 'B', '2'),
(54, 'A+', '2016-12-14', 'richa.maharjan@example.com', 'Richa Maharjan', 'Female', 'path/to/image', 'Kathmandu', '9812345616', 'Anil Maharjan', '9812345694', 'Hindu', '7', 'B', '2'),
(55, 'B+', '2016-01-05', 'pravin.shah@example.com', 'Pravin Shah', 'Male', 'path/to/image', 'Lalitpur', '9812345617', 'Meera Shah', '9812345695', 'Hindu', '8', 'B', '2'),
(56, 'O-', '2016-06-06', 'sara.bhattarai@example.com', 'Sara Bhattarai', 'Female', 'path/to/image', 'Bhaktapur', '9812345618', 'Sujit Bhattarai', '9812345696', 'Hindu', '9', 'B', '2'),
(57, 'AB-', '2016-09-08', 'amit.karki@example.com', 'Amit Karki', 'Male', 'path/to/image', 'Kathmandu', '9812345619', 'Renu Karki', '9812345697', 'Hindu', '10', 'B', '2'),
(58, 'B+', '2016-07-17', 'anjali.rai@example.com', 'Anjali Rai', 'Female', 'path/to/image', 'Kathmandu', '9812345620', 'Ramesh Rai', '9812345698', 'Hindu', '1', 'C', '2'),
(59, 'O+', '2016-08-21', 'ashish.thapa@example.com', 'Ashish Thapa', 'Male', 'path/to/image', 'Lalitpur', '9812345621', 'Sunita Thapa', '9812345699', 'Hindu', '2', 'C', '2'),
(60, 'A-', '2016-03-03', 'kriti.adhikari@example.com', 'Kriti Adhikari', 'Female', 'path/to/image', 'Bhaktapur', '9812345622', 'Keshav Adhikari', '9812345700', 'Hindu', '3', 'C', '2'),
(61, 'AB+', '2016-01-12', 'rajiv.giri@example.com', 'Rajiv Giri', 'Male', 'path/to/image', 'Kathmandu', '9812345623', 'Binita Giri', '9812345701', 'Hindu', '4', 'C', '2'),
(62, 'B-', '2016-02-18', 'rupa.shahi@example.com', 'Rupa Shahi', 'Female', 'path/to/image', 'Lalitpur', '9812345624', 'Anup Shahi', '9812345702', 'Hindu', '5', 'C', '2'),
(63, 'O+', '2016-11-13', 'santosh.rana@example.com', 'Santosh Rana', 'Male', 'path/to/image', 'Bhaktapur', '9812345625', 'Goma Rana', '9812345703', 'Hindu', '6', 'C', '2'),
(64, 'A+', '2016-05-09', 'rekha.dhakal@example.com', 'Rekha Dhakal', 'Female', 'path/to/image', 'Kathmandu', '9812345626', 'Raman Dhakal', '9812345704', 'Hindu', '7', 'C', '2'),
(65, 'B+', '2016-10-10', 'anil.bhujel@example.com', 'Anil Bhujel', 'Male', 'path/to/image', 'Lalitpur', '9812345627', 'Sushma Bhujel', '9812345705', 'Hindu', '8', 'C', '2'),
(66, 'O-', '2016-09-19', 'nepal.singh@example.com', 'Nepal Singh', 'Female', 'path/to/image', 'Bhaktapur', '9812345628', 'Ashok Singh', '9812345706', 'Hindu', '9', 'C', '2'),
(67, 'AB-', '2016-06-24', 'rahul.pandey@example.com', 'Rahul Pandey', 'Male', 'path/to/image', 'Kathmandu', '9812345629', 'Rachana Pandey', '9812345707', 'Hindu', '10', 'C', '2'),
(68, 'B+', '2016-04-22', 'rajina.rai@example.com', 'Rajina Rai', 'Female', 'path/to/image', 'Kathmandu', '9812345710', 'Ram Rai', '9812345720', 'Hindu', '1', 'D', '2'),
(69, 'O+', '2016-07-14', 'manav.basnet@example.com', 'Manav Basnet', 'Male', 'path/to/image', 'Lalitpur', '9812345711', 'Sarita Basnet', '9812345721', 'Hindu', '2', 'D', '2'),
(70, 'A-', '2016-03-28', 'rishika.khadka@example.com', 'Rishika Khadka', 'Female', 'path/to/image', 'Bhaktapur', '9812345712', 'Sudip Khadka', '9812345722', 'Hindu', '3', 'D', '2'),
(71, 'AB+', '2016-05-16', 'sandeep.lama@example.com', 'Sandeep Lama', 'Male', 'path/to/image', 'Kathmandu', '9812345713', 'Geeta Lama', '9812345723', 'Hindu', '4', 'D', '2'),
(72, 'B-', '2016-01-09', 'meera.tamang@example.com', 'Meera Tamang', 'Female', 'path/to/image', 'Lalitpur', '9812345714', 'Kiran Tamang', '9812345724', 'Hindu', '5', 'D', '2'),
(73, 'O+', '2016-08-19', 'kishor.gurung@example.com', 'Kishor Gurung', 'Male', 'path/to/image', 'Bhaktapur', '9812345715', 'Rita Gurung', '9812345725', 'Hindu', '6', 'D', '2'),
(74, 'A+', '2016-09-02', 'richa.maharjan@example.com', 'Richa Maharjan', 'Female', 'path/to/image', 'Kathmandu', '9812345716', 'Anil Maharjan', '9812345726', 'Hindu', '7', 'D', '2'),
(75, 'B+', '2016-11-10', 'pravin.shah@example.com', 'Pravin Shah', 'Male', 'path/to/image', 'Lalitpur', '9812345717', 'Meera Shah', '9812345727', 'Hindu', '8', 'D', '2'),
(76, 'O-', '2016-02-22', 'sara.bhattarai@example.com', 'Sara Bhattarai', 'Female', 'path/to/image', 'Bhaktapur', '9812345718', 'Sujit Bhattarai', '9812345728', 'Hindu', '9', 'D', '2'),
(77, 'AB-', '2016-12-12', 'amit.karki@example.com', 'Amit Karki', 'Male', 'path/to/image', 'Kathmandu', '9812345719', 'Renu Karki', '9812345729', 'Hindu', '10', 'D', '2'),
(78, 'A+', '2001/05/07', 'singhmithlesh095@gmail.com', 'Mithlesh Kumar Singh', 'Male', NULL, 'lalitpur', '', 'Ram Krishna Singh', '', 'Hindu', '353', 'D', '10'),
(79, 'O+', '2015-05-10', 'student1@example.com', 'Aarav Sharma', 'Male', 'image1.jpg', 'New Delhi', '9876543210', 'Rajesh Sharma', '9876543211', 'Hindu', '1', 'E', '2'),
(80, 'A+', '2015-08-15', 'student2@example.com', 'Ananya Verma', 'Female', 'image2.jpg', 'Mumbai', '9876543212', 'Sunil Verma', '9876543213', 'Hindu', '2', 'E', '2'),
(81, 'B+', '2015-12-20', 'student3@example.com', 'Ishaan Gupta', 'Male', 'image3.jpg', 'Kolkata', '9876543214', 'Amit Gupta', '9876543215', 'Hindu', '3', 'E', '2'),
(82, 'AB-', '2015-03-12', 'student4@example.com', 'Kiara Mehta', 'Female', 'image4.jpg', 'Chennai', '9876543216', 'Ramesh Mehta', '9876543217', 'Hindu', '4', 'E', '2'),
(83, 'O-', '2015-07-18', 'student5@example.com', 'Vivaan Kapoor', 'Male', 'image5.jpg', 'Bangalore', '9876543218', 'Suresh Kapoor', '9876543219', 'Hindu', '5', 'E', '2'),
(84, 'A-', '2015-09-25', 'student6@example.com', 'Diya Singh', 'Female', 'image6.jpg', 'Hyderabad', '9876543220', 'Mahesh Singh', '9876543221', 'Hindu', '6', 'E', '2'),
(85, 'B-', '2015-11-11', 'student7@example.com', 'Aditya Nair', 'Male', 'image7.jpg', 'Pune', '9876543222', 'Karthik Nair', '9876543223', 'Hindu', '7', 'E', '2'),
(86, 'O+', '2015-04-05', 'student8@example.com', 'Meera Rao', 'Female', 'image8.jpg', 'Ahmedabad', '9876543224', 'Naveen Rao', '9876543225', 'Hindu', '8', 'E', '2'),
(87, 'A+', '2015-06-22', 'student9@example.com', 'Rohan Desai', 'Male', 'image9.jpg', 'Jaipur', '9876543226', 'Arvind Desai', '9876543227', 'Hindu', '9', 'E', '2'),
(88, 'AB+', '2015-10-30', 'student10@example.com', 'Sana Patel', 'Female', 'image10.jpg', 'Lucknow', '9876543228', 'Mohan Patel', '9876543229', 'Hindu', '10', 'E', '2'),
(89, 'O+', '2014-05-10', 'student11@example.com', 'Aryan Singh', 'Male', 'image11.jpg', 'New Delhi', '9876543230', 'Rajeev Singh', '9876543231', 'Hindu', '1', 'A', '3'),
(90, 'A+', '2014-08-15', 'student12@example.com', 'Nisha Yadav', 'Female', 'image12.jpg', 'Mumbai', '9876543232', 'Sanjay Yadav', '9876543233', 'Hindu', '2', 'A', '3'),
(91, 'B+', '2014-12-20', 'student13@example.com', 'Kunal Roy', 'Male', 'image13.jpg', 'Kolkata', '9876543234', 'Anil Roy', '9876543235', 'Hindu', '3', 'A', '3'),
(92, 'AB-', '2014-03-12', 'student14@example.com', 'Sneha Das', 'Female', 'image14.jpg', 'Chennai', '9876543236', 'Ravi Das', '9876543237', 'Hindu', '4', 'A', '3'),
(93, 'O-', '2014-07-18', 'student15@example.com', 'Kabir Bhatt', 'Male', 'image15.jpg', 'Bangalore', '9876543238', 'Siddharth Bhatt', '9876543239', 'Hindu', '5', 'A', '3'),
(94, 'A-', '2014-09-25', 'student16@example.com', 'Pooja Iyer', 'Female', 'image16.jpg', 'Hyderabad', '9876543240', 'Manoj Iyer', '9876543241', 'Hindu', '6', 'A', '3'),
(95, 'B-', '2014-11-11', 'student17@example.com', 'Rajat Jain', 'Male', 'image17.jpg', 'Pune', '9876543242', 'Naresh Jain', '9876543243', 'Hindu', '7', 'A', '3'),
(96, 'O+', '2014-04-05', 'student18@example.com', 'Aditi Menon', 'Female', 'image18.jpg', 'Ahmedabad', '9876543244', 'Prakash Menon', '9876543245', 'Hindu', '8', 'A', '3'),
(97, 'A+', '2014-06-22', 'student19@example.com', 'Raghav Nanda', 'Male', 'image19.jpg', 'Jaipur', '9876543246', 'Ashok Nanda', '9876543247', 'Hindu', '9', 'A', '3'),
(98, 'AB+', '2014-10-30', 'student20@example.com', 'Tanya Chawla', 'Female', 'image20.jpg', 'Lucknow', '9876543248', 'Mohan Chawla', '9876543249', 'Hindu', '10', 'A', '3'),
(99, 'O+', '2014-01-15', 'student21@example.com', 'Kartik Mishra', 'Male', 'image21.jpg', 'New Delhi', '9876543250', 'Ravi Mishra', '9876543251', 'Hindu', '1', 'B', '3'),
(100, 'A+', '2014-03-20', 'student22@example.com', 'Priya Reddy', 'Female', 'image22.jpg', 'Mumbai', '9876543252', 'Satish Reddy', '9876543253', 'Hindu', '2', 'B', '3'),
(101, 'B+', '2014-07-11', 'student23@example.com', 'Nikhil Saxena', 'Male', 'image23.jpg', 'Kolkata', '9876543254', 'Arun Saxena', '9876543255', 'Hindu', '3', 'B', '3'),
(102, 'AB-', '2014-02-14', 'student24@example.com', 'Simran Kaur', 'Female', 'image24.jpg', 'Chennai', '9876543256', 'Harjeet Kaur', '9876543257', 'Hindu', '4', 'B', '3'),
(103, 'O-', '2014-06-18', 'student25@example.com', 'Arnav Joshi', 'Male', 'image25.jpg', 'Bangalore', '9876543258', 'Mahesh Joshi', '9876543259', 'Hindu', '5', 'B', '3'),
(104, 'A-', '2014-08-22', 'student26@example.com', 'Riya Shah', 'Female', 'image26.jpg', 'Hyderabad', '9876543260', 'Vikram Shah', '9876543261', 'Hindu', '6', 'B', '3'),
(105, 'B-', '2014-11-05', 'student27@example.com', 'Harsh Tiwari', 'Male', 'image27.jpg', 'Pune', '9876543262', 'Raj Tiwari', '9876543263', 'Hindu', '7', 'B', '3'),
(106, 'O+', '2014-05-09', 'student28@example.com', 'Ishita Kumar', 'Female', 'image28.jpg', 'Ahmedabad', '9876543264', 'Rohit Kumar', '9876543265', 'Hindu', '8', 'B', '3'),
(107, 'A+', '2014-10-18', 'student29@example.com', 'Rohit Khanna', 'Male', 'image29.jpg', 'Jaipur', '9876543266', 'Manoj Khanna', '9876543267', 'Hindu', '9', 'B', '3'),
(108, 'AB+', '2014-12-25', 'student30@example.com', 'Sneha Pandey', 'Female', 'image30.jpg', 'Lucknow', '9876543268', 'Mohan Pandey', '9876543269', 'Hindu', '10', 'B', '3'),
(109, 'O+', '2014-03-01', 'student31@example.com', 'Vikram Sinha', 'Male', 'image31.jpg', 'New Delhi', '9876543270', 'Ramesh Sinha', '9876543271', 'Hindu', '1', 'C', '3'),
(110, 'A+', '2014-05-18', 'student32@example.com', 'Anjali Kapoor', 'Female', 'image32.jpg', 'Mumbai', '9876543272', 'Sunil Kapoor', '9876543273', 'Hindu', '2', 'C', '3'),
(111, 'B+', '2014-07-22', 'student33@example.com', 'Rohan Gupta', 'Male', 'image33.jpg', 'Kolkata', '9876543274', 'Amit Gupta', '9876543275', 'Hindu', '3', 'C', '3'),
(112, 'AB-', '2014-10-15', 'student34@example.com', 'Meera Desai', 'Female', 'image34.jpg', 'Chennai', '9876543276', 'Ravi Desai', '9876543277', 'Hindu', '4', 'C', '3'),
(113, 'O-', '2014-01-25', 'student35@example.com', 'Arjun Nair', 'Male', 'image35.jpg', 'Bangalore', '9876543278', 'Karthik Nair', '9876543279', 'Hindu', '5', 'C', '3'),
(114, 'A-', '2014-06-05', 'student36@example.com', 'Riya Patel', 'Female', 'image36.jpg', 'Hyderabad', '9876543280', 'Mahesh Patel', '9876543281', 'Hindu', '6', 'C', '3'),
(115, 'B-', '2014-08-12', 'student37@example.com', 'Ishaan Verma', 'Male', 'image37.jpg', 'Pune', '9876543282', 'Raj Verma', '9876543283', 'Hindu', '7', 'C', '3'),
(116, 'O+', '2014-11-09', 'student38@example.com', 'Diya Menon', 'Female', 'image38.jpg', 'Ahmedabad', '9876543284', 'Prakash Menon', '9876543285', 'Hindu', '8', 'C', '3'),
(117, 'A+', '2014-04-18', 'student39@example.com', 'Raghav Jain', 'Male', 'image39.jpg', 'Jaipur', '9876543286', 'Ashok Jain', '9876543287', 'Hindu', '9', 'C', '3'),
(118, 'AB+', '2014-12-05', 'student40@example.com', 'Tanya Iyer', 'Female', 'image40.jpg', 'Lucknow', '9876543288', 'Mohan Iyer', '9876543289', 'Hindu', '10', 'C', '3'),
(119, 'O+', '2014-02-12', 'student41@example.com', 'Kabir Rao', 'Male', 'image41.jpg', 'New Delhi', '9876543290', 'Rajesh Rao', '9876543291', 'Hindu', '1', 'D', '3'),
(120, 'A+', '2014-03-15', 'student42@example.com', 'Nisha Nanda', 'Female', 'image42.jpg', 'Mumbai', '9876543292', 'Sanjay Nanda', '9876543293', 'Hindu', '2', 'D', '3'),
(121, 'B+', '2014-05-22', 'student43@example.com', 'Aryan Bhatt', 'Male', 'image43.jpg', 'Kolkata', '9876543294', 'Anil Bhatt', '9876543295', 'Hindu', '3', 'D', '3'),
(122, 'AB-', '2014-07-30', 'student44@example.com', 'Sneha Roy', 'Female', 'image44.jpg', 'Chennai', '9876543296', 'Ravi Roy', '9876543297', 'Hindu', '4', 'D', '3'),
(123, 'O-', '2014-10-20', 'student45@example.com', 'Vivaan Tiwari', 'Male', 'image45.jpg', 'Bangalore', '9876543298', 'Mahesh Tiwari', '9876543299', 'Hindu', '5', 'D', '3'),
(124, 'A-', '2014-01-10', 'student46@example.com', 'Pooja Desai', 'Female', 'image46.jpg', 'Hyderabad', '9876543300', 'Naresh Desai', '9876543301', 'Hindu', '6', 'D', '3'),
(125, 'B-', '2014-06-15', 'student47@example.com', 'Rajat Kapoor', 'Male', 'image47.jpg', 'Pune', '9876543302', 'Ramesh Kapoor', '9876543303', 'Hindu', '7', 'D', '3'),
(126, 'O+', '2014-08-25', 'student48@example.com', 'Meera Iyer', 'Female', 'image48.jpg', 'Ahmedabad', '9876543304', 'Prakash Iyer', '9876543305', 'Hindu', '8', 'D', '3'),
(127, 'A+', '2014-09-18', 'student49@example.com', 'Rohan Verma', 'Male', 'image49.jpg', 'Jaipur', '9876543306', 'Arvind Verma', '9876543307', 'Hindu', '9', 'D', '3'),
(128, 'AB+', '2014-12-05', 'student50@example.com', 'Tanya Menon', 'Female', 'image50.jpg', 'Lucknow', '9876543308', 'Mohan Menon', '9876543309', 'Hindu', '10', 'D', '3'),
(129, 'O+', '2014-03-01', 'student51@example.com', 'Vikram Joshi', 'Male', 'image51.jpg', 'New Delhi', '9876543310', 'Ramesh Joshi', '9876543311', 'Hindu', '1', 'E', '3'),
(130, 'A+', '2014-05-18', 'student52@example.com', 'Anjali Nair', 'Female', 'image52.jpg', 'Mumbai', '9876543312', 'Sunil Nair', '9876543313', 'Hindu', '2', 'E', '3'),
(131, 'B+', '2014-07-22', 'student53@example.com', 'Rohan Sharma', 'Male', 'image53.jpg', 'Kolkata', '9876543314', 'Amit Sharma', '9876543315', 'Hindu', '3', 'E', '3'),
(132, 'AB-', '2014-10-15', 'student54@example.com', 'Meera Kapoor', 'Female', 'image54.jpg', 'Chennai', '9876543316', 'Ravi Kapoor', '9876543317', 'Hindu', '4', 'E', '3'),
(133, 'O-', '2014-01-25', 'student55@example.com', 'Arjun Patel', 'Male', 'image55.jpg', 'Bangalore', '9876543318', 'Karthik Patel', '9876543319', 'Hindu', '5', 'E', '3'),
(134, 'A-', '2014-06-05', 'student56@example.com', 'Riya Rao', 'Female', 'image56.jpg', 'Hyderabad', '9876543320', 'Mahesh Rao', '9876543321', 'Hindu', '6', 'E', '3'),
(135, 'B-', '2014-08-12', 'student57@example.com', 'Ishaan Gupta', 'Male', 'image57.jpg', 'Pune', '9876543322', 'Raj Gupta', '9876543323', 'Hindu', '7', 'E', '3'),
(136, 'O+', '2014-11-09', 'student58@example.com', 'Diya Mehta', 'Female', 'image58.jpg', 'Ahmedabad', '9876543324', 'Prakash Mehta', '9876543325', 'Hindu', '8', 'E', '3'),
(137, 'A+', '2014-04-18', 'student59@example.com', 'Raghav Desai', 'Male', 'image59.jpg', 'Jaipur', '9876543326', 'Ashok Desai', '9876543327', 'Hindu', '9', 'E', '3'),
(138, 'AB+', '2014-12-05', 'student60@example.com', 'Tanya Bhatt', 'Female', 'image60.jpg', 'Lucknow', '9876543328', 'Mohan Bhatt', '9876543329', 'Hindu', '10', 'E', '3'),
(139, 'O+', '2013-02-10', 'student61@example.com', 'Aarav Sharma', 'Male', 'image61.jpg', 'New Delhi', '9876543330', 'Rajesh Sharma', '9876543331', 'Hindu', '1', 'A', '4'),
(140, 'A+', '2013-03-15', 'student62@example.com', 'Isha Gupta', 'Female', 'image62.jpg', 'Mumbai', '9876543332', 'Sanjay Gupta', '9876543333', 'Hindu', '2', 'A', '4'),
(141, 'B+', '2013-05-22', 'student63@example.com', 'Ritik Verma', 'Male', 'image63.jpg', 'Kolkata', '9876543334', 'Anil Verma', '9876543335', 'Hindu', '3', 'A', '4'),
(142, 'AB-', '2013-07-30', 'student64@example.com', 'Ananya Roy', 'Female', 'image64.jpg', 'Chennai', '9876543336', 'Ravi Roy', '9876543337', 'Hindu', '4', 'A', '4'),
(143, 'O-', '2013-10-20', 'student65@example.com', 'Aditya Tiwari', 'Male', 'image65.jpg', 'Bangalore', '9876543338', 'Mahesh Tiwari', '9876543339', 'Hindu', '5', 'A', '4'),
(144, 'A-', '2013-01-10', 'student66@example.com', 'Sanya Desai', 'Female', 'image66.jpg', 'Hyderabad', '9876543340', 'Naresh Desai', '9876543341', 'Hindu', '6', 'A', '4'),
(145, 'B-', '2013-06-15', 'student67@example.com', 'Aman Kapoor', 'Male', 'image67.jpg', 'Pune', '9876543342', 'Ramesh Kapoor', '9876543343', 'Hindu', '7', 'A', '4'),
(146, 'O+', '2013-08-25', 'student68@example.com', 'Naina Iyer', 'Female', 'image68.jpg', 'Ahmedabad', '9876543344', 'Prakash Iyer', '9876543345', 'Hindu', '8', 'A', '4'),
(147, 'A+', '2013-09-18', 'student69@example.com', 'Raghav Verma', 'Male', 'image69.jpg', 'Jaipur', '9876543346', 'Arvind Verma', '9876543347', 'Hindu', '9', 'A', '4'),
(148, 'AB+', '2013-12-05', 'student70@example.com', 'Tara Menon', 'Female', 'image70.jpg', 'Lucknow', '9876543348', 'Mohan Menon', '9876543349', 'Hindu', '10', 'A', '4'),
(149, 'O+', '2013-03-01', 'student71@example.com', 'Karan Joshi', 'Male', 'image71.jpg', 'New Delhi', '9876543350', 'Ramesh Joshi', '9876543351', 'Hindu', '1', 'B', '4'),
(150, 'A+', '2013-05-18', 'student72@example.com', 'Priya Nair', 'Female', 'image72.jpg', 'Mumbai', '9876543352', 'Sunil Nair', '9876543353', 'Hindu', '2', 'B', '4'),
(151, 'B+', '2013-07-22', 'student73@example.com', 'Rohit Sharma', 'Male', 'image73.jpg', 'Kolkata', '9876543354', 'Amit Sharma', '9876543355', 'Hindu', '3', 'B', '4'),
(152, 'AB-', '2013-10-15', 'student74@example.com', 'Nidhi Kapoor', 'Female', 'image74.jpg', 'Chennai', '9876543356', 'Ravi Kapoor', '9876543357', 'Hindu', '4', 'B', '4'),
(153, 'O-', '2013-01-25', 'student75@example.com', 'Aarush Patel', 'Male', 'image75.jpg', 'Bangalore', '9876543358', 'Karthik Patel', '9876543359', 'Hindu', '5', 'B', '4'),
(154, 'A-', '2013-06-05', 'student76@example.com', 'Riya Rao', 'Female', 'image76.jpg', 'Hyderabad', '9876543360', 'Mahesh Rao', '9876543361', 'Hindu', '6', 'B', '4'),
(155, 'B-', '2013-08-12', 'student77@example.com', 'Ishaan Gupta', 'Male', 'image77.jpg', 'Pune', '9876543362', 'Raj Gupta', '9876543363', 'Hindu', '7', 'B', '4'),
(156, 'O+', '2013-11-09', 'student78@example.com', 'Diya Mehta', 'Female', 'image78.jpg', 'Ahmedabad', '9876543364', 'Prakash Mehta', '9876543365', 'Hindu', '8', 'B', '4'),
(157, 'A+', '2013-04-18', 'student79@example.com', 'Raghav Desai', 'Male', 'image79.jpg', 'Jaipur', '9876543366', 'Ashok Desai', '9876543367', 'Hindu', '9', 'B', '4'),
(158, 'AB+', '2013-12-05', 'student80@example.com', 'Tanya Bhatt', 'Female', 'image80.jpg', 'Lucknow', '9876543368', 'Mohan Bhatt', '9876543369', 'Hindu', '10', 'B', '4'),
(159, 'O+', '2013-04-20', 'student81@example.com', 'Aryan Khanna', 'Male', 'image81.jpg', 'New Delhi', '9876543370', 'Rajesh Khanna', '9876543371', 'Hindu', '1', 'C', '4'),
(160, 'A+', '2013-02-18', 'student82@example.com', 'Meera Iyer', 'Female', 'image82.jpg', 'Mumbai', '9876543372', 'Ramesh Iyer', '9876543373', 'Hindu', '2', 'C', '4'),
(161, 'B+', '2013-06-11', 'student83@example.com', 'Kabir Das', 'Male', 'image83.jpg', 'Kolkata', '9876543374', 'Arun Das', '9876543375', 'Hindu', '3', 'C', '4'),
(162, 'AB-', '2013-07-25', 'student84@example.com', 'Naina Rao', 'Female', 'image84.jpg', 'Chennai', '9876543376', 'Ravi Rao', '9876543377', 'Hindu', '4', 'C', '4'),
(163, 'O-', '2013-01-30', 'student85@example.com', 'Aman Tiwari', 'Male', 'image85.jpg', 'Bangalore', '9876543378', 'Mahesh Tiwari', '9876543379', 'Hindu', '5', 'C', '4'),
(164, 'A-', '2013-05-10', 'student86@example.com', 'Simran Kaur', 'Female', 'image86.jpg', 'Hyderabad', '9876543380', 'Harjit Kaur', '9876543381', 'Sikh', '6', 'C', '4'),
(165, 'B-', '2013-09-15', 'student87@example.com', 'Arjun Verma', 'Male', 'image87.jpg', 'Pune', '9876543382', 'Rajesh Verma', '9876543383', 'Hindu', '7', 'C', '4'),
(166, 'O+', '2013-11-08', 'student88@example.com', 'Diya Nair', 'Female', 'image88.jpg', 'Ahmedabad', '9876543384', 'Prakash Nair', '9876543385', 'Hindu', '8', 'C', '4'),
(167, 'A+', '2013-03-19', 'student89@example.com', 'Raghav Sharma', 'Male', 'image89.jpg', 'Jaipur', '9876543386', 'Ashok Sharma', '9876543387', 'Hindu', '9', 'C', '4'),
(168, 'AB+', '2013-12-01', 'student90@example.com', 'Tara Kapoor', 'Female', 'image90.jpg', 'Lucknow', '9876543388', 'Mohan Kapoor', '9876543389', 'Hindu', '10', 'C', '4'),
(169, 'O+', '2013-02-12', 'student91@example.com', 'Karan Malhotra', 'Male', 'image91.jpg', 'New Delhi', '9876543390', 'Ramesh Malhotra', '9876543391', 'Hindu', '1', 'D', '4'),
(170, 'A+', '2013-04-10', 'student92@example.com', 'Priya Sinha', 'Female', 'image92.jpg', 'Mumbai', '9876543392', 'Sunil Sinha', '9876543393', 'Hindu', '2', 'D', '4'),
(171, 'B+', '2013-06-15', 'student93@example.com', 'Rohit Nair', 'Male', 'image93.jpg', 'Kolkata', '9876543394', 'Amit Nair', '9876543395', 'Hindu', '3', 'D', '4'),
(172, 'AB-', '2013-08-20', 'student94@example.com', 'Nidhi Patel', 'Female', 'image94.jpg', 'Chennai', '9876543396', 'Ravi Patel', '9876543397', 'Hindu', '4', 'D', '4'),
(173, 'O-', '2013-10-05', 'student95@example.com', 'Aarush Singh', 'Male', 'image95.jpg', 'Bangalore', '9876543398', 'Karthik Singh', '9876543399', 'Hindu', '5', 'D', '4'),
(174, 'A-', '2013-01-25', 'student96@example.com', 'Riya Mehta', 'Female', 'image96.jpg', 'Hyderabad', '9876543400', 'Mahesh Mehta', '9876543401', 'Hindu', '6', 'D', '4'),
(175, 'B-', '2013-03-18', 'student97@example.com', 'Ishaan Khanna', 'Male', 'image97.jpg', 'Pune', '9876543402', 'Raj Khanna', '9876543403', 'Hindu', '7', 'D', '4'),
(176, 'O+', '2013-07-09', 'student98@example.com', 'Diya Iyer', 'Female', 'image98.jpg', 'Ahmedabad', '9876543404', 'Prakash Iyer', '9876543405', 'Hindu', '8', 'D', '4'),
(177, 'A+', '2013-09-22', 'student99@example.com', 'Raghav Deshmukh', 'Male', 'image99.jpg', 'Jaipur', '9876543406', 'Ashok Deshmukh', '9876543407', 'Hindu', '9', 'D', '4'),
(178, 'AB+', '2013-12-15', 'student100@example.com', 'Tanya Rao', 'Female', 'image100.jpg', 'Lucknow', '9876543408', 'Mohan Rao', '9876543409', 'Hindu', '10', 'D', '4'),
(179, 'O+', '2013-03-12', 'student101@example.com', 'Aryan Gupta', 'Male', 'image101.jpg', 'New Delhi', '9876543410', 'Rajesh Gupta', '9876543411', 'Hindu', '1', 'E', '4'),
(180, 'A+', '2013-05-25', 'student102@example.com', 'Meera Joshi', 'Female', 'image102.jpg', 'Mumbai', '9876543412', 'Ramesh Joshi', '9876543413', 'Hindu', '2', 'E', '4'),
(181, 'B+', '2013-07-11', 'student103@example.com', 'Kabir Sharma', 'Male', 'image103.jpg', 'Kolkata', '9876543414', 'Arun Sharma', '9876543415', 'Hindu', '3', 'E', '4'),
(182, 'AB-', '2013-09-30', 'student104@example.com', 'Naina Verma', 'Female', 'image104.jpg', 'Chennai', '9876543416', 'Ravi Verma', '9876543417', 'Hindu', '4', 'E', '4'),
(183, 'O-', '2013-01-20', 'student105@example.com', 'Aman Tiwari', 'Male', 'image105.jpg', 'Bangalore', '9876543418', 'Mahesh Tiwari', '9876543419', 'Hindu', '5', 'E', '4'),
(184, 'A-', '2013-04-18', 'student106@example.com', 'Simran Desai', 'Female', 'image106.jpg', 'Hyderabad', '9876543420', 'Naresh Desai', '9876543421', 'Hindu', '6', 'E', '4'),
(185, 'B-', '2013-06-25', 'student107@example.com', 'Arjun Kapoor', 'Male', 'image107.jpg', 'Pune', '9876543422', 'Ramesh Kapoor', '9876543423', 'Hindu', '7', 'E', '4'),
(186, 'O+', '2013-08-10', 'student108@example.com', 'Diya Menon', 'Female', 'image108.jpg', 'Ahmedabad', '9876543424', 'Prakash Menon', '9876543425', 'Hindu', '8', 'E', '4'),
(187, 'A+', '2013-10-15', 'student109@example.com', 'Raghav Nair', 'Male', 'image109.jpg', 'Jaipur', '9876543426', 'Ashok Nair', '9876543427', 'Hindu', '9', 'E', '4'),
(188, 'AB+', '2013-12-05', 'student110@example.com', 'Tara Bhatt', 'Female', 'image110.jpg', 'Lucknow', '9876543428', 'Mohan Bhatt', '9876543429', 'Hindu', '10', 'E', '4'),
(189, 'O+', '2012-02-10', 'student111@example.com', 'Aditya Sharma', 'Male', 'image111.jpg', 'New Delhi', '9876543430', 'Ramesh Sharma', '9876543431', 'Hindu', '1', 'A', '5'),
(190, 'A+', '2012-04-15', 'student112@example.com', 'Pooja Verma', 'Female', 'image112.jpg', 'Mumbai', '9876543432', 'Sunil Verma', '9876543433', 'Hindu', '2', 'A', '5'),
(191, 'B+', '2012-06-20', 'student113@example.com', 'Rahul Gupta', 'Male', 'image113.jpg', 'Kolkata', '9876543434', 'Amit Gupta', '9876543435', 'Hindu', '3', 'A', '5'),
(192, 'AB-', '2012-08-25', 'student114@example.com', 'Neha Patel', 'Female', 'image114.jpg', 'Chennai', '9876543436', 'Ravi Patel', '9876543437', 'Hindu', '4', 'A', '5'),
(193, 'O-', '2012-10-05', 'student115@example.com', 'Arjun Iyer', 'Male', 'image115.jpg', 'Bangalore', '9876543438', 'Karthik Iyer', '9876543439', 'Hindu', '5', 'A', '5'),
(194, 'A-', '2012-01-22', 'student116@example.com', 'Riya Mehta', 'Female', 'image116.jpg', 'Hyderabad', '9876543440', 'Mahesh Mehta', '9876543441', 'Hindu', '6', 'A', '5'),
(195, 'B-', '2012-03-19', 'student117@example.com', 'Ishaan Khanna', 'Male', 'image117.jpg', 'Pune', '9876543442', 'Raj Khanna', '9876543443', 'Hindu', '7', 'A', '5'),
(196, 'O+', '2012-07-10', 'student118@example.com', 'Diya Iyer', 'Female', 'image118.jpg', 'Ahmedabad', '9876543444', 'Prakash Iyer', '9876543445', 'Hindu', '8', 'A', '5'),
(197, 'A+', '2012-09-22', 'student119@example.com', 'Raghav Deshmukh', 'Male', 'image119.jpg', 'Jaipur', '9876543446', 'Ashok Deshmukh', '9876543447', 'Hindu', '9', 'A', '5'),
(198, 'AB+', '2012-12-15', 'student120@example.com', 'Tanya Rao', 'Female', 'image120.jpg', 'Lucknow', '9876543448', 'Mohan Rao', '9876543449', 'Hindu', '10', 'A', '5'),
(199, 'O+', '2012-03-12', 'student121@example.com', 'Aryan Gupta', 'Male', 'image121.jpg', 'New Delhi', '9876543450', 'Rajesh Gupta', '9876543451', 'Hindu', '1', 'B', '5'),
(200, 'A+', '2012-05-25', 'student122@example.com', 'Meera Joshi', 'Female', 'image122.jpg', 'Mumbai', '9876543452', 'Ramesh Joshi', '9876543453', 'Hindu', '2', 'B', '5'),
(201, 'B+', '2012-07-11', 'student123@example.com', 'Kabir Sharma', 'Male', 'image123.jpg', 'Kolkata', '9876543454', 'Arun Sharma', '9876543455', 'Hindu', '3', 'B', '5'),
(202, 'AB-', '2012-09-30', 'student124@example.com', 'Naina Verma', 'Female', 'image124.jpg', 'Chennai', '9876543456', 'Ravi Verma', '9876543457', 'Hindu', '4', 'B', '5'),
(203, 'O-', '2012-01-20', 'student125@example.com', 'Aman Tiwari', 'Male', 'image125.jpg', 'Bangalore', '9876543458', 'Mahesh Tiwari', '9876543459', 'Hindu', '5', 'B', '5'),
(204, 'A-', '2012-04-18', 'student126@example.com', 'Simran Desai', 'Female', 'image126.jpg', 'Hyderabad', '9876543460', 'Naresh Desai', '9876543461', 'Hindu', '6', 'B', '5'),
(205, 'B-', '2012-06-25', 'student127@example.com', 'Arjun Kapoor', 'Male', 'image127.jpg', 'Pune', '9876543462', 'Ramesh Kapoor', '9876543463', 'Hindu', '7', 'B', '5'),
(206, 'O+', '2012-08-10', 'student128@example.com', 'Diya Menon', 'Female', 'image128.jpg', 'Ahmedabad', '9876543464', 'Prakash Menon', '9876543465', 'Hindu', '8', 'B', '5'),
(207, 'A+', '2012-10-15', 'student129@example.com', 'Raghav Nair', 'Male', 'image129.jpg', 'Jaipur', '9876543466', 'Ashok Nair', '9876543467', 'Hindu', '9', 'B', '5'),
(208, 'AB+', '2012-12-05', 'student130@example.com', 'Tara Bhatt', 'Female', 'image130.jpg', 'Lucknow', '9876543468', 'Mohan Bhatt', '9876543469', 'Hindu', '10', 'B', '5'),
(209, 'O+', '2012-02-14', 'student131@example.com', 'Ishita Sharma', 'Female', 'image131.jpg', 'New Delhi', '9876543470', 'Ramesh Sharma', '9876543471', 'Hindu', '1', 'C', '5'),
(210, 'A+', '2012-03-18', 'student132@example.com', 'Arnav Gupta', 'Male', 'image132.jpg', 'Mumbai', '9876543472', 'Sunil Gupta', '9876543473', 'Hindu', '2', 'C', '5'),
(211, 'B+', '2012-05-22', 'student133@example.com', 'Kavya Nair', 'Female', 'image133.jpg', 'Kolkata', '9876543474', 'Amit Nair', '9876543475', 'Hindu', '3', 'C', '5'),
(212, 'AB-', '2012-07-15', 'student134@example.com', 'Rohan Desai', 'Male', 'image134.jpg', 'Chennai', '9876543476', 'Ravi Desai', '9876543477', 'Hindu', '4', 'C', '5'),
(213, 'O-', '2012-09-10', 'student135@example.com', 'Meera Iyer', 'Female', 'image135.jpg', 'Bangalore', '9876543478', 'Karthik Iyer', '9876543479', 'Hindu', '5', 'C', '5'),
(214, 'A-', '2012-01-25', 'student136@example.com', 'Aryan Khanna', 'Male', 'image136.jpg', 'Hyderabad', '9876543480', 'Raj Khanna', '9876543481', 'Hindu', '6', 'C', '5'),
(215, 'B-', '2012-03-30', 'student137@example.com', 'Diya Mehta', 'Female', 'image137.jpg', 'Pune', '9876543482', 'Mahesh Mehta', '9876543483', 'Hindu', '7', 'C', '5'),
(216, 'O+', '2012-06-12', 'student138@example.com', 'Raghav Kapoor', 'Male', 'image138.jpg', 'Ahmedabad', '9876543484', 'Ramesh Kapoor', '9876543485', 'Hindu', '8', 'C', '5'),
(217, 'A+', '2012-08-25', 'student139@example.com', 'Simran Menon', 'Female', 'image139.jpg', 'Jaipur', '9876543486', 'Prakash Menon', '9876543487', 'Hindu', '9', 'C', '5'),
(218, 'AB+', '2012-10-18', 'student140@example.com', 'Aman Rao', 'Male', 'image140.jpg', 'Lucknow', '9876543488', 'Mohan Rao', '9876543489', 'Hindu', '10', 'C', '5'),
(219, 'O+', '2012-02-10', 'student141@example.com', 'Ishaan Malhotra', 'Male', 'image141.jpg', 'New Delhi', '9876543490', 'Ramesh Malhotra', '9876543491', 'Hindu', '1', 'D', '5'),
(220, 'A+', '2012-04-12', 'student142@example.com', 'Riya Sinha', 'Female', 'image142.jpg', 'Mumbai', '9876543492', 'Sunil Sinha', '9876543493', 'Hindu', '2', 'D', '5'),
(221, 'B+', '2012-06-20', 'student143@example.com', 'Kabir Nair', 'Male', 'image143.jpg', 'Kolkata', '9876543494', 'Amit Nair', '9876543495', 'Hindu', '3', 'D', '5'),
(222, 'AB-', '2012-08-15', 'student144@example.com', 'Nidhi Patel', 'Female', 'image144.jpg', 'Chennai', '9876543496', 'Ravi Patel', '9876543497', 'Hindu', '4', 'D', '5'),
(223, 'O-', '2012-10-05', 'student145@example.com', 'Aarush Singh', 'Male', 'image145.jpg', 'Bangalore', '9876543498', 'Karthik Singh', '9876543499', 'Hindu', '5', 'D', '5'),
(224, 'A-', '2012-01-18', 'student146@example.com', 'Diya Desai', 'Female', 'image146.jpg', 'Hyderabad', '9876543500', 'Naresh Desai', '9876543501', 'Hindu', '6', 'D', '5'),
(225, 'B-', '2012-03-30', 'student147@example.com', 'Rohan Kapoor', 'Male', 'image147.jpg', 'Pune', '9876543502', 'Raj Kapoor', '9876543503', 'Hindu', '7', 'D', '5'),
(226, 'O+', '2012-07-05', 'student148@example.com', 'Meera Menon', 'Female', 'image148.jpg', 'Ahmedabad', '9876543504', 'Prakash Menon', '9876543505', 'Hindu', '8', 'D', '5'),
(227, 'A+', '2012-09-25', 'student149@example.com', 'Raghav Bhatt', 'Male', 'image149.jpg', 'Jaipur', '9876543506', 'Ashok Bhatt', '9876543507', 'Hindu', '9', 'D', '5'),
(228, 'AB+', '2012-12-15', 'student150@example.com', 'Tanya Iyer', 'Female', 'image150.jpg', 'Lucknow', '9876543508', 'Mohan Iyer', '9876543509', 'Hindu', '10', 'D', '5'),
(229, 'O+', '2012-03-12', 'student151@example.com', 'Aryan Gupta', 'Male', 'image151.jpg', 'New Delhi', '9876543510', 'Rajesh Gupta', '9876543511', 'Hindu', '1', 'E', '5'),
(230, 'A+', '2012-05-25', 'student152@example.com', 'Meera Joshi', 'Female', 'image152.jpg', 'Mumbai', '9876543512', 'Ramesh Joshi', '9876543513', 'Hindu', '2', 'E', '5'),
(231, 'B+', '2012-07-11', 'student153@example.com', 'Kabir Sharma', 'Male', 'image153.jpg', 'Kolkata', '9876543514', 'Arun Sharma', '9876543515', 'Hindu', '3', 'E', '5'),
(232, 'AB-', '2012-09-30', 'student154@example.com', 'Naina Verma', 'Female', 'image154.jpg', 'Chennai', '9876543516', 'Ravi Verma', '9876543517', 'Hindu', '4', 'E', '5'),
(233, 'O-', '2012-01-20', 'student155@example.com', 'Aman Tiwari', 'Male', 'image155.jpg', 'Bangalore', '9876543518', 'Mahesh Tiwari', '9876543519', 'Hindu', '5', 'E', '5'),
(234, 'A-', '2012-04-18', 'student156@example.com', 'Simran Desai', 'Female', 'image156.jpg', 'Hyderabad', '9876543520', 'Naresh Desai', '9876543521', 'Hindu', '6', 'E', '5'),
(235, 'B-', '2012-06-25', 'student157@example.com', 'Arjun Kapoor', 'Male', 'image157.jpg', 'Pune', '9876543522', 'Ramesh Kapoor', '9876543523', 'Hindu', '7', 'E', '5'),
(236, 'O+', '2012-08-10', 'student158@example.com', 'Diya Menon', 'Female', 'image158.jpg', 'Ahmedabad', '9876543524', 'Prakash Menon', '9876543525', 'Hindu', '8', 'E', '5'),
(237, 'A+', '2012-10-15', 'student159@example.com', 'Raghav Nair', 'Male', 'image159.jpg', 'Jaipur', '9876543526', 'Ashok Nair', '9876543527', 'Hindu', '9', 'E', '5'),
(238, 'AB+', '2012-12-05', 'student160@example.com', 'Tara Bhatt', 'Female', 'image160.jpg', 'Lucknow', '9876543528', 'Mohan Bhatt', '9876543529', 'Hindu', '10', 'E', '5'),
(239, 'O+', '2011-02-14', 'student161@example.com', 'Ishita Sharma', 'Female', 'image161.jpg', 'New Delhi', '9876543530', 'Ramesh Sharma', '9876543531', 'Hindu', '1', 'A', '6'),
(240, 'A+', '2011-03-18', 'student162@example.com', 'Arnav Gupta', 'Male', 'image162.jpg', 'Mumbai', '9876543532', 'Sunil Gupta', '9876543533', 'Hindu', '2', 'A', '6'),
(241, 'B+', '2011-05-22', 'student163@example.com', 'Kavya Nair', 'Female', 'image163.jpg', 'Kolkata', '9876543534', 'Amit Nair', '9876543535', 'Hindu', '3', 'A', '6'),
(242, 'AB-', '2011-07-15', 'student164@example.com', 'Rohan Desai', 'Male', 'image164.jpg', 'Chennai', '9876543536', 'Ravi Desai', '9876543537', 'Hindu', '4', 'A', '6'),
(243, 'O-', '2011-09-10', 'student165@example.com', 'Meera Iyer', 'Female', 'image165.jpg', 'Bangalore', '9876543538', 'Karthik Iyer', '9876543539', 'Hindu', '5', 'A', '6'),
(244, 'A-', '2011-01-25', 'student166@example.com', 'Aryan Khanna', 'Male', 'image166.jpg', 'Hyderabad', '9876543540', 'Raj Khanna', '9876543541', 'Hindu', '6', 'A', '6'),
(245, 'B-', '2011-03-30', 'student167@example.com', 'Diya Mehta', 'Female', 'image167.jpg', 'Pune', '9876543542', 'Mahesh Mehta', '9876543543', 'Hindu', '7', 'A', '6'),
(246, 'O+', '2011-06-12', 'student168@example.com', 'Raghav Kapoor', 'Male', 'image168.jpg', 'Ahmedabad', '9876543544', 'Ramesh Kapoor', '9876543545', 'Hindu', '8', 'A', '6'),
(247, 'A+', '2011-08-25', 'student169@example.com', 'Simran Menon', 'Female', 'image169.jpg', 'Jaipur', '9876543546', 'Prakash Menon', '9876543547', 'Hindu', '9', 'A', '6'),
(248, 'AB+', '2011-10-18', 'student170@example.com', 'Aman Rao', 'Male', 'image170.jpg', 'Lucknow', '9876543548', 'Mohan Rao', '9876543549', 'Hindu', '10', 'A', '6'),
(249, 'O+', '2011-02-10', 'student171@example.com', 'Ishaan Malhotra', 'Male', 'image171.jpg', 'New Delhi', '9876543550', 'Ramesh Malhotra', '9876543551', 'Hindu', '1', 'B', '6'),
(250, 'A+', '2011-04-12', 'student172@example.com', 'Riya Sinha', 'Female', 'image172.jpg', 'Mumbai', '9876543552', 'Sunil Sinha', '9876543553', 'Hindu', '2', 'B', '6'),
(251, 'B+', '2011-06-20', 'student173@example.com', 'Kabir Nair', 'Male', 'image173.jpg', 'Kolkata', '9876543554', 'Amit Nair', '9876543555', 'Hindu', '3', 'B', '6'),
(252, 'AB-', '2011-08-15', 'student174@example.com', 'Nidhi Patel', 'Female', 'image174.jpg', 'Chennai', '9876543556', 'Ravi Patel', '9876543557', 'Hindu', '4', 'B', '6'),
(253, 'O-', '2011-10-05', 'student175@example.com', 'Aarush Singh', 'Male', 'image175.jpg', 'Bangalore', '9876543558', 'Karthik Singh', '9876543559', 'Hindu', '5', 'B', '6'),
(254, 'A-', '2011-01-18', 'student176@example.com', 'Diya Desai', 'Female', 'image176.jpg', 'Hyderabad', '9876543560', 'Naresh Desai', '9876543561', 'Hindu', '6', 'B', '6'),
(255, 'B-', '2011-03-30', 'student177@example.com', 'Rohan Kapoor', 'Male', 'image177.jpg', 'Pune', '9876543562', 'Raj Kapoor', '9876543563', 'Hindu', '7', 'B', '6'),
(256, 'O+', '2011-07-05', 'student178@example.com', 'Meera Menon', 'Female', 'image178.jpg', 'Ahmedabad', '9876543564', 'Prakash Menon', '9876543565', 'Hindu', '8', 'B', '6'),
(257, 'A+', '2011-09-25', 'student179@example.com', 'Raghav Bhatt', 'Male', 'image179.jpg', 'Jaipur', '9876543566', 'Ashok Bhatt', '9876543567', 'Hindu', '9', 'B', '6'),
(258, 'AB+', '2011-12-15', 'student180@example.com', 'Tanya Iyer', 'Female', 'image180.jpg', 'Lucknow', '9876543568', 'Mohan Iyer', '9876543569', 'Hindu', '10', 'B', '6'),
(269, 'O+', '2011-02-10', 'student191@example.com', 'Ishaan Malhotra', 'Male', 'image191.jpg', 'New Delhi', '9876543590', 'Ramesh Malhotra', '9876543591', 'Hindu', '1', 'D', '6'),
(270, 'A+', '2011-03-15', 'student192@example.com', 'Riya Sinha', 'Female', 'image192.jpg', 'Mumbai', '9876543592', 'Sunil Sinha', '9876543593', 'Hindu', '2', 'D', '6'),
(271, 'B+', '2011-04-20', 'student193@example.com', 'Kabir Nair', 'Male', 'image193.jpg', 'Kolkata', '9876543594', 'Amit Nair', '9876543595', 'Hindu', '3', 'D', '6'),
(272, 'AB-', '2011-05-25', 'student194@example.com', 'Nidhi Patel', 'Female', 'image194.jpg', 'Chennai', '9876543596', 'Ravi Patel', '9876543597', 'Hindu', '4', 'D', '6'),
(273, 'O-', '2011-06-30', 'student195@example.com', 'Aarush Singh', 'Male', 'image195.jpg', 'Bangalore', '9876543598', 'Karthik Singh', '9876543599', 'Hindu', '5', 'D', '6'),
(274, 'A-', '2011-07-05', 'student196@example.com', 'Diya Desai', 'Female', 'image196.jpg', 'Hyderabad', '9876543600', 'Naresh Desai', '9876543601', 'Hindu', '6', 'D', '6'),
(275, 'B-', '2011-08-10', 'student197@example.com', 'Rohan Kapoor', 'Male', 'image197.jpg', 'Pune', '9876543602', 'Raj Kapoor', '9876543603', 'Hindu', '7', 'D', '6'),
(276, 'O+', '2011-09-15', 'student198@example.com', 'Meera Menon', 'Female', 'image198.jpg', 'Ahmedabad', '9876543604', 'Prakash Menon', '9876543605', 'Hindu', '8', 'D', '6'),
(277, 'A+', '2011-10-20', 'student199@example.com', 'Raghav Bhatt', 'Male', 'image199.jpg', 'Jaipur', '9876543606', 'Ashok Bhatt', '9876543607', 'Hindu', '9', 'D', '6'),
(278, 'AB+', '2011-11-25', 'student200@example.com', 'Tanya Iyer', 'Female', 'image200.jpg', 'Lucknow', '9876543608', 'Mohan Iyer', '9876543609', 'Hindu', '10', 'D', '6'),
(279, 'O+', '2011-02-15', 'student201@example.com', 'Ananya Sharma', 'Female', 'image201.jpg', 'New Delhi', '9876543610', 'Rajesh Sharma', '9876543611', 'Hindu', '1', 'E', '6'),
(280, 'A+', '2011-03-20', 'student202@example.com', 'Ishaan Gupta', 'Male', 'image202.jpg', 'Mumbai', '9876543612', 'Sunil Gupta', '9876543613', 'Hindu', '2', 'E', '6'),
(281, 'B+', '2011-04-25', 'student203@example.com', 'Kavya Iyer', 'Female', 'image203.jpg', 'Kolkata', '9876543614', 'Amit Iyer', '9876543615', 'Hindu', '3', 'E', '6'),
(282, 'AB-', '2011-05-30', 'student204@example.com', 'Rohan Nair', 'Male', 'image204.jpg', 'Chennai', '9876543616', 'Ravi Nair', '9876543617', 'Hindu', '4', 'E', '6'),
(283, 'O-', '2011-06-05', 'student205@example.com', 'Meera Desai', 'Female', 'image205.jpg', 'Bangalore', '9876543618', 'Karthik Desai', '9876543619', 'Hindu', '5', 'E', '6'),
(284, 'A-', '2011-07-10', 'student206@example.com', 'Aryan Khanna', 'Male', 'image206.jpg', 'Hyderabad', '9876543620', 'Raj Khanna', '9876543621', 'Hindu', '6', 'E', '6'),
(285, 'B-', '2011-08-15', 'student207@example.com', 'Diya Menon', 'Female', 'image207.jpg', 'Pune', '9876543622', 'Mahesh Menon', '9876543623', 'Hindu', '7', 'E', '6'),
(286, 'O+', '2011-09-20', 'student208@example.com', 'Raghav Singh', 'Male', 'image208.jpg', 'Ahmedabad', '9876543624', 'Ramesh Singh', '9876543625', 'Hindu', '8', 'E', '6'),
(287, 'A+', '2011-10-25', 'student209@example.com', 'Simran Patel', 'Female', 'image209.jpg', 'Jaipur', '9876543626', 'Prakash Patel', '9876543627', 'Hindu', '9', 'E', '6'),
(288, 'AB+', '2011-11-30', 'student210@example.com', 'Aman Rao', 'Male', 'image210.jpg', 'Lucknow', '9876543628', 'Mohan Rao', '9876543629', 'Hindu', '10', 'E', '6'),
(289, 'B+', '2012-01-12', 'student289@example.com', 'Aditya Sharma', 'Male', 'image289.jpg', 'Cityville', '9810020010', 'Ravi Sharma', '9810030010', 'Hindu', '1', 'A', '7'),
(290, 'O+', '2012-03-15', 'student290@example.com', 'Ananya Gupta', 'Female', 'image290.jpg', 'Townsville', '9810020020', 'Rohit Gupta', '9810030020', 'Hindu', '2', 'A', '7'),
(291, 'A-', '2012-05-22', 'student291@example.com', 'Kabir Singh', 'Male', 'image291.jpg', 'Cityville', '9810020030', 'Manoj Singh', '9810030030', 'Hindu', '3', 'A', '7'),
(292, 'AB+', '2012-07-10', 'student292@example.com', 'Meera Nair', 'Female', 'image292.jpg', 'Townsville', '9810020040', 'Vikram Nair', '9810030040', 'Christian', '4', 'A', '7'),
(293, 'B-', '2012-09-01', 'student293@example.com', 'Aryan Verma', 'Male', 'image293.jpg', 'Cityville', '9810020050', 'Rajesh Verma', '9810030050', 'Hindu', '5', 'A', '7'),
(294, 'O-', '2012-11-18', 'student294@example.com', 'Ishita Jain', 'Female', 'image294.jpg', 'Townsville', '9810020060', 'Ramesh Jain', '9810030060', 'Jain', '6', 'A', '7'),
(295, 'A+', '2012-02-25', 'student295@example.com', 'Rohan Das', 'Male', 'image295.jpg', 'Cityville', '9810020070', 'Suresh Das', '9810030070', 'Hindu', '7', 'A', '7'),
(296, 'AB-', '2012-04-14', 'student296@example.com', 'Sanya Iyer', 'Female', 'image296.jpg', 'Townsville', '9810020080', 'Kiran Iyer', '9810030080', 'Hindu', '8', 'A', '7'),
(297, 'B+', '2012-06-30', 'student297@example.com', 'Dev Patel', 'Male', 'image297.jpg', 'Cityville', '9810020090', 'Amit Patel', '9810030090', 'Hindu', '9', 'A', '7'),
(298, 'O+', '2012-08-20', 'student298@example.com', 'Aarushi Mehta', 'Female', 'image298.jpg', 'Townsville', '9810020100', 'Sunil Mehta', '9810030100', 'Hindu', '10', 'A', '7'),
(299, 'B+', '2012-01-12', 'student299@example.com', 'Neha Kapoor', 'Female', 'image299.jpg', 'Cityville', '9810020110', 'Raj Kapoor', '9810030110', 'Hindu', '1', 'B', '7'),
(300, 'O+', '2012-03-15', 'student300@example.com', 'Aakash Sinha', 'Male', 'image300.jpg', 'Townsville', '9810020120', 'Vivek Sinha', '9810030120', 'Hindu', '2', 'B', '7'),
(301, 'A-', '2012-05-22', 'student301@example.com', 'Priya Malhotra', 'Female', 'image301.jpg', 'Cityville', '9810020130', 'Sanjay Malhotra', '9810030130', 'Hindu', '3', 'B', '7'),
(302, 'AB+', '2012-07-10', 'student302@example.com', 'Rajat Roy', 'Male', 'image302.jpg', 'Townsville', '9810020140', 'Anil Roy', '9810030140', 'Christian', '4', 'B', '7');
INSERT INTO `students_detail` (`account_id`, `blood_group`, `date_of_birth`, `email`, `fullname`, `gender`, `image`, `location`, `number`, `parent_name`, `parent_no`, `religion`, `roll_no`, `section`, `student_class`) VALUES
(303, 'B-', '2012-09-01', 'student303@example.com', 'Sneha Bose', 'Female', 'image303.jpg', 'Cityville', '9810020150', 'Arnab Bose', '9810030150', 'Hindu', '5', 'B', '7'),
(304, 'O-', '2012-11-18', 'student304@example.com', 'Arjun Das', 'Male', 'image304.jpg', 'Townsville', '9810020160', 'Ramesh Das', '9810030160', 'Jain', '6', 'B', '7'),
(305, 'A+', '2012-02-25', 'student305@example.com', 'Nisha Sharma', 'Female', 'image305.jpg', 'Cityville', '9810020170', 'Suresh Sharma', '9810030170', 'Hindu', '7', 'B', '7'),
(306, 'AB-', '2012-04-14', 'student306@example.com', 'Vikram Iyer', 'Male', 'image306.jpg', 'Townsville', '9810020180', 'Kiran Iyer', '9810030180', 'Hindu', '8', 'B', '7'),
(307, 'B+', '2012-06-30', 'student307@example.com', 'Aditi Patel', 'Female', 'image307.jpg', 'Cityville', '9810020190', 'Amit Patel', '9810030190', 'Hindu', '9', 'B', '7'),
(308, 'O+', '2012-08-20', 'student308@example.com', 'Ravi Mehta', 'Male', 'image308.jpg', 'Townsville', '9810020200', 'Sunil Mehta', '9810030200', 'Hindu', '10', 'B', '7'),
(309, 'B+', '2012-01-12', 'student309@example.com', 'Tanya Kapoor', 'Female', 'image309.jpg', 'Cityville', '9810020210', 'Raj Kapoor', '9810030210', 'Hindu', '1', 'C', '7'),
(310, 'O+', '2012-03-15', 'student310@example.com', 'Kunal Sinha', 'Male', 'image310.jpg', 'Townsville', '9810020220', 'Vivek Sinha', '9810030220', 'Hindu', '2', 'C', '7'),
(311, 'A-', '2012-05-22', 'student311@example.com', 'Megha Malhotra', 'Female', 'image311.jpg', 'Cityville', '9810020230', 'Sanjay Malhotra', '9810030230', 'Hindu', '3', 'C', '7'),
(312, 'AB+', '2012-07-10', 'student312@example.com', 'Rohit Roy', 'Male', 'image312.jpg', 'Townsville', '9810020240', 'Anil Roy', '9810030240', 'Christian', '4', 'C', '7'),
(313, 'B-', '2012-09-01', 'student313@example.com', 'Asha Bose', 'Female', 'image313.jpg', 'Cityville', '9810020250', 'Arnab Bose', '9810030250', 'Hindu', '5', 'C', '7'),
(314, 'O-', '2012-11-18', 'student314@example.com', 'Aryan Das', 'Male', 'image314.jpg', 'Townsville', '9810020260', 'Ramesh Das', '9810030260', 'Jain', '6', 'C', '7'),
(315, 'A+', '2012-02-25', 'student315@example.com', 'Simran Sharma', 'Female', 'image315.jpg', 'Cityville', '9810020270', 'Suresh Sharma', '9810030270', 'Hindu', '7', 'C', '7'),
(316, 'AB-', '2012-04-14', 'student316@example.com', 'Ravi Iyer', 'Male', 'image316.jpg', 'Townsville', '9810020280', 'Kiran Iyer', '9810030280', 'Hindu', '8', 'C', '7'),
(317, 'B+', '2012-06-30', 'student317@example.com', 'Arnav Patel', 'Male', 'image317.jpg', 'Cityville', '9810020290', 'Amit Patel', '9810030290', 'Hindu', '9', 'C', '7'),
(318, 'O+', '2012-08-20', 'student318@example.com', 'Nidhi Mehta', 'Female', 'image318.jpg', 'Townsville', '9810020300', 'Sunil Mehta', '9810030300', 'Hindu', '10', 'C', '7'),
(319, 'B+', '2012-01-12', 'student319@example.com', 'Ankit Kapoor', 'Male', 'image319.jpg', 'Cityville', '9810020310', 'Raj Kapoor', '9810030310', 'Hindu', '1', 'D', '7'),
(320, 'O+', '2012-03-15', 'student320@example.com', 'Ishaan Sinha', 'Male', 'image320.jpg', 'Townsville', '9810020320', 'Vivek Sinha', '9810030320', 'Hindu', '2', 'D', '7'),
(321, 'A-', '2012-05-22', 'student321@example.com', 'Rhea Malhotra', 'Female', 'image321.jpg', 'Cityville', '9810020330', 'Sanjay Malhotra', '9810030330', 'Hindu', '3', 'D', '7'),
(322, 'AB+', '2012-07-10', 'student322@example.com', 'Soham Roy', 'Male', 'image322.jpg', 'Townsville', '9810020340', 'Anil Roy', '9810030340', 'Christian', '4', 'D', '7'),
(323, 'B-', '2012-09-01', 'student323@example.com', 'Pooja Bose', 'Female', 'image323.jpg', 'Cityville', '9810020350', 'Arnab Bose', '9810030350', 'Hindu', '5', 'D', '7'),
(324, 'O-', '2012-11-18', 'student324@example.com', 'Karan Das', 'Male', 'image324.jpg', 'Townsville', '9810020360', 'Ramesh Das', '9810030360', 'Jain', '6', 'D', '7'),
(325, 'A+', '2012-02-25', 'student325@example.com', 'Sneha Sharma', 'Female', 'image325.jpg', 'Cityville', '9810020370', 'Suresh Sharma', '9810030370', 'Hindu', '7', 'D', '7'),
(326, 'AB-', '2012-04-14', 'student326@example.com', 'Raghav Iyer', 'Male', 'image326.jpg', 'Townsville', '9810020380', 'Kiran Iyer', '9810030380', 'Hindu', '8', 'D', '7'),
(327, 'B+', '2012-06-30', 'student327@example.com', 'Shreya Patel', 'Female', 'image327.jpg', 'Cityville', '9810020390', 'Amit Patel', '9810030390', 'Hindu', '9', 'D', '7'),
(328, 'O+', '2012-08-20', 'student328@example.com', 'Anil Mehta', 'Male', 'image328.jpg', 'Townsville', '9810020400', 'Sunil Mehta', '9810030400', 'Hindu', '10', 'D', '7'),
(329, 'B+', '2012-01-12', 'student329@example.com', 'Ruchi Kapoor', 'Female', 'image329.jpg', 'Cityville', '9810020410', 'Raj Kapoor', '9810030410', 'Hindu', '1', 'E', '7'),
(330, 'O+', '2012-03-15', 'student330@example.com', 'Raj Sinha', 'Male', 'image330.jpg', 'Townsville', '9810020420', 'Vivek Sinha', '9810030420', 'Hindu', '2', 'E', '7'),
(331, 'A-', '2012-05-22', 'student331@example.com', 'Meera Malhotra', 'Female', 'image331.jpg', 'Cityville', '9810020430', 'Sanjay Malhotra', '9810030430', 'Hindu', '3', 'E', '7'),
(332, 'AB+', '2012-07-10', 'student332@example.com', 'Karan Roy', 'Male', 'image332.jpg', 'Townsville', '9810020440', 'Anil Roy', '9810030440', 'Christian', '4', 'E', '7'),
(333, 'B-', '2012-09-01', 'student333@example.com', 'Anjali Bose', 'Female', 'image333.jpg', 'Cityville', '9810020450', 'Arnab Bose', '9810030450', 'Hindu', '5', 'E', '7'),
(334, 'O-', '2012-11-18', 'student334@example.com', 'Rohit Das', 'Male', 'image334.jpg', 'Townsville', '9810020460', 'Ramesh Das', '9810030460', 'Jain', '6', 'E', '7'),
(335, 'A+', '2012-02-25', 'student335@example.com', 'Pooja Sharma', 'Female', 'image335.jpg', 'Cityville', '9810020470', 'Suresh Sharma', '9810030470', 'Hindu', '7', 'E', '7'),
(336, 'AB-', '2012-04-14', 'student336@example.com', 'Rakesh Iyer', 'Male', 'image336.jpg', 'Townsville', '9810020480', 'Kiran Iyer', '9810030480', 'Hindu', '8', 'E', '7'),
(337, 'B+', '2012-06-30', 'student337@example.com', 'Sanjay Patel', 'Male', 'image337.jpg', 'Cityville', '9810020490', 'Amit Patel', '9810030490', 'Hindu', '9', 'E', '7'),
(338, 'O+', '2012-08-20', 'student338@example.com', 'Ananya Mehta', 'Female', 'image338.jpg', 'Townsville', '9810020500', 'Sunil Mehta', '9810030500', 'Hindu', '10', 'E', '7'),
(339, 'B+', '2011-01-12', 'student339@example.com', 'Arjun Sharma', 'Male', 'image339.jpg', 'Cityville', '9810030011', 'Ravi Sharma', '9810040011', 'Hindu', '1', 'A', '8'),
(340, 'O+', '2011-03-15', 'student340@example.com', 'Ishita Gupta', 'Female', 'image340.jpg', 'Townsville', '9810030021', 'Rohit Gupta', '9810040021', 'Hindu', '2', 'A', '8'),
(341, 'A-', '2011-05-22', 'student341@example.com', 'Kabir Singh', 'Male', 'image341.jpg', 'Cityville', '9810030031', 'Manoj Singh', '9810040031', 'Hindu', '3', 'A', '8'),
(342, 'AB+', '2011-07-10', 'student342@example.com', 'Meera Nair', 'Female', 'image342.jpg', 'Townsville', '9810030041', 'Vikram Nair', '9810040041', 'Christian', '4', 'A', '8'),
(343, 'B-', '2011-09-01', 'student343@example.com', 'Aryan Verma', 'Male', 'image343.jpg', 'Cityville', '9810030051', 'Rajesh Verma', '9810040051', 'Hindu', '5', 'A', '8'),
(344, 'O-', '2011-11-18', 'student344@example.com', 'Ishani Jain', 'Female', 'image344.jpg', 'Townsville', '9810030061', 'Ramesh Jain', '9810040061', 'Jain', '6', 'A', '8'),
(345, 'A+', '2011-02-25', 'student345@example.com', 'Rohan Das', 'Male', 'image345.jpg', 'Cityville', '9810030071', 'Suresh Das', '9810040071', 'Hindu', '7', 'A', '8'),
(346, 'AB-', '2011-04-14', 'student346@example.com', 'Sanya Iyer', 'Female', 'image346.jpg', 'Townsville', '9810030081', 'Kiran Iyer', '9810040081', 'Hindu', '8', 'A', '8'),
(347, 'B+', '2011-06-30', 'student347@example.com', 'Dev Patel', 'Male', 'image347.jpg', 'Cityville', '9810030091', 'Amit Patel', '9810040091', 'Hindu', '9', 'A', '8'),
(348, 'O+', '2011-08-20', 'student348@example.com', 'Aarushi Mehta', 'Female', 'image348.jpg', 'Townsville', '9810030101', 'Sunil Mehta', '9810040101', 'Hindu', '10', 'A', '8'),
(349, 'B+', '2011-01-12', 'student349@example.com', 'Neha Kapoor', 'Female', 'image349.jpg', 'Cityville', '9810030111', 'Raj Kapoor', '9810040111', 'Hindu', '1', 'B', '8'),
(350, 'O+', '2011-03-15', 'student350@example.com', 'Aakash Sinha', 'Male', 'image350.jpg', 'Townsville', '9810030121', 'Vivek Sinha', '9810040121', 'Hindu', '2', 'B', '8'),
(351, 'A-', '2011-05-22', 'student351@example.com', 'Priya Malhotra', 'Female', 'image351.jpg', 'Cityville', '9810030131', 'Sanjay Malhotra', '9810040131', 'Hindu', '3', 'B', '8'),
(352, 'AB+', '2011-07-10', 'student352@example.com', 'Rajat Roy', 'Male', 'image352.jpg', 'Townsville', '9810030141', 'Anil Roy', '9810040141', 'Christian', '4', 'B', '8'),
(353, 'B-', '2011-09-01', 'student353@example.com', 'Sneha Bose', 'Female', 'image353.jpg', 'Cityville', '9810030151', 'Arnab Bose', '9810040151', 'Hindu', '5', 'B', '8'),
(354, 'O-', '2011-11-18', 'student354@example.com', 'Arjun Das', 'Male', 'image354.jpg', 'Townsville', '9810030161', 'Ramesh Das', '9810040161', 'Jain', '6', 'B', '8'),
(355, 'A+', '2011-02-25', 'student355@example.com', 'Nisha Sharma', 'Female', 'image355.jpg', 'Cityville', '9810030171', 'Suresh Sharma', '9810040171', 'Hindu', '7', 'B', '8'),
(356, 'AB-', '2011-04-14', 'student356@example.com', 'Vikram Iyer', 'Male', 'image356.jpg', 'Townsville', '9810030181', 'Kiran Iyer', '9810040181', 'Hindu', '8', 'B', '8'),
(357, 'B+', '2011-06-30', 'student357@example.com', 'Aditi Patel', 'Female', 'image357.jpg', 'Cityville', '9810030191', 'Amit Patel', '9810040191', 'Hindu', '9', 'B', '8'),
(358, 'O+', '2011-08-20', 'student358@example.com', 'Ravi Mehta', 'Male', 'image358.jpg', 'Townsville', '9810030201', 'Sunil Mehta', '9810040201', 'Hindu', '10', 'B', '8'),
(359, 'B+', '2011-01-12', 'student359@example.com', 'Tanya Kapoor', 'Female', 'image359.jpg', 'Cityville', '9810030211', 'Raj Kapoor', '9810040211', 'Hindu', '1', 'C', '8'),
(360, 'O+', '2011-03-15', 'student360@example.com', 'Kunal Sinha', 'Male', 'image360.jpg', 'Townsville', '9810030221', 'Vivek Sinha', '9810040221', 'Hindu', '2', 'C', '8'),
(361, 'A-', '2011-05-22', 'student361@example.com', 'Megha Malhotra', 'Female', 'image361.jpg', 'Cityville', '9810030231', 'Sanjay Malhotra', '9810040231', 'Hindu', '3', 'C', '8'),
(362, 'AB+', '2011-07-10', 'student362@example.com', 'Rohit Roy', 'Male', 'image362.jpg', 'Townsville', '9810030241', 'Anil Roy', '9810040241', 'Christian', '4', 'C', '8'),
(363, 'B-', '2011-09-01', 'student363@example.com', 'Asha Bose', 'Female', 'image363.jpg', 'Cityville', '9810030251', 'Arnab Bose', '9810040251', 'Hindu', '5', 'C', '8'),
(364, 'O-', '2011-11-18', 'student364@example.com', 'Aryan Das', 'Male', 'image364.jpg', 'Townsville', '9810030261', 'Ramesh Das', '9810040261', 'Jain', '6', 'C', '8'),
(365, 'A+', '2011-02-25', 'student365@example.com', 'Simran Sharma', 'Female', 'image365.jpg', 'Cityville', '9810030271', 'Suresh Sharma', '9810040271', 'Hindu', '7', 'C', '8'),
(366, 'AB-', '2011-04-14', 'student366@example.com', 'Ravi Iyer', 'Male', 'image366.jpg', 'Townsville', '9810030281', 'Kiran Iyer', '9810040281', 'Hindu', '8', 'C', '8'),
(367, 'B+', '2011-06-30', 'student367@example.com', 'Arnav Patel', 'Male', 'image367.jpg', 'Cityville', '9810030291', 'Amit Patel', '9810040291', 'Hindu', '9', 'C', '8'),
(368, 'O+', '2011-08-20', 'student368@example.com', 'Nidhi Mehta', 'Female', 'image368.jpg', 'Townsville', '9810030301', 'Sunil Mehta', '9810040301', 'Hindu', '10', 'C', '8'),
(369, 'B+', '2011-01-12', 'student369@example.com', 'Ankit Kapoor', 'Male', 'image369.jpg', 'Cityville', '9810030311', 'Raj Kapoor', '9810040311', 'Hindu', '1', 'D', '8'),
(370, 'O+', '2011-03-15', 'student370@example.com', 'Ishaan Sinha', 'Male', 'image370.jpg', 'Townsville', '9810030321', 'Vivek Sinha', '9810040321', 'Hindu', '2', 'D', '8'),
(371, 'A-', '2011-05-22', 'student371@example.com', 'Rhea Malhotra', 'Female', 'image371.jpg', 'Cityville', '9810030331', 'Sanjay Malhotra', '9810040331', 'Hindu', '3', 'D', '8'),
(372, 'AB+', '2011-07-10', 'student372@example.com', 'Soham Roy', 'Male', 'image372.jpg', 'Townsville', '9810030341', 'Anil Roy', '9810040341', 'Christian', '4', 'D', '8'),
(373, 'B-', '2011-09-01', 'student373@example.com', 'Pooja Bose', 'Female', 'image373.jpg', 'Cityville', '9810030351', 'Arnab Bose', '9810040351', 'Hindu', '5', 'D', '8'),
(374, 'O-', '2011-11-18', 'student374@example.com', 'Karan Das', 'Male', 'image374.jpg', 'Townsville', '9810030361', 'Ramesh Das', '9810040361', 'Jain', '6', 'D', '8'),
(375, 'A+', '2011-02-25', 'student375@example.com', 'Sneha Sharma', 'Female', 'image375.jpg', 'Cityville', '9810030371', 'Suresh Sharma', '9810040371', 'Hindu', '7', 'D', '8'),
(376, 'AB-', '2011-04-14', 'student376@example.com', 'Raghav Iyer', 'Male', 'image376.jpg', 'Townsville', '9810030381', 'Kiran Iyer', '9810040381', 'Hindu', '8', 'D', '8'),
(377, 'B+', '2011-06-30', 'student377@example.com', 'Shreya Patel', 'Female', 'image377.jpg', 'Cityville', '9810030391', 'Amit Patel', '9810040391', 'Hindu', '9', 'D', '8'),
(378, 'O+', '2011-08-20', 'student378@example.com', 'Anil Mehta', 'Male', 'image378.jpg', 'Townsville', '9810030401', 'Sunil Mehta', '9810040401', 'Hindu', '10', 'D', '8'),
(379, 'B+', '2011-01-12', 'student379@example.com', 'Ruchi Kapoor', 'Female', 'image379.jpg', 'Cityville', '9810030411', 'Raj Kapoor', '9810040411', 'Hindu', '1', 'E', '8'),
(380, 'O+', '2011-03-15', 'student380@example.com', 'Aman Sinha', 'Male', 'image380.jpg', 'Townsville', '9810030421', 'Vivek Sinha', '9810040421', 'Hindu', '2', 'E', '8'),
(381, 'A-', '2011-05-22', 'student381@example.com', 'Poonam Malhotra', 'Female', 'image381.jpg', 'Cityville', '9810030431', 'Sanjay Malhotra', '9810040431', 'Hindu', '3', 'E', '8'),
(382, 'AB+', '2011-07-10', 'student382@example.com', 'Nikhil Roy', 'Male', 'image382.jpg', 'Townsville', '9810030441', 'Anil Roy', '9810040441', 'Christian', '4', 'E', '8'),
(383, 'B-', '2011-09-01', 'student383@example.com', 'Anjali Bose', 'Female', 'image383.jpg', 'Cityville', '9810030451', 'Arnab Bose', '9810040451', 'Hindu', '5', 'E', '8'),
(384, 'O-', '2011-11-18', 'student384@example.com', 'Ravi Das', 'Male', 'image384.jpg', 'Townsville', '9810030461', 'Ramesh Das', '9810040461', 'Jain', '6', 'E', '8'),
(385, 'A+', '2011-02-25', 'student385@example.com', 'Priya Sharma', 'Female', 'image385.jpg', 'Cityville', '9810030471', 'Suresh Sharma', '9810040471', 'Hindu', '7', 'E', '8'),
(386, 'AB-', '2011-04-14', 'student386@example.com', 'Rahul Iyer', 'Male', 'image386.jpg', 'Townsville', '9810030481', 'Kiran Iyer', '9810040481', 'Hindu', '8', 'E', '8'),
(387, 'B+', '2011-06-30', 'student387@example.com', 'Vikrant Patel', 'Male', 'image387.jpg', 'Cityville', '9810030491', 'Amit Patel', '9810040491', 'Hindu', '9', 'E', '8'),
(388, 'O+', '2011-08-20', 'student388@example.com', 'Nisha Mehta', 'Female', 'image388.jpg', 'Townsville', '9810030501', 'Sunil Mehta', '9810040501', 'Hindu', '10', 'E', '8'),
(389, 'O+', '2007-04-12', 'john.doe9a@gmail.com', 'John Doe', 'Male', 'image1.jpg', 'New York', '1234567890', 'Mr. Doe', '9876543210', 'Christian', '1', 'A', '9'),
(390, 'A-', '2007-06-15', 'jane.smith9a@gmail.com', 'Jane Smith', 'Female', 'image2.jpg', 'Los Angeles', '2345678901', 'Mrs. Smith', '8765432109', 'Hindu', '2', 'A', '9'),
(391, 'B+', '2007-08-20', 'mark.jones9a@gmail.com', 'Mark Jones', 'Male', 'image3.jpg', 'Chicago', '3456789012', 'Mr. Jones', '7654321098', 'Christian', '3', 'A', '9'),
(392, 'O-', '2007-10-10', 'emily.brown9a@gmail.com', 'Emily Brown', 'Female', 'image4.jpg', 'Houston', '4567890123', 'Mrs. Brown', '6543210987', 'Muslim', '4', 'A', '9'),
(393, 'AB+', '2007-11-25', 'michael.wilson9a@gmail.com', 'Michael Wilson', 'Male', 'image5.jpg', 'Miami', '5678901234', 'Mr. Wilson', '5432109876', 'Christian', '5', 'A', '9'),
(394, 'O+', '2007-01-18', 'lucy.davis9a@gmail.com', 'Lucy Davis', 'Female', 'image6.jpg', 'Phoenix', '6789012345', 'Mrs. Davis', '4321098765', 'Christian', '6', 'A', '9'),
(395, 'B-', '2007-03-05', 'alex.martin9a@gmail.com', 'Alex Martin', 'Male', 'image7.jpg', 'San Diego', '7890123456', 'Mr. Martin', '3210987654', 'Hindu', '7', 'A', '9'),
(396, 'A+', '2007-05-14', 'sophia.clark9a@gmail.com', 'Sophia Clark', 'Female', 'image8.jpg', 'Dallas', '8901234567', 'Mrs. Clark', '2109876543', 'Christian', '8', 'A', '9'),
(397, 'AB-', '2007-07-22', 'jack.miller9a@gmail.com', 'Jack Miller', 'Male', 'image9.jpg', 'Seattle', '9012345678', 'Mr. Miller', '1098765432', 'Christian', '9', 'A', '9'),
(398, 'O+', '2007-09-30', 'olivia.taylor9a@gmail.com', 'Olivia Taylor', 'Female', 'image10.jpg', 'Boston', '0123456789', 'Mrs. Taylor', '0987654321', 'Muslim', '10', 'A', '9'),
(399, 'O-', '2007-04-25', 'chris.james9b@gmail.com', 'Chris James', 'Male', 'image11.jpg', 'Detroit', '1122334455', 'Mr. James', '6677889900', 'Christian', '1', 'B', '9'),
(400, 'A+', '2007-06-10', 'kate.green9b@gmail.com', 'Kate Green', 'Female', 'image12.jpg', 'Atlanta', '2233445566', 'Mrs. Green', '7788990011', 'Christian', '2', 'B', '9'),
(401, 'B+', '2007-08-30', 'noah.white9b@gmail.com', 'Noah White', 'Male', 'image13.jpg', 'Denver', '3344556677', 'Mr. White', '8899001122', 'Jewish', '3', 'B', '9'),
(402, 'O+', '2007-09-22', 'mia.harris9b@gmail.com', 'Mia Harris', 'Female', 'image14.jpg', 'San Francisco', '4455667788', 'Mrs. Harris', '9900112233', 'Hindu', '4', 'B', '9'),
(403, 'AB-', '2007-11-18', 'luke.martin9b@gmail.com', 'Luke Martin', 'Male', 'image15.jpg', 'Austin', '5566778899', 'Mr. Martin', '1011121314', 'Christian', '5', 'B', '9'),
(404, 'O-', '2007-01-30', 'zoe.daniels9b@gmail.com', 'Zoe Daniels', 'Female', 'image16.jpg', 'Las Vegas', '6677889900', 'Mrs. Daniels', '2122233344', 'Christian', '6', 'B', '9'),
(405, 'A-', '2007-03-17', 'will.jones9b@gmail.com', 'Will Jones', 'Male', 'image17.jpg', 'Miami', '7788990011', 'Mr. Jones', '3233344455', 'Christian', '7', 'B', '9'),
(406, 'B-', '2007-05-02', 'ella.morris9b@gmail.com', 'Ella Morris', 'Female', 'image18.jpg', 'Chicago', '8899001122', 'Mrs. Morris', '4344455566', 'Muslim', '8', 'B', '9'),
(407, 'AB+', '2007-07-19', 'lucas.lee9b@gmail.com', 'Lucas Lee', 'Male', 'image19.jpg', 'Dallas', '9900112233', 'Mr. Lee', '5455566677', 'Christian', '9', 'B', '9'),
(408, 'O+', '2007-10-14', 'ava.garcia9b@gmail.com', 'Ava Garcia', 'Female', 'image20.jpg', 'Phoenix', '1001122334', 'Mrs. Garcia', '6566677889', 'Hindu', '10', 'B', '9'),
(409, 'AB+', '2007-02-20', 'ethan.roberts9c@gmail.com', 'Ethan Roberts', 'Male', 'image21.jpg', 'Orlando', '1231231234', 'Mr. Roberts', '9879879876', 'Christian', '1', 'C', '9'),
(410, 'A-', '2007-04-05', 'sophie.johnson9c@gmail.com', 'Sophie Johnson', 'Female', 'image22.jpg', 'New York', '2342342345', 'Mrs. Johnson', '8768768765', 'Christian', '2', 'C', '9'),
(411, 'B+', '2007-06-28', 'jackson.miller9c@gmail.com', 'Jackson Miller', 'Male', 'image23.jpg', 'Los Angeles', '3453453456', 'Mr. Miller', '7657657654', 'Hindu', '3', 'C', '9'),
(412, 'O+', '2007-08-16', 'madison.moore9c@gmail.com', 'Madison Moore', 'Female', 'image24.jpg', 'Chicago', '4564564567', 'Mrs. Moore', '6546546543', 'Christian', '4', 'C', '9'),
(413, 'AB-', '2007-10-01', 'oliver.taylor9c@gmail.com', 'Oliver Taylor', 'Male', 'image25.jpg', 'Houston', '5675675678', 'Mr. Taylor', '5435435432', 'Christian', '5', 'C', '9'),
(414, 'O-', '2007-11-10', 'isabella.james9c@gmail.com', 'Isabella James', 'Female', 'image26.jpg', 'Miami', '6786786789', 'Mrs. James', '4324324321', 'Muslim', '6', 'C', '9'),
(415, 'A+', '2007-01-22', 'daniel.lee9c@gmail.com', 'Daniel Lee', 'Male', 'image27.jpg', 'Dallas', '7897897890', 'Mr. Lee', '3213213210', 'Christian', '7', 'C', '9'),
(416, 'B-', '2007-03-10', 'layla.harris9c@gmail.com', 'Layla Harris', 'Female', 'image28.jpg', 'San Francisco', '8908908901', 'Mrs. Harris', '2102102102', 'Jewish', '8', 'C', '9'),
(417, 'AB+', '2007-05-05', 'ryan.martin9c@gmail.com', 'Ryan Martin', 'Male', 'image29.jpg', 'Phoenix', '9019019012', 'Mr. Martin', '1091091091', 'Christian', '9', 'C', '9'),
(418, 'O+', '2007-07-17', 'lily.davis9c@gmail.com', 'Lily Davis', 'Female', 'image30.jpg', 'Seattle', '0120120123', 'Mrs. Davis', '0980980987', 'Hindu', '10', 'C', '9'),
(419, 'O-', '2007-04-12', 'emma.thomas9d@gmail.com', 'Emma Thomas', 'Female', 'image31.jpg', 'New York', '2233445566', 'Mrs. Thomas', '7788990011', 'Christian', '1', 'D', '9'),
(420, 'A+', '2007-06-18', 'liam.evans9d@gmail.com', 'Liam Evans', 'Male', 'image32.jpg', 'Los Angeles', '3344556677', 'Mr. Evans', '8899001122', 'Hindu', '2', 'D', '9'),
(421, 'B-', '2007-08-25', 'ava.baker9d@gmail.com', 'Ava Baker', 'Female', 'image33.jpg', 'Chicago', '4455667788', 'Mrs. Baker', '9900112233', 'Christian', '3', 'D', '9'),
(422, 'O+', '2007-10-05', 'noah.morris9d@gmail.com', 'Noah Morris', 'Male', 'image34.jpg', 'Houston', '5566778899', 'Mr. Morris', '1011121314', 'Muslim', '4', 'D', '9'),
(423, 'AB+', '2007-12-11', 'mia.hall9d@gmail.com', 'Mia Hall', 'Female', 'image35.jpg', 'Miami', '6677889900', 'Mrs. Hall', '2122233344', 'Christian', '5', 'D', '9'),
(424, 'A-', '2007-01-30', 'lucas.adams9d@gmail.com', 'Lucas Adams', 'Male', 'image36.jpg', 'Phoenix', '7788990011', 'Mr. Adams', '3233344455', 'Hindu', '6', 'D', '9'),
(425, 'B+', '2007-03-15', 'sophia.johnson9d@gmail.com', 'Sophia Johnson', 'Female', 'image37.jpg', 'Dallas', '8899001122', 'Mrs. Johnson', '4344455566', 'Christian', '7', 'D', '9'),
(426, 'O-', '2007-05-28', 'jack.mitchell9d@gmail.com', 'Jack Mitchell', 'Male', 'image38.jpg', 'San Francisco', '9900112233', 'Mr. Mitchell', '5455566677', 'Christian', '8', 'D', '9'),
(427, 'AB-', '2007-07-09', 'olivia.watson9d@gmail.com', 'Olivia Watson', 'Female', 'image39.jpg', 'Seattle', '1001122334', 'Mrs. Watson', '6566677889', 'Muslim', '9', 'D', '9'),
(428, 'O+', '2007-09-21', 'ethan.carter9d@gmail.com', 'Ethan Carter', 'Male', 'image40.jpg', 'Boston', '1122334455', 'Mr. Carter', '6677889900', 'Christian', '10', 'D', '9'),
(429, 'A-', '2007-02-18', 'amelia.moore9e@gmail.com', 'Amelia Moore', 'Female', 'image41.jpg', 'Orlando', '2233445566', 'Mrs. Moore', '7788990011', 'Christian', '1', 'E', '9'),
(430, 'B+', '2007-04-02', 'james.taylor9e@gmail.com', 'James Taylor', 'Male', 'image42.jpg', 'New York', '3344556677', 'Mr. Taylor', '8899001122', 'Hindu', '2', 'E', '9'),
(431, 'O-', '2007-06-19', 'ella.thomas9e@gmail.com', 'Ella Thomas', 'Female', 'image43.jpg', 'Los Angeles', '4455667788', 'Mrs. Thomas', '9900112233', 'Christian', '3', 'E', '9'),
(432, 'AB+', '2007-08-23', 'logan.clark9e@gmail.com', 'Logan Clark', 'Male', 'image44.jpg', 'Chicago', '5566778899', 'Mr. Clark', '1011121314', 'Muslim', '4', 'E', '9'),
(433, 'A+', '2007-10-14', 'sophia.jones9e@gmail.com', 'Sophia Jones', 'Female', 'image45.jpg', 'Houston', '6677889900', 'Mrs. Jones', '2122233344', 'Christian', '5', 'E', '9'),
(434, 'O+', '2007-12-30', 'oliver.martin9e@gmail.com', 'Oliver Martin', 'Male', 'image46.jpg', 'Miami', '7788990011', 'Mr. Martin', '3233344455', 'Hindu', '6', 'E', '9'),
(435, 'B-', '2007-01-20', 'mia.anderson9e@gmail.com', 'Mia Anderson', 'Female', 'image47.jpg', 'Phoenix', '8899001122', 'Mrs. Anderson', '4344455566', 'Christian', '7', 'E', '9'),
(436, 'AB-', '2007-03-08', 'lucas.davis9e@gmail.com', 'Lucas Davis', 'Male', 'image48.jpg', 'Dallas', '9900112233', 'Mr. Davis', '5455566677', 'Christian', '8', 'E', '9'),
(437, 'O+', '2007-05-12', 'ava.garcia9e@gmail.com', 'Ava Garcia', 'Female', 'image49.jpg', 'San Francisco', '1001122334', 'Mrs. Garcia', '6566677889', 'Muslim', '9', 'E', '9'),
(438, 'A-', '2007-07-25', 'noah.johnson9e@gmail.com', 'Noah Johnson', 'Male', 'image50.jpg', 'Seattle', '1122334455', 'Mr. Johnson', '6677889900', 'Christian', '10', 'E', '9'),
(439, 'O+', '2006-03-12', 'john.williams10a@gmail.com', 'John Williams', 'Male', 'image51.jpg', 'New York', '2233445566', 'Mr. Williams', '7788990011', 'Christian', '1', 'A', '10'),
(440, 'A-', '2006-05-22', 'emma.brown10a@gmail.com', 'Emma Brown', 'Female', 'image52.jpg', 'Los Angeles', '3344556677', 'Mrs. Brown', '8899001122', 'Hindu', '2', 'A', '10'),
(441, 'B+', '2006-07-18', 'liam.jones10a@gmail.com', 'Liam Jones', 'Male', 'image53.jpg', 'Chicago', '4455667788', 'Mr. Jones', '9900112233', 'Christian', '3', 'A', '10'),
(442, 'O-', '2006-09-30', 'sophia.garcia10a@gmail.com', 'Sophia Garcia', 'Female', 'image54.jpg', 'Houston', '5566778899', 'Mrs. Garcia', '1011121314', 'Muslim', '4', 'A', '10'),
(443, 'AB+', '2006-11-25', 'jack.martin10a@gmail.com', 'Jack Martin', 'Male', 'image55.jpg', 'Miami', '6677889900', 'Mr. Martin', '2122233344', 'Christian', '5', 'A', '10'),
(444, 'A+', '2006-01-10', 'mia.thomas10a@gmail.com', 'Mia Thomas', 'Female', 'image56.jpg', 'Phoenix', '7788990011', 'Mrs. Thomas', '3233344455', 'Christian', '6', 'A', '10'),
(445, 'B-', '2006-03-15', 'lucas.harris10a@gmail.com', 'Lucas Harris', 'Male', 'image57.jpg', 'Dallas', '8899001122', 'Mr. Harris', '4344455566', 'Hindu', '7', 'A', '10'),
(446, 'O+', '2006-05-28', 'ella.morris10a@gmail.com', 'Ella Morris', 'Female', 'image58.jpg', 'San Francisco', '9900112233', 'Mrs. Morris', '5455566677', 'Christian', '8', 'A', '10'),
(447, 'AB-', '2006-07-09', 'noah.watson10a@gmail.com', 'Noah Watson', 'Male', 'image59.jpg', 'Seattle', '1001122334', 'Mr. Watson', '6566677889', 'Christian', '9', 'A', '10'),
(448, 'O+', '2006-09-21', 'olivia.clark10a@gmail.com', 'Olivia Clark', 'Female', 'image60.jpg', 'Boston', '1122334455', 'Mrs. Clark', '6677889900', 'Muslim', '10', 'A', '10'),
(449, 'O-', '2006-02-18', 'amelia.johnson10b@gmail.com', 'Amelia Johnson', 'Female', 'image61.jpg', 'Orlando', '2233445566', 'Mrs. Johnson', '7788990011', 'Christian', '1', 'B', '10'),
(450, 'A+', '2006-04-05', 'james.evans10b@gmail.com', 'James Evans', 'Male', 'image62.jpg', 'New York', '3344556677', 'Mr. Evans', '8899001122', 'Hindu', '2', 'B', '10'),
(451, 'B+', '2006-06-19', 'sophia.baker10b@gmail.com', 'Sophia Baker', 'Female', 'image63.jpg', 'Los Angeles', '4455667788', 'Mrs. Baker', '9900112233', 'Christian', '3', 'B', '10'),
(452, 'O+', '2006-08-23', 'logan.clark10b@gmail.com', 'Logan Clark', 'Male', 'image64.jpg', 'Chicago', '5566778899', 'Mr. Clark', '1011121314', 'Muslim', '4', 'B', '10'),
(453, 'AB-', '2006-10-14', 'mia.jones10b@gmail.com', 'Mia Jones', 'Female', 'image65.jpg', 'Houston', '6677889900', 'Mrs. Jones', '2122233344', 'Christian', '5', 'B', '10'),
(454, 'A-', '2006-12-30', 'lucas.martin10b@gmail.com', 'Lucas Martin', 'Male', 'image66.jpg', 'Miami', '7788990011', 'Mr. Martin', '3233344455', 'Hindu', '6', 'B', '10'),
(455, 'B-', '2006-01-20', 'ava.davis10b@gmail.com', 'Ava Davis', 'Female', 'image67.jpg', 'Phoenix', '8899001122', 'Mrs. Davis', '4344455566', 'Christian', '7', 'B', '10'),
(456, 'AB+', '2006-03-08', 'noah.anderson10b@gmail.com', 'Noah Anderson', 'Male', 'image68.jpg', 'Dallas', '9900112233', 'Mr. Anderson', '5455566677', 'Christian', '8', 'B', '10'),
(457, 'O-', '2006-05-12', 'sophia.moore10b@gmail.com', 'Sophia Moore', 'Female', 'image69.jpg', 'San Francisco', '1001122334', 'Mrs. Moore', '6566677889', 'Muslim', '9', 'B', '10'),
(458, 'A+', '2006-07-25', 'jack.taylor10b@gmail.com', 'Jack Taylor', 'Male', 'image70.jpg', 'Seattle', '1122334455', 'Mr. Taylor', '6677889900', 'Christian', '10', 'B', '10'),
(459, 'B+', '2006-04-12', 'emma.thomas10c@gmail.com', 'Emma Thomas', 'Female', 'image71.jpg', 'New York', '2233445566', 'Mrs. Thomas', '7788990011', 'Christian', '1', 'C', '10'),
(460, 'O+', '2006-06-18', 'liam.evans10c@gmail.com', 'Liam Evans', 'Male', 'image72.jpg', 'Los Angeles', '3344556677', 'Mr. Evans', '8899001122', 'Hindu', '2', 'C', '10'),
(461, 'A-', '2006-08-25', 'ava.baker10c@gmail.com', 'Ava Baker', 'Female', 'image73.jpg', 'Chicago', '4455667788', 'Mrs. Baker', '9900112233', 'Christian', '3', 'C', '10'),
(462, 'O-', '2006-10-05', 'noah.morris10c@gmail.com', 'Noah Morris', 'Male', 'image74.jpg', 'Houston', '5566778899', 'Mr. Morris', '1011121314', 'Muslim', '4', 'C', '10'),
(463, 'AB+', '2006-12-11', 'mia.hall10c@gmail.com', 'Mia Hall', 'Female', 'image75.jpg', 'Miami', '6677889900', 'Mrs. Hall', '2122233344', 'Christian', '5', 'C', '10'),
(464, 'A+', '2006-01-30', 'lucas.adams10c@gmail.com', 'Lucas Adams', 'Male', 'image76.jpg', 'Phoenix', '7788990011', 'Mr. Adams', '3233344455', 'Hindu', '6', 'C', '10'),
(465, 'B-', '2006-03-15', 'sophia.johnson10c@gmail.com', 'Sophia Johnson', 'Female', 'image77.jpg', 'Dallas', '8899001122', 'Mrs. Johnson', '4344455566', 'Christian', '7', 'C', '10'),
(466, 'O+', '2006-05-28', 'jack.mitchell10c@gmail.com', 'Jack Mitchell', 'Male', 'image78.jpg', 'San Francisco', '9900112233', 'Mr. Mitchell', '5455566677', 'Christian', '8', 'C', '10'),
(467, 'AB-', '2006-07-09', 'olivia.watson10c@gmail.com', 'Olivia Watson', 'Female', 'image79.jpg', 'Seattle', '1001122334', 'Mrs. Watson', '6566677889', 'Christian', '9', 'C', '10'),
(468, 'O+', '2006-09-21', 'ethan.carter10c@gmail.com', 'Ethan Carter', 'Male', 'image80.jpg', 'Boston', '1122334455', 'Mr. Carter', '6677889900', 'Muslim', '10', 'C', '10'),
(469, 'A+', '2006-01-14', 'lucas.green10d@gmail.com', 'Lucas Green', 'Male', 'image81.jpg', 'New York', '2233445566', 'Mr. Green', '7788990011', 'Christian', '1', 'D', '10'),
(470, 'O+', '2006-03-21', 'emma.king10d@gmail.com', 'Emma King', 'Female', 'image82.jpg', 'Los Angeles', '3344556677', 'Mrs. King', '8899001122', 'Hindu', '2', 'D', '10'),
(471, 'B-', '2006-05-10', 'noah.lee10d@gmail.com', 'Noah Lee', 'Male', 'image83.jpg', 'Chicago', '4455667788', 'Mr. Lee', '9900112233', 'Christian', '3', 'D', '10'),
(472, 'AB+', '2006-07-19', 'mia.scott10d@gmail.com', 'Mia Scott', 'Female', 'image84.jpg', 'Houston', '5566778899', 'Mrs. Scott', '1011121314', 'Muslim', '4', 'D', '10'),
(473, 'A-', '2006-09-05', 'jack.wright10d@gmail.com', 'Jack Wright', 'Male', 'image85.jpg', 'Miami', '6677889900', 'Mr. Wright', '2122233344', 'Christian', '5', 'D', '10'),
(474, 'O-', '2006-11-30', 'sophia.white10d@gmail.com', 'Sophia White', 'Female', 'image86.jpg', 'Phoenix', '7788990011', 'Mrs. White', '3233344455', 'Christian', '6', 'D', '10'),
(475, 'B+', '2006-01-25', 'liam.hill10d@gmail.com', 'Liam Hill', 'Male', 'image87.jpg', 'Dallas', '8899001122', 'Mr. Hill', '4344455566', 'Hindu', '7', 'D', '10'),
(476, 'AB-', '2006-03-08', 'olivia.adams10d@gmail.com', 'Olivia Adams', 'Female', 'image88.jpg', 'San Francisco', '9900112233', 'Mrs. Adams', '5455566677', 'Christian', '8', 'D', '10'),
(477, 'O+', '2006-05-12', 'ethan.morgan10d@gmail.com', 'Ethan Morgan', 'Male', 'image89.jpg', 'Seattle', '1001122334', 'Mr. Morgan', '6566677889', 'Christian', '9', 'D', '10'),
(478, 'A+', '2006-07-25', 'amelia.cooper10d@gmail.com', 'Amelia Cooper', 'Female', 'image90.jpg', 'Boston', '1122334455', 'Mrs. Cooper', '6677889900', 'Muslim', '10', 'D', '10'),
(479, 'B-', '2006-02-15', 'jackson.brown10e@gmail.com', 'Jackson Brown', 'Male', 'image91.jpg', 'New York', '2233445566', 'Mr. Brown', '7788990011', 'Christian', '1', 'E', '10'),
(480, 'O-', '2006-04-18', 'mia.evans10e@gmail.com', 'Mia Evans', 'Female', 'image92.jpg', 'Los Angeles', '3344556677', 'Mrs. Evans', '8899001122', 'Hindu', '2', 'E', '10'),
(481, 'A+', '2006-06-11', 'liam.moore10e@gmail.com', 'Liam Moore', 'Male', 'image93.jpg', 'Chicago', '4455667788', 'Mr. Moore', '9900112233', 'Christian', '3', 'E', '10'),
(482, 'B+', '2006-08-22', 'olivia.mitchell10e@gmail.com', 'Olivia Mitchell', 'Female', 'image94.jpg', 'Houston', '5566778899', 'Mrs. Mitchell', '1011121314', 'Muslim', '4', 'E', '10'),
(483, 'AB-', '2006-10-01', 'noah.carter10e@gmail.com', 'Noah Carter', 'Male', 'image95.jpg', 'Miami', '6677889900', 'Mr. Carter', '2122233344', 'Christian', '5', 'E', '10'),
(484, 'O+', '2006-12-15', 'emma.turner10e@gmail.com', 'Emma Turner', 'Female', 'image96.jpg', 'Phoenix', '7788990011', 'Mrs. Turner', '3233344455', 'Christian', '6', 'E', '10'),
(485, 'A-', '2006-01-27', 'lucas.baker10e@gmail.com', 'Lucas Baker', 'Male', 'image97.jpg', 'Dallas', '8899001122', 'Mr. Baker', '4344455566', 'Hindu', '7', 'E', '10'),
(486, 'B+', '2006-03-14', 'sophia.king10e@gmail.com', 'Sophia King', 'Female', 'image98.jpg', 'San Francisco', '9900112233', 'Mrs. King', '5455566677', 'Christian', '8', 'E', '10'),
(487, 'AB+', '2006-05-20', 'jackson.lee10e@gmail.com', 'Jackson Lee', 'Male', 'image99.jpg', 'Seattle', '1001122334', 'Mr. Lee', '6566677889', 'Christian', '9', 'E', '10'),
(488, 'O-', '2006-07-03', 'amelia.scott10e@gmail.com', 'Amelia Scott', 'Female', 'image100.jpg', 'Boston', '1122334455', 'Mrs. Scott', '6677889900', 'Muslim', '10', 'E', '10'),
(498, 'B+', '2001-05-07T00:00:00.000Z', 'singhmithlesh095@gmail.com', 'Mithlesh Kumar Singh', 'Male', NULL, 'Lalitpur', NULL, 'Ram Krishna Singh', '9867028164', 'Hindu', '1', 'E', '12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKlsaiscrnp07dpm9lvnl7sgmg3` (`staff_id`),
  ADD UNIQUE KEY `UKspxnyh4l2xbmuj2935ne7bm2t` (`student_account_id`);

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students_detail`
--
ALTER TABLE `students_detail`
  ADD PRIMARY KEY (`account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `marks`
--
ALTER TABLE `marks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `students_detail`
--
ALTER TABLE `students_detail`
  MODIFY `account_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=499;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `FK8hu6hnvmunfyeq8wpi995rs5f` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`),
  ADD CONSTRAINT `FKpcorci56b1lcfq3972aq2bxw2` FOREIGN KEY (`student_account_id`) REFERENCES `students_detail` (`account_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
