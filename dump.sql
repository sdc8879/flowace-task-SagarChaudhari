CREATE DATABASE  IF NOT EXISTS `flowace` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `flowace`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: flowace
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mst_items`
--

DROP TABLE IF EXISTS `mst_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mst_items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(200) DEFAULT NULL,
  `item_quantity` double DEFAULT NULL,
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mst_items`
--

LOCK TABLES `mst_items` WRITE;
/*!40000 ALTER TABLE `mst_items` DISABLE KEYS */;
INSERT INTO `mst_items` VALUES (1,'Wings of Fire',2,'2020-01-19 15:48:45',NULL),(2,'Node Js In action',10,'2020-01-19 15:49:01',NULL),(3,'Angular In action',14,'2020-01-19 15:50:07',NULL),(4,'React Js Beginners',3,'2020-01-19 15:50:23',NULL),(5,'Flutter',20,'2020-01-19 15:50:46',NULL),(6,'Loop Back In Action',0,'2020-01-19 15:51:13',NULL);
/*!40000 ALTER TABLE `mst_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mst_order`
--

DROP TABLE IF EXISTS `mst_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mst_order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_item_id` int(11) DEFAULT NULL,
  `order_item_name` varchar(100) DEFAULT NULL,
  `order_customer_id` int(11) DEFAULT NULL,
  `order_status` tinyint(4) DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mst_order`
--

LOCK TABLES `mst_order` WRITE;
/*!40000 ALTER TABLE `mst_order` DISABLE KEYS */;
INSERT INTO `mst_order` VALUES (3,1,'Wings of Fire',1,2,'2020-01-22 19:28:58'),(4,1,'Wings of Fire',1,2,'2020-01-22 19:29:32'),(5,1,'Wings of Fire',1,2,'2020-01-22 19:30:48'),(6,1,'Wings of Fire',1,2,'2020-01-22 21:02:22'),(7,1,'Wings of Fire',1,2,'2020-01-22 21:03:22'),(8,2,'Node Js In action',1,1,'2020-01-22 21:03:34'),(9,3,'Angular In action',1,2,'2020-01-22 21:04:12'),(10,1,'Wings of Fire',1,1,'2020-01-22 21:19:28'),(11,2,'Node Js In action',1,1,'2020-01-22 21:19:29');
/*!40000 ALTER TABLE `mst_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mst_order_status`
--

DROP TABLE IF EXISTS `mst_order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mst_order_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_status_name` varchar(100) DEFAULT NULL,
  `order_status_flag` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mst_order_status`
--

LOCK TABLES `mst_order_status` WRITE;
/*!40000 ALTER TABLE `mst_order_status` DISABLE KEYS */;
INSERT INTO `mst_order_status` VALUES (1,'Out Of Stock',1),(2,'Confirmed',2),(3,'Pending',3);
/*!40000 ALTER TABLE `mst_order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mst_user`
--

DROP TABLE IF EXISTS `mst_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mst_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL,
  `user_status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mst_user`
--

LOCK TABLES `mst_user` WRITE;
/*!40000 ALTER TABLE `mst_user` DISABLE KEYS */;
INSERT INTO `mst_user` VALUES (1,'admin','admin@gmail.com','123',1,1),(2,'sagar','sagar@gmail.com','1234',2,1),(3,'akash','akash@gmail.com','12345',2,1),(4,'amit','amit@gmail.com','123456',2,1);
/*!40000 ALTER TABLE `mst_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mst_user_type`
--

DROP TABLE IF EXISTS `mst_user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mst_user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mst_user_type`
--

LOCK TABLES `mst_user_type` WRITE;
/*!40000 ALTER TABLE `mst_user_type` DISABLE KEYS */;
INSERT INTO `mst_user_type` VALUES (1,'admin'),(2,'customer');
/*!40000 ALTER TABLE `mst_user_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-23  3:05:00
