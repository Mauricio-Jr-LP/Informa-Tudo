import React from 'react'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './style'
export default function Leitor({route}){
    const navigation = useNavigation()
    function goRemove(){
        navigation.navigate('Remove')
    }
    function goEdite(){
        navigation.navigate('Edite')
    }
    function goRead(){
        navigation.navigate('ShowNot')
    }

    return(
        <View style ={styles.screen}>
            <Text style = {styles.text}>Bem vindo: {route.params?.emailus}</Text>
            <Text style = {styles.text}>Escolha uma das opções</Text>
            <View style ={styles.container}>
            <TouchableOpacity onPress ={() =>goRemove()}>
                <Text style ={styles.button2}>REMOVER CREDENCIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress ={() =>goRead()}>
                <Text style ={styles.button2}>LER NOTICIAS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>goEdite()}>
                <Text style ={styles.button2}>EDITAR CREDENCIAIS</Text>
            </TouchableOpacity>
            </View>     
        </View>
      )  
}
