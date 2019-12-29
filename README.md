
# Integração de uma API em NodeJS com um banco de dados SQL    
API construída com intuíto de aprender como funciona a integração do NodeJS com um banco de dados SQL (Postgres) utilizando o ORM sequelize, seguido o vídeo da Rocketseat 
[# Masterclass #01 - SQL no Node.js com Sequelize](https://www.youtube.com/watch?v=Fbu7z5dXcRs&list=PL85ITvJ7FLoiNndfuEs2So-MFLSMvBmmD&index=2)    

## Principais Tecnologias & Frameworks utilizados.
- Node.JS v10.15.2
- Sequelize 5.21.3

## Estrutura do projeto

 *  src
	  * config 
		* database.js -> Script de configuração de conexão com DB
	  * controllers
		* AddressController.js -> Lida com as requisições /user/user_id/addressess
		* ReportController.js -> Lida com as requisições /report
		* TechController.js -> Lida com as requisições /user/user_id/techs
	  	* UserController.js -> -> Lida com as requisições /users
	  * database 
		* index.js ->	Inicializa os models do banco e suas respectivas associações
		* migrations -> Pasta que contém todas as migrations da aplicação
	 * model
		* Address -> Modelo de endereço
		* Techs -> Modelo de tecnologias
		* User -> Modelo de usuários
	* routes.js -> Mapeamento de todas rotas da aplicação, designa a rota para seu devido controller
	* server.js -> Main da aplicação, inicializa o servidor na porta 3300
			  

## Execução do projeto
Para executar o projeto, você deve ter instalado o [Node.JS](https://nodejs.org/en/download/) .
### Dev (Servidor com hotload)
Estando na raiz do projeto
```bash
	npm run dev
```
### Prod
```bash
	npm run build
```

