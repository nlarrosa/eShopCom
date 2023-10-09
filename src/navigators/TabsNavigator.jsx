import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SearchProductScreen } from '../screens/products/SearchProductScreen';
import { ProfileScreen } from '../screens/auths/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {


  return (
    
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#000',
                borderTopWidth: 2,
                borderTopColor: 'red'
            },

            tabBarLabelStyle:  {
                fontSize: 15,
                color: '#fff'
            },

        }}
    >

        <Tab.Screen 
            name='SearchScreen' 
            component={SearchProductScreen}
            options={{ 
                title:'Buscar',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="file-find-outline" color={'white'} size={22}/>
                )
            }} 
            
        />

        <Tab.Screen name='ProfileScreen' options={{ title:'Mi Perfil'}} component={ProfileScreen}/>
        <Tab.Screen name='StackNavigator' options={{ title:'Productos'}} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
