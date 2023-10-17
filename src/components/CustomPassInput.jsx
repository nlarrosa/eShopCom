import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


export const CustomPassInput = ({ children }) => {
  return (
    <View  style={styles.container}>
       <Feather 
            name='eye-off'  
            size={21} 
            color={'rgba(255,255,255, 0.3)'}
            style={ styles.iconSearch }
            onPress={() => console.log('password')}
        />
        <TextInput 
            style={ styles.input }
            placeholder='Password'
            placeholderTextColor={'rgba(255,255,255, 0.3)'}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    container:  {
        marginVertical: 20,
        justifyContent: 'center',
    },

    input: {
        borderWidth:  2,
        borderColor: '#f2058b',
        borderRadius: 40,
        fontSize: 15,
        color: '#fff',
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginHorizontal: 12,
        marginVertical: 12
    },

    iconSearch: {
        position: 'absolute',
        right: 30,
        zIndex: 9999999
    },
})
