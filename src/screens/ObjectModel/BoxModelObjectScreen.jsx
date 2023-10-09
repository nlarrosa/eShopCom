import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { stylesGral } from '../../css/theme';

export const BoxModelObjectScreen = () => {

  return (
    <View>
        <View  style={styles.container}>
            {/* Asi se combina los distintos tipos de estilos*/}
            <Text style={[styles.title, stylesGral.title, { margin: 30}]}>Hola Mundo</Text>
        </View>
        <View  style={ styles.container}>
            <Text style={styles.title}>Hola Mundo</Text>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'green',
    },

    title: {
        borderWidth: 2,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    }
});



