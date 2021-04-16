import React ,{ useEffect }from 'react'
import { useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import style from './style'

export default function deleteNotice(){
    const {register,setValue,handleSubmit} = useForm()
    const Delete = async (item) =>{
        try{
            const busc = await AsyncStorage.getItem(item)
            if(busc){
                 await AsyncStorage.removeItem(item)
                  alert('Removido com sucesso')
                  return true
               }
            else{
                 alert('Item não existe')
              } 
          }
            catch(e){
               alert('Erro na remoção!')
             }      
    }
    useEffect(() =>{
        register('item',{required:true})
    })

    const onRemove = (data)=> Delete(data.item)
    return(
        <View style = {style.screen}>
            <Text style = {style.text}>Remoção de dados do usuário</Text>
            <Text style = {style.text}>Chaves: Titulo ou ID da referencia</Text>
               <TextInput style = {style.form} placeholder ={'Digite o a chave referente ao item que deseja remover'} onChangeText ={text => setValue('item',text)} />
               <TouchableOpacity   onPress = {handleSubmit(onRemove)}>
                   <Text style = {style.button}>REMOVER</Text>
               </TouchableOpacity>
        </View>
    )
}