import { Dimensions, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CategoriesCart = ({ categori, onPress }) => {


    return (
        <Pressable style={styles.container} onPress={onPress} >
            <Image style={styles.image} source={{ uri: categori.strCategoryThumb }} />
            <Text style={styles.title}>{categori.strCategory}</Text>
        </Pressable>
    )
}

export default CategoriesCart

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: Dimensions.get('window').width / 1.05,
        height: 100,
        backgroundColor: '#ECEFF1',
        borderWidth: 1,
        borderColor: '#C0B0AB',
        borderTopLeftRadius: 45,
        borderBottomLeftRadius: 45,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row'
    },
    image: {
        borderRadius: 50,
        resizeMode: 'contain',
        flex: 2,
        padding: 5
    },
    title: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        fontWeight: '600',
        display: 'flex',
        padding: 20,
        paddingTop: 20,

    }
})