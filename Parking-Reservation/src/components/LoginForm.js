import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import * as firebase from 'firebase';


/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class LoginForm extends React.Component {
  
  state = { email: '', password: '' };
  
  /* Redirects To ReservationMap View */
	reservationMapView() {
		Actions.reservationMap();
  }

  /* Firebase : Authentication -> Retrieve User */
  onLoginPress() {
    let { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()  => { this.reservationMapView(); })
            .catch(() => { console.log("Error"); })
  }

  /* Firebase : Anonymous Login */
  onAnonymousLogin() {

  } 


	render(){
		return(
			<View style = {styles.container}>

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Email"
              placeholderTextColor   = "#ffffff"
              selectionColor         = "#fff"
              keyboardType           = "email-address"
              blurOnSubmit           = {false}
              autoCorrect            = {false}
              onSubmitEditing        = {()=> this.password.focus()}
              onChangeText           = {(email) => this.setState({ email })}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Password"
              secureTextEntry        = {true}
              autoCorrect            = {false}
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => this.password = input}
              onChangeText           = {(password) => this.setState({ password })}
              />

          <TouchableOpacity style = {styles.loginButton} onPress = {() => this.onLoginPress()}>
            <Text style = {styles.loginButtonText}>{this.props.type}</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.guestButton} onPress = {() => this.onAnonymousLogin()}>
					  <Text style = {styles.guestButtonText}>Continue As Guest</Text>
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

  loginButton: {
    width: 300,
    backgroundColor: '#28a745',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  guestButtonText: {
  	color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
	},
	
  guestButton: {
    width: 300,
    marginVertical: 10,
    paddingVertical: 13
	}
  
});