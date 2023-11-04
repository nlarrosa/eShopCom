import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Constants from "expo-constants";

import { globalStyles } from '../../themes/globalThemes';
import { CustomModal } from '../../components/CustomModal';
import { CustomPassInput } from '../../components/CustomPassInput';
import { AuthContext } from '../../contexts/AuthContext';



export const LoginScreen = () => {

    const API_KEY = Constants.expoConfig.extra.apiKey;
    const { login, state } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            email: Yup.string()
                    .email('El formato del email  es incorrecto')
                    .required('El campo email  es  requerido'),
            password: Yup.string()
                    .required('El campo password es requerido')
                    .min(8, 'password requiere minimo 8 caracteres')
        }),
        onSubmit: (values) => {
            login(
                formik.values
            )
            
        }
    })


    // const isLogin = () => {
    //     login(
    //         'nicolas@gmail.com',
    //         'Nicolas10'
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
                    inputMode='email'
                    name='email'
                    onChangeText={(value) => formik.setFieldValue('email', value)}
                />
                { formik.errors.email &&  (
                <Text style={{
                    color: '#f2058b',
                    textAlign: 'center',
                    fontSize: 17
                }}>
                    { formik.errors.email }
                </Text>
                )}

                <CustomPassInput  name={'password'} formik={formik}/>
            </View>
            <View>
                <TouchableOpacity
                    style= {globalStyles.defaultBtn}
                    onPress={formik.handleSubmit}
                >
                    <Text style={globalStyles.defaulTextBtn}> INGRESAR </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={ globalStyles.footer }>{ API_KEY }</Text>
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


