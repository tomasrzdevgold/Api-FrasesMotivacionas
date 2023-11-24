# Projeto-Backend - Api de frases Motivacionais

È uma api que entrega frases motivacionais relacionadas aos sentimentos de forma aleatoria, juntamente com as frases vem uma imagem e/ou gif
relacionada com a frase. Além de ter a opção de cadastrar no banco de dados frases, sentimentos, imagens e/ou gif. As consultas são exportadas 
em formato json.

# Instalação da aplicação 
1. Clonar o repositorio do github neste endereço: "https://github.com/tomasrzdevgold/Api-FrasesMotivacionas.git"
2. Ter instalado Node.js
3. Inicializar a aplicação pela terminal com o comando "npm install",isso instalara todas as dependencias nesccesarias para usar a api
4. Por ultimo para rodar o servidor é só digitar o comando no terminal "npm start"

# Como utilizar a API com interface gráfica

1. Primeiro paso abrir o arquivo index.html, vai ser mostrado um simples formulario onde é possivel pôr:
   - Qual tipo de frase motivacional você quer ligada pelo sentimento
   - Quantidade de frases que você quer receber

2. Clicando na opção de cadastro você será redirecionado para a tela de cadastro da api, onde comtém as seguintes opções:
   - Opção de cadastrar um novo sentimento que não enteja no banco de dados ou colocar um sentimento que já existe no banco de dados para logo só cadastrar uma frase
   - Opção de cadastar uma nova frase, simplesmente é colocar a frase sem aspas no input 'colocar frase'
