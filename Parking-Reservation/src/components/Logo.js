import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Logo extends React.Component {
	render(){
		return(
			<View style = {styles.container}>

				<Image  style  = {styles.image}
						source = {require('../images/Parking_Reservation_Logo.png')}/>

				<Text style = {styles.logoText}>Parking Reservation</Text>	

			</View>
			)
	}
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
	
  image: {
	  width: 100,
	  height: 100
  },

  logoText: {
  	marginVertical: 15,
  	fontSize: 18,
  	color: 'rgba(255, 255, 255, 0.7)'
  }
	
});