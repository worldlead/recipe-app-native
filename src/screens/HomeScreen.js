import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image, SafeAreaView } from 'react-native';
import MenuImage from '../components/MenuImage';
import { recipes } from '../data/dataArrays';
import { RecipeCard } from '../AppStyles';
import { getCategoryName } from '../data/MockDataAPI';
export default function HomeScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage onPress={() => {
          navigation.openDrawer();
        }} />
      ),
      headerRight: () => <View />
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Home", { item });
  };

  const renderRecipes = ({ item }) => (
    <Pressable underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </Pressable>
  );


  return (
    <SafeAreaView>
      <FlatList
        vertical 
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
      <Text>wefwef</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
});
