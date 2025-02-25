/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `parent_student` (
  `id_student` int NOT NULL,
  `father_name` varchar(100) DEFAULT NULL,
  `father_telephone` varchar(100) DEFAULT NULL,
  `mother_name` varchar(100) DEFAULT NULL,
  `mother_telephone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_student`),
  CONSTRAINT `parent_student_ibfk_1` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `scores` (
  `id_student` int NOT NULL,
  `maths` int DEFAULT NULL,
  `physics` int DEFAULT NULL,
  `chemistry` int DEFAULT NULL,
  `biology` int DEFAULT NULL,
  `literature` int DEFAULT NULL,
  PRIMARY KEY (`id_student`),
  CONSTRAINT `scores_ibfk_1` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `student` (
  `id_student` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id_student`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `parent_student` (`id_student`, `father_name`, `father_telephone`, `mother_name`, `mother_telephone`) VALUES
(1, 'John Smith', '123-456-7890', 'Jane Smith', '987-654-3210');
INSERT INTO `parent_student` (`id_student`, `father_name`, `father_telephone`, `mother_name`, `mother_telephone`) VALUES
(2, 'Michael Johnson', '112-233-4455', 'Emily Johnson', '554-433-2211');
INSERT INTO `parent_student` (`id_student`, `father_name`, `father_telephone`, `mother_name`, `mother_telephone`) VALUES
(3, 'Robert Brown', '998-877-6655', 'Linda Brown', '556-677-8899');
INSERT INTO `parent_student` (`id_student`, `father_name`, `father_telephone`, `mother_name`, `mother_telephone`) VALUES
(4, 'William Lee', '101-010-1010', 'Mary Lee', '010-101-0101'),
(5, 'Richard Wilson', '121-212-1212', 'Patricia Wilson', '212-121-2121');

INSERT INTO `scores` (`id_student`, `maths`, `physics`, `chemistry`, `biology`, `literature`) VALUES
(1, 85, 90, 80, 75, 92);
INSERT INTO `scores` (`id_student`, `maths`, `physics`, `chemistry`, `biology`, `literature`) VALUES
(2, 78, 82, 88, 90, 85);
INSERT INTO `scores` (`id_student`, `maths`, `physics`, `chemistry`, `biology`, `literature`) VALUES
(3, 92, 88, 95, 80, 78);
INSERT INTO `scores` (`id_student`, `maths`, `physics`, `chemistry`, `biology`, `literature`) VALUES
(4, 80, 75, 85, 92, 90),
(5, 50, 50, 50, 51, 82);

INSERT INTO `student` (`id_student`, `email`, `full_name`, `age`) VALUES
(1, 'alice.smith@example.com', 'Alice Smith', 16);
INSERT INTO `student` (`id_student`, `email`, `full_name`, `age`) VALUES
(2, 'bob.johnson@example.com', 'Bob Johnson', 16);
INSERT INTO `student` (`id_student`, `email`, `full_name`, `age`) VALUES
(3, 'charlie.brown@example.com', 'Charlie Brown', 16);
INSERT INTO `student` (`id_student`, `email`, `full_name`, `age`) VALUES
(4, 'david.lee@example.com', 'David Lee', 16),
(5, 'eva.wilson@example.com', 'Eva Wilson', 16);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;