import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'; 
import Marker from 'react-native-maps';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';


export default class OverviewMap extends React.Component {

    ReservationLocationView(){
        Actions.reservationLocation();
      }


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
                    description={'Parking Facility For NYIT Students'}
                    onCalloutPress = {() => this.ReservationLocationView()}/>
                  
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