import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'; 

export default class OverviewMap extends React.Component {
	render(){
        return(
            <View style = {styles.mapContainer}>
                <MapView style = {styles.map} />
            </View>
        )
	}
}

const styles = StyleSheet.create({

    mapContainer: {
      height: '100%',
      width: '100%'
    },

    map: {
      height: '100%',
      width: '100%'
    }
    
  });