import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'

export default ({isChecked,onChecked,...props}) => {
   
    return (
        <TouchableOpacity
        style = {styles.checkBox}
        onPress = {onChecked}
        alignItems = 'center'
        >
      <Text
      style = {{color:Colors.lightGray}}
      > {isChecked ? "✓" : ""} </Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    checkBox : {
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      height : 20,
      width : 20,  
      borderRadius : 3,
      borderWidth : 1,
      margin : 5 ,
      borderColor : Colors.black,
      color :Colors.lightGray,
      backgroundColor : '#fff0' ,
     
    },
    });