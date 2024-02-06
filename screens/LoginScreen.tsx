import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const LoginScreen = () => {

  const [user, onChangeUser] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View >
        <ScrollView style={styles.container1}>
          <View style={styles.container2}>
            <Image
              style={styles.logo}
              source={require('../components/img/logo.png')}
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.texto}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.texto}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.texto}>Olvidaste tu usuario o contraseña</Text>
            </TouchableOpacity>
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