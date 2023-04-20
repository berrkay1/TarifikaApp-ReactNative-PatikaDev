import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from '../Hook/useFetch';
import Loading from '../components/Loading'
import Error from '../components/Error'

const Detail = ({ route }) => {
  const { idMeal } = route.params;

  const { data, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const item = data?.meals[0];


  { loading && <Loading /> }

  { error !== null && <Error /> }

  return (

    <ScrollView style={styles.container} >
      <Image style={styles.image} source={{ uri: item?.strMealThumb }} />
      <View style={styles.title_body}>
        <Text style={styles.title}>{item?.strMeal}</Text>
        <Text style={styles.country}>{item?.strArea}</Text>
      </View>
      <Text style={styles.desc}>{item?.strInstructions}</Text>

    </ScrollView>

  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 2.5,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#A52A2A',

  },
  country: {
    fontSize: 19,
    fontWeight: '600',
    color: '#A52A2A',

  },
  title_body: {
    borderBottomColor: '#ccc',
    borderWidth: 1,
    padding: 8
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    padding: 5
  }
})