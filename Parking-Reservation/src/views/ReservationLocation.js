import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class ReservationLocation extends React.Component {

  
	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
                   backgroundColor="#505254"
                   barStyle="light-content"
                />

                <View>
                  <Text style = {styles.text}>Reservation Location View</Text>
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

  text: {
    color: '#ffff'
  },

});