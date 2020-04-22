import React, { Component } from 'react';
import {View ,Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'


 class LoginScreen extends Component {
    render() {
        return (

            <View style={style.container}>
               <View style={style.loginTextContainer}>
                   <Text style={style.loginText}>Log in</Text>
               </View>

               <View>
                   <TextInput 
                    style={style.input} 
                   placeholderTextColor='gray'
                   placeholder='Username'/>

                   <TextInput  
                   style={style.input} 
                   placeholderTextColor='gray'
                   placeholder='Password'/>

                   <Text style={style.forgotPassword}>Forgot password</Text>
               </View>
               <View>
                   <TouchableOpacity style={style.buttonContainer}>
                       <Text style={style.buttonText}>Log in</Text>
                   </TouchableOpacity>
               </View>
               <View style={style.noAccountContainer}> 
                   <Text style={style.noAccountText}>Don't have an account?</Text>
                   <Text style={style.signupText}>Sign up</Text>

               </View>
            </View>
            
        )
    }
}


const style=StyleSheet.create({
 container:{
     marginHorizontal:50,
     
 } ,

 loginText:{
     fontSize:50,
     color:'brown'
 },
 loginTextContainer:{
     marginBottom:30
 },
 input:{
  borderBottomWidth:2,
  fontSize:20,
  borderBottomColor:'brown',
  height:50,
  marginTop:20
 },
 forgotPassword:{
     alignSelf:'flex-end',
     marginVertical:3,
     color:'#c96a63'
 },
 buttonContainer:{
 height:50,
 backgroundColor:'brown',
 justifyContent:'center',
 alignItems:'center',
 borderRadius:10,
  marginVertical:50
 },
 buttonText:{
  fontSize:25,
  color:'white'
 },
 noAccountContainer:{
  flexDirection:'row',
  justifyContent:'center'
 },
 noAccountText:{
   marginRight:10,
   fontSize:16
 },
 signupText:{
   fontSize:16,
   color:'#c96a63'
 }

})

export default LoginScreen

