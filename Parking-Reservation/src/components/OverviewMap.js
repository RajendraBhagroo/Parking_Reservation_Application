import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

/* Allows For Rendering Of Google Maps API And Markers On Map */
import MapView from 'react-native-maps'; 
import Marker from 'react-native-maps';

/* Allows For Routing Between Views */
import { Actions } from 'react-native-router-flux';


/* This Class Will Be Used As A Component To Render A Map From Google Maps API */
export default class OverviewMap extends React.Component {

    ReservationLocationView(){
        Actions.reservationLocation();
      }


    /* MapView Is The Actual Google Map. The Longitude And Latitude Are Centered Over NYIT: OW Campus */  
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