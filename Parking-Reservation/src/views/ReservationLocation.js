import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ToastAndroid, Picker } from 'react-native';

/* Allows For Routing Between Views */
import { Actions } from 'react-native-router-flux';

/* Allows For Interactive Grid Rendering */
import GridLayout from 'react-native-layout-grid';
import PopupDialog from 'react-native-popup-dialog';


export default class ReservationLocation extends React.Component {
  
  /*selectedTime1 = Starting time
  * selectedTime2 = End Time
  * selectedSpot  = Spot to add
  * values in cart are stored as spot*startTime*endTime
  */
 
  state = {
    selectedTime1: "0",
    selectedTime2:"0",
    selectedSpot:"Default Value",
    cartArray:[]
  }
 
  convertValtoTime(value){
    
    var timeVal;
    
    switch(value){
      case "0":
        timeVal="12:00AM";
        break;
      case "1":
        timeVal="12:30AM";
        break;
      case "2":
        timeVal="1:00AM";
        break;
      case "3":
        timeVal="1:30AM";
        break;
      case "4":
        timeVal="2:00AM";
        break;
      case "5":
        timeVal="2:30AM";
        break;
      case "6":
        timeVal="3:00AM";
        break;
      case "7":
        timeVal="3:30AM";
        break;
      case "8":
        timeVal="4:00AM";
        break;
      case "9":
        timeVal="4:30AM";
        break;
      case "10":
        timeVal="5:00AM";
        break;
      case "11":
        timeVal="5:30AM";
        break;
      case "12":
        timeVal="6:00AM";
        break;
      case "13":
        timeVal="6:30AM";
        break;
      case "14":
        timeVal="7:00AM";
        break;
      case "15":
        timeVal="7:30AM";
        break;
      case "16":
        timeVal="8:00AM";
        break;
      case "17":
        timeVal="8:30AM";
        break;
      case "18":
        timeVal="9:00AM";
        break;
      case "19":
        timeVal="9:30AM";
        break;
      case "20":
        timeVal="10:00AM";
        break;
      case "21":
        timeVal="10:30AM";
        break;
      case "22":
        timeVal="11:00AM";
        break;
      case "23":
        timeVal="11:30AM";
        break;
      case "24":
        timeVal="12:00PM";
        break;
      case "25":
        timeVal="12:30PM";
        break;
      case "26":
        timeVal="1:00PM";
        break;
      case "27":
        timeVal="1:30PM";
        break;
      case "28":
        timeVal="2:00PM";
        break;
      case "29":
        timeVal="2:30PM";
        break;
      case "30":
        timeVal="3:00PM";
        break;
      case "31":
        timeVal="3:30PM";
        break;
      case "32":
        timeVal="4:00PM";
        break;
      case "33":
        timeVal="4:30PM";
        break;
      case "34":
        timeVal="5:00PM";
        break;
      case "35":
        timeVal="5:30PM";
        break;
      case "36":
        timeVal="6:00PM";
        break;
      case "37":
        timeVal="6:30PM";
        break;
      case "38":
        timeVal="7:00PM";
        break;
      case "39":
        timeVal="7:30PM";
        break;
      case "40":
        timeVal="8:00PM";
        break;
      case "41":
        timeVal="8:30PM";
        break;
      case "42":
        timeVal="9:00PM";
        break;
      case "43":
        timeVal="9:30PM";
        break;
      case "44":
        timeVal="10:00PM";
        break;
      case "45":
        timeVal="10:30PM";
        break;
      case "46":
        timeVal="11:00PM";
        break;
      case "47":
        timeVal="11:30PM";
        break;
      default:
        timeVal="Error";
    }
    return timeVal;
  }
  
  /* Redirects User To Payment View */
  paymentView(){
    if(this.state.cartArray.length==0){
      this.toast("You must select a spot first")
    } else {
       Actions.payment({cart:this.state.cartArray});
      }
  }
  
  /* Pop Up That Allows User To View And Delete Any Reservations They Do Not Want */
  popupReview(){
    this.forceUpdate();
    if(this.state.cartArray.length==0)
    {
      this.toast("You need to select at least one spot")
    }
    else{
    this.popupDialogReview.show();
    }
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
    this.state.cartArray.push({spotName:this.state.selectedSpot,startTime:this.state.selectedTime1,endTime:this.state.selectedTime2});
    this.popupDialog.dismiss();
  }

  removeSpot(spotID,sTime,eTime){
    for(let y=0;y<this.state.cartArray.length;y++)
    {
      if(spotID==this.state.cartArray[y].spotName && sTime==this.state.cartArray[y].startTime && eTime==this.state.cartArray[y].endTime)
      {
        this.toast("Found a match");
        this.state.cartArray.splice(y,1);
        break;
      }
 
    }
    
    this.popupDialogReview.dismiss();
  }

  renderGridItem = (item) => (
    <View>
      <TouchableOpacity style = {styles.spot} onPress = {()=>this.popup(item.name)}>
            <Text style = {styles.modalButtonText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  renderSelectedspots=(item)=> (
    <View>
      <TouchableOpacity style ={styles.SelectedSpot} onPress={()=>this.removeSpot(item.spotName,item.startTime,item.endTime)}>
        <Text style= {styles.modalButtonText}>Spot:{item.spotName} Time:{this.convertValtoTime(item.startTime)}-{this.convertValtoTime(item.endTime)}</Text>
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
        <Text style={styles.modalButtonText}>NYIT: Parking Garage</Text>

        <Text>{this.cart}</Text>

        <View>
          <View style={styles.grid}>
            <GridLayout items={items} itemsPerRow={10} renderItem={this.renderGridItem}/>
          </View>


          <Text>{this.cart}</Text>


            <View style={styles.navButtonGroup}>
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.paymentView()}>
                <Text style = {styles.navButtonText}>Next</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.popupReview()}>
                <Text style = {styles.navButtonText}>Review</Text>
              </TouchableOpacity>
            </View>


          <PopupDialog ref={(popupDialogReview) => { this.popupDialogReview= popupDialogReview; }}>
            <View>
            <Text style ={styles.modalButtonText}>Click a spot to remove</Text>
              <GridLayout items={this.state.cartArray} itemsPerRow={1} renderItem={this.renderSelectedspots}/>
              <TouchableOpacity style = {styles.navButton} onPress = {() => this.popupDialogReview.dismiss()}>
                <Text style = {styles.navButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </PopupDialog>


          <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>       
            <View>
            
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
            
              <View style ={styles.modalButtonGroup}>
                <TouchableOpacity style = {styles.modalButton} onPress = {() => this.addSpot()}>
                  <Text style = {styles.modalButtonText}>Add</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.modalButton} onPress = {() => this.popupDialog.dismiss()}>
                  <Text style = {styles.modalButtonText}>Close</Text>
                </TouchableOpacity>
              </View>

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
    backgroundColor: '#292a2b',
  },

  locationBannerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 25
  },

  grid: {
    marginTop: 40,
    marginBottom: 40,
    width: '100%'
  },
  SelectedSpot: {
    height: 55,
    width: 250,
    backgroundColor: '#28a745',
    padding: 5,
    justifyContent: 'center'
  },

  spot: {
    height: 80,
    width: 40,
    backgroundColor: '#28a745',
    padding: 10,
    justifyContent: 'center'
  },

  spotText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    paddingVertical: 25
  },

  modalButtonGroup: {
    alignItems: 'center',
    justifyContent:'center',
    top: 25
  },

  modalButton: {
    width: 300,
    backgroundColor: '#28a745',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  navButtonGroup: {
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