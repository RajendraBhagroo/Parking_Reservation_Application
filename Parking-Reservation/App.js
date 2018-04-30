import React from 'react'; 
import { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

/* FireBase */
import firebase from 'firebase';

/* Routes */
import Routes from './src/Routes';

export default class App extends React.Component {

  /* Firebase Integration */
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCntfGKhOaiKl8I0OKWVoB55AazqBSkcZo",
      authDomain: "parking-reservation-c681e.firebaseapp.com",
      databaseURL: "https://parking-reservation-c681e.firebaseio.com",
      projectId: "parking-reservation-c681e",
      storageBucket: "parking-reservation-c681e.appspot.com",
      messagingSenderId: "342940906918"
    };
    firebase.initializeApp(config);
    
    /* Supresses Warnings In Production */
    console.disableYellowBox = true;
  }


  /* <Routes/> Is What Initiates The Entire Application */
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
