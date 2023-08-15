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
