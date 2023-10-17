import React from 'react'
import { Image, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const CustomItemSearch = ({item}) => {

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
      }}>
        <Image style={{
            flex:1,
            height: 90,
          }}

          source={ item.photo }
          // source={{
          //   uri:'https://banner2.cleanpng.com/20190224/xoj/kisspng-scalable-vector-graphics-computer-icons-arrow-port-fast-forward-double-right-arrows-svg-png-icon-free-5c7228d4056830.5268401115509854280222.jpg'
          // }}
        
        />
        <View style={{ flex:3, marginLeft: 10   }}>
          <Text style={{ fontSize: 16, fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{ item.name }</Text>
          <Text style={{ fontSize: 16, fontSize: 12, color: 'rgba(255,255,255, 0.5)',  }}>{ item.category }</Text>
          <Text style={{ fontSize: 16, fontSize: 14, color: '#f2058b', fontWeight: 'bold'}}>${ item.price }</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center'}}>
          <AntDesign name='right' size={24} color={'#f2058b'} />
        </View>


      </View>
  )
}
