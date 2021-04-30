import React from 'react'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'

export default function Escritor({route}){

    const navigation = useNavigation()

    function SendRemove(){
        navigation.navigate('RemoveEscri')
    }

    function SendEdit(){
        navigation.navigate('EditeEscri')
    }

    function SendNews(){
       navigation.navigate('Adiciona)
    }
    return(
        <View style ={styles.screen}>
            <Text style = {styles.text}>Bem vindo: {route.params?.emailus}</Text>
            <Text style = {styles.text}>Escolha uma das opções abaixo:</Text>
            <View style ={styles.container}>
            <TouchableOpacity onPress ={() =>SendRemove()}>
                <Text style ={styles.button2}>REMOVER CREDENCIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress ={() =>SendEdit()}>
                <Text style ={styles.button2}>CRIAR NOVA NOTICIA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>SendEdit()}>
                <Text style ={styles.button2}>EDITAR CREDENCIAIS</Text>
            </TouchableOpacity>
            </View>     
        </View>
      )  



}
