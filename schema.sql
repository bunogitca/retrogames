create database db_retrogames;

use db_retrogames;

create table jogos (
    id int auto_increment primary key,
    titulo varchar(255) not null,
    plataforma varchar(100) not null,
    desenvolvedora varchar(150) not null,
    imagem_url text not null,
    preco decimal(10, 2) not null,
    data_cadastro timestamp default current_timestamp
);

insert into jogos (titulo, plataforma, desenvolvedora, imagem_url, preco) values
('Super Mario World', 'SNES', 'Nintendo', 'https://unsplash.com', 150.00),
('Sonic the Hedgehog', 'Mega Drive', 'SEGA / Sonic Team', 'https://unsplash.com', 120.50),
('Castlevania: Symphony of the Night', 'PS1', 'Konami', 'https://unsplash.com', 250.00);
