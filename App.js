import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderBackground}  from '@react-navigation/stack'
import Home from './screens/Home';
import ToDoList from './screens/ToDoList';

const Stack = createStackNavigator ();



export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name = 'FireToDo' component = {Home} />
        <Stack.Screen  
        name = 'Sub-Tasks'
        component = {ToDoList}
        options = {({route}) => {
          return {
            title: route.params.title,
            headerStyle:{
              backgroundColor : route.params.color
            } ,

            headerTintColor : 'white'
          }
          
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}


