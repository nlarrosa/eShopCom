import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'

export const ProductsScreen = (props) => {

    const navigation  =  useNavigation();
    
    const { route  } = props;
    const { params } = route;

  return (

    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Button 
            title='Ir a Checkout'
            onPress={() => navigation.navigate('CheckoutScreen')}
        />

        <Text> ID: { params.id  }</Text>
        <Text> PRODUCTO: { params.name  }</Text>
    </View>
  )
}
