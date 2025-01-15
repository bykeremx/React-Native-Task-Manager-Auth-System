import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="blue"
        animating={true}
      ></ActivityIndicator>
    </View>
  )
}

export default CustomLoading

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000050',
        zIndex: 10000,
    },
  
})