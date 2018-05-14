import React from 'react'; 
import { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

/* .env API Info */
import {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID
} from 'babel-plugin-dotenv';

/* FireBase */
import firebase from 'firebase';

/* Routes */
import Routes from './src/Routes';

export default class App extends React.Component {

  /* Firebase Integration */
  componentWillMount() {
    var config = {
      apiKey: REACT_APP_API_KEY ,
      authDomain: REACT_APP_AUTH_DOMAIN,
      databaseURL: REACT_APP_DATABASE_URL,
      projectId: REACT_APP_PROJECT_ID,
      storageBucket: REACT_APP_STORAGE_BUCKET,
      messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
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
