import React from 'react';
import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../commons/constantsColor';

export const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: PRIMARY_COLOR,
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: SECONDARY_COLOR,
    fontSize: 27,
    fontWeight: 'bold',
  },
  bodyContainer: {
    backgroundColor: SECONDARY_COLOR,
    height: '88%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  inputText: {
    backgroundColor: PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal:30,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:30,
    marginHorizontal: 10,
  },
  buttonText: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  imagen: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  formContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  result: {
    color: SECONDARY_COLOR,
    backgroundColor: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal:30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
