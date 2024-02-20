import {createStackNavigator} from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import {LoginScreen} from '../screens/ProfileScreen/LoginScreen';
import {RegisterScreen} from '../screens/ProfileScreen/RegisterScreen';
import {PasswordScreen} from '../screens/ProfileScreen/PasswordScreen';
import { useState } from 'react';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  PasswordScreen: undefined;
  ProfileScreen: undefined;
};

export interface User{
  id: number,
  username: string,
  email: string,
  password: string
}

const users:User[]=[
  {id:1, username:'crismi', email:'crismi@gmail.com', password:'123456'},
  {id:2, username:'vflores',email:'vflores@gmail.com', password:'12345678'}
]

const Stack = createStackNavigator<RootStackParamList>();

export const ProfileStackNavigator = () => {

  const [usersLogin, setUsersLogin]=useState(users);

  const hadlerAddUser=(user: User)=>{
    setUsersLogin([...usersLogin, user])
  }

  return (
    <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{gestureEnabled: true}}>
      <Stack.Screen name="ProfileScreen" options={{headerShown: false}} component={ProfileScreen}/>
      <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen}/>
      <Stack.Screen name="RegisterScreen" options={{headerShown: false}} component={RegisterScreen}/>
      <Stack.Screen name="PasswordScreen" options={{headerShown: false}} component={PasswordScreen}/>
    </Stack.Navigator>
  );
};
