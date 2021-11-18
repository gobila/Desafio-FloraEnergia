# Bem Vindo ao Teste Flora Energia

# Instruções iniciais

- 1- Clonar o repo acima
- 2- Entrar na pasta do repo em seu computador e executar `npm install` no terminal integrado de seu editor de texto favorito para baixar as dependências necessarias para rodar o teste.
- Para rodar a aplicação, execute: `npm start`

## Questão 1

Ao abrir a pasta em sua máquina, navegue até o arquivo `App.js` para dar início a primeira questão.

- Após o passo acima, você terá de utilizar a API grátis [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) para realizar uma requisição do tipo GET. Essa API irá te retornar dados aleatórios de postagens. Com esses dados você deve criar “cards” ou “boxes” para cada post contendo as seguintes informações do post: title & body. O design desses cards não necessita ser excepcional, mas caso seja, ficaremos felizes. Você deve utilizar algum tipo de posicionamento em CSS para fazer com que esses posts apareçam na tela da aplicação de maneira limpa e organizada.
- Abaixo há um simples exemplo de como imaginamos a resolução da questão:

![enter image description here](https://res.cloudinary.com/di9midi23/image/upload/v1636579628/Screenshot_from_2021-11-10_18-11-08_r3cguh.png)

#### EXTRA:

- Este item é um item extra da questão 1. Não é necessário ser feito mas será considerado para a nossa tomada de decisão.
- Você deve implementar um search bar para o mesmo componente da questão 1. Esse search bar deve realizar a busca pelo título da postagem. Em outras palavras, você deve criar um input para o usuário inserir um texto, que buscará os posts que contém tal texto no título e mostrar somente os cards com os posts que contém aquele texto incluso no TÍTULO.
  -Segue imagem com o que esperamos (pode caprichar no CSS!)
  ![enter image description here](https://res.cloudinary.com/di9midi23/image/upload/v1636582183/Questao1_extra_rvjtci.png)

## Questão 2

- A questão 2 será composta de 2 testes de lógica em javascript puro. Por favor abra o arquivo `Questao2.js` .
- Dentro desse arquivo você verá 2 funções, a primeira com um array contendo palavras chamado “geese”.
- A) - Para a primeira função você deve desenvolver um código dentro dessa função (que recebe um array de palavras chamado “birds” como único argumento) que retorna um array contendo todas as palavras que contêm no array birds exceto as palavras que estão presentes no array geese.
- B) - Na segunda função, você receberá uma palavra como argumento. Você deve implementar um código que garanta que cada caractere na palavra somente se repita 1 única vez. Você retornará `true` se isso acontecer, e `false` caso não aconteça. Para essa questão, letras maiúsculas e minúsculas são consideradas o mesmo caractere. A palavra será uma string sem espaços contendo `[a-z], [A-Z],[0-9]` e símbolos comuns. O tamanho da palavra não excederá 100 caracteres.
- Essa questão tem um teste automatizado. Você pode realizar quantas tentativas quiser. Para rodar o teste basta executar `npm test` no terminal. 


## Questão 3

- Reproduza a sua maneira a tela a seguir utilizando a paleta de cores abaixo e mantendo as mesmas informações e campos que estão na imagem. Você deve alterar a posição e ordenação dos campos e utilizar um framework visual de sua preferência com o intuito de melhorar a interface e usabilidade da página.
- Crie um botão no componente `App.js` que redirecione o usuário para a sua página customizada. De preferência posicione-o no topo direito da página.
- Será desconsiderado páginas com mudanças sutis ou muito semelhantes a imagem original.

- Seja criativo!
- Material de apoio:
  ![Pagina a ser customizada](https://res.cloudinary.com/di9midi23/image/upload/v1636588064/Screenshot_from_2021-11-10_20-46-14_qh7wlf.png)

![enter image description here](https://res.cloudinary.com/di9midi23/image/upload/v1636588114/Cores-e-Padr%C3%B5es_dwjvgx.jpg)

## Instruções Para Envio do Processo

- Ao terminar o processo você deve enviar o seu trabalho em um arquivo .zip contendo a aplicação inteira desenvolvida por você (zipar a pasta root clonada por você inicialmente). _Não se esqueça de apagar a pasta node_modules antes do envio para que sua aplicação não fique muito pesada_.
- Favor enviar os processos para um dos emails abaixo:

`rodrigo.mattar@floraenergia.com.br` , `emmanuel.matheus@floraenergia.com.br` , `reload@floraenergia.com.br`
