import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SECONDARY_COLOR } from '../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStackNavigator } from './HomeStackNavigator';
import { ProductsStackNavigator } from './ProductsStackNavigator';
import { ProfileStackNavigator } from './ProfileStackNavigator';

export type RootBottomTabParamList = {
  HomeStackNavigator: undefined;
  ProductsStackNavigator: undefined;
  ProfileStackNavigator: undefined;
};

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='ProductsStackNavigator' 
      screenOptions={{tabBarActiveTintColor: SECONDARY_COLOR, tabBarStyle: {backgroundColor:'black'},}}>
      <Tab.Screen name="HomeStackNavigator" options={{tabBarLabel: 'Inicio',headerShown:false, tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),}} component={HomeStackNavigator} />
      <Tab.Screen name="ProductsStackNavigator" options={{tabBarLabel: 'Productos',headerShown:false,tabBarIcon: ({ color, size }) => (
            <Icon name="cupcake" color={color} size={size} />
          ),}} component={ProductsStackNavigator} />
      <Tab.Screen name="ProfileStackNavigator" options={{tabBarLabel: 'Perfil',headerShown:false,tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),}} component={ProfileStackNavigator}/>
    </Tab.Navigator>
  )
}
