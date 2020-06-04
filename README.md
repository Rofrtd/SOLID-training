## 1

Eu tenho um cara responsavel por receber uma lista de components e renderizar eles na tela
mas esse cara nao sabe quais componentes ele vai receber

lembrando dos principios SOLID, eu quero que tu crie um contrato em que todos os componentes sao obrigados seguir
e o cara responsavel por renderizar os componentes vai soh seguir esse contrato

lembrando que esses componentes nao precisam ser realmente componentes de tela - estamos falando aqui soh sobre organizacao de codigo


## 2 
criar um cara responsavel a t retornar componentes
Tu pede o componente e ele t retorna o cara certo
quero que tu tente resolver isso tudo sozinho
dai, em uma pasta separada, tu cria a mesma estrutura mas seguindo esse artigo aqui
https://refactoring.guru/design-patterns/factory-method




Create a renderer for components, it won't know which component it will get.
Create a contract in which all the components must follow, the render component will follow it too.