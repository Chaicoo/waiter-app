<h1 align="center">
	🚧 Waiter App 🚧
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> 
</p>

## 💻 Sobre o projeto

O Waiter app é uma aplicação Web e mobile que tem como objetivo facilitar o atendimento de um restaurante, onde o garçom pode fazer o pedido do cliente e enviar para a cozinha, e a cozinha pode ver os pedidos que estão sendo feitos e alterar o status do pedido.

Projeto desenvolvido durante o evento "O poder do JavaScript" da [JStack](https://jstack.com.br/).

## Layout Web

<p align="center">
  <img alt="WaiterApp" title="#WaiterApp" src="https://github.com/Chaicoo/waiter-app/blob/main/assets/home_UI_web.png" width="100%">

  <img alt="WaiterApp" title="#WaiterApp" src="https://github.com/Chaicoo/waiter-app/blob/main/assets/modal_UI_web.png" width="100%">
</p>



## ⚙️ Funcionalidades

- [x] Garçom pode fazer o pedido do cliente e enviar para a cozinha.
- [x] Cozinha pode ver os pedidos que estão sendo feitos e alterar o status do pedido.
- [x] Garçom pode deletar ou editar o pedido.
- [x] O restaurante pode criar e editar novos produtos e categorias.

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. [Backend](https://github.com/Chaicoo/waiter-app/tree/main/api)
2. [Frontend](https://github.com/Chaicoo/waiter-app/tree/main/web)
3. [Mobile]()

💡O Frontend e o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [mongoDB](https://www.mongodb.com/try/download/community). O teste da aplicação foi feito no [Insomnia](https://insomnia.rest/download/).


#### 🎲 Rodando o Backend

```bash

# Clone este repositório
$ git clone github.com/Chaicoo/waiter-app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd waiter-app

# Vá para a pasta da aplicação Backend
$ cd api

# Rode o mongoDB
$ sudo systemctl start mongod

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# Execute o build da aplicação
$ yarn build

# Execute a aplicação em modo de produção
$ yarn start

# O servidor inciará na porta:3001 - acesse http://localhost:3001

```

<p align="center">
  <a href="https://github.com/Chaicoo/waiter-app/blob/main/api/Insomnia_2022-11-15.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

#### 🧭 Rodando o Frontend

```bash

# Clone este repositório
$ git clone github.com/Chaicoo/waiter-app.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd waiter-app

# Vá para a pasta da aplicação Frontend
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[Mongoose](https://mongoosejs.com/)**
-   **[MongoDB](https://www.mongodb.com/)**
-   **[Typescript](https://www.typescriptlang.org/)**

> Veja o arquivo  [package.json](https://github.com/Chaicoo/waiter-app/blob/main/api/package.json)

#### **Web**  ([React](https://reactjs.org/))

-   **[React](https://reactjs.org/)**
-   **[Styled Components](https://styled-components.com/)**
-   **[Typescript](https://www.typescriptlang.org/)**

> Veja o arquivo  [package.json](https://github.com/Chaicoo/waiter-app/blob/main/web/package.json)