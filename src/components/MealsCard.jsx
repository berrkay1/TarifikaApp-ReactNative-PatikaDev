import { Dimensions, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const MealsCard = ({ mealItem,onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress} >
            <Image style={styles.image} source={{ uri: mealItem.strMealThumb }} />
            <Text style={styles.title}>{mealItem.strMeal}</Text>
        </Pressable>
    )
}

export default MealsCard

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 4,
        borderRadius: 12,
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        padding: 5,
        position: 'relative',
        borderRadius: 12,
    },
    title: {
        position: 'absolute',
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.4)',
        bottom: 0,
        width: Dimensions.get('window').width / 1.05,
        padding: 10,


    }
})