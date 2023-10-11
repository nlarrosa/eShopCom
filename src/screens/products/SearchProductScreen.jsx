import React from 'react';
import { FlatList,View } from 'react-native';

import { searchData } from '../../data/searchData';
import { ItemProducts } from '../../components/products/ItemProducts';
import { globalStyles } from '../../themes/globalThemes';
import { InputSearch } from '../../components/products/InputSearch';


export const SearchProductScreen = () => {



  return (
    <View style={ globalStyles.container }>
        <InputSearch />
        <FlatList 
          data={searchData}
          renderItem={ ({item}) => <ItemProducts item={item}/> }
          keyExtractor={item => item.id}
        />
    </View>
  )
}


