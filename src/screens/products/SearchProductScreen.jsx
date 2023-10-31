import React, { useEffect, useState } from 'react';
import { FlatList,View } from 'react-native';

import { searchData } from '../../data/searchData';
import { CustomItemSearch } from '../../components/products/CustomItemSearch';
import { globalStyles } from '../../themes/globalThemes';
import { CustomTextSearch } from '../../components/products/CustomTextSearch';
import { ActivityIndicator } from 'react-native';



export const SearchProductScreen = () => {

  const [productList, setProductList] = useState();

  useEffect( () => {
    const arrData = searchData.filter((data) => data.id <=9);
    setProductList(arrData);
  }, []);


  const loadMore = () => {
    const newArrData = [];
    for(let i = 0;  i <  9;  i++){
      newArrData[i] = searchData[productList.length + i];
    }

    if(productList.length <= 26){
      setProductList([...productList, ...newArrData]);
    }
  }


  const renderActivity = () => {
    return (
      <View style={{
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>
        <ActivityIndicator  size={24}  color={'#fff'} />
      </View>
    )
  }


  return (
    <View style={ globalStyles.container }>
        <CustomTextSearch />
        <FlatList 
          data={productList}
          renderItem={ ({item}) => <CustomItemSearch item={item}/> }
          keyExtractor={item => item.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderActivity}
        />
    </View>

  )
}


