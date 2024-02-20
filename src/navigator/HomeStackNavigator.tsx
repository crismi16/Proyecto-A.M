import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductsScreen } from '../screens/ProductsScreen/ProductsScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{gestureEnabled: true}}>
          <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen}/>
          <Stack.Screen name="ProductsScreen" options={{headerShown: false}} component={ProductsScreen}/>
        </Stack.Navigator>
      );
}
