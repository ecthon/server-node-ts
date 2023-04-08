# Servidor Node.js com Express, TypeScript e TS Node Dev

Este é um exemplo de servidor Node.js com as configurações iniciais utilizando o framework Express, TypeScript e TS Node Dev para reiniciar automaticamente o servidor em caso de mudanças no código fonte. Este projeto pode ser utilizado como base para construção de aplicações web com Node.js e Express.

## Como executar o servidor

1. Clone este repositório em sua máquina:

```
$ git clone https://github.com/seu-usuario/seu-projeto.git
```

2. Navegue até a pasta do projeto:

```
$ cd seu-projeto
```

3. Instale as dependências do projeto:

```
$ npm install
ou
$ yarn
```

4. Para iniciar o servidor basta executar:

```
$ npm run dev
ou
$ yarn dev
```
O servidor será iniciado e você poderá acessá-lo no endereço `http://localhost:3000`. Qualquer alteração no código será detectada pelo ts-node-dev e o servidor será reiniciado automaticamente.
