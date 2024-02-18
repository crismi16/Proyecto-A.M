import React from 'react';
import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR} from '../commons/constantsColor';

export const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: '100%',
    alignSelf:'center',
    marginTop: 20,
    resizeMode: 'contain',
  },
  titleContainer: {
    backgroundColor: SECONDARY_COLOR,
    // height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 27,
    fontWeight: 'bold',
  },
  bodyContainer: {
    backgroundColor: PRIMARY_COLOR,
    // alignItems: 'center',
    padding:20,
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  inputText: {
    backgroundColor: TEXT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal:30,
    borderRadius: 10,
  },
  buttonContainer2: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:30,
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal:30,
    marginBottom:30,
    alignSelf:'center',
  },
  buttonText: {
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  imagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom:30,
  },
  formContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  result: {
    color: TEXT_COLOR,
    backgroundColor: SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal:30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
