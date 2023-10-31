import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { globalStyles } from '../themes/globalThemes';


export const CustomLoading = () => {

  return (
    <View style={[globalStyles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color='#f2058b' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
