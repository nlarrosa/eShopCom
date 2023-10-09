import React from 'react'
import { Button, Text, View } from 'react-native'

export const HomeScreen = ({ navigation }) => {


  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Button 
            title='Ir a Productos'
            onPress={() => navigation.navigate('ProductsScreen', {
                id: 1200,
                name: 'Zapatillas'
            })}
        />
    </View>
  )
}
