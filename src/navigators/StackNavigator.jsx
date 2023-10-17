import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { CheckoutScreen } from '../screens/carts/CheckoutScreen';
import { LoginScreen } from '../screens/auths/LoginScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {


  return (
    <Stack.Navigator
        // initialRouteName='ProductsScreen'
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: '#fff'
            },

            headerStyle: {
                borderBottomColor: '#000',
                borderBottomWidth: 1,
                elevation: 5,
                shadowColor: '#000',
            }
        }}
    >
        <Stack.Screen name="HomeScreen"  component={HomeScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
    
  )
}
