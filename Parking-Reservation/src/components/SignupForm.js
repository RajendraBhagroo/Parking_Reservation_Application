import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import * as firebase from 'firebase';


/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class SignupForm extends React.Component {

  state = { email: '', password: '', verifyPassword: '' };
  
  /* Contructor & focusNextField Used For TextInput Transitions */
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  /* Helper Function To Cycle Through Input Fields */
  focusNextField(id) {
    this.inputs[id].focus();
  }

  /* Redirects To Login View */
  loginView() {
    Actions.login();
  }

  /* Firebase : Authentication -> Create User */
  onSignupPress() {
    let { email, password, verifyPassword } = this.state;

    email = email.trim().toLocaleLowerCase();
    password = password.trim();
    verifyPassword = verifyPassword.trim();

    if((email != '') && (password != '') && (password == verifyPassword) && (password.length >= 6)){ 
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(()  => { this.toast('Successfully Created Account'); this.loginView(); })
            .catch(() => { this.toast('We Ran Into A Problem Creating Your Account, Please Try Again'); })
    } 
    else if((email == '') && (password == '') && (verifyPassword == '')){
      this.toast('Email, Password, And Verify Password Fields MUST Be Filled In');
    }
    else if((email == '')){
      this.toast('Please Enter Email');
    }
    else if((password == '')){
      this.toast('Please Enter Password');
    }
    else if((verifyPassword == '')){
      this.toast('Please Verify Password');
    }
    else if(password != verifyPassword){
      this.toast('Passwords Do Not Match');
    }
    else if(password.length < 6){
      this.toast('Password Must Be ATLEAST 6 Characters Long');
    }
    else{
      this.toast('Oops! Looks Like There Was An Error, Please Try Again')
    }
  }

  /* Displays Android Style Notification Bubble */
  toast(message) {
    ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                200
    );
  }

  
	render(){
		return(
			<View style = {styles.container}>

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Email"
              placeholderTextColor   = "#ffffff"
              selectionColor         = "#fff"
              blurOnSubmit           = {false}
              autoCorrect            = {false}
              keyboardType           = "email-address"
              onChangeText           = {(email) => this.setState({ email })}
              onSubmitEditing        = {() => {this.focusNextField("Password");}}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Password"
              secureTextEntry        = {true}
              blurOnSubmit           = {false}
              autoCorrect            = {false}
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => {this.inputs['Password'] = input;}}
              onChangeText           = {(password) => this.setState({ password })}
              onSubmitEditing        = {() => {this.focusNextField("Verify Password");}}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Verify Password"
              secureTextEntry        = {true}
              autoCorrect            = {false}
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => {this.inputs['Verify Password'] = input;}}
              onChangeText           = {(verifyPassword) => this.setState({ verifyPassword })}
              onSubmitEditing        = {(input) => {this.password = input}}
              />

           <TouchableOpacity style = {styles.button} onPress = {() => this.onSignupPress()}>
             <Text style = {styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>

  		</View>
			)
	}
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },

  button: {
    width: 300,
    backgroundColor: '#28a745',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
  
});