import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const PositionModelScreen = () => {

    // const { width, height } = Dimensions.get('window');
    const { width, height } = useWindowDimensions();

  return (
    <View>
        <View style={styles.container}>
            <Text  style={ styles.cajaRoja }></Text>
            <Text  style={ styles.cajaAzul}></Text>
            <Text  style={ styles.cajaAmarilla}></Text>
            <Text  style={ styles.cajaNaranja}></Text>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 15}}>W: { width }  , H: { height } </Text>
    </View>

  )
}

const styles = StyleSheet.create({

    container:  {
        height: 600,
        backgroundColor: 'green',
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    cajaRoja: {
        backgroundColor: 'red',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth: 5,
        position: 'absolute',
        top: 0,
        right: 0
        // top - bottom - left - rigth
        // top: -50,
        // left:  50,
        

    },
    cajaAzul: {
        backgroundColor: 'blue',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth: 5,
        top:0,
    },

    cajaAmarilla: {
        backgroundColor: 'yellow',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth: 5,
        position: 'absolute',
        bottom:0,
        right: 0
    },

    cajaNaranja: {
        backgroundColor: 'orange',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth: 5,
        position: 'absolute',
        bottom:0,
    }
    
})
