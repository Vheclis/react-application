# react-application - Questions Collector

A ideia dessa aplicação é fazer um site que gerencia questões, fazendo o uso de graphql + mongoDB para o backend e React + Relay para o frontend

## Dependências
Para subir esses sitema é recomendado que se tenha instalado as seguintes ferramentas nas versões informadas, pois foram as versões usadas no desenvolvimento.
- node v8.10.0 (para execução do frontend)
- docker 18.09.3, build 774a1f4
- docker-compose version 1.23.2, build 1110ad01
- yarn 1.15.2
- npm 3.5.2

Não há a necessidade de se preocupar em baixar o mongoDB pois estamos usando docker images para isso.

## Subindo o ambiente

Para subir o backend + banco simplesmente rode o script *serve_environment.sh* como abaixo
```
./serve_environment.sh
```
Isso deve subir o backend que se encontra na pasta graphql e o banco de dados em mongoDB
___
Para subir o frontend execute o script *serve_frontend.sh*. **Atenção**: Para subir e gerenciar dependências do frontend foi feito uso de *yarn*, portanto recomendo o uso do mesmo (e o script faz uso dele). Só é necessário rodar o script abaixo:
```
./serve_frontend.sh
```

## Descendo o ambiente
Para derrubar o backend e o banco só é necessário executar o script *shutdown_environment.sh*. Para parar o frontend só é necessário apertar Ctrl + c no terminal que o script *serve_frontend.sh* foi rodado

## Estrutura do projeto

- config/dockerConfig.yml
  - Arquivo de configuração do backend e do banco, feito para facilitar o desenvolvimento com um banco de dados.

- graphql
  - Dentro dessa pasta se encontra o nosso backend em graphql, mais informações sobre ele podem ser vistas no README de sua pasta.

- frontend
  - Aqui temos o nosso frontend feito com react + relay, mais inforamções no README que se encontra no diretório.