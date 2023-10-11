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
                borderTopColor: '#000',
            },

            tabBarLabelStyle:  {
                fontSize: 15,
                color: '#fff',
                fontSize: 0
            },

            tabBarActiveTintColor: '#f2058b',
            tabBarLabelStyle: { textAlign: 'center' },
            tabBarIndicatorStyle: {
              borderBottomColor: '#C2D5A8',
              borderBottomWidth: 2,
            }

        }}
    >

        

        <Tab.Screen 
            name='StackNavigator' 
            component={StackNavigator}
            options={{ 
                title:'Productos',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home-circle" color={'rgba(255, 255,255,0.3)'} size={28}/>
                )
            }} 
        />

        <Tab.Screen 
            name='ProfileScreen' 
            component={ProfileScreen}
            options={{ 
                title:'Mi Perfil',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="face-man-profile" color={'rgba(255, 255,255,0.3)'} size={28}/>
                )
            }} 
        />

        <Tab.Screen 
            name='SearchScreen' 
            component={SearchProductScreen}
            options={{ 
                title:'Buscar',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="note-search" color={'rgba(255, 255,255,0.3)'} size={28}/>
                )
            }} 
            
        />

        
    </Tab.Navigator>
  )
}
