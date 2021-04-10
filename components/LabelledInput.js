import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import Colors from '../constants/Colors'


export default ({labelStyle,label,errorMessage,inputStyle,text,onChangeText,...inputProps}) => {
    return (
        <View Style ={styles.container} >
         <View Style = {styles.labelContainer}>
             <Text Style = {labelStyle} >{label}</Text>
             <Text Style = {styles.error}>{errorMessage && `*${errorMessage}` }</Text>
         </View>
         <TextInput
         style = {[styles.input,{outline : 'none'},inputStyle]}
         selectionColor = {'black'}
                  autoFocus = {true}
                  value = {text}
                  onChangeText = {onChangeText}
                  maxLength = {30}
                  {...inputProps}
         />
        </View>
    );
}

const styles = StyleSheet.create({
   container:{
     paddingHorizontal : 8,
     margin : 4,

   }, 
   labelContainer : {
     flexDirection : 'row',
     marginBottom : '4'
   },
   error:{
    color: Colors.red, 
    fontSize : 12,
    marginLeft: 4,
   },
   input : {
       borderBottomColor : Colors.lightGray,
       borderBottomWidth : 1,
       paddingLeft : 4,
       height : 32,
       fontSize : 24,
       color : Colors.black,
   },

});