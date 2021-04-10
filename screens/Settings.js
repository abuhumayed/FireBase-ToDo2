import React,{useState} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import Colors from '../constants/Colors'
import CusButton from '../components/CusButton'
import {auth} from 'firebase'

export default () => {
    return (
        <View style = {{flex : 1, backgroundColor:'white'}} >
          <CusButton
          text = 'Log Out'
          onPress = {()=>{
              auth().signOut();
          }}
          />
        </View>

    )
}