import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground}  from '@react-navigation/stack';
import Home from './screens/Home';
import ToDoList from './screens/ToDoList';
import EditList from './screens/EditList';
import  Colors  from './constants/Colors';
import * as firebase from 'firebase';
import LoginScreen from './screens/LoginScreen'
import Settings from './screens/Settings';

const Stack = createStackNavigator ();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
<AuthStack.Screen  name = 'Login'  component = {LoginScreen} />
    </AuthStack.Navigator>
  )
}

const Screens = () => {
  return ( <Stack.Navigator>
    <Stack.Screen  name = 'Home' component = {Home} />
    <Stack.Screen  name = 'Settings' component = {Settings} />
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
  </Stack.Navigator>)
} 


export default function App() {
  
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  useEffect (() => {
    if (firebase.auth().currentUser){
      setIsAuthenticated(true)
    }
    firebase.auth().onAuthStateChanged(user => {
      console.log('Checking Auth state...') 
      if (user){
        setIsAuthenticated (true)
      }
      else {
        setIsAuthenticated(false)
      }
    })
  }, [])
  return (

    <NavigationContainer>
     {isAuthenticated ? <Screens/> : <AuthScreens/>  }

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

