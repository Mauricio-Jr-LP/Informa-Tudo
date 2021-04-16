import React ,{ useEffect, useState }from 'react'
import { useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './style'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

export default function Perfil(){
  const navigation = useNavigation()
  const {register,setValue,handleSubmit} = useForm()
  const [email,setEmail] = useState(null)
  const [senha,setSenha] = useState(null)
  const loginAut = async(chave1,chave3)=>{

  try{
       const valNome =  await AsyncStorage.getItem(chave1) 
       const valSenha = await AsyncStorage.getItem(chave3) 
       const serNome = JSON.stringify(valNome)

       if(chave1 && valNome !=null && chave3 && valSenha ){
            navigation.navigate('Login',{emailus:serNome})
      }
        else{
           alert('Credenciais incorretas')
      }
    }
    catch(e){
        alert('Erro de busca')
     }
  }

     useEffect(() => {
     register('email',{required:true})
     register('pass',{required:true})
     }, [register])
  
    const onSubmit = (data)=> loginAut(data.email,data.pass)
    return(
       <View style = {styles.screen}>
          <Text style = {styles.text}>LOGIN</Text>
             <TextInput style = {styles.form} placeholder ={'Informe sua chave de e-mail'}  autoCompleteType={'email'}  onChangeText ={text => setValue('email',text)} />
             <TextInput style = {styles.form} placeholder ={'Informe sua chave para senha'} secureTextEntry={true} autoCompleteType ={'password'}  onChangeText ={text => setValue('pass',text)} />
        <TouchableOpacity  onPress= {handleSubmit(onSubmit)}>
           <Text style={styles.button} >LOGIN</Text>
        </TouchableOpacity>     
      </View>
    )
   
}
