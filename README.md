# Semana 5 - Exercício avaliativo

Vamos as contas! Seu objeto essa semana, será construir uma aplicação responsável por gerenciar nossos gastos a partir do projeto figma deste link: https://www.figma.com/file/SmIdXRXkf9A4kOHAINlWeD/Raro-Finan%C3%A7as?type=design&node-id=0-1&mode=design&t=nZZc5BeDgI0xCa5P-0

## Instruções

No 'Raro Finanças' é importante que toda a aplicação funcione correntamente e sem bugs, então esperamos que nós, como usuários, sejamos capazes de:

- Visualizar nosso controle de gastos, listando todos os itens;
- Clicar no button de '+ Transação' para abrir modal;
- Preencher no formulário dentro deste modal com uma nova transação, contendo: nome, data, categoria, valor e tipo, sendo esse último uma variação apenas de 'entrada' ou 'saída';
- Visualizar esse novo item adicionando-o à lista ao terminar de criá-lo;
- Visualizar a soma de todos os valores do tipo 'entrada';
- Visualizar a soma de todos os valores do tipo 'saída';
- Visualizar o valor do saldo que será a soma do total do tipo 'entrada' + total do tipo 'saída';

## Critérios de avaliação

- Boas regras de componentização;
- Capacidade de manter o padrão durante todo seu projeto;
- Completa funcionalidade da aplicação, cumprindo todas as regras que ocorrem dentro do sisteminha;
- Avaliação da existência ou não de bugs dentro do projetinho,
- Capacidade de seguir e respeitar o projeto do Figma;
- Utilizacação apenas de CSS puro, pode usar o CSS modules se quiser, ele se encaixa dentro do css. Quem quiser usar apenas a forma padrão também, sem problemas.
- Divisão do trabalho com entregas em features, aplicando conhecimentos de gitflow

## Dicas de ouro

- A responsividade não será um critério de avaliação mas quem entregar responsivo vai ganhar até meio ponto para  ajudar caso tenha perdido ponto dentro dessa mesma atividade;
- Queremos também ver a boa utilização do git e gitflow.

## Como entregar a atividade

Sua atividade deverá ser entregue em um novo repositório do gitlab com a criação de um projeto novo de React, onde vocẽ deverá dar acesso a equipe da Raro Academy, através de um link enviado aqui no classroom. Gostaríamos também que ao final da atividade no arquivo markdown (README.md na raiz do projeto) da mesma você escrevesse como foi sua jornada durante a resolução da sua atividade, quais seus principais desafios e como fez para solucioná-los, além de instruções de como devemos rodar seu projeto.`


# Relatório de Resolução

## Introdução

Neste relatório, compartilharei minha jornada como aluno durante a resolução da atividade prática da semana 5. Abordarei os principais desafios que enfrentei e como consegui superá-los, além de fornecer instruções para executar o projeto.

## Desafios Enfrentados

### 1. GitFlow e Organização do Projeto

Um dos maiores desafios iniciais foi entender e aplicar o fluxo de trabalho do GitFlow. A criação de issues e o gerenciamento das branches demandaram um tempo inicial, pois eu não estava familiarizado com esse processo. No entanto, uma vez que adquiri uma compreensão sólida do GitFlow, fui capaz de organizar melhor o desenvolvimento.

### 2. Estilização e foco em um componente por vez

Perdi bastante tempo na parte de estilização da página para seguir o modelo do figma, eu diria que foi o que mais tomou tempo da resolução da atividade.
Outra questão que me prejudicou muito na questão do tempo foi o trabalho exclusivo em cada componente de uma vez, em várias situações encontrei detalhes de estilização e também de lógica do código em algum outro componente que não era o da issue em questão e ter que concluir um componente por vez para depois modificar esses detalhes foi mais desafiador por isso.

### 3. Restrição ao `useState`

A atividade impôs a restrição de usar apenas o `useState` para gerenciar o estado dos componentes. Isso limitou as opções de gerenciamento de estado disponíveis, e no começo tive dificuldade em pensar em uma maneira eficiente para passar a informação para todos os componentes. A solução que encontrei foi deixar a base de dados dentro do componente principal App, isso facilitou na hora de passar as props para os demais componentes.

## Instruções para Execução do Projeto

Para executar o projeto em sua máquina, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Abra o terminal na raiz do projeto.

### Instalação de Dependências

Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### Executando o Aplicativo

Após a instalação das dependências, inicie o aplicativo com o seguinte comando:

```bash
npm run dev
```
