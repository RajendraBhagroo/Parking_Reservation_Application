import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* FireBase */
import * as firebase from 'firebase';

/* Custom Components */
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';

export default class App extends React.Component {

  state = {
    email: '',
    password: '',
  }

  componentWillMount(){
    const firebaseConfig = {
      apikey: 'AIzaSyCntfGKhOaiKl8I0OKWVoB55AazqBSkcZo',
      authDomain: 'parking-reservation-c681e.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style = {styles.container}>

        <Input
          placeholder = 'Enter Email Here ... '
          label = 'Email'
          onChangeText = {email => this.setState({ email })}
          value = {this.state.email}
        />

        <Input
          placeholder = 'Enter Password Here ... '
          label = 'Password'
          secureTextEntry
          onChangeText = {password => this.setState({ password })}
          value = {this.state.password}
        />

        <Button onPress = {() => console.log('Pressed') } >Log In</Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
