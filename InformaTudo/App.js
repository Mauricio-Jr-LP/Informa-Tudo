import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
//import { AppLoading } from 'expo';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,TouchableHighlight ,Modal ,ScrollView, TextInput } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function noticiaHome({navigation}) 
{
  console.disableYellowBox = true;

  const image = require('./resources/logoCapa.png');
  const [noticias, setarnoticias] = useState([]);
  const [modal,setModal] = useState(false);
  const [Titulo,setTitulo] = useState('');
  const [descicao, setDescricao] = useState('');
  const [fonte, setFonte] = useState('');
  const [publicaco, setPublicacao] = useState('');
 
 
  let [fontsLoaded] = useFonts(
  {
    Lato_400Regular,
  });

  useEffect(()=>
  {
    //alert('app carregado');
    (async () => 
    {
      try 
      {
        let noticiasAtual = await AsyncStorage.getItem('noticias');
        if(noticiasAtual == null)
          setarnoticias([]);
        else
          setarnoticias(JSON.parse(noticiasAtual));
      } catch (error) 
      {
        // Error saving data
      }
    })();  
  },[])

  function deletarnoticia(id)
  {
      alert('noticia com id '+id+' foi deletada com sucesso!');
      //TODO: Deletar do array/estado a noticia com id especificado!
      let newnoticias = noticias.filter(function(val)
      {
        return val.id != id;
      });

      setarnoticias(newnoticias);
     
      (async () => 
      {
        try 
        {
          await AsyncStorage.setItem('noticias', JSON.stringify(newnoticias));
          //console.log('chamado');
        } catch (error) {
          // Error saving data
        }
      })();
  }

  /* 
  if (!fontsLoaded) 
  {
    return <AppLoading />;
  }
 

  function atualizanoticia(id)
  {
      alert('noticia com id '+id+' foi deletada com sucesso!');
      //TODO: Deletar do array/estado a noticia com id especificado!
      let newnoticias = noticias.filter(function(val)
      {
        return val.id != id;
      });

      setarnoticias(newnoticias);
     
      (async () => 
      {
        try 
        {
          await AsyncStorage.setItem('noticias', JSON.stringify(newnoticias));
          //console.log('chamado');
        } catch (error) {
          // Error saving data
        }
      })();
      
  }
 */

  function addnoticia()
  {  
    setModal(!modal);

    let id = 0;
    if(noticias.length > 0)
    {
      id = noticias[noticias.length-1].id + 1;
    }

    let noticia = {id:id, Titulo:Titulo, descicao:descicao, fonte:fonte, publicaco:publicaco, noticia:Titulo};
    
    setarnoticias([...noticias,noticia]);

    (async () => 
    {
      try 
      {
        await AsyncStorage.setItem('noticias', JSON.stringify([...noticias,noticia]));
      } catch (error) {
        // Error saving data
      }
    })();
    
  }

  return (
    
    <ScrollView style={{flex:1, backgroundColor: 'black'}}>
      <StatusBar hidden />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput placeholder = 'Titulo' onChangeText={text => setTitulo(text)} autoFocus={true}></TextInput>
            <TextInput placeholder = 'Descrição' onChangeText={text => setDescricao(text)} autoFocus={true}></TextInput>
            <TextInput placeholder = 'Fonte' onChangeText={text => setFonte(text)} autoFocus={true}></TextInput>
            <TextInput placeholder = 'Data de publicação' onChangeText={text => setPublicacao(text)} autoFocus={true}></TextInput>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => addnoticia()}
            >
              <Text style={styles.textStyle}>Adicionar noticia</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>      
      
      <ImageBackground source={image} style={{...styles.image, width: '100%', height: 140}}/>

      <View style = {{width: '100%', height: 50, padding: 20}}>
        <Text style = {{color: '#2A347F'}}>Noticias</Text>
      </View>
      {
        noticias.map(function(val)
        {
          return (
            <View style={{...styles.noticiaSingle, flexDirection: 'column', paddingLeft: '15%', paddingRight: '5%', alignContent: 'center'}}>
              
              <View style={{flex:1,width:'90%',padding:10, alignItems: 'center', backgroundColor: '#EF2F2D', borderRadius: 25}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Noticia',
                { 
                  Titulo: val.Titulo,
                  descicao: val.descicao,
                  fonte: val.fonte,
                  publicaco: val.publicaco
                })}>
                  <View style = {{width: 75, height: '100%'}}>
                    <Text style = {{color: 'white', alignItems:'center'}}>{val.Titulo}</Text>
                  </View>
                </TouchableOpacity>
                
              </View>
              <View style = {{ flexDirection: 'row', alignItems:'center', flex:1 , paddingTop: 5,  borderBottomWidth: 0.5, borderBottomEndRadius: 25, borderBottomColor: 'white'}}>
                <Text style = {{color: '#EF2F2D', paddingRight: 5, paddingBottom: 5, alignItems:'center'}}>Remover</Text>
                <TouchableOpacity style = {{ padding: 5}} onPress={()=> deletarnoticia(val.id)}><AntDesign name="minuscircleo" size={24} color="#EF2F2D" /></TouchableOpacity>
              </View>
            </View>
          );
        })
      }
      
      <View style = {{flex:1,width:'90%',padding:10, alignSelf: 'center', backgroundColor: '#EF2F2D', borderRadius: 25}}>
        <TouchableOpacity  onPress={()=>setModal(true)}>
          <Text style={{textAlign:'center',color:'white'}}>Adicionar noticia!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function NoticiaScreen({ route, navigation }) {
  
  return (
    <ScrollView style={{flex:1, backgroundColor: 'black'}}>
      <View style = {{ backgroundColor: 'black', height: '100%', width: '100%' }}>
        <View style = {{height: 50, width: '100%', alignItems: 'center', paddingTop: 20}}>
          <Text style={{fontSize:27,color:'#EF2F2D'}}>{route.params.Titulo}</Text>
        </View>
        <View style = {{height: '100%', width: '100%',  padding: 20}}>
          <Text style={{fontSize:27,color:'#2A347F'}}>{route.params.descicao}</Text>

          <Text style={{fontSize:15,color:'#ffff', paddingTop: 50}}>Fonte: {route.params.fonte}</Text>
          <Text style={{fontSize:15,color:'#ffff', }}>Data: {route.params.publicaco}</Text>
        </View>
        
      </View>

    </ScrollView>
  );
}



export default function App() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Informa Tudo">
        <Stack.Screen name="Informa Tudo" component={noticiaHome} 
        options={{
          title: 'Informa Tudo',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>
        <Stack.Screen name="Noticia" component={NoticiaScreen}
          options={{
            title: 'Informa Tudo',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create(
  {
    image: 
    {
      width:'100%',
      height: 80,
      resizeMode: "cover"
    },

    coverView:
    {
      width:'100%',
      height:80,
      backgroundColor:'rgba(0,0,0,0.5)'
    },
    
    textHeader:
    {
      textAlign:'center',
      color:'white',
      fontSize:20,
      marginTop:30,
      fontFamily:'Lato_400Regular'
    },
    
    noticiaSingle:
    {
      marginTop:10,
      width:'100%',
      borderBottomWidth:1,
      borderBottomColor:'black',
      flexDirection:'row',
      paddingBottom:10
    },
    //Estilos para nossa modal
    centeredView: 
    {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.5)'
    },
    
    modalView: 
    {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: 
      {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex:5
    },

    openButton: 
    {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },

    textStyle: 
    {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    
    modalText: 
    {
      marginBottom: 15,
      textAlign: "center"
  }

});
