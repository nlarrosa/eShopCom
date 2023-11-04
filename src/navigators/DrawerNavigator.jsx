import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext, useEffect, useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/auths/ProfileScreen';
import { TabsNavigator } from './TabsNavigator';
import { LoginScreen } from '../screens/auths/LoginScreen';
import { AuthContext } from '../contexts/AuthContext';
import { CustomLoading } from '../components/CustomLoading';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const { state, checkToken } = useContext(AuthContext);

  // useEffect( () => {
  //   checkToken();
  // },[])

  // if(state.isLoading){
  //   return (<CustomLoading />)
  // }

  // if(true)  {
  //       return (
        
  //           <Drawer.Navigator>
  //               <Drawer.Screen name='Home' options={{ title: 'HOME', headerShown:false}} component={TabsNavigator} />
  //               <Drawer.Screen name='Mis Pedidos' component={ProfileScreen} />
  //           </Drawer.Navigator>
  //     )
  // }

  // if(!state.isLogged)  {
    return (
    

        <Drawer.Navigator>
            <Drawer.Screen name='Home' options={{ title: 'LOGIN', headerShown: false}} component={LoginScreen} />
            {/* <Drawer.Screen name='Mis Pedidos' component={ProfileScreen} /> */}
        </Drawer.Navigator>
  )
// }
}
