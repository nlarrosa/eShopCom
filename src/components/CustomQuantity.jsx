import React, { useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Pressable } from 'react-native';
import { AntDesign } from "react-native-vector-icons";
import { useQuantity } from '../hooks/useQuantity';

export const CustomQuantity = ({ quantity,  restQuantity, sumQuantity }) => {


  return (

    <View style={{
        flexDirection: "row",
        // borderWidth: 1.2,
        borderColor: "#fff",
        borderRadius: 5
        }}
    >
        <Pressable 
            style={{ alignItems: "center" }}
            onPress={ restQuantity }
        >
            <AntDesign name="minussquare" size={25} color="rgba(255, 255, 255, 0.5)" />
        </Pressable>

        <View
        style={{
            alignItems: "center",
            minWidth: 50
        }}
        >
            <Text
                style={{
                color: "#fff",
                fontSize: 19,
                fontWeight: "bold",
                // marginHorizontal: 12,
                }}
            >
                { quantity }
            </Text>
        </View>

        <Pressable
            style={{alignItems: "center"}}
            onPress={ sumQuantity }
        >
            <AntDesign name="plussquare" size={25} color="rgba(255, 255, 255, 0.5)" />
        </Pressable>
    </View>
    
  )
}
