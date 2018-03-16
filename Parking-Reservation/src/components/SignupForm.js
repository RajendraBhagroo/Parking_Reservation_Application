import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';

export default class Logo extends React.Component {

  /* Redirects To Login View */
  loginView() {
    Actions.login();
  }

  /* Contructor & focusNextField Used For TextInput Transitions */
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

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
              blurOnSubmit           = { false }
              keyboardType           = "email-address"
              onSubmitEditing        = {() => {this.focusNextField("Password");}}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Password"
              secureTextEntry        = {true}
              blurOnSubmit           = { false }
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => {this.inputs['Password'] = input;}}
              onSubmitEditing        = {() => {this.focusNextField("Verify Password");}}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Verify Password"
              secureTextEntry        = {true}
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => {this.inputs['Verify Password'] = input;}}
              onSubmitEditing        = {(input) => {this.password = input}}
              />

           <TouchableOpacity style = {styles.button} onPress = {this.loginView}>
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