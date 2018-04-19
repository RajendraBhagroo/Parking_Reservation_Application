import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, Text,  Alert,  TouchableOpacity,  Image} from 'react-native';
export default class Payment extends React.Component {
/* THINGS NEED TO CHANGE
  Since my android device does not work, please redirect to other pages if require,
  Published just make sure it runes, adjust color later.
  Switch LOGO if require
*/
  constructor(props) {
    super(props);
    this.state = {
      TextInputName: '',
      Email: '',
      TextInputCard: '',
      TextInputDate: '',
      CVV: '',
    };
  }
//******* CANCEL button, redirect to main menu / Parking_Reservation
 Cancel = () => {
    Alert.alert('Test');
 };


// Pay button reaction
  Payit = () => {
    const { TextInputName } = this.state;
    const { Email } = this.state;
    const { TextInputCard } = this.state;
    const { TextInputDate } = this.state;
    const { CVV } = this.state;

    if (
      TextInputName == '' ||Email == '' ||TextInputCard == '' || TextInputDate == '' ||  CVV == '' ) {
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
//============================================================================================
  render() {
    return (
     
<View style={styles.container}>

    // ******LOGO image, switch if require
      <Image
      style={styles.logo}
      source={require('/Parking_Reservation_Logo.png')}
      />
// input boxes==================================================================================
        <Text style={styles.letter}> Name</Text>
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
//============================================================================================

//============================================================================================
//separted Expire date and CVV, margin into one row 
        <View style={styles.colomn1}>
          <Text style={styles.letter}> Expire date</Text>
          <Text style={styles.letter}> CVV </Text>
        </View>

        <View style={styles.colomn2}>
          <TextInput
            placeholder="MMYY"
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChangeText={TextInputDate => this.setState({ TextInputDate })}
            style={styles.input}
          />
          <TextInput
            placeholder="XXX"
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChangeText={CVV => this.setState({ CVV })}
            style={styles.input}
          />
        </View>
        
//============================================================================================
//Two Buttons
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
//============================================================================================
//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20,
    paddingTop: 100,
  },
  logo:{
    width:100,
    height:100,
    marginLeft:"35%",
  },
 
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  letter: {
    color: '#ffffb3',
    fontSize: 20,
    marginTop: 20,
  },
  pay: {
    color: '#bfff00',
    fontSize: 25,
    paddingTop:10,
    marginLeft: '30%',
    backgroundColor:'#3377ff',
    textAlign:'center',
    paddingVertical:15,
    width:100,
  },
   cancel: {
    color: '#feca57',
    fontSize: 20,
    paddingTop:20,
    marginLeft: '30%',
    
    textAlign:'center',
    paddingVertical:15,
    width:100,
    textDecorationLine: 'underline'
  },
//---------------------------------------
//margin into one row ( expire date + CVV)
  colomn1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colomn2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
