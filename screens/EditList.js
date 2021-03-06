import React,{ useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Button} from 'react-native';
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import ColorSelector from '../components/ColorSelector'
import CusButton from '../components/CusButton'

const colorList = [
    
       'black',
       'teal',
        'green',
       'blue',
       'purple',
        'blueGray',
         'orange',
        'red',
          'pink',
         'olive',
        'yellow',
      
];


export default ({navigation, route}) => {
    const [title,setTitle] = useState(route.params.title || '')
    const [color,setColor] = useState(route.params.color || Colors.blue)
    const [isValid , setValidity] = useState(true); 
    return (
        <View style = {styles.container} > 
    <View>
        <View style = {{flexDirection : 'row'}} >
     <Text style = {styles.label} >List Name:</Text>
     {!isValid && <Text style = {{color: Colors.red, fontSize : 15, marginLeft : 4}} >*List name cannot be empty</Text> }
     </View>
     <TextInput
                  
                  
                  selectionColor = {'black'}
                  autoFocus = {true}
                  value = {title}
                  onChangeText = {(text) => {
                  setTitle(text)
                  setValidity(true)
                
                }}
                  placeholder = {'New list name'} 
                  maxLength = {30}
                  style = {[styles.input,{outline : 'none'}]}
                
                  />
                  <Text style = {styles.label}> Choose Color </Text> 
                  <ColorSelector
                  onSelect = {(color) => {
                    setColor(color);
                    navigation.dispatch(CommonActions.setParams({color}))
                  }}
                  selectedColor = {color}    
                  colorOptions ={colorList}

                  />
    </View>
   <CusButton text = 'save'
              onPress = {()=>{
                if (title.length>1){
                    route.params.saveChanges({title,color});
                    navigation.dispatch(CommonActions.goBack());
                    
                 }else{
                     setValidity(false);
         
                }
            }}
   />

        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: '#fff',
        padding : 5,
        justifyContent : 'space-between'
    },
    input :{
        color : Colors.darkGray,
        borderBottomColor : Colors.black,
        borderBottomWidth : 0.5,
        marginHorizontal : 5,
        padding : 3 ,
        height : 30,
        fontSize : 24,
        marginLeft : 0,

        

    },
 
    label :{
     
        marginBottom : 10,
        color : Colors.black,
        fontWeight : 'bold',
        fontSize:16, 
    },
})