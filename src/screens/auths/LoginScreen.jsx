import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { globalStyles } from '../../themes/globalThemes';
import { InputIcon } from '../../components/InputIcon';


export const LoginScreen = () => {
  return (
    
    <View style={[
        globalStyles.container, 
        { justifyContent: 'center'}
        ]}
    >
        <View>
            <Image 
                style={styles.logo}
                source={require('../../assets/eShop.png')}
            />
        </View>
        <View>
            <TextInput 
                style={ globalStyles.inputText }
                placeholder='Email'
                placeholderTextColor='rgba(255,255,255, 0.3)'
            />
            
            <InputIcon>
                <Feather 
                    name='eye-off'  
                    size={24} 
                    color={'rgba(255,255,255, 0.3)'}
                />
            </InputIcon>
        </View>
        <View>
            <TouchableOpacity
                style={ globalStyles.touchableBtn }
            >
                <Text style={ globalStyles.textBtn }>Ingresar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    logo: {
        width: 230,
        height: 230,
        alignSelf: 'center'
    }
})
