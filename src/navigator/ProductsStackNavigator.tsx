import { createStackNavigator } from '@react-navigation/stack';
import { Products } from '../screens/Products';

export type RootStackParamList = {
    Products: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products" screenOptions={{gestureEnabled: true}}>
      <Stack.Screen name="Products" options={{headerShown: false}} component={Products}/>
    </Stack.Navigator>
  )
}
