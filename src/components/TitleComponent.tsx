import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface TitleProps {
  title: string;
}

export const TitleComponent = ({title}: TitleProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
