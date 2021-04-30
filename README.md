# Informa-Tudo
#Antes, leia a descrição
#Descrição do app:
    O aplicativo simula uma plataforma de Noticias, incluindo dois modos de login: Escritor, para jornalistas publicarem suas noticias e o modo Leitor, para usuários comuns que    desejam ler as noticias publicadas por estes. As noticias contam com: titulo, conteudo da noticia e a sua referência.
    O sistema permite que o usuário Leitor e Escritor, manipulem o valor de suas credenciais, para que isso seja necessário ele utilizará seu token de acesso.
    O usuário Leitor pode excluir suas credenciais, editar elas e ler as noticias. O usuário Escritor excluir suas credenciais, editar elas e escrever as noticias.
    Cada processo de edição e exclusão, possui uma verificação, caso o conteudo exista ele prosseguirá, caso contrário será exibido um alert indicando que o conteudo não existe.
    O sistema utiliza tratamento de erros, com o try catch, para evitar eventuais mensagens de erro na tela.
    
    IMPORTAÇÕES:
    Realizar as seguintes importações
    AsyncStorage
    Navigation, createStackNavigation, e react navigation
    UseForm
    Icons do AntDesign
