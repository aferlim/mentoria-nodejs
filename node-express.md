# Laboratório 2 - NodeJs

## Recaptulando ...

- O que são sistemas preemptivos?
- Qual é mais performático? SSD, Memória ou Rede?
- É inteligente manter minha aplicação inteira em memória?
- Se rede é o recurso mais caro, é inteligente manter todos o sistema dentro de uma única aplicação?
- Como funciona uma thread
- Como funciona o NodeJS

# Express.JS

## Um pouco sobre HTTP

HTTP **_(Hypertext Transfer Protocol)_** é o protocolo principal para comunicação entre computadores na internet.

É um protocolo implementado na camada de aplicação. Ou seja implementado nos softwares responsáveis por esta comunicação. Exemplo: Navagadores e Servidores Web.

## Modelo OSI

![Modelo Osi](osi.png?raw=true)

> Vale a pena ler esse artigo para entender sobre camadas: https://pt.wikipedia.org/wiki/Modelo_OSI

Sempre estará trabalhando em conjunto com outros 2 protocolos: TCP _(Transmission Control Protocol)_ e IP _(Internet Protocol)_. Formando assim o famoso dueto TCP/IP.

**TCP** : Responsável pela transferência das informações.
**IP**: Responsável pelo encaminhamento dos dados.

A Comunicação HTTP segue um padrão Request / Response. Ao acessar um site:

- Uma requisição ao servidor é feita;
- O servidor ao receber essa requisição, faz os devidos processo internos;
- O servidor devolve uma resposta;

A resposta geralmente é um código html, gerando o conteúdo do site acessado.

Após isto, a conexão é fechada, isto mesmo, a conexão não é persistente.

A cada nova requisição uma nova conexão é criada e todo o ciclo se repete.

> Obs.: O HTTP não é apenas usado pelo browser / navegador

## Request / Response

As comunicações entre cliente e servidor são formato em texto com seus padrões definidos.

### Resquest (Pedidos ao servidor)

As requests são formadas pelas seguintes entidades:

- Linha de pedido
- Cabeçalho
- Corpo / Mensagem

**Linha de Pedido** formada por mais 3 informações:

- **_Identificador do método_**: Basicamente, representa o tipo de ação que você vai esperar do servidor, também conhecidos como **verbos HTTP**. 
São 8, os principais GET, POST, PUT, DELETE.

- **_URI do Recurso_**: Endereço pra onde será enviado o pedido. Ex: /index.php
- _**Versão do protocolo HTTP**_: atualmente 4 versões: 0.9, 1.0, 1.1 e  2.0

**Cabeçalho:** é o local utilizado para passar informações adicionais nas requisoções, a resposta do servidor pode ser diferente dependendo dos campos e valores existentes nele.

O cabeçalho é dividido em 3 grupos:

- Cabeçalho Geral
- Cabeçalho de Requisição
- Cabeçalho de Entidade

Existem dezenas de campos que podem ser informados no cabeçalho, cada campo pode possuir um formato específico para o seu valor.

**_Alguns:_**

Date: Informa a data do envio da requisição.
Cache Control: Envia diretivas para o mecanismo de cache.
Transfer encoding: envia a forma de decodificar o corpo da requisição.
Cookies: envia informações sobre cookies.
Accept: especifica a preferência de resposta.
User-Agent: envia informações sobre o client (Navegador)

O client é livre para enviar qualquer tipo de campo no cabeçalho, inclusive customizados. Podem gerar comportamentos específicos pelo servidor

**Corpo / Mensagem**

O corpo da requisição.

### Response (Respostas)

As respostas são formadas pelas seguintes entidades:

- Linha de status
- Cabeçalho
- Corpo / Mensagem

**Na Linha de status** temos 3 informações: 
Versão do protocolo: versão utilizada pelo servidor;
Código numérico do Status: HttpStatus Codes
Texto associado ao status

O código do status é a informação mais importante na resposta.

Vamos conhecer os status codes ...

**Importante**

Os status code são de cunho semanticos, ou seja, não existe nenhuma obrigação na utilização deles, conforme a documentação do protocolo. Mas é altamente recomendado seguir as especificações do protocolo.

Ex: um servidor pode retornar um 200 mesmo com erro na requisição. Claro que não é indicado mas pode acontecer, até mesmo por uma falta de atenção do desenvolvedor.

O uso correto dos status code é dever do desenvolvedor, e a má utiliazação pode confundir e atrapalhar que for utilizar sua aplicação caso não seja seguida essa semântica. 

**Cabeçalhos**
