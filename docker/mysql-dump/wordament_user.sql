-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wordament
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `USER` (
  `ID` char(36) NOT NULL,
  `USERname` varchar(255) DEFAULT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `LoginPassword` binary(32) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `USERname` (`USERname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES ('0855a8be-9cc0-4b9a-b8df-7d4dce039d40','sssssss','sssss','sss',_binary 's\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('0b5735de-9d2a-4148-99dc-6d4287b01881','b','b','b',_binary 'b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('16791beb-8050-4317-901a-b882590b79ab','d','d','d',_binary 'd\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('286cb0b5-8a9f-4aa2-b4cd-79602d54e61f','ee','ee','ee',_binary 'ee\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('2c8c6bca-11ec-499e-a213-00edce4b1b0e','xasasasas','xx','x',_binary 'x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('3d6cd961-0cac-49a0-9833-01d289f5ace3','aw','cz','cz',_binary 'aw\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('4079ad11-be50-480d-8505-7ca8ca72ece4','mhz','ming','hua',_binary 'mhz\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('463cfb43-f6be-40ca-8224-d0fbcf4085ae','test','cosun','zhou',_binary 'password\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('59296c48-92eb-48f6-a6ff-f63feac2febf','a;sdkj;kj','asdfad','a;sdkfa;d',_binary 'a;sdkfjaksdf\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('6438d51b-cfc0-4682-ae5e-e751d4830ad4','ssssssss','s','s',_binary 'ssss\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('67a7e3d5-5558-4d6c-b52f-025bb80edfc0','colin','Colin','zhou',_binary 'zhou\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('69c8e461-543d-4d7d-ac79-fddad49f229a','czhou578','Colin','Zhou',_binary 'podium218\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('6b945dc6-11bc-4936-8e21-0c22843e3557','aaa','aaa','aaa',_binary 'aaa\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('6be428b7-1d12-496a-8b72-42efbbafb918','e','e','e',_binary 'e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('71852b15-3d73-4375-a7ba-97859d2daf2e','ca','ca','ca',_binary 'ca\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('78332624-aa81-44ba-b71a-95c712607c92','c','c','c',_binary 'c\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('82da715a-b8e0-4578-ac79-514f8cf124bb','ava','ava','tan',_binary 'tan\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('84e41eb1-7eb6-4697-96fe-ef37a348672b','dssssss','as','d',_binary 'd\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('8706c0ff-8a90-4aab-8f3f-86997a895f57','sss','sss','sss',_binary 'sss\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('9aa3d1e6-ce00-4f3c-a013-ec1d003ada20','colinsss','Colin','zhou',_binary 'zhou\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('9dc7b412-f637-47b3-9139-92abb37c1905','minghua','Ming Hua','Zhou',_binary 'zhou\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('a1ec4e2e-46e5-495c-88ef-e07fe6ca9cd5','cs','cs','cs',_binary 'cs\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('b532a4e9-2964-4be7-b98d-74b23deede18','colinz','colinz','colin',_binary 'colin\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('ca06a6bd-9f82-4358-a4ac-5edb3d00391e','asdasdasdadadad','s','wwww',_binary 'aaa\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('dd2c3a0b-750d-4638-86be-e41e354d1a88','x','x','x',_binary 'x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),('df3eaa85-1ffd-4db7-bece-b60add87e2dd','cz','Colin','Zhou',_binary 'cz\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-20 20:25:27
