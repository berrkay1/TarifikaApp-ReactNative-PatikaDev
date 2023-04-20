import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from '../Hook/useFetch';
import MealsCard from '../components/MealsCard';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Meals = ({ route, navigation }) => {

  const { strCategory, strCategoryDescription } = route.params;

  const { data, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);

  const onPress = (idMeal) => {
    navigation.navigate('DetailPage', { idMeal });

  }

  const renderedMealsCard = ({ item }) => <MealsCard mealItem={item} onPress={() => onPress(item.idMeal)} />

  { loading && <Loading /> }

  { error !== null && <Error /> }


  return (
    <View style={styles.container}>
      <FlatList data={data?.meals}
        renderItem={renderedMealsCard}
      />
    </View>
  )
}

export default Meals

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    display: 'flex',
    alignItems: 'center'
  }
})