import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './SignIn'
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput ,Button} from 'react-native';


 function App() {
  return (
  // <>  
  //  <View>
  //    <Text style={styles.box3}>s</Text>
  //  </View>
  //     <View style={styles.box2}>
  //        <ImageBackground style={styles.box2} source={require('./assets/2.png')}
  //          resizeMode='cover'>
  //          {/* <TextInput placeholder='Ingrese su nombre' style={styles.firstText}></TextInput> */}
  //          <View style={styles.box1} > 
  //           <Button  title = " CLICK HERE!" color="black" /> 
  //          </View>
  //       </ImageBackground> 

  //       </View>
        
        
        
  // </>
  <SignIn/>
    
    
  )
}

// const styles = {
//   firstText:{
//     textAlign:'center',
//     marginTop:250,
//     backgroundColor:'rgba(2, 23, 0, 9)',
//   },
//   box1: {
//     marginTop:'110%',
//     backgroundColor:'rgba(115, 158, 142, 0.686)',
//     width:'50%',
//     marginLeft:'25%',
//     borderRadius:8,
//     padding:4.5,
//     border:'12 solid '

     
    
//   },
 
//   box2: {
//     flex: 1,
//     backgroundColor: 'black',
//     // alignItems: 'center',
//     // justifyContent: 'start',

//   },
//   box3: {
//     backgroundColor:'black',
//     borderRadius:8,
//     padding:4.5

//   },
//   box0: {
//     flex: 1,
//   },
//   imgstyle:{
//     width:'90%',
//     heigth:'10%'



//   }
// }


  export default App


