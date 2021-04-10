import React from 'react';
import { StyleSheet, Text,TouchableOpacity,} from 'react-native';
import Colors from '../constants/Colors'

export default ({buttonStyle,onPress,text,textStyle}) =>{
    return(
    <TouchableOpacity 
    text = {[text,textStyle]}
    onPress = {onPress}
    style = {[styles.button,buttonStyle]}>
        <Text
        style = {styles.text}
        >
         {text}
        </Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

button : {
    borderRadius : 25,
    backgroundColor : Colors.darkGray,
    height : 48,
    margin : 16,
    justifyContent : 'center',
    alignItems : 'center',
   

},
text : {
    color : 'white',
    fontSize : 24,
    fontWeight : 'bold'
}

});