import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ToastAndroid, Picker } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';
import GridLayout from 'react-native-layout-grid';
import PopupDialog from 'react-native-popup-dialog';
export default class ReservationLocation extends React.Component {
  state = {
    selectedTime1: "12:00AM",//The beginning time
    selectedTime2:"12:00AM",//The ending time
    selectedSpot:"Default Value",//The selected spot
    cart:"cartTest" //the fomat of spots is stored as spot*BeginningTime*EndingTime
  }

  //displays the popup dialog and sets the current selected state
  popup(spot)
  {
    this.setState({selectedSpot:spot})
    this.popupDialog.show();
  }
  //adds a spot to the cart
  addSpot()
  {
    this.setState({cart:this.state.cart+" "+this.state.selectedSpot+"*"+this.state.selectedTime1+"*"+this.state.selectedTime2})
    this.popupDialog.dismiss();
  }
 renderGridItem = (item) => 
 (
   <View style={styles.container}>
     <View style={styles.flex} />
      <TouchableOpacity style = {styles.item} onPress = {()=>this.popup(item.name)}>
					  <Text style = {styles.name}>{item.name}</Text>
      </TouchableOpacity>
   </View>
 );

  render() {
    //this part is what creates the spots
    const items = [];
    for (let x = 1; x <= 30; x++) {
      items.push({
        //name: `Grid ${x}`
        name:`${x}`,
        pstatus:false
      });

    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          NYIT
        </Text>
        <View style={styles.flex}>
          {/*This portion is where the grid is created*/};
          <GridLayout items={items} itemsPerRow={10} renderItem={this.renderGridItem}/>
          {/*Debugger text remove later when delivering product*/};
         <Text>{this.cart}</Text>
          <TouchableOpacity style = {styles.loginButton} onPress = {() => this.popupDialog.show()}>
            <Text style = {styles.loginButtonText}>Test</Text>
          </TouchableOpacity>
          {/*this section is the popup selection*/};
          <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
            <View>
            <Text>{this.state.cart}</Text>
              {/*this portion selects the first time*/};
              <Picker selectedValue={this.state.selectedTime1} onValueChange={(itemValue, itemIndex) => this.setState({selectedTime1: itemValue})}>
              <Picker.Item label="12:00AM" value="0" />
              <Picker.Item label="12:30AM" value="1" />
              <Picker.Item label="1:00AM" value="2" />
              <Picker.Item label="1:30AM" value="3" />
              <Picker.Item label="2:00AM" value="4" />
              <Picker.Item label="2:30AM" value="5" />
              <Picker.Item label="3:00AM" value="6" />
              <Picker.Item label="3:30AM" value="7" />
              <Picker.Item label="4:00AM" value="8" />
              <Picker.Item label="4:30AM" value="9" />
              <Picker.Item label="5:00AM" value="10" />
              <Picker.Item label="5:30AM" value="11" />
              <Picker.Item label="6:00AM" value="12" />
              <Picker.Item label="6:30AM" value="13" />
              <Picker.Item label="7:00AM" value="14" />
              <Picker.Item label="7:30AM" value="15" />
              <Picker.Item label="8:00AM" value="16" />
              <Picker.Item label="8:30AM" value="17" />
              <Picker.Item label="9:00AM" value="18" />
              <Picker.Item label="9:30AM" value="19" />
              <Picker.Item label="10:00AM" value="20" />
              <Picker.Item label="10:30AM" value="21" />
              <Picker.Item label="11:00AM" value="22" />
              <Picker.Item label="11:30AM" value="23" />
              <Picker.Item label="12:00PM" value="24" />
              <Picker.Item label="12:30PM" value="25" />
              <Picker.Item label="1:00PM" value="26" />
              <Picker.Item label="1:30PM" value="27" />
              <Picker.Item label="2:00PM" value="28" />
              <Picker.Item label="2:30PM" value="29" />
              <Picker.Item label="3:00PM" value="30" />
              <Picker.Item label="3:30PM" value="31" />
              <Picker.Item label="4:00PM" value="32" />
              <Picker.Item label="4:30PM" value="33" />
              <Picker.Item label="5:00PM" value="34" />
              <Picker.Item label="5:30PM" value="35" />
              <Picker.Item label="6:00PM" value="36" />
              <Picker.Item label="6:30PM" value="37" />
              <Picker.Item label="7:00PM" value="38" />
              <Picker.Item label="7:30PM" value="39" />
              <Picker.Item label="8:00PM" value="40" />
              <Picker.Item label="8:30PM" value="41" />
              <Picker.Item label="9:00PM" value="42" />
              <Picker.Item label="9:30PM" value="43" />
              <Picker.Item label="10:00PM" value="44" />
              <Picker.Item label="10:30PM" value="45" />
              <Picker.Item label="11:00PM" value="46" />
              <Picker.Item label="11:30PM" value="47" />
              </Picker>
              {/*this portion selects the second time*/};
              <Picker selectedValue={this.state.selectedTime2} onValueChange={(itemValue, itemIndex) => this.setState({selectedTime2: itemValue})}>
              <Picker.Item label="12:00AM" value="0" />
              <Picker.Item label="12:30AM" value="1" />
              <Picker.Item label="1:00AM" value="2" />
              <Picker.Item label="1:30AM" value="3" />
              <Picker.Item label="2:00AM" value="4" />
              <Picker.Item label="2:30AM" value="5" />
              <Picker.Item label="3:00AM" value="6" />
              <Picker.Item label="3:30AM" value="7" />
              <Picker.Item label="4:00AM" value="8" />
              <Picker.Item label="4:30AM" value="9" />
              <Picker.Item label="5:00AM" value="10" />
              <Picker.Item label="5:30AM" value="11" />
              <Picker.Item label="6:00AM" value="12" />
              <Picker.Item label="6:30AM" value="13" />
              <Picker.Item label="7:00AM" value="14" />
              <Picker.Item label="7:30AM" value="15" />
              <Picker.Item label="8:00AM" value="16" />
              <Picker.Item label="8:30AM" value="17" />
              <Picker.Item label="9:00AM" value="18" />
              <Picker.Item label="9:30AM" value="19" />
              <Picker.Item label="10:00AM" value="20" />
              <Picker.Item label="10:30AM" value="21" />
              <Picker.Item label="11:00AM" value="22" />
              <Picker.Item label="11:30AM" value="23" />
              <Picker.Item label="12:00PM" value="24" />
              <Picker.Item label="12:30PM" value="25" />
              <Picker.Item label="1:00PM" value="26" />
              <Picker.Item label="1:30PM" value="27" />
              <Picker.Item label="2:00PM" value="28" />
              <Picker.Item label="2:30PM" value="29" />
              <Picker.Item label="3:00PM" value="30" />
              <Picker.Item label="3:30PM" value="31" />
              <Picker.Item label="4:00PM" value="32" />
              <Picker.Item label="4:30PM" value="33" />
              <Picker.Item label="5:00PM" value="34" />
              <Picker.Item label="5:30PM" value="35" />
              <Picker.Item label="6:00PM" value="36" />
              <Picker.Item label="6:30PM" value="37" />
              <Picker.Item label="7:00PM" value="38" />
              <Picker.Item label="7:30PM" value="39" />
              <Picker.Item label="8:00PM" value="40" />
              <Picker.Item label="8:30PM" value="41" />
              <Picker.Item label="9:00PM" value="42" />
              <Picker.Item label="9:30PM" value="43" />
              <Picker.Item label="10:00PM" value="44" />
              <Picker.Item label="10:30PM" value="45" />
              <Picker.Item label="11:00PM" value="46" />
              <Picker.Item label="11:30PM" value="47" />
              </Picker>
            {/*upon selected the time range this button adds the spot and time range to the cart*/};
            <TouchableOpacity style = {styles.loginButton} onPress = {() => this.addSpot()}>
            <Text style = {styles.loginButtonText}>Add</Text>
            </TouchableOpacity>

            {/*closes the popup time selection*/};
            <TouchableOpacity style = {styles.loginButton} onPress = {() => this.popupDialog.dismiss()}>
            <Text style = {styles.loginButtonText}>Close</Text>
            </TouchableOpacity>
            </View>
        </PopupDialog>

        </View>
        
      </View>
    );
  }
  toast(message) {
    ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                250
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flex: {
    flex: 2,
    
  },
  item: {
    height: 80,
    width: 40,
    backgroundColor: '#28a745',
    padding: 5,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000'
  },
  loginButton: {
    width: 300,
    backgroundColor: '#28a745',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});