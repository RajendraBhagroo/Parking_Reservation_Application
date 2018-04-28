import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert, Vibration } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';

import * as firebase from 'firebase';


export default class ReservationReview extends React.Component {

    /* Redirects To ReservationMap View */
    MainMenuView(){
        Actions.mainMenu();
        Vibration.vibrate(20);
    }

    state = {spotName: 0, startTime: 0, endTime: 0}

    onPressButton1 () {
        this.forceUpdate();
        this.database = firebase.database();
        const userID = firebase.auth().currentUser.uid;
        firebase.database().ref('reservations/'+ userID +'/cart/0/spotName').on('value', snapshot => {this.setState({spotName: snapshot.val()});});
        firebase.database().ref('reservations/'+ userID +'/cart/0/startTime').on('value', snapshot => {this.setState({startTime: snapshot.val()});});
        firebase.database().ref('reservations/'+ userID +'/cart/0/endTime').on('value', snapshot => {this.setState({endTime: snapshot.val()});});
        
        Alert.alert(
            '1st Reservated slot',
            'Spot Number: ' + this.state.spotName + '\nStart Time: ' + this.state.startTime + '\nEnd Time: ' + this.state.endTime,
            [
                {text: 'Cancel Reservation', onPress: () => console.log('Reservation on selected slot has been canceled.')},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );
        this.forceUpdate();
    }

    onPressButton2 () {
        this.forceUpdate();
        this.database = firebase.database();
        const userID = firebase.auth().currentUser.uid;
        firebase.database().ref('reservations/'+ userID +'/cart/1/spotName').on('value', snapshot => {this.setState({spotName: snapshot.val()});});
        firebase.database().ref('reservations/'+ userID +'/cart/1/startTime').on('value', snapshot => {this.setState({startTime: snapshot.val()});});
        firebase.database().ref('reservations/'+ userID +'/cart/1/endTime').on('value', snapshot => {this.setState({endTime: snapshot.val()});});
        Alert.alert(
            '2nd Reservated slot',
            'Spot Number: ' + this.state.spotName + '\nStart Time: ' + this.state.startTime + '\nEnd Time: ' + this.state.endTime,
            [
                {text: 'Cancel Reservation', onPress: () => console.log('Reservation on selected slot has been canceled.')},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );
        this.forceUpdate();
    }
    
    onPressButton3 () {
        this.forceUpdate();
        this.database = firebase.database();
        const userID = firebase.auth().currentUser.uid;
        firebase.database().ref('reservations/'+ userID +'/cart/2/spotName').on('value', snapshot => {this.setState({spotName: snapshot.val()});});
        firebase.database().ref('reservations/'+ userID +'/cart/2/startTime').on('value', snapshot => {this.setState({startTime: snapshot.val()});});
        firebase.database().ref('reservations/'+ userID +'/cart/2/endTime').on('value', snapshot => {this.setState({endTime: snapshot.val()});});
        Alert.alert(
            '3rd Reservated slot',
            'Spot Number: ' + this.state.spotName + '\nStart Time: ' + this.state.startTime + '\nEnd Time: ' + this.state.endTime,
            [
                {text: 'Cancel Reservation', onPress: () => console.log('Reservation on selected slot has been canceled.')},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );
        this.forceUpdate();
    }



	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
                    backgroundColor="#505254"
                    barStyle="light-content"
                />

                <TouchableOpacity style = {styles.ReservationButton}
                        onPress = {this.onPressButton1.bind(this)}>
                <Text style = {styles.ButtonText}>1st Reservated Slot</Text>
                </TouchableOpacity>


                <TouchableOpacity style = {styles.ReservationButton}
                        onPress = {this.onPressButton2.bind(this)}>
                <Text style = {styles.ButtonText}>2nd Reservated Slot</Text>
                </TouchableOpacity>


                <TouchableOpacity style = {styles.ReservationButton}
                        onPress = {this.onPressButton3.bind(this)}>
                <Text style = {styles.ButtonText}>3rd Reservated Slot</Text>
                </TouchableOpacity>


                <TouchableOpacity  style = {styles.MainMenuButton} onPress = {this.MainMenuView}>
                    <Text style = {styles.ButtonText}>Main Menu</Text>
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

    MainMenuButton: {
        width: 300,
        backgroundColor: '#28a745',
        borderRadius: 10,
        marginTop:40,
        marginBottom: 20,
        paddingVertical: 17
    },
  
    ButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    },

    ReservationButton: {
        width: 300,
        backgroundColor: '#777a7a',
        borderRadius: 10,
        marginTop:40,
        marginBottom: 20,
        paddingVertical: 17
    }

  });
