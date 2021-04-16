import React ,{ useEffect}from 'react'
import { useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-community/async-storage'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './style'
import { useState } from 'react'

export default function showNotice(){
    const {register,setValue,handleSubmit} = useForm()
    const [conteudo,setConteudo] = useState(null)
    const Listar = async(chave) =>{
        try{
            const busc = await AsyncStorage.getItem(chave)
            const buscSer = JSON.stringify(busc)
            if(busc){
               setConteudo(buscSer)
            }
            else{
                alert('Não encontrado')
            }
        }
        catch(e){
            alert('Erro de busca')
        }
    }
    useEffect(() => {
    register('chave',{required:true})
 }, [register])

   const onSubmit = (data) => Listar(data.chave)
 return(
    <View style = {styles.screen}>
    <Text style = {styles.text}>Busque pela noticia ou referencia</Text>
       <TextInput style = {styles.form} placeholder ={'Digite o token referente ao item que deseja buscar'} onChangeText ={text => setValue('chave',text)} />
       <TouchableOpacity   onPress = {handleSubmit(onSubmit)}>
           <Text style = {styles.button}>BUSCAR</Text>
       </TouchableOpacity>
       <Text style = {styles.text}>{conteudo}</Text>

     </View>
 )
 }