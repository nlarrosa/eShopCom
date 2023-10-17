import React from 'react';
import { Image,ScrollView,Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../themes/globalThemes';
import { MaterialIcons, AntDesign } from 'react-native-vector-icons';

export const ProductsScreen = () => {
  return (
    
    <View style={ globalStyles.container} >
      <View style={{
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image 
          source={require('../../assets/photo/products/zapa_1.webp')}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </View>


      <View style={{
          flex:2,
          marginTop: 20,
          justifyContent: 'center',
          // borderWidth: 1,
          // borderColor: 'white'
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Nombre del producto</Text>
        <Text style={{ fontSize: 15, color: 'rgba(255,255,255, 0.5)',  }}>category</Text>
        <Text style={{ fontSize: 21, color: '#f2058b', fontWeight: 'bold'}}>$100.00</Text>
      </View>
      
      <View 
        style={{
          flex:2,
          flexDirection:'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        { [36, 37, 38, 39, 40].map( (item) =>  (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: 12,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.5)',
              marginRight: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'rgba(255,255,255,0.5)',}}>{ item }</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          flex:1,
          flexDirection:'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          // borderWidth: 1,
          // borderColor: 'white'
        }}
      >
      { ['#fff', '#000', '#f76caf', '#00b2bd'].map( (item) =>  (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: item,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.5)',
              marginRight: 5,
              borderRadius: 100,
            }}
          >
            <Text style={{ color: 'rgba(255,255,255,0.5)', width:30, height:30}}></Text>
          </TouchableOpacity>
        ))}
      </View>


        <View style={{
          alignItems: 'flex-start',
          marginVertical: 20,
          alignItems:'flex-start'
        }}>
          <View>
          <Text style={{ fontSize: 15, color: 'rgba(255,255,255, 0.5)', marginBottom:5  }}>Cantidad</Text>
          </View>
          <View 
            style={{
              flexDirection:'row',
              borderWidth: 1.2,
              borderColor:'#fff',
            }}
          >
            <TouchableOpacity 
              style={{
                alignItems: 'center',
              }}
            >
              <AntDesign name='minussquare' size={28} color='#fff'/>
            </TouchableOpacity >

            <View 
              style={{
                alignItems: 'center',
              }}
            >
              <Text style={{ color:'#fff', fontSize:19, fontWeight:'bold', marginHorizontal:12}}>0</Text>
            </View>

            <TouchableOpacity 
              style={{
                alignItems: 'center',
              }}
            >
              <AntDesign name='plussquare' size={28} color='#fff'/>
            </TouchableOpacity>
          </View>
      </View>


      <View style={{
        flexDirection:'row',
      }}>
        <View
          style={{
            flex:1,
            justifyContent: 'center',  
            marginTop: 10,
            marginBottom:30
          }}
        >  
          <TouchableOpacity
            style={{
              backgroundColor: '#f2058b',
              alignItems: 'center',
              fontSize: '17',
              fontWeight: '600',
              color:'#fff',
              paddingHorizontal:10,
              paddingVertical: 10,
              borderRadius:5,
            }}

          >
            <Text style={globalStyles.defaulTextBtn}>AGREGAR AL CARRITO</Text>
          </TouchableOpacity>
        </View>
        
      </View>


      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}> 
          <Text style={{ fontSize:30, fontWeight:'bold', color: 'rgba(255,255,255,0.5)', marginBottom:10}}>4.8</Text>
          <MaterialIcons name='star' color='yellow'  size={30} />
          <Text style={{ color: 'rgba(255,255,255,0.5)'}}> | 1265 comentarios</Text>
      </View>




        <View style={{
          flex:2,
        }}>
          <ScrollView>
            <Text
              style={{ color: 'rgba(255,255,255,0.5)',  fontSize:16}}
            >
              Evenly distribute children within the alignment container 
              along the main axis. The spacing between each pair of adjacent 
            </Text>
          </ScrollView>
        </View>
    </View>
  )
}
