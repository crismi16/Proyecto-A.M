import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Products } from '../screens/Products';

export type RootStackParamList = {
    Home: undefined;
    Products: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{gestureEnabled: true}}>
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
          <Stack.Screen name="Products" options={{headerShown: false}} component={Products}/>
        </Stack.Navigator>
      );
}
