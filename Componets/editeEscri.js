import React ,{ useEffect }from 'react'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useForm } from 'react-hook-form'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'

export default function EditeEscri(){

    const navigation = useNavigation()
    const {register,setValue,handleSubmit} = useForm()
    const Edite =async (chave,valor) =>{
        try{
            const busca =  await AsyncStorage.getItem(chave)
            if(busca){
                  await AsyncStorage.setItem(chave,valor)
                  alert('Editado com sucesso')
            }
            else{
                  alert('Usuário incorreto ou inexistente')
            }
        }
        catch(error){
            alert('Erro de edição')
        }
    }

    useEffect(() => {
        register('token',{required:true})
        register('credencial',{required:true})
    }, [register])

    function goBack(){
        navigation.navigate('Login')
      }
      const onEdite=(data) =>Edite(data.token,data.credencial)
    return(
        <View style ={styles.screen}>
            <Text style ={styles.text}>Edição dos dados do Escritor</Text>
            <TextInput style = {styles.form} placeholder ={'Digite o token referente ao item que deseja editar'} onChangeText ={text => setValue('token',text)} />
            <TextInput style = {styles.form} placeholder ={'Digite a nova credencial'} onChangeText ={text => setValue('credencial',text)} />
            <TouchableOpacity onPress ={handleSubmit(onEdite)} >
                <Text style ={styles.button}>EDITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>goBack()} >
                <Text style ={styles.button}>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    )
}