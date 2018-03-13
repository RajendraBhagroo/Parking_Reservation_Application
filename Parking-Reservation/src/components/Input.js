import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return {

        <View style = {style.container}>
        <Text>Label</Text>
        
        <TextInput

        autoCorrect = {false}
        onChangeText = {onChangeText}
        placeholder = {placeholder}
        style= {styles.input}
        secureTextEntry = {secureTextEntry}
        value = {value}

        />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        witdth: '100%',
        border: '#eee',
        borderBottomWidth: 2,
    },

    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#333',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },

    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color:
        fontSize:
        fontWeight:
        width:
    }
})