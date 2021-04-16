import React ,{ useEffect }from 'react'
import { useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-community/async-storage'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

export default function adastroEscri(){
    const navigation = useNavigation()
    const {register,setValue,handleSubmit} = useForm()

    const Armazenar = async (chave1,valor1,chave2,valor2) =>{
        try{
            AsyncStorage.setItem(chave1,valor1)
            AsyncStorage.setItem(chave2,valor2)

            alert(chave1,'\n'+valor1,chave2,'\n'+valor2)
            alert('Cadastro feito com sucesso!!!')
            function GoLogin(){
              navigation.goBack()
          }
          GoLogin()
        }
        catch(error){
            alert('Erro ao gravar dados,tente novamente!')
   
        }     
    }
useEffect(() => {
    register('nameid',{required:true})
    register('name',{required:true})
    register('pass',{required:true})
    register('cpass',{required:true})

}, [register])

function goBack(){
    navigation.goBack()
  }
  
  const onSubmit =(data) =>Armazenar(data.nameid,data.name,data.pass,data.cpass)
 

  return(
    <View style = {styles.screen}>
        <Text style = {styles.text}>FAÇA SEU CADASTRO</Text>
          <TextInput style = {styles.form} placeholder ={'Digite seu usuário '}   onChangeText ={text => setValue('nameid',text)} />
          <TextInput style = {styles.form} placeholder ={'Digite seu nome'}   onChangeText ={text => setValue('name',text)} />
          <TextInput style = {styles.form} placeholder ={'Digite sua senha'}  secureTextEntry={true}  onChangeText ={text => setValue('pass',text)} />
          <TextInput style = {styles.form} placeholder ={'Confirme sua senha'} secureTextEntry={true} autoCompleteType ={'password'}  onChangeText ={text => setValue('cpass',text)} />

    <TouchableOpacity  onPress= {handleSubmit(onSubmit,)}>
        <Text style={styles.button}>ENVIAR CADASTRO</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress ={()=>goBack()}>
      <Text style={styles.button}>RETORNAR</Text>
    </TouchableOpacity>
  </View>
)
}