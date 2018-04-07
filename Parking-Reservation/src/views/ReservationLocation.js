import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ToastAndroid } from 'react-native';

/* Allows For Routing */
import { Actions } from 'react-native-router-flux';
import GridLayout from 'react-native-layout-grid';

export default class ReservationLocation extends React.Component {

  /*renderGridItem = (item) => 
  (
    <View style={styles.item}>
      <View style={styles.flex} />
      <Text style={styles.name}>
        {item.name}
      </Text>
    </View>
  );
  */

//readers all the times as touchable opacities
 renderGridItem = (item) => 
 (
   <View style={styles.container}>
     <View style={styles.flex} />
      <TouchableOpacity style = {styles.item} onPress = {()=>this.toast("You pressed"+item.name)}>
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
          <GridLayout
            items={items}
            itemsPerRow={10}
            renderItem={this.renderGridItem}
          />
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
});