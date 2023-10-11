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
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#000',
                // borderTopWidth: 2,
                borderTopColor: '#000'
            },

            tabBarLabelStyle:  {
                fontSize: 15,
                color: '#fff'
            },

        }}
    >

        

        <Tab.Screen 
            name='StackNavigator' 
            component={StackNavigator}
            options={{ 
                title:'Productos',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home-circle" color={'white'} size={22}/>
                )
            }} 
        />

        <Tab.Screen 
            name='ProfileScreen' 
            component={ProfileScreen}
            options={{ 
                title:'Mi Perfil',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="face-man-profile" color={'white'} size={22}/>
                )
            }} 
        />

        <Tab.Screen 
            name='SearchScreen' 
            component={SearchProductScreen}
            options={{ 
                title:'Buscar',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="note-search" color={'white'} size={22}/>
                )
            }} 
            
        />

        
    </Tab.Navigator>
  )
}
