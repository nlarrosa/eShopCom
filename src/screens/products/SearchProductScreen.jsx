import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { searchData } from '../../data/searchData';
import { ItemProducts } from '../../components/ItemProducts';
import { Search } from '../../components/search';

export const SearchProductScreen = () => {



  return (
    <View style={ styles.container }>

        <Search />
        <FlatList 
          data={searchData}
          renderItem={ ({item}) => <ItemProducts item={item}/> }
          keyExtractor={item => item.id}
          // ListHeaderComponent= {() => <Text   style={{ color: 'white'}}> BUSCADOR DE PRODUCTOS</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 10
    }

})
