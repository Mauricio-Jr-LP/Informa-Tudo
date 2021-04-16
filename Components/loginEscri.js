import React ,{ useEffect }from 'react'
import { useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

export default function LoginEscri(){

    const navigation = useNavigation()
    const {register,setValue,handleSubmit} = useForm()
    const loginAut = async(chave1,chave2)=>{
        try{
          const valNome =  await AsyncStorage.getItem(chave1) 
          const valSenha = await AsyncStorage.getItem(chave2) 
          const serNome = JSON.stringify(valNome)
   
          if(chave1 && valNome && chave2 && valSenha ){
               navigation.navigate('Escritor',{emailus:serNome})
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
   
        function navigar(){
              navigation.navigate('CadastroEscri')
         }
       const onSubmit = (data)=> loginAut(data.email,data.pass)
    
       return(
          <View style = {styles.screen}>
             <Text style = {styles.text}>LOGIN ESCRITOR</Text>
                <TextInput style = {styles.form} placeholder ={'Digite seu usuário'}  autoCompleteType={'email'}  onChangeText ={text => setValue('email',text)} />
                <TextInput style = {styles.form} placeholder ={'Digite sua senha'} secureTextEntry={true} autoCompleteType ={'password'}  onChangeText ={text => setValue('pass',text)} />
           <TouchableOpacity  onPress= {handleSubmit(onSubmit)}>
              <Text style={styles.button} >LOGIN</Text>
           </TouchableOpacity>
   
           <TouchableOpacity onPress ={ ()=>navigar()}> 
              <Text style = {styles.cadastro}>Não possui uma conta? Cadastre-se</Text>
           </TouchableOpacity>
         </View>
       )

}