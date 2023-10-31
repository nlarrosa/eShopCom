import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../../themes/globalThemes';
import { CustomModal } from '../../components/CustomModal';
import { CustomPassInput } from '../../components/CustomPassInput';
import { AuthContext } from '../../contexts/AuthContext';


export const LoginScreen = () => {

    const { login, state } = useContext(AuthContext);

    const isLogin = () => {
        login(
            'nicolas@gmail.com',
            'Nicolas10'
        )
    }

  return (
    <>
        <View style={globalStyles.container}>
            <View>
                <Image 
                    style={ styles.logo }
                    source={require('../../assets/eShop.png')}
                />
            </View>
            <View>
                <TextInput 
                    style={globalStyles.defaultInputText}
                    placeholder='Email'
                    placeholderTextColor={'rgba(255,255,255, 0.3)'}
                />
                <CustomPassInput />
            </View>
            <View>
                <TouchableOpacity
                    style= {globalStyles.defaultBtn}
                    onPress={isLogin}
                >
                    <Text style={globalStyles.defaulTextBtn}> INGRESAR </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={ globalStyles.footer }>eShopCom v1.0.0</Text>
            </View>
        </View>
        {/* <CustomModal 
            status={modal}
            title='Error de Acceso'
            msg={state.errorMessage}
        /> */}
    </>
  )
}

const styles = StyleSheet.create({

    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
})


