# Laboratório 1 Node JS - It Mentors

## Introdução

![node](node1.png)

**Javascript no backend!**
O node surgiu com o proposito de reduzir o consumo de recursos computacionais.

Node.js não é um framework Javascript. Ele está mais para uma plataforma de aplicação, na qual você escreve seus programas com Javascript que serão compilados, otimizados e interpretados pela máquina virtual V8. Essa VM é a mesma que o Google utiliza para executar Javascript no browser Chrome.

O resultado desse processo híbrido é entregue como código de máquina server-side, entregue ao OS (Sistema operacional)

Node.js é uma tecnologia assíncrona que trabalha em uma única thread de execução.

### Event Loop (Preemptividade)

Ler e escrever em disco ou trafegar em rede é caro!
Podemos chamar isso de operações de I/O (Input/OutPut)

**Já ouviu falar em micro segundo?**
1 microsegundo é igual 0,000001 segundo, ou seja 1e-6

Processar dados, ou seja executar algoritmos, é estupidamente mais rápido do que qualquer operação de IO que você possa querer fazer. 
Mesmo se tivermos um SSD em nossa máquina com velocidades de leitura de 200-730 MB/s fará com que a leitura de 1KB de dados leve 1.4 micro-segundos. 

**Parece rápido?** Saiba que nesse tempo uma CPU de 2GHz consegue executar **28.000 instruções.**

Isso mesmo. Ler um arquivo de 1KB demora tanto tempo quanto executar 28.000 instruções no processador. É muito lento.
Quando falamos de IO de rede é ainda pior. Faça um teste, abra o CMD e execute um ping no site do google.com, um dos mais rápidos do planeta:

    ping google.com

obs. ping obtem o status da rede e a conexão entre um ponto e outro

**Uma pergunta:** Já parou pra pensar quanto tempo perdemos em nossa vida comparado com um computador? Brincadeira, não se culpe.

### Como funciona a Thread?

![thread](thread-1.png)

Tarefas do processador
Núcleos do processador, aplicações modernas fazem uso dos núcleos

**Demonstração:**
![Event loop](event-loop-1.png)

A libuv é um biblioteca C++ open-source usada pelo Node em conjunto com o V8 para gerenciar o pool de threads que executa as operações concorrentes ao Event Loop single-thread do Node.

### Vantagens

 - Usa Javascript, liguagem mais velha que... 1995 é o ano, com milhões de programadores ao redor do mundo.

 - O Dev usa tanto no front-end quanto no backend.. não há mais desculpas para criar soluções fullstack.

 - NodeJs é leve e multiplataforma, so com lincença de windows se chega a economizar na AWS cerca de 50% em uma solução, há relatos de economia de 80%, se tratando de economia em recursos computacionais.


### Desvantagens

 - Não é tipada e não possui compilação tradicional
 - Javascript é um ecossistema gigantesco, NPM é o maior repositório de bibliotecas do mundo.
 - Node JS é assíncrono, deve se considerar o entendimento do seu funcionamento para utilizar callbacks corretamente (p.s pesquise callback hell)


### Pra que serve:
Pra fazer tudo, sites, scripts de automação, consoles, apis.

**Ideal:** 

 - Apis, Backends de jogos, é o mesmo que api mas considerando a escalabilidade necessária de um jogo (quantidade de jogadores e requisições) NodeJS é uma boa idéia
 - Aplicações em tempo real: geralmente utilizando websockets

## Módulos a serem abordados

- nodemon
- yargs

## Instalação

https://nodejs.org/en/download/

### Validando instalação

    node -v
    node --version

### Diferenças entre Javascript usando NodeJs vs Browser

    browser: window
    node: global

### Primeiros commandos 

    node
    console.log('Hello world')

Encerrando um processo:

    process.exit(0)


### Exercício Event Loop

    echo %cd%
    cd c:\Users\{seu-usuario}\Desktop>
    mkdir event-loop
    cd event-loop
    code .

**Blocking**

    var getUserSync = function(id) {

        var arrNames = [ 
            { id: '1', name: 'Andre' },
            { id: '2', name: 'Daniel' },
            { id: '3', name: 'Rafael' },
            { id: '4', name: 'Leticia' }
        ];

        var result = arrNames.filter(function(elem){
            return elem.id === id
        })[0];

        var seiQueEORafael = '3'
        var resultName = result ? result.name : seiQueEORafael == id ? "Rafael" : "Não existe";

        if(result){
            resultName = result.name
        } else {
            resultName = "Não existe"
        }

        return Promise.resolve({ name: resultName })
    }

    var start = new Date().getTime();

    console.log("Starting call user 1");
    var user1 = getUserSync('3');
    console.log('user1', user1);

    console.log("Starting call user 2");
    var user2 = getUserSync('1');
    console.log('user2', user2);


    var sum = 3 + 5;
    console.log(`the sum is ${sum}`);


    var end = new Date().getTime();

    var final = end - start;

    console.log(`total execution time ${final}`)


**Non Blocking**

    var getUserSync = function(id, callback) {

        var arrNames = [ 
            { id: '1', name: 'Andre' },
            { id: '2', name: 'Daniel' },
            { id: '3', name: 'Rafael' },
            { id: '4', name: 'Leticia' }
        ];

        var result = arrNames.filter(function(elem){
            return elem.id === id
        })[0];

        var seiQueEORafael = '3';
        var resultName = result ? result.name : seiQueEORafael == id ? "Rafael" : "Não existe";

        if(result){
            resultName = result.name;
        } else {
            resultName = "Não existe";
        }

        return Promise.resolve({ name: resultName }).then(function(value){
            callback(value);
        });
    }

    var start = new Date().getTime();

    console.log("Starting call user 1");
    getUserSync('3', function(user1){
        console.log('user1', user1);
    });

    console.log("Starting call user 2");
    getUserSync('1', function(user2){
        console.log('user2', user2);
    });



    var sum = 3 + 5;
    console.log(`the sum is ${sum}`);

    var end = new Date().getTime();

    var final = end - start;
    console.log(`total execution time ${final}`)



# Módulo produtos

    echo %cd%
    cd c:\Users\{seu-usuario}\Desktop>

    mkdir produtos
    cd produtos

novo arquivo app.js

    console.log('Nossa aplicação de produtos')

    const fs = require('fs');

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });