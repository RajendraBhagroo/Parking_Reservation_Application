import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ToastAndroid, Picker } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';

/* Allows For Interactive Grid Rendering */
import GridLayout from 'react-native-layout-grid';
import PopupDialog from 'react-native-popup-dialog';


export default class ReservationLocation extends React.Component {
  
  /*selectedTime1 = Starting time
  * selectedTime2 = End Time
  * selectedSpot = Spot to add
  * values in cart are stored as spot*startTime*endTime
  */
 
  state = {
    selectedTime1: "12:00AM",
    selectedTime2:"12:00AM",
    selectedSpot:"Default Value",
    cartArray:[]
  }

  paymentView(){
    if(this.state.cartArray.length==0){
      this.toast("You must select a spot first")
    } else {
       Actions.payment();
      }
  }

  popupReview(){
    this.popupDialogReview.show();
  }

  //displays the popup dialog and sets the current selected state
  popup(spot){ 
    if(this.state.cartArray.length<3){
      this.setState({selectedSpot:spot})
      this.popupDialog.show();
    } else {
      this.toast("You already have max values");
    }
  }

  //adds a spot to the cart
  addSpot(){
    this.state.cartArray.push({spotName:this.state.selectedSpot,startTime:this.state.selectedTime1,endTime:this.state.selecteTime2});
    this.popupDialog.dismiss();
    this.toast(String(this.state.cartArray.length));
  }

  renderGridItem = (item) => (
    <View style={styles.container}>

      <View style={styles.flex}/>

      <TouchableOpacity style = {styles.item} onPress = {()=>this.popup(item.name)}>
            <Text style = {styles.name}>{item.name}</Text>
      </TouchableOpacity>

    </View>
  );

  renderSelectedspots=(item)=> (
    <View style={styles.container}>

      <View style={styles.flex}/>

      <TouchableOpacity style ={styles.item} onPress={()=>this.toast("Pressed an item")}>
        <Text>{this.state.cartArray.length}</Text>
      </TouchableOpacity>

    </View>
  );

  toast(message){
  ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                250
                );
  }


  render(){
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

        <Text style={styles.locationBannerText}>NYIT: Parking Garage</Text>


        <View style={styles.flex}>
          

          <View style={styles.grid}>
            <GridLayout items={items} itemsPerRow={10} renderItem={this.renderGridItem}/>
          </View>


          <Text>{this.cart}</Text>


            <View style={styles.navigationButtons}>
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.paymentView()}>
                <Text style = {styles.navButtonText}>Next</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.popupReview()}>
                <Text style = {styles.navButtonText}>Review</Text>
              </TouchableOpacity>
            </View>


          <PopupDialog ref={(popupDialogReview) => { this.popupDialogReview= popupDialogReview; }}>
            <View>
              <GridLayout items={this.state.cartArray} itemsPerRow={1} renderItem={this.renderSelectedspots}/>
              <Text>PopupDialogReview</Text>
            </View>
          </PopupDialog>


          <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
            
            <View style={styles.modalSelection}>

              <Text>{this.state.cartArray.length}</Text>
            
              <Picker selectedValue={this.state.selectedTime1} onValueChange={(itemValue, itemIndex) => this.setState({selectedTime1: itemValue})}>
                <Picker.Item label="12:00AM" value="0"/>
                <Picker.Item label="12:30AM" value="1"/>
                <Picker.Item label="1:00AM"  value="2"/>
                <Picker.Item label="1:30AM"  value="3"/>
                <Picker.Item label="2:00AM"  value="4"/>
                <Picker.Item label="2:30AM"  value="5"/>
                <Picker.Item label="3:00AM"  value="6"/>
                <Picker.Item label="3:30AM"  value="7"/>
                <Picker.Item label="4:00AM"  value="8"/>
                <Picker.Item label="4:30AM"  value="9"/>
                <Picker.Item label="5:00AM"  value="10"/>
                <Picker.Item label="5:30AM"  value="11"/>
                <Picker.Item label="6:00AM"  value="12"/>
                <Picker.Item label="6:30AM"  value="13"/>
                <Picker.Item label="7:00AM"  value="14"/>
                <Picker.Item label="7:30AM"  value="15"/>
                <Picker.Item label="8:00AM"  value="16"/>
                <Picker.Item label="8:30AM"  value="17"/>
                <Picker.Item label="9:00AM"  value="18"/>
                <Picker.Item label="9:30AM"  value="19"/>
                <Picker.Item label="10:00AM" value="20"/>
                <Picker.Item label="10:30AM" value="21"/>
                <Picker.Item label="11:00AM" value="22"/>
                <Picker.Item label="11:30AM" value="23"/>
                <Picker.Item label="12:00PM" value="24"/>
                <Picker.Item label="12:30PM" value="25"/>
                <Picker.Item label="1:00PM"  value="26"/>
                <Picker.Item label="1:30PM"  value="27"/>
                <Picker.Item label="2:00PM"  value="28"/>
                <Picker.Item label="2:30PM"  value="29"/>
                <Picker.Item label="3:00PM"  value="30"/>
                <Picker.Item label="3:30PM"  value="31"/>
                <Picker.Item label="4:00PM"  value="32"/>
                <Picker.Item label="4:30PM"  value="33"/>
                <Picker.Item label="5:00PM"  value="34"/>
                <Picker.Item label="5:30PM"  value="35"/>
                <Picker.Item label="6:00PM"  value="36"/>
                <Picker.Item label="6:30PM"  value="37"/>
                <Picker.Item label="7:00PM"  value="38"/>
                <Picker.Item label="7:30PM"  value="39"/>
                <Picker.Item label="8:00PM"  value="40"/>
                <Picker.Item label="8:30PM"  value="41"/>
                <Picker.Item label="9:00PM"  value="42"/>
                <Picker.Item label="9:30PM"  value="43"/>
                <Picker.Item label="10:00PM" value="44"/>
                <Picker.Item label="10:30PM" value="45"/>
                <Picker.Item label="11:00PM" value="46"/>
                <Picker.Item label="11:30PM" value="47"/>
              </Picker>
              
              <Picker selectedValue={this.state.selectedTime2} onValueChange={(itemValue, itemIndex) => this.setState({selectedTime2: itemValue})}>
                <Picker.Item label="12:00AM" value="0"/>
                <Picker.Item label="12:30AM" value="1"/>
                <Picker.Item label="1:00AM"  value="2"/>
                <Picker.Item label="1:30AM"  value="3"/>
                <Picker.Item label="2:00AM"  value="4"/>
                <Picker.Item label="2:30AM"  value="5"/>
                <Picker.Item label="3:00AM"  value="6"/>
                <Picker.Item label="3:30AM"  value="7"/>
                <Picker.Item label="4:00AM"  value="8"/>
                <Picker.Item label="4:30AM"  value="9"/>
                <Picker.Item label="5:00AM"  value="10"/>
                <Picker.Item label="5:30AM"  value="11"/>
                <Picker.Item label="6:00AM"  value="12"/>
                <Picker.Item label="6:30AM"  value="13"/>
                <Picker.Item label="7:00AM"  value="14"/>
                <Picker.Item label="7:30AM"  value="15"/>
                <Picker.Item label="8:00AM"  value="16"/>
                <Picker.Item label="8:30AM"  value="17"/>
                <Picker.Item label="9:00AM"  value="18"/>
                <Picker.Item label="9:30AM"  value="19"/>
                <Picker.Item label="10:00AM" value="20"/>
                <Picker.Item label="10:30AM" value="21"/>
                <Picker.Item label="11:00AM" value="22"/>
                <Picker.Item label="11:30AM" value="23"/>
                <Picker.Item label="12:00PM" value="24"/>
                <Picker.Item label="12:30PM" value="25"/>
                <Picker.Item label="1:00PM"  value="26"/>
                <Picker.Item label="1:30PM"  value="27"/>
                <Picker.Item label="2:00PM"  value="28"/>
                <Picker.Item label="2:30PM"  value="29"/>
                <Picker.Item label="3:00PM"  value="30"/>
                <Picker.Item label="3:30PM"  value="31"/>
                <Picker.Item label="4:00PM"  value="32"/>
                <Picker.Item label="4:30PM"  value="33"/>
                <Picker.Item label="5:00PM"  value="34"/>
                <Picker.Item label="5:30PM"  value="35"/>
                <Picker.Item label="6:00PM"  value="36"/>
                <Picker.Item label="6:30PM"  value="37"/>
                <Picker.Item label="7:00PM"  value="38"/>
                <Picker.Item label="7:30PM"  value="39"/>
                <Picker.Item label="8:00PM"  value="40"/>
                <Picker.Item label="8:30PM"  value="41"/>
                <Picker.Item label="9:00PM"  value="42"/>
                <Picker.Item label="9:30PM"  value="43"/>
                <Picker.Item label="10:00PM" value="44"/>
                <Picker.Item label="10:30PM" value="45"/>
                <Picker.Item label="11:00PM" value="46"/>
                <Picker.Item label="11:30PM" value="47"/>
              </Picker>
            
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.addSpot()}>
                <Text style = {styles.navButtonText}>Add</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.popupDialog.dismiss()}>
                <Text style = {styles.navButtonText}>Close</Text>
              </TouchableOpacity>

            </View>

        </PopupDialog>


        <PopupDialog ref={(popupDialogReview) => { this.popupDialogReview = popupDialogReview; }}>
          
          <View>
            <Text>{this.state.cartArray.length}</Text>
            <GridLayout items={this.state.cartArray} itemsPerRow={1} renderItem={this.renderSelectedspots}/>
          </View>

        </PopupDialog>

      </View>
        
    </View>
    );
  }
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  locationBannerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 25
  },

  flex: {
    flex: 2  
  },

  grid: {
    marginTop: 40,
    marginBottom: 40
  },

  item: {
    height: 80,
    width: 40,
    backgroundColor: '#28a745',
    padding: 5
  },

  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000'
  },

  modalSelection: {
    alignItems: 'center',
    justifyContent:'center',
  },

  navigationButtons: {
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 20
  },

  navButton: {
    width: 300,
    backgroundColor: '#28a745',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

});