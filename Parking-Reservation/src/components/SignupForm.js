import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import * as firebase from 'firebase';


/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class SignupForm extends React.Component {

  state = { email: '', password: '' };
  
  /* Contructor & focusNextField Used For TextInput Transitions */
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  /* Redirects To Login View */
  loginView() {
    Actions.login();
    ToastAndroid.showWithGravityAndOffset(
                 'Successfully Created Account!',
                 ToastAndroid.SHORT,
                 ToastAndroid.BOTTOM,
                 25,
                 300
                 );
  }

  /* Firebase : Authentication -> Create User */
  onSignupPress() {
    let { email, password } = this.state;

    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(() => { this.loginView(); })
            .catch(() => { console.log("Error"); })
  }


  /*
  SignupSuccessToast() {
    ToastAndroid.showWithGravityAndOffset(
      'Successfully Created Account!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      300
    );
  }
  */

    /*
  SignupFailureToast() {
    ToastAndroid.showWithGravityAndOffset(
      'Something Went Wrong! Please Try Again',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      300
    );
  }
  */


  /* Helper Function To Cycle Through Input Fields */
  focusNextField(id) {
    this.inputs[id].focus();
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
              onSubmitEditing        = {() => {this.focusNextField("Verify Password");}}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Verify Password"
              secureTextEntry        = {true}
              autoCorrect            = {false}
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => {this.inputs['Verify Password'] = input;}}
              onChangeText           = {(password) => this.setState({ password })}
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