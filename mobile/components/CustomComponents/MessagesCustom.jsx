import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const MessagesCustom = ({ status, messages }) => {
    return (
        <View style={[styles.container, {
            backgroundColor: status === 'success' ? '#abebc6' : '#e74c3c'
        }]}>
            <Feather name="alert-triangle" size={24} color="white" />
            <Text style={styles.message}>{messages}</Text>
        </View>
    )
}

export default MessagesCustom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '76%',
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap:20,
        marginLeft: 10,
        opacity:0.9,
        shadowRadius: 3.84,
        elevation: 5,
    },
    message: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'

    }
})