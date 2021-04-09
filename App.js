import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground}  from '@react-navigation/stack';
import Home from './screens/Home';
import ToDoList from './screens/ToDoList';
import EditList from './screens/EditList';
import  Colors  from './constants/Colors';
import * as firebase from 'firebase';

const Stack = createStackNavigator ();



export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name = 'Home' component = {Home} />
        <Stack.Screen  
        name = 'Sub-Tasks'
        component = {ToDoList}
        options = {({route}) => {
          return ({
            title : route.params.title,
            headerStyle:{
              backgroundColor : route.params.color
            } ,

            headerTintColor : 'white'
          })
          
        }}
        />
         <Stack.Screen  
        name = 'Options'
        component = {EditList}
        options = {({route}) => {
          return {
            title: route.params.title ? route.params.title : 'Create new list',
            headerStyle:{
              backgroundColor : route.params.color || Colors.blue
            } ,

            headerTintColor : 'white'
          }
          
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyDns4fZJ6iEKYE4M76cItyFj7qzqrr6N2s",
  authDomain: "todoapp-d3255.firebaseapp.com",
  projectId: "todoapp-d3255",
  storageBucket: "todoapp-d3255.appspot.com",
  messagingSenderId: "915600963442",
  appId: "1:915600963442:web:96e809640ab20979ebcfeb"
};
firebase.initializeApp(firebaseConfig);

