import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors'
import CusButton from '../components/CusButton'
import LabelledInput from '../components/LabelledInput'
import validator from 'validator'
import {auth} from 'firebase'

const validateFields = (email,password)=> {
  const isValid = {
      email: validator.isEmail(email),
      password : validator.isStrongPassword(password,{
          minLength : 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
      })
  }
  return isValid
}
const createAccount = (email,password) => {
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(({user}) => {
        console.log('Creating User...');
    } )
}
const login = (email,password)  => {
    auth().signInWithEmailAndPassword(email,password).then(()=>{
        console.log('Logged In');
    })
}

export default () => {
    const [isCreateMode,setCreateMode] = useState(false);
    const [emailField,setEmailField] = useState ({
        text:'',
        errorMessage: ''
    })
    const [passwordField,setPasswordField] = useState ({
        text:'',
        errorMessage: ''
    })
    const [passwordReentryField,setPasswordReentryField] = useState ({
        text:'',
        errorMessage: ''
    })
    return(
    
        <View style = {styles.container}>
           <Text style = {styles.header}> ToDo App</Text>
          <View style ={{flex : 1}} >
            <LabelledInput 
            label = 'Email' 
             text ={emailField.text} 
             onChangeText = {(text)=>{
                 setEmailField({text});
                }}
              errorMessage = {emailField.errorMessage} 
              labelStyle = {styles.label}
              autoCompleteType='email'
              />
             <LabelledInput 
            label = 'Password' 
             text ={passwordField.text} 
             onChangeText = {(text)=>{
                 setPasswordField({text});
                }}
              errorMessage = {passwordField.errorMessage} 
              labelStyle = {styles.label}
              autoCompleteType='password'
              secureTextEntry = {true}
              />

              {isCreateMode &&   <LabelledInput 
            label = 'Re-Enter Password' 
             text ={passwordReentryField.text} 
             onChangeText = {(text)=>{
                 setPasswordReentryField({text});
               
                }}
              errorMessage = {passwordReentryField.errorMessage} 
              labelStyle = {styles.label}
             secureTextEntry = {true}
              />
              }
            
                <TouchableOpacity
           onPress = { () =>{setCreateMode(!isCreateMode)}}
           >
           <Text
            style = {{alignSelf:'center',color:Colors.blue,fontSize:16,margin:4}}
           > {isCreateMode ? 'Already have an account?' :  'Create a new account'}    
           </Text>
           </TouchableOpacity>
           </View>
           <CusButton
            onPress = {()=>{
                const isValid = validateFields(
                    emailField.text,
                    passwordField.text
                    );
                let isAllValid = true;
                if(!isValid.email){
                    emailField.errorMessage = 'Please enter a valid email'
                    setEmailField({...emailField});
                    isAllValid = false ;
                }
                if(!isValid.password){
                    passwordField.errorMessage = 'Password must contain atleast; 8 characters, 1 Uppercase,1 Lowercase and 1 Number'
                    setPasswordField({...passwordField});
                    isAllValid = false ;
                }
                if(isCreateMode && passwordReentryField.text != passwordField.text){
                    passwordReentryField.errorMessage = 'Passwords do not match'
                    setPasswordReentryField({...passwordReentryField});
                    isAllValid = false ;
                }
               if(isAllValid){
                   isCreateMode ? createAccount(emailField.text,passwordField.text) : login(emailField.text,passwordField.text);  
               }


            }}
            text = {isCreateMode ? 'Create Account':'Login'}
            buttonStyle = {{backgroundColor: Colors.red, width : 450 }}
            
            
           />
         
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    label : {
        fontSize : 16,
        fontWeight: 'bold',
        color: Colors.black,


    },
    header : {
        fontSize : 72,
        alignSelf : 'center',
        color: Colors.red,
        

    }
})
