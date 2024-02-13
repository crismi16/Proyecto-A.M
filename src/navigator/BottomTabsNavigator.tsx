import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/LoginScreen';
import { Home } from '../screens/Home';
import { Products } from '../screens/Products';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileStackNavigator } from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: PRIMARY_COLOR}}>
      <Tab.Screen name="Home" options={{tabBarLabel: 'Inicio',headerShown:false, tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),}} component={Home} />
      <Tab.Screen name="Products" options={{tabBarLabel: 'Productos',headerShown:false,tabBarIcon: ({ color, size }) => (
            <Icon name="cupcake" color={color} size={size} />
          ),}} component={Products} />
      <Tab.Screen name="LoginScreen" options={{tabBarLabel: 'Perfil',headerShown:false,tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),}} component={ProfileStackNavigator}/>
    </Tab.Navigator>
  )
}
