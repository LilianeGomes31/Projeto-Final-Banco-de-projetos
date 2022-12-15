![Banco de projetos](https://github.com/LilianeGomes31/Projeto-Final-Banco-de-projetos/blob/e8549a8ad64487083360ca32c8ca17c5b4057d09/imagens/Tela%201.png)



## *Sumário*

- [Apresentação e justiticativa](#apresentação-e-justificativa)
- [Contextualização](#contextualização)
- [Funcionalidades](#funcionalidades)
- [Arquitetura MVC](#arquitetura-MVC)
- [Tecnologias e dependências e utilizadas](#tecnologias-e-dependências-utilizadas)
- [Instruções para instalação](#instruções-para-instalação)
- [Documentação da API](#documentação-da-api)
- [Contribuição no projeto](#contribuição-no-projeto)


## *Apresentação e justificativa*

O **BANCO DE PROJETOS** é um projeto de conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/).  Este projeto é uma API com CRUD completo que contém um banco de dados e Login. Possui como objetivo iniciar um sistema de controle de orçamento de projetos de Pesquisa Desenvolvimento e Inovação que utilizam como fonte de financiamento os recursos financeiros de Lei de informática. A ideia é fazer o cadastro dos projetos bem como criar o cadastro despesas e depósitos financeiros do projeto. Com  isso, o responsável pela gestão do projeto poderá visualizar de forma mais ágil os recursos disponíveis no seu projeto, bem como o acompanhamento de sua execução.


## *Contextualização*
BANCO DE PROJETOS


Este projeto tem como origem as atividades desenvolvidas no meu trabalho atual, no qual são utilizadas planilhas de controle do orçamento. Baseada nos meus conhecimentos das necessidades e peculiaridades destes tipos de orçamentos e também das exigências relacionadas às prestações de contas deste tipo de recursos, o sistema deverá ser formatado para atender esta demanda. 


## 🏏**Funcionalidades**

#### **Para os projetos**

✔️ Cadastro de novos projetos

✔️ Listar todos os projetos

✔️ Atualizar um projeto específico pelo ID

✔️ Remover um projeto específico do banco de dados

obs., A API tem as mesmas funcionalidades listadas acima para Despesas e Depósitos financeiros.


## 🏗️ **Arquitetura MVC**

```
  📁 reprograma-BANCO DE PROJETOS    
  |-  📁 images         
  |-  📁 node_modules
  |-  📁 src 
  |    |- 📁 controllers    
  |         |- 📄 depositosController.js   
  |         |- 📄 despesasController.js
  |         |- 📄 projetosController.js
  |         |- 📄 usuariosController.js
  |    |- 📁 database  
  |         |- 📄 dbConnect.js  
  |    |- 📁 models  
  |         |- 📄 depositosModel.js 
  |         |- 📄 despesasModel.js   
  |         |- 📄 projetosModel.js
  |         |- 📄 usuariosModel.js
  |    |- 📁 routes  
  |         |- 📄 depositosRoute.js 
  |         |- 📄 despesasRoute.js
  |         |- 📄 projetosRoute.js    
  |         |- 📄 index.js
  |         |- 📄 usuariosRoute.js 
  |    |- 📄 app.js  
  |-  📁 test 
  |         |- 📄 courses.test.js 
  |         |- 📄 institutions.test.js 
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 README.md 
  |-  📄 server.js
  |-  📄 Swagger.js    
  ```

## Tecnologias e Dependências Utilizadas

| Ferramenta      | Descrição                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `javascript`    | Linguagem de programação                                                                                                                 |
| `node.js`       | Ambiente de execução do javascript                                                                                                       |
| `express`       | Framework NodeJS                                                                                                                         |
| `mongoose`      | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections                                    |
| `nodemon`       | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente                                  |
| `npm`           | Gerenciador de pacotes.                                                                                                                  |
| `MongoDb`       | Banco de dados não relacional orietado a documentos                                                                                      |
| `Mongo Atlas`   | Interface gráfica para verificar se os dados foram persistidos                                                                           |
| `Postman`       | Interface gráfica para realizar os testes                                                                                                |
| `jsonwebtoken ` | Dependência que implementa o protocolo JSON Web Token                                                                                    |
| `bcrypt`        | Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password                                 |
| `dotenv`        | Dependência para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral |
| `swagger`       | Gera a documentação                                                                                                                      |
| `render`        | hospeda a documentação                                                                                                                   |
## Instruções para instalação

**Instalações iniciais**


Package.json em JS:
npm init -y
Express, cors e node_modules:
npm i express cors
Nodemon:
npm i -D nodemon


**Banco de dados**

Mongoose:
npm i mongoose


**Autententicação**

Jwt:
npm install jsonwebtoken -- save
Bcrypt:
npm install bcrypt -- save

**Variaveis de ambiente**

Dotenv:
npm install dotenv-safe -- save




**Documentação**


Swagger:
npm i swagger-autogen swagger-ui-express


## 🔒 Variáveis de Ambiente

*Variáveis a serem instaladas no .env**

`PORT=NUMERO_PORTA`  
`SECRET=CHAVE_HASH_SEM_ESPAÇO`  
`DATABASE_MONGO=CONEXÃO_COM_MONGO_SEM_ASPAS`  
  

Link para a documentação:

📝 [Swagger](https://banco-de-projetos.onrender.com/minha-rota-de-documentacao/#/)

📝 [Render](https://banco-de-projetos.onrender.com/)



## Documentação da API

#### Todas as rotas existentes neste projeto:


- Usuários

| Tipo   |   Rota                                       |        Descrição da Rota                   | Status | Auth |
| ------ | -------------------------------------------- | -------------------------------------------| ------ |----- |
| POST   | /bancodeprojetos/usuarios/                   | Criar um novo usuário                      |   201  |  ❌  |
| GET    | /bancodeprojetos/usuarios/usuarios/          | Listar todos os usuários                   |   200  |  ❌  |
| DELETE | /bancodeprojetos/usuarios/usuarios/config/:id| Remover um usuário                         |   200  |  ❌  |
| POST   | /bancodeprojetos/usuarios/usuarios/login/:id | Devolve o token de um usuário              |   200  |  ✔️  |


- Projetos

| Verbo  |   Rota                         |         Descrição da Rota                                    | Status | Auth |
| ------ | ------------------------------ | -------------------------------------------------------------| ------ |----- |
| GET    |/bancodeprojetos/projetos/todos | Listar todos os projetos cadastrados                         |   200  |  ❌  |
| GET    | /bancodeprojetos/projetos/     | Listar projetos por empresa financiadora instituição por ID  |   200  |  ❌  |
| GET    |/bancodeprojetos/projetos/:id   | Listar todos os projetos por id                              |   200  |  ❌  |
| POST   | /bancodeprojetos/projetos/add  | Cadastra um novo projeto                                     |   201  |  ❌  |
| PATCH  | /bancodeprojetos/projetos/:id  | Atualiza informação do projeto por id                        |   201  |  ❌  |
| DELETE | /bancodeprojetos/projetos/:id  | Remove um projeto cadastrado                                 |   200  |  ❌  |


- Despesas  

| Verbo  |   Rota                                               | Descrição da Rota             | Status | Auth |
| ------ | ----------------------------------------- | -----------------------------------------| ------ |----- |
| GET    | /bancodeprojetos/projetos/despesas /todas | Listar todas as despesas cadastrados     |   200  |  ❌  |
| GET    | /bancodeprojetos/projetos/despesas/:id    | Mostrar despesas cadastradas por ID      |   200  |  ❌  |
| PATCH  | /bancodeprojetos/projetos/despesas/:Id    | Atualiza despesas por id                 |   200  |  ❌  |
| POST   | /bancodeprojetos/projetos/despesas/add    | Cadastra nova despesa                    |   201  |  ❌  |
| DELETE | /bancodeprojetos/projetos/despesas/:id    | Remove o cadastro de uma despesa pelo ID |   200  |  ❌  |


- Depósitos

| Verbo  |   Rota                                               | Descrição da Rota              | Status | Auth |
| ------ | ------------------------------------------ | ---------------------------------------- | ------ |----- |
| GET    | /bancodeprojetos/projetos/depoditos /todos | Listar todos os depósitos cadastrados    |   200  |  ❌  |
| GET    | /bancodeprojetos/projetos/depositos/:id    | Mostrar depósitos cadastrados por ID     |   200  |  ❌  |
| PATCH  | /bancodeprojetos/projetos/depositos/:Id    | Atualiza depósitos por id                |   200  |  ❌  |
| POST   | /bancodeprojetos/projetos/depositos/add    | Cadastra novo depósito                   |   201  |  ❌  |
| DELETE | /bancodeprojetos/projetos/depositos/:id    | Remove o cadastro de um depósito pelo ID |   200  |  ❌  |

 *PROTEÇÃO* Para testar via Postman, passar bearer token no header de autenticação $ Bearer Token

## ✨ **Contribuição no projeto** 

1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`
3. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`
4. Instale as dependências necessárias à execução da API através do comando `npm install`
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: Minha contribuição"`
6. Envie as suas alterações: `git push origin minha-branch`





##  **Autora**

[linkedin](https://www.linkedin.com/in/maria-liliane-moura-gomes-24a6056/)
