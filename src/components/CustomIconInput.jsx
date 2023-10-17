import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export const CustomIconInput = () => {

    const [viewPw, setViewPw] = useState(true);
    const [icon, setIcon] = useState('eye-off');
    const [opacity, setOpacity] = useState('0.3')

    const handleViewPw = () => {
        if (viewPw) {        
            setViewPw(false);
            setIcon('eye');
            setOpacity('1')
        } else {
            setViewPw(true)
            setIcon('eye-off')
            setOpacity('0.3')
        }
    }


  return (
    <View style={styles.container}>
        <Pressable 
        onPress={() => handleViewPw()}
        style={styles.iconPass}
        >
        <Feather 
        name={icon} 
        size={20} 
        color={`rgba(255,255,255, ${opacity})`} 
        />
        </Pressable>
       
        <TextInput 
            style={styles.inputText}
            placeholder='Pasword'
            placeholderTextColor={`rgba(255,255,255, 0.3)`}
            secureTextEntry={viewPw}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
    },

    inputText:  {
        borderWidth:2,
        borderColor: '#f2058b',
        borderRadius: 40,
        paddingVertical: 5,
        marginHorizontal: 15,
        marginVertical: 12,
        paddingHorizontal: 12,
        color: '#fff'
    },

    iconPass:  {
        position: 'absolute',
        right: 30,
        zIndex: 9999
    }

});