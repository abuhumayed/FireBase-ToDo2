import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import Checkbox from './Checkbox'
import { TextInput } from 'react-native-gesture-handler';

export default ({text,isChecked,onChecked,onChangeText}) => {
    const [isEditMode, setEditMode] = useState(false);
    return (
        <View style = {styles.container}>
           <View style = {{flexDirection : 'row', flex : 1, alignItems:'center'}}>
              <Checkbox
              isChecked = {isChecked}
              onChecked = {onChecked}
              />
              <TouchableOpacity style = {{flex : 1, }} onPress = {() => setEditMode(true)}>
                  {isEditMode ? 
                  <TextInput
                  
                  selectionColor = {'black'}
                  underlineColorAndroid = {Colors.lightGray}
                  autoFocus = {true}
                  value = {text}
                  onChangeText = {onChangeText}
                  placeholder = {'Add new item'} 
                  onSubmitEditing = {()  => {}}
                  maxLength = {30}
                  style = {[styles.input],{outline : 'none'}}
                  onBlur = {()=>setEditMode(false)}
                  /> :
                   <Text style = {styles.text}>{text}</Text>}
             </TouchableOpacity>
               </View>
             {/*remove*/}
        </View>
    )
}
const styles = StyleSheet.create({

    container : {
        
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        flex : 1,
        padding : 10 ,
      },
      
      icon : {
        padding : 5,
        fontSize : 16,
      } ,

      input:{
          color : Colors.black,
          borderBottomColor: Colors.lightGray,
          borderBottomWidth : 0.5,
          marginHorizontal : 5,
          padding : 3,
          height : 25,
          fontSize : 16,
      },
      text : {
          padding : 3,
          fontSize : 16,
          color:Colors.black,
      }
});
