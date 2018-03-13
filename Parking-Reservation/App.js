import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

export default class App extends React.Component {

  componentWillMount(){
    const firebaseConfig = {
      apikey: 'AIzaSyCntfGKhOaiKl8I0OKWVoB55AazqBSkcZo',
      authDomain: 'parking-reservation-c681e.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Parking Reservation App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
