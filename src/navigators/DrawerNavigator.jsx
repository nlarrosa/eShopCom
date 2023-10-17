import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/auths/ProfileScreen';
import { TabsNavigator } from './TabsNavigator';
import { LoginScreen } from '../screens/auths/LoginScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const [isLogin, setIsLogin] = useState(true);

  if(isLogin)  {
        return (
        

            <Drawer.Navigator>
                <Drawer.Screen name='Home' options={{ title: 'HOME', headerShown:false}} component={TabsNavigator} />
                <Drawer.Screen name='Mis Pedidos' component={ProfileScreen} />
            </Drawer.Navigator>
      )
  }

  if(!isLogin)  {
    return (
    

        <Drawer.Navigator>
            <Drawer.Screen name='Home' options={{ title: 'LOGIN', headerShown: false}} component={LoginScreen} />
            {/* <Drawer.Screen name='Mis Pedidos' component={ProfileScreen} /> */}
        </Drawer.Navigator>
  )
}
}
