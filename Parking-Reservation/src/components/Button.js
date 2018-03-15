import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress = {onPress} style = {styles.button}>
          <Text style = {styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    button: {
        marginTop: 10,
        padding: 20,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: '#00aeef',
        width: '100%',
    },

    text: {
        fontWeight: '700',
        fontSize: 18,
        color: 'white',
    }

});

export { Button };