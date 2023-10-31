import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import { globalStyles } from '../themes/globalThemes';

export const CustomModal = ({status, title, msg}) => {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(!visible)
    }, [status])
    

  return (
    <View>
        <Modal 
            animationType="slide"
            visible={visible}
            transparent={true}
            hardwareAccelerated={true}
        >
            <View style={styles.containerModal}>
                <View  style={styles.cardModal}>
                    <Feather name='x-octagon' size={35} color={'#f2058b'} />
                    <Text style={styles.titleModal}>{ title }</Text> 
                    <Text style={styles.msgModal}>{msg}</Text>  
                    <View>
                        <Pressable style={globalStyles.defaultBtn} onPress={() => setVisible(!visible)}>
                            <Text style={ globalStyles.defaulTextBtn }>Cerrar</Text>
                        </Pressable>
                    </View>
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

CustomModal.propTypes = {
    status: PropTypes.bool.isRequired,
    title:  PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
}

CustomModal.defaultProps = {
    status: false,
    title:  'ERROR!',
    msg: 'Error en el sistema'
}