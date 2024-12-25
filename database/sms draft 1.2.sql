-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2024 at 05:38 AM
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
(5, 8, NULL, 'mks', 'Teacher', '8', 'mks'),
(6, 9, NULL, '$2a$10$IkL9RCECS.6UaSTx35x81uPenHnOZUoKgYwPYGs7lqTXGJXv4CIw6', 'Teacher', '9', 'root');

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
(3, '10', '10', '2001-01-01', 'Science', 'singhmithlesh095@gmail.com', 'MITHLESH KUMAR SINGH', NULL, 'lalitpur', '9817622227', 'STD005', 'B_PLUS', 'MALE'),
(4, '10', '10', '2001-01-01', 'Science', 'singhmithlesh095@gmail.com', 'MITHLESH KUMAR SINGH', NULL, 'lalitpur', '9817622227', 'STD005', 'B_PLUS', 'MALE'),
(5, '10', '10', '2002-01-01', 'Nepali', 'subinsedhai002@gmail.com', 'Subin Sedhai', NULL, 'lalitpur', '9876543210', 'STD006', 'O_MINUS', 'MALE'),
(6, '10', '10', '2002-01-01', 'Nepali', 'singhmithlesh095@gmail.com', 'MITHLESH KUMAR SINGH', '', 'lalitpur', '9817622227', 'STD007', 'B_MINUS', 'MALE'),
(7, '10', '10', '2002-01-01', 'Nepali', 'singhmithlesh095@gmail.com', 'MITHLESH KUMAR SINGH', '', 'lalitpur', '9817622227', 'STD007', 'B_MINUS', 'MALE'),
(8, '10', '10', '2002-01-01', 'Accountancy', 'singhmithlesh095@gmail.com', 'MITHLESH KUMAR SINGH', '', 'lalitpur', '9817622227', 'STD007', 'B_PLUS', 'MALE'),
(9, '10', '10', '', 'English', 'singhmithlesh095@gmail.com', 'MITHLESH KUMAR SINGH', '', 'lalitpur', '9817622227', 'STD008', 'AB_PLUS', 'MALE');

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
(1, 'B+', '2001-05-07', 'singhmithlesh095@gmail.com', 'Mithlesh Kumar Singh', 'Male', 'mks.png', 'Lalitpur', '9817622227', 'Ram Krishna Singh', '9867028164', 'Hindu', '1', 'A', '10'),
(2, 'A+', '2015-01-01', 'arya.sharma1@example.com', 'Arya Sharma', 'Male', 'arya1.jpg', 'Kathmandu', '9800000001', 'Ramesh Sharma', '9800001001', 'Hindu', '1', 'A', '1'),
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
(77, 'AB-', '2016-12-12', 'amit.karki@example.com', 'Amit Karki', 'Male', 'path/to/image', 'Kathmandu', '9812345719', 'Renu Karki', '9812345729', 'Hindu', '10', 'D', '2');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `marks`
--
ALTER TABLE `marks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `students_detail`
--
ALTER TABLE `students_detail`
  MODIFY `account_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

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
