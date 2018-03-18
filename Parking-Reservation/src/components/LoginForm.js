import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, Vibration } from 'react-native';
import * as firebase from 'firebase';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class LoginForm extends React.Component {
  
  state = { email: '', password: '' };
  
  /* Redirects To ReservationMap View */
	reservationMapView() {
		Actions.reservationMap();
  }

  /* Firebase : Authentication -> Email & Password Login */
  onLoginPress() {
    let { email, password } = this.state;

    email = email.trim().toLocaleLowerCase();
    password = password.trim();

    /* Vibrates Login Button */
    Vibration.vibrate(20);

    if((email != '') && (password != '')){
    firebase.auth().signInWithEmailAndPassword(email.trim().toLocaleLowerCase(), password.trim())
            .then(()  => { this.reservationMapView(); })
            .catch(() => { this.toast('Incorrect Email Or Password Combination '); });
    }
    else if((email == '') && (password == '')){
      this.toast('Email And Password Fields MUST Be Filled In');
    }
    else if(email == ''){
      this.toast('Please Enter Email');
    }
    else if(password == ''){
      this.toast('Please Enter Password');
    }
    else{
      this.toast('Oops! Looks Like There Was An Error, Please Try Again')
    }
  }

  /* Firebase : Authentication -> Anonymous Login */
  onAnonymousLogin() {

    /* Vibrates Continue As Guest Button */
    Vibration.vibrate(20);

    firebase.auth().signInAnonymously()
            .then(()  => { this.reservationMapView(); })
            .catch(() => { this.toast('Oops! Looks Like There Was An Error, Please Try again'); });
  }
  
  /* Displays Android Style Notification Bubble */
  toast(message) {
    ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                250
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