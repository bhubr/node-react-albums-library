CREATE DATABASE musicalbums CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'musicalbums'@'localhost' IDENTIFIED BY 'musicalbums';
GRANT ALL PRIVILEGES ON musicalbums.* TO 'musicalbums'@'localhost';
FLUSH PRIVILEGES;