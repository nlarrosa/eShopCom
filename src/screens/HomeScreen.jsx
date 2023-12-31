import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Image, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { globalStyles } from '../themes/globalThemes';

import { bannersData } from '../data/bannersData';
import { CustomCardProducts } from '../components/products/CustomCardProducts';
import { ProductContext } from '../contexts/ProductContext';
import Carousel from 'react-native-new-snap-carousel';
import { CustomModalBottom } from '../components/CustomModalBottom';



export const HomeScreen = ({ navigation }) => {

  const { getProducts, state } = useContext(ProductContext);
  const [refreshing, setRefreshing] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onRefresh =  () => {
    setRefreshing(true);
    // USAR EL LLAMADO A UN SERVICIO API O AL CUALQUIER COSA REFRESCAR
    setTimeout( () => {
        setRefreshing(false);
    }, 5000);
  };

  const onFilter = () => {
    setOpenModal(!openModal);
  }

  useEffect( () =>  {
    getProducts();
  }, []);

  const renderBanner = (item) => {
    return (
      <View style= {{
          width:380,
          height: 450,
          padding: 8,
        }}
      >
        <Image 
            style={{ width: '100%', height:'100%'}}
            source={item.photo}
        />

      </View>
    )
  }

  return (
    <View style={globalStyles.container}>

      <View style={styles.headContainer}>
          <View style={styles.head}>
            <View>
              <View style={styles.menuContainer}>
                <TouchableOpacity 
                  onPress={onFilter}
                >
                  <Ionicons name='filter-sharp'  size={28} color='#ccc'/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Carousel
              ref={(c) => { this._carousel = c; }}
              refreshControl={
                <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                />
              }
              data={bannersData}
              renderItem={({item}) => renderBanner(item)}
              sliderWidth={380}
              itemWidth={380}
              autoplay={true}
              loop={true}
              firstItem={0}
              autoplayInterval={6000}
          />
      </View>

      <View style={{ flex:1}}>
          <FlatList  
            data={state.products}
            renderItem={({item}) => <CustomCardProducts itemData={item}/>}
            keyExtractor={item => item.id}
            horizontal={true}
          />
      </View>

      <CustomModalBottom 
        status={openModal}
        onPress={onFilter}
      />
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
      width: 380,
      borderRadius: 15,
      opacity: 0.8,
      marginBottom: 15
    }
})