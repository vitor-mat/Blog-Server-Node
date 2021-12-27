# Blog App Api

Blog App Api se trata da api rest que permite a criação, edição, remoção e busca no banco de dados, dos posts de uma apliação de blog de nome semelhante (blog app) que também pode ser encontrada neste github.

![NodeJs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![Sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) ![Cors](https://img.shields.io/badge/-Cors-coral)
## SUMÁRIO

- Status
- Url
- Features e EndPoints
- Como Rodar a Aplicação
- Pré Requisitos Para Rodar a Aplicação
- Tecnologias utilizadas
- Autor

## Status

✨Concluído ✨

## Url

- [https://bloogappserver.herokuapp.com/](https://bloogappserver.herokuapp.com/)

## Features e EndPoints

### Rotas get

| EndPoint | Funcionalidade |
| - | - |
| /site-access | Retorna todos os acessos ao site. |

![get_site_access_data_image](./readme_files/get_site_access.png)

| EndPoint | Funcionalidade |
| - | - |
| /posts | Retorna um array com todos os posts, onde cada post é um objeto. |

![get_site_posts_data_image](./readme_files/get_site_posts.png)

### Rotas post

| EndPoint | Funcionalidade |
| - | - |
| /new-access | Cadastra os acessos divididos pelos anos e cada ano divido pelos meses. |
| /new-geral-access | Cadastra cada acesso ao site, representa todos os acessos que o site já teve. |
| /add | Cadastra os dados dos posts. |
| /new-post-access/:id | Atualiza o número de acessos a um determinado post. |

### Rotas put

| EndPoint | Funcionalidade |
| - | - |
| /edit/:id | Edita um post em especifico. |

### Rotas delete

| EndPoint | Funcionalidade |
| - | - |
| /delete/:id | Remove um determinado post. |

## Como Rodar a Aplicação

Para rodar a aplicação basta entrar na pasta do projeto pelo seu cli (promt de comando no windows por exemplo) e rodar dois comandos, o comando `npm i` para intalar as dependências do projeto e `node src/server.js` para iniciar o servidor. Desta a forma a aplicação estará em funcionamento na `porta 3001` no localhost.

## Pré Requisitos Para Rodar a Aplicação

Para rodar a aplicação você irá precisar ter o [node](https://nodejs.org/en/) instalado na sua máquina.

## Tecnologias utilizadas

- [Node](https://nodejs.org/pt-br/docs/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)
- [Sequelize](https://sequelize.org/)
- [Sqlite](https://www.sqlite.org/docs.html)

## Autor

<img alt="author photo" src="./readme_files/vitor.jpg" width="250">

Feito por Vitor Mateus

[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/vitor_dev_/) [![linkeding](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitor-mateus-2a42461a2/)