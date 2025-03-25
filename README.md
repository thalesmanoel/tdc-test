# Call of Papers - Documentação

## Sobre o Projeto
Call of Papers é uma aplicação web desenvolvida com Angular no frontend e Spring Boot no backend. O objetivo do sistema é permitir que usuários submetam propostas de artigos, e possam vizualizar essas propostas.

## Tecnologias Utilizadas
- **Frontend:** Angular (Standalone Components, TypeScript, HTML e CSS)
- **Backend:** Java com Spring Boot e Spring Data
- **Banco de Dados:** H2
- **Ferramentas Auxiliares:** Maven, Node.js/NPM, Angular CLI

## Requisitos de Instalação
Antes de rodar o projeto, certifique-se de ter instalado:
- JDK 17
- Maven
- NodeJS
- Angular 17: npm install -g @angular/cli@17

## Passo a passo para executar o projeto

### Backend (Spring Boot e Java)
```bash
# Clone o repositório do projeto
git clone https://github.com/thalesmanoel/tdc-test

# Entre na pasta de backend
cd tdc-test/backend

# Compile e execute o backend
mvn clean install
mvn spring-boot:run
```

### Frontend (Angular)
```bash

# Entre na pasta do frontend
cd tdc-test/frontend

# Execute o Angular
ng serve 
```

## Funcionalidade
### Acesse o formulário pelo link
```bash
http://localhost:4200/principal
```
### Exemplo de submissão do formulário
- **Título**: "A Revolução da Inteligência Artificial"
- **Resumo**: "Este artigo explora o impacto da inteligência artificial em diversas áreas, incluindo saúde, educação e trabalho. Discutiremos os avanços atuais e o futuro da IA."
- **Nome do autor**: "João Silva"
- **E-mail**: "joao.silva@email.com"

## Endpoints da API
### Listar todas as propostas
```bash
GET  http://localhost:8080/proposal/listAll
```

### Salvar uma nova proposta
```bash
POST http://localhost:8080/proposal/save
Content-Type: application/json

{
  "title": "Título do Paper",
  "summary": "Resumo do Paper",
  "authorName": "Nome do Autor",
  "email": "autor@email.com"
}
```

## Contato
Thales Carrion - thalesdesenvolvedor@gmail.com

Acesse meu [Linkedin](https://www.linkedin.com/in/thales-carrion/)
