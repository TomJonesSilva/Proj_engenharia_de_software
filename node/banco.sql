
-- comandos sql
-- tem que criar o banco de dados
-- banco utilizado mysql
-- esecutar o codigo abaixo

create database gma;

use gma;

create table Usuario (
	senha varchar(30) not null,
	email varchar(30) not null primary key unique,
	nick varchar(30) not null unique,
	numero integer
);

create table Jogador (
	nick varchar(30) primary key unique,
	fichas varchar(30) null,
	mesas integer null unique,
	Resumo varchar(300) null,
	habilidades varchar(100) null,
    foreign key (nick) references usuario(nick)
    
);

create table Mesa (
	id integer primary key auto_increment unique not null,
	mestre varchar(30) unique not null,
	jogadores varchar(30) unique,
	avisos varchar(1000),
	privacidade boolean,
    foreign key (mestre) references jogador(nick),
    foreign key (jogadores) references jogador(nick)
);

alter table jogador
add foreign key(mesas)references mesas(id);


create table Bag (
	nick_jogador varchar(30) primary key unique,
	id_mesa integer,
	bag varchar(500),
    foreign key(nick_jogador) references jogador(nick),
    foreign key(id_mesa) references mesas(id)
);

create table Avisos_sessoes (
	id_mesas integer primary key unique,
	horario datetime not null,
    nick_jogador varchar(30) unique,
	aviso varchar(500),
    foreign key(id_mesas) references mesas(id),
    foreign key(nick_jogador) references jogador(nick)
);


