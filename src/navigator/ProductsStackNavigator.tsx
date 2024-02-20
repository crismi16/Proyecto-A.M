import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen/ProductsScreen';
import { CakeScreen } from '../screens/ProductsScreen/CakeScreen';

export type RootStackParamList = {
  ProductsScreen: undefined;
  CakeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProductsScreen" screenOptions={{gestureEnabled: true}}>
      <Stack.Screen name="ProductsScreen" options={{headerShown: false}} component={ProductsScreen}/>
      <Stack.Screen name="CakeScreen" options={{headerShown: false}} component={CakeScreen}/>
    </Stack.Navigator>
  )
}
