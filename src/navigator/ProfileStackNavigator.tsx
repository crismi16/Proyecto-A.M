import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

export type RootStackParamList = {
    LoginScreen:undefined,
    RegisterScreen:undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{gestureEnabled:true}}>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" options={{headerShown:false}} component={RegisterScreen} />
    </Stack.Navigator>
  )
}
