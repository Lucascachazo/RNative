import React from 'react'
import { StatusBar } from 'expo-status-bar';
 import {TouchableHighlight, StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';


const SignIn =() => {
    return (<>
        <ImageBackground source={require('./assets/4.png')} style={styles.box2} >

           <View style={styles.container}>
               <View>
                   <Text style={styles.title}>SIGN IN</Text>
                   <TextInput placeholder='USER'style={styles.input}/>
                   <TextInput placeholder='PASSWORD'style={styles.input}/>
               </View>
               <TouchableHighlight
                 style={styles.button}      >
                   <Text style={styles.textButton}>SEND</Text>

               </TouchableHighlight>
              

           </View>
        </ImageBackground>

       
            
        </>
      
    )
}
export default SignIn

const styles = {
    box2: {
        flex: 1,
        
          },

    container:{
        flex:1,
        marginTop:'60%',
        paddingLeft:15,
        paddingRight:15,
    },
    input:{
        heigth:40,
        borderColor:'#ccc',
        borderWidth:2,
        marginBottom:20,
        padding:15,
    },
    title:{
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        color:'white',
        fontWeight:'700'
        
    },
    button:{
        backgroundColor:'rgba(11, 97, 40, 0.556)',
        paddingTop:15,
        paddingBottom:15,
        borderColor:'green',
        borderWidth:2,


    },
    textButton:{
        textAlign:'center',
        color :'white',
        fontWeight:'700',



    }
  }
  
