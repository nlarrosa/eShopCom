import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexBoxScreen = () => {

  return (
    <View style={ styles.container}>
        <Text style={ styles.caja1}>Caja1</Text>
        <Text style={ styles.caja2}>Caja2</Text>
        <Text style={ styles.caja3}>Caja3</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // height: 500,
        backgroundColor: 'green',
        flexDirection: 'column',
        justifyContent: 'space-around',

        // flexDirection: 'column-reverse',
        // flexDirection: 'row',
        // flexDirection: 'row-reverse',

        // alignItems: 'flex-start'

        
    },
    
    caja1: {
        flex: 1,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'white',

        //es para sobrescibir las props del padre
        // alignSelf: 'flex-start',

        
    },
    caja2: {
        flex: 1,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'white'
    },
    caja3: {
        flex: 1,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'white'
    },

});
