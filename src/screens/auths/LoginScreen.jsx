import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../../themes/globalThemes';
import { CustomModal } from '../../components/CustomModal';
import { CustomPassInput } from '../../components/CustomPassInput';


export const LoginScreen = () => {

    // const showAlert  = () => {
    //     Alert.alert(
    //         'Error Acceso',
    //         'Los datos ingresados son incorrectos',
    //         [
    //             {
    //                 text: 'Cancelar',
    //                 onPress: ()  => Alert.alert(
    //                     'Usuario Bloqueado',
    //                     'Elusuario se inhabilito',
    //                     [
    //                         {
    //                             text: 'Cerrar',
    //                             style: 'cancel'
    //                         }
    //                     ]
    //                 ),
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'OK',
    //                 onPress: ()  => console.log('OK'),
    //                 style: 'default'
    //             },
    //         ]
    //     )
    // }
    
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
                    onPress={() => {}}
                >
                    <Text style={globalStyles.defaulTextBtn}> INGRESAR </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={ globalStyles.footer }>eShopCom v1.0.0</Text>
            </View>
        </View>
        <CustomModal />
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


