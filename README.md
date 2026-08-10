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

Resumindo: com uma biblioteca, você é quem está no comando; com um framework, ele é quem dita as regras do jogo.

- O que é o JavaScript?
R: É uma linguagem de programação interpretada, criada originalmente para rodar em navegadores e dar interatividade às páginas web (validar formulários, animações, manipular a página, etc.). Hoje, com o Node.js, também é usado fora do navegador, como no back-end.

- O que é Node.js?
R: É um ambiente de execução (runtime) que permite rodar JavaScript fora do navegador, diretamente no computador ou em um servidor. Ele usa o motor V8 do Google Chrome e é o que possibilita construir back-ends, APIs, scripts e ferramentas de linha de comando em JavaScript.

- O que é a biblioteca React (core - núcleo/base)?
R: É uma biblioteca JavaScript para construção de interfaces de usuário (UI), criada pelo Facebook (Meta). Seu foco é a camada de visualização (a "V" do MVC), permitindo criar componentes reutilizáveis que atualizam a tela automaticamente quando os dados mudam (através do conceito de estado).

- O que é a biblioteca React Native?
R: É uma biblioteca que fornece os componentes necessários para desenvolver aplicativos para dispositivos móveis (nativos).

- O que é a framework Expo?
R: É um framework construído sobre o React Native que simplifica o desenvolvimento de apps móveis. Ele oferece ferramentas prontas (CLI, sistema de build, APIs para câmera, notificações, localização etc.) que eliminam boa parte da configuração nativa manual (Xcode/Android Studio), facilitando testar o app direto no celular via o aplicativo Expo Go.

- O que é o NPM?
R: Node Package Manager - Gerenciador de pacotes do Node - permite instalar/atualizar, desinstalar e executar scripts.

- O StyleSheet do React Native tem todas as propriedades da Web? (CSS)
R: Não. Mas possui as principais, já que o foco é Mobile.

- Todas as propriedades do StyleSheet do React Nativefuncionam para iOS e Android?
R: Não. Algumas propriedades são específicas para iOS e outras para Android, mas a maioria funciona para os dois sistemas.  

### Instalação do Expo
npx create-expo-app@latest --template
Opções:
- Blank
- nome do app
- For learning with Expo Go (SDK 54) ** mais estável do que a v. 57
Vai criar a estrutura de pastas do projeto


