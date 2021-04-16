import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './Components/cadastro'
import Login from './Components/login'
import Leitor from './Components/leitor'
import Remove from './Components/remove'
import Edite from './Components/edite'
import Home from './Components/home'
import Escritor from './Components/escritor'
import CadastroEscri from './Components/cadastroEscri'
import LoginEscri from './Components/loginEscri'
import RemoveEscri from './Components/removerEscri'
import EditeEscri from './Components/editeEscri'
import Adiciona from './Components/addNotice'
import RemoveNot from './Components/deleteNotice'
import ShowNot from './Components/showNotice'
import EditNot from './Components/setNotice'

export default function App() {
  const Stack = createStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName ={'Home'}>

     <Stack.Screen name = 'Home' component = {Home} />
     <Stack.Screen name = 'Login' component = {Login} />
     <Stack.Screen name = 'Cadastro' component = {Cadastro} />
     <Stack.Screen name = 'Leitor' component = {Leitor} />
     <Stack.Screen name = 'Remove' component = {Remove} />
     <Stack.Screen name = 'Edite' component = {Edite} />
     <Stack.Screen name = 'Escritor' component = {Escritor} />
     <Stack.Screen name = 'CadastroEscri' component = {CadastroEscri} />
     <Stack.Screen name = 'LoginEscri' component = {LoginEscri} />
     <Stack.Screen name = 'RemoveEscri' component = {RemoveEscri} />
     <Stack.Screen name = 'EditeEscri' component = {EditeEscri} />
     <Stack.Screen name = 'Adiciona' component = {Adiciona} />
     <Stack.Screen name = 'RemoveNot' component = {RemoveNot} />
     <Stack.Screen name = 'ShowNot' component = {ShowNot} />
     <Stack.Screen name = 'EditNot' component = {EditNot} />

     </Stack.Navigator>
   </NavigationContainer>
  );
}
