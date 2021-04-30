import React ,{ useEffect }from 'react'
import { useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-community/async-storage'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './style'
import {useNavigation} from '@react-navigation/native'

export default function addNotice(){
    const navigation = useNavigation()
    const {register,setValue,handleSubmit} = useForm()
    const Noticiar = async(titulo,conteudo,referenciaId,referencia) =>{
        try{
            AsyncStorage.setItem(titulo,conteudo)
            AsyncStorage.setItem(referenciaId,referencia)
            alert('Cadastrado com sucesso')
            console.log(titulo,'\n'+conteudo,'\n'+referenciaId,'\n'+referencia) 
        }catch(e){
            alert('Erro ao gravar dados,tente novamente!')
        }
    }
    useEffect(() => {
    register('titulo',{required:true,message:'Informe o titulo da noticia'})
    register('conteudo',{required:true,message:'Informe o conteudo'})
    register('referenciaId',{required:true,message:'Informe   referencia'})
    register('referencia',{required:true,message:'Confirme a referencia'})
    }, [register])
   
  function goBack(){
    navigation.goBack()
  }

  const onSubmit = (data) => Noticiar(data.titulo,data.conteudo,data.referenciaId,data.referencia)
  return(
    <View style = {styles.screen}>
    <Text style = {styles.text}>CADASTRE-SE</Text>
      <TextInput style = {styles.form} placeholder ={'Informe o titulo da noticia '}   onChangeText ={text => setValue('titulo',text)} />
      <TextInput style = {styles.form} placeholder ={'Informe o conteudo '}   onChangeText ={text => setValue('conteudo',text)} />
      <TextInput style = {styles.form} placeholder ={'Informe o id de referencia'}    onChangeText ={text => setValue('referenciaId',text)} />
      <TextInput style = {styles.form} placeholder ={'Informe a referencia'}   onChangeText ={text => setValue('referencia',text)} />
      
      <TouchableOpacity  onPress= {handleSubmit(onSubmit)}>
            <Text style={styles.button} >CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress ={()=>goBack()}>
          <Text style={styles.button}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
  )
}
