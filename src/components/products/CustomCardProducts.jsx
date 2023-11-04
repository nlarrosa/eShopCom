import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { ProductsScreen } from '../../screens/products/ProductsScreen';
import { AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export const CustomCardProducts = ({itemData}) => {

    const { navigate } =  useNavigation();
    const photo = `../../assets/photo/products/${itemData.photo}`;
    const [favorite, setFavorite] = useState(0);

    const onPresFavorite = (id) => {
      setFavorite(id);
    }

    return (
      <Pressable
        style={{
          marginHorizontal:5,
          backgroundColor: 'rgba(255,255,255,0.1)',
          // borderColor: 'rgba(255,255,255,0.1)',
          // borderWidth:2,
          borderRadius: 15
        }}
        onPress={() => navigate('ProductsScreen', {
          itemData,
        })}
      >

        <View style={{
          height: 200,
          width: 160,
          padding: 10
        }}>
          <View>
            <Image
              source={require('../../assets/photo/products/zapa_1.webp')}
              style={{
                width:'100%',
                height: 130,
                marginBottom:5,
                borderRadius: 10,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{
            paddingHorizontal:3,
            marginTop: 3,
          }}>
            <Text style={{ fontSize: 10, color: 'rgba(255,255,255, 0.5)',  }}>{ itemData.categories.category}</Text>
            <Text style={{ fontSize: 10, color: '#fff'}}>{ itemData.name }</Text>
            <Text style={{ fontSize: 12, color: '#f2058b'}}>${ itemData.price }.00</Text>
          </View>

          <Pressable 
            onPress={() => onPresFavorite(itemData.id)}
          >
            <View style={{
              backgroundColor: 'rgba(255,255,255, 0.1)',
              paddingHorizontal: 15,
              paddingVertical:10,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 25,
              borderBottomRightRadius: 15,
              position: 'absolute',
              bottom: -32,
              right: -11
            }}>
              <Text style={{ fontSize: 20}}>
                <AntDesign name={favorite == itemData.id ? 'heart' : 'hearto'} size={18} color={favorite == itemData.id ? '#f2058b' : '#fff'} />
              </Text>
            </View>
          </Pressable>
        </View>
      
      </Pressable>
    )
}
