import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Alert, TouchableOpacity, Image } from 'react-native';

/* Import Custom Components */
import Logo from '../components/Logo';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';

export default class Payment extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      TextInputName: '',
      Email:         '',
      TextInputCard: '',
      TextInputDate: '',
      CVV:           '',
    };
  }

 Cancel = () => {
    Alert.alert('Test');
 };

  Payit = () => {
    const { TextInputName } = this.state;
    const { Email }         = this.state;
    const { TextInputCard } = this.state;
    const { TextInputDate } = this.state;
    const { CVV }           = this.state;

    if (TextInputName == '' || Email == '' || TextInputCard == '' || TextInputDate == '' || CVV == ''){
      Alert.alert('Please Provide All Information');
    } else {
      if (isFinite(this.state.TextInputName) || TextInputName.length < 3) {
        Alert.alert('Please Entire A Valid Name');
      } else {
        if (isNaN(this.state.TextInputCard) || TextInputCard.length < 12) {
          Alert.alert('Please Enter A Valid Number');
        } else {
          if (isNaN(this.state.TextInputDate) || TextInputDate.length != 4) {
            Alert.alert('Please Enter A Valid Date');
          } else {
            if (isNaN(this.state.CVV) || CVV.length > 4|| CVV.length < 3) {
              Alert.alert('Please Enter A Valid CVV');
            } else {
              Alert.alert('Success!', 'You have Register Your Spot!');
            }
          }
        }
      }
    }
  };


  render() {
    return (
      <View style={styles.container}>

        <Logo/>

        <Text style={styles.letter}> Name </Text>
        <TextInput
          placeholder="As it appears on your card"
          placeholderTextColor="rgba(255,255,255,0.5)"
          onChangeText={TextInputName => this.setState({ TextInputName })}
          style={styles.input}
        />

        <Text style={styles.letter}> Email </Text>
        <TextInput
          placeholder="Get Notification"
          placeholderTextColor="rgba(255,255,255,0.5)"
          onChangeText={Email => this.setState({ Email })}
          style={styles.input}
        />

        <Text style={styles.letter}> Card Number </Text>
        <TextInput
          placeholder="No dashes or spaces"
          placeholderTextColor="rgba(255,255,255,0.5)"
          onChangeText={TextInputCard => this.setState({ TextInputCard })}
          style={styles.input}
        />


        <View style={styles.column1}>
          <Text style={styles.letter}> Expire date</Text>
          <Text style={styles.letter}> CVV </Text>
        </View>

        <View style={styles.column2}>
          <TextInput
            placeholder="MMYY"
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChangeText={TextInputDate => this.setState({ TextInputDate })}
            style={styles.short}
          />
          <TextInput
            placeholder="XXX"
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChangeText={CVV => this.setState({ CVV })}
            style={styles.short}
          />
        </View>
        

        <TouchableOpacity onPress={this.Payit}>
          <Text style={styles.pay}>Pay</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.Cancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>

      </View>
      
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0097e6',
    padding: 20
  },

  logo: {
    marginLeft:'35%',
    width:100,
    height:100,
  },
 
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 15
  },

  letter: {
    color: '#ffffb3',
    fontSize: 20,
    marginTop: 20
  },

  pay: {
    color: '#bfff00',
    fontSize: 20,
    paddingTop:5,
    marginLeft: '30%',
    backgroundColor:'#3377ff',
    textAlign:'center',
    paddingVertical:5,
    width:70
  },

   cancel: {
    color: '#feca57',
    fontSize: 20,
    paddingTop:5,
    marginLeft: '30%',
    textAlign:'center',
    paddingVertical:5,
    width:70,
    textDecorationLine: 'underline'
  },

  short:{
   height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign:'center',
    width:70
  },

  column1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  column2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});
