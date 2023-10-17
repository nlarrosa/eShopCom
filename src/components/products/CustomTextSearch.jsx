import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export const CustomTextSearch = () => {
     return (
        <View style={ styles.containerSearch }>
            <FontAwesome5 
                name="search" 
                size={20} 
                color="#f2058b" 
                style={ styles.iconSearch }
            />
            <TextInput 
                style={ styles.inputSearch }
                placeholder='Buscar Productos'
                placeholderTextColor='rgba(255,255,255, 0.3)'
            />
        </View>
    )
}

const styles = StyleSheet.create({

    containerSearch:  {
        marginVertical: 20,
        justifyContent: 'center',
        borderColor: 'rgba(255,255,255, 0.2)',
        borderWidth: 4,
        borderRadius: 50
    },

    iconSearch: {
        position: 'absolute',
        left: 20
    },

    inputSearch: {
        borderColor:  '#f2058b',
        borderWidth: 2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 15,
        textAlign: 'center',
        color: '#fff',
        shadowColor: '#f2058b',
    }

})


