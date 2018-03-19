import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

/* Import Custom Components */
import OverviewMap from '../components/OverviewMap';


export default class ReservationMap extends React.Component {
  
	render() {
		return (
			<View style = {styles.container}>

				<StatusBar
          backgroundColor="#505254"
          barStyle="light-content"
        />
      
        <View style = {styles.prompt}>
          <Text style = {styles.text}>Choose A Parking Location</Text>
        </View>	

        <View style = {styles.map}>
          <OverviewMap />
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

  map: {
    flex: 1,
    height: '50%',
    width:  '100%',
  },

  text: {
    color: '#ffff'
  },

  prompt: {
    alignItems: 'center',
    flexDirection: 'row'
  }

});