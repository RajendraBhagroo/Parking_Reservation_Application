import React from 'react';
import { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

/* Import Views For Routing */
import Login  from './views/Login';
import Signup from './views/Signup';
import MainMenu from './views/MainMenu';
import ReservationMap from './views/ReservationMap';
import ReservationLocation from './views/ReservationLocation';
import Payment from './views/Payment';
import ReservationReview from './views/ReservationReview';

/* This File Defines The Keys To Access Each View. Method: Actions.[ViewName]({Object To Send to ViewName}) */
export default class Routes extends React.Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login"               component = {Login}               title = "Login" initial = {true}/>
			      <Scene key="signup"              component = {Signup}              title = "Register"/>
				  <Scene key="mainMenu"			   component = {MainMenu}			 title = "MainMenu"/>
				  <Scene key="reservationMap"      component = {ReservationMap}      title = "ReservationMap"/>
				  <Scene key="reservationLocation" component = {ReservationLocation} title = "ReservationLocation"/>
				  <Scene key="payment" 			   component = {Payment} 			 title = "Payment"/>
				  <Scene key="reservationReview"   component = {ReservationReview}   title = "ReservationReview"/>
			    </Stack>
			</Router>
			)
	}
}