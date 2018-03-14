import React from 'react';
import { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

/* Import Views For Routing */
import Login  from './views/Login';
import Signup from './views/Signup';

export default class Routes extends React.Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login"  component = {Login}  title = "Login" initial = {true}/>
			      <Scene key="signup" component = {Signup} title = "Register"/>
			    </Stack>
			 </Router>
			)
	}
}