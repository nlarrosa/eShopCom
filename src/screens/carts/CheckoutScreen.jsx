import React from 'react'
import { Button, View } from 'react-native'

export const CheckoutScreen = ({ navigation }) => {
  return (
    
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <View>
            <Button 
                title='Ir a Inicio'
                onPress={() => navigation.popToTop()}
            />
        </View>

        <View style={{ marginVertical: 5}}>    
            <Button 
                title='Atras'
                onPress={() => navigation.pop()}
            />
        </View>
    </View>
  )
}
