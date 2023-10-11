import React from 'react'
import { TextInput, View } from 'react-native'

export const Search = () => {
     return (
        <View style={{
            marginVertical: 20,
        }}>
            <TextInput 
            style={{
                borderColor:  '#f2058b',
                borderWidth: 2,
                borderRadius: 50,
                paddingVertical: 3,
                paddingHorizontal: 15,
                textAlign: 'center',
            }}
            placeholder='Buscar Productos'
            placeholderTextColor='#ddd'
            // keyboardType='numeric'
            // keyboardType='email-address'
            />
        </View>
    )
}


