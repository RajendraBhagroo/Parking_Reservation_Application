import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ToastAndroid } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';
import GridLayout from 'react-native-layout-grid';
import PopupDialog from 'react-native-popup-dialog';
export default class ReservationLocation extends React.Component {
  state = {
    selectedTime: 0,
    selectedSpot:""
  }
  updateTime(time)
  {
    this.setState({selectedTime:time});
  }
  updateSelectedSpot(spot)
  {
    this.setState({selectedSpot:spot});
  }
  selectTime(spot)
  {
    this.setState({spot})
    this.popupDialog.show();
  }
//readers all the times as touchable opacities
 renderGridItem = (item) => 
 (
   <View style={styles.container}>
     <View style={styles.flex} />
      <TouchableOpacity style = {styles.item} onPress = {()=>this.selectTime(item.name)}>
					  <Text style = {styles.name}>{item.name}</Text>
      </TouchableOpacity>
   </View>
 );
 selectTime=(spot)=>
 {

 }

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
          <GridLayout
            items={items}
            itemsPerRow={10}
            renderItem={this.renderGridItem}
          />
          <TouchableOpacity style = {styles.loginButton} onPress = {() => this.popupDialog.show()}>
            <Text style = {styles.loginButtonText}>Test</Text>
          </TouchableOpacity>

          <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
            <View>
            <Text>{this.state.selectedSpot}</Text>
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