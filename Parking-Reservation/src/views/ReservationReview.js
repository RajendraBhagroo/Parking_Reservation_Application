import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Vibration } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class ReservationReview extends React.Component {

    /* Redirects To ReservationMap View */
    MainMenuView(){
        Actions.mainMenu();
        Vibration.vibrate(20);
    }



	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
                    backgroundColor="#505254"
                    barStyle="light-content"
                />

                <TouchableOpacity  style = {styles.MainMenuButton} onPress = {this.MainMenuView}>
                    <Text style = {styles.MainMenuButtonText}>Main Menu</Text>
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
  
    MainMenuButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center'
    }

  });
