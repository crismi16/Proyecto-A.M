import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const ButtonComponent2 = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer2} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
