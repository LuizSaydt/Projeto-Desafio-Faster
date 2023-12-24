PROJETO DE DESAFIO FASTER - https://github.com/fasterbr/desafio-fullstack

Autor: Luiz Henrique Saydt
Email: henriquesaydt@hotmail.com

FRONTEND: Nuxt 3
BACKEND: Adonis 5

O Front e Back da aplicação possuem gits isolados, acesse cada projeto para verificar histórico de commits e afins.

Para facilitar a execução do projeto, há um docker-compose na raiz com todas as variáveis de ambiente e serviços necessários para subir o projeto utilizando apenas do comando "docker-compose up", para isso, basta ter o docker instalado e rodando. Quando termianr de subir, é possível acessar a aplicação no seu navegador em http://localhost:3000.
- Por padrão, as portas utilizadas e que deverão estar livres em seu ambiente são: 3306, 3000 e 3333.
- Na primeira vez que for executado, o docker-compose pode levar um tempo até tudo estiver pronto.
- O docker-compose irá criar as tabelas e popular elas com dados iniciais.

SOBRE O FRONTEND:
É exibido um catálogo de drinks, onde é possível filtrá-los e orderná-los. Caso esteja logado será possível favoritar drinks e filtrar apenas os favoritos.
Para o design, foi utilizado o tailwindCSS para maior personalização. A paleta de cores foi inspirada na logo da Faster.
O projeto Nuxt está funcionando em modo de SSR.

SOBRE O BACKEND:
Possui migrations para todas as tabelas, além de seeders para popular os bancos com drinks, imagens e um usuário padrão.
Seguindo o padrão do Adonis, é possível encontrar os controller em /app/Controllers, onde haverá um responsável pela autenticação, pelas rotas relacionadas aos drinks e por último às rotas relacionados aos favoritos.