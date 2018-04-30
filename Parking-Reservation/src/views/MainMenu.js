import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ToastAndroid, TouchableOpacity, Vibration } from 'react-native';

/* Import Custom Components */
import Logo from '../components/Logo';

/* FireBase */
import firebase from 'firebase';

/* Allows For Routing Between Views */
import { Actions } from 'react-native-router-flux';


/* This View Is Used As A Proxy To Route To Either ReservationMap, ReservationReview, Or Logout To The Main Menu */
export default class MainMenu extends React.Component {
    
    /* Redirects To ReservationMap View */
    reservationMapView() {
      Actions.reservationMap();
		  Vibration.vibrate(20);
    }

    /* Redirects To ReservationReview View */
    reservationReviewView() {
      Actions.reservationReview();
		  Vibration.vibrate(20);
    }

    /* User Is Logged Out, Redirects to Login View */
    logout() {
      firebase.auth().signOut()
      .then( (res) => {
        Actions.login();
      }).catch( (error) =>
        this.toast(error));

      Vibration.vibrate(20);
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


	render() {
		return (
			<View style = {styles.container}>
         <View style = {styles.bundle}>
		    		<StatusBar
              backgroundColor="#505254"
              barStyle="light-content"
            />
		    		
		    		<Logo/>
    
            <TouchableOpacity  style = {styles.ReservationButton} onPress = {this.reservationMapView}>
                <Text style = {styles.ReservationButtonText}>Make Reservation</Text>
            </TouchableOpacity>
    
            <TouchableOpacity  style = {styles.ReservationReviewButton} onPress = {this.reservationReviewView}>
                <Text style = {styles.ReservationReviewButtonText}>Review Reservation</Text>
            </TouchableOpacity>
    
            <TouchableOpacity  style = {styles.LogoutButton} onPress = {this.logout}>
                <Text style = {styles.LogoutButtonText}>Logout</Text>
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
      justifyContent:'center',
      width: '100%',
    },

    bundle: {
      alignItems: 'center',
      justifyContent:'center',
      position: 'absolute',
      top: '13%'
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
      marginVertical: 20,
      paddingVertical: 16
    },
  
    LogoutButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000000',
      textAlign: 'center'
    }

  });
