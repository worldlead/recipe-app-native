import React, { useLayoutEffect } from 'react';


export default function RecipeScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />
    });
  }, []);

  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}