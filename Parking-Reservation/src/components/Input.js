import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (

        <View style = {styles.container}>
        <Text style = {styles.label}>{ label }</Text>
        
        <TextInput style = {styles.input}

        autoCorrect = {false}
        onChangeText = {onChangeText}
        placeholder = {placeholder}
        style = {styles.input}
        secureTextEntry = {secureTextEntry}
        value = {value}

        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderColor: '#eee',
        borderBottomWidth: 2,
        width: '100%',
    },

    label: {
        padding: 5,
        paddingBottom: 0,
        fontSize: 17,
        fontWeight: '700',
        color: '#333',
        width: '100%',
    },

    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        fontSize: 18,
        color: '#333',
        width: '100%',
    }
});

export { Input };