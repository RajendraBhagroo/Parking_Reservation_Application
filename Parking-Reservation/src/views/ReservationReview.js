import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert, Vibration } from 'react-native';

/* FireBase */
import firebase from 'firebase';

/* Allows For Routing Between Views */
import { Actions } from 'react-native-router-flux';


/* This View Retrieves Users Specific Reservations And Allows them To View Information About Reservations */
export default class ReservationReview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spotName: 0,
            startTime: 0, 
            endTime: 0,
            FinalCart: this.props.cart
        }
      }

    userID    = firebase.auth().currentUser.uid;
    userEmail = firebase.auth().currentUser.email[0].toUpperCase() + firebase.auth().currentUser.email.substring(1);

    /* Redirects To ReservationMap View */
    MainMenuView(){
        Actions.mainMenu();
        Vibration.vibrate(20);
    }

    deleteReservation(i){
      firebase.database().ref('reservations/'+ this.userID +'/cart/' + i).remove();
    }

    viewReservations(){
        for( let i = 0; i < 3; i++){

            firebase.database().ref('reservations/'+ this.userID +'/cart/' + i +'/spotName') .on('value', snapshot => {this.setState({spotName:  snapshot.val()});});
            firebase.database().ref('reservations/'+ this.userID +'/cart/' + i +'/startTime').on('value', snapshot => {this.setState({startTime: snapshot.val()});});
            firebase.database().ref('reservations/'+ this.userID +'/cart/' + i +'/endTime')  .on('value', snapshot => {this.setState({endTime:   snapshot.val()});});

            Alert.alert(
                'Reservation Number: ' + i,
                'Spot Number: ' + this.state.spotName + '\nStart Time: ' + this.state.startTime + '\nEnd Time: ' + this.state.endTime,
                [
                    {text: 'Cancel Reservation', onPress: (i) => this.deleteReservation(i)},
                    {text: 'OK'},
                ],
                { cancelable: false }
            );
        }
    }


	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
                    backgroundColor="#505254"
                    barStyle="light-content"
                />


                <TouchableOpacity style = {styles.ReservationButton} onPress = {this.viewReservations.bind(this)}>
                <Text style = {styles.ButtonText}>Reserved Parking Spots: {this.userEmail}</Text>
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
