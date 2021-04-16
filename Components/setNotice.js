import React ,{ useEffect }from 'react'
import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useForm } from 'react-hook-form'
import styles from './style'

export default function setNotice(){
    const {register,setValue,handleSubmit} = useForm()
    const EditarNoticia = async (chave,valor) =>{
        try{
            const busc = await AsyncStorage.getItem(chave)
            if(busc){
                await AsyncStorage.setItem(chave,valor)
                alert('Editado com sucesso!')
            }
            else{
                alert('Não encontrado')
            }
        }
        catch(e){
            alert('Não foi possível editar,tente novamente')
        }
       }

       useEffect(() => {
        register('chave',{required:true})
        register('valor',{required:true})
    }, [register])
    const onSet = (data) => EditarNoticia(data.chave,data.valor)
    return(
        <View style ={styles.screen}>
            <Text style ={styles.text}>Edição das Noticias ou Referencias</Text>
            <TextInput style = {styles.form} placeholder ={'Digite a chave referente ao item que deseja editar'} onChangeText ={text => setValue('chave',text)} />
            <TextInput style = {styles.form} placeholder ={'Digite o novo conteudo'} onChangeText ={text => setValue('valor',text)} />
            <TouchableOpacity onPress ={handleSubmit(onSet)} >
                <Text style ={styles.button}>EDITAR</Text>
            </TouchableOpacity>
           
        </View>
    )
    }
