# Laboratório 1 Node JS - It Mentors

## Introdução

![node](node1.PNG?raw=true)

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

![thread](thread-1.PNG?raw=true)

Tarefas do processador
Núcleos do processador, aplicações modernas fazem uso dos núcleos

**Demonstração:**

![Event loop](event-loop-1.PNG?raw=true)

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


# Pré módulo produtos

**Passo 1** - Criação da estrutura:

Abrir o terminal / console e executar:

    echo %cd%
    cd c:\Users\{seu-usuario}\Desktop>

    mkdir produtos
    cd produtos

**Passo 2** - Novo arquivo app.js

Abrir o VsCode:
> code .

Criar Arquivo app.js

**Passo 3** - Utilizando o moduto FS do NodeJs para gerencimanto do módulo de arquivos do sistema operacional
Adicionar ao arquivo app.js:


    console.log('Nossa aplicação de produtos')

    const fs = require('fs');

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        
        if (err) {
            console.log("Não foi possível salvar o arquivo");
        };

        console.log('informações salvas');
    });

**Passo 4** - Ir até o console (prompt de comando / terminal ) e executar:

> node app.js

No vs Code um arquivo *mynewfile.txt* foi criado. Verifique o conteúdo do arquivo.


### Módulo OS

Conheca mais em: https://nodejs.org/api/os.html

**Passo 5** - adicione mais uma linha em app.js

    fs.appendFile('greetings.txt', 'Hello World', function (err) {
        
        if (err) {
            console.log("Não foi possível salvar o arquivo");
        };

        console.log('informações salvas');
    });

**Passo 6** - Vamos adicionar o modulo OS no nosso novo arquivo. Através da função "require"

    const os = require('os');

**Passo 7** - O método userinfo([options]) retorna informações do usuário atual logado na máquina:

Acesse: https://nodejs.org/api/os.html#os_os_userinfo_options

Vamos comentar a linha:

    /* fs.appendFile('greetings.txt', 'Hello World', function (err) {
        
        if (err) {
            console.log("Não foi possível salvar o arquivo");
        };

        console.log('informações salvas');
    }); */

E adicionar: 

    var user = os.userInfo();
    console.log(user);

Execute novamente no terminal, para que seja apresentado o objeto preenchido do método "userinfo":

> node app.js

**Passo 8** - Refatorando e finalizando o pré-modulo:

Vamos criar uma função de callback para utilizá-la dinamicamente no event looping:

    const callback = function (err) {
        
        if (err) {
            console.log("Não foi possível executar a ação.");
        };

        console.log('Ação executada com sucesso.');
    }

Então, finalizamos refatorando nossos métodos assíncronos (app.js final):

    console.log('Nossa aplicação de produtos')

    const fs = require('fs');
    const os = require('os');

    const callback = function (err) {
        if (err) throw err;
        console.log('Saved!');
    }

    var user = os.userInfo();

    fs.appendFile('mynewfile1.txt', 'Hello content!', callback);

    fs.appendFile('grettings.txt', `Hello ${user.username}`, callback);

Execute novamente no terminal:

> node app.js

# Módulo produtos

Passo 1: Criar aquivo main.js no VSCode

    const os = require('os');
    var user = os.userInfo();

    console.log(`minha aplicação de produtos - por ${user.username}`);

> Obs: pesquiser sobre template string `minha string ${my_var}`

Passo 2: Exportando módulos:

Vamos primeiro conhecer o objeto **module** da call stack

    console.log(module);

Temos propriedades importantes como: id, parent, filename e a mais utilizada **"exports"**.

Passo 3: Crie no VSCode um arquivo "product.js"

    console.log("iniciando product.js");
    module.exports.age = 38;

Adicione em "app.js":

    const product = require('./product') // nao precisa da extensão ".js", ex: './product.js'

    console.log(module);

    const callback = function (err) {
        if (err) throw err;
        console.log('Saved!');
    }

    const fs = require('fs');
    fs.appendFile('grettings.txt', `Olá, sou ${user.username} e tenho ${product.age} anos.`, callback);

Execute:

> node product.js

Saída greetings.txt:

> Olá, sou andre.lima e tenho 38 anos.

Comente as linhas em main.js:

    const fs = require('fs');
    fs.appendFile('grettings.txt', `Olá, sou ${user.username} e tenho ${product.age} anos.`, callback);

Passo 3 - Montando nosso repositório de produtos

Crie uma nova pasta no projeto e adicione um arquivo .json

Pelo console ou direto no VSCode, **pelo console**:
> mkdir database && echo [] > database/data.json

Passo 4 - No arquivo "product.js" adicione:

    const fs = require('fs');
    const repoFile = './database/data.json';

    module.exports.AddProduct = () => {
        console.log('produto adicionado');
    }

- A função "AddProduct" servirá para gravar novos pordutos.
- A variável "repoFile" representa o nosso arquivo de repositório

Habilitar NPM 

    npm init

Efetuar configurações no passo a passo. Pronto arquivo package.json criado.

Instalando Nodemon

    npm install -g nodemon

Iniciando configurações de comandos, arquivo main.js:

    switch (process.argv[2]) {
        case 'create':
            console.log(product.AddProduct())
            break;
        case 'read':
            product.AddProduct()
            break;
        case 'list':
            console.log(product.ListAll());
        case 'update':
        case 'delete':
        default:
            break;
    }

### NPM

- Conhecendo
- NPM Init
- Package.json
- Pasta Global
- Pasta Local

### Nodemon

- Instalando e utilizando

### Process.argv

- Analisando o módulo

### JSON

- Exemplos
- Manipulação de objetos
- Convertendo Ojetos para string
- Convertendo String para Objetos
- Armazendo strings no arquivo de repositório

### Yargs

- Parametros de entrada

### Crud

- Criar
    - Produtos Duplicados
- Ler todos
- Ler um
- Atualizar
- Deletar
    - Remoção por contagem de arrays
    - Ternário
- Try Catch
    - Implementando
- Princípio DRY

### Debugando no VSCode

### Desafio

- Evitar Criação de produtos duplicados
- Atualizar um produto
- Deletar um produto
- Remover códigos duplicados
- No módulo **yargs** eu consigo mostrar no console quais são as opções de cada comando, documente esses comandos
- Nos explique na próxima mentoria as lições aprendidas e o que na sua visão deveria ser melhorado na aplicação já desenvolvida.

### Yargs Avançado



### Async, Await, Callbacks, Callback Queues