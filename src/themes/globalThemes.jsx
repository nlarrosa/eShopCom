import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 15
    },

    inputText: {
        borderWidth:  2,
        borderColor: '#f2058b',
        borderRadius: 40,
        fontSize: 15,
        color: '#fff',
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginHorizontal: 12,
        marginVertical: 12
    },

    touchableBtn: {
        backgroundColor: '#f2058b',
        fontSize: 15,
        color: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginVertical: 12
    },

    textBtn: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    }
      
})