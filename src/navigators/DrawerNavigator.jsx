import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/auths/ProfileScreen';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    
        <Drawer.Navigator
            screenOptions={{

            }}
        >
            <Drawer.Screen name='Home' options={{ title: 'HOME'}} component={TabsNavigator} />
            <Drawer.Screen name='Mis Pedidos' component={ProfileScreen} />
        </Drawer.Navigator>
  )
}
