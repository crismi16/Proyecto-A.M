import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen/ProductsScreen';
import { CakeScreen } from '../screens/ProductsScreen/CakeScreen';
import { CookieScreen } from '../screens/ProductsScreen/CookieScreen';

export type RootStackParamList = {
  ProductsScreen: undefined;
  CakeScreen: undefined;
  CookieScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProductsScreen" screenOptions={{gestureEnabled: true}}>
      <Stack.Screen name="ProductsScreen" options={{headerShown: false}} component={ProductsScreen}/>
      <Stack.Screen name="CakeScreen" options={{headerShown: false}} component={CakeScreen}/>
      <Stack.Screen name="CookieScreen" options={{headerShown: false}} component={CookieScreen}/>
    </Stack.Navigator>
  )
}
