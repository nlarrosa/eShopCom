import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import { AntDesign} from 'react-native-vector-icons';
import Slider from '@react-native-community/slider';
import { Divider } from 'react-native-paper';

export const CustomModalBottom = ({status, onPress}) => {

    const [slideCompletionValue, setSlideCompletionValue] = useState(0);
    const [filterType, setFilterType] = useState('Mujer');

    const typeCategory = (item) => {
        setFilterType(item);
    }

  return (
    <View>
        <Modal 
            animationType="slide"
            visible={status}
            transparent={true}
            hardwareAccelerated={true}
        >
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <View style={{
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    // marginHorizontal: 10,
                    padding: 20,
                    height: '55%',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    shadowColor: '#000',
                    elevation: 2,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    }
                }}>
                    <View style={{ 
                        width: '100%', 
                        flex:1, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        paddingVertical: 7,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <Text style={{ fontSize: 25, textAlign:'center', color: '#fff'}}>Filtrar</Text>
                    </View>
                    <View 
                        style={{
                            justifyContent: 'center',
                            alignItems:  'center',
                            flex: 3,
                            flexDirection: 'row',
                        }}
                    >
                        { ['Mujer','Hombre','Kids'].map( (item) => (
                        <Pressable key={item} 
                            onPress={() => typeCategory(item)}
                            style={{
                                borderWidth: 2, 
                                borderColor: filterType == item ? '#f2058b' : 'rgba(255,255,255,0.5)',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                marginHorizontal: 5,
                                flex:2
                            }}
                        >
                            <Text style={{ fontSize: 15,  color:'rgba(255,255,255,0.5)'}}>{ item }</Text>
                        </Pressable>
                        ))}
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 2
                    }}>
                        <Text style={{ fontSize: 19,  color:'#fff'}}>Valor: ${ slideCompletionValue.toFixed(3) }</Text>
                        <Slider
                            style={{width: 300, height: 40}}
                            minimumValue={8.000}
                            maximumValue={50.000}
                            minimumTrackTintColor="#f2058b"
                            maximumTrackTintColor="#fff"
                            thumbTintColor='#f2058b'
                            step={1}
                            onSlidingStart={(value) => setSlideCompletionValue(value)}
                            onSlidingComplete={value => {
                                setSlideCompletionValue(value);
                            }}

                        />
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 3,
                        flexDirection: 'row',
                        paddingHorizontal: 30
                    }}>
                        <Pressable 
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal:15,
                                borderRadius: 10,
                                backgroundColor: "#f2058b",
                                borderWidth: 2,
                                flex: 1,
                                justifyContent: "center",
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{
                                fontSize: 19,
                                color: "#fff",
                            }}>Buscar</Text>
                        </Pressable>
                    </View>
                    
                    <Pressable
                        onPress={onPress}
                    >
                        <Text style={{ color: '#fff'}}>CERRAR</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({

    containerModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.6)'
    },

    cardModal: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 30,
        padding: 40,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },

    titleModal: { 
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },

    msgModal: { 
        fontSize: 15, 
        textAlign: 'center'
    }
})

CustomModalBottom.propTypes = {
    status: PropTypes.bool.isRequired,
    title:  PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
}

CustomModalBottom.defaultProps = {
    status: false,
    title:  'ERROR!',
    msg: 'Error en el sistema'
}