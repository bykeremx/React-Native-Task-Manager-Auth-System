import { StyleSheet, Text, Pressable, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
const CustomButton = ({ title, OnpressFunc }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => { OnpressFunc() }}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default CustomButton

const styles = StyleSheet.create({


    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        marginTop: 20,
        width: '76%',
        marginBottom: 10,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'uppercase',
        letterSpacing: 1,
        textAlign: 'center',
        padding: 5,
    }
})