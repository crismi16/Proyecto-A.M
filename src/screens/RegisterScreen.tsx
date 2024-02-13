import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegisterScreen = () => {

  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [user, onChangeUser] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm, onChangeConfirm] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Image
            style={styles.logo}
            source={require('../img/logo.png')}
          />
          <Text style={styles.texto}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFirstName}
            value={firstName}
            placeholder="Cristian"
          />
          <Text style={styles.texto}>Apellido:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLastName}
            value={lastName}
            placeholder="Torres"
          />
          <Text style={styles.texto}>Celular:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="0987654321"
            keyboardType="numeric"
          />
          <Text style={styles.texto}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="cristiantorres@gmail.com"
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
          <Text style={styles.texto}> Confirme la contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirm}
            value={confirm}
            placeholder="******"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.texto}>REGISTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.texto}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#28c4d9',
  },
  container1:{
    backgroundColor:'#28c4d9',
    alignItems:'center',
    width:'100%',
    marginVertical:20,
  },
  logo:{
    height: 100,
    width:300,
    resizeMode:'contain'
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