import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

export default function MenuImage({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.headerButtonContainer}>
      <Image
        style={styles.headerButtonImage}
        source={require('../../assets/icons/menu.png')}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  headerButtonContainer: {
    padding: 10
  },
  headerButtonImage: {
    justifyContent: 'center',
    width: 25,
    height: 25,
    margin: 6
  }
});