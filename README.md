# Cafeteria Full Stack

Este é um projeto Full Stack para gerenciar uma cafeteria, permitindo realizar operações CRUD (Create, Read, Update, Delete) com informações sobre cafés, incluindo preço e descrição.

## Sumário

- [Objetivo](#objetivo)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Objetivo

O objetivo deste projeto é fornecer uma aplicação completa que permita gerenciar cafés em uma cafeteria. Usuários podem adicionar, visualizar, atualizar e excluir informações sobre diferentes cafés, incluindo seus preços e descrições.

## Tecnologias

O projeto utiliza as seguintes tecnologias:

- **Frontend:**
  - React
  - Axios

- **Backend:**
  - Node.js
  - Express
  - Mongoose
  - MongoDB

## Instalação

Para instalar e configurar o ambiente de desenvolvimento localmente, siga os passos abaixo:

### Backend

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/cafeteria-full-stack.git
    cd cafeteria-full-stack/backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados MongoDB. Crie um arquivo `.env` na raiz do diretório `backend` e adicione a variável de ambiente com a URL do seu MongoDB:
    ```env
    MONGODB_URI=sua_mongodb_uri
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

### Frontend

1. Navegue até o diretório `frontend`:
    ```bash
    cd ../frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie a aplicação React:
    ```bash
    npm start
    ```

## Uso

Após a instalação e configuração, você pode usar a aplicação para gerenciar os cafés da cafeteria. 

1. Acesse a aplicação no navegador em `http://localhost:3000`.
2. Utilize a interface para adicionar, visualizar, atualizar e excluir cafés.

## Contribuição

Para contribuir com este projeto, siga os passos abaixo:

1. Fork este repositório.
2. Crie uma branch: `git checkout -b sua-branch`.
3. Faça suas alterações e commit: `git commit -m 'Descrição das suas alterações'`.
4. Envie para a branch original: `git push origin sua-branch`.
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
