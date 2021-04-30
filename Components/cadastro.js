import React ,{ useEffect }from 'react'
import { useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-community/async-storage'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './style'
import {useNavigation} from '@react-navigation/native'

export default function cadastro(){
const navigation = useNavigation()
const {register,setValue,handleSubmit} = useForm()
const Armazenar = async (chave1,valor1,chave2,valor2,chave3,valor3) =>{
      try{
          AsyncStorage.setItem(chave1,valor1)
          AsyncStorage.setItem(chave2,valor2)
          AsyncStorage.setItem(chave3,valor3)
          alert('Cadastrado com sucesso')
          console.log(chave1,'\n'+valor1,chave2,'\n'+valor2,chave3,'\n'+valor3)  
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
        register('nameid',{required:true,message:'Informe usuário'})
        register('name',{required:true,message:'Informe o seu nome'})
        register('email',{required:true,message:'Informe seu e-mail'})
        register('confirmemail',{required:true,message:'Confirme seu e-mail'})
        register('pass',{required:true,message:'Informe sua senha'})
        register('confirpass',{required:true,message:'Confirme sua senha'})
  }, [register])
  
  function goBack(){
    navigation.goBack()
  }

const onSubmit =(data) =>Armazenar(data.nameid,data.name,data.confirmemail,data.email,data.confirpass,data.pass)

    return(
        <View style = {styles.screen}>
            <Text style = {styles.text}>CRIAR NOTICIA</Text>
              <TextInput style = {styles.form} placeholder ={'Informe seu usuário '}   onChangeText ={text => setValue('nameid',text)} />
              <TextInput style = {styles.form} placeholder ={'Informe seu nome'}   onChangeText ={text => setValue('name',text)} />
              <TextInput style = {styles.form} placeholder ={'Informe seu e-mail '}  autoCompleteType={'email'}  onChangeText ={text => setValue('confirmemail',text)} />
              <TextInput style = {styles.form} placeholder ={'Confirme seu e-mail'}  autoCompleteType={'email'}  onChangeText ={text => setValue('email',text)} />
              <TextInput style = {styles.form} placeholder ={'Informe sua senha'} secureTextEntry={true} autoCompleteType ={'password'}  onChangeText ={text => setValue('pass',text)} />
              <TextInput style = {styles.form} placeholder ={'Confirme sua senha'} secureTextEntry={true} autoCompleteType ={'password'}  onChangeText ={text => setValue('confirpass',text)} />
        <TouchableOpacity  onPress= {handleSubmit(onSubmit)}>
            <Text style={styles.button} >CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress ={()=>goBack()}>
          <Text style={styles.button}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
