import React from 'react'
import {View,FlatList,Text} from 'react-native'
import Contact from './components/Contact'

export default function ContactsScreen() {
    const contacts =[
            {name:"Kelvin Bob" ,number:"050-5674-235"},
            {name:"Amos Kecty" ,number:"050-0556-078"},
            {name:"Morris Eros" ,number:"050-1245-890"},
            {name:"FiiFi Blankson" ,number:"050-8674-123"},
            {name:"Cools Adams" ,number:"050-9056-243"},
            {name:"Windy Bob" ,number:"050-5674-232"},
            {name:"Teety Bros" ,number:"050-0845-237"},
           // {name:"Francis Mcman" ,number:"050-5674-234"},
           // {name:"Desmond Joe" ,number:"050-5674-236"},
           // {name:"Mavis Ann" ,number:"050-5623-239"}
    ]
    return (
        <View>
       <FlatList
       data={contacts}
       renderItem={({item})=>{
       return<Contact name={item.name}  phone={item.number}/> 
       }}
      keyExtractor={(item)=>item.number}
       />
        </View>
    )
}
