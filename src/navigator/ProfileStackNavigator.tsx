import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { PasswordScreen } from '../screens/PasswordScreen';

export type RootStackParamList = {
    LoginScreen:undefined,
    RegisterScreen:undefined,
    PasswordScreen:undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{gestureEnabled:true}}>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" options={{headerShown:false}} component={RegisterScreen} />
      <Stack.Screen name="PasswordScreen" options={{headerShown:false}} component={PasswordScreen} />
    </Stack.Navigator>
  )
}
