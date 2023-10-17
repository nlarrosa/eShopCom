import React from 'react';
import { FlatList,View } from 'react-native';

import { searchData } from '../../data/searchData';
import { CustomItemSearch } from '../../components/products/CustomItemSearch';
import { globalStyles } from '../../themes/globalThemes';
import { CustomTextSearch } from '../../components/products/CustomTextSearch';


export const SearchProductScreen = () => {



  return (
    <View style={ globalStyles.container }>
        <CustomTextSearch />
        <FlatList 
          data={searchData}
          renderItem={ ({item}) => <CustomItemSearch item={item}/> }
          keyExtractor={item => item.id}
        />
    </View>
  )
}


