# Frontend - React + Relay
Aqui encontramos o frontend da nossa aplicação, o qual foi construído usando React e Relay

## Subindo o ambiente
Recomendamos que se faça o uso do script apresentado na root do projeto para subir o ambiente, mas caso necessário seguem os comandos para subir o ambiente a partir dessa pasta
```
yarn install
yarn relay
yarn start
```

## Arquitetura/Diretoris
Dentro da pasta *src* podemos encontrar o código principal da aplicação, o qual irei explicar a seguir

### components
Nessa pasta temos os componentes usados no desenvolvimento do site, eles fazem uso das *mutations* para realizarem alterações nas questões do sistema.

### mutations
Essas são as mutations que são realizadas no sistema hoje em dia, as quais são responsáveis por conversarem com o nosso backend. Cada mutation ficou separada em seu próprio documento.

### pages
Aqui temos as páginas em si, que fazem uso dos *components* para se construírem.

### Environment
Arquivo de configuração do nosso ambiente responsável por conversar com nosso backend em graphql
