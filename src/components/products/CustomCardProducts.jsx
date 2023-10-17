import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { ProductsScreen } from '../../screens/products/ProductsScreen';
import { useNavigation } from '@react-navigation/native';

export const CustomCardProducts = ({itemData}) => {

    const {  navigate } =  useNavigation();

    return (
      <Pressable
        style={{
          marginHorizontal:5,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 5
        }}
        onPress={() => navigate(ProductsScreen)}
      >

        <View style={{
          height: 210,
          width: 160,
          padding: 8
        }}>
          <View>
            <Image
              source={ itemData.photo}
              style={{
                width:'100%',
                height: 130,
                marginBottom:5
              }}
            />
          </View>
          <View style={{
            paddingHorizontal:3,
            marginTop: 3,
          }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{ itemData.name }</Text>
            <Text style={{ fontSize: 12, color: 'rgba(255,255,255, 0.5)',  }}>{ itemData.category }</Text>
            <Text style={{ fontSize: 18, color: '#f2058b', fontWeight: 'bold'}}>${ itemData.price }</Text>
          </View>
          <View>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
        </View>
      
      </Pressable>
    )
}
