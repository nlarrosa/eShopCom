import React, { useContext, useEffect, useState } from 'react'
import { Image, Pressable, Text } from 'react-native'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { CartContext } from '../../contexts/CartContext'
import { globalStyles } from '../../themes/globalThemes'
import { AntDesign } from 'react-native-vector-icons';
import { CustomQuantity } from '../../components/CustomQuantity'
import { useQuantity } from '../../hooks/useQuantity'

export const CheckoutScreen = ({ navigation }) => {

    const { state } = useContext(CartContext);
    const { quantity, sumQuantity, restQuantity} = useQuantity();
    const [cantidad, setCantidad] = useState(10)



    const cartRender = (item) => {
        return (
            <View style={{
                backgroundColor: '#ccc',
                flexDirection:  'row',
                borderWidth: 3,
                justifyContent: 'center',
                alignItems:  'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                padding:10
            }}>
                <View style={{
                    flex: 1,
                    marginRight: 10
                }}>
                    <Image 
                        source={require('../../assets/photo/products/zapa_1.webp')}
                        style={{
                            width:50,
                            height: 50,
                            borderRadius: 5
                        }} 
                    />
                </View>
                <View 
                    style={{ 
                        flex:3, 
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                    <View>
                        <Text style={{ fontSize: 12, color: 'rgba(255,255,255, 0.5)',  }}>{item.category}</Text>
                        <Text style={{ fontSize: 13, color: '#fff' }}>{ item.product}</Text>
                        <Text style={{ fontSize: 14, color: '#f2058b', fontWeight: 'bold'}}>${item.price}</Text>
                    </View>
                </View>
                <View style={{ flex:2, alignItems: 'center'}}>
                    <CustomQuantity 
                        quantity={quantity}
                        sumQuantity={sumQuantity}
                        restQuantity={restQuantity}
                    />
                </View>

            </View>
        )
    }

  return (
    <View style={ globalStyles.container }>
        <FlatList 
          data={state.cart}
          renderItem={ ({item}) => cartRender(item) }
          keyExtractor={item => item.id}
        />
        {/* <View style={{
                backgroundColor: '#ccc',
                flexDirection:  'row',
                borderWidth: 3,
                justifyContent: 'center',
                alignItems:  'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                padding:10
        }}>
                <View style={{ flex:3, marginLeft: 10, alignItems: 'flex-start' }}>
                    <View style={{  marginBottom:10}}>
                        <Text style={{ fontSize: 16, fontSize: 12, color: 'rgba(255,255,255, 0.5)',  }}>Category</Text>
                        <Text style={{ fontSize: 16, fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Nombre</Text>
                        <Text style={{ fontSize: 16, fontSize: 14, color: '#f2058b', fontWeight: 'bold'}}>$23</Text>
                    </View>

                    <CustomQuantity 
                        quantity={quantity}
                        sumQuantity={sumQuantity}
                        restQuantity={restQuantity}
                    />
                </View>
                <View style={{ flex:1, alignItems: 'center'}}>
                    <Pressable 
                        onPress={() => console.log('ELIMINAR')}
                    >
                        <AntDesign name='delete'  size={26} color={'white'}/>
                    </Pressable>
                </View>

        </View> */}
    </View>
  )
}
