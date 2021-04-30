import {ImageBackground, StyleSheet} from 'react-native'
export default StyleSheet.create({
    screen:{
        display:'flex',
        backgroundColor:'black',
        alignItems: 'center',
        maxHeight:'100%',
        height:'100%'
    },
    screenHome:{
        display:'flex',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems: 'center',
        maxHeight:'100%',
        height:'100%'
    },
    text:{
        fontWeight:'700',
        marginTop:'40%',
        marginHorizontal:'35%',
        fontSize:20,
        width:140, 
        color:'#fff',
        textAlign: 'center'
    },
    text3:{
        marginTop:'10%',
        fontWeight:'700',
        color:'#fff',
        fontSize:20,
        textAlign:'center',
    },
    text2:{
        fontWeight:'700',
        color:'#fff',
        fontSize:20,
        textAlign:'center'
    },
    form:{
        backgroundColor:'#DCDCDC',
        borderColor:'#A9A9A9',
        width:250,
        marginHorizontal:55,
        height:45,
        borderRadius:5,
        marginTop:10
    },
    button:{    
        width:120,
        height:50,
        backgroundColor:"#483D8B",
        color:'#FFF',
        marginTop:15,
        textAlign:'center',
        paddingTop:10,
        borderRadius:5,
        marginHorizontal: '35%'
    },
    cadastro:{
        textDecorationLine:'underline',
        color: '#fff',
        marginTop:20,
        textAlign:'center',
        fontSize: 16,
        marginHorizontal:98,
        width:170
    },
    container:{
        display:'flex',
        flexDirection:'row',
    },

    button2:{
        marginLeft:12,
        width:105,
        height:50,
        backgroundColor:"#483D8B",
        color:'#FFF',
        marginTop:15,
        textAlign:'center',
        paddingTop:10,
        borderRadius:5,
        
    },

    image:{
        maxWidth:'100%',
        height:'100%',
        display:'flex',
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text4:{
        fontWeight:'700',
        color:'#fff',
        fontSize:20,
        textAlign:'center',
        marginTop:'40%'
    },
    form2:{
        backgroundColor:'#DCDCDC',
        borderColor:'#A9A9A9',
        width:250,
        marginHorizontal:55,
        height:100,
        borderRadius:5,
        marginTop:10,
        fontSize:22
    },
    text5:{
        fontWeight:'700',
        color:'#fff',
        fontSize:20,
        textAlign:'center',
    },
   textNot:{
        marginBottom:-5,
        paddingTop:-10,
        fontWeight:'700',
        fontSize:20,
        width:140, 
        color:'#fff',
        textAlign: 'center'
    },
    numberButton:{
        marginBottom:20,
        marginTop:-22,
    marginLeft:180,
        paddingTop:-10,
        fontWeight:'700',
        fontSize:20,
        width:140, 
        color:'#fff',
    }
})
