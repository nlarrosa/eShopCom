import React from 'react'
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { globalStyles } from '../themes/globalThemes';

import { searchData } from '../data/searchData';
import { useNavigation } from '@react-navigation/native';
import { ProductsScreen } from './products/ProductsScreen';
import { CustomCardProducts } from '../components/products/CustomCardProducts';



export const HomeScreen = ({ navigation }) => {

  const { navigate } = useNavigation();
  return (
    <View style={globalStyles.container}>

      <View style={styles.headContainer}>
          <View style={styles.head}>
            <View style={{
              // flexDirection: 'row',
            }}>
              <View style={styles.menuContainer}>
                <TouchableOpacity  >
                  <Ionicons name='filter-sharp'  size={28} color='#ccc'/>
                </TouchableOpacity>
              </View>
              {/* <View style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255, 0.1)',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                borderRadius: 10,
                padding: 10
              }}>
                <TouchableOpacity  style={styles.menuBtn}>
                  <SimpleLineIcons name='user'  size={28} color='#ccc'/>
                  <Text style={styles.menuBtnText}> Hombre </Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </View>

          <Image 
            style={styles.headImage}
            source={require('../assets/photo/banners/mujeres.jpg')}
          />
      </View>

      <View style={{ flex:1}}>
        {/* <View style={globalStyles.defaultDividrTitile}>
          <Text style={globalStyles.defaultDivideTitleText}>Ofertas del Mes</Text>
        </View> */}
          <FlatList  
            data={searchData}
            renderItem={({item}) => <CustomCardProducts itemData={item}/>}
            keyExtractor={item => item.id}
            horizontal={true}
          />
      </View>
    </View>
  )
}


const styles  =  StyleSheet.create({

    headContainer: {
      flex:2, 
      justifyContent:'center', 
      alignItems: 'center'
    },

    head: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      top:0,
      alignItems:'flex-end'
    },

    menuContainer: {
      backgroundColor: '#f2058b',
      marginHorizontal: 10,
      borderRadius: 10,
      padding: 10,
      zIndex:999,
      alignSelf:'center',
      marginTop: 10
    },

    menuBtn: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuBtnText: { 
      fontSize: 17, 
      fontWeight: '500', 
      color: '#ccc'
    },

    headImage: { 
      flex:1, 
      width: '100%',
      borderRadius: 15,
      opacity: 0.8,
      marginBottom: 15
    }
})