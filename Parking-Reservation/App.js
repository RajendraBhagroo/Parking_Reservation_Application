import React from 'react'; 
import { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

/* FireBase */
import * as firebase from 'firebase';

/* Routes */
import Routes from './src/Routes';

export default class App extends React.Component {

  /* Firebase Integration */
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCntfGKhOaiKl8I0OKWVoB55AazqBSkcZo",
      authDomain: "parking-reservation-c681e.firebaseapp.com",
      databaseURL: "https://parking-reservation-c681e.firebaseio.com",
      projectId: "parking-reservation-c681e",
      storageBucket: "parking-reservation-c681e.appspot.com",
      messagingSenderId: "342940906918"
    });
  }

  render() {
    return (
      <View style = {styles.container}>

        <StatusBar
           backgroundColor = "#1c313a"
           barStyle = "light-content"
         />

        <Routes/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },

});
