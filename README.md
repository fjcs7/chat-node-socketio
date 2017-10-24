# chat-node-socketio

Projeto realizado como parte de uma atividade curricular de aplicações distribuidas, e deverá obedecer o seguinte escopo:

>1) Toda mensagem enviada pelo usuário é repetida (ecoada) na tela do próprio chat;
>2) O sistema envia regularmente, de segundo em segundo, uma mensagem com o horário do servidor;
>3) O servidor recebe uma expressão aritmética e retorna o resultado. Dica: utilize a função eval();
>4) Modifique o tutorial de chat WebSockets de forma a receber o nick de usuário;
>5) Modifique o tutorial de chat WebSockets de forma a permitir o envio de um link de uma figura;

## Como executar

> npm install -g express-generator

### Na pasta do projeto via cmd

Para preparar o ambiente para usar o express
> express -e 

Baixando bibliotecas necessárias
> npm install

Baixando o socket.io
> npm install -S socket.io

Baixando o isUri usado para realizar validações de links
> npm install -S isuri

Para executar o projeto
> npm start
