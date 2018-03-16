import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

/* Import Custom Components */


/* Allows For Routing */
import { Actions } from 'react-native-router-flux';

export default class ReservationMap extends React.Component {

  /* Redirects To Login View */

	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
                   backgroundColor="#505254"
                   barStyle="light-content"
                />

            <Text style = {styles.text}>Hello From ReservationMap !</Text>
				
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
  }

});