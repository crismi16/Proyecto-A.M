import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../components/img/AppLaya.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo:{
        height: '100%',
        width:'100%',
      },
  });
  