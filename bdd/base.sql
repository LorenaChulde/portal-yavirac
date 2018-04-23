CREATE DATABASE yaviracweb DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE yaviracweb ;

CREATE TABLE Producto (
  id INT NOT NULL AUTO_INCREMENT ,
  titulo VARCHAR(50) NULL,
  descripcion VARCHAR(255) NULL,
  icono VARCHAR(50) NULL,
  prioridad INT NULL,
  linkPaper VARCHAR(255) NULL,
  linkSitio VARCHAR(255) NULL,
  idPagina INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Pagina (
  id INT NOT NULL AUTO_INCREMENT ,
  slider TEXT NULL,
  esPrincipal BOOLEAN NULL,
  texto TEXT NULL,
  idFoto INT NULL,
  idMenu INT NULL,
  descripcion VARCHAR(255) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Menu (
  id INT NOT NULL AUTO_INCREMENT ,
  descripcion VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE AsiganacionLink (
  id INT NOT NULL AUTO_INCREMENT ,
  prioridad INT NULL,
  idLink INT NULL,
  idPagina INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Noticia (
  id INT NOT NULL AUTO_INCREMENT ,
  titulo VARCHAR(50) NULL,
  fecha DATE NULL,
  descripcion VARCHAR(50) NULL,
  idFoto INT NULL,
  idPagina INT NULL,
  esPublico BOOLEAN NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Link (
  id INT NOT NULL AUTO_INCREMENT ,
  descripcion VARCHAR(50) NULL,
  url VARCHAR(255) NULL,
  idMenu INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Imagen (
  id INT NOT NULL AUTO_INCREMENT ,
  tipoArchivo VARCHAR(255) NULL,
  nombreArchivo VARCHAR(255) NULL,
  adjunto LONGBLOB NULL,
  PRIMARY KEY (id)
) ENGINE myISAM;

CREATE TABLE Comentario (
  id INT NOT NULL AUTO_INCREMENT ,
  fechaHora DATETIME NULL,
  idUsuario INT NULL,
  idNoticia INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Usuario (
  id INT NOT NULL AUTO_INCREMENT ,
  nombreCompleto VARCHAR(255) NULL,
  nickname VARCHAR(50) NULL,
  email VARCHAR(255) NULL,
  clave BLOB NULL,
  avatar VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Item (
  id INT NOT NULL AUTO_INCREMENT ,
  descripcion VARCHAR(50) NULL,
  link VARCHAR(255) NULL,
  idMenu INT NULL,
  idPagina INT NULL,
  PRIMARY KEY (id)
);

