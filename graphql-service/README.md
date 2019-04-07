# Graphql Service

Esse serviço graphql está gerenciando um conjunto de questões, permitindo criar, remover, alterar e listar questões.

## Rodando testes
Para rodar os testes unitários apenas é necessário estar na root do *graphql service* e digitar
```
npm test
```

## Subindo o sistema
Para subir o sistema recomendamos seguir o README que se encontra na root do projeto, uma vez que esse sistema está configurado para usar as conexões do docker para conversar com o mongoDB.

## Arquitetura

### etc/para o sistema.
Aqui temos todas as configs necessárias para o sistema.

### src
Aqui se encontra o código principal da aplicação. Abaixo irei explicar o que cada pasta contêm
- Error
  - Pasta responsável por guardar todos os erros personalizados do *graphql service*
- Middleware
  - Aqui temos organizado os middlewares do serviço. Poderíamos ter um middleware de validação ou autenticação também aqui.
- Resolvers
  - Aqui estão organizados todos os Resolvers da plataforma. Dentro dessa pasta temos outras duas pastas, *Querys* e *Mutations*.
  - **Querys**
    - Aqui organizamos todas as querys do nosso sistema, dessa forma podemos facilmente encontrar e organizá-las.
  - **Mutations**
    - Todas as mutations devem ser colocadas nessa pasta, a fim de termos uma organização mais clara de onde as lógicas de alteração.
  - **QuestionResolver**
    - Aqui a *QuestionQuery.js* e *QuestionMutations.js* são combinadas para termos o resolver.

- TypeDefs
  - Aqui temos as definições dos tipos do nosso sistema Graphql

- Utils
  - Nessa pasta guardamos os códigos que podem ser usados em mais de um lugar ou que fazem manipulações mais genéricas de dados.

- **QuestionSchema.js**
  - Como só temos um schema por enquanto, o coloquei na root da *src*, mas poderíamos ter uma pasta específica para schemas também. Boa parte das injeções de dependência são feitas nesse arquivo.

### test
Essa é a pasta de testes, aqui dentro temos outras duas pastas, *fixtures* e *unit*
- **fixtures**
  - Essa pasta contêm dados fixos a serem usados nos testes para mockar possíveis entradas ou saídas de funções.

- **unit**
  - Essa pasta contêm nossos testes unitários, sua estrutura espelha a estrutura da pasta *src* para facilitar encontrar onde estão os testes de cada arquivo.