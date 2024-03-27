create database gma;

use gma;



create table jogador (
	id integer primary key auto_increment,
	nick varchar(30) not null unique,
	Resumo varchar(500)
);

create table mesa (
	id integer primary key auto_increment,
	mestre integer,
	descricao varchar(500),
	privacidade boolean
);

create table participa(
	id integer primary key auto_increment,
    id_mesa integer,
    id_jogador integer
);

create table post (
	id_mesa integer primary key,
	horario datetime not null,
    nick_jogador varchar(30),
	aviso varchar(1000)
);

create table ficha (
	id integer primary key auto_increment,
    id_jogador integer,
    ficha varchar(2000),
    bag varchar(300)
);

#um jogador pode ter varias fichas
#um jogador pode estar em varias mesas


#uma mesa possue 1 meste
#uma mesa pode ter vários jogadores
alter table mesa 
add foreign key(mestre)references jogador(id);

#relacionamento muitos para muitos entre jogador e mesa
alter table participa
add foreign key(id_mesa)references mesa(id),
add foreign key(id_jogador)references jogador(id);

#cada mesa possue 1 post e um post é referente há uma mesa
alter table post
add foreign key(id_mesa)references mesa(id),
add foreign key(nick_jogador)references jogador(nick);

# um jogador pode ter várias fichas e uma ficha é de um jogador
alter table ficha 
add foreign key(id_jogador)references jogador(id);


