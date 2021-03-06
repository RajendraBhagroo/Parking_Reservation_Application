import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Vibration } from 'react-native';

/* Import Custom Components */
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';

/* Allows For Routing Between Views */
import { Actions } from 'react-native-router-flux';


/* This View Loads Sign Up Form With Option To Return To Login View To Log In */
export default class Signup extends React.Component {

  /* Redirects To Login View */
  loginView(){
    Actions.login();
		Vibration.vibrate(20);
  }

  
	render(){
		return (
			<View style = {styles.container}>

      	<StatusBar
          backgroundColor="#505254"
          barStyle="light-content"
        />
				
        <Logo/>
				
        <SignupForm type = "Sign Up"/>
				
        <View style = {styles.signupTextCont}>
        
					  <Text style = {styles.signupText}>Already have an account? </Text>
					
            <TouchableOpacity onPress = {this.loginView}>
            <Text style = {styles.signupButton}>Sign in</Text>
            </TouchableOpacity>

				</View>

			</View>	
			)
	}
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#292a2b',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },

  signupTextCont: {
  	flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },

  signupText: {
  	color: 'rgba(255,255,255,0.6)',
  	fontSize: 16
  },

  signupButton: {
  	color: '#ffffff',
  	fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline'
  }

});
