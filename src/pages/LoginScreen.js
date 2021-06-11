import React from 'react';

import {View, TextInput,  StyleSheet, Button, ActivityIndicator, Text} from 'react-native';
import FormRow from  './components/FormRow';
import firebase from '@firebase/app';
import '@firebase/auth';
import {connect} from  'react-redux';
import {tryLogin} from '../actions';









 class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }
componentDidMount(){
    const firebaseConfig = {
        apiKey: "AIzaSyDNEDQCzJp8xY2osgfbU3GBEkYaSEOkQdc",
    authDomain: "series-f8389.firebaseapp.com",
    projectId: "series-f8389",
    storageBucket: "series-f8389.appspot.com",
    messagingSenderId: "720238147150",
    appId: "1:720238147150:web:db999215d2107a6665351f",
    measurementId: "G-ZPGB9LJHS9"
      };
      // Initialize Firebase
      if (firebase.apps.length === 0) {
        firebase.initializeApp (firebaseConfig);
    }
}
      
   
    

    onChangeHandler(field, value){
       // const newState = {};
        //newState[field] = value;

        this.setState({
            [field]: value
        });



    }
    tryLogin() {
        this.setState({isLoading: true,message: ''});
        const {email: email, password} = this.state;

        this.props.tryLogin({email, password})
        .then (user =>{
            if (user)
           // this.setState({message: "sucesso!"});
            return this.props.navigation.replace('Main');
        
        this.setState({
            isLoading: false,
            message:''
        });

        }).catch(error =>{
            this.setState({
                isLoading: false,
                message:this.getMessageByErrorCode(error.code)
            });
    

        });

    }
    getMessageByErrorCode(errorCode){

       
        switch 
         (errorCode){
            case 'auth/wrong-password':
            return 'senha incorreta';
            case 'auth/user-not-found':
            return 'usuário não encontrado';
            default: 
            return 'erro desconhecido';
        }
    }

    
    renderMessage(){
        const {message} = this.state;
        if (!message)
        return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }
    renderButton(){
        if (this.state.isLoading)
        return <ActivityIndicator/>;
        return(
            <Button
                title = "entrar"
                onPress={()=> this.tryLogin()}/>
        );

    }

    render (){
        return (
            <View>
                <FormRow first>
                    
               <TextInput 
               style={styles.input}
               placeholder="user@mail.com"
               value={this.state.email}
               onChangeText={value=> this.onChangeHandler('email',value)}
               keyboardType= "email-address"
               autoCapitalize="none"
               />
               
               </FormRow>
               <FormRow last>
                    
               <TextInput 
               style={styles.input}
               placeholder="****"
               secureTextEntry
               value={this.state.password}
               onChangeText={value => this.onChangeHandler('password',value)}
               
               />
               
               </FormRow>

               {this.renderButton() }
               {this.renderMessage()}
              

               
               
                


                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        paddingLeft: 10,
        paddingRight:10,
    },
    input:{
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5,

    }
    
    
});
export default connect (null,{tryLogin} ||{actionCreator}) (LoginPage)