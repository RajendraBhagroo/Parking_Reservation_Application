import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Alert, TouchableOpacity, Image } from 'react-native';

/* FireBase */
import firebase from 'firebase';

/* Import Custom Components */
import Logo from '../components/Logo';

/* Allows For Routing Between Views */
import { Actions } from 'react-native-router-flux';


/* This View Is Used To Finalize Reservation Spots And Validate User Payment Info, Sending Reserved Spots To Firebase NoSQL Database & Returning The User To The Main Menu */
export default class Payment extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      TextInputName: '',
      Email:         '',
      TextInputCard: '',
      TextInputDate: '',
      CVV:           '',
      FinalCart:     this.props.cart
    };
  }

  /* Method Validates User Information And Returns User To Main Menu Upon Success. Also Sends Reservation Objects [JSON] To Firebase NoSQL Database Under Specific User ID */
  paymentProcessing = () => {
    if(this.paymentVerification()){

      firebase.database().ref('reservations/' + firebase.auth().currentUser.uid ).set({
       User_Reservations_Cart: this.state.FinalCart
      });
      
      Actions.mainMenu();
    } else {
      Alert.alert('Information Could Not Be Validated. Please Try Again');
    }
  }

  /* Method Runs If User Hits 'Cancel Payment' Button */  
  Cancel = () => {
    Actions.reservationLocation();
  }

  /* This Method Performs The ACTUAL Validation Of User Information. Boolean Value Is Sent To paymentProcessing() Method  */
  paymentVerification = () => {
    const { TextInputName } = this.state;
    const { Email }         = this.state;
    const { TextInputCard } = this.state;
    const { TextInputDate } = this.state;
    const { CVV }           = this.state;

    Vibration.vibrate(20);

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
              Alert.alert('Success!', 'You have Register Your Spot!\nThe Receipt was Sent by Email.');
              return true;

              firebase.auth().signOut()
              .then( (res) => {
                Actions.login();
              }).catch( (error) =>
                this.toast(error));

            }
          }
        }
      }
    }
  };


  /* Presents User With Inputs For Payment Validation, Redirects To Login Screen If Successful */
  render() {
    return (
      <View style={styles.container}>

        <Logo/>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder           = "As It Appears On Your Card"
            placeholderTextColor  = "rgba(255,255,255,0.5)"
            onChangeText          = {TextInputName => this.setState({ TextInputName })}
            style                 = {styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder          = "Enter Email For E-Receipts"
            placeholderTextColor = "rgba(255,255,255,0.5)"
            onChangeText         = {Email => this.setState({ Email })}
            style                = {styles.input}
          />

          <Text style={styles.label}>Card Number</Text>
          <TextInput
            placeholder          = "No dashes or spaces"
            placeholderTextColor = "rgba(255,255,255,0.5)"
            onChangeText         = {TextInputCard => this.setState({ TextInputCard })}
            style                = {styles.input}
          />
          
          <Text style={styles.label}>Expire date</Text>
          <TextInput
            placeholder          = "MMYY"
            placeholderTextColor = "rgba(255,255,255,0.5)"
            onChangeText         = {TextInputDate => this.setState({ TextInputDate })}
            style                = {styles.input}
          />

          <Text style={styles.label}>CVV</Text>
          <TextInput
            placeholder          = "XXX"
            placeholderTextColor = "rgba(255,255,255,0.5)"
            onChangeText         = {CVV => this.setState({ CVV })}
            style                = {styles.input}
          />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={this.paymentProcessing}>
            <Text style={styles.paymentButton}>Confirm Payment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.Cancel}>
            <Text style={styles.cancelText}>Cancel Payment</Text>
          </TouchableOpacity>
        </View>

      </View>  
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0097e6',
    width: '100%',
    height: '100%',
  },
 
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 15,
    width: '100%'
  },

  label: {
    color: '#ffffb3',
    fontSize: 20,
    marginTop: 10,
    textAlign:'center'
  },

  formGroup: {
    alignItems:'center',
    justifyContent:'space-around'
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  paymentButton: {
    color: '#bfff00',
    fontSize: 20,
    paddingTop:5,
    marginLeft: '30%',
    backgroundColor:'#3377ff',
    textAlign:'center',
    paddingVertical:5,
    width:70
  },

   cancelText: {
    color: '#feca57',
    fontSize: 20,
    paddingTop:5,
    marginLeft: '30%',
    textAlign:'center',
    paddingVertical:5,
    width:70,
    textDecorationLine: 'underline'
  }

});
