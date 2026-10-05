# Tópicos Importantes para Avaliação

- O que é um Framework?
R: Um framework é uma estrutura de código que define a base e as regras de um projeto. Ele fornece uma espécie de "esqueleto" pronto, com convenções e fluxos já definidos, e é o framework quem chama o seu código (não o contrário) — esse conceito é chamado de inversão de controle. Exemplos: Angular, Django, Spring, Expo.
Conjunto de ferramentas para resolver problemas e suprir necessidades em um projeto

- Qual a diferença entre biblioteca e framework?
R: A diferença central está em quem controla o fluxo da aplicação:

         	            Biblioteca	                                                   Framework
======================--------------------------------------------------------------===================================================                        
Controle	          Você chama as funções da biblioteca quando precisa	         O framework chama o seu código
Flexibilidade	      Alta — você decide como estruturar	                         Menor — você segue as convenções dele
Exemplo	              React, Lodash	                                                 Angular, Expo, Django
                      Supre os recursos                                              Supre a arquitetura, responde "Como" resolver o problema
			  
Resumindo: com uma biblioteca, você é quem está no comando; com um framework, ele é quem dita as regras do jogo.

- O que é o JavaScript?
R: É uma linguagem de programação interpretada, criada originalmente para rodar em navegadores e dar interatividade às páginas web (validar formulários, animações, manipular a página, etc.). Hoje, com o Node.js, também é usado fora do navegador, como no back-end. 
Executado em diversos ambientes.

- O que é Node.js?
R: É um ambiente de execução (runtime) que permite rodar JavaScript fora do navegador, diretamente no computador ou em um servidor. Ele usa o motor V8 do Google Chrome e é o que possibilita construir back-ends, APIs, scripts e ferramentas de linha de comando em JavaScript.

- O que é o NPM?
R: Node Package Manager - Gerenciador de pacotes do Node - permite instalar/atualizar, desinstalar e executar scripts, em um projeto NODE

- O que é a biblioteca React (core - núcleo/base)?
R:(É o CORE - Núcleo para desenvolver interfaces com o usuário) É uma biblioteca JavaScript para construção de interfaces de usuário (UI), criada pelo Facebook (Meta). Seu foco é a camada de visualização (a "V" do MVC), permitindo criar componentes reutilizáveis que atualizam a tela automaticamente quando os dados mudam (através do conceito de estado). Dispositivos moveis, WEB e até Desktop. (react-dom traz as tags de html para a web, ex:  enquanto o react-native traz os componentes nativos para o mobile)

- O que é a biblioteca React Native?
R: É uma biblioteca que fornece os componentes necessários para desenvolver aplicativos para dispositivos móveis (nativos) IOs e Android. Especifico para desenvolvimento Mobile, utilizando componentes nativos (IMAGE, VIEW, TEXT, etc) 

- O StyleSheet do React Native tem todas as propriedades da Web? (CSS)
R: Não. Mas possui as principais, já que o foco é Mobile.

- Todas as propriedades do StyleSheet do React Native funcionam para iOS e Android?
R: Não. Algumas propriedades são específicas para iOS e outras para Android, mas a maioria funciona para os dois sistemas.  


- O que é a framework Expo?
R: É um framework construído sobre o React Native que simplifica o desenvolvimento de apps móveis. Ele oferece ferramentas prontas (CLI, sistema de build, APIs para câmera, notificações, localização etc.) que eliminam boa parte da configuração nativa manual (Xcode/Android Studio), facilitando testar o app direto no celular via o aplicativo Expo Go. (É um ecosistema para desenvolvimento mobile)

- Qual o papel da pasta app no Expo Router?
R: É nela que ficam as telas (componentes) da aplicação. Cada arquivo dentro da pasta app é uma tela, e a pasta em si é o ponto de partida para a navegação.
 o arquivo index.js é o primeiro a ser executado (nome de arquivo reservado)

- Quais as principais formas de navegação com Expo Router?
R:
1. Stack - navegação em pilha (vai voltando na ordem em que entrou)
2. Tabs - navegação com ícones no bottom (tela inicial)
3. Drawer - navegação com menu lateral (Drawer = gaveta em inglês) - utilizado mais para telas como configurações, perfil, etc, que não fazem parte do fluxo principal do usuário
4. Modal - abre a tela em cima da atual (fecha deslizando para baixo) - variação da navegação Stack

- Posso utilizar mais de uma forma de navegação do Expo Router no mesmo App?
R: Sim. Depende da necessidade do app. Posso utiliza-las de forma complementar uma da outra.

- Quais as principais vantagens de utilizar o componente Imagem do Expo ao invés do React Native?
R: Componente Image do Expo é mais performático e eficiente do que o componente Image do React Native. Além disso, o componente Image do Expo oferece mais recursos e funcionalidades do que o componente Image do React Native. (Gif´s Animados, Blurhash, Thumbhash)

### Instalação do Expo
npx create-expo-app@latest --template
Opções:
- Blank
- nome do app
- For learning with Expo Go (SDK 54) ** mais estável do que a v. 57
Vai criar a estrutura de pastas do projeto

Instalação do Expo Router

- https://docs.expo.dev/router/installation
- Fazer etapas 1,2,3
- Criar pasta app dentro de src
- Colocar a tela inicial (componente) na pasta app (index.js)
- Rodar a etapa 6 (npx expo start --clear)


