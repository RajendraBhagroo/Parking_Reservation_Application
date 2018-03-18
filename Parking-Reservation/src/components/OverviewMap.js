import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'; 
import Marker from 'react-native-maps';


export default class OverviewMap extends React.Component {

	render(){
        return(
            <View style = {styles.mapContainer}>

                <MapView style = {styles.map}
                    initialRegion={{
                      latitude: 40.819471,
                      longitude: -73.605309,
                      latitudeDelta: 0.0422,
                      longitudeDelta: 0.0321}}>

                <MapView.Marker
                    coordinate={{latitude:   40.812225,
                                 longitude: -73.603373}}
                    title={'NYIT :  Parking Garage'}
                    description={'Parking Facility For NYIT Students'}/>
                  
                </MapView>     

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