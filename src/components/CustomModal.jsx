import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { globalStyles } from '../themes/globalThemes';

export const CustomModal = () => {

    const [visible, setVisible] = useState(true)

  return (
    <View>
        <Modal 
            animationType="slide"
            visible={visible}
            transparent={true}
            hardwareAccelerated={true}
        >
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0, 0.6)'
                // marginTop:  20,
            }}>
                <View  style={{
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
                }}>
                    <Feather name='x-octagon' size={35} color={'#f2058b'} />
                    <Text style={{ 
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginVertical: 10
                    }}>
                        Error de Acceso
                    </Text> 
                    <Text style={{ fontSize: 15, textAlign: 'center'}}>Los datos del usuario son incorrectos</Text>  
                    <View>
                        <Pressable style={globalStyles.defaultBtn} onPress={() => setVisible(!visible)}>
                            <Text style={ globalStyles.defaulTextBtn }> Cerrar  </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}
