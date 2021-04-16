import React from 'react'
import { ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './styles'
/* Informar o caminho da imagem abaixo*/
import img from '/Users/felip/Desktop/exercicios-js/informatudo/img/logoRedu.png'
import {useNavigation} from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation()
    function goEscritor(){
        navigation.navigate('LoginEscri')
    }
    function goLeitor(){
        navigation.navigate('Login')
    }


    return(
        <View style = {styles.screenHome}>
            <ImageBackground source={img} style={styles.image}>
            <Text style ={styles.text3}>BEM VINDO AO INFORMATUDO</Text>
            <Text style ={styles.text}>Selecione um dos modos de Login</Text>
            <TouchableOpacity style ={styles.button} onPress={()=>goEscritor()}>
                <Text style ={styles.text2}>ESCRITOR</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.button} onPress={()=>goLeitor()}>
                <Text  style ={styles.text2}>LEITOR</Text>
            </TouchableOpacity>
            <Text style ={styles.text4}>Todos os Direitos reservados @</Text>
            </ImageBackground>
        </View>
    )
}
