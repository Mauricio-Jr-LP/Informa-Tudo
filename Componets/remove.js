import React ,{ useEffect }from 'react'
import { useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import style from './style'

export default function Remove(){
    const {register,setValue,handleSubmit} = useForm()
    const removeUser = async(chave1) =>{
        try{
            const busc = await AsyncStorage.getItem(chave1)
               if(busc){
                    await AsyncStorage.removeItem(chave1)
                     alert('Removido com sucesso')
                     return true
               }
              else{
                    alert('Item não existe')
            }        
        }
        catch(e){
            alert('Erro na remoção')
            return false
        }
    }
    useEffect(() =>{
        register('item',{required:true})
    })

    const onRemove = (data)=> removeUser(data.item)
    return(
        <View style = {style.screen}>
            <Text style = {style.text}>Remoção de dados do usuário</Text>
               <TextInput style = {style.form} placeholder ={'Digite o token referente ao item que deseja remover'} onChangeText ={text => setValue('item',text)} />
               <TouchableOpacity   onPress = {handleSubmit(onRemove)}>
                   <Text style = {style.button}>REMOVER</Text>
               </TouchableOpacity>
        </View>
    )
}
