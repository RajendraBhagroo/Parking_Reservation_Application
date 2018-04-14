import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Vibration } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class MainMenu extends React.Component {
    
      /* Redirects To ReservationMap View */
    reservationMapView() {
        Actions.reservationMap();

		/* Vibrates Small Sign in Button */
		Vibration.vibrate(20);
    }

      /* Redirects To ReservationMap View */
    reservationReviewView() {
        Actions.reservationReview();

		/* Vibrates Small Sign in Button */
		Vibration.vibrate(20);
    }

      /* Redirects To Login View */
    loginView() {
        Actions.login();

		/* Vibrates Small Sign in Button */
		Vibration.vibrate(20);
    }




	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
                    backgroundColor="#505254"
                    barStyle="light-content"
                />
				
				<Image  style  = {styles.image}
						source = {require('../images/Parking_Reservation_Logo.png')}/>



                <TouchableOpacity  style = {styles.ReservationButton} onPress = {this.reservationMapView}>
                    <Text style = {styles.ReservationButtonText}>Make Reservation</Text>
                </TouchableOpacity>


                <TouchableOpacity  style = {styles.ReservationReviewButton} onPress = {this.reservationReviewView}>
                    <Text style = {styles.ReservationReviewButtonText}>Review Reservation</Text>
                </TouchableOpacity>







                <TouchableOpacity  style = {styles.LogoutButton} onPress = {this.loginView}>
                    <Text style = {styles.LogoutButtonText}>Logout</Text>
                </TouchableOpacity>


			</View>	
			)
	}
}

const styles = StyleSheet.create({

    container: {
      backgroundColor: '#d2f4f3',
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 40
    },

    ReservationButton: {
        width: 300,
        backgroundColor: '#38b6e0',
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 17
    },
  
    ReservationButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    },

    ReservationReviewButton: {
        width: 300,
        backgroundColor: '#c1e038',
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 17
    },
  
    ReservationReviewButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    },
 
    LogoutButton: {
        width: 300,
        backgroundColor: '#6d7172',
        borderRadius: 10,
        marginTop: 60,
        paddingVertical: 17
    },
  
    LogoutButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    }



  });
