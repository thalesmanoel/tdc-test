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
cd call-of-papers/backend

# Compile e execute o backend
mvn clean install
mvn spring-boot:run
```

### Frontend (Angular)
```bash
# Instale Node.js e NPM (se ainda não tiver)
sudo apt install nodejs npm       # Para Linux
choco install nodejs              # Para Windows

# Instale o Angular CLI
global npm install -g @angular/cli

# Clone o frontend
cd ../frontend

# Instale as dependências
npm install

# Execute o Angular
ng serve --open
```

## Endpoints da API
### Listar todas as propostas
```bash
GET http://localhost:8080/proposal/listAll
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

## Estrutura do Projeto
```bash
call-of-papers/
├── backend/  # Código Spring Boot
│   ├── src/main/java/...  # Código Java
│   ├── src/main/resources/application.properties  # Configurações
│   ├── pom.xml  # Dependências do Maven
│   └── ...
│
├── frontend/  # Código Angular
│   ├── src/app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
└── README.md  # Documentação
```

## Contribuição
Caso queira contribuir para o projeto, faça um fork e envie um pull request.

## Contato
[Seu Nome] - [Seu Email] - [LinkedIn/GitHub]
