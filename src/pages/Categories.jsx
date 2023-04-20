import { FlatList, StyleSheet, View } from 'react-native'
import CategoriesCart from '../components/CategoriesCart'
import useFetch from '../Hook/useFetch'
import Loading from '../components/Loading'
import Error from '../components/Error'
const Categories = ({ navigation }) => {

  const { data, error, loading } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');


  const onPress = (strCategory, strCategoryDescription) => {
    navigation.navigate('MealsPage', { strCategory, strCategoryDescription });

  }

  const renderCategoriesCart = ({ item }) => <CategoriesCart categori={item} onPress={() => onPress(item.strCategory, item.strCategoryDescription)} />


  { loading && <Loading /> }

  { error !== null && <Error /> }

  return (
    <View style={styles.container}>

      <FlatList
        data={data?.categories}
        renderItem={renderCategoriesCart}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    display: 'flex',
    alignItems: 'center'
  },
  item: {
    color: 'red',
    fontSize: 22
  },
  title: {
    backgroundColor: '#ccc',
  }
})