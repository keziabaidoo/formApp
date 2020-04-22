import React from 'react'
import {View,Text,Image ,StyleSheet} from 'react-native'
import {MaterialIcons,MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons'

export default function Contact({name,phone}) {
    return (
        <View style={styles.container}>
   <Image source={require('../assets/pinky.jpg')} style={styles.image}/>

   <View style={styles.infoContainer}>
    <Text style={styles.name}numberOfLines={1}>{name}</Text>
    <Text>{phone}</Text>
   </View>
    <View style={styles.icon}>
        <MaterialIcons name="local-phone" size={25} color='#c96a63'/>
    </View>
    <View style={styles.icon}>
        <MaterialCommunityIcons name="message-processing" size={25} color='#c96a63'/>
    </View>

    <View style={styles.icon}>
        <SimpleLineIcons name="options-vertical" size={25} color='#70413e'/>
    </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
        alignItems:'center',
        marginVertical:10
    },

    image:{
        height:50,
        width:50,
        borderRadius:5
    },
    infoContainer:{
        justifyContent:'center',
        marginHorizontal:15,
        flex:4
    },
    name:{
        fontWeight:'bold',
        fontSize:17
    },
    icon:{
     flex:1
    }
})