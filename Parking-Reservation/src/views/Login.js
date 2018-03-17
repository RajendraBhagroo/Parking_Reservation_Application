import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Vibration } from 'react-native';

/* Import Custom Components */
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class Login extends React.Component {

  /* Redirects To Login View */
	signup() {
		Actions.signup();

		/* Vibrates Small Sign Up Button */
		Vibration.vibrate(20);
	}

	
	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
          backgroundColor="#505254"
          barStyle="light-content"
        />
				
				<Logo/>
				
				<LoginForm type = "Login"/>
				
				<View style = {styles.signupTextCont}>
					<Text style = {styles.signupText}>Don't have an account yet? </Text>
					
					<TouchableOpacity onPress = {this.signup}>
					  <Text style = {styles.signupButton}>Sign Up</Text>
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
    justifyContent: 'center'
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
