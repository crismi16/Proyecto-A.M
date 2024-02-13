import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigator/ProfileStackNavigator';
import { ButtonComponent } from '../components/ButtonComponent';

interface Props extends StackScreenProps<RootStackParamList,'LoginScreen'>{};

export const LoginScreen = ({navigation}:Props) => {

  const [user, onChangeUser] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <View >
        <ScrollView style={styles.container1}>
          <View style={styles.container2}>
            <Image
              style={styles.logo}
              source={require('../img/logo.png')}
            />
            <Text style={styles.texto}>Usuario:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUser}
              value={user}
              placeholder="cristiant"
            />
            <Text style={styles.texto}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="******"
            />
            <ButtonComponent title='INICIAR SESIÓN' onPress={()=>navigation.navigate('LoginScreen')}/>
            <ButtonComponent title='REGISTRARSE' onPress={()=>navigation.navigate('RegisterScreen')}/>
            <ButtonComponent title='Olvidaste tu usuario o contraseña' onPress={()=>navigation.navigate('PasswordScreen')}/>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#28c4d9',
    justifyContent:'center',
  },
  container1:{
    // backgroundColor:'darkorange',
    height:420,
  },
  container2:{
    // backgroundColor:'green',
    alignItems:'center',
    height:420,
    marginVertical:40,
  },
  logo:{
    height: 100,
    width:300,
    margin:20,
    resizeMode:'contain',
  },
  texto:{
    color:'black',
    textAlign:'center',
  },
  input: {
    color:'black',
    width:200,
    height: 40,
    marginVertical:10,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    backgroundColor:'#28c4d9',
    padding:10,
  }
});