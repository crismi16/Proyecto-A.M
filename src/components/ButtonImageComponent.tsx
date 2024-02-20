import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import {styles} from '../theme/appTheme';

interface ButtonProps {
  title: string;
  pathImage: string;
  onPress: () => void;
}

export const ButtonImageComponent = ({title, pathImage, onPress}: ButtonProps) => {
  return (
    <View >
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.imagen1} source={{uri:pathImage}}/>
      </TouchableOpacity>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};